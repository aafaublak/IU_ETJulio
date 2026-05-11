var project_def_tests = [
    // === id_project - SEARCH (PK autoincrement) ===
    ["project", "id_project", "input", 1, "Validar max_size id en SEARCH", "SEARCH", "id_project_max_size_KO", "ID supera tamano maximo"],
    ["project", "id_project", "input", 2, "Validar format id en SEARCH", "SEARCH", "id_project_format_KO", "ID con formato incorrecto"],
    ["project", "id_project", "input", 3, "Validar id correcto en SEARCH", "SEARCH", true, "ID correcto"],

    // === name_project - ADD ===
    ["project", "name_project", "input", 4, "Validar min_size name en ADD (min 15)", "ADD", "name_project_min_size_KO", "Nombre demasiado corto"],
    ["project", "name_project", "input", 5, "Validar max_size name en ADD", "ADD", "name_project_max_size_KO", "Nombre demasiado largo"],
    ["project", "name_project", "input", 6, "Validar format name en ADD", "ADD", "name_project_format_KO", "Nombre con caracteres invalidos"],
    ["project", "name_project", "input", 7, "Validar name correcto en ADD", "ADD", true, "Nombre correcto"],

    // === name_project - EDIT ===
    ["project", "name_project", "input", 8, "Validar min_size name en EDIT", "EDIT", "name_project_min_size_KO", "Nombre demasiado corto en EDIT"],
    ["project", "name_project", "input", 9, "Validar max_size name en EDIT", "EDIT", "name_project_max_size_KO", "Nombre demasiado largo en EDIT"],
    ["project", "name_project", "input", 10, "Validar format name en EDIT", "EDIT", "name_project_format_KO", "Nombre con caracteres invalidos en EDIT"],
    ["project", "name_project", "input", 11, "Validar name correcto en EDIT", "EDIT", true, "Nombre correcto en EDIT"],

    // === name_project - SEARCH ===
    ["project", "name_project", "input", 12, "Validar max_size name en SEARCH", "SEARCH", "name_project_max_size_KO", "Nombre demasiado largo en SEARCH"],
    ["project", "name_project", "input", 13, "Validar format name en SEARCH", "SEARCH", "name_project_format_KO", "Nombre con caracteres invalidos en SEARCH"],
    ["project", "name_project", "input", 14, "Validar name correcto en SEARCH", "SEARCH", true, "Nombre correcto en SEARCH"],

    // === start_date_project - ADD ===
    ["project", "start_date_project", "input", 15, "Validar format fecha inicio en ADD", "ADD", "start_date_project_format_KO", "Formato de fecha incorrecto"],
    ["project", "start_date_project", "input", 16, "Validar fecha inicio correcta en ADD", "ADD", true, "Fecha inicio correcta"],

    // === start_date_project - EDIT ===
    ["project", "start_date_project", "input", 17, "Validar format fecha inicio en EDIT", "EDIT", "start_date_project_format_KO", "Formato de fecha incorrecto en EDIT"],
    ["project", "start_date_project", "input", 18, "Validar fecha inicio correcta en EDIT", "EDIT", true, "Fecha inicio correcta en EDIT"],

    // === start_date_project - SEARCH ===
    ["project", "start_date_project", "input", 19, "Validar format fecha inicio en SEARCH", "SEARCH", "start_date_project_format_KO", "Formato de fecha incorrecto en SEARCH"],
    ["project", "start_date_project", "input", 20, "Validar fecha inicio correcta en SEARCH", "SEARCH", true, "Fecha inicio correcta en SEARCH"],

    // === end_date_project - ADD ===
    ["project", "end_date_project", "input", 21, "Validar format fecha fin en ADD", "ADD", "end_date_project_format_KO", "Formato de fecha fin incorrecto"],
    ["project", "end_date_project", "input", 22, "Validar personalized end_date > start_date en ADD", "ADD", "end_date_project_personalized_KO", "Fecha fin anterior a fecha inicio"],
    ["project", "end_date_project", "input", 23, "Validar fecha fin correcta en ADD", "ADD", true, "Fecha fin correcta"],

    // === end_date_project - EDIT ===
    ["project", "end_date_project", "input", 24, "Validar format fecha fin en EDIT", "EDIT", "end_date_project_format_KO", "Formato de fecha fin incorrecto en EDIT"],
    ["project", "end_date_project", "input", 25, "Validar personalized end_date > start_date en EDIT", "EDIT", "end_date_project_personalized_KO", "Fecha fin anterior a fecha inicio en EDIT"],
    ["project", "end_date_project", "input", 26, "Validar fecha fin correcta en EDIT", "EDIT", true, "Fecha fin correcta en EDIT"],

    // === end_date_project - SEARCH ===
    ["project", "end_date_project", "input", 27, "Validar format fecha fin en SEARCH", "SEARCH", "end_date_project_format_KO", "Formato de fecha fin incorrecto en SEARCH"],
    ["project", "end_date_project", "input", 28, "Validar fecha fin correcta en SEARCH", "SEARCH", true, "Fecha fin correcta en SEARCH"],

    // === responsable_project - ADD ===
    ["project", "responsable_project", "input", 29, "Validar min_size responsable en ADD", "ADD", "responsable_project_min_size_KO", "Responsable demasiado corto"],
    ["project", "responsable_project", "input", 30, "Validar max_size responsable en ADD", "ADD", "responsable_project_max_size_KO", "Responsable demasiado largo"],
    ["project", "responsable_project", "input", 31, "Validar format responsable en ADD", "ADD", "responsable_project_format_KO", "Responsable con caracteres invalidos"],
    ["project", "responsable_project", "input", 32, "Validar responsable correcto en ADD", "ADD", true, "Responsable correcto"],

    // === responsable_project - EDIT ===
    ["project", "responsable_project", "input", 33, "Validar min_size responsable en EDIT", "EDIT", "responsable_project_min_size_KO", "Responsable demasiado corto en EDIT"],
    ["project", "responsable_project", "input", 34, "Validar max_size responsable en EDIT", "EDIT", "responsable_project_max_size_KO", "Responsable demasiado largo en EDIT"],
    ["project", "responsable_project", "input", 35, "Validar format responsable en EDIT", "EDIT", "responsable_project_format_KO", "Responsable con caracteres invalidos en EDIT"],
    ["project", "responsable_project", "input", 36, "Validar responsable correcto en EDIT", "EDIT", true, "Responsable correcto en EDIT"],

    // === responsable_project - SEARCH ===
    ["project", "responsable_project", "input", 37, "Validar max_size responsable en SEARCH", "SEARCH", "responsable_project_max_size_KO", "Responsable demasiado largo en SEARCH"],
    ["project", "responsable_project", "input", 38, "Validar format responsable en SEARCH", "SEARCH", "responsable_project_format_KO", "Responsable con caracteres invalidos en SEARCH"],
    ["project", "responsable_project", "input", 39, "Validar responsable correcto en SEARCH", "SEARCH", true, "Responsable correcto en SEARCH"],

    // === organization_project - ADD ===
    ["project", "organization_project", "input", 40, "Validar min_size organization en ADD", "ADD", "organization_project_min_size_KO", "Organizacion demasiado corta"],
    ["project", "organization_project", "input", 41, "Validar max_size organization en ADD", "ADD", "organization_project_max_size_KO", "Organizacion demasiado larga"],
    ["project", "organization_project", "input", 42, "Validar format organization en ADD", "ADD", "organization_project_format_KO", "Organizacion con caracteres invalidos"],
    ["project", "organization_project", "input", 43, "Validar organization correcta en ADD", "ADD", true, "Organizacion correcta"],

    // === organization_project - EDIT ===
    ["project", "organization_project", "input", 44, "Validar min_size organization en EDIT", "EDIT", "organization_project_min_size_KO", "Organizacion demasiado corta en EDIT"],
    ["project", "organization_project", "input", 45, "Validar max_size organization en EDIT", "EDIT", "organization_project_max_size_KO", "Organizacion demasiado larga en EDIT"],
    ["project", "organization_project", "input", 46, "Validar format organization en EDIT", "EDIT", "organization_project_format_KO", "Organizacion con caracteres invalidos en EDIT"],
    ["project", "organization_project", "input", 47, "Validar organization correcta en EDIT", "EDIT", true, "Organizacion correcta en EDIT"],

    // === organization_project - SEARCH ===
    ["project", "organization_project", "input", 48, "Validar max_size organization en SEARCH", "SEARCH", "organization_project_max_size_KO", "Organizacion demasiado larga en SEARCH"],
    ["project", "organization_project", "input", 49, "Validar format organization en SEARCH", "SEARCH", "organization_project_format_KO", "Organizacion con caracteres invalidos en SEARCH"],
    ["project", "organization_project", "input", 50, "Validar organization correcta en SEARCH", "SEARCH", true, "Organizacion correcta en SEARCH"],

    // === description_project - ADD ===
    ["project", "description_project", "textarea", 51, "Validar min_size description en ADD (min 30)", "ADD", "description_project_min_size_KO", "Descripcion demasiado corta"],
    ["project", "description_project", "textarea", 52, "Validar max_size description en ADD", "ADD", "description_project_max_size_KO", "Descripcion demasiado larga"],
    ["project", "description_project", "textarea", 53, "Validar format description en ADD (solo ASCII)", "ADD", "description_project_format_KO", "Descripcion con caracteres no ASCII"],
    ["project", "description_project", "textarea", 54, "Validar description correcta en ADD", "ADD", true, "Descripcion correcta"],

    // === description_project - EDIT ===
    ["project", "description_project", "textarea", 55, "Validar min_size description en EDIT", "EDIT", "description_project_min_size_KO", "Descripcion demasiado corta en EDIT"],
    ["project", "description_project", "textarea", 56, "Validar max_size description en EDIT", "EDIT", "description_project_max_size_KO", "Descripcion demasiado larga en EDIT"],
    ["project", "description_project", "textarea", 57, "Validar format description en EDIT", "EDIT", "description_project_format_KO", "Descripcion con caracteres no ASCII en EDIT"],
    ["project", "description_project", "textarea", 58, "Validar description correcta en EDIT", "EDIT", true, "Descripcion correcta en EDIT"],

    // === description_project - SEARCH ===
    ["project", "description_project", "textarea", 59, "Validar max_size description en SEARCH", "SEARCH", "description_project_max_size_KO", "Descripcion demasiado larga en SEARCH"],
    ["project", "description_project", "textarea", 60, "Validar format description en SEARCH", "SEARCH", "description_project_format_KO", "Descripcion con caracteres no ASCII en SEARCH"],
    ["project", "description_project", "textarea", 61, "Validar description correcta en SEARCH", "SEARCH", true, "Descripcion correcta en SEARCH"],

    // === file_project - ADD ===
    ["project", "file_project", "file", 62, "Validar no_file en ADD", "ADD", "file_project_no_file_KO", "Sin fichero"],
    ["project", "file_project", "file", 63, "Validar min_size nombre fichero en ADD", "ADD", "file_project_min_size_KO", "Nombre del fichero demasiado corto"],
    ["project", "file_project", "file", 64, "Validar max_size nombre fichero en ADD", "ADD", "file_project_max_size_KO", "Nombre del fichero demasiado largo"],
    ["project", "file_project", "file", 65, "Validar format_name_file en ADD", "ADD", "file_project_format_name_file_KO", "Nombre fichero incorrecto"],
    ["project", "file_project", "file", 66, "Validar type_file en ADD", "ADD", "file_project_type_file_KO", "Tipo fichero no permitido"],
    ["project", "file_project", "file", 67, "Validar max_size_file en ADD", "ADD", "file_project_max_size_file_KO", "Fichero demasiado grande"],
    ["project", "file_project", "file", 68, "Validar file correcto en ADD", "ADD", true, "Fichero correcto"],

    // === file_project - EDIT ===
    ["project", "file_project", "file", 69, "Validar min_size nombre fichero en EDIT", "EDIT", "file_project_min_size_KO", "Nombre del fichero demasiado corto en EDIT"],
    ["project", "file_project", "file", 70, "Validar max_size nombre fichero en EDIT", "EDIT", "file_project_max_size_KO", "Nombre del fichero demasiado largo en EDIT"],
    ["project", "file_project", "file", 71, "Validar format_name_file en EDIT", "EDIT", "file_project_format_name_file_KO", "Nombre fichero incorrecto en EDIT"],
    ["project", "file_project", "file", 72, "Validar type_file en EDIT", "EDIT", "file_project_type_file_KO", "Tipo fichero no permitido en EDIT"],
    ["project", "file_project", "file", 73, "Validar max_size_file en EDIT", "EDIT", "file_project_max_size_file_KO", "Fichero demasiado grande en EDIT"],
    ["project", "file_project", "file", 74, "Validar file correcto en EDIT", "EDIT", true, "Fichero correcto en EDIT"],

    // === file_project - SEARCH (modo texto) ===
    ["project", "file_project", "input", 75, "Validar max_size de file en SEARCH", "SEARCH", "file_project_max_size_KO", "Nombre del fichero demasiado largo en SEARCH"],
    ["project", "file_project", "input", 76, "Validar format de file en SEARCH", "SEARCH", "file_project_format_KO", "Formato incorrecto en busqueda"],
    ["project", "file_project", "input", 77, "Validar file correcto en SEARCH", "SEARCH", true, "Busqueda de fichero correcta"],

    // === code_project - ADD ===
    ["project", "code_project", "input", 78, "Validar min_size code en ADD", "ADD", "code_project_min_size_KO", "Codigo demasiado corto"],
    ["project", "code_project", "input", 79, "Validar max_size code en ADD", "ADD", "code_project_max_size_KO", "Codigo demasiado largo"],
    ["project", "code_project", "input", 80, "Validar format code en ADD", "ADD", "code_project_format_KO", "Codigo con caracteres invalidos"],
    ["project", "code_project", "input", 81, "Validar code correcto en ADD", "ADD", true, "Codigo correcto"],

    // === code_project - EDIT ===
    ["project", "code_project", "input", 82, "Validar min_size code en EDIT", "EDIT", "code_project_min_size_KO", "Codigo demasiado corto en EDIT"],
    ["project", "code_project", "input", 83, "Validar max_size code en EDIT", "EDIT", "code_project_max_size_KO", "Codigo demasiado largo en EDIT"],
    ["project", "code_project", "input", 84, "Validar format code en EDIT", "EDIT", "code_project_format_KO", "Codigo con caracteres invalidos en EDIT"],
    ["project", "code_project", "input", 85, "Validar code correcto en EDIT", "EDIT", true, "Codigo correcto en EDIT"],

    // === code_project - SEARCH ===
    ["project", "code_project", "input", 86, "Validar max_size code en SEARCH", "SEARCH", "code_project_max_size_KO", "Codigo demasiado largo en SEARCH"],
    ["project", "code_project", "input", 87, "Validar format code en SEARCH", "SEARCH", "code_project_format_KO", "Codigo con caracteres invalidos en SEARCH"],
    ["project", "code_project", "input", 88, "Validar code correcto en SEARCH", "SEARCH", true, "Codigo correcto en SEARCH"],

    // === acronym_project - ADD ===
    ["project", "acronym_project", "input", 89, "Validar min_size acronym en ADD", "ADD", "acronym_project_min_size_KO", "Acronimo demasiado corto"],
    ["project", "acronym_project", "input", 90, "Validar max_size acronym en ADD", "ADD", "acronym_project_max_size_KO", "Acronimo demasiado largo"],
    ["project", "acronym_project", "input", 91, "Validar format acronym en ADD (sin espacios)", "ADD", "acronym_project_format_KO", "Acronimo con formato incorrecto"],
    ["project", "acronym_project", "input", 92, "Validar acronym correcto en ADD", "ADD", true, "Acronimo correcto"],

    // === acronym_project - EDIT ===
    ["project", "acronym_project", "input", 93, "Validar min_size acronym en EDIT", "EDIT", "acronym_project_min_size_KO", "Acronimo demasiado corto en EDIT"],
    ["project", "acronym_project", "input", 94, "Validar max_size acronym en EDIT", "EDIT", "acronym_project_max_size_KO", "Acronimo demasiado largo en EDIT"],
    ["project", "acronym_project", "input", 95, "Validar format acronym en EDIT", "EDIT", "acronym_project_format_KO", "Acronimo con formato incorrecto en EDIT"],
    ["project", "acronym_project", "input", 96, "Validar acronym correcto en EDIT", "EDIT", true, "Acronimo correcto en EDIT"],

    // === acronym_project - SEARCH ===
    ["project", "acronym_project", "input", 97, "Validar max_size acronym en SEARCH", "SEARCH", "acronym_project_max_size_KO", "Acronimo demasiado largo en SEARCH"],
    ["project", "acronym_project", "input", 98, "Validar format acronym en SEARCH", "SEARCH", "acronym_project_format_KO", "Acronimo con formato incorrecto en SEARCH"],
    ["project", "acronym_project", "input", 99, "Validar acronym correcto en SEARCH", "SEARCH", true, "Acronimo correcto en SEARCH"],

    // === id_sampling_methodology - ADD ===
    ["project", "id_sampling_methodology", "input", 100, "Validar min_size id_sampling en ADD", "ADD", "id_sampling_methodology_min_size_KO", "ID metodologia demasiado corto"],
    ["project", "id_sampling_methodology", "input", 101, "Validar max_size id_sampling en ADD", "ADD", "id_sampling_methodology_max_size_KO", "ID metodologia demasiado largo"],
    ["project", "id_sampling_methodology", "input", 102, "Validar format id_sampling en ADD", "ADD", "id_sampling_methodology_format_KO", "ID metodologia con formato incorrecto"],
    ["project", "id_sampling_methodology", "input", 103, "Validar id_sampling correcto en ADD", "ADD", true, "ID metodologia correcto"],

    // === id_sampling_methodology - EDIT ===
    ["project", "id_sampling_methodology", "input", 104, "Validar min_size id_sampling en EDIT", "EDIT", "id_sampling_methodology_min_size_KO", "ID metodologia demasiado corto en EDIT"],
    ["project", "id_sampling_methodology", "input", 105, "Validar max_size id_sampling en EDIT", "EDIT", "id_sampling_methodology_max_size_KO", "ID metodologia demasiado largo en EDIT"],
    ["project", "id_sampling_methodology", "input", 106, "Validar format id_sampling en EDIT", "EDIT", "id_sampling_methodology_format_KO", "ID metodologia con formato incorrecto en EDIT"],
    ["project", "id_sampling_methodology", "input", 107, "Validar id_sampling correcto en EDIT", "EDIT", true, "ID metodologia correcto en EDIT"],

    // === id_sampling_methodology - SEARCH ===
    ["project", "id_sampling_methodology", "input", 108, "Validar max_size id_sampling en SEARCH", "SEARCH", "id_sampling_methodology_max_size_KO", "ID metodologia demasiado largo en SEARCH"],
    ["project", "id_sampling_methodology", "input", 109, "Validar format id_sampling en SEARCH", "SEARCH", "id_sampling_methodology_format_KO", "ID metodologia con formato incorrecto en SEARCH"],
    ["project", "id_sampling_methodology", "input", 110, "Validar id_sampling correcto en SEARCH", "SEARCH", true, "ID metodologia correcto en SEARCH"],

    // === fechas - validacion personalizada de fecha real ===
    // (se aprovecha que start_date y end_date tienen personalize: true para
    //  comprobar que la fecha existe en el calendario, no solo que cumple el regex)
    ["project", "start_date_project", "input", 111, "Validar personalized fecha real start_date en ADD (ej. 31/02/2024)", "ADD", "start_date_project_personalized_KO", "Fecha de inicio inexistente en el calendario"],
    ["project", "start_date_project", "input", 112, "Validar personalized fecha real start_date en EDIT", "EDIT", "start_date_project_personalized_KO", "Fecha de inicio inexistente en el calendario EDIT"],
    ["project", "end_date_project", "input", 113, "Validar personalized fecha real end_date en ADD (ej. 30/02/2024)", "ADD", "end_date_project_personalized_KO", "Fecha de fin inexistente en el calendario"],
    ["project", "end_date_project", "input", 114, "Validar personalized fecha real end_date en EDIT", "EDIT", "end_date_project_personalized_KO", "Fecha de fin inexistente en el calendario EDIT"]
];

