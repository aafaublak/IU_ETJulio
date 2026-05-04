class project {
    constructor() {
        this.name = "project";
    }

    end_date_project_personalized_validation(endDateValue, allValues) {
        if (!endDateValue || !allValues || !allValues.start_date_project) {
            return true;
        }

        var startDateStr = allValues.start_date_project;
        var endDateStr = endDateValue;
        var regexDate = /^\d{2}\/\d{2}\/\d{4}$/;

        if (!regexDate.test(startDateStr) || !regexDate.test(endDateStr)) {
            return true;
        }

        var partsStart = startDateStr.split("/");
        var partsEnd = endDateStr.split("/");

        var startDate = new Date(parseInt(partsStart[2]), parseInt(partsStart[1]) - 1, parseInt(partsStart[0]));
        var endDate = new Date(parseInt(partsEnd[2]), parseInt(partsEnd[1]) - 1, parseInt(partsEnd[0]));

        if (endDate <= startDate) {
            return "end_date_project_personalized_KO";
        }

        return true;
    }
}
