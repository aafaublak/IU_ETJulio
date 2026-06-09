/**
 * Clase Gestor
 *
 * Se encarga de cargar los ficheros de una entidad al seleccionarla
 * en el menu (carga dinamica mediante script tags) y de comprobar que
 * existen las variables necesarias antes de mostrar los botones de
 * test. Si falta alguna de las cuatro variables obligatorias
 * (_estructura, _def_tests, _pruebas y _TestSubmit) muestra un modal
 * de error. El fichero _Class.js solo se requiere si la entidad
 * declara validaciones con personalize: true.
 *
 * Tambien expone el generador automatico de nombreentidad_TestSubmit
 * (showGeneratorModal), que se ofrece como tercer boton en la
 * pantalla de la entidad y como boton dentro del modal de error
 * cuando solo falta el fichero _TestSubmit.js.
 */
class Gestor {

    constructor() {
        this.currentEntity = null;
    }

    /**
     * Selecciona una entidad. Si los ficheros no estan cargados,
     * los carga dinamicamente y, una vez disponibles, lanza la
     * comprobacion de variables/clases.
     *
     * @param {string} entityName nombre de la entidad.
     * @returns {void}
     */
    seleccionarEntidad(entityName) {
        this.currentEntity = entityName;
        var self = this;

        this.loadEntityFiles(entityName, function() {
            self.comprobarYMostrar(entityName);
        });
    }

    /**
     * Lanza la carga de los cuatro ficheros asociados a la entidad.
     * El fichero _Class.js es opcional (solo existe si la entidad
     * tiene validaciones personalizadas); el resto son obligatorios
     * y su ausencia se detecta despues en comprobarYMostrar.
     *
     * @param {string} entityName nombre de la entidad.
     * @param {Function} done callback que se invoca al terminar.
     * @returns {void}
     */
    loadEntityFiles(entityName, done) {
        var ficheros = [
            "./js/entities/" + entityName + "_estructura.js",
            "./js/tests/" + entityName + "_tests.js",
            "./js/tests/" + entityName + "_TestSubmit.js",
            "./js/classes/" + entityName + "_Class.js"
        ];

        var pendientes = ficheros.length;
        ficheros.forEach(function(url) {
            Gestor.loadScript(url, function() {
                pendientes--;
                if (pendientes === 0) done();
            });
        });
    }

    /**
     * Anade dinamicamente al head un script con la url indicada.
     * Si el script ya se anadio antes no se vuelve a anadir.
     *
     * @param {string} url ruta del fichero JS.
     * @param {Function} done callback que se invoca tanto si carga
     *                        bien como si falla (404, etc).
     * @returns {void}
     */
    static loadScript(url, done) {
        if (!Gestor._scriptsCargados) Gestor._scriptsCargados = {};
        if (Gestor._scriptsCargados[url] === "loaded") { done(); return; }
        if (Gestor._scriptsCargados[url] === "loading") {
            var prev = Gestor._scriptsCargadosCallbacks[url] || [];
            prev.push(done);
            Gestor._scriptsCargadosCallbacks[url] = prev;
            return;
        }

        if (!Gestor._scriptsCargadosCallbacks) Gestor._scriptsCargadosCallbacks = {};
        Gestor._scriptsCargados[url] = "loading";
        Gestor._scriptsCargadosCallbacks[url] = [done];

        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = url;
        s.async = false;
        s.onload = function() {
            Gestor._scriptsCargados[url] = "loaded";
            var callbacks = Gestor._scriptsCargadosCallbacks[url] || [];
            Gestor._scriptsCargadosCallbacks[url] = [];
            callbacks.forEach(function(cb) { cb(); });
        };
        s.onerror = function() {
            Gestor._scriptsCargados[url] = "error";
            var callbacks = Gestor._scriptsCargadosCallbacks[url] || [];
            Gestor._scriptsCargadosCallbacks[url] = [];
            callbacks.forEach(function(cb) { cb(); });
        };
        document.head.appendChild(s);
    }