var project_pruebas = [
    // === id SEARCH ===
    ["project", "id_project", 1, 1, "SEARCH", {"id_project": "123456789012"}, "id_project_max_size_KO"],
    ["project", "id_project", 2, 2, "SEARCH", {"id_project": "abc"}, "id_project_format_KO"],
    ["project", "id_project", 3, 3, "SEARCH", {"id_project": "999"}, true],

    // === name ADD ===
    ["project", "name_project", 4, 4, "ADD", {"name_project": "Short Name"}, "name_project_min_size_KO"],
    ["project", "name_project", 5, 5, "ADD", {"name_project": "A".repeat(101)}, "name_project_max_size_KO"],
    ["project", "name_project", 6, 6, "ADD", {"name_project": "Project Name With 123"}, "name_project_format_KO"],
    ["project", "name_project", 7, 7, "ADD", {"name_project": "Valid Project Name For Testing"}, true],

    // === name EDIT ===
    ["project", "name_project", 8, 8, "EDIT", {"name_project": "Short Edit"}, "name_project_min_size_KO"],
    ["project", "name_project", 9, 9, "EDIT", {"name_project": "A".repeat(101)}, "name_project_max_size_KO"],
    ["project", "name_project", 10, 10, "EDIT", {"name_project": "Project Name Edited 99"}, "name_project_format_KO"],
    ["project", "name_project", 11, 11, "EDIT", {"name_project": "Edited Valid Project Name"}, true],

    // === name SEARCH ===
    ["project", "name_project", 12, 12, "SEARCH", {"name_project": "A".repeat(101)}, "name_project_max_size_KO"],
    ["project", "name_project", 13, 13, "SEARCH", {"name_project": "Search Name 1"}, "name_project_format_KO"],
    ["project", "name_project", 14, 14, "SEARCH", {"name_project": "Search Project"}, true],

    // === start_date ADD ===
    ["project", "start_date_project", 15, 15, "ADD", {"start_date_project": "2024-01-15"}, "start_date_project_format_KO"],
    ["project", "start_date_project", 16, 16, "ADD", {"start_date_project": "15/01/2024"}, true],

    // === start_date EDIT ===
    ["project", "start_date_project", 17, 17, "EDIT", {"start_date_project": "2024-01-15"}, "start_date_project_format_KO"],
    ["project", "start_date_project", 18, 18, "EDIT", {"start_date_project": "01/01/2024"}, true],

    // === start_date SEARCH ===
    ["project", "start_date_project", 19, 19, "SEARCH", {"start_date_project": "wrong-date"}, "start_date_project_format_KO"],
    ["project", "start_date_project", 20, 20, "SEARCH", {"start_date_project": "01/01/2024"}, true],

    // === end_date ADD ===
    ["project", "end_date_project", 21, 21, "ADD", {"end_date_project": "2024-12-31"}, "end_date_project_format_KO"],
    ["project", "end_date_project", 22, 22, "ADD", {"end_date_project": "01/01/2023", "start_date_project": "15/06/2024"}, "end_date_project_personalized_KO"],
    ["project", "end_date_project", 23, 23, "ADD", {"end_date_project": "31/12/2025", "start_date_project": "01/01/2024"}, true],

    // === end_date EDIT ===
    ["project", "end_date_project", 24, 24, "EDIT", {"end_date_project": "2024-12-31"}, "end_date_project_format_KO"],
    ["project", "end_date_project", 25, 25, "EDIT", {"end_date_project": "01/01/2023", "start_date_project": "15/06/2024"}, "end_date_project_personalized_KO"],
    ["project", "end_date_project", 26, 26, "EDIT", {"end_date_project": "31/12/2026", "start_date_project": "01/01/2024"}, true],

    // === end_date SEARCH ===
    ["project", "end_date_project", 27, 27, "SEARCH", {"end_date_project": "wrong-date"}, "end_date_project_format_KO"],
    ["project", "end_date_project", 28, 28, "SEARCH", {"end_date_project": "31/12/2025"}, true],

    // === responsable ADD ===
    ["project", "responsable_project", 29, 29, "ADD", {"responsable_project": "Abc"}, "responsable_project_min_size_KO"],
    ["project", "responsable_project", 30, 30, "ADD", {"responsable_project": "A".repeat(61)}, "responsable_project_max_size_KO"],
    ["project", "responsable_project", 31, 31, "ADD", {"responsable_project": "Juan 123"}, "responsable_project_format_KO"],
    ["project", "responsable_project", 32, 32, "ADD", {"responsable_project": "Juan Garcia Lopez"}, true],

    // === responsable EDIT ===
    ["project", "responsable_project", 33, 33, "EDIT", {"responsable_project": "Abc"}, "responsable_project_min_size_KO"],
    ["project", "responsable_project", 34, 34, "EDIT", {"responsable_project": "A".repeat(61)}, "responsable_project_max_size_KO"],
    ["project", "responsable_project", 35, 35, "EDIT", {"responsable_project": "Maria 456"}, "responsable_project_format_KO"],
    ["project", "responsable_project", 36, 36, "EDIT", {"responsable_project": "Maria Fernandez"}, true],

    // === responsable SEARCH ===
    ["project", "responsable_project", 37, 37, "SEARCH", {"responsable_project": "A".repeat(61)}, "responsable_project_max_size_KO"],
    ["project", "responsable_project", 38, 38, "SEARCH", {"responsable_project": "Buscar 1"}, "responsable_project_format_KO"],
    ["project", "responsable_project", 39, 39, "SEARCH", {"responsable_project": "Juan"}, true],

    // === organization ADD ===
    ["project", "organization_project", 40, 40, "ADD", {"organization_project": "Abc"}, "organization_project_min_size_KO"],
    ["project", "organization_project", 41, 41, "ADD", {"organization_project": "A".repeat(101)}, "organization_project_max_size_KO"],
    ["project", "organization_project", 42, 42, "ADD", {"organization_project": "Org 123"}, "organization_project_format_KO"],
    ["project", "organization_project", 43, 43, "ADD", {"organization_project": "Universidad de Vigo"}, true],

    // === organization EDIT ===
    ["project", "organization_project", 44, 44, "EDIT", {"organization_project": "Abc"}, "organization_project_min_size_KO"],
    ["project", "organization_project", 45, 45, "EDIT", {"organization_project": "A".repeat(101)}, "organization_project_max_size_KO"],
    ["project", "organization_project", 46, 46, "EDIT", {"organization_project": "Centro 99"}, "organization_project_format_KO"],
    ["project", "organization_project", 47, 47, "EDIT", {"organization_project": "CSIC Espana"}, true],

    // === organization SEARCH ===
    ["project", "organization_project", 48, 48, "SEARCH", {"organization_project": "A".repeat(101)}, "organization_project_max_size_KO"],
    ["project", "organization_project", 49, 49, "SEARCH", {"organization_project": "Org 1"}, "organization_project_format_KO"],
    ["project", "organization_project", 50, 50, "SEARCH", {"organization_project": "Universidad"}, true],

    // === description ADD ===
    ["project", "description_project", 51, 51, "ADD", {"description_project": "Corto texto"}, "description_project_min_size_KO"],
    ["project", "description_project", 52, 52, "ADD", {"description_project": "A".repeat(501)}, "description_project_max_size_KO"],
    ["project", "description_project", 53, 53, "ADD", {"description_project": "Esta descripcion contiene caracteres ñ no ASCII para fallar el formato"}, "description_project_format_KO"],
    ["project", "description_project", 54, 54, "ADD", {"description_project": "This project involves a comprehensive study of soil characteristics and their impact"}, true],

    // === description EDIT ===
    ["project", "description_project", 55, 55, "EDIT", {"description_project": "Corto"}, "description_project_min_size_KO"],
    ["project", "description_project", 56, 56, "EDIT", {"description_project": "A".repeat(501)}, "description_project_max_size_KO"],
    ["project", "description_project", 57, 57, "EDIT", {"description_project": "Descripcion editada con caracter ñ que rompe formato ASCII imprimible"}, "description_project_format_KO"],
    ["project", "description_project", 58, 58, "EDIT", {"description_project": "Updated description for this project which is long enough for validation purposes"}, true],

    // === description SEARCH ===
    ["project", "description_project", 59, 59, "SEARCH", {"description_project": "A".repeat(501)}, "description_project_max_size_KO"],
    ["project", "description_project", 60, 60, "SEARCH", {"description_project": "Search ñ no ASCII"}, "description_project_format_KO"],
    ["project", "description_project", 61, 61, "SEARCH", {"description_project": "Search description"}, true],

    // === file ADD ===
    ["project", "file_project", 62, 62, "ADD", {"file_project": ""}, "file_project_no_file_KO"],
    ["project", "file_project", 63, 63, "ADD", {"file_project": {name: "ab.pdf", type: "application/pdf", size: 1000}}, "file_project_min_size_KO"],
    ["project", "file_project", 64, 64, "ADD", {"file_project": {name: "a".repeat(100) + ".pdf", type: "application/pdf", size: 1000}}, "file_project_max_size_KO"],
    ["project", "file_project", 65, 65, "ADD", {"file_project": {name: "mi archivo.pdf", type: "application/pdf", size: 5000}}, "file_project_format_name_file_KO"],
    ["project", "file_project", 66, 66, "ADD", {"file_project": {name: "imagen.png", type: "image/png", size: 5000}}, "file_project_type_file_KO"],
    ["project", "file_project", 67, 67, "ADD", {"file_project": {name: "archivogrande.pdf", type: "application/pdf", size: 3000000}}, "file_project_max_size_file_KO"],
    ["project", "file_project", 68, 68, "ADD", {"file_project": {name: "project.pdf", type: "application/pdf", size: 100000}}, true],

    // === file EDIT ===
    ["project", "file_project", 69, 69, "EDIT", {"file_project": {name: "ab.pdf", type: "application/pdf", size: 1000}}, "file_project_min_size_KO"],
    ["project", "file_project", 70, 70, "EDIT", {"file_project": {name: "a".repeat(100) + ".pdf", type: "application/pdf", size: 1000}}, "file_project_max_size_KO"],
    ["project", "file_project", 71, 71, "EDIT", {"file_project": {name: "mi archivo.pdf", type: "application/pdf", size: 5000}}, "file_project_format_name_file_KO"],
    ["project", "file_project", 72, 72, "EDIT", {"file_project": {name: "imagen.png", type: "image/png", size: 5000}}, "file_project_type_file_KO"],
    ["project", "file_project", 73, 73, "EDIT", {"file_project": {name: "archivogrande.pdf", type: "application/pdf", size: 3000000}}, "file_project_max_size_file_KO"],
    ["project", "file_project", 74, 74, "EDIT", {"file_project": {name: "editado.docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", size: 200000}}, true],

    // === file SEARCH (modo texto) ===
    ["project", "file_project", 75, 75, "SEARCH", {"file_project": "a".repeat(101)}, "file_project_max_size_KO"],
    ["project", "file_project", 76, 76, "SEARCH", {"file_project": "archivo 123.pdf"}, "file_project_format_KO"],
    ["project", "file_project", 77, 77, "SEARCH", {"file_project": "project.pdf"}, true],

    // === code ADD ===
    ["project", "code_project", 78, 78, "ADD", {"code_project": "AB"}, "code_project_min_size_KO"],
    ["project", "code_project", 79, 79, "ADD", {"code_project": "A".repeat(51)}, "code_project_max_size_KO"],
    ["project", "code_project", 80, 80, "ADD", {"code_project": "Codigo123"}, "code_project_format_KO"],
    ["project", "code_project", 81, 81, "ADD", {"code_project": "Codigo Proyecto"}, true],

    // === code EDIT ===
    ["project", "code_project", 82, 82, "EDIT", {"code_project": "AB"}, "code_project_min_size_KO"],
    ["project", "code_project", 83, 83, "EDIT", {"code_project": "A".repeat(51)}, "code_project_max_size_KO"],
    ["project", "code_project", 84, 84, "EDIT", {"code_project": "Codigo99"}, "code_project_format_KO"],
    ["project", "code_project", 85, 85, "EDIT", {"code_project": "Codigo Editado"}, true],

    // === code SEARCH ===
    ["project", "code_project", 86, 86, "SEARCH", {"code_project": "A".repeat(51)}, "code_project_max_size_KO"],
    ["project", "code_project", 87, 87, "SEARCH", {"code_project": "Codigo1"}, "code_project_format_KO"],
    ["project", "code_project", 88, 88, "SEARCH", {"code_project": "Codigo"}, true],

    // === acronym ADD ===
    ["project", "acronym_project", 89, 89, "ADD", {"acronym_project": "AB"}, "acronym_project_min_size_KO"],
    ["project", "acronym_project", 90, 90, "ADD", {"acronym_project": "A".repeat(16)}, "acronym_project_max_size_KO"],
    ["project", "acronym_project", 91, 91, "ADD", {"acronym_project": "ACR CON ESP"}, "acronym_project_format_KO"],
    ["project", "acronym_project", 92, 92, "ADD", {"acronym_project": "PROYÑ.!"}, true],

    // === acronym EDIT ===
    ["project", "acronym_project", 93, 93, "EDIT", {"acronym_project": "AB"}, "acronym_project_min_size_KO"],
    ["project", "acronym_project", 94, 94, "EDIT", {"acronym_project": "A".repeat(16)}, "acronym_project_max_size_KO"],
    ["project", "acronym_project", 95, 95, "EDIT", {"acronym_project": "ED 1.!"}, "acronym_project_format_KO"],
    ["project", "acronym_project", 96, 96, "EDIT", {"acronym_project": "EDIT.ñ!"}, true],

    // === acronym SEARCH ===
    ["project", "acronym_project", 97, 97, "SEARCH", {"acronym_project": "A".repeat(16)}, "acronym_project_max_size_KO"],
    ["project", "acronym_project", 98, 98, "SEARCH", {"acronym_project": "ACR ESP"}, "acronym_project_format_KO"],
    ["project", "acronym_project", 99, 99, "SEARCH", {"acronym_project": "PROY"}, true],

    // === id_sampling ADD ===
    ["project", "id_sampling_methodology", 100, 100, "ADD", {"id_sampling_methodology": ""}, "id_sampling_methodology_min_size_KO"],
    ["project", "id_sampling_methodology", 101, 101, "ADD", {"id_sampling_methodology": "1".repeat(12)}, "id_sampling_methodology_max_size_KO"],
    ["project", "id_sampling_methodology", 102, 102, "ADD", {"id_sampling_methodology": "abc"}, "id_sampling_methodology_format_KO"],
    ["project", "id_sampling_methodology", 103, 103, "ADD", {"id_sampling_methodology": "5"}, true],

    // === id_sampling EDIT ===
    ["project", "id_sampling_methodology", 104, 104, "EDIT", {"id_sampling_methodology": ""}, "id_sampling_methodology_min_size_KO"],
    ["project", "id_sampling_methodology", 105, 105, "EDIT", {"id_sampling_methodology": "1".repeat(12)}, "id_sampling_methodology_max_size_KO"],
    ["project", "id_sampling_methodology", 106, 106, "EDIT", {"id_sampling_methodology": "abc"}, "id_sampling_methodology_format_KO"],
    ["project", "id_sampling_methodology", 107, 107, "EDIT", {"id_sampling_methodology": "7"}, true],

    // === id_sampling SEARCH ===
    ["project", "id_sampling_methodology", 108, 108, "SEARCH", {"id_sampling_methodology": "1".repeat(12)}, "id_sampling_methodology_max_size_KO"],
    ["project", "id_sampling_methodology", 109, 109, "SEARCH", {"id_sampling_methodology": "abc"}, "id_sampling_methodology_format_KO"],
    ["project", "id_sampling_methodology", 110, 110, "SEARCH", {"id_sampling_methodology": "3"}, true],

    // === pruebas de validez real de fechas ===
    // 31/02/2024 y 30/02/2024 pasan el regex pero NO existen en el calendario;
    // la validacion personalizada (en project_Class.js) las rechaza.
    ["project", "start_date_project", 111, 111, "ADD", {"start_date_project": "31/02/2024"}, "start_date_project_personalized_KO"],
    ["project", "start_date_project", 112, 112, "EDIT", {"start_date_project": "29/02/2023"}, "start_date_project_personalized_KO"],
    ["project", "end_date_project", 113, 113, "ADD", {"end_date_project": "30/02/2024", "start_date_project": "01/01/2024"}, "end_date_project_personalized_KO"],
    ["project", "end_date_project", 114, 114, "EDIT", {"end_date_project": "31/04/2024", "start_date_project": "01/01/2024"}, "end_date_project_personalized_KO"]
];
