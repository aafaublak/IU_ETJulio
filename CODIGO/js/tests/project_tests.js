var project_def_tests = [
    ["project", "id_project", "input", 1, "Validar max_size id en SEARCH", "SEARCH", "id_project_max_size_KO", "ID supera tamano maximo"],
    ["project", "id_project", "input", 2, "Validar format id en SEARCH", "SEARCH", "id_project_format_KO", "ID con formato incorrecto"],
    ["project", "id_project", "input", 3, "Validar id correcto en SEARCH", "SEARCH", true, "ID correcto"],

    ["project", "name_project", "input", 4, "Validar min_size name en ADD (min 15)", "ADD", "name_project_min_size_KO", "Nombre demasiado corto"],
    ["project", "name_project", "input", 5, "Validar max_size name en ADD", "ADD", "name_project_max_size_KO", "Nombre demasiado largo"],
    ["project", "name_project", "input", 6, "Validar format name en ADD", "ADD", "name_project_format_KO", "Nombre con caracteres invalidos"],
    ["project", "name_project", "input", 7, "Validar name correcto en ADD", "ADD", true, "Nombre correcto"],

    ["project", "start_date_project", "input", 8, "Validar format fecha inicio en ADD", "ADD", "start_date_project_format_KO", "Formato de fecha incorrecto"],
    ["project", "start_date_project", "input", 9, "Validar fecha inicio correcta en ADD", "ADD", true, "Fecha inicio correcta"],

    ["project", "end_date_project", "input", 10, "Validar format fecha fin en ADD", "ADD", "end_date_project_format_KO", "Formato de fecha fin incorrecto"],
    ["project", "end_date_project", "input", 11, "Validar personalized end_date > start_date en ADD", "ADD", "end_date_project_personalized_KO", "Fecha fin anterior a fecha inicio"],
    ["project", "end_date_project", "input", 12, "Validar fecha fin correcta en ADD", "ADD", true, "Fecha fin correcta"],

    ["project", "responsable_project", "input", 13, "Validar min_size responsable en ADD", "ADD", "responsable_project_min_size_KO", "Responsable demasiado corto"],
    ["project", "responsable_project", "input", 14, "Validar format responsable en ADD", "ADD", "responsable_project_format_KO", "Responsable con caracteres invalidos"],
    ["project", "responsable_project", "input", 15, "Validar responsable correcto en ADD", "ADD", true, "Responsable correcto"],

    ["project", "organization_project", "input", 16, "Validar min_size organization en ADD", "ADD", "organization_project_min_size_KO", "Organizacion demasiado corta"],
    ["project", "organization_project", "input", 17, "Validar organization correcta en ADD", "ADD", true, "Organizacion correcta"],

    ["project", "description_project", "textarea", 18, "Validar min_size description en ADD (min 30)", "ADD", "description_project_min_size_KO", "Descripcion demasiado corta"],
    ["project", "description_project", "textarea", 19, "Validar description correcta en ADD", "ADD", true, "Descripcion correcta"],

    ["project", "file_project", "file", 20, "Validar no_file en ADD", "ADD", "file_project_no_file_KO", "Sin fichero"],
    ["project", "file_project", "file", 21, "Validar format_name_file en ADD", "ADD", "file_project_format_name_file_KO", "Nombre fichero incorrecto"],
    ["project", "file_project", "file", 22, "Validar type_file en ADD", "ADD", "file_project_type_file_KO", "Tipo fichero no permitido"],
    ["project", "file_project", "file", 23, "Validar file correcto en ADD", "ADD", true, "Fichero correcto"],

    ["project", "code_project", "input", 24, "Validar min_size code en ADD", "ADD", "code_project_min_size_KO", "Codigo demasiado corto"],
    ["project", "code_project", "input", 25, "Validar format code en ADD", "ADD", "code_project_format_KO", "Codigo con caracteres invalidos"],
    ["project", "code_project", "input", 26, "Validar code correcto en ADD", "ADD", true, "Codigo correcto"],

    ["project", "acronym_project", "input", 27, "Validar min_size acronym en ADD", "ADD", "acronym_project_min_size_KO", "Acronimo demasiado corto"],
    ["project", "acronym_project", "input", 28, "Validar format acronym en ADD (sin espacios)", "ADD", "acronym_project_format_KO", "Acronimo con formato incorrecto"],
    ["project", "acronym_project", "input", 29, "Validar acronym correcto en ADD", "ADD", true, "Acronimo correcto"],

    ["project", "id_sampling_methodology", "input", 30, "Validar min_size id_sampling en ADD", "ADD", "id_sampling_methodology_min_size_KO", "ID metodologia demasiado corto"],
    ["project", "id_sampling_methodology", "input", 31, "Validar format id_sampling en ADD", "ADD", "id_sampling_methodology_format_KO", "ID metodologia con formato incorrecto"],
    ["project", "id_sampling_methodology", "input", 32, "Validar id_sampling correcto en ADD", "ADD", true, "ID metodologia correcto"]
];