    /**
     * Una vez cargados los ficheros, verifica las variables y
     * actua en consecuencia (modal de error o botones de test).
     *
     * @param {string} entityName nombre de la entidad.
     * @returns {boolean} true si todo correcto, false si hay errores.
     */
    comprobarYMostrar(entityName) {
        var errors = [];
        var faltaEstructura = typeof Gestor.resolveEstructura(entityName) === "undefined";
        var faltaDefTests   = typeof Gestor.resolveGlobal(entityName + "_def_tests") === "undefined";
        var faltaPruebas    = typeof Gestor.resolveGlobal(entityName + "_pruebas") === "undefined";
        var faltaTestSubmit = typeof Gestor.resolveGlobal(entityName + "_TestSubmit") === "undefined";

        if (faltaEstructura) errors.push("No se encontro la variable '" + entityName + "_estructura' (fichero " + entityName + "_estructura.js).");
        if (faltaDefTests)   errors.push("No se encontro la variable '" + entityName + "_def_tests' (fichero " + entityName + "_tests.js).");
        if (faltaPruebas)    errors.push("No se encontro la variable '" + entityName + "_pruebas' (fichero " + entityName + "_tests.js).");
        if (faltaTestSubmit) errors.push("No se encontro la variable '" + entityName + "_TestSubmit' (fichero " + entityName + "_TestSubmit.js).");

        if (errors.length > 0) {
            // Si solo falta _TestSubmit y tenemos _pruebas + _estructura,
            // ofrecemos al usuario la herramienta para auto-generar el
            // contenido del fichero a partir de las pruebas de campo.
            var puedeGenerar = faltaTestSubmit && !faltaEstructura && !faltaPruebas;
            this.showErrorModal(errors, puedeGenerar ? entityName : null);
            this.hideTestButtons();
            return false;
        }

        this.showTestButtons(entityName);
        return true;
    }

    /**
     * Muestra una ventana modal con los errores indicados. Si se
     * pasa <code>entityToGenerate</code>, anade un boton para abrir
     * el generador automatico del fichero TestSubmit a partir de
     * las pruebas de campo de esa entidad.
     *
     * @param {string[]} errors lista de mensajes de error.
     * @param {string} [entityToGenerate] nombre de la entidad para
     *        la que se puede generar nombreentidad_TestSubmit.
     * @returns {void}
     */
    showErrorModal(errors, entityToGenerate) {
        var overlay = document.getElementById("modal_overlay");
        var modal = document.getElementById("error_modal");
        var errorBody = document.getElementById("error_modal_body");

        if (!overlay || !modal || !errorBody) {
            alert("Errores encontrados:\n\n" + errors.join("\n"));
            return;
        }

        var html = '<ul class="error-list">';
        for (var i = 0; i < errors.length; i++) {
            html += '<li>' + errors[i] + '</li>';
        }
        html += '</ul>';

        if (entityToGenerate) {
            html += '<p>Como solo falta el fichero <code>' + entityToGenerate + '_TestSubmit.js</code>, ';
            html += 'puedes generar su contenido automaticamente a partir de las pruebas de campo y copiarlo al fichero:</p>';
            html += '<button class="btn btn-primary" id="btn_generar_testsubmit_modal">Generar JSON de TestSubmit</button>';
        }

        errorBody.innerHTML = html;
        overlay.hidden = false;
        modal.hidden = false;

        if (entityToGenerate) {
            var self = this;
            var btn = document.getElementById("btn_generar_testsubmit_modal");
            if (btn) {
                btn.addEventListener("click", function() {
                    overlay.hidden = true;
                    modal.hidden = true;
                    self.showGeneratorModal(entityToGenerate);
                });
            }
        }
    }

