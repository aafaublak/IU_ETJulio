var characteristic_TestSubmit = [
    ["characteristic", "ADD", 1, "ADD correcto con todos los campos",
        {
            "name_characteristic": "Soil Nitrogen Content",
            "description_characteristic": "This is a comprehensive description of the soil nitrogen content characteristic that provides enough detail for the minimum size validation",
            "data_type_characteristic": "number",
            "category_characteristic": "soil_chem",
            "bibref_characteristic": "García, J. \"Nitrógeno en suelos profundos\".",
            "file_characteristic": {name: "nitrogeno.pdf", type: "application/pdf", size: 50000}
        },
        true
    ],
    ["characteristic", "ADD", 2, "ADD con nombre demasiado corto",
        {
            "name_characteristic": "Short",
            "description_characteristic": "This is a comprehensive description of the soil nitrogen content characteristic that provides enough detail for the minimum size validation",
            "data_type_characteristic": "number",
            "category_characteristic": "soil_chem",
            "bibref_characteristic": "García, J. \"Nitrógeno en suelos profundos\".",
            "file_characteristic": {name: "nitrogeno.pdf", type: "application/pdf", size: 50000}
        },
        "name_characteristic_min_size_KO"
    ],
    ["characteristic", "ADD", 3, "ADD con tipo de dato invalido",
        {
            "name_characteristic": "Soil Nitrogen Content",
            "description_characteristic": "This is a comprehensive description of the soil nitrogen content characteristic that provides enough detail for the minimum size validation",
            "data_type_characteristic": "invalid",
            "category_characteristic": "soil_chem",
            "bibref_characteristic": "García, J. \"Nitrógeno en suelos profundos\".",
            "file_characteristic": {name: "nitrogeno.pdf", type: "application/pdf", size: 50000}
        },
        "data_type_characteristic_format_KO"
    ],
    ["characteristic", "ADD", 4, "ADD con fichero demasiado grande (>200000)",
        {
            "name_characteristic": "Soil Nitrogen Content",
            "description_characteristic": "This is a comprehensive description of the soil nitrogen content characteristic that provides enough detail for the minimum size validation",
            "data_type_characteristic": "text",
            "category_characteristic": "soil_bio",
            "bibref_characteristic": "García, J. \"Nitrógeno en suelos profundos\".",
            "file_characteristic": {name: "archivogrande.pdf", type: "application/pdf", size: 300000}
        },
        "file_characteristic_max_size_file_KO"
    ],
    ["characteristic", "ADD", 5, "ADD sin fichero",
        {
            "name_characteristic": "Soil Nitrogen Content",
            "description_characteristic": "This is a comprehensive description of the soil nitrogen content characteristic that provides enough detail for the minimum size validation",
            "data_type_characteristic": "set",
            "category_characteristic": "soil_site",
            "bibref_characteristic": "García, J. \"Nitrógeno en suelos profundos\".",
            "file_characteristic": ""
        },
        "file_characteristic_no_file_KO"
    ],

    ["characteristic", "EDIT", 6, "EDIT correcto",
        {
            "id_characteristic": "1",
            "name_characteristic": "Edited Soil Characteristic",
            "description_characteristic": "Updated description for this characteristic that has adequate length to pass the minimum size validation requirement for editing",
            "data_type_characteristic": "text",
            "category_characteristic": "soil_bio",
            "bibref_characteristic": "López, M. \"Actualización completa del estudio\".",
            "file_characteristic": {name: "editado.doc", type: "application/msword", size: 100000}
        },
        true
    ],
    ["characteristic", "EDIT", 7, "EDIT con categoria invalida",
        {
            "id_characteristic": "1",
            "name_characteristic": "Edited Soil Characteristic",
            "description_characteristic": "Updated description for this characteristic that has adequate length to pass the minimum size validation requirement for editing",
            "data_type_characteristic": "number",
            "category_characteristic": "invalid_cat",
            "bibref_characteristic": "López, M. \"Actualización completa del estudio\".",
            "file_characteristic": {name: "editado.doc", type: "application/msword", size: 100000}
        },
        "category_characteristic_format_KO"
    ],

    ["characteristic", "SEARCH", 8, "SEARCH por ID correcto",
        {
            "id_characteristic": "42"
        },
        true
    ],
    ["characteristic", "SEARCH", 9, "SEARCH por nombre",
        {
            "name_characteristic": "Nitrogen Search"
        },
        true
    ],
    ["characteristic", "SEARCH", 10, "SEARCH con ID formato incorrecto",
        {
            "id_characteristic": "abc"
        },
        "id_characteristic_format_KO"
    ]
];
