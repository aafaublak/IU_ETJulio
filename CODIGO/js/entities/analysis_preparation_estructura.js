var analysis_preparation_estructura = {
    entity: "analysis_preparation",
    attributes_list: [
        "id_analysis_preparation",
        "name_analysis_preparation",
        "description_analysis_preparation",
        "bib_analysis_preparation",
        "file_analysis_preparation"
    ],
    attributes: {
        id_analysis_preparation: {
            html: { tag: "input", type: "number" },
            is_pk: true,
            is_autoincrement: true,
            is_null: false,
            is_unique: false,
            validations: {
                SEARCH: {
                    max_size: { value: 11, error_msg: "id_analysis_preparation_max_size_KO" },
                    format: { value: "^[0-9]+$", error_msg: "id_analysis_preparation_format_KO" }
                }
            }
        },
        name_analysis_preparation: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: true,
            validations: {
                ADD: {
                    min_size: { value: 8, error_msg: "name_analysis_preparation_min_size_KO" },
                    max_size: { value: 100, error_msg: "name_analysis_preparation_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_analysis_preparation_format_KO" }
                },
                EDIT: {
                    min_size: { value: 8, error_msg: "name_analysis_preparation_min_size_KO" },
                    max_size: { value: 100, error_msg: "name_analysis_preparation_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_analysis_preparation_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 100, error_msg: "name_analysis_preparation_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_analysis_preparation_format_KO" }
                }
            }
        },
        description_analysis_preparation: {
            html: { tag: "textarea" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 80, error_msg: "description_analysis_preparation_min_size_KO" },
                    max_size: { value: 5000, error_msg: "description_analysis_preparation_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "description_analysis_preparation_format_KO" }
                },
                EDIT: {
                    min_size: { value: 80, error_msg: "description_analysis_preparation_min_size_KO" },
                    max_size: { value: 5000, error_msg: "description_analysis_preparation_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "description_analysis_preparation_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 5000, error_msg: "description_analysis_preparation_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "description_analysis_preparation_format_KO" }
                }
            }
        },
        bib_analysis_preparation: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 6, error_msg: "bib_analysis_preparation_min_size_KO" },
                    max_size: { value: 200, error_msg: "bib_analysis_preparation_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "bib_analysis_preparation_format_KO" }
                },
                EDIT: {
                    min_size: { value: 6, error_msg: "bib_analysis_preparation_min_size_KO" },
                    max_size: { value: 200, error_msg: "bib_analysis_preparation_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "bib_analysis_preparation_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 200, error_msg: "bib_analysis_preparation_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "bib_analysis_preparation_format_KO" }
                }
            }
        },
        file_analysis_preparation: {
            html: { tag: "input", type: "file" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    no_file: { error_msg: "file_analysis_preparation_no_file_KO" },
                    min_size: { value: 7, error_msg: "file_analysis_preparation_min_size_KO" },
                    max_size: { value: 100, error_msg: "file_analysis_preparation_max_size_KO" },
                    format_name_file: { value: "^[a-zA-Z.]+$", error_msg: "file_analysis_preparation_format_name_file_KO" },
                    type_file: { value: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error_msg: "file_analysis_preparation_type_file_KO" },
                    max_size_file: { value: 2000000, error_msg: "file_analysis_preparation_max_size_file_KO" }
                },
                EDIT: {
                    min_size: { value: 7, error_msg: "file_analysis_preparation_min_size_KO" },
                    max_size: { value: 100, error_msg: "file_analysis_preparation_max_size_KO" },
                    format_name_file: { value: "^[a-zA-Z.]+$", error_msg: "file_analysis_preparation_format_name_file_KO" },
                    type_file: { value: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error_msg: "file_analysis_preparation_type_file_KO" },
                    max_size_file: { value: 2000000, error_msg: "file_analysis_preparation_max_size_file_KO" }
                },
                SEARCH: {
                    max_size: { value: 100, error_msg: "file_analysis_preparation_max_size_KO" },
                    format: { value: "^[a-zA-Z.]+$", error_msg: "file_analysis_preparation_format_KO" }
                }
            }
        }
    }
};
