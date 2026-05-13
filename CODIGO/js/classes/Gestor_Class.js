/**
 * Clase Gestor
 *
 * Se encarga de cargar los ficheros de una entidad al seleccionarla
 * en el menu (carga dinamica mediante script tags) y de comprobar que
 * existen las variables necesarias antes de mostrar los botones de
 * test. Si falta alguna variable bloqueante muestra un modal de error.
 * Los ficheros _Class.js y _TestSubmit.js son opcionales.
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
     * Lanza la carga de los ficheros asociados a la entidad si no
     * han sido cargados antes. Acepta que los ficheros opcionales
     * fallen sin abortar el proceso.
     *
     * @param {string} entityName nombre de la entidad.
     * @param {Function} done callback que se invoca al terminar.
     * @returns {void}
     */
    loadEntityFiles(entityName, done) {
        var ficheros = [
            { url: "./js/entities/" + entityName + "_estructura.js", optional: false },
            { url: "./js/tests/" + entityName + "_tests.js", optional: false },
            { url: "./js/tests/" + entityName + "_TestSubmit.js", optional: true },
            { url: "./js/classes/" + entityName + "_Class.js", optional: true }
        ];

        var pendientes = ficheros.length;
        if (pendientes === 0) { done(); return; }

        ficheros.forEach(function(f) {
            Gestor.loadScript(f.url, function() {
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

        if (typeof window[entityName + "_estructura"] === "undefined") {
            errors.push("No se encontro la variable '" + entityName + "_estructura' (fichero " + entityName + "_estructura.js).");
        }
        if (typeof window[entityName + "_def_tests"] === "undefined") {
            errors.push("No se encontro la variable '" + entityName + "_def_tests' (fichero " + entityName + "_tests.js).");
        }
        if (typeof window[entityName + "_pruebas"] === "undefined") {
            errors.push("No se encontro la variable '" + entityName + "_pruebas' (fichero " + entityName + "_tests.js).");
        }
        if (typeof window[entityName + "_TestSubmit"] === "undefined") {
            errors.push("No se encontro la variable '" + entityName + "_TestSubmit' (fichero " + entityName + "_TestSubmit.js). Se generara automaticamente a partir de las pruebas de atributo.");
        }

        var bloqueantes = errors.filter(function(e) {
            return e.indexOf("_estructura") !== -1 ||
                   e.indexOf("_def_tests") !== -1 ||
                   e.indexOf("_pruebas") !== -1;
        });

        if (bloqueantes.length > 0) {
            this.showErrorModal(bloqueantes);
            this.hideTestButtons();
            return false;
        }

        this.showTestButtons(entityName);
        return true;
    }

    /**
     * Muestra una ventana modal con los errores indicados.
     *
     * @param {string[]} errors lista de mensajes de error.
     * @returns {void}
     */
    showErrorModal(errors) {
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

        errorBody.innerHTML = html;
        overlay.hidden = false;
        modal.hidden = false;
    }

    /**
     * Pinta los botones "Test de Atributos", "Test de Formulario" y
     * "Volver al Inicio" en la zona de trabajo.
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

        workArea.appendChild(btnContainer);

        var self = this;
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
}
