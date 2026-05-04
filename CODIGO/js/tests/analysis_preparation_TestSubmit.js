var analysis_preparation_TestSubmit = [
    ["analysis_preparation", "ADD", 1, "ADD correcto con todos los campos validos",
        {
            "name_analysis_preparation": "Valid Analysis Name",
            "description_analysis_preparation": "This is a valid and long enough description for the analysis preparation entity that meets the minimum size requirements",
            "bib_analysis_preparation": "García, J. \"Investigación amplia y detallada\".",
            "file_analysis_preparation": {name: "documento.pdf", type: "application/pdf", size: 50000}
        },
        true
    ],

    ["analysis_preparation", "ADD", 2, "ADD con nombre demasiado corto",
        {
            "name_analysis_preparation": "Corto",
            "description_analysis_preparation": "This is a valid and long enough description for the analysis preparation entity that meets the minimum size requirements",
            "bib_analysis_preparation": "García, J. \"Investigación amplia y detallada\".",
            "file_analysis_preparation": {name: "documento.pdf", type: "application/pdf", size: 50000}
        },
        "name_analysis_preparation_min_size_KO"
    ],

    ["analysis_preparation", "ADD", 3, "ADD con descripcion demasiado corta",
        {
            "name_analysis_preparation": "Valid Analysis Name",
            "description_analysis_preparation": "Short",
            "bib_analysis_preparation": "García, J. \"Investigación amplia y detallada\".",
            "file_analysis_preparation": {name: "documento.pdf", type: "application/pdf", size: 50000}
        },
        "description_analysis_preparation_min_size_KO"
    ],

    ["analysis_preparation", "ADD", 4, "ADD sin fichero seleccionado",
        {
            "name_analysis_preparation": "Valid Analysis Name",
            "description_analysis_preparation": "This is a valid and long enough description for the analysis preparation entity that meets the minimum size requirements",
            "bib_analysis_preparation": "García, J. \"Investigación amplia y detallada\".",
            "file_analysis_preparation": ""
        },
        "file_analysis_preparation_no_file_KO"
    ],

    ["analysis_preparation", "ADD", 5, "ADD con tipo de fichero incorrecto",
        {
            "name_analysis_preparation": "Valid Analysis Name",
            "description_analysis_preparation": "This is a valid and long enough description for the analysis preparation entity that meets the minimum size requirements",
            "bib_analysis_preparation": "García, J. \"Investigación amplia y detallada\".",
            "file_analysis_preparation": {name: "imagen.png", type: "image/png", size: 50000}
        },
        "file_analysis_preparation_type_file_KO"
    ],

    ["analysis_preparation", "EDIT", 6, "EDIT correcto con todos los campos validos",
        {
            "id_analysis_preparation": "1",
            "name_analysis_preparation": "Edited Analysis Name",
            "description_analysis_preparation": "This is a valid and long enough edited description for the analysis preparation entity that meets the minimum size requirements",
            "bib_analysis_preparation": "López, M. \"Estudio actualizado y completo\".",
            "file_analysis_preparation": {name: "editado.pdf", type: "application/pdf", size: 50000}
        },
        true
    ],

    ["analysis_preparation", "EDIT", 7, "EDIT con bibliografia demasiado corta",
        {
            "id_analysis_preparation": "1",
            "name_analysis_preparation": "Edited Analysis Name",
            "description_analysis_preparation": "This is a valid and long enough edited description for the analysis preparation entity that meets the minimum size requirements",
            "bib_analysis_preparation": "Abc",
            "file_analysis_preparation": {name: "editado.pdf", type: "application/pdf", size: 50000}
        },
        "bib_analysis_preparation_min_size_KO"
    ],

    ["analysis_preparation", "SEARCH", 8, "SEARCH por ID correcto",
        {
            "id_analysis_preparation": "12345"
        },
        true
    ],

    ["analysis_preparation", "SEARCH", 9, "SEARCH con formato de ID incorrecto",
        {
            "id_analysis_preparation": "abc"
        },
        "id_analysis_preparation_format_KO"
    ],

    ["analysis_preparation", "SEARCH", 10, "SEARCH por nombre correcto",
        {
            "name_analysis_preparation": "Nombre Busqueda"
        },
        true
    ]
];
