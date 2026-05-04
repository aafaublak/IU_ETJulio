class Validations {
    constructor() {}

    _readValue(elementId) {
        var el = document.getElementById(elementId);
        if (!el) return null;

        if (el.type === "file") {
            if (el.files && el.files[0]) return el.files[0].name;
            return el.value || "";
        }

        if (el.type === "checkbox") {
            return el.checked ? "true" : "";
        }

        if (el.getAttribute && el.getAttribute("data-radio-group")) {
            var radios = el.querySelectorAll('input[type="radio"]');
            for (var i = 0; i < radios.length; i++) {
                if (radios[i].checked) return radios[i].value;
            }
            return el.getAttribute("data-attempted-value") || "";
        }

        return el.value || "";
    }

    min_size(elementId, minSize) {
        var value = this._readValue(elementId);
        if (value === null) return true;
        return value.length >= minSize;
    }

    max_size(elementId, maxSize) {
        var value = this._readValue(elementId);
        if (value === null) return true;
        return value.length <= maxSize;
    }

    format(elementId, regexpStr) {
        var value = this._readValue(elementId);
        if (value === null) return true;
        if (value === "") return true;
        var regex = new RegExp(regexpStr);
        return regex.test(value);
    }

    no_file(elementId) {
        var el = document.getElementById(elementId);
        if (!el) return false;
        return !!(el.files && el.files.length > 0);
    }

    format_name_file(elementId, regexpStr) {
        var el = document.getElementById(elementId);
        if (!el || !el.files || !el.files[0]) return true;
        var fileName = el.files[0].name;
        var regex = new RegExp(regexpStr);
        return regex.test(fileName);
    }

    type_file(elementId, allowedTypes) {
        var el = document.getElementById(elementId);
        if (!el || !el.files || !el.files[0]) return true;
        var fileType = el.files[0].type;
        return allowedTypes.indexOf(fileType) !== -1;
    }

    max_size_file(elementId, maxSize) {
        var el = document.getElementById(elementId);
        if (!el || !el.files || !el.files[0]) return true;
        return el.files[0].size <= maxSize;
    }

    personalized(elementId, entityInstance, attrName, allValues) {
        var methodName = attrName + "_personalized_validation";
        if (entityInstance && typeof entityInstance[methodName] === "function") {
            var value = this._readValue(elementId);
            return entityInstance[methodName](value, allValues);
        }
        return true;
    }
}