    /**
     * Abre el modal grande de resultados con el codigo JS generado
     * automaticamente para nombreentidad_TestSubmit. Incluye un
     * boton para copiarlo al portapapeles. El usuario pega ese
     * contenido en el fichero que pide el enunciado.
     *
     * @param {string} entityName nombre de la entidad.
     * @returns {void}
     */
    showGeneratorModal(entityName) {
        var pruebas = Gestor.resolveGlobal(entityName + "_pruebas");
        if (!Array.isArray(pruebas)) {
            this.showErrorModal(["No se puede generar: falta la variable '" + entityName + "_pruebas'."]);
            return;
        }

        var generated = TestSubmit.generateFromPruebas(entityName, pruebas);
        var jsCode = TestSubmit.formatAsJsFile(entityName, generated);

        var overlay = document.getElementById("result_overlay");
        var title = document.getElementById("result_modal_title");
        var body = document.getElementById("result_modal_body");

        if (!overlay || !title || !body) return;

        title.textContent = "Generador " + entityName + "_TestSubmit.js";

        body.innerHTML =
            '<div class="section">' +
            '<p>Pruebas de submit generadas automaticamente a partir de <code>' + entityName + '_pruebas</code> (' +
            generated.length + ' pruebas). Copialas y pegalas en el fichero ' +
            '<code>js/tests/' + entityName + '_TestSubmit.js</code> para cumplir el enunciado.</p>' +
            '<p><button class="btn btn-primary" id="btn_copiar_codigo">Copiar al portapapeles</button> ' +
            '<span id="copy_feedback" class="ok" hidden> Copiado al portapapeles</span></p>' +
            '<pre class="code-output" id="code_output_block"></pre>' +
            '</div>';

        var preEl = document.getElementById("code_output_block");
        if (preEl) preEl.textContent = jsCode;

        var btnCopy = document.getElementById("btn_copiar_codigo");
        if (btnCopy) {
            btnCopy.addEventListener("click", function() {
                Gestor._copyToClipboard(jsCode);
            });
        }

        overlay.hidden = false;
    }

