/**
 * Clase TestForm
 *
 * Gestiona las pruebas de atributo de una entidad. Muestra en una
 * ventana modal la informacion de la estructura, las definiciones de
 * test y los resultados de las pruebas. Usa ValidateFieldsForm para
 * crear los elementos HTML, rellenarlos y ejecutar las validaciones.
 */
class TestForm {

    /**
     * @param {string} entityName nombre de la entidad a probar.
     */
    constructor(entityName) {
        this.entityName = entityName;
        this.estructura = Gestor.resolveEstructura(entityName);
        this.defTests = Gestor.resolveGlobal(entityName + "_def_tests");
        this.pruebas = Gestor.resolveGlobal(entityName + "_pruebas");
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
     * Ejecuta todo el ciclo de tests (estructura, def_tests y
     * pruebas) y abre el modal con el resumen.
     *
     * @returns {void}
     */
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

    /**
     * Pinta en el modal el resumen completo (estructura + def_tests
     * + pruebas) y enlaza el boton "Ver detalle de cada prueba".
     *
     * @returns {void}
     */
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

    /**
     * Pinta en el modal el detalle prueba a prueba con el resultado
     * esperado, el obtenido y el indicador visual de EXITO/ERROR.
     *
     * @returns {void}
     */
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

    /**
     * Comprueba que la estructura de la entidad este bien formada.
     *
     * @returns {{isCorrect: boolean, errors: string[], attributes: object[]}}
     */
    checkStructure() {
        var result = { isCorrect: true, errors: [], attributes: [] };

        if (!this.estructura) {
            result.isCorrect = false;
            result.errors.push("La variable " + this.entityName + "_estructura no existe.");
            return result;
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
                // is_pk e is_null son opcionales en la estructura (el ejemplo
                // de la entrega solo declara is_pk/is_autoincrement en la
                // clave primaria); solo se marca error si vienen con un tipo
                // que no es boolean.
                if (attrDef.is_pk !== undefined && typeof attrDef.is_pk !== "boolean") {
                    attrInfo.errors.push("is_pk no es boolean.");
                }
                if (attrDef.is_null !== undefined && typeof attrDef.is_null !== "boolean") {
                    attrInfo.errors.push("is_null no es boolean.");
                }
                if (!attrDef.validation_rules || typeof attrDef.validation_rules !== "object") {
                    attrInfo.errors.push("No tiene validation_rules definidas.");
                }
            }

            if (attrInfo.errors.length > 0) result.isCorrect = false;
            result.attributes.push(attrInfo);
        });

