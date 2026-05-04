class ValidateFieldsForm {
    constructor() {
        this.validations = new Validations();
        this.container = null;
    }

    createField(attrName, attrDef, action) {
        var htmlDef = attrDef.html || {};
        var element;

        var fileMode = (htmlDef.tag === "input" && htmlDef.type === "file") || htmlDef.tag === "file";
        if (fileMode && action && attrDef.validations && attrDef.validations[action]) {
            var v = attrDef.validations[action];
            var hasFileSpecific = v.no_file || v.type_file || v.format_name_file || v.max_size_file;
            if (!hasFileSpecific) fileMode = false;
        }

        switch (htmlDef.tag) {
            case "input":
                element = document.createElement("input");
                element.type = fileMode ? "file" : "text";
                break;
            case "textarea":
                element = document.createElement("textarea");
                break;
            case "select":
                element = document.createElement("select");
                var emptyOpt = document.createElement("option");
                emptyOpt.value = "";
                emptyOpt.textContent = "-- Seleccione --";
                element.appendChild(emptyOpt);
                if (htmlDef.options && Array.isArray(htmlDef.options)) {
                    htmlDef.options.forEach(function(opt) {
                        var option = document.createElement("option");
                        option.value = opt;
                        option.textContent = opt;
                        element.appendChild(option);
                    });
                }
                break;
            case "checkbox":
                element = document.createElement("input");
                element.type = "checkbox";
                break;
            case "radio":
                element = document.createElement("div");
                element.setAttribute("data-radio-group", attrName);
                if (htmlDef.options && Array.isArray(htmlDef.options)) {
                    htmlDef.options.forEach(function(opt, i) {
                        var radio = document.createElement("input");
                        radio.type = "radio";
                        radio.name = attrName;
                        radio.value = opt;
                        radio.id = attrName + "_" + i;
                        element.appendChild(radio);
                        var label = document.createElement("label");
                        label.htmlFor = radio.id;
                        label.textContent = opt;
                        element.appendChild(label);
                    });
                }
                break;
            case "file":
                element = document.createElement("input");
                element.type = fileMode ? "file" : "text";
                break;
            default:
                element = document.createElement("input");
                element.type = "text";
        }

        element.id = attrName;
        element.name = attrName;
        return element;
    }

    setValue(element, value, fileData) {
        if (element.type === "file" && fileData && typeof fileData === "object") {
            var mockFile = new File(
                [new ArrayBuffer(fileData.size || 0)],
                fileData.name || "test.pdf",
                { type: fileData.type || "application/pdf" }
            );
            var dataTransfer = new DataTransfer();
            dataTransfer.items.add(mockFile);
            element.files = dataTransfer.files;
            return;
        }

        if (element.type === "file") {
            return;
        }

        if (element.type === "checkbox") {
            element.checked = value === true || value === "true" || value === 1 || value === "1";
            element.value = element.checked ? "true" : "";
            return;
        }

        if (element.getAttribute && element.getAttribute("data-radio-group")) {
            var radios = element.querySelectorAll('input[type="radio"]');
            var strRadioVal = value !== undefined && value !== null ? String(value) : "";
            for (var i = 0; i < radios.length; i++) {
                radios[i].checked = (radios[i].value === strRadioVal);
            }
            element.setAttribute("data-attempted-value", strRadioVal);
            return;
        }

        if (element.tagName === "SELECT") {
            var strVal = value !== undefined && value !== null ? String(value) : "";
            if (strVal !== "") {
                var hasOption = false;
                for (var j = 0; j < element.options.length; j++) {
                    if (element.options[j].value === strVal) { hasOption = true; break; }
                }
                if (!hasOption) {
                    var newOpt = document.createElement("option");
                    newOpt.value = strVal;
                    newOpt.textContent = strVal;
                    element.appendChild(newOpt);
                }
            }
            element.value = strVal;
            return;
        }

        element.value = value !== undefined && value !== null ? String(value) : "";
    }

    executeValidation(validationType, elementId, param, entityInstance, attrName, allValues) {
        if (validationType === "personalized") {
            return this.validations.personalized(elementId, entityInstance, attrName, allValues);
        }

        if (typeof this.validations[validationType] === "function") {
            return this.validations[validationType](elementId, param);
        }

        return true;
    }

    createTestContainer() {
        var existing = document.getElementById("_test_fields_container_");
        if (existing) existing.remove();

        this.container = document.createElement("div");
        this.container.id = "_test_fields_container_";
        this.container.hidden = true;
        document.body.appendChild(this.container);
        return this.container;
    }

    cleanup() {
        if (this.container) {
            this.container.remove();
            this.container = null;
        }
    }
}
