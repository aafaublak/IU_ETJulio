/**
 * Clase TestSubmit
 *
 * Pruebas de submit del formulario. Recorre los atributos de la
 * entidad para cada accion (ADD, EDIT, SEARCH), aplica todas las
 * validaciones y acumula los errores. No llama al backend, solo
 * comprueba que los datos estarian listos para enviarse.
 *
 * Ademas expone dos metodos estaticos auxiliares que permiten
 * construir el contenido del fichero nombreentidad_TestSubmit.js
 * automaticamente a partir de las pruebas de campo individuales
 * (nombreentidad_pruebas), para que el usuario pueda copiarlo y
 * pegarlo en lugar de escribir manualmente cada prueba de submit.
 * El fichero sigue siendo obligatorio segun el enunciado: estos
 * metodos solo ayudan a producir su contenido.
 */
class TestSubmit {

    /**
     * Construye un array con el mismo formato que
     * nombreentidad_TestSubmit a partir del array
     * nombreentidad_pruebas. Por cada accion (ADD, EDIT, SEARCH)
     * agrupa los valores validos disponibles en un "baseline"
     * y, por cada prueba (sea de exito o de error), genera una
     * entrada que aplica los valores de la prueba sobre ese
     * baseline. Asi se cubren todos los casos de prueba de campo
     * a nivel de submit sin tener que escribirlos a mano.
     *
     * @param {string} entityName nombre de la entidad.
     * @param {Array} pruebas array nombreentidad_pruebas.
     * @returns {Array} array con el mismo formato que
     *                  nombreentidad_TestSubmit.
     */
    static generateFromPruebas(entityName, pruebas) {
        if (!Array.isArray(pruebas)) return [];

        var baselines = {};

        pruebas.forEach(function(p) {
            if (!Array.isArray(p) || p.length < 7) return;
            var accion = p[4];
            var resultado = p[6];
            var valores = p[5];
            if (resultado !== true) return;
            if (typeof valores !== "object" || valores === null) return;
            if (!baselines[accion]) baselines[accion] = {};
            Object.keys(valores).forEach(function(k) {
                baselines[accion][k] = valores[k];
            });
        });

        var generated = [];
        var counter = 1;

        pruebas.forEach(function(p) {
            if (!Array.isArray(p) || p.length < 7) return;
            var accion = p[4];
            var valores = p[5];
            var resultado = p[6];
            var descripcion = "Auto-gen prueba " + p[3] + " sobre " + p[1];

            var base = baselines[accion] ? Object.assign({}, baselines[accion]) : {};
            if (typeof valores === "object" && valores !== null) {
                Object.keys(valores).forEach(function(k) {
                    base[k] = valores[k];
                });
            }

            generated.push([entityName, accion, counter, descripcion, base, resultado]);
            counter++;
        });

        return generated;
    }

    /**
     * Formatea el array generado por generateFromPruebas como una
     * cadena JS lista para pegar en el fichero
     * nombreentidad_TestSubmit.js. Cada prueba ocupa una linea para
     * facilitar la lectura.
     *
     * @param {string} entityName nombre de la entidad.
     * @param {Array} generated array generado por generateFromPruebas.
     * @returns {string} codigo JS con la declaracion completa.
     */
    static formatAsJsFile(entityName, generated) {
        var lines = ["var " + entityName + "_TestSubmit = ["];
        generated.forEach(function(test, i) {
            var comma = (i < generated.length - 1) ? "," : "";
            lines.push("    " + JSON.stringify(test) + comma);
        });
        lines.push("];");
        return lines.join("\n");
    }

    /**
     * @param {string} entityName nombre de la entidad.
     */
    constructor(entityName) {
        this.entityName = entityName;
        this.estructura = Gestor.resolveEstructura(entityName);
        this.testSubmitData = Gestor.resolveGlobal(entityName + "_TestSubmit");
        this.entityInstance = null;
        this.validateFields = new ValidateFieldsForm();

        try {
            var EntityClass = Gestor.resolveEntityClass(entityName);
            if (typeof EntityClass === "function") {
                this.entityInstance = new EntityClass();
            }
        } catch (e) {
            this.entityInstance = null;
        }
    }

    /**
     * Lanza todas las pruebas de submit y pinta el modal de resultados.
     *
     * @returns {void}
     */
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

    /**
     * Pinta el resumen por accion y enlaza el boton "Ver detalle".
     *
     * @returns {void}
     */
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

    /**
     * Pinta el detalle de todas las pruebas con su resultado.
     *
     * @returns {void}
     */
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

    /**
     * Ejecuta una a una las pruebas de submit y devuelve el
     * resumen estructurado.
     *
     * @returns {{byAction: object, total: number, totalCorrect: number,
     *            totalIncorrect: number, allDetails: object[]}}
     */
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

    /**
     * Realiza la comprobacion de submit recorriendo todos los
     * atributos requeridos para la accion. Acumula y devuelve los
     * errores que se han producido o true si la prueba pasa todas
     * las validaciones (en este proyecto no se realiza la llamada
     * al backend).
     *
     * @param {string} accion accion a realizar (ADD, EDIT, SEARCH).
     * @param {object} atributosValores valores asignados {nombre: valor}.
     * @returns {boolean|Array<string>} true o array con codigos de error.
     */
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
            if (!attrDef || !attrDef.validation_rules || !attrDef.validation_rules[accion]) return;

