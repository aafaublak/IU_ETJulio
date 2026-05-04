class Gestor {
    constructor() {
        this.currentEntity = null;
    }

    seleccionarEntidad(entityName) {
        this.currentEntity = entityName;
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
            errors.push("No se encontro la variable '" + entityName + "_TestSubmit' (fichero " + entityName + "_TestSubmit.js).");
        }

        if (errors.length > 0) {
            this.showErrorModal(errors);
            this.hideTestButtons();
            return false;
        }

        this.showTestButtons(entityName);
        return true;
    }

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

    hideTestButtons() {
        var workArea = document.getElementById("work-area");
        if (workArea) {
            workArea.innerHTML = '<div class="welcome-section"><h2>Sistema de Pruebas</h2><p>Seleccione una entidad del menu para iniciar las pruebas de validacion.</p></div>';
        }
    }
}
