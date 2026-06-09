/**
 * Estructura de la entidad project.
 *
 * Variable nombreentidad_estructura exigida por el enunciado. Sigue el
 * formato de la entrega: attributes_list y attributes con validation_rules
 * cuyas reglas con parametro son TUPLAS [valor, "codigo_mensaje"]. Las
 * reglas sin parametro se indican solo con su "codigo_mensaje" (no_file,
 * date). Las validaciones personalizadas de atributo se marcan con
 * personalize: true; el sistema invoca entonces el metodo
 * <atributo>_personalized_validation() de la clase de la entidad.
 *
 * Declarada con var para que cuelgue de window y el Gestor la encuentre
 * por nombre.
 */
var project_estructura = {
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
			html: { tag: "input", type: "number", component_visible_size: 7 },
			is_pk: true,
			is_autoincrement: true,
			is_null: false,
			validation_rules: {
				SEARCH: {
					max_size: [11, "id_project_max_size_KO"],
					format: ["^[0-9]+$", "id_project_format_KO"]
				}
			}
		},
		name_project: {
			html: { tag: "input", type: "text", component_visible_size: 30 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [15, "name_project_min_size_KO"],
					max_size: [100, "name_project_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_project_format_KO"]
				},
				EDIT: {
					min_size: [15, "name_project_min_size_KO"],
					max_size: [100, "name_project_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_project_format_KO"]
				},
				SEARCH: {
					max_size: [100, "name_project_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_project_format_KO"]
				}
			}
		},
		start_date_project: {
			html: { tag: "input", type: "text", component_visible_size: 15 },
			is_null: false,
			validation_rules: {
				ADD: {
					date: "start_date_project_date_KO"
				},
				EDIT: {
					date: "start_date_project_date_KO"
				},
				SEARCH: {
					format: ["^(\\d{2}/\\d{2}/\\d{4})?$", "start_date_project_format_KO"]
				}
			}
		},
		end_date_project: {
			html: { tag: "input", type: "text", component_visible_size: 15 },
			is_null: false,
			validation_rules: {
				ADD: {
					date: "end_date_project_date_KO",
					personalize: true
				},
				EDIT: {
					date: "end_date_project_date_KO",
					personalize: true
				},
				SEARCH: {
					format: ["^(\\d{2}/\\d{2}/\\d{4})?$", "end_date_project_format_KO"]
				}
			}
		},
		responsable_project: {
			html: { tag: "input", type: "text", component_visible_size: 20 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [6, "responsable_project_min_size_KO"],
					max_size: [60, "responsable_project_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", "responsable_project_format_KO"]
				},
				EDIT: {
					min_size: [6, "responsable_project_min_size_KO"],
					max_size: [60, "responsable_project_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", "responsable_project_format_KO"]
				},
				SEARCH: {
					max_size: [60, "responsable_project_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", "responsable_project_format_KO"]
				}
			}
		},
		organization_project: {
			html: { tag: "input", type: "text", component_visible_size: 20 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [6, "organization_project_min_size_KO"],
					max_size: [100, "organization_project_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", "organization_project_format_KO"]
				},
				EDIT: {
					min_size: [6, "organization_project_min_size_KO"],
					max_size: [100, "organization_project_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", "organization_project_format_KO"]
				},
				SEARCH: {
					max_size: [100, "organization_project_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", "organization_project_format_KO"]
				}
			}
		},
		description_project: {
			html: { tag: "textarea", rows: 10, columns: 100, component_visible_size: 100 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [30, "description_project_min_size_KO"],
					max_size: [500, "description_project_max_size_KO"],
					format: ["^[\\x20-\\x7E\\n\\r\\t]+$", "description_project_format_KO"]
				},
				EDIT: {
					min_size: [30, "description_project_min_size_KO"],
					max_size: [500, "description_project_max_size_KO"],
					format: ["^[\\x20-\\x7E\\n\\r\\t]+$", "description_project_format_KO"]
				},
				SEARCH: {
					max_size: [500, "description_project_max_size_KO"],
					format: ["^[\\x20-\\x7E\\n\\r\\t]*$", "description_project_format_KO"]
				}
			}
		},
		file_project: {
			html: { tag: "input", type: "file", multiple: false, component_visible_size: 7 },
			is_null: false,
			validation_rules: {
				ADD: {
					no_file: "file_project_no_file_KO",
					min_size: [7, "file_project_min_size_KO"],
					max_size: [100, "file_project_max_size_KO"],
					format_name_file: ["^[A-Za-z.]+$", "file_project_format_name_file_KO"],
					type_file: [["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], "file_project_type_file_KO"],
					max_size_file: [2000000, "file_project_max_size_file_KO"]
				},
				EDIT: {
					min_size: [7, "file_project_min_size_KO"],
					max_size: [100, "file_project_max_size_KO"],
					format_name_file: ["^[A-Za-z.]+$", "file_project_format_name_file_KO"],
					type_file: [["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], "file_project_type_file_KO"],
					max_size_file: [2000000, "file_project_max_size_file_KO"]
				},
				SEARCH: {
					max_size: [100, "file_project_max_size_KO"],
					format: ["^[A-Za-z.]+$", "file_project_format_KO"]
				}
			}
		},
		code_project: {
			html: { tag: "input", type: "text", component_visible_size: 10 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [6, "code_project_min_size_KO"],
					max_size: [50, "code_project_max_size_KO"],
					format: ["^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "code_project_format_KO"]
				},
				EDIT: {
					min_size: [6, "code_project_min_size_KO"],
					max_size: [50, "code_project_max_size_KO"],
					format: ["^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "code_project_format_KO"]
				},
				SEARCH: {
					max_size: [50, "code_project_max_size_KO"],
					format: ["^[a-zA-ZñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "code_project_format_KO"]
				}
			}
		},
		acronym_project: {
			html: { tag: "input", type: "text", component_visible_size: 6 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [6, "acronym_project_min_size_KO"],
					max_size: [15, "acronym_project_max_size_KO"],
					format: ["^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?\"-]+$", "acronym_project_format_KO"]
				},
				EDIT: {
					min_size: [6, "acronym_project_min_size_KO"],
					max_size: [15, "acronym_project_max_size_KO"],
					format: ["^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?\"-]+$", "acronym_project_format_KO"]
				},
				SEARCH: {
					max_size: [15, "acronym_project_max_size_KO"],
					format: ["^[a-zA-ZñÑ.,;:()\\[\\]¡!¿?\"-]+$", "acronym_project_format_KO"]
				}
			}
		},
		id_sampling_methodology: {
			html: { tag: "input", type: "number", component_visible_size: 7 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [1, "id_sampling_methodology_min_size_KO"],
					max_size: [11, "id_sampling_methodology_max_size_KO"],
					format: ["^[0-9]+$", "id_sampling_methodology_format_KO"]
				},
				EDIT: {
					min_size: [1, "id_sampling_methodology_min_size_KO"],
					max_size: [11, "id_sampling_methodology_max_size_KO"],
					format: ["^[0-9]+$", "id_sampling_methodology_format_KO"]
				},
				SEARCH: {
					max_size: [11, "id_sampling_methodology_max_size_KO"],
					format: ["^[0-9]+$", "id_sampling_methodology_format_KO"]
				}
			}
		}
	}
};