        return result;
    }

    /**
     * Recorre las definiciones de test y comprueba que cada una
     * tenga los 8 campos con sus tipos correctos. Cuenta tambien
     * cuantas definiciones hay por atributo.
     *
     * @returns {{total: number, wellDefined: number, byAttribute: object, details: object[]}}
     */
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

    /**
     * Ejecuta todas las pruebas definidas en nombreentidad_pruebas
     * comparando el resultado obtenido con el esperado y agrupando
     * por def_test para mostrar cuantas pruebas de error/exito hay.
     *
     * @returns {object} resumen con total, wellDefined, withErrorExpected,
     *                   withSuccessExpected, passed, failed y details.
     */
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

    /**
     * Lanza las validaciones definidas para la accion sobre el
     * campo indicado y devuelve true o el codigo de error.
     *
     * @param {string} campo nombre del atributo.
     * @param {object} attrDef definicion del atributo.
     * @param {string} accion accion en curso (ADD, EDIT, SEARCH).
     * @param {*} valoresAtributos valor o objeto con multiples valores.
     * @param {number} numDefTest numero de definicion de test asociada.
     * @returns {boolean|string} true si pasa o el codigo de error.
     */
    executePrueba(campo, attrDef, accion, valoresAtributos, numDefTest) {
        var validationsForAction = attrDef.validation_rules[accion];
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

            // Validacion personalizada del atributo (personalize: true). Se
            // invoca el metodo <atributo>_personalized_validation() de la
            // clase de la entidad a traves de Validations.personalized.
            if (validationType === "personalize") {
                var personalizedResult = this.validateFields.executeValidation(
                    "personalize", campo, validationRule, this.entityInstance, campo, allValues
                );
                if (personalizedResult !== true) {
                    return typeof personalizedResult === "string" ? personalizedResult : (campo + "_personalized_KO");
                }
                continue;
            }

            // Reglas atomicas: se normaliza la regla (tupla [valor, codigo],
            // cadena "codigo" para las que no llevan parametro, u objeto
            // heredado) y se lanza la validacion correspondiente.
            var regla = Gestor.normalizeValidationRule(validationRule);
            var validResult = this.validateFields.executeValidation(validationType, campo, regla.param, this.entityInstance, campo, allValues);

            if (validResult === false) return regla.errorMsg || (validationType + "_KO");
            if (typeof validResult === "string") return validResult;
        }

        return true;
    }

    /**
     * Convierte un valor para mostrarlo en la celda de la tabla de
     * detalle. Las cadenas largas con caracteres repetidos se
     * comprimen como "X".repeat(N) para que la tabla quepa sin
     * tener que desplazar horizontalmente.
     *
     * @param {*} value valor a formatear.
     * @returns {string} representacion compacta.
     */
    formatValueForCell(value) {
        var self = this;
        if (value === null || value === undefined) return "";
        if (typeof value === "string") return this.compactString(value);
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
     * Si la cadena consiste en el mismo caracter repetido >=20
     * veces, devuelve la notacion "X".repeat(N); en otro caso
     * devuelve la cadena entre comillas.
     *
     * @param {string} str cadena a comprimir.
     * @returns {string} cadena para mostrar.
     */
    compactString(str) {
        if (str.length >= 20) {
            var first = str.charAt(0);
            var allEqual = true;
            for (var i = 1; i < str.length; i++) {
                if (str.charAt(i) !== first) { allEqual = false; break; }
            }
            if (allEqual) {
                return '"' + first + '".repeat(' + str.length + ')';
            }
        }
        return '"' + str + '"';
    }

    /**
     * Construye el HTML de la seccion de estructura.
     *
     * @param {object} info resumen de la estructura.
     * @returns {string} HTML.
     */
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

    /**
     * Construye el HTML de la seccion de definiciones de test.
     *
     * @param {object} info resumen de las definiciones.
     * @returns {string} HTML.
     */
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

    /**
     * Construye el HTML de la seccion de pruebas (resumen y boton).
     *
     * @param {object} info resumen de las pruebas.
     * @returns {string} HTML.
     */
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

    /**
     * Construye el HTML de la tabla de detalle prueba a prueba.
     * Para que la tabla no sea excesivamente ancha, los valores se
     * compactan con formatValueForCell (cadenas repetidas pasan a
     * usar la notacion repeat()) y la columna se muestra con
     * white-space en CSS para envolver el texto.
     *
     * @param {object} pruebasInfo resumen de pruebas.
     * @returns {string} HTML.
     */
    buildDetailsHTML(pruebasInfo) {
        var self = this;
        var html = '<div class="detail-back-row">';
        html += '<button class="btn btn-warning" id="btn_volver_resumen_pruebas">';
        html += '<img src="./iconos/BACK.png" alt="" class="btn-icon-img"> Volver al Resumen';
        html += '</button></div>';

        html += '<div class="section">';
        html += '<h2>Detalle de Pruebas - ' + this.entityName + '</h2>';
        html += '<table class="table-details"><thead><tr><th>#</th><th>Entidad</th><th>Campo</th><th>Num Def</th><th>Num Prueba</th><th>Accion</th><th>Valores</th><th>Resultado Esperado</th><th>Resultado Obtenido</th><th>Estado</th></tr></thead><tbody>';

        pruebasInfo.details.forEach(function(p, i) {
            var d = p.data || [];
            html += '<tr>';
            html += '<td>' + i + '</td>';
            html += '<td>' + (d[0] || '') + '</td>';
            html += '<td>' + (d[1] || '') + '</td>';
            html += '<td>' + (d[2] !== undefined ? d[2] : '') + '</td>';
            html += '<td>' + (d[3] !== undefined ? d[3] : '') + '</td>';
            html += '<td>' + (d[4] || '') + '</td>';
            html += '<td class="cell-values">' + self.formatValueForCell(d[5]) + '</td>';
            html += '<td>' + self.formatValueForCell(d[6]) + '</td>';
            html += '<td>' + self.formatValueForCell(p.resultObtained) + '</td>';
            html += '<td class="' + (p.passed ? 'td-ok' : 'td-ko') + '">' + (p.passed ? 'EXITO' : 'ERROR') + '</td>';
            html += '</tr>';
        });

        html += '</tbody></table></div>';
        return html;
    }
}