    /**
     * Copia una cadena al portapapeles intentando primero la API
     * moderna (navigator.clipboard) y, si no esta disponible o es
     * rechazada (caso tipico al abrir el proyecto con file:// en el
     * navegador del corrector), recurre al fallback con un textarea
     * temporal + document.execCommand("copy").
     *
     * @param {string} text cadena a copiar.
     * @returns {void}
     */
    static _copyToClipboard(text) {
        var showFeedback = function() {
            var fb = document.getElementById("copy_feedback");
            if (fb) {
                fb.hidden = false;
                setTimeout(function() { fb.hidden = true; }, 2000);
            }
        };
        var fallback = function() {
            var ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.left = "-9999px";
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand("copy"); showFeedback(); } catch (e) {}
            document.body.removeChild(ta);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(showFeedback).catch(fallback);
        } else {
            fallback();
        }
    }

    /**
     * Pinta los botones "Test de Atributos", "Test de Formulario",
     * "Generar JSON TestSubmit" y "Volver al Inicio" en la zona de
     * trabajo. El boton de generar permite regenerar el contenido
     * de nombreentidad_TestSubmit.js en cualquier momento (por
     * ejemplo despues de anadir nuevas pruebas de campo).
     *
     * @param {string} entityName nombre de la entidad.
     * @returns {void}
     */
    showTestButtons(entityName) {
        var workArea = document.getElementById("work-area");
        if (!workArea) return;

        workArea.innerHTML = '';

        var prettyName = entityName
            .split("_")
            .map(function(p) { return p.charAt(0).toUpperCase() + p.slice(1); })
            .join(" ");

        var title = document.createElement("h2");
        title.textContent = "Entidad: " + prettyName;
        workArea.appendChild(title);

        var btnContainer = document.createElement("div");
        btnContainer.className = "test-buttons";

        var btnTestAttr = document.createElement("button");
        btnTestAttr.className = "btn btn-primary";
        btnTestAttr.innerHTML = '<img src="./iconos/TEST.png" alt="" class="btn-icon-img"> Test de Atributos';
        btnTestAttr.id = "btn_test_atributos";
        btnTestAttr.addEventListener("click", function() {
            var testForm = new TestForm(entityName);
            testForm.run();
        });
        btnContainer.appendChild(btnTestAttr);

        var btnTestSubmit = document.createElement("button");
        btnTestSubmit.className = "btn btn-warning";
        btnTestSubmit.innerHTML = '<img src="./iconos/TEST.png" alt="" class="btn-icon-img"> Test de Formulario';
        btnTestSubmit.id = "btn_test_formulario";
        btnTestSubmit.addEventListener("click", function() {
            var testSubmit = new TestSubmit(entityName);
            testSubmit.run();
        });
        btnContainer.appendChild(btnTestSubmit);

        var self = this;

        var btnGenerar = document.createElement("button");
        btnGenerar.className = "btn";
        btnGenerar.innerHTML = '<img src="./iconos/TEST.png" alt="" class="btn-icon-img"> Generar JSON TestSubmit';
        btnGenerar.id = "btn_generar_testsubmit";
        btnGenerar.title = "Regenera el contenido de " + entityName + "_TestSubmit.js a partir de las pruebas de campo";
        btnGenerar.addEventListener("click", function() {
            self.showGeneratorModal(entityName);
        });
        btnContainer.appendChild(btnGenerar);

        workArea.appendChild(btnContainer);

        var btnBack = document.createElement("button");
        btnBack.className = "btn";
        btnBack.innerHTML = '<img src="./iconos/BACK.png" alt="" class="btn-icon-img"> Volver al Inicio';
        btnBack.id = "btn_volver";
        btnBack.addEventListener("click", function() {
            self.hideTestButtons();
        });
        workArea.appendChild(btnBack);
    }

    /**
     * Vuelve a mostrar la pantalla de bienvenida.
     *
     * @returns {void}
     */
    hideTestButtons() {
        var workArea = document.getElementById("work-area");
        if (workArea) {
            workArea.innerHTML = '<div class="welcome-section"><h2>Sistema de Pruebas</h2><p>Seleccione una entidad del menu para iniciar las pruebas de validacion.</p></div>';
        }
    }

    /**
     * Localiza una variable/clase global por nombre. Primero se busca en
     * window (declaraciones var o function, que quedan colgadas de
     * window) y, si no se encuentra, se resuelve con eval por si se
     * declaro con const, let o class, que NO se cuelgan de window pero
     * si son accesibles por su identificador. Es el mismo mecanismo que
     * usa el ejemplo de la entrega (eval del nombre de la variable).
     *
     * @param {string} name nombre de la variable o clase global.
     * @returns {*} el valor encontrado o undefined.
     */
    static resolveGlobal(name) {
        if (typeof window[name] !== "undefined") return window[name];
        try {
            var valor = eval(name);
            if (typeof valor !== "undefined") return valor;
        } catch (e) {
            // identificador no definido
        }
        return undefined;
    }

    /**
     * Localiza la estructura de una entidad admitiendo los dos nombres
     * de variable usados en la asignatura: el del enunciado de julio
     * (nombreentidad_estructura) y el del ejemplo de la entrega
     * (estructura_nombreentidad).
     *
     * @param {string} entityName nombre de la entidad.
     * @returns {object|undefined} estructura encontrada o undefined.
     */
    static resolveEstructura(entityName) {
        var porEnunciado = Gestor.resolveGlobal(entityName + "_estructura");
        if (typeof porEnunciado !== "undefined") return porEnunciado;
        return Gestor.resolveGlobal("estructura_" + entityName);
    }

    /**
     * Localiza la clase de una entidad (nombreentidad). Las clases
     * declaradas con class no quedan colgadas de window, por eso se
     * resuelve con resolveGlobal (que usa eval como en el ejemplo de la
     * entrega). Devuelve la clase si existe o undefined si la entidad no
     * tiene clase (lo que el enunciado permite cuando no hay
     * validaciones personalizadas).
     *
     * @param {string} entityName nombre de la entidad.
     * @returns {Function|undefined} la clase de la entidad o undefined.
     */
    static resolveEntityClass(entityName) {
        var clase = Gestor.resolveGlobal(entityName);
        return (typeof clase === "function") ? clase : undefined;
    }

    /**
     * Normaliza una regla de validacion al formato de la estructura de
     * la entrega y devuelve el parametro y el codigo de mensaje.
     *
     * Formatos admitidos:
     *   - Tupla del ejemplo del profesor: [valor, "codigo_mensaje"]
     *     (type_file es [[mime, ...], "codigo_mensaje"]).
     *   - Cadena para reglas sin parametro: "codigo_mensaje"
     *     (no_file, date).
     *   - Objeto heredado {value, error_msg} por compatibilidad.
     *
     * @param {*} rule regla tal y como aparece en validation_rules.
     * @returns {{param: *, errorMsg: (string|null)}}
     */
    static normalizeValidationRule(rule) {
        if (Array.isArray(rule)) {
            return { param: rule[0], errorMsg: rule[1] };
        }
        if (typeof rule === "string") {
            return { param: null, errorMsg: rule };
        }
        if (rule && typeof rule === "object") {
            return { param: (rule.value !== undefined ? rule.value : null), errorMsg: rule.error_msg };
        }
        return { param: rule, errorMsg: null };
    }
}
