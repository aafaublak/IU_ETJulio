var project_estructura = {
    entity: "project",
    attributes_list: [
        "id_project",
        "name_project",
        "start_date_project",
        "end_date_project",
        "responsable_project",
        "organization_project",
        "description_project",
        "file_project",
        "code_project",
        "acronym_project",
        "id_sampling_methodology"
    ],
    attributes: {
        id_project: {
            html: { tag: "input", type: "number" },
            is_pk: true,
            is_autoincrement: true,
            is_null: false,
            is_unique: false,
            validations: {
                SEARCH: {
                    max_size: { value: 11, error_msg: "id_project_max_size_KO" },
                    format: { value: "^[0-9]+$", error_msg: "id_project_format_KO" }
                }
            }
        },
        name_project: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: true,
            validations: {
                ADD: {
                    min_size: { value: 15, error_msg: "name_project_min_size_KO" },
                    max_size: { value: 100, error_msg: "name_project_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_project_format_KO" }
                },
                EDIT: {
                    min_size: { value: 15, error_msg: "name_project_min_size_KO" },
                    max_size: { value: 100, error_msg: "name_project_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_project_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 100, error_msg: "name_project_max_size_KO" },
                    format: { value: "^[A-Za-z\\s]+$", error_msg: "name_project_format_KO" }
                }
            }
        },
        start_date_project: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    format: { value: "^\\d{2}/\\d{2}/\\d{4}$", error_msg: "start_date_project_format_KO" }
                },
                EDIT: {
                    format: { value: "^\\d{2}/\\d{2}/\\d{4}$", error_msg: "start_date_project_format_KO" }
                },
                SEARCH: {
                    format: { value: "^(\\d{2}/\\d{2}/\\d{4})?$", error_msg: "start_date_project_format_KO" }
                }
            }
        },
        end_date_project: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    format: { value: "^\\d{2}/\\d{2}/\\d{4}$", error_msg: "end_date_project_format_KO" },
                    personalized: { personalize: true, error_msg: "end_date_project_personalized_KO" }
                },
                EDIT: {
                    format: { value: "^\\d{2}/\\d{2}/\\d{4}$", error_msg: "end_date_project_format_KO" },
                    personalized: { personalize: true, error_msg: "end_date_project_personalized_KO" }
                },
                SEARCH: {
                    format: { value: "^(\\d{2}/\\d{2}/\\d{4})?$", error_msg: "end_date_project_format_KO" }
                }
            }
        },
        responsable_project: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 6, error_msg: "responsable_project_min_size_KO" },
                    max_size: { value: 60, error_msg: "responsable_project_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", error_msg: "responsable_project_format_KO" }
                },
                EDIT: {
                    min_size: { value: 6, error_msg: "responsable_project_min_size_KO" },
                    max_size: { value: 60, error_msg: "responsable_project_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", error_msg: "responsable_project_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 60, error_msg: "responsable_project_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", error_msg: "responsable_project_format_KO" }
                }
            }
        },
        organization_project: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 6, error_msg: "organization_project_min_size_KO" },
                    max_size: { value: 100, error_msg: "organization_project_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", error_msg: "organization_project_format_KO" }
                },
                EDIT: {
                    min_size: { value: 6, error_msg: "organization_project_min_size_KO" },
                    max_size: { value: 100, error_msg: "organization_project_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", error_msg: "organization_project_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 100, error_msg: "organization_project_max_size_KO" },
                    format: { value: "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", error_msg: "organization_project_format_KO" }
                }
            }
        },
        description_project: {
            html: { tag: "textarea" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 30, error_msg: "description_project_min_size_KO" },
                    max_size: { value: 500, error_msg: "description_project_max_size_KO" },
                    format: { value: "^[\\x20-\\x7E\\n\\r\\t]+$", error_msg: "description_project_format_KO" }
                },
                EDIT: {
                    min_size: { value: 30, error_msg: "description_project_min_size_KO" },
                    max_size: { value: 500, error_msg: "description_project_max_size_KO" },
                    format: { value: "^[\\x20-\\x7E\\n\\r\\t]+$", error_msg: "description_project_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 500, error_msg: "description_project_max_size_KO" },
                    format: { value: "^[\\x20-\\x7E\\n\\r\\t]*$", error_msg: "description_project_format_KO" }
                }
            }
        },
        file_project: {
            html: { tag: "input", type: "file" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    no_file: { error_msg: "file_project_no_file_KO" },
                    min_size: { value: 7, error_msg: "file_project_min_size_KO" },
                    max_size: { value: 100, error_msg: "file_project_max_size_KO" },
                    format_name_file: { value: "^[A-Za-z.]+$", error_msg: "file_project_format_name_file_KO" },
                    type_file: { value: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error_msg: "file_project_type_file_KO" },
                    max_size_file: { value: 2000000, error_msg: "file_project_max_size_file_KO" }
                },
                EDIT: {
                    min_size: { value: 7, error_msg: "file_project_min_size_KO" },
                    max_size: { value: 100, error_msg: "file_project_max_size_KO" },
                    format_name_file: { value: "^[A-Za-z.]+$", error_msg: "file_project_format_name_file_KO" },
                    type_file: { value: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], error_msg: "file_project_type_file_KO" },
                    max_size_file: { value: 2000000, error_msg: "file_project_max_size_file_KO" }
                },
                SEARCH: {
                    max_size: { value: 100, error_msg: "file_project_max_size_KO" },
                    format: { value: "^[A-Za-z.]+$", error_msg: "file_project_format_KO" }
                }
            }
        },
        code_project: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: true,
            validations: {
                ADD: {
                    min_size: { value: 6, error_msg: "code_project_min_size_KO" },
                    max_size: { value: 50, error_msg: "code_project_max_size_KO" },
                    format: { value: "^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "code_project_format_KO" }
                },
                EDIT: {
                    min_size: { value: 6, error_msg: "code_project_min_size_KO" },
                    max_size: { value: 50, error_msg: "code_project_max_size_KO" },
                    format: { value: "^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "code_project_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 50, error_msg: "code_project_max_size_KO" },
                    format: { value: "^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "code_project_format_KO" }
                }
            }
        },
        acronym_project: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: true,
            validations: {
                ADD: {
                    min_size: { value: 6, error_msg: "acronym_project_min_size_KO" },
                    max_size: { value: 15, error_msg: "acronym_project_max_size_KO" },
                    format: { value: "^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "acronym_project_format_KO" }
                },
                EDIT: {
                    min_size: { value: 6, error_msg: "acronym_project_min_size_KO" },
                    max_size: { value: 15, error_msg: "acronym_project_max_size_KO" },
                    format: { value: "^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "acronym_project_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 15, error_msg: "acronym_project_max_size_KO" },
                    format: { value: "^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?\"-]+$", error_msg: "acronym_project_format_KO" }
                }
            }
        },
        id_sampling_methodology: {
            html: { tag: "input", type: "number" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD: {
                    min_size: { value: 1, error_msg: "id_sampling_methodology_min_size_KO" },
                    max_size: { value: 11, error_msg: "id_sampling_methodology_max_size_KO" },
                    format: { value: "^[0-9]+$", error_msg: "id_sampling_methodology_format_KO" }
                },
                EDIT: {
                    min_size: { value: 1, error_msg: "id_sampling_methodology_min_size_KO" },
                    max_size: { value: 11, error_msg: "id_sampling_methodology_max_size_KO" },
                    format: { value: "^[0-9]+$", error_msg: "id_sampling_methodology_format_KO" }
                },
                SEARCH: {
                    max_size: { value: 11, error_msg: "id_sampling_methodology_max_size_KO" },
                    format: { value: "^[0-9]+$", error_msg: "id_sampling_methodology_format_KO" }
                }
            }
        }
    }
};
