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
    ["characteristic", "file_characteristic", "input", 64, "Validar file correcto en SEARCH", "SEARCH", true, "Busqueda de fichero correcta"],

    // === Ampliacion caja negra: valores limite, clases invalidas adicionales y cobertura MIME ===
    ["characteristic", "id_characteristic", "input", 65, "Validar id en limite exacto de max_size (11 digitos) en SEARCH", "SEARCH", true, "ID en el limite maximo permitido"],
    ["characteristic", "name_characteristic", "input", 66, "Validar name en limite exacto de min_size (8) en ADD", "ADD", true, "Nombre en el limite minimo permitido"],
    ["characteristic", "name_characteristic", "input", 67, "Validar name en limite exacto de max_size (100) en ADD", "ADD", true, "Nombre en el limite maximo permitido"],
    ["characteristic", "name_characteristic", "input", 68, "Validar name con simbolos no permitidos en ADD", "ADD", "name_characteristic_format_KO", "Nombre con simbolos especiales"],
    ["characteristic", "description_characteristic", "textarea", 69, "Validar description en limite exacto de min_size (80) en ADD", "ADD", true, "Descripcion en el limite minimo permitido"],
    ["characteristic", "description_characteristic", "textarea", 70, "Validar description en limite exacto de max_size (5000) en ADD", "ADD", true, "Descripcion en el limite maximo permitido"],
    ["characteristic", "description_characteristic", "textarea", 71, "Validar description con digitos no permitidos en ADD", "ADD", "description_characteristic_format_KO", "Descripcion con digitos"],
    ["characteristic", "bibref_characteristic", "input", 72, "Validar bibref en limite exacto de min_size (16) en ADD", "ADD", true, "Referencia en el limite minimo permitido"],
    ["characteristic", "bibref_characteristic", "input", 73, "Validar bibref en limite exacto de max_size (200) en ADD", "ADD", true, "Referencia en el limite maximo permitido"],
    ["characteristic", "bibref_characteristic", "input", 74, "Validar bibref con digitos no permitidos en ADD", "ADD", "bibref_characteristic_format_KO", "Referencia con digitos"],
    ["characteristic", "file_characteristic", "file", 75, "Validar file con tipo MIME doc en ADD", "ADD", true, "Fichero .doc valido"],
    ["characteristic", "file_characteristic", "file", 76, "Validar file con tipo MIME docx en ADD", "ADD", true, "Fichero .docx valido"],
    ["characteristic", "file_characteristic", "file", 77, "Validar file justo por debajo del limite de max_size_file (199999 bytes, menor de 200000) en ADD", "ADD", true, "Fichero por debajo del limite de tamano (valido)"],
    ["characteristic", "file_characteristic", "file", 78, "Validar file en limite exacto de min_size del nombre (7) en ADD", "ADD", true, "Nombre de fichero en el limite minimo"],
    ["characteristic", "file_characteristic", "file", 79, "Validar file en limite exacto de max_size del nombre (100) en ADD", "ADD", true, "Nombre de fichero en el limite maximo"]
];

