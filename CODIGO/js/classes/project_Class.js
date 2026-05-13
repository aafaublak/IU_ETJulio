/**
 * Clase project
 *
 * Clase asociada a la entidad project. Solo se ha creado porque la
 * entidad necesita validaciones personalizadas: comprobar que las
 * fechas que se introducen son fechas reales del calendario y, para
 * end_date_project, que ademas es posterior a start_date_project.
 *
 * Los metodos *_personalized_validation se invocan automaticamente
 * desde Validations.personalized cuando en la estructura el atributo
 * lleva la clave "personalized" con personalize: true.
 */
class project {

    constructor() {
        this.name = "project";
    }

    /**
     * Convierte una cadena dd/mm/aaaa en un objeto Date solo si la
     * fecha es valida (controla anos bisiestos y dias por mes).
     *
     * @param {string} str cadena con la fecha.
     * @returns {Date|null} objeto Date o null si la cadena no es
     *                      una fecha real.
     */
    parseDate(str) {
        if (typeof str !== "string") return null;
        var match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(str);
        if (!match) return null;
        var d = parseInt(match[1], 10);
        var m = parseInt(match[2], 10);
        var y = parseInt(match[3], 10);
        var date = new Date(y, m - 1, d);
        // new Date trata anos 0-99 como 1900-1999; setFullYear fuerza el ano real
        if (y >= 0 && y <= 99) date.setFullYear(y);
        if (date.getFullYear() !== y ||
            (date.getMonth() + 1) !== m ||
            date.getDate() !== d) return null;
        return date;
    }

    /**
     * Validacion personalizada para end_date_project.
     * Comprueba dos cosas: que la fecha sea una fecha real y, si
     * existe start_date_project, que la fecha de fin sea posterior
     * a la de inicio.
     *
     * @param {string} value valor del atributo end_date_project.
     * @param {object} allValues objeto con todos los valores del
     *                           formulario; se espera start_date_project.
     * @returns {boolean|string} true si valida, o codigo de error.
     */
    end_date_project_personalized_validation(value, allValues) {
        if (!value) return true;

        var endDate = this.parseDate(value);
        if (endDate === null) {
            return "end_date_project_personalized_KO";
        }

        if (!allValues || !allValues.start_date_project) return true;
        var startDate = this.parseDate(allValues.start_date_project);
        if (startDate === null) return true;

        if (endDate <= startDate) {
            return "end_date_project_personalized_KO";
        }
        return true;
    }
}
