var characteristic_def_tests = [
    ["characteristic", "id_characteristic", "input", 1, "Validar max_size de id en SEARCH", "SEARCH", "id_characteristic_max_size_KO", "ID supera tamano maximo"],
    ["characteristic", "id_characteristic", "input", 2, "Validar format de id en SEARCH", "SEARCH", "id_characteristic_format_KO", "ID con formato no numerico"],
    ["characteristic", "id_characteristic", "input", 3, "Validar id correcto en SEARCH", "SEARCH", true, "ID correcto"],

    ["characteristic", "name_characteristic", "input", 4, "Validar min_size de name en ADD", "ADD", "name_characteristic_min_size_KO", "Nombre demasiado corto"],
    ["characteristic", "name_characteristic", "input", 5, "Validar max_size de name en ADD", "ADD", "name_characteristic_max_size_KO", "Nombre demasiado largo"],
    ["characteristic", "name_characteristic", "input", 6, "Validar format de name en ADD", "ADD", "name_characteristic_format_KO", "Nombre con caracteres no permitidos"],
    ["characteristic", "name_characteristic", "input", 7, "Validar name correcto en ADD", "ADD", true, "Nombre correcto"],

    ["characteristic", "name_characteristic", "input", 8, "Validar name en EDIT", "EDIT", "name_characteristic_min_size_KO", "Nombre demasiado corto en EDIT"],
    ["characteristic", "name_characteristic", "input", 9, "Validar name correcto en EDIT", "EDIT", true, "Nombre correcto en EDIT"],

    ["characteristic", "description_characteristic", "textarea", 10, "Validar min_size de description en ADD", "ADD", "description_characteristic_min_size_KO", "Descripcion demasiado corta"],
    ["characteristic", "description_characteristic", "textarea", 11, "Validar format de description en ADD", "ADD", "description_characteristic_format_KO", "Descripcion con caracteres no validos"],
    ["characteristic", "description_characteristic", "textarea", 12, "Validar description correcta en ADD", "ADD", true, "Descripcion correcta"],

    ["characteristic", "data_type_characteristic", "select", 13, "Validar format de data_type en ADD", "ADD", "data_type_characteristic_format_KO", "Tipo de dato no valido"],
    ["characteristic", "data_type_characteristic", "select", 14, "Validar data_type correcto en ADD", "ADD", true, "Tipo de dato correcto"],

    ["characteristic", "category_characteristic", "select", 15, "Validar format de category en ADD", "ADD", "category_characteristic_format_KO", "Categoria no valida"],
    ["characteristic", "category_characteristic", "select", 16, "Validar category correcta en ADD", "ADD", true, "Categoria correcta"],

    ["characteristic", "bibref_characteristic", "input", 17, "Validar min_size de bibref en ADD", "ADD", "bibref_characteristic_min_size_KO", "Referencia bibliografica demasiado corta"],
    ["characteristic", "bibref_characteristic", "input", 18, "Validar format de bibref en ADD", "ADD", "bibref_characteristic_format_KO", "Referencia con caracteres no permitidos"],
    ["characteristic", "bibref_characteristic", "input", 19, "Validar bibref correcta en ADD", "ADD", true, "Referencia correcta"],

    ["characteristic", "file_characteristic", "file", 20, "Validar no_file en ADD", "ADD", "file_characteristic_no_file_KO", "Sin fichero seleccionado"],
    ["characteristic", "file_characteristic", "file", 21, "Validar type_file en ADD", "ADD", "file_characteristic_type_file_KO", "Tipo de fichero no permitido"],
    ["characteristic", "file_characteristic", "file", 22, "Validar max_size_file en ADD (200000 bytes)", "ADD", "file_characteristic_max_size_file_KO", "Fichero demasiado grande"],
    ["characteristic", "file_characteristic", "file", 23, "Validar file correcto en ADD", "ADD", true, "Fichero correcto"],

    ["characteristic", "file_characteristic", "input", 24, "Validar format file en SEARCH", "SEARCH", "file_characteristic_format_KO", "Formato incorrecto en busqueda"],
    ["characteristic", "file_characteristic", "input", 25, "Validar file correcto en SEARCH", "SEARCH", true, "Busqueda de fichero correcta"]
];

var characteristic_pruebas = [
    ["characteristic", "id_characteristic", 1, 1, "SEARCH", {"id_characteristic": "123456789012"}, "id_characteristic_max_size_KO"],
    ["characteristic", "id_characteristic", 2, 2, "SEARCH", {"id_characteristic": "NoNumero"}, "id_characteristic_format_KO"],
    ["characteristic", "id_characteristic", 3, 3, "SEARCH", {"id_characteristic": "42"}, true],

    ["characteristic", "name_characteristic", 4, 4, "ADD", {"name_characteristic": "Short"}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 5, 5, "ADD", {"name_characteristic": "A".repeat(101)}, "name_characteristic_max_size_KO"],
    ["characteristic", "name_characteristic", 6, 6, "ADD", {"name_characteristic": "Nombre123 Mal"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 7, 7, "ADD", {"name_characteristic": "Valid Characteristic Name"}, true],

    ["characteristic", "name_characteristic", 8, 8, "EDIT", {"name_characteristic": "Peque"}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 9, 9, "EDIT", {"name_characteristic": "Nombre Editado Valido"}, true],

    ["characteristic", "description_characteristic", 10, 10, "ADD", {"description_characteristic": "Texto corto insuficiente"}, "description_characteristic_min_size_KO"],
    ["characteristic", "description_characteristic", 11, 11, "ADD", {"description_characteristic": "This is a description with the symbol @ that fails format validation but has enough characters length to first pass minimum size"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 12, 12, "ADD", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],

    ["characteristic", "data_type_characteristic", 13, 13, "ADD", {"data_type_characteristic": "invalid_type"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 14, 14, "ADD", {"data_type_characteristic": "number"}, true],

    ["characteristic", "category_characteristic", 15, 15, "ADD", {"category_characteristic": "invalid_category"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 16, 16, "ADD", {"category_characteristic": "soil_site"}, true],

    ["characteristic", "bibref_characteristic", 17, 17, "ADD", {"bibref_characteristic": "Corta referenc"}, "bibref_characteristic_min_size_KO"],
    ["characteristic", "bibref_characteristic", 18, 18, "ADD", {"bibref_characteristic": "Ref @# con simbolos no validos"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 19, 19, "ADD", {"bibref_characteristic": "García, P. \"Estudio amplio de suelos\"."}, true],

    ["characteristic", "file_characteristic", 20, 20, "ADD", {"file_characteristic": ""}, "file_characteristic_no_file_KO"],
    ["characteristic", "file_characteristic", 21, 21, "ADD", {"file_characteristic": {name: "archivo.txt", type: "text/plain", size: 5000}}, "file_characteristic_type_file_KO"],
    ["characteristic", "file_characteristic", 22, 22, "ADD", {"file_characteristic": {name: "archivomuygrande.pdf", type: "application/pdf", size: 250000}}, "file_characteristic_max_size_file_KO"],
    ["characteristic", "file_characteristic", 23, 23, "ADD", {"file_characteristic": {name: "documento.pdf", type: "application/pdf", size: 50000}}, true],

    ["characteristic", "file_characteristic", 24, 24, "SEARCH", {"file_characteristic": "archivo 123.pdf"}, "file_characteristic_format_KO"],
    ["characteristic", "file_characteristic", 25, 25, "SEARCH", {"file_characteristic": "documento.pdf"}, true]
];