            if (accion === "ADD" && attrDef.is_pk && attrDef.is_autoincrement) return;

            var validationsForAction = attrDef.validation_rules[accion];
            var elementValue = allValues[attrName];

            if (accion === "SEARCH") {
                if (elementValue === undefined || elementValue === "" || elementValue === null) return;
            }

            for (var validationType in validationsForAction) {
                if (!Object.prototype.hasOwnProperty.call(validationsForAction, validationType)) continue;
                var validationRule = validationsForAction[validationType];

                // Validacion personalizada del atributo (personalize: true). Se
                // invoca el metodo <atributo>_personalized_validation() de la
                // clase de la entidad a traves de Validations.personalized.
                if (validationType === "personalize") {
                    var personalizedResult = self.validateFields.executeValidation(
                        "personalize", attrName, validationRule, self.entityInstance, attrName, allValues
                    );
                    if (personalizedResult !== true) {
                        errors.push(typeof personalizedResult === "string" ? personalizedResult : (attrName + "_personalized_KO"));
                    }
                    continue;
                }

                // Reglas atomicas: se normaliza la regla (tupla [valor, codigo],
                // cadena "codigo" sin parametro, u objeto heredado) y se lanza
                // la validacion correspondiente acumulando todos los errores.
                var regla = Gestor.normalizeValidationRule(validationRule);
                var validResult = self.validateFields.executeValidation(validationType, attrName, regla.param, self.entityInstance, attrName, allValues);

                if (validResult === false) {
                    errors.push(regla.errorMsg || (validationType + "_KO"));
                } else if (typeof validResult === "string") {
                    errors.push(validResult);
                }
            }
        });

        this.validateFields.cleanup();

        if (errors.length === 0) return true;
        return errors;
    }

    /**
     * Compacta un valor para mostrarlo en la celda de la tabla,
     * convirtiendo cadenas con caracteres repetidos en notacion
     * "X".repeat(N) para que la tabla quepa en la ventana.
     *
     * @param {*} value valor a formatear.
     * @returns {string} representacion compacta.
     */
    formatValueForCell(value) {
        var self = this;
        if (value === null || value === undefined) return "";
        if (typeof value === "string") {
            if (value.length >= 20) {
                var first = value.charAt(0);
                var allEqual = true;
                for (var i = 1; i < value.length; i++) {
                    if (value.charAt(i) !== first) { allEqual = false; break; }
                }
                if (allEqual) return '"' + first + '".repeat(' + value.length + ')';
            }
            return '"' + value + '"';
        }
        if (typeof value === "number" || typeof value === "boolean") return String(value);

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                return "[" + value.map(function(v) { return self.formatValueForCell(v); }).join(", ") + "]";
            }
            var parts = [];
            Object.keys(value).forEach(function(k) {
                parts.push(k + ": " + self.formatValueForCell(value[k]));
            });
            return "{ " + parts.join(", ") + " }";
        }
        return String(value);
    }

    /**
     * HTML del bloque resumen con la tabla por accion.
     *
     * @param {object} results resumen.
     * @returns {string} HTML.
     */
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

    /**
     * HTML del bloque detalle prueba a prueba.
     *
     * @param {object} results resumen.
     * @returns {string} HTML.
     */
    buildDetailsHTML(results) {
        var self = this;
        var html = '<div class="detail-back-row">';
        html += '<button class="btn btn-warning" id="btn_volver_resumen_submit">';
        html += '<img src="./iconos/BACK.png" alt="" class="btn-icon-img"> Volver al Resumen';
        html += '</button></div>';

        html += '<div class="section">';
        html += '<h2>Detalle de Pruebas de Submit - ' + this.entityName + '</h2>';
        html += '<table class="table-details"><thead><tr><th>#</th><th>Entidad</th><th>Accion</th><th>Num Prueba</th><th>Descripcion</th><th>Atributos/Valores</th><th>Resultado Esperado</th><th>Resultado Obtenido</th><th>Estado</th></tr></thead><tbody>';

        results.allDetails.forEach(function(t, i) {
            var d = t.data || [];
            html += '<tr>';
            html += '<td>' + i + '</td>';
            html += '<td>' + (d[0] || '') + '</td>';
            html += '<td>' + (d[1] || '') + '</td>';
            html += '<td>' + (d[2] !== undefined ? d[2] : '') + '</td>';
            html += '<td>' + (d[3] || '') + '</td>';
            html += '<td class="cell-values">' + self.formatValueForCell(d[4]) + '</td>';
            html += '<td>' + self.formatValueForCell(t.resultExpected) + '</td>';
            html += '<td>' + self.formatValueForCell(t.resultObtained) + '</td>';
            html += '<td class="' + (t.passed ? 'td-ok' : 'td-ko') + '">' + (t.passed ? 'CORRECTO' : 'INCORRECTO') + '</td>';
            html += '</tr>';
        });

        html += '</tbody></table></div>';
        return html;
    }
}
