class TestForm {
    constructor(entityName) {
        this.entityName = entityName;
        this.estructura = window[entityName + "_estructura"];
        this.defTests = window[entityName + "_def_tests"];
        this.pruebas = window[entityName + "_pruebas"];
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
        var structureInfo = this.checkStructure();
        var defTestsInfo = this.checkDefTests();
        var pruebasInfo = this.runPruebas();

        var overlay = document.getElementById("result_overlay");
        var title = document.getElementById("result_modal_title");
        var body = document.getElementById("result_modal_body");

        if (!overlay || !title || !body) return;

        title.textContent = "Test de Atributos - " + this.entityName;

        this.summaryData = { structure: structureInfo, defTests: defTestsInfo, pruebas: pruebasInfo };
        this.renderSummary();

        overlay.hidden = false;
    }

    renderSummary() {
        var body = document.getElementById("result_modal_body");
        if (!body) return;

        body.innerHTML = this.buildStructureSection(this.summaryData.structure) +
                         this.buildDefTestsSection(this.summaryData.defTests) +
                         this.buildPruebasSection(this.summaryData.pruebas);

        var btn = document.getElementById("btn_ver_detalle_pruebas");
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

        body.innerHTML = this.buildDetailsHTML(this.summaryData.pruebas);

        var backBtn = document.getElementById("btn_volver_resumen_pruebas");
        if (backBtn) {
            var self = this;
            backBtn.addEventListener("click", function() {
                self.renderSummary();
            });
        }
    }

    checkStructure() {
        var result = { isCorrect: true, errors: [], attributes: [] };

        if (!this.estructura) {
            result.isCorrect = false;
            result.errors.push("La variable " + this.entityName + "_estructura no existe.");
            return result;
        }

        if (!this.estructura.entity || this.estructura.entity !== this.entityName) {
            result.errors.push("El campo 'entity' no coincide con el nombre de la entidad.");
            result.isCorrect = false;
        }

        if (!this.estructura.attributes_list || !Array.isArray(this.estructura.attributes_list)) {
            result.errors.push("No existe o no es un array el campo 'attributes_list'.");
            result.isCorrect = false;
            return result;
        }

        if (!this.estructura.attributes || typeof this.estructura.attributes !== "object") {
            result.errors.push("No existe o no es un objeto el campo 'attributes'.");
            result.isCorrect = false;
            return result;
        }

        var self = this;
        this.estructura.attributes_list.forEach(function(attrName) {
            var attrDef = self.estructura.attributes[attrName];
            var attrInfo = { name: attrName, valid: true, errors: [] };

            if (!attrDef) {
                attrInfo.valid = false;
                attrInfo.errors.push("No se encontro la definicion del atributo.");
            } else {
                if (!attrDef.html || !attrDef.html.tag) {
                    attrInfo.valid = false;
                    attrInfo.errors.push("Falta la definicion HTML (tag).");
                }
                if (typeof attrDef.is_pk !== "boolean") {
                    attrInfo.errors.push("is_pk no es boolean.");
                }
                if (typeof attrDef.is_null !== "boolean") {
                    attrInfo.errors.push("is_null no es boolean.");
                }
                if (!attrDef.validations || typeof attrDef.validations !== "object") {
                    attrInfo.errors.push("No tiene validaciones definidas.");
                }
            }

            if (attrInfo.errors.length > 0) result.isCorrect = false;
            result.attributes.push(attrInfo);
        });

        return result;
    }

    checkDefTests() {
        var result = { total: 0, wellDefined: 0, byAttribute: {}, details: [] };

        if (!this.defTests || !Array.isArray(this.defTests)) return result;

        result.total = this.defTests.length;

        var expectedTypes = [
            "string",
            "string",
            "string",
            "number",
            "string",
            "string",
            ["string", "boolean"],
            "string"
        ];

        this.defTests.forEach(function(def, idx) {
            var defInfo = { index: idx, data: def, isValid: true, errors: [] };

            if (!Array.isArray(def) || def.length !== 8) {
                defInfo.isValid = false;
                defInfo.errors.push("Numero incorrecto de campos (esperado: 8, encontrado: " + (Array.isArray(def) ? def.length : "no es array") + ")");
            } else {
                for (var i = 0; i < expectedTypes.length; i++) {
                    if (Array.isArray(expectedTypes[i])) {
                        if (expectedTypes[i].indexOf(typeof def[i]) === -1) {
                            defInfo.isValid = false;
                            defInfo.errors.push("Campo " + i + ": tipo incorrecto (esperado: " + expectedTypes[i].join("|") + ", encontrado: " + typeof def[i] + ")");
                        }
                    } else if (typeof def[i] !== expectedTypes[i]) {
                        defInfo.isValid = false;
                        defInfo.errors.push("Campo " + i + ": tipo incorrecto (esperado: " + expectedTypes[i] + ", encontrado: " + typeof def[i] + ")");
                    }
                }

                var campo = def[1];
                if (!result.byAttribute[campo]) result.byAttribute[campo] = 0;
                result.byAttribute[campo]++;
            }

            if (defInfo.isValid) result.wellDefined++;
            result.details.push(defInfo);
        });

        return result;
    }

