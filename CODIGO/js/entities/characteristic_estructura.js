/**
 * Estructura de la entidad characteristic.
 *
 * Sigue el formato de estructura de datos de la entrega: la variable
 * principal se llama estructura_<entidad>, lleva attributes_list y
 * attributes, y cada regla de validacion se define dentro de
 * validation_rules como una TUPLA [valor, "codigo_mensaje"] (las que no
 * llevan parametro, como no_file, se indican solo con el "codigo_mensaje").
 *
 * Se declara con var (no const) para que la variable quede colgada de
 * window y las clases puedan localizarla por nombre. Ademas se expone
 * el alias characteristic_estructura, que es el nombre que cita el
 * enunciado de julio (nombreentidad_estructura), de modo que la
 * estructura es accesible con cualquiera de los dos nombres.
 */
var estructura_characteristic = {
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
			html: { tag: "input", type: "number", component_visible_size: 7 },
			is_pk: true,
			is_autoincrement: true,
			is_null: false,
			validation_rules: {
				SEARCH: {
					max_size: [11, "id_characteristic_max_size_KO"],
					format: ["^[0-9]+$", "id_characteristic_format_KO"]
				}
			}
		},
		name_characteristic: {
			html: { tag: "input", type: "text", component_visible_size: 30 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [8, "name_characteristic_min_size_KO"],
					max_size: [100, "name_characteristic_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_characteristic_format_KO"]
				},
				EDIT: {
					min_size: [8, "name_characteristic_min_size_KO"],
					max_size: [100, "name_characteristic_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_characteristic_format_KO"]
				},
				SEARCH: {
					max_size: [100, "name_characteristic_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "name_characteristic_format_KO"]
				}
			}
		},
		description_characteristic: {
			html: { tag: "textarea", rows: 10, columns: 100, component_visible_size: 100 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [80, "description_characteristic_min_size_KO"],
					max_size: [5000, "description_characteristic_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "description_characteristic_format_KO"]
				},
				EDIT: {
					min_size: [80, "description_characteristic_min_size_KO"],
					max_size: [5000, "description_characteristic_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "description_characteristic_format_KO"]
				},
				SEARCH: {
					max_size: [5000, "description_characteristic_max_size_KO"],
					format: ["^[A-Za-z\\s]+$", "description_characteristic_format_KO"]
				}
			}
		},
		data_type_characteristic: {
			html: { tag: "select", options: ["number", "text", "set"], component_visible_size: 1 },
			is_null: false,
			validation_rules: {
				ADD: {
					format: ["^(number|text|set)$", "data_type_characteristic_format_KO"]
				},
				EDIT: {
					format: ["^(number|text|set)$", "data_type_characteristic_format_KO"]
				},
				SEARCH: {
					format: ["^(number|text|set)?$", "data_type_characteristic_format_KO"]
				}
			}
		},
		category_characteristic: {
			html: { tag: "select", options: ["soil_site", "soil_chem", "soil_bio"], component_visible_size: 1 },
			is_null: false,
			validation_rules: {
				ADD: {
					format: ["^(soil_site|soil_chem|soil_bio)$", "category_characteristic_format_KO"]
				},
				EDIT: {
					format: ["^(soil_site|soil_chem|soil_bio)$", "category_characteristic_format_KO"]
				},
				SEARCH: {
					format: ["^(soil_site|soil_chem|soil_bio)?$", "category_characteristic_format_KO"]
				}
			}
		},
		bibref_characteristic: {
			html: { tag: "input", type: "text", component_visible_size: 50 },
			is_null: false,
			validation_rules: {
				ADD: {
					min_size: [16, "bibref_characteristic_min_size_KO"],
					max_size: [200, "bibref_characteristic_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "bibref_characteristic_format_KO"]
				},
				EDIT: {
					min_size: [16, "bibref_characteristic_min_size_KO"],
					max_size: [200, "bibref_characteristic_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "bibref_characteristic_format_KO"]
				},
				SEARCH: {
					max_size: [200, "bibref_characteristic_max_size_KO"],
					format: ["^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s.,;:()\\[\\]¡!¿?\"-]+$", "bibref_characteristic_format_KO"]
				}
			}
		},
		file_characteristic: {
			html: { tag: "input", type: "file", multiple: false, component_visible_size: 7 },
			is_null: false,
			validation_rules: {
				ADD: {
					no_file: "file_characteristic_no_file_KO",
					min_size: [7, "file_characteristic_min_size_KO"],
					max_size: [100, "file_characteristic_max_size_KO"],
					format_name_file: ["^[a-zA-Z.]+$", "file_characteristic_format_name_file_KO"],
					type_file: [["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], "file_characteristic_type_file_KO"],
					max_size_file: [200000, "file_characteristic_max_size_file_KO"]
				},
				EDIT: {
					min_size: [7, "file_characteristic_min_size_KO"],
					max_size: [100, "file_characteristic_max_size_KO"],
					format_name_file: ["^[a-zA-Z.]+$", "file_characteristic_format_name_file_KO"],
					type_file: [["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"], "file_characteristic_type_file_KO"],
					max_size_file: [200000, "file_characteristic_max_size_file_KO"]
				},
				SEARCH: {
					max_size: [100, "file_characteristic_max_size_KO"],
					format: ["^[a-zA-Z.]+$", "file_characteristic_format_KO"]
				}
			}
		}
	}
};

// Alias con el nombre nombreentidad_estructura citado en el enunciado de julio.
var characteristic_estructura = estructura_characteristic;
