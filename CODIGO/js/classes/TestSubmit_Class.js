class TestSubmit {
    constructor(entityName) {
        this.entityName = entityName;
        this.estructura = window[entityName + "_estructura"];
        this.testSubmitData = window[entityName + "_TestSubmit"];
        this.entityInstance = null;
        this.validateFields = new ValidateFieldsForm();

        try {
            var EntityClass = window[entityName];
            if (typeof EntityClass === "function") {
                this.entityInstance = new EntityClass();
            }
        } catch (e) {
            this.entityInstance = null;
        }
    }

    run() {
        var results = this.runAllSubmitTests();

        var overlay = document.getElementById("result_overlay");
        var title = document.getElementById("result_modal_title");
        var body = document.getElementById("result_modal_body");

        if (!overlay || !title || !body) return;

        title.textContent = "Test de Submit - " + this.entityName;

        this.results = results;
        this.renderSummary();

        overlay.hidden = false;
    }

    renderSummary() {
        var body = document.getElementById("result_modal_body");
        if (!body) return;

        body.innerHTML = this.buildSummaryHTML(this.results);

        var btn = document.getElementById("btn_ver_detalle_submit");
        if (btn) {
            var self = this;
            btn.addEventListener("click", function() {
                self.renderDetails();
            });
        }
    }

    renderDetails() {
        var body = document.getElementById("result_modal_body");
        if (!body) return;

        body.innerHTML = this.buildDetailsHTML(this.results);

        var backBtn = document.getElementById("btn_volver_resumen_submit");
        if (backBtn) {
            var self = this;
            backBtn.addEventListener("click", function() {
                self.renderSummary();
            });
        }
    }

    runAllSubmitTests() {
        var results = {
            byAction: {},
            total: 0,
            totalCorrect: 0,
            totalIncorrect: 0,
            allDetails: []
        };

        if (!this.testSubmitData || !Array.isArray(this.testSubmitData)) return results;

        results.total = this.testSubmitData.length;
        var self = this;

        this.testSubmitData.forEach(function(submitTest, idx) {
            var testInfo = { index: idx, data: submitTest, passed: false, resultObtained: null, resultExpected: null };

            if (!Array.isArray(submitTest) || submitTest.length < 6) {
                testInfo.resultObtained = "FORMATO_PRUEBA_INCORRECTO";
                testInfo.resultExpected = "N/A";
                results.allDetails.push(testInfo);
                results.totalIncorrect++;
                return;
            }

            var accion = submitTest[1];
            var atributosValores = submitTest[4];
            var resultadoEsperado = submitTest[5];

            testInfo.resultExpected = resultadoEsperado;

            if (!results.byAction[accion]) {
                results.byAction[accion] = { total: 0, correct: 0, incorrect: 0, details: [] };
            }
            results.byAction[accion].total++;

            var checkResult = self.CheckSubmit(accion, atributosValores);
            testInfo.resultObtained = checkResult;

            var passed;
            if (resultadoEsperado === true) {
                passed = (checkResult === true);
            } else if (Array.isArray(checkResult)) {
                passed = checkResult.indexOf(resultadoEsperado) !== -1;
            } else {
                passed = (checkResult === resultadoEsperado);
            }

            testInfo.passed = passed;
            if (passed) {
                results.totalCorrect++;
                results.byAction[accion].correct++;
            } else {
                results.totalIncorrect++;
                results.byAction[accion].incorrect++;
            }

            results.byAction[accion].details.push(testInfo);
            results.allDetails.push(testInfo);
        });

        return results;
    }

    CheckSubmit(accion, atributosValores) {
        if (!this.estructura || !this.estructura.attributes) return ["ESTRUCTURA_NO_ENCONTRADA"];

        this.validateFields.createTestContainer();
        var container = document.getElementById("_test_fields_container_");
        if (!container) return ["ERROR_CONTENEDOR"];

        container.innerHTML = "";

        var attributesList = this.estructura.attributes_list;
        var allValues = atributosValores || {};
        var self = this;

        attributesList.forEach(function(attrName) {
            var attrDef = self.estructura.attributes[attrName];
            if (!attrDef) return;

            var element = self.validateFields.createField(attrName, attrDef, accion);

            if (element.type === "file" && allValues[attrName] !== undefined) {
                if (typeof allValues[attrName] === "object" && allValues[attrName] !== null) {
                    self.validateFields.setValue(element, null, allValues[attrName]);
                } else {
                    self.validateFields.setValue(element, allValues[attrName]);
                }
            } else if (allValues[attrName] !== undefined) {
                self.validateFields.setValue(element, allValues[attrName]);
            }

            container.appendChild(element);
        });

        var errors = [];

        attributesList.forEach(function(attrName) {
            var attrDef = self.estructura.attributes[attrName];
            if (!attrDef || !attrDef.validations || !attrDef.validations[accion]) return;

            if (accion === "ADD" && attrDef.is_pk && attrDef.is_autoincrement) return;

            var validationsForAction = attrDef.validations[accion];
            var elementValue = allValues[attrName];

            if (accion === "SEARCH") {
                if (elementValue === undefined || elementValue === "" || elementValue === null) return;
            }

            for (var validationType in validationsForAction) {
                if (!Object.prototype.hasOwnProperty.call(validationsForAction, validationType)) continue;
                var validationRule = validationsForAction[validationType];
                var param;
                var errorMsg;

                if (validationType === "personalized") {
                    if (validationRule.personalize) {
                        var personalizedResult = self.validateFields.executeValidation(
                            "personalized", attrName, null, self.entityInstance, attrName, allValues
                        );
                        if (personalizedResult !== true && typeof personalizedResult === "string") {
                            errors.push(personalizedResult);
                        }
                    }
                    continue;
                }

                if (validationType === "no_file") {
                    errorMsg = validationRule.error_msg;
                    var noFileResult = self.validateFields.executeValidation("no_file", attrName, null);
                    if (noFileResult === false) errors.push(errorMsg);
                    continue;
                }

                if (typeof validationRule === "object" && validationRule !== null) {
                    param = validationRule.value;
                    errorMsg = validationRule.error_msg;
                } else {
                    param = validationRule;
                    errorMsg = validationType + "_KO";
                }

                var validResult = self.validateFields.executeValidation(validationType, attrName, param, self.entityInstance, attrName, allValues);

                if (validResult === false) {
                    errors.push(errorMsg);
                } else if (typeof validResult === "string") {
                    errors.push(validResult);
                }
            }
        });

        this.validateFields.cleanup();

        if (errors.length === 0) return true;
        return errors;
    }

    buildSummaryHTML(results) {
        var html = '<div class="section">';
        html += '<h2>Resumen por Accion</h2>';
        html += '<div class="summary">';
        html += '<span><span class="label">Total pruebas:</span><span class="val">' + results.total + '</span></span>';
        html += '<span><span class="label">Correctas:</span><span class="val ok">' + results.totalCorrect + '</span></span>';
        html += '<span><span class="label">Incorrectas:</span><span class="val ko">' + results.totalIncorrect + '</span></span>';
        html += '</div>';

        html += '<table><thead><tr><th>Accion</th><th>Total</th><th>Correctas</th><th>Incorrectas</th></tr></thead><tbody>';
        Object.keys(results.byAction).forEach(function(action) {
            var data = results.byAction[action];
            html += '<tr>';
            html += '<td><strong>' + action + '</strong></td>';
            html += '<td>' + data.total + '</td>';
            html += '<td class="td-ok">' + data.correct + '</td>';
            html += '<td class="' + (data.incorrect > 0 ? 'td-ko' : '') + '">' + data.incorrect + '</td>';
            html += '</tr>';
        });
        html += '</tbody></table>';

        html += '<button class="btn btn-primary" id="btn_ver_detalle_submit">Ver detalle de todas las pruebas</button>';
        html += '</div>';
        return html;
    }

    buildDetailsHTML(results) {
        var html = '<div class="detail-back-row">';
        html += '<button class="btn btn-warning" id="btn_volver_resumen_submit">';
        html += '<img src="./iconos/BACK.png" alt="" class="btn-icon-img"> Volver al Resumen';
        html += '</button></div>';

        html += '<div class="section">';
        html += '<h2>Detalle de Pruebas de Submit - ' + this.entityName + '</h2>';
        html += '<table><thead><tr><th>#</th><th>Entidad</th><th>Accion</th><th>Num Prueba</th><th>Descripcion</th><th>Atributos/Valores</th><th>Resultado Esperado</th><th>Resultado Obtenido</th><th>Estado</th></tr></thead><tbody>';

        results.allDetails.forEach(function(t, i) {
            var d = t.data || [];
            html += '<tr>';
            html += '<td>' + i + '</td>';
            html += '<td>' + (d[0] || '') + '</td>';
            html += '<td>' + (d[1] || '') + '</td>';
            html += '<td>' + (d[2] !== undefined ? d[2] : '') + '</td>';
            html += '<td>' + (d[3] || '') + '</td>';
            html += '<td class="cell-wrap">' + JSON.stringify(d[4]) + '</td>';
            html += '<td>' + JSON.stringify(t.resultExpected) + '</td>';
            html += '<td>' + JSON.stringify(t.resultObtained) + '</td>';
            html += '<td class="' + (t.passed ? 'td-ok' : 'td-ko') + '">' + (t.passed ? 'CORRECTO' : 'INCORRECTO') + '</td>';
            html += '</tr>';
        });

        html += '</tbody></table></div>';
        return html;
    }
}