    runPruebas() {
        var result = {
            total: 0,
            wellDefined: 0,
            withErrorExpected: {},
            withSuccessExpected: {},
            passed: 0,
            failed: 0,
            details: []
        };

        if (!this.pruebas || !Array.isArray(this.pruebas)) return result;

        result.total = this.pruebas.length;
        this.validateFields.createTestContainer();

        var self = this;
        this.pruebas.forEach(function(prueba, idx) {
            var pruebaInfo = { index: idx, data: prueba, isValid: true, errors: [], resultObtained: null, passed: false };

            if (!Array.isArray(prueba) || prueba.length < 7) {
                pruebaInfo.isValid = false;
                pruebaInfo.errors.push("Numero incorrecto de campos (min: 7, encontrado: " + (Array.isArray(prueba) ? prueba.length : "no es array") + ")");
                result.details.push(pruebaInfo);
                return;
            }

            if (typeof prueba[0] !== "string") pruebaInfo.errors.push("Entidad no es string");
            if (typeof prueba[1] !== "string") pruebaInfo.errors.push("Campo no es string");
            if (typeof prueba[2] !== "number") pruebaInfo.errors.push("Num def test no es number");
            if (typeof prueba[3] !== "number") pruebaInfo.errors.push("Num prueba no es number");
            if (typeof prueba[4] !== "string") pruebaInfo.errors.push("Accion no es string");
            if (typeof prueba[6] !== "string" && typeof prueba[6] !== "boolean") {
                pruebaInfo.errors.push("Resultado esperado no es string ni boolean");
            }

            if (pruebaInfo.errors.length > 0) {
                pruebaInfo.isValid = false;
            } else {
                result.wellDefined++;
            }

            var campo = prueba[1];
            var numDefTest = prueba[2];
            var accion = prueba[4];
            var valoresAtributos = prueba[5];
            var resultadoEsperado = prueba[6];

            var defKey = numDefTest;
            if (resultadoEsperado === true) {
                if (!result.withSuccessExpected[defKey]) result.withSuccessExpected[defKey] = 0;
                result.withSuccessExpected[defKey]++;
            } else {
                if (!result.withErrorExpected[defKey]) result.withErrorExpected[defKey] = 0;
                result.withErrorExpected[defKey]++;
            }

            if (pruebaInfo.isValid && self.estructura && self.estructura.attributes[campo]) {
                var attrDef = self.estructura.attributes[campo];
                try {
                    pruebaInfo.resultObtained = self.executePrueba(campo, attrDef, accion, valoresAtributos, numDefTest);
                    pruebaInfo.passed = (pruebaInfo.resultObtained === resultadoEsperado);
                } catch (e) {
                    pruebaInfo.resultObtained = "ERROR: " + e.message;
                    pruebaInfo.passed = false;
                }
            }

            if (pruebaInfo.passed) result.passed++;
            else result.failed++;

            result.details.push(pruebaInfo);
        });

        this.validateFields.cleanup();
        return result;
    }

