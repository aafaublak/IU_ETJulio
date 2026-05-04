var analysis_preparation_def_tests = [
    ["analysis_preparation", "id_analysis_preparation", "input", 1, "Validar max_size de id_analysis_preparation en SEARCH", "SEARCH", "id_analysis_preparation_max_size_KO", "El ID supera el tamano maximo permitido"],
    ["analysis_preparation", "id_analysis_preparation", "input", 2, "Validar format de id_analysis_preparation en SEARCH", "SEARCH", "id_analysis_preparation_format_KO", "El ID no tiene formato numerico valido"],
    ["analysis_preparation", "id_analysis_preparation", "input", 3, "Validar id_analysis_preparation correcto en SEARCH", "SEARCH", true, "El ID es correcto"],

    ["analysis_preparation", "name_analysis_preparation", "input", 4, "Validar min_size de name en ADD", "ADD", "name_analysis_preparation_min_size_KO", "El nombre no alcanza el tamano minimo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 5, "Validar max_size de name en ADD", "ADD", "name_analysis_preparation_max_size_KO", "El nombre supera el tamano maximo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 6, "Validar format de name en ADD", "ADD", "name_analysis_preparation_format_KO", "El nombre contiene caracteres no permitidos"],
    ["analysis_preparation", "name_analysis_preparation", "input", 7, "Validar name correcto en ADD", "ADD", true, "El nombre es correcto"],

    ["analysis_preparation", "name_analysis_preparation", "input", 8, "Validar min_size de name en EDIT", "EDIT", "name_analysis_preparation_min_size_KO", "El nombre no alcanza el tamano minimo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 9, "Validar name correcto en EDIT", "EDIT", true, "El nombre es correcto"],

    ["analysis_preparation", "name_analysis_preparation", "input", 10, "Validar max_size de name en SEARCH", "SEARCH", "name_analysis_preparation_max_size_KO", "El nombre supera el tamano maximo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 11, "Validar name correcto en SEARCH", "SEARCH", true, "El nombre es correcto"],

    ["analysis_preparation", "description_analysis_preparation", "textarea", 12, "Validar min_size de description en ADD", "ADD", "description_analysis_preparation_min_size_KO", "La descripcion no alcanza el tamano minimo"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 13, "Validar max_size de description en ADD", "ADD", "description_analysis_preparation_max_size_KO", "La descripcion supera el tamano maximo"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 14, "Validar format de description en ADD", "ADD", "description_analysis_preparation_format_KO", "La descripcion contiene caracteres no permitidos"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 15, "Validar description correcta en ADD", "ADD", true, "La descripcion es correcta"],

    ["analysis_preparation", "bib_analysis_preparation", "input", 16, "Validar min_size de bib en ADD", "ADD", "bib_analysis_preparation_min_size_KO", "La bibliografia no alcanza el tamano minimo"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 17, "Validar max_size de bib en ADD", "ADD", "bib_analysis_preparation_max_size_KO", "La bibliografia supera el tamano maximo"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 18, "Validar format de bib en ADD", "ADD", "bib_analysis_preparation_format_KO", "La bibliografia contiene caracteres no permitidos"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 19, "Validar bib correcta en ADD", "ADD", true, "La bibliografia es correcta"],

    ["analysis_preparation", "file_analysis_preparation", "file", 20, "Validar no_file de file en ADD", "ADD", "file_analysis_preparation_no_file_KO", "No se ha seleccionado ningun fichero"],
    ["analysis_preparation", "file_analysis_preparation", "file", 21, "Validar min_size nombre fichero en ADD", "ADD", "file_analysis_preparation_min_size_KO", "El nombre del fichero no alcanza el tamano minimo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 22, "Validar format_name_file en ADD", "ADD", "file_analysis_preparation_format_name_file_KO", "Nombre de fichero con formato incorrecto"],
    ["analysis_preparation", "file_analysis_preparation", "file", 23, "Validar type_file en ADD", "ADD", "file_analysis_preparation_type_file_KO", "Tipo de fichero no permitido"],
    ["analysis_preparation", "file_analysis_preparation", "file", 24, "Validar max_size_file en ADD", "ADD", "file_analysis_preparation_max_size_file_KO", "El fichero supera el tamano maximo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 25, "Validar file correcto en ADD", "ADD", true, "El fichero es correcto"],

    ["analysis_preparation", "file_analysis_preparation", "input", 26, "Validar format de file en SEARCH", "SEARCH", "file_analysis_preparation_format_KO", "Nombre de fichero con formato incorrecto en busqueda"],
    ["analysis_preparation", "file_analysis_preparation", "input", 27, "Validar file correcto en SEARCH", "SEARCH", true, "Busqueda de fichero correcta"]
];

var analysis_preparation_pruebas = [
    ["analysis_preparation", "id_analysis_preparation", 1, 1, "SEARCH", {"id_analysis_preparation": "123456789012"}, "id_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "id_analysis_preparation", 2, 2, "SEARCH", {"id_analysis_preparation": "abc"}, "id_analysis_preparation_format_KO"],
    ["analysis_preparation", "id_analysis_preparation", 3, 3, "SEARCH", {"id_analysis_preparation": "12345"}, true],

    ["analysis_preparation", "name_analysis_preparation", 4, 4, "ADD", {"name_analysis_preparation": "Short"}, "name_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 5, 5, "ADD", {"name_analysis_preparation": "A".repeat(101)}, "name_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 6, 6, "ADD", {"name_analysis_preparation": "Test Name 123"}, "name_analysis_preparation_format_KO"],
    ["analysis_preparation", "name_analysis_preparation", 7, 7, "ADD", {"name_analysis_preparation": "Valid Name Analysis"}, true],

    ["analysis_preparation", "name_analysis_preparation", 8, 8, "EDIT", {"name_analysis_preparation": "Corto"}, "name_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 9, 9, "EDIT", {"name_analysis_preparation": "Valid Name Edited"}, true],

    ["analysis_preparation", "name_analysis_preparation", 10, 10, "SEARCH", {"name_analysis_preparation": "A".repeat(101)}, "name_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 11, 11, "SEARCH", {"name_analysis_preparation": "Search Name"}, true],

    ["analysis_preparation", "description_analysis_preparation", 12, 12, "ADD", {"description_analysis_preparation": "Short text here"}, "description_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "description_analysis_preparation", 13, 13, "ADD", {"description_analysis_preparation": "A".repeat(5001)}, "description_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "description_analysis_preparation", 14, 14, "ADD", {"description_analysis_preparation": "This is a description with the symbol @ that fails format validation but has enough length to first pass minimum size"}, "description_analysis_preparation_format_KO"],
    ["analysis_preparation", "description_analysis_preparation", 15, 15, "ADD", {"description_analysis_preparation": "This is a valid description for the analysis preparation entity that has enough characters to pass the minimum size validation"}, true],

    ["analysis_preparation", "bib_analysis_preparation", 16, 16, "ADD", {"bib_analysis_preparation": "Abc"}, "bib_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 17, 17, "ADD", {"bib_analysis_preparation": "A".repeat(201)}, "bib_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 18, 18, "ADD", {"bib_analysis_preparation": "Referencia @# con simbolos"}, "bib_analysis_preparation_format_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 19, 19, "ADD", {"bib_analysis_preparation": "Garcia, J. \"Analisis de suelos en regiones aridas\"."}, true],

    ["analysis_preparation", "file_analysis_preparation", 20, 20, "ADD", {"file_analysis_preparation": ""}, "file_analysis_preparation_no_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 21, 21, "ADD", {"file_analysis_preparation": {name: "ab.pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "file_analysis_preparation", 22, 22, "ADD", {"file_analysis_preparation": {name: "mi archivo.pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_format_name_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 23, 23, "ADD", {"file_analysis_preparation": {name: "archivo.txt", type: "text/plain", size: 1000}}, "file_analysis_preparation_type_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 24, 24, "ADD", {"file_analysis_preparation": {name: "archivoprueba.pdf", type: "application/pdf", size: 3000000}}, "file_analysis_preparation_max_size_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 25, 25, "ADD", {"file_analysis_preparation": {name: "documento.pdf", type: "application/pdf", size: 50000}}, true],

    ["analysis_preparation", "file_analysis_preparation", 26, 26, "SEARCH", {"file_analysis_preparation": "archivo 123.pdf"}, "file_analysis_preparation_format_KO"],
    ["analysis_preparation", "file_analysis_preparation", 27, 27, "SEARCH", {"file_analysis_preparation": "documento.pdf"}, true]
];
