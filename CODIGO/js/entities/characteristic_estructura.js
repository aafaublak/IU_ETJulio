var characteristic_estructura = {
    entity: "characteristic",
    attributes_list: [
        "id_characteristic",
        "name_characteristic",
        "description_characteristic",
        "data_type_characteristic",
        "category_characteristic",
        "bibref_characteristic",
        "file_characteristic"
    ],
    attributes: {
        id_characteristic: {
            html: { tag: "input", type: "number" },
            is_pk: true,
            is_autoincrement: true,
            is_null: false,
            is_unique: false,
            validations: {
                SEARCH: {
                    max_size: { value: 11, error_msg: "id_characteristic_max_size_KO" },
                    format: { value: "^[0-9]+$", error_msg: "id_characteristic_format_KO" }
                }
            }
        },
        name_characteristic: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 8, error_msg: "name_characteristic_min_size_KO" },
                    max_size: { value: 100, error_msg: "name_characteristic_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_characteristic_format_KO" }
                },
                EDIT: {
                    min_size: { value: 8, error_msg: "name_characteristic_min_size_KO" },
                    max_size: { value: 100, error_msg: "name_characteristic_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_characteristic_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 100, error_msg: "name_characteristic_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_characteristic_format_KO" }
                }
            }
        },
        description_characteristic: {
            html: { tag: "textarea" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 80, error_msg: "description_characteristic_min_size_KO" },
                    max_size: { value: 5000, error_msg: "description_characteristic_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "description_characteristic_format_KO" }
                },
                EDIT: {
                    min_size: { value: 80, error_msg: "description_characteristic_min_size_KO" },
                    max_size: { value: 5000, error_msg: "description_characteristic_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "description_characteristic_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 5000, error_msg: "description_characteristic_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "description_characteristic_format_KO" }
                }
            }
        },
        data_type_characteristic: {
            html: { tag: "select", options: ["number", "text", "set"] },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    format: { value: "^(number|text|set)$", error_msg: "data_type_characteristic_format_KO" }
                },
                EDIT: {
                    format: { value: "^(number|text|set)$", error_msg: "data_type_characteristic_format_KO" }
                },
                SEARCH: {
                    format: { value: "^(number|text|set)?$", error_msg: "data_type_characteristic_format_KO" }
                }
            }
        },
        category_characteristic: {
            html: { tag: "select", options: ["soil_site", "soil_chem", "soil_bio"] },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    format: { value: "^(soil_site|soil_chem|soil_bio)$", error_msg: "category_characteristic_format_KO" }
                },
                EDIT: {
                    format: { value: "^(soil_site|soil_chem|soil_bio)$", error_msg: "category_characteristic_format_KO" }
                },
                SEARCH: {
                    format: { value: "^(soil_site|soil_chem|soil_bio)?$", error_msg: "category_characteristic_format_KO" }
                }
            }
        },
        bibref_characteristic: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 16, error_msg: "bibref_characteristic_min_size_KO" },
                    max_size: { value: 200, error_msg: "bibref_characteristic_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "bibref_characteristic_format_KO" }
                },
                EDIT: {
                    min_size: { value: 16, error_msg: "bibref_characteristic_min_size_KO" },
                    max_size: { value: 200, error_msg: "bibref_characteristic_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "bibref_characteristic_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 200, error_msg: "bibref_characteristic_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "bibref_characteristic_format_KO" }
                }
            }
        },
        file_characteristic: {
            html: { tag: "input", type: "file" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    no_file: { error_msg: "file_characteristic_no_file_KO" },
                    min_size: { value: 7, error_msg: "file_characteristic_min_size_KO" },
                    max_size: { value: 100, error_msg: "file_characteristic_max_size_KO" },
                    format_name_file: { value: "^[a-zA-Z.]+$", error_msg: "file_characteristic_format_name_file_KO" },
                    type_file: { value: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error_msg: "file_characteristic_type_file_KO" },
                    max_size_file: { value: 200000, error_msg: "file_characteristic_max_size_file_KO" }
                },
                EDIT: {
                    min_size: { value: 7, error_msg: "file_characteristic_min_size_KO" },
                    max_size: { value: 100, error_msg: "file_characteristic_max_size_KO" },
                    format_name_file: { value: "^[a-zA-Z.]+$", error_msg: "file_characteristic_format_name_file_KO" },
                    type_file: { value: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error_msg: "file_characteristic_type_file_KO" },
                    max_size_file: { value: 200000, error_msg: "file_characteristic_max_size_file_KO" }
                },
                SEARCH: {
                    max_size: { value: 100, error_msg: "file_characteristic_max_size_KO" },
                    format: { value: "^[a-zA-Z.]+$", error_msg: "file_characteristic_format_KO" }
                }
            }
        }
    }
};