    executePrueba(campo, attrDef, accion, valoresAtributos, numDefTest) {
        var validationsForAction = attrDef.validations[accion];
        if (!validationsForAction) return true;

        var container = document.getElementById("_test_fields_container_");
        if (!container) return "ERROR: No existe contenedor de test";

        container.innerHTML = "";

        var allValues = {};
        var self = this;

        if (typeof valoresAtributos === "object" && valoresAtributos !== null && !Array.isArray(valoresAtributos)) {
            Object.keys(valoresAtributos).forEach(function(attr) {
                allValues[attr] = valoresAtributos[attr];
                var attrDefForField = self.estructura.attributes[attr];
                if (attrDefForField) {
                    var element = self.validateFields.createField(attr, attrDefForField, accion);
                    if (element.type === "file" && typeof valoresAtributos[attr] === "object") {
                        self.validateFields.setValue(element, null, valoresAtributos[attr]);
                    } else {
                        self.validateFields.setValue(element, valoresAtributos[attr]);
                    }
                    container.appendChild(element);
                }
            });
        } else {
            allValues[campo] = valoresAtributos;
            var element = this.validateFields.createField(campo, attrDef, accion);
            if (element.type === "file" && typeof valoresAtributos === "object") {
                this.validateFields.setValue(element, null, valoresAtributos);
            } else {
                this.validateFields.setValue(element, valoresAtributos);
            }
            container.appendChild(element);
        }

        for (var validationType in validationsForAction) {
            if (!Object.prototype.hasOwnProperty.call(validationsForAction, validationType)) continue;
            var validationRule = validationsForAction[validationType];
            var param;
            var errorMsg;

            if (validationType === "personalized") {
                if (validationRule.personalize) {
                    var personalizedResult = this.validateFields.executeValidation(
                        "personalized", campo, null, this.entityInstance, campo, allValues
                    );
                    if (personalizedResult !== true) {
                        return typeof personalizedResult === "string" ? personalizedResult : validationRule.error_msg;
                    }
                }
                continue;
            }

            if (validationType === "no_file") {
                errorMsg = validationRule.error_msg;
                var noFileResult = this.validateFields.executeValidation("no_file", campo, null);
                if (noFileResult === false) return errorMsg;
                continue;
            }

            if (typeof validationRule === "object" && validationRule !== null) {
                param = validationRule.value;
                errorMsg = validationRule.error_msg;
            } else {
                param = validationRule;
                errorMsg = validationType + "_KO";
            }

            var validResult = this.validateFields.executeValidation(validationType, campo, param, this.entityInstance, campo, allValues);

            if (validResult === false) return errorMsg;
            if (typeof validResult === "string") return validResult;
        }

        return true;
    }

    buildStructureSection(info) {
        var html = '<div class="section">';
        html += '<h2>Informacion sobre la Estructura de la Entidad</h2>';

        html += '<p>Estructura: <span class="' + (info.isCorrect ? 'ok' : 'ko') + '">' +
                (info.isCorrect ? 'CORRECTA' : 'INCORRECTA') + '</span></p>';

        if (info.errors.length > 0) {
            html += '<ul>';
            info.errors.forEach(function(e) { html += '<li class="ko">' + e + '</li>'; });
            html += '</ul>';
        }

        if (info.attributes.length > 0) {
            html += '<table><thead><tr><th>Atributo</th><th>Estado</th><th>Errores</th></tr></thead><tbody>';
            info.attributes.forEach(function(attr) {
                var ok = attr.valid && attr.errors.length === 0;
                html += '<tr>';
                html += '<td>' + attr.name + '</td>';
                html += '<td class="' + (ok ? 'td-ok' : 'td-ko') + '">' + (ok ? 'OK' : 'Error') + '</td>';
                html += '<td>' + (attr.errors.length > 0 ? attr.errors.join(", ") : '-') + '</td>';
                html += '</tr>';
            });
            html += '</tbody></table>';
        }

        html += '</div>';
        return html;
    }

    buildDefTestsSection(info) {
        var html = '<div class="section">';
        html += '<h2>Informacion sobre las Definiciones de Test</h2>';

        html += '<div class="summary">';
        html += '<span><span class="label">Total definiciones:</span><span class="val">' + info.total + '</span></span>';
        html += '<span><span class="label">Bien definidas:</span><span class="val ' + (info.wellDefined === info.total ? 'ok' : 'ko') + '">' + info.wellDefined + '/' + info.total + '</span></span>';
        html += '</div>';

        if (Object.keys(info.byAttribute).length > 0) {
            html += '<p><strong>Definiciones por atributo:</strong></p>';
            html += '<table><thead><tr><th>Atributo</th><th>Cantidad</th></tr></thead><tbody>';
            Object.keys(info.byAttribute).forEach(function(attr) {
                html += '<tr><td>' + attr + '</td><td>' + info.byAttribute[attr] + '</td></tr>';
            });
            html += '</tbody></table>';
        }

        if (info.details.length > 0) {
            html += '<p><strong>Detalle de definiciones:</strong></p>';
            html += '<table><thead><tr><th>#</th><th>Entidad</th><th>Campo</th><th>Elem HTML</th><th>Num Test</th><th>Descripcion</th><th>Accion</th><th>Tipo Resultado</th><th>Tipo Mensaje</th><th>Estado</th></tr></thead><tbody>';
            info.details.forEach(function(d) {
                var def = d.data;
                html += '<tr>';
                html += '<td>' + d.index + '</td>';
                html += '<td>' + (def[0] || '') + '</td>';
                html += '<td>' + (def[1] || '') + '</td>';
                html += '<td>' + (def[2] || '') + '</td>';
                html += '<td>' + (def[3] !== undefined ? def[3] : '') + '</td>';
                html += '<td>' + (def[4] || '') + '</td>';
                html += '<td>' + (def[5] || '') + '</td>';
                html += '<td>' + typeof def[6] + '</td>';
                html += '<td>' + typeof def[7] + '</td>';
                html += '<td class="' + (d.isValid ? 'td-ok' : 'td-ko') + '">' + (d.isValid ? 'OK' : 'KO ' + d.errors.join(", ")) + '</td>';
                html += '</tr>';
            });
            html += '</tbody></table>';
        }

        html += '</div>';
        return html;
    }

