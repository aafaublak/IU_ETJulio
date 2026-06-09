/**
 * Estructura de la entidad analysis_preparation.
 *
 * Variable nombreentidad_estructura exigida por el enunciado. Sigue el
 * formato de la entrega: attributes_list y attributes con validation_rules
 * cuyas reglas son TUPLAS [valor, "codigo_mensaje"] (no_file solo lleva
 * el "codigo_mensaje").
 *
 * Declarada con var para que cuelgue de window y el Gestor la encuentre
 * por nombre.
 */
var analysis_preparation_estructura = {
	attributes_list: [
		"id_analysis_preparation",
		"name_analysis_preparation",
		"description_analysis_preparation",
		"bib_analysis_preparation",
		"file_analysis_preparation"
	],
	attributes: {
		id_analysis_preparation: {
			html: { tag: "input", type: "number", component_visible_size: 7 },
			is_pk: true,
			is_autoincrement: true,
			is_null: false,
			validation_rules: {
				SEARCH: {
					max_size: [11, "id_analysis_preparation_max_size_KO"],
					format: ["^[0-9]+$", "id_analysis_preparation_format_KO"]
				}
			}
		},
		name_analysis_preparation: {
			html: { tag: "input", type: "text", component_visible_size: 30 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [8, "name_analysis_preparation_min_size_KO"],
					max_size: [100, "name_analysis_preparation_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_analysis_preparation_format_KO"]
				},
				EDIT: {
					min_size: [8, "name_analysis_preparation_min_size_KO"],
					max_size: [100, "name_analysis_preparation_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_analysis_preparation_format_KO"]
				},
				SEARCH: {
					max_size: [100, "name_analysis_preparation_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_analysis_preparation_format_KO"]
				}
			}
		},
		description_analysis_preparation: {
			html: { tag: "textarea", rows: 10, columns: 100, component_visible_size: 100 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [80, "description_analysis_preparation_min_size_KO"],
					max_size: [5000, "description_analysis_preparation_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "description_analysis_preparation_format_KO"]
				},
				EDIT: {
					min_size: [80, "description_analysis_preparation_min_size_KO"],
					max_size: [5000, "description_analysis_preparation_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "description_analysis_preparation_format_KO"]
				},
				SEARCH: {
					max_size: [5000, "description_analysis_preparation_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "description_analysis_preparation_format_KO"]
				}
			}
		},
		bib_analysis_preparation: {
			html: { tag: "input", type: "text", component_visible_size: 50 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [6, "bib_analysis_preparation_min_size_KO"],
					max_size: [200, "bib_analysis_preparation_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "bib_analysis_preparation_format_KO"]
				},
				EDIT: {
					min_size: [6, "bib_analysis_preparation_min_size_KO"],
					max_size: [200, "bib_analysis_preparation_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "bib_analysis_preparation_format_KO"]
				},
				SEARCH: {
					max_size: [200, "bib_analysis_preparation_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "bib_analysis_preparation_format_KO"]
				}
			}
		},
		file_analysis_preparation: {
			html: { tag: "input", type: "file", multiple: false, component_visible_size: 7 },
			is_null: false,
			validation_rules: {
				ADD: {
					no_file: "file_analysis_preparation_no_file_KO",
					min_size: [7, "file_analysis_preparation_min_size_KO"],
					max_size: [100, "file_analysis_preparation_max_size_KO"],
					format_name_file: ["^[a-zA-Z.]+$", "file_analysis_preparation_format_name_file_KO"],
					type_file: [["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], "file_analysis_preparation_type_file_KO"],
					max_size_file: [2000000, "file_analysis_preparation_max_size_file_KO"]
				},
				EDIT: {
					min_size: [7, "file_analysis_preparation_min_size_KO"],
					max_size: [100, "file_analysis_preparation_max_size_KO"],
					format_name_file: ["^[a-zA-Z.]+$", "file_analysis_preparation_format_name_file_KO"],
					type_file: [["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], "file_analysis_preparation_type_file_KO"],
					max_size_file: [2000000, "file_analysis_preparation_max_size_file_KO"]
				},
				SEARCH: {
					max_size: [100, "file_analysis_preparation_max_size_KO"],
					format: ["^[a-zA-Z.]+$", "file_analysis_preparation_format_KO"]
				}
			}
		}
	}
};
