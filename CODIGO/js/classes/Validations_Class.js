/**
 * Clase Validations
 *
 * Contiene las validaciones atomicas que se aplican sobre los campos de
 * un formulario. Cada metodo recibe el id del elemento HTML al que se
 * aplica y, si corresponde, un parametro adicional (longitud, regex...).
 *
 * Cada validacion lee el valor por si misma a traves de readValue() o
 * readFile() (no recibe el valor por parametro) para que se respete la
 * indicacion del enunciado de pasar siempre el id.
 */
class Validations {

    constructor() {}

    /**
     * Lee el valor textual del elemento HTML identificado por elementId.
     *
     * @param {string} elementId id del elemento HTML.
     * @returns {string|null} cadena con el valor del elemento, o null si
     *                        el elemento no existe en el DOM.
     */
    readValue(elementId) {
        var el = document.getElementById(elementId);
        if (!el) return null;

        if (el.type === "file") {
            if (el.files && el.files[0]) return el.files[0].name;
            return "";
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

    /**
     * Devuelve el primer File asociado a un input type=file.
     *
     * @param {string} elementId id del input file.
     * @returns {File|null} fichero seleccionado o null si no hay.
     */
    readFile(elementId) {
        var el = document.getElementById(elementId);
        if (!el) return null;
        if (!el.files || el.files.length === 0) return null;
        return el.files[0];
    }

    /**
     * Comprueba que la longitud del valor del elemento sea >= minSize.
     *
     * @param {string} elementId id del elemento.
     * @param {number} minSize tamano minimo requerido.
     * @returns {boolean} true si cumple la condicion.
     */
    min_size(elementId, minSize) {
        var value = this.readValue(elementId);
        if (value === null) return false;
        return value.length >= minSize;
    }

    /**
     * Comprueba que la longitud del valor del elemento sea <= maxSize.
     *
     * @param {string} elementId id del elemento.
     * @param {number} maxSize tamano maximo permitido.
     * @returns {boolean} true si cumple la condicion.
     */
    max_size(elementId, maxSize) {
        var value = this.readValue(elementId);
        if (value === null) return false;
        return value.length <= maxSize;
    }

    /**
     * Comprueba que el valor del elemento case con la expresion regular.
     * Si el elemento no existe o la expresion no es una cadena devuelve
     * false (la validacion no se ha podido realizar correctamente).
     *
     * @param {string} elementId id del elemento.
     * @param {string} regexpStr expresion regular en formato cadena.
     * @returns {boolean} true si el valor cumple el formato.
     */
    format(elementId, regexpStr) {
        if (typeof regexpStr !== "string" || regexpStr === "") return false;
        var value = this.readValue(elementId);
        if (value === null) return false;
        var regex = new RegExp(regexpStr);
        return regex.test(value);
    }

    /**
     * Comprueba que la cadena leida sea una fecha valida en formato
     * dd/mm/aaaa (controla dias por mes y anos bisiestos).
     *
     * @param {string} elementId id del elemento.
     * @returns {boolean} true si la fecha existe en el calendario.
     */
    date(elementId) {
        var value = this.readValue(elementId);
        if (value === null || value === "") return false;
        var match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(value);
        if (!match) return false;
        var d = parseInt(match[1], 10);
        var m = parseInt(match[2], 10);
        var y = parseInt(match[3], 10);
        var dateObj = new Date(y, m - 1, d);
        if (y >= 0 && y <= 99) dateObj.setFullYear(y);
        return dateObj.getFullYear() === y &&
               (dateObj.getMonth() + 1) === m &&
               dateObj.getDate() === d;
    }

    /**
     * Comprueba que un input file tenga un fichero seleccionado.
     *
     * @param {string} elementId id del input file.
     * @returns {boolean} true si hay fichero.
     */
    no_file(elementId) {
        return this.readFile(elementId) !== null;
    }

    /**
     * Comprueba que el nombre del fichero seleccionado case con la
     * expresion regular indicada.
     *
     * @param {string} elementId id del input file.
     * @param {string} regexpStr expresion regular en formato cadena.
     * @returns {boolean} true si el nombre cumple el formato.
     */
    format_name_file(elementId, regexpStr) {
        if (typeof regexpStr !== "string" || regexpStr === "") return false;
        var file = this.readFile(elementId);
        if (file === null) return false;
        var regex = new RegExp(regexpStr);
        return regex.test(file.name);
    }

    /**
     * Comprueba que el mime type del fichero seleccionado este en la
     * lista de tipos permitidos.
     *
     * @param {string} elementId id del input file.
     * @param {Array<string>} allowedTypes mime types admitidos.
     * @returns {boolean} true si esta permitido.
     */
    type_file(elementId, allowedTypes) {
        if (!Array.isArray(allowedTypes)) return false;
        var file = this.readFile(elementId);
        if (file === null) return false;
        return allowedTypes.indexOf(file.type) !== -1;
    }

    /**
     * Comprueba que el tamano en bytes del fichero seleccionado no
     * supere el maximo indicado.
     *
     * @param {string} elementId id del input file.
     * @param {number} maxSize tamano maximo en bytes.
     * @returns {boolean} true si no supera el tamano.
     */
    max_size_file(elementId, maxSize) {
        var file = this.readFile(elementId);
        if (file === null) return false;
        return file.size <= maxSize;
    }

    /**
     * Lanza la validacion personalizada definida en la clase de la
     * entidad. El nombre del metodo a invocar se obtiene a partir del
     * nombre del atributo: <attrName>_personalized_validation.
     *
     * @param {string} elementId id del elemento HTML.
     * @param {object} entityInstance instancia de la clase de la entidad.
     * @param {string} attrName nombre del atributo.
     * @param {object} allValues objeto con todos los valores del formulario.
     * @returns {boolean|string} true si valido, o el codigo de error.
     */
    personalized(elementId, entityInstance, attrName, allValues) {
        var methodName = attrName + "_personalized_validation";
        if (entityInstance && typeof entityInstance[methodName] === "function") {
            var value = this.readValue(elementId);
            return entityInstance[methodName](value, allValues);
        }
        return true;
    }
}