    buildPruebasSection(info) {
        var html = '<div class="section">';
        html += '<h2>Informacion sobre las Pruebas</h2>';

        html += '<div class="summary">';
        html += '<span><span class="label">Total pruebas:</span><span class="val">' + info.total + '</span></span>';
        html += '<span><span class="label">Bien definidas:</span><span class="val">' + info.wellDefined + '/' + info.total + '</span></span>';
        html += '<span><span class="label">Exitosas:</span><span class="val ok">' + info.passed + '</span></span>';
        html += '<span><span class="label">Fallidas:</span><span class="val ko">' + info.failed + '</span></span>';
        html += '</div>';

        html += '<p><strong>Pruebas con error esperado por def_test:</strong></p>';
        if (Object.keys(info.withErrorExpected).length > 0) {
            html += '<table><thead><tr><th>Num Def Test</th><th>Pruebas con error</th></tr></thead><tbody>';
            Object.keys(info.withErrorExpected).forEach(function(key) {
                html += '<tr><td>' + key + '</td><td>' + info.withErrorExpected[key] + '</td></tr>';
            });
            html += '</tbody></table>';
        } else {
            html += '<p>No hay pruebas con error esperado.</p>';
        }

        html += '<p><strong>Pruebas sin error esperado (exito) por def_test:</strong></p>';
        if (Object.keys(info.withSuccessExpected).length > 0) {
            html += '<table><thead><tr><th>Num Def Test</th><th>Pruebas de exito</th></tr></thead><tbody>';
            Object.keys(info.withSuccessExpected).forEach(function(key) {
                html += '<tr><td>' + key + '</td><td>' + info.withSuccessExpected[key] + '</td></tr>';
            });
            html += '</tbody></table>';
        } else {
            html += '<p>No hay pruebas de exito esperado.</p>';
        }

        html += '<button class="btn btn-primary" id="btn_ver_detalle_pruebas">Ver detalle de cada prueba</button>';

        html += '</div>';
        return html;
    }

    buildDetailsHTML(pruebasInfo) {
        var html = '<div class="detail-back-row">';
        html += '<button class="btn btn-warning" id="btn_volver_resumen_pruebas">';
        html += '<img src="./iconos/BACK.png" alt="" class="btn-icon-img"> Volver al Resumen';
        html += '</button></div>';

        html += '<div class="section">';
        html += '<h2>Detalle de Pruebas - ' + this.entityName + '</h2>';
        html += '<table><thead><tr><th>#</th><th>Entidad</th><th>Campo</th><th>Num Def</th><th>Num Prueba</th><th>Accion</th><th>Valores</th><th>Resultado Esperado</th><th>Resultado Obtenido</th><th>Estado</th></tr></thead><tbody>';

        pruebasInfo.details.forEach(function(p, i) {
            var d = p.data || [];
            html += '<tr>';
            html += '<td>' + i + '</td>';
            html += '<td>' + (d[0] || '') + '</td>';
            html += '<td>' + (d[1] || '') + '</td>';
            html += '<td>' + (d[2] !== undefined ? d[2] : '') + '</td>';
            html += '<td>' + (d[3] !== undefined ? d[3] : '') + '</td>';
            html += '<td>' + (d[4] || '') + '</td>';
            html += '<td>' + JSON.stringify(d[5]) + '</td>';
            html += '<td>' + JSON.stringify(d[6]) + '</td>';
            html += '<td>' + JSON.stringify(p.resultObtained) + '</td>';
            html += '<td class="' + (p.passed ? 'td-ok' : 'td-ko') + '">' + (p.passed ? 'EXITO' : 'ERROR') + '</td>';
            html += '</tr>';
        });

        html += '</tbody></table></div>';
        return html;
    }
}
