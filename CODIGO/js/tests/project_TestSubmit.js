var project_TestSubmit = [
    ["project", "ADD", 1, "ADD correcto con todos los campos",
        {
            "name_project": "Valid Project Name Testing",
            "start_date_project": "01/01/2024",
            "end_date_project": "31/12/2025",
            "responsable_project": "Juan García López",
            "organization_project": "Universidad de Vigo",
            "description_project": "This project involves a comprehensive study of soil characteristics and their impact",
            "file_project": {name: "proyecto.pdf", type: "application/pdf", size: 500000},
            "code_project": "Codigo Proyecto",
            "acronym_project": "PROY.Ñ!",
            "id_sampling_methodology": "5"
        },
        true
    ],
    ["project", "ADD", 2, "ADD con nombre demasiado corto (min 15)",
        {
            "name_project": "Short Name",
            "start_date_project": "01/01/2024",
            "end_date_project": "31/12/2025",
            "responsable_project": "Juan García",
            "organization_project": "Universidad",
            "description_project": "This project involves a comprehensive study of soil characteristics and their impact",
            "file_project": {name: "proyecto.pdf", type: "application/pdf", size: 500000},
            "code_project": "Codigo Proyecto",
            "acronym_project": "PROYÑ.!",
            "id_sampling_methodology": "3"
        },
        "name_project_min_size_KO"
    ],
    ["project", "ADD", 3, "ADD con fecha inicio formato incorrecto",
        {
            "name_project": "Valid Project Name Testing",
            "start_date_project": "2024-01-01",
            "end_date_project": "31/12/2025",
            "responsable_project": "Juan García",
            "organization_project": "Universidad",
            "description_project": "This project involves a comprehensive study of soil characteristics and their impact",
            "file_project": {name: "proyecto.pdf", type: "application/pdf", size: 500000},
            "code_project": "Codigo Proyecto",
            "acronym_project": "PROYÑ.!",
            "id_sampling_methodology": "3"
        },
        "start_date_project_format_KO"
    ],
    ["project", "ADD", 4, "ADD con fecha fin anterior a fecha inicio",
        {
            "name_project": "Valid Project Name Testing",
            "start_date_project": "15/06/2024",
            "end_date_project": "01/01/2023",
            "responsable_project": "Juan García",
            "organization_project": "Universidad",
            "description_project": "This project involves a comprehensive study of soil characteristics and their impact",
            "file_project": {name: "proyecto.pdf", type: "application/pdf", size: 500000},
            "code_project": "Codigo Proyecto",
            "acronym_project": "PROYÑ.!",
            "id_sampling_methodology": "3"
        },
        "end_date_project_personalized_KO"
    ],
    ["project", "ADD", 5, "ADD sin fichero",
        {
            "name_project": "Valid Project Name Testing",
            "start_date_project": "01/01/2024",
            "end_date_project": "31/12/2025",
            "responsable_project": "Juan García",
            "organization_project": "Universidad",
            "description_project": "This project involves a comprehensive study of soil characteristics and their impact",
            "file_project": "",
            "code_project": "Codigo Proyecto",
            "acronym_project": "PROYÑ.!",
            "id_sampling_methodology": "3"
        },
        "file_project_no_file_KO"
    ],

    ["project", "EDIT", 6, "EDIT correcto",
        {
            "id_project": "1",
            "name_project": "Edited Project Name Long Enough",
            "start_date_project": "01/01/2024",
            "end_date_project": "31/12/2026",
            "responsable_project": "María Fernández",
            "organization_project": "CSIC España",
            "description_project": "Updated description for this project which is long enough for validation purposes",
            "file_project": {name: "editado.docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", size: 200000},
            "code_project": "Codigo Editado",
            "acronym_project": "EDIT.ñ!",
            "id_sampling_methodology": "7"
        },
        true
    ],
    ["project", "EDIT", 7, "EDIT con descripcion demasiado corta",
        {
            "id_project": "1",
            "name_project": "Edited Project Name Long Enough",
            "start_date_project": "01/01/2024",
            "end_date_project": "31/12/2026",
            "responsable_project": "María Fernández",
            "organization_project": "CSIC España",
            "description_project": "Corto",
            "file_project": {name: "editado.docx", type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document", size: 200000},
            "code_project": "Codigo Editado",
            "acronym_project": "EDIT.ñ!",
            "id_sampling_methodology": "7"
        },
        "description_project_min_size_KO"
    ],

    ["project", "SEARCH", 8, "SEARCH correcto por ID",
        {
            "id_project": "42"
        },
        true
    ],
    ["project", "SEARCH", 9, "SEARCH correcto por nombre",
        {
            "name_project": "Nombre Proyecto"
        },
        true
    ],
    ["project", "SEARCH", 10, "SEARCH con ID formato incorrecto",
        {
            "id_project": "abc"
        },
        "id_project_format_KO"
    ]
];