var project_pruebas = [
    ["project", "id_project", 1, 1, "SEARCH", {"id_project": "123456789012"}, "id_project_max_size_KO"],
    ["project", "id_project", 2, 2, "SEARCH", {"id_project": "abc"}, "id_project_format_KO"],
    ["project", "id_project", 3, 3, "SEARCH", {"id_project": "999"}, true],

    ["project", "name_project", 4, 4, "ADD", {"name_project": "Short Name"}, "name_project_min_size_KO"],
    ["project", "name_project", 5, 5, "ADD", {"name_project": "A".repeat(101)}, "name_project_max_size_KO"],
    ["project", "name_project", 6, 6, "ADD", {"name_project": "Project Name With 123"}, "name_project_format_KO"],
    ["project", "name_project", 7, 7, "ADD", {"name_project": "Valid Project Name For Testing"}, true],

    ["project", "start_date_project", 8, 8, "ADD", {"start_date_project": "2024-01-15"}, "start_date_project_format_KO"],
    ["project", "start_date_project", 9, 9, "ADD", {"start_date_project": "15/01/2024"}, true],

    ["project", "end_date_project", 10, 10, "ADD", {"end_date_project": "2024-12-31"}, "end_date_project_format_KO"],
    ["project", "end_date_project", 11, 11, "ADD", {"end_date_project": "01/01/2023", "start_date_project": "15/06/2024"}, "end_date_project_personalized_KO"],
    ["project", "end_date_project", 12, 12, "ADD", {"end_date_project": "31/12/2025", "start_date_project": "01/01/2024"}, true],

    ["project", "responsable_project", 13, 13, "ADD", {"responsable_project": "Abc"}, "responsable_project_min_size_KO"],
    ["project", "responsable_project", 14, 14, "ADD", {"responsable_project": "Juan 123"}, "responsable_project_format_KO"],
    ["project", "responsable_project", 15, 15, "ADD", {"responsable_project": "Juan García López"}, true],

    ["project", "organization_project", 16, 16, "ADD", {"organization_project": "UVGO"}, "organization_project_min_size_KO"],
    ["project", "organization_project", 17, 17, "ADD", {"organization_project": "Universidad de Vigo"}, true],

    ["project", "description_project", 18, 18, "ADD", {"description_project": "Corto texto"}, "description_project_min_size_KO"],
    ["project", "description_project", 19, 19, "ADD", {"description_project": "This is a project description that has enough length to pass minimum size validation requirement"}, true],

    ["project", "file_project", 20, 20, "ADD", {"file_project": ""}, "file_project_no_file_KO"],
    ["project", "file_project", 21, 21, "ADD", {"file_project": {name: "mi archivo.pdf", type: "application/pdf", size: 5000}}, "file_project_format_name_file_KO"],
    ["project", "file_project", 22, 22, "ADD", {"file_project": {name: "imagen.png", type: "image/png", size: 5000}}, "file_project_type_file_KO"],
    ["project", "file_project", 23, 23, "ADD", {"file_project": {name: "project.pdf", type: "application/pdf", size: 100000}}, true],

    ["project", "code_project", 24, 24, "ADD", {"code_project": "AB"}, "code_project_min_size_KO"],
    ["project", "code_project", 25, 25, "ADD", {"code_project": "Code@#!!"}, "code_project_format_KO"],
    ["project", "code_project", 26, 26, "ADD", {"code_project": "Codigo Proyecto"}, true],

    ["project", "acronym_project", 27, 27, "ADD", {"acronym_project": "AB"}, "acronym_project_min_size_KO"],
    ["project", "acronym_project", 28, 28, "ADD", {"acronym_project": "ACR CON ESP"}, "acronym_project_format_KO"],
    ["project", "acronym_project", 29, 29, "ADD", {"acronym_project": "PROYÑ.!"}, true],

    ["project", "id_sampling_methodology", 30, 30, "ADD", {"id_sampling_methodology": ""}, "id_sampling_methodology_min_size_KO"],
    ["project", "id_sampling_methodology", 31, 31, "ADD", {"id_sampling_methodology": "abc"}, "id_sampling_methodology_format_KO"],
    ["project", "id_sampling_methodology", 32, 32, "ADD", {"id_sampling_methodology": "5"}, true]
];