var characteristic_pruebas = [
    ["characteristic", "id_characteristic", 1, 1, "SEARCH", {"id_characteristic": "123456789012"}, "id_characteristic_max_size_KO"],
    ["characteristic", "id_characteristic", 1, 2, "SEARCH", {"id_characteristic": "42"}, true],
    ["characteristic", "id_characteristic", 2, 3, "SEARCH", {"id_characteristic": "NoNumero"}, "id_characteristic_format_KO"],
    ["characteristic", "id_characteristic", 2, 4, "SEARCH", {"id_characteristic": "42"}, true],
    ["characteristic", "id_characteristic", 3, 5, "SEARCH", {"id_characteristic": "42"}, true],
    ["characteristic", "id_characteristic", 3, 6, "SEARCH", {"id_characteristic": "abc"}, "id_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 4, 7, "ADD", {"name_characteristic": "Short"}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 4, 8, "ADD", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 5, 9, "ADD", {"name_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "name_characteristic_max_size_KO"],
    ["characteristic", "name_characteristic", 5, 10, "ADD", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 6, 11, "ADD", {"name_characteristic": "Nombre123 Mal"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 6, 12, "ADD", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 7, 13, "ADD", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 7, 14, "ADD", {"name_characteristic": ""}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 8, 15, "EDIT", {"name_characteristic": "Peque"}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 8, 16, "EDIT", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 9, 17, "EDIT", {"name_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "name_characteristic_max_size_KO"],
    ["characteristic", "name_characteristic", 9, 18, "EDIT", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 10, 19, "EDIT", {"name_characteristic": "Edited Name 99"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 10, 20, "EDIT", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 11, 21, "EDIT", {"name_characteristic": "Nombre Editado Valido"}, true],
    ["characteristic", "name_characteristic", 11, 22, "EDIT", {"name_characteristic": ""}, "name_characteristic_min_size_KO"],
    ["characteristic", "name_characteristic", 12, 23, "SEARCH", {"name_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "name_characteristic_max_size_KO"],
    ["characteristic", "name_characteristic", 12, 24, "SEARCH", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 13, 25, "SEARCH", {"name_characteristic": "Search Name 1"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 13, 26, "SEARCH", {"name_characteristic": "Valid Characteristic Name"}, true],
    ["characteristic", "name_characteristic", 14, 27, "SEARCH", {"name_characteristic": "Search Name"}, true],
    ["characteristic", "name_characteristic", 14, 28, "SEARCH", {"name_characteristic": "9ñ@!9ñ@!9ñ@!"}, "name_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 15, 29, "ADD", {"description_characteristic": "Texto corto insuficiente"}, "description_characteristic_min_size_KO"],
    ["characteristic", "description_characteristic", 15, 30, "ADD", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 16, 31, "ADD", {"description_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "description_characteristic_max_size_KO"],
    ["characteristic", "description_characteristic", 16, 32, "ADD", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 17, 33, "ADD", {"description_characteristic": "This is a description with the symbol @ that fails format validation but has enough characters length to first pass minimum size"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 17, 34, "ADD", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 18, 35, "ADD", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 18, 36, "ADD", {"description_characteristic": ""}, "description_characteristic_min_size_KO"],
    ["characteristic", "description_characteristic", 19, 37, "EDIT", {"description_characteristic": "Texto corto"}, "description_characteristic_min_size_KO"],
    ["characteristic", "description_characteristic", 19, 38, "EDIT", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 20, 39, "EDIT", {"description_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "description_characteristic_max_size_KO"],
    ["characteristic", "description_characteristic", 20, 40, "EDIT", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 21, 41, "EDIT", {"description_characteristic": "Edited description with the symbol @ that fails format validation but has enough characters length to first pass min size"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 21, 42, "EDIT", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 22, 43, "EDIT", {"description_characteristic": "This is an edited valid characteristic description that has enough length to pass the minimum size validation"}, true],
    ["characteristic", "description_characteristic", 22, 44, "EDIT", {"description_characteristic": ""}, "description_characteristic_min_size_KO"],
    ["characteristic", "description_characteristic", 23, 45, "SEARCH", {"description_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "description_characteristic_max_size_KO"],
    ["characteristic", "description_characteristic", 23, 46, "SEARCH", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 24, 47, "SEARCH", {"description_characteristic": "Search description with @ symbol"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 24, 48, "SEARCH", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],
    ["characteristic", "description_characteristic", 25, 49, "SEARCH", {"description_characteristic": "Search description"}, true],
    ["characteristic", "description_characteristic", 25, 50, "SEARCH", {"description_characteristic": "9ñ@!9ñ@!9ñ@!"}, "description_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 26, 51, "ADD", {"data_type_characteristic": "invalid_type"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 26, 52, "ADD", {"data_type_characteristic": "number"}, true],
    ["characteristic", "data_type_characteristic", 27, 53, "ADD", {"data_type_characteristic": "number"}, true],
    ["characteristic", "data_type_characteristic", 27, 54, "ADD", {"data_type_characteristic": "invalid_option"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 28, 55, "EDIT", {"data_type_characteristic": "invalid_type"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 28, 56, "EDIT", {"data_type_characteristic": "number"}, true],
    ["characteristic", "data_type_characteristic", 29, 57, "EDIT", {"data_type_characteristic": "text"}, true],
    ["characteristic", "data_type_characteristic", 29, 58, "EDIT", {"data_type_characteristic": "invalid_option"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 30, 59, "SEARCH", {"data_type_characteristic": "invalid_type"}, "data_type_characteristic_format_KO"],
    ["characteristic", "data_type_characteristic", 30, 60, "SEARCH", {"data_type_characteristic": "number"}, true],
    ["characteristic", "data_type_characteristic", 31, 61, "SEARCH", {"data_type_characteristic": "set"}, true],
    ["characteristic", "data_type_characteristic", 31, 62, "SEARCH", {"data_type_characteristic": "invalid_option"}, "data_type_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 32, 63, "ADD", {"category_characteristic": "invalid_category"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 32, 64, "ADD", {"category_characteristic": "soil_site"}, true],
    ["characteristic", "category_characteristic", 33, 65, "ADD", {"category_characteristic": "soil_site"}, true],
    ["characteristic", "category_characteristic", 33, 66, "ADD", {"category_characteristic": "invalid_option"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 34, 67, "EDIT", {"category_characteristic": "invalid_category"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 34, 68, "EDIT", {"category_characteristic": "soil_site"}, true],
    ["characteristic", "category_characteristic", 35, 69, "EDIT", {"category_characteristic": "soil_chem"}, true],
    ["characteristic", "category_characteristic", 35, 70, "EDIT", {"category_characteristic": "invalid_option"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 36, 71, "SEARCH", {"category_characteristic": "invalid_category"}, "category_characteristic_format_KO"],
    ["characteristic", "category_characteristic", 36, 72, "SEARCH", {"category_characteristic": "soil_site"}, true],
    ["characteristic", "category_characteristic", 37, 73, "SEARCH", {"category_characteristic": "soil_bio"}, true],
    ["characteristic", "category_characteristic", 37, 74, "SEARCH", {"category_characteristic": "invalid_option"}, "category_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 38, 75, "ADD", {"bibref_characteristic": "Corta referenc"}, "bibref_characteristic_min_size_KO"],
    ["characteristic", "bibref_characteristic", 38, 76, "ADD", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 39, 77, "ADD", {"bibref_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "bibref_characteristic_max_size_KO"],
    ["characteristic", "bibref_characteristic", 39, 78, "ADD", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 40, 79, "ADD", {"bibref_characteristic": "Ref @# con simbolos no validos"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 40, 80, "ADD", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 41, 81, "ADD", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 41, 82, "ADD", {"bibref_characteristic": ""}, "bibref_characteristic_min_size_KO"],
    ["characteristic", "bibref_characteristic", 42, 83, "EDIT", {"bibref_characteristic": "Corta editada"}, "bibref_characteristic_min_size_KO"],
    ["characteristic", "bibref_characteristic", 42, 84, "EDIT", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 43, 85, "EDIT", {"bibref_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "bibref_characteristic_max_size_KO"],
    ["characteristic", "bibref_characteristic", 43, 86, "EDIT", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 44, 87, "EDIT", {"bibref_characteristic": "Ref editada @ con simbolo invalido"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 44, 88, "EDIT", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 45, 89, "EDIT", {"bibref_characteristic": "Lopez, M. \"Estudio actualizado y completo\"."}, true],
    ["characteristic", "bibref_characteristic", 45, 90, "EDIT", {"bibref_characteristic": ""}, "bibref_characteristic_min_size_KO"],
    ["characteristic", "bibref_characteristic", 46, 91, "SEARCH", {"bibref_characteristic": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}, "bibref_characteristic_max_size_KO"],
    ["characteristic", "bibref_characteristic", 46, 92, "SEARCH", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 47, 93, "SEARCH", {"bibref_characteristic": "Busqueda con @ simbolo"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 47, 94, "SEARCH", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],
    ["characteristic", "bibref_characteristic", 48, 95, "SEARCH", {"bibref_characteristic": "Garcia"}, true],
    ["characteristic", "bibref_characteristic", 48, 96, "SEARCH", {"bibref_characteristic": "9ñ@!9ñ@!9ñ@!"}, "bibref_characteristic_format_KO"],
    ["characteristic", "file_characteristic", 49, 97, "ADD", {"file_characteristic": ""}, "file_characteristic_no_file_KO"],
    ["characteristic", "file_characteristic", 49, 98, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 50, 99, "ADD", {"file_characteristic": {"name": "ab.pdf", "type": "application/pdf", "size": 1000}}, "file_characteristic_min_size_KO"],
    ["characteristic", "file_characteristic", 50, 100, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 51, 101, "ADD", {"file_characteristic": {"name": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.pdf", "type": "application/pdf", "size": 1000}}, "file_characteristic_max_size_KO"],
    ["characteristic", "file_characteristic", 51, 102, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 52, 103, "ADD", {"file_characteristic": {"name": "mi archivo.pdf", "type": "application/pdf", "size": 1000}}, "file_characteristic_format_name_file_KO"],
    ["characteristic", "file_characteristic", 52, 104, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 53, 105, "ADD", {"file_characteristic": {"name": "archivo.txt", "type": "text/plain", "size": 5000}}, "file_characteristic_type_file_KO"],
    ["characteristic", "file_characteristic", 53, 106, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 54, 107, "ADD", {"file_characteristic": {"name": "archivomuygrande.pdf", "type": "application/pdf", "size": 250000}}, "file_characteristic_max_size_file_KO"],
    ["characteristic", "file_characteristic", 54, 108, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 55, 109, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 55, 110, "ADD", {"file_characteristic": ""}, "file_characteristic_no_file_KO"],
    ["characteristic", "file_characteristic", 56, 111, "EDIT", {"file_characteristic": {"name": "ab.pdf", "type": "application/pdf", "size": 1000}}, "file_characteristic_min_size_KO"],
    ["characteristic", "file_characteristic", 56, 112, "EDIT", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 57, 113, "EDIT", {"file_characteristic": {"name": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.pdf", "type": "application/pdf", "size": 1000}}, "file_characteristic_max_size_KO"],
    ["characteristic", "file_characteristic", 57, 114, "EDIT", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 58, 115, "EDIT", {"file_characteristic": {"name": "mi archivo.pdf", "type": "application/pdf", "size": 1000}}, "file_characteristic_format_name_file_KO"],
    ["characteristic", "file_characteristic", 58, 116, "EDIT", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 59, 117, "EDIT", {"file_characteristic": {"name": "archivo.txt", "type": "text/plain", "size": 5000}}, "file_characteristic_type_file_KO"],
    ["characteristic", "file_characteristic", 59, 118, "EDIT", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 60, 119, "EDIT", {"file_characteristic": {"name": "archivomuygrande.pdf", "type": "application/pdf", "size": 250000}}, "file_characteristic_max_size_file_KO"],
    ["characteristic", "file_characteristic", 60, 120, "EDIT", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 61, 121, "EDIT", {"file_characteristic": {"name": "editado.doc", "type": "application/msword", "size": 100000}}, true],
    ["characteristic", "file_characteristic", 61, 122, "EDIT", {"file_characteristic": ""}, "file_characteristic_min_size_KO"],
    ["characteristic", "file_characteristic", 62, 123, "SEARCH", {"file_characteristic": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}, "file_characteristic_max_size_KO"],
    ["characteristic", "file_characteristic", 62, 124, "SEARCH", {"file_characteristic": "documento.pdf"}, true],
    ["characteristic", "file_characteristic", 63, 125, "SEARCH", {"file_characteristic": "archivo 123.pdf"}, "file_characteristic_format_KO"],
    ["characteristic", "file_characteristic", 63, 126, "SEARCH", {"file_characteristic": "documento.pdf"}, true],
    ["characteristic", "file_characteristic", 64, 127, "SEARCH", {"file_characteristic": "documento.pdf"}, true],
    ["characteristic", "file_characteristic", 64, 128, "SEARCH", {"file_characteristic": "archivo 1.pdf"}, "file_characteristic_format_KO"],

    // Ampliacion: id_characteristic en limite exacto de max_size (11 digitos)
    ["characteristic", "id_characteristic", 65, 129, "SEARCH", {"id_characteristic": "12345678901"}, true],
    ["characteristic", "id_characteristic", 65, 130, "SEARCH", {"id_characteristic": "123456789012"}, "id_characteristic_max_size_KO"],

    // Ampliacion: name_characteristic en limite exacto de min_size (8)
    ["characteristic", "name_characteristic", 66, 131, "ADD", {"name_characteristic": "Caracter"}, true],
    ["characteristic", "name_characteristic", 66, 132, "ADD", {"name_characteristic": "Caracte"}, "name_characteristic_min_size_KO"],

    // Ampliacion: name_characteristic en limite exacto de max_size (100)
    ["characteristic", "name_characteristic", 67, 133, "ADD", {"name_characteristic": "A".repeat(100)}, true],
    ["characteristic", "name_characteristic", 67, 134, "ADD", {"name_characteristic": "A".repeat(101)}, "name_characteristic_max_size_KO"],

    // Ampliacion: name_characteristic con simbolos no permitidos
    ["characteristic", "name_characteristic", 68, 135, "ADD", {"name_characteristic": "Nombre@Invalido!!"}, "name_characteristic_format_KO"],
    ["characteristic", "name_characteristic", 68, 136, "ADD", {"name_characteristic": "Valid Characteristic Name"}, true],

    // Ampliacion: description_characteristic en limite exacto de min_size (80)
    ["characteristic", "description_characteristic", 69, 137, "ADD", {"description_characteristic": "A".repeat(80)}, true],
    ["characteristic", "description_characteristic", 69, 138, "ADD", {"description_characteristic": "A".repeat(79)}, "description_characteristic_min_size_KO"],

    // Ampliacion: description_characteristic en limite exacto de max_size (5000)
    ["characteristic", "description_characteristic", 70, 139, "ADD", {"description_characteristic": "A".repeat(5000)}, true],
    ["characteristic", "description_characteristic", 70, 140, "ADD", {"description_characteristic": "A".repeat(5001)}, "description_characteristic_max_size_KO"],

    // Ampliacion: description_characteristic con digitos no permitidos
    ["characteristic", "description_characteristic", 71, 141, "ADD", {"description_characteristic": "This description contains the number 12345 which is not allowed by the format rule for the field"}, "description_characteristic_format_KO"],
    ["characteristic", "description_characteristic", 71, 142, "ADD", {"description_characteristic": "This is a valid characteristic description that has enough length to pass the minimum size validation for the field"}, true],

    // Ampliacion: bibref_characteristic en limite exacto de min_size (16)
    ["characteristic", "bibref_characteristic", 72, 143, "ADD", {"bibref_characteristic": "A".repeat(16)}, true],
    ["characteristic", "bibref_characteristic", 72, 144, "ADD", {"bibref_characteristic": "A".repeat(15)}, "bibref_characteristic_min_size_KO"],

    // Ampliacion: bibref_characteristic en limite exacto de max_size (200)
    ["characteristic", "bibref_characteristic", 73, 145, "ADD", {"bibref_characteristic": "A".repeat(200)}, true],
    ["characteristic", "bibref_characteristic", 73, 146, "ADD", {"bibref_characteristic": "A".repeat(201)}, "bibref_characteristic_max_size_KO"],

    // Ampliacion: bibref_characteristic con digitos no permitidos
    ["characteristic", "bibref_characteristic", 74, 147, "ADD", {"bibref_characteristic": "Garcia, P. Estudio del ano 2024"}, "bibref_characteristic_format_KO"],
    ["characteristic", "bibref_characteristic", 74, 148, "ADD", {"bibref_characteristic": "Garcia, P. \"Estudio amplio de suelos\"."}, true],

    // Ampliacion: file_characteristic con tipo MIME doc valido
    ["characteristic", "file_characteristic", 75, 149, "ADD", {"file_characteristic": {"name": "documento.doc", "type": "application/msword", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 75, 150, "ADD", {"file_characteristic": {"name": "imagen.jpg", "type": "image/jpeg", "size": 50000}}, "file_characteristic_type_file_KO"],

    // Ampliacion: file_characteristic con tipo MIME docx valido
    ["characteristic", "file_characteristic", 76, 151, "ADD", {"file_characteristic": {"name": "documento.docx", "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 76, 152, "ADD", {"file_characteristic": {"name": "archivo.txt", "type": "text/plain", "size": 50000}}, "file_characteristic_type_file_KO"],

    // Ampliacion: file_characteristic en el limite de max_size_file (menor de 200000 bytes): 199999 valido, 200000 invalido
    ["characteristic", "file_characteristic", 77, 153, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 199999}}, true],
    ["characteristic", "file_characteristic", 77, 154, "ADD", {"file_characteristic": {"name": "documento.pdf", "type": "application/pdf", "size": 200000}}, "file_characteristic_max_size_file_KO"],

    // Ampliacion: file_characteristic en limite exacto de min_size del nombre (7)
    ["characteristic", "file_characteristic", 78, 155, "ADD", {"file_characteristic": {"name": "abc.pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 78, 156, "ADD", {"file_characteristic": {"name": "ab.pdf", "type": "application/pdf", "size": 50000}}, "file_characteristic_min_size_KO"],

    // Ampliacion: file_characteristic en limite exacto de max_size del nombre (100)
    ["characteristic", "file_characteristic", 79, 157, "ADD", {"file_characteristic": {"name": "a".repeat(96) + ".pdf", "type": "application/pdf", "size": 50000}}, true],
    ["characteristic", "file_characteristic", 79, 158, "ADD", {"file_characteristic": {"name": "a".repeat(97) + ".pdf", "type": "application/pdf", "size": 50000}}, "file_characteristic_max_size_KO"]
];
