var analysis_preparation_def_tests = [
    // === id_analysis_preparation - SEARCH (PK autoincrement) ===
    ["analysis_preparation", "id_analysis_preparation", "input", 1, "Validar max_size de id en SEARCH", "SEARCH", "id_analysis_preparation_max_size_KO", "El ID supera el tamano maximo permitido"],
    ["analysis_preparation", "id_analysis_preparation", "input", 2, "Validar format de id en SEARCH", "SEARCH", "id_analysis_preparation_format_KO", "El ID no tiene formato numerico valido"],
    ["analysis_preparation", "id_analysis_preparation", "input", 3, "Validar id correcto en SEARCH", "SEARCH", true, "El ID es correcto"],

    // === name_analysis_preparation - ADD ===
    ["analysis_preparation", "name_analysis_preparation", "input", 4, "Validar min_size de name en ADD", "ADD", "name_analysis_preparation_min_size_KO", "El nombre no alcanza el tamano minimo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 5, "Validar max_size de name en ADD", "ADD", "name_analysis_preparation_max_size_KO", "El nombre supera el tamano maximo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 6, "Validar format de name en ADD", "ADD", "name_analysis_preparation_format_KO", "El nombre contiene caracteres no permitidos"],
    ["analysis_preparation", "name_analysis_preparation", "input", 7, "Validar name correcto en ADD", "ADD", true, "El nombre es correcto"],

    // === name_analysis_preparation - EDIT ===
    ["analysis_preparation", "name_analysis_preparation", "input", 8, "Validar min_size de name en EDIT", "EDIT", "name_analysis_preparation_min_size_KO", "El nombre no alcanza el tamano minimo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 9, "Validar max_size de name en EDIT", "EDIT", "name_analysis_preparation_max_size_KO", "El nombre supera el tamano maximo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 10, "Validar format de name en EDIT", "EDIT", "name_analysis_preparation_format_KO", "El nombre contiene caracteres no permitidos"],
    ["analysis_preparation", "name_analysis_preparation", "input", 11, "Validar name correcto en EDIT", "EDIT", true, "El nombre es correcto"],

    // === name_analysis_preparation - SEARCH ===
    ["analysis_preparation", "name_analysis_preparation", "input", 12, "Validar max_size de name en SEARCH", "SEARCH", "name_analysis_preparation_max_size_KO", "El nombre supera el tamano maximo"],
    ["analysis_preparation", "name_analysis_preparation", "input", 13, "Validar format de name en SEARCH", "SEARCH", "name_analysis_preparation_format_KO", "El nombre contiene caracteres no permitidos"],
    ["analysis_preparation", "name_analysis_preparation", "input", 14, "Validar name correcto en SEARCH", "SEARCH", true, "El nombre es correcto"],

    // === description_analysis_preparation - ADD ===
    ["analysis_preparation", "description_analysis_preparation", "textarea", 15, "Validar min_size de description en ADD", "ADD", "description_analysis_preparation_min_size_KO", "La descripcion no alcanza el tamano minimo"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 16, "Validar max_size de description en ADD", "ADD", "description_analysis_preparation_max_size_KO", "La descripcion supera el tamano maximo"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 17, "Validar format de description en ADD", "ADD", "description_analysis_preparation_format_KO", "La descripcion contiene caracteres no permitidos"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 18, "Validar description correcta en ADD", "ADD", true, "La descripcion es correcta"],

    // === description_analysis_preparation - EDIT ===
    ["analysis_preparation", "description_analysis_preparation", "textarea", 19, "Validar min_size de description en EDIT", "EDIT", "description_analysis_preparation_min_size_KO", "La descripcion no alcanza el tamano minimo"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 20, "Validar max_size de description en EDIT", "EDIT", "description_analysis_preparation_max_size_KO", "La descripcion supera el tamano maximo"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 21, "Validar format de description en EDIT", "EDIT", "description_analysis_preparation_format_KO", "La descripcion contiene caracteres no permitidos"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 22, "Validar description correcta en EDIT", "EDIT", true, "La descripcion es correcta"],

    // === description_analysis_preparation - SEARCH ===
    ["analysis_preparation", "description_analysis_preparation", "textarea", 23, "Validar max_size de description en SEARCH", "SEARCH", "description_analysis_preparation_max_size_KO", "La descripcion supera el tamano maximo"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 24, "Validar format de description en SEARCH", "SEARCH", "description_analysis_preparation_format_KO", "La descripcion contiene caracteres no permitidos"],
    ["analysis_preparation", "description_analysis_preparation", "textarea", 25, "Validar description correcta en SEARCH", "SEARCH", true, "La descripcion es correcta"],

    // === bib_analysis_preparation - ADD ===
    ["analysis_preparation", "bib_analysis_preparation", "input", 26, "Validar min_size de bib en ADD", "ADD", "bib_analysis_preparation_min_size_KO", "La bibliografia no alcanza el tamano minimo"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 27, "Validar max_size de bib en ADD", "ADD", "bib_analysis_preparation_max_size_KO", "La bibliografia supera el tamano maximo"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 28, "Validar format de bib en ADD", "ADD", "bib_analysis_preparation_format_KO", "La bibliografia contiene caracteres no permitidos"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 29, "Validar bib correcta en ADD", "ADD", true, "La bibliografia es correcta"],

    // === bib_analysis_preparation - EDIT ===
    ["analysis_preparation", "bib_analysis_preparation", "input", 30, "Validar min_size de bib en EDIT", "EDIT", "bib_analysis_preparation_min_size_KO", "La bibliografia no alcanza el tamano minimo"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 31, "Validar max_size de bib en EDIT", "EDIT", "bib_analysis_preparation_max_size_KO", "La bibliografia supera el tamano maximo"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 32, "Validar format de bib en EDIT", "EDIT", "bib_analysis_preparation_format_KO", "La bibliografia contiene caracteres no permitidos"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 33, "Validar bib correcta en EDIT", "EDIT", true, "La bibliografia es correcta"],

    // === bib_analysis_preparation - SEARCH ===
    ["analysis_preparation", "bib_analysis_preparation", "input", 34, "Validar max_size de bib en SEARCH", "SEARCH", "bib_analysis_preparation_max_size_KO", "La bibliografia supera el tamano maximo"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 35, "Validar format de bib en SEARCH", "SEARCH", "bib_analysis_preparation_format_KO", "La bibliografia contiene caracteres no permitidos"],
    ["analysis_preparation", "bib_analysis_preparation", "input", 36, "Validar bib correcta en SEARCH", "SEARCH", true, "La bibliografia es correcta"],

    // === file_analysis_preparation - ADD ===
    ["analysis_preparation", "file_analysis_preparation", "file", 37, "Validar no_file de file en ADD", "ADD", "file_analysis_preparation_no_file_KO", "No se ha seleccionado ningun fichero"],
    ["analysis_preparation", "file_analysis_preparation", "file", 38, "Validar min_size nombre fichero en ADD", "ADD", "file_analysis_preparation_min_size_KO", "El nombre del fichero no alcanza el tamano minimo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 39, "Validar max_size nombre fichero en ADD", "ADD", "file_analysis_preparation_max_size_KO", "El nombre del fichero supera el tamano maximo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 40, "Validar format_name_file en ADD", "ADD", "file_analysis_preparation_format_name_file_KO", "Nombre de fichero con formato incorrecto"],
    ["analysis_preparation", "file_analysis_preparation", "file", 41, "Validar type_file en ADD", "ADD", "file_analysis_preparation_type_file_KO", "Tipo de fichero no permitido"],
    ["analysis_preparation", "file_analysis_preparation", "file", 42, "Validar max_size_file en ADD", "ADD", "file_analysis_preparation_max_size_file_KO", "El fichero supera el tamano maximo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 43, "Validar file correcto en ADD", "ADD", true, "El fichero es correcto"],

    // === file_analysis_preparation - EDIT ===
    ["analysis_preparation", "file_analysis_preparation", "file", 44, "Validar min_size nombre fichero en EDIT", "EDIT", "file_analysis_preparation_min_size_KO", "El nombre del fichero no alcanza el tamano minimo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 45, "Validar max_size nombre fichero en EDIT", "EDIT", "file_analysis_preparation_max_size_KO", "El nombre del fichero supera el tamano maximo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 46, "Validar format_name_file en EDIT", "EDIT", "file_analysis_preparation_format_name_file_KO", "Nombre de fichero con formato incorrecto"],
    ["analysis_preparation", "file_analysis_preparation", "file", 47, "Validar type_file en EDIT", "EDIT", "file_analysis_preparation_type_file_KO", "Tipo de fichero no permitido"],
    ["analysis_preparation", "file_analysis_preparation", "file", 48, "Validar max_size_file en EDIT", "EDIT", "file_analysis_preparation_max_size_file_KO", "El fichero supera el tamano maximo"],
    ["analysis_preparation", "file_analysis_preparation", "file", 49, "Validar file correcto en EDIT", "EDIT", true, "El fichero es correcto"],

    // === file_analysis_preparation - SEARCH (modo texto) ===
    ["analysis_preparation", "file_analysis_preparation", "input", 50, "Validar max_size de file en SEARCH", "SEARCH", "file_analysis_preparation_max_size_KO", "El nombre del fichero supera el tamano maximo en busqueda"],
    ["analysis_preparation", "file_analysis_preparation", "input", 51, "Validar format de file en SEARCH", "SEARCH", "file_analysis_preparation_format_KO", "Nombre de fichero con formato incorrecto en busqueda"],
    ["analysis_preparation", "file_analysis_preparation", "input", 52, "Validar file correcto en SEARCH", "SEARCH", true, "Busqueda de fichero correcta"]
];

var analysis_preparation_pruebas = [
    // === id SEARCH ===
    ["analysis_preparation", "id_analysis_preparation", 1, 1, "SEARCH", {"id_analysis_preparation": "123456789012"}, "id_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "id_analysis_preparation", 2, 2, "SEARCH", {"id_analysis_preparation": "abc"}, "id_analysis_preparation_format_KO"],
    ["analysis_preparation", "id_analysis_preparation", 3, 3, "SEARCH", {"id_analysis_preparation": "12345"}, true],

    // === name ADD ===
    ["analysis_preparation", "name_analysis_preparation", 4, 4, "ADD", {"name_analysis_preparation": "Short"}, "name_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 5, 5, "ADD", {"name_analysis_preparation": "A".repeat(101)}, "name_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 6, 6, "ADD", {"name_analysis_preparation": "Test Name 123"}, "name_analysis_preparation_format_KO"],
    ["analysis_preparation", "name_analysis_preparation", 7, 7, "ADD", {"name_analysis_preparation": "Valid Name Analysis"}, true],

    // === name EDIT ===
    ["analysis_preparation", "name_analysis_preparation", 8, 8, "EDIT", {"name_analysis_preparation": "Corto"}, "name_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 9, 9, "EDIT", {"name_analysis_preparation": "A".repeat(101)}, "name_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 10, 10, "EDIT", {"name_analysis_preparation": "Edited Name 99"}, "name_analysis_preparation_format_KO"],
    ["analysis_preparation", "name_analysis_preparation", 11, 11, "EDIT", {"name_analysis_preparation": "Valid Name Edited"}, true],

    // === name SEARCH ===
    ["analysis_preparation", "name_analysis_preparation", 12, 12, "SEARCH", {"name_analysis_preparation": "A".repeat(101)}, "name_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "name_analysis_preparation", 13, 13, "SEARCH", {"name_analysis_preparation": "Search Name 1"}, "name_analysis_preparation_format_KO"],
    ["analysis_preparation", "name_analysis_preparation", 14, 14, "SEARCH", {"name_analysis_preparation": "Search Name"}, true],

    // === description ADD ===
    ["analysis_preparation", "description_analysis_preparation", 15, 15, "ADD", {"description_analysis_preparation": "Short text here"}, "description_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "description_analysis_preparation", 16, 16, "ADD", {"description_analysis_preparation": "A".repeat(5001)}, "description_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "description_analysis_preparation", 17, 17, "ADD", {"description_analysis_preparation": "This is a description with the symbol @ that fails format validation but has enough length to first pass minimum size"}, "description_analysis_preparation_format_KO"],
    ["analysis_preparation", "description_analysis_preparation", 18, 18, "ADD", {"description_analysis_preparation": "This is a valid description for the analysis preparation entity that has enough characters to pass the minimum size validation"}, true],

    // === description EDIT ===
    ["analysis_preparation", "description_analysis_preparation", 19, 19, "EDIT", {"description_analysis_preparation": "Edited short"}, "description_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "description_analysis_preparation", 20, 20, "EDIT", {"description_analysis_preparation": "A".repeat(5001)}, "description_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "description_analysis_preparation", 21, 21, "EDIT", {"description_analysis_preparation": "This is an edited description with the symbol @ that fails format validation but has enough length to first pass min size"}, "description_analysis_preparation_format_KO"],
    ["analysis_preparation", "description_analysis_preparation", 22, 22, "EDIT", {"description_analysis_preparation": "This is a valid edited description for the analysis preparation entity with enough characters to pass minimum size validation"}, true],

    // === description SEARCH ===
    ["analysis_preparation", "description_analysis_preparation", 23, 23, "SEARCH", {"description_analysis_preparation": "A".repeat(5001)}, "description_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "description_analysis_preparation", 24, 24, "SEARCH", {"description_analysis_preparation": "Search description with @ symbol"}, "description_analysis_preparation_format_KO"],
    ["analysis_preparation", "description_analysis_preparation", 25, 25, "SEARCH", {"description_analysis_preparation": "Search description"}, true],

    // === bib ADD ===
    ["analysis_preparation", "bib_analysis_preparation", 26, 26, "ADD", {"bib_analysis_preparation": "Abc"}, "bib_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 27, 27, "ADD", {"bib_analysis_preparation": "A".repeat(201)}, "bib_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 28, 28, "ADD", {"bib_analysis_preparation": "Referencia @# con simbolos"}, "bib_analysis_preparation_format_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 29, 29, "ADD", {"bib_analysis_preparation": "Garcia, J. \"Analisis de suelos en regiones aridas\"."}, true],

    // === bib EDIT ===
    ["analysis_preparation", "bib_analysis_preparation", 30, 30, "EDIT", {"bib_analysis_preparation": "Abc"}, "bib_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 31, 31, "EDIT", {"bib_analysis_preparation": "A".repeat(201)}, "bib_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 32, 32, "EDIT", {"bib_analysis_preparation": "Referencia @ editada con simbolo invalido"}, "bib_analysis_preparation_format_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 33, 33, "EDIT", {"bib_analysis_preparation": "Lopez, M. \"Estudio actualizado y completo del suelo\"."}, true],

    // === bib SEARCH ===
    ["analysis_preparation", "bib_analysis_preparation", 34, 34, "SEARCH", {"bib_analysis_preparation": "A".repeat(201)}, "bib_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 35, 35, "SEARCH", {"bib_analysis_preparation": "Busqueda con @ simbolo"}, "bib_analysis_preparation_format_KO"],
    ["analysis_preparation", "bib_analysis_preparation", 36, 36, "SEARCH", {"bib_analysis_preparation": "Garcia"}, true],

    // === file ADD ===
    ["analysis_preparation", "file_analysis_preparation", 37, 37, "ADD", {"file_analysis_preparation": ""}, "file_analysis_preparation_no_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 38, 38, "ADD", {"file_analysis_preparation": {name: "ab.pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "file_analysis_preparation", 39, 39, "ADD", {"file_analysis_preparation": {name: "a".repeat(100) + ".pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "file_analysis_preparation", 40, 40, "ADD", {"file_analysis_preparation": {name: "mi archivo.pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_format_name_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 41, 41, "ADD", {"file_analysis_preparation": {name: "archivo.txt", type: "text/plain", size: 1000}}, "file_analysis_preparation_type_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 42, 42, "ADD", {"file_analysis_preparation": {name: "archivoprueba.pdf", type: "application/pdf", size: 3000000}}, "file_analysis_preparation_max_size_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 43, 43, "ADD", {"file_analysis_preparation": {name: "documento.pdf", type: "application/pdf", size: 50000}}, true],

    // === file EDIT ===
    ["analysis_preparation", "file_analysis_preparation", 44, 44, "EDIT", {"file_analysis_preparation": {name: "ab.pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_min_size_KO"],
    ["analysis_preparation", "file_analysis_preparation", 45, 45, "EDIT", {"file_analysis_preparation": {name: "a".repeat(100) + ".pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "file_analysis_preparation", 46, 46, "EDIT", {"file_analysis_preparation": {name: "mi archivo.pdf", type: "application/pdf", size: 1000}}, "file_analysis_preparation_format_name_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 47, 47, "EDIT", {"file_analysis_preparation": {name: "archivo.txt", type: "text/plain", size: 1000}}, "file_analysis_preparation_type_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 48, 48, "EDIT", {"file_analysis_preparation": {name: "archivoprueba.pdf", type: "application/pdf", size: 3000000}}, "file_analysis_preparation_max_size_file_KO"],
    ["analysis_preparation", "file_analysis_preparation", 49, 49, "EDIT", {"file_analysis_preparation": {name: "editado.pdf", type: "application/pdf", size: 50000}}, true],

    // === file SEARCH (modo texto) ===
    ["analysis_preparation", "file_analysis_preparation", 50, 50, "SEARCH", {"file_analysis_preparation": "a".repeat(101)}, "file_analysis_preparation_max_size_KO"],
    ["analysis_preparation", "file_analysis_preparation", 51, 51, "SEARCH", {"file_analysis_preparation": "archivo 123.pdf"}, "file_analysis_preparation_format_KO"],
    ["analysis_preparation", "file_analysis_preparation", 52, 52, "SEARCH", {"file_analysis_preparation": "documento.pdf"}, true]
];
