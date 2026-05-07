var characteristic_def_tests = [
    // === id_characteristic - SEARCH (PK autoincrement) ===
    ["characteristic", "id_characteristic", "input", 1, "Validar max_size de id en SEARCH", "SEARCH", "id_characteristic_max_size_KO", "ID supera tamano maximo"],
    ["characteristic", "id_characteristic", "input", 2, "Validar format de id en SEARCH", "SEARCH", "id_characteristic_format_KO", "ID con formato no numerico"],
    ["characteristic", "id_characteristic", "input", 3, "Validar id correcto en SEARCH", "SEARCH", true, "ID correcto"],

    // === name_characteristic - ADD ===
    ["characteristic", "name_characteristic", "input", 4, "Validar min_size de name en ADD", "ADD", "name_characteristic_min_size_KO", "Nombre demasiado corto"],
    ["characteristic", "name_characteristic", "input", 5, "Validar max_size de name en ADD", "ADD", "name_characteristic_max_size_KO", "Nombre demasiado largo"],
    ["characteristic", "name_characteristic", "input", 6, "Validar format de name en ADD", "ADD", "name_characteristic_format_KO", "Nombre con caracteres no permitidos"],
    ["characteristic", "name_characteristic", "input", 7, "Validar name correcto en ADD", "ADD", true, "Nombre correcto"],

    // === name_characteristic - EDIT ===
    ["characteristic", "name_characteristic", "input", 8, "Validar min_size de name en EDIT", "EDIT", "name_characteristic_min_size_KO", "Nombre demasiado corto en EDIT"],
    ["characteristic", "name_characteristic", "input", 9, "Validar max_size de name en EDIT", "EDIT", "name_characteristic_max_size_KO", "Nombre demasiado largo en EDIT"],
    ["characteristic", "name_characteristic", "input", 10, "Validar format de name en EDIT", "EDIT", "name_characteristic_format_KO", "Nombre con caracteres invalidos en EDIT"],
    ["characteristic", "name_characteristic", "input", 11, "Validar name correcto en EDIT", "EDIT", true, "Nombre correcto en EDIT"],

    // === name_characteristic - SEARCH ===
    ["characteristic", "name_characteristic", "input", 12, "Validar max_size de name en SEARCH", "SEARCH", "name_characteristic_max_size_KO", "Nombre demasiado largo en SEARCH"],
    ["characteristic", "name_characteristic", "input", 13, "Validar format de name en SEARCH", "SEARCH", "name_characteristic_format_KO", "Nombre con caracteres invalidos en SEARCH"],
    ["characteristic", "name_characteristic", "input", 14, "Validar name correcto en SEARCH", "SEARCH", true, "Nombre correcto en SEARCH"],

    // === description_characteristic - ADD ===
    ["characteristic", "description_characteristic", "textarea", 15, "Validar min_size de description en ADD", "ADD", "description_characteristic_min_size_KO", "Descripcion demasiado corta"],
    ["characteristic", "description_characteristic", "textarea", 16, "Validar max_size de description en ADD", "ADD", "description_characteristic_max_size_KO", "Descripcion demasiado larga"],
    ["characteristic", "description_characteristic", "textarea", 17, "Validar format de description en ADD", "ADD", "description_characteristic_format_KO", "Descripcion con caracteres no validos"],
    ["characteristic", "description_characteristic", "textarea", 18, "Validar description correcta en ADD", "ADD", true, "Descripcion correcta"],

    // === description_characteristic - EDIT ===
    ["characteristic", "description_characteristic", "textarea", 19, "Validar min_size de description en EDIT", "EDIT", "description_characteristic_min_size_KO", "Descripcion demasiado corta en EDIT"],
    ["characteristic", "description_characteristic", "textarea", 20, "Validar max_size de description en EDIT", "EDIT", "description_characteristic_max_size_KO", "Descripcion demasiado larga en EDIT"],
    ["characteristic", "description_characteristic", "textarea", 21, "Validar format de description en EDIT", "EDIT", "description_characteristic_format_KO", "Descripcion con caracteres no validos en EDIT"],
    ["characteristic", "description_characteristic", "textarea", 22, "Validar description correcta en EDIT", "EDIT", true, "Descripcion correcta en EDIT"],

    // === description_characteristic - SEARCH ===
    ["characteristic", "description_characteristic", "textarea", 23, "Validar max_size de description en SEARCH", "SEARCH", "description_characteristic_max_size_KO", "Descripcion demasiado larga en SEARCH"],
    ["characteristic", "description_characteristic", "textarea", 24, "Validar format de description en SEARCH", "SEARCH", "description_characteristic_format_KO", "Descripcion con caracteres invalidos en SEARCH"],
    ["characteristic", "description_characteristic", "textarea", 25, "Validar description correcta en SEARCH", "SEARCH", true, "Descripcion correcta en SEARCH"],

    // === data_type_characteristic - ADD ===
    ["characteristic", "data_type_characteristic", "select", 26, "Validar format de data_type en ADD", "ADD", "data_type_characteristic_format_KO", "Tipo de dato no valido"],
    ["characteristic", "data_type_characteristic", "select", 27, "Validar data_type correcto en ADD", "ADD", true, "Tipo de dato correcto"],

    // === data_type_characteristic - EDIT ===
    ["characteristic", "data_type_characteristic", "select", 28, "Validar format de data_type en EDIT", "EDIT", "data_type_characteristic_format_KO", "Tipo de dato no valido en EDIT"],
    ["characteristic", "data_type_characteristic", "select", 29, "Validar data_type correcto en EDIT", "EDIT", true, "Tipo de dato correcto en EDIT"],

    // === data_type_characteristic - SEARCH ===
    ["characteristic", "data_type_characteristic", "select", 30, "Validar format de data_type en SEARCH", "SEARCH", "data_type_characteristic_format_KO", "Tipo de dato no valido en SEARCH"],
    ["characteristic", "data_type_characteristic", "select", 31, "Validar data_type correcto en SEARCH", "SEARCH", true, "Tipo de dato correcto en SEARCH"],

    // === category_characteristic - ADD ===
    ["characteristic", "category_characteristic", "select", 32, "Validar format de category en ADD", "ADD", "category_characteristic_format_KO", "Categoria no valida"],
    ["characteristic", "category_characteristic", "select", 33, "Validar category correcta en ADD", "ADD", true, "Categoria correcta"],

    // === category_characteristic - EDIT ===
    ["characteristic", "category_characteristic", "select", 34, "Validar format de category en EDIT", "EDIT", "category_characteristic_format_KO", "Categoria no valida en EDIT"],
    ["characteristic", "category_characteristic", "select", 35, "Validar category correcta en EDIT", "EDIT", true, "Categoria correcta en EDIT"],

    // === category_characteristic - SEARCH ===
    ["characteristic", "category_characteristic", "select", 36, "Validar format de category en SEARCH", "SEARCH", "category_characteristic_format_KO", "Categoria no valida en SEARCH"],
    ["characteristic", "category_characteristic", "select", 37, "Validar category correcta en SEARCH", "SEARCH", true, "Categoria correcta en SEARCH"],

    // === bibref_characteristic - ADD ===
    ["characteristic", "bibref_characteristic", "input", 38, "Validar min_size de bibref en ADD", "ADD", "bibref_characteristic_min_size_KO", "Referencia bibliografica demasiado corta"],
    ["characteristic", "bibref_characteristic", "input", 39, "Validar max_size de bibref en ADD", "ADD", "bibref_characteristic_max_size_KO", "Referencia bibliografica demasiado larga"],
    ["characteristic", "bibref_characteristic", "input", 40, "Validar format de bibref en ADD", "ADD", "bibref_characteristic_format_KO", "Referencia con caracteres no permitidos"],
    ["characteristic", "bibref_characteristic", "input", 41, "Validar bibref correcta en ADD", "ADD", true, "Referencia correcta"],

    // === bibref_characteristic - EDIT ===
    ["characteristic", "bibref_characteristic", "input", 42, "Validar min_size de bibref en EDIT", "EDIT", "bibref_characteristic_min_size_KO", "Referencia demasiado corta en EDIT"],
    ["characteristic", "bibref_characteristic", "input", 43, "Validar max_size de bibref en EDIT", "EDIT", "bibref_characteristic_max_size_KO", "Referencia demasiado larga en EDIT"],
    ["characteristic", "bibref_characteristic", "input", 44, "Validar format de bibref en EDIT", "EDIT", "bibref_characteristic_format_KO", "Referencia con caracteres invalidos en EDIT"],
    ["characteristic", "bibref_characteristic", "input", 45, "Validar bibref correcta en EDIT", "EDIT", true, "Referencia correcta en EDIT"],

    // === bibref_characteristic - SEARCH ===
    ["characteristic", "bibref_characteristic", "input", 46, "Validar max_size de bibref en SEARCH", "SEARCH", "bibref_characteristic_max_size_KO", "Referencia demasiado larga en SEARCH"],
    ["characteristic", "bibref_characteristic", "input", 47, "Validar format de bibref en SEARCH", "SEARCH", "bibref_characteristic_format_KO", "Referencia con caracteres invalidos en SEARCH"],
    ["characteristic", "bibref_characteristic", "input", 48, "Validar bibref correcta en SEARCH", "SEARCH", true, "Referencia correcta en SEARCH"],

    // === file_characteristic - ADD ===
    ["characteristic", "file_characteristic", "file", 49, "Validar no_file en ADD", "ADD", "file_characteristic_no_file_KO", "Sin fichero seleccionado"],
    ["characteristic", "file_characteristic", "file", 50, "Validar min_size nombre fichero en ADD", "ADD", "file_characteristic_min_size_KO", "Nombre del fichero demasiado corto"],
    ["characteristic", "file_characteristic", "file", 51, "Validar max_size nombre fichero en ADD", "ADD", "file_characteristic_max_size_KO", "Nombre del fichero demasiado largo"],
    ["characteristic", "file_characteristic", "file", 52, "Validar format_name_file en ADD", "ADD", "file_characteristic_format_name_file_KO", "Formato de nombre de fichero incorrecto"],
    ["characteristic", "file_characteristic", "file", 53, "Validar type_file en ADD", "ADD", "file_characteristic_type_file_KO", "Tipo de fichero no permitido"],
    ["characteristic", "file_characteristic", "file", 54, "Validar max_size_file en ADD (200000 bytes)", "ADD", "file_characteristic_max_size_file_KO", "Fichero demasiado grande"],
    ["characteristic", "file_characteristic", "file", 55, "Validar file correcto en ADD", "ADD", true, "Fichero correcto"],

    // === file_characteristic - EDIT ===
    ["characteristic", "file_characteristic", "file", 56, "Validar min_size nombre fichero en EDIT", "EDIT", "file_characteristic_min_size_KO", "Nombre del fichero demasiado corto en EDIT"],
    ["characteristic", "file_characteristic", "file", 57, "Validar max_size nombre fichero en EDIT", "EDIT", "file_characteristic_max_size_KO", "Nombre del fichero demasiado largo en EDIT"],
    ["characteristic", "file_characteristic", "file", 58, "Validar format_name_file en EDIT", "EDIT", "file_characteristic_format_name_file_KO", "Formato de nombre de fichero incorrecto en EDIT"],
    ["characteristic", "file_characteristic", "file", 59, "Validar type_file en EDIT", "EDIT", "file_characteristic_type_file_KO", "Tipo de fichero no permitido en EDIT"],
    ["characteristic", "file_characteristic", "file", 60, "Validar max_size_file en EDIT", "EDIT", "file_characteristic_max_size_file_KO", "Fichero demasiado grande en EDIT"],
    ["characteristic", "file_characteristic", "file", 61, "Validar file correcto en EDIT", "EDIT", true, "Fichero correcto en EDIT"],

    // === file_characteristic - SEARCH (modo texto) ===
    ["characteristic", "file_characteristic", "input", 62, "Validar max_size de file en SEARCH", "SEARCH", "file_characteristic_max_size_KO", "Nombre del fichero demasiado largo en SEARCH"],
    ["characteristic", "file_characteristic", "input", 63, "Validar format de file en SEARCH", "SEARCH", "file_characteristic_format_KO", "Formato incorrecto en busqueda"],
    ["characteristic", "file_characteristic", "input", 64, "Validar file correcto en SEARCH", "SEARCH", true, "Busqueda de fichero correcta"]
];

var characteristic_pruebas = [
    // === id SEARCH ===
    ["characteristic", "id_characteristic", 1, 1, "SEARCH", {"id_characteristic": "123456789012"}, "id_characteristic_max_size_KO"],
    ["characteristic", "id_characteristic", 2, 2, "SEARCH", {"id_characteristic": "NoNumero"}, "id_characteristic_format_KO"],
    ["characteristic", "id_characteristic", 3, 3, "SEARCH", {"id_characteristic": "42"}, true],

    // === name ADD ===
    ["characteristic", "name_characteristic", 4, 4, "ADD", {"name_characteristic": "Short"}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 5, 5, "ADD", {"name_characteristic": "A".repeat(101)}, "name_characteristic_max_size_KO"],
    ["characteristic", "name_characteristic", 6, 6, "ADD", {"name_characteristic": "Nombre123 Mal"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 7, 7, "ADD", {"name_characteristic": "Valid Characteristic Name"}, true],

    // === name EDIT ===
    ["characteristic", "name_characteristic", 8, 8, "EDIT", {"name_characteristic": "Peque"}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 9, 9, "EDIT", {"name_characteristic": "A".repeat(101)}, "name_characteristic_max_size_KO"],
    ["characteristic", "name_characteristic", 10, 10, "EDIT", {"name_characteristic": "Edited Name 99"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 11, 11, "EDIT", {"name_characteristic": "Nombre Editado Valido"}, true],

    // === name SEARCH ===
    ["characteristic", "name_characteristic", 12, 12, "SEARCH", {"name_characteristic": "A".repeat(101)}, "name_characteristic_max_size_KO"],
    ["characteristic", "name_characteristic", 13, 13, "SEARCH", {"name_characteristic": "Search Name 1"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 14, 14, "SEARCH", {"name_characteristic": "Search Name"}, true],

    // === description ADD ===
    ["characteristic", "description_characteristic", 15, 15, "ADD", {"description_characteristic": "Texto corto insuficiente"}, "description_characteristic_min_size_KO"],
    ["characteristic", "description_characteristic", 16, 16, "ADD", {"description_characteristic": "A".repeat(5001)}, "description_characteristic_max_size_KO"],
    ["characteristic", "description_characteristic", 17, 17, "ADD", {"description_characteristic": "This is a description with the symbol @ that fails format validation but has enough characters length to first pass minimum size"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 18, 18, "ADD", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],

    // === description EDIT ===
    ["characteristic", "description_characteristic", 19, 19, "EDIT", {"description_characteristic": "Texto corto"}, "description_characteristic_min_size_KO"],
    ["characteristic", "description_characteristic", 20, 20, "EDIT", {"description_characteristic": "A".repeat(5001)}, "description_characteristic_max_size_KO"],
    ["characteristic", "description_characteristic", 21, 21, "EDIT", {"description_characteristic": "Edited description with the symbol @ that fails format validation but has enough characters length to first pass min size"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 22, 22, "EDIT", {"description_characteristic": "This is an edited valid characteristic description that has enough length to pass the minimum size validation"}, true],

    // === description SEARCH ===
    ["characteristic", "description_characteristic", 23, 23, "SEARCH", {"description_characteristic": "A".repeat(5001)}, "description_characteristic_max_size_KO"],
    ["characteristic", "description_characteristic", 24, 24, "SEARCH", {"description_characteristic": "Search description with @ symbol"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 25, 25, "SEARCH", {"description_characteristic": "Search description"}, true],

    // === data_type ADD ===
    ["characteristic", "data_type_characteristic", 26, 26, "ADD", {"data_type_characteristic": "invalid_type"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 27, 27, "ADD", {"data_type_characteristic": "number"}, true],

    // === data_type EDIT ===
    ["characteristic", "data_type_characteristic", 28, 28, "EDIT", {"data_type_characteristic": "invalid_type"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 29, 29, "EDIT", {"data_type_characteristic": "text"}, true],

    // === data_type SEARCH ===
    ["characteristic", "data_type_characteristic", 30, 30, "SEARCH", {"data_type_characteristic": "invalid_type"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 31, 31, "SEARCH", {"data_type_characteristic": "set"}, true],

    // === category ADD ===
    ["characteristic", "category_characteristic", 32, 32, "ADD", {"category_characteristic": "invalid_category"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 33, 33, "ADD", {"category_characteristic": "soil_site"}, true],

    // === category EDIT ===
    ["characteristic", "category_characteristic", 34, 34, "EDIT", {"category_characteristic": "invalid_category"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 35, 35, "EDIT", {"category_characteristic": "soil_chem"}, true],

    // === category SEARCH ===
    ["characteristic", "category_characteristic", 36, 36, "SEARCH", {"category_characteristic": "invalid_category"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 37, 37, "SEARCH", {"category_characteristic": "soil_bio"}, true],

    // === bibref ADD ===
    ["characteristic", "bibref_characteristic", 38, 38, "ADD", {"bibref_characteristic": "Corta referenc"}, "bibref_characteristic_min_size_KO"],
    ["characteristic", "bibref_characteristic", 39, 39, "ADD", {"bibref_characteristic": "A".repeat(201)}, "bibref_characteristic_max_size_KO"],
    ["characteristic", "bibref_characteristic", 40, 40, "ADD", {"bibref_characteristic": "Ref @# con simbolos no validos"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 41, 41, "ADD", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],

    // === bibref EDIT ===
    ["characteristic", "bibref_characteristic", 42, 42, "EDIT", {"bibref_characteristic": "Corta editada"}, "bibref_characteristic_min_size_KO"],
    ["characteristic", "bibref_characteristic", 43, 43, "EDIT", {"bibref_characteristic": "A".repeat(201)}, "bibref_characteristic_max_size_KO"],
    ["characteristic", "bibref_characteristic", 44, 44, "EDIT", {"bibref_characteristic": "Ref editada @ con simbolo invalido"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 45, 45, "EDIT", {"bibref_characteristic": "Lopez, M. \"Estudio actualizado y completo\"."}, true],

    // === bibref SEARCH ===
    ["characteristic", "bibref_characteristic", 46, 46, "SEARCH", {"bibref_characteristic": "A".repeat(201)}, "bibref_characteristic_max_size_KO"],
    ["characteristic", "bibref_characteristic", 47, 47, "SEARCH", {"bibref_characteristic": "Busqueda con @ simbolo"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 48, 48, "SEARCH", {"bibref_characteristic": "Garcia"}, true],

    // === file ADD ===
    ["characteristic", "file_characteristic", 49, 49, "ADD", {"file_characteristic": ""}, "file_characteristic_no_file_KO"],
    ["characteristic", "file_characteristic", 50, 50, "ADD", {"file_characteristic": {name: "ab.pdf", type: "application/pdf", size: 1000}}, "file_characteristic_min_size_KO"],
    ["characteristic", "file_characteristic", 51, 51, "ADD", {"file_characteristic": {name: "a".repeat(100) + ".pdf", type: "application/pdf", size: 1000}}, "file_characteristic_max_size_KO"],
    ["characteristic", "file_characteristic", 52, 52, "ADD", {"file_characteristic": {name: "mi archivo.pdf", type: "application/pdf", size: 1000}}, "file_characteristic_format_name_file_KO"],
    ["characteristic", "file_characteristic", 53, 53, "ADD", {"file_characteristic": {name: "archivo.txt", type: "text/plain", size: 5000}}, "file_characteristic_type_file_KO"],
    ["characteristic", "file_characteristic", 54, 54, "ADD", {"file_characteristic": {name: "archivomuygrande.pdf", type: "application/pdf", size: 250000}}, "file_characteristic_max_size_file_KO"],
    ["characteristic", "file_characteristic", 55, 55, "ADD", {"file_characteristic": {name: "documento.pdf", type: "application/pdf", size: 50000}}, true],

    // === file EDIT ===
    ["characteristic", "file_characteristic", 56, 56, "EDIT", {"file_characteristic": {name: "ab.pdf", type: "application/pdf", size: 1000}}, "file_characteristic_min_size_KO"],
    ["characteristic", "file_characteristic", 57, 57, "EDIT", {"file_characteristic": {name: "a".repeat(100) + ".pdf", type: "application/pdf", size: 1000}}, "file_characteristic_max_size_KO"],
    ["characteristic", "file_characteristic", 58, 58, "EDIT", {"file_characteristic": {name: "mi archivo.pdf", type: "application/pdf", size: 1000}}, "file_characteristic_format_name_file_KO"],
    ["characteristic", "file_characteristic", 59, 59, "EDIT", {"file_characteristic": {name: "archivo.txt", type: "text/plain", size: 5000}}, "file_characteristic_type_file_KO"],
    ["characteristic", "file_characteristic", 60, 60, "EDIT", {"file_characteristic": {name: "archivomuygrande.pdf", type: "application/pdf", size: 250000}}, "file_characteristic_max_size_file_KO"],
    ["characteristic", "file_characteristic", 61, 61, "EDIT", {"file_characteristic": {name: "editado.doc", type: "application/msword", size: 100000}}, true],

    // === file SEARCH (modo texto) ===
    ["characteristic", "file_characteristic", 62, 62, "SEARCH", {"file_characteristic": "a".repeat(101)}, "file_characteristic_max_size_KO"],
    ["characteristic", "file_characteristic", 63, 63, "SEARCH", {"file_characteristic": "archivo 123.pdf"}, "file_characteristic_format_KO"],
    ["characteristic", "file_characteristic", 64, 64, "SEARCH", {"file_characteristic": "documento.pdf"}, true]
];
