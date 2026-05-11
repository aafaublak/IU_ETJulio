# Test Manager IU

Proyecto web desarrollado en HTML, JavaScript y CSS para la gestión y prueba de validaciones de entidades de base de datos. El sistema permite definir entidades mediante ficheros de estructura JS, escribir pruebas de atributo y de submit, y ejecutarlas desde el navegador sin necesidad de backend.

---

## Estructura de directorios

```text
Julio_AlbertoAndresFaublakAlvarez/
└── CODIGO/
    ├── index.html                  Página principal
    ├── API.html                    Documentación de clases y diagramas de flujo
    ├── css/
    │   └── IU.css                  Todos los estilos del interfaz
    ├── iconos/                     Iconos usados en la interfaz
    └── js/
        ├── data/
        │   ├── menu_entidades.js               Lista de entidades del menú
        │   └── Julio_Datos_AlbertoAndresFaublakAlvarez.js  Datos de la entrega
        ├── classes/
        │   ├── Validations_Class.js            Validaciones atómicas
        │   ├── ValidateFieldsForm_Class.js     Creación de campos y ejecución de validaciones
        │   ├── Gestor_Class.js                 Gestión de entidades y carga dinámica de ficheros
        │   ├── TestForm_Class.js               Pruebas de atributos
        │   ├── TestSubmit_Class.js             Pruebas de submit
        │   └── project_Class.js               Validaciones personalizadas de la entidad project
        ├── entities/
        │   ├── characteristic_estructura.js
        │   ├── analysis_preparation_estructura.js
        │   └── project_estructura.js
        └── tests/
            ├── characteristic_tests.js
            ├── characteristic_TestSubmit.js
            ├── analysis_preparation_tests.js
            ├── analysis_preparation_TestSubmit.js
            ├── project_tests.js
            └── project_TestSubmit.js
```

---

## Cómo ejecutar

1. Abrir `CODIGO/index.html` en un navegador moderno (Chrome, Firefox, Edge).
2. Pulsar el icono de menú **Entidades** en la cabecera.
3. Seleccionar una entidad: `Analysis Preparation`, `Project` o `Characteristic`.
4. Pulsar **Test de Atributos** para ejecutar las pruebas de validación campo a campo.
5. Pulsar **Test de Formulario** para ejecutar las pruebas de submit.
6. En la ventana de resultados, pulsar **Ver detalle de cada prueba** para ver el resultado prueba a prueba.

> Los ficheros de cada entidad se cargan dinámicamente al seleccionarla, por lo que no es necesario declararlos en el HTML para añadir una nueva entidad: basta con incluir su nombre en `menu_entidades.js` y colocar los ficheros en los directorios correspondientes.

---

## Entidades incluidas

| Entidad | Atributos | Acciones |
| --- | --- | --- |
| `characteristic` | id, name, description, data_type, category, bibref, file | ADD, EDIT, SEARCH |
| `analysis_preparation` | id, name, description, bib, file | ADD, EDIT, SEARCH |
| `project` | id, name, start_date, end_date, responsable, organization, description, file, code, acronym, id_sampling_methodology | ADD, EDIT, SEARCH |

---

## Clases principales

### Validaciones (`Validations_Class.js`)

Contiene todas las validaciones atómicas. Cada método recibe el `id` del elemento HTML y lo lee del DOM por sí mismo.

| Método | Descripción |
| --- | --- |
| `readValue(elementId)` | Devuelve el valor textual del elemento (null si no existe) |
| `readFile(elementId)` | Devuelve el File del input type=file (null si no hay) |
| `min_size(elementId, n)` | Longitud >= n |
| `max_size(elementId, n)` | Longitud <= n |
| `format(elementId, regex)` | El valor casa con la expresión regular |
| `date(elementId)` | Fecha real en formato dd/mm/aaaa (controla días por mes y bisiestos) |
| `no_file(elementId)` | Hay fichero seleccionado |
| `format_name_file(elementId, regex)` | El nombre del fichero casa con la regex |
| `type_file(elementId, tipos)` | El MIME type está en la lista de tipos permitidos |
| `max_size_file(elementId, n)` | El tamaño del fichero en bytes <= n |
| `personalized(elementId, instancia, attrName, allValues)` | Llama a `attrName_personalized_validation` en la clase de la entidad |

### Gestor (`Gestor_Class.js`)

Punto de entrada al seleccionar una entidad. Carga dinámicamente los cuatro ficheros asociados (`_estructura.js`, `_tests.js`, `_TestSubmit.js` y `_Class.js`) y verifica que existen las variables necesarias antes de mostrar los botones de test.

### TestForm (`TestForm_Class.js`)

Ejecuta las pruebas de atributo. Muestra:

- Estado de la estructura de la entidad
- Resumen de definiciones de test por atributo
- Resumen de pruebas: total, bien definidas, con error esperado, con éxito esperado, pasadas y fallidas
- Detalle prueba a prueba con resultado obtenido y resultado esperado

### TestSubmit (`TestSubmit_Class.js`)

Ejecuta las pruebas de submit. Si no existe el fichero `_TestSubmit.js`, genera las pruebas automáticamente a partir de las pruebas de atributo construyendo un registro base válido por acción. Muestra el resumen por acción (ADD, EDIT, SEARCH) y el detalle completo.

### ValidateFieldsForm (`ValidateFieldsForm_Class.js`)

Crea los elementos HTML necesarios para cada atributo, los rellena con los valores de las pruebas (incluyendo ficheros simulados con `DataTransfer`) y lanza las validaciones sobre ellos.

---

## Validaciones personalizadas — entidad `project`

La entidad `project` tiene una clase asociada (`project_Class.js`) porque necesita validaciones cruzadas entre atributos:

- **`start_date_project_personalized_validation`**: comprueba que la fecha de inicio sea una fecha real del calendario (no solo que cumpla el formato `dd/mm/aaaa`).
- **`end_date_project_personalized_validation`**: comprueba que la fecha de fin sea real y además sea posterior a la fecha de inicio.

Ambas rechazan años fuera del rango 1900-2100 y detectan fechas imposibles como `31/02/2024` o `29/02/2023`.

---

## Formato de los ficheros de datos

### `nombreentidad_estructura.js`

```js
var nombreentidad_estructura = {
    entity: "nombreentidad",
    attributes_list: ["attr1", "attr2", ...],
    attributes: {
        attr1: {
            html: { tag: "input", type: "text" },
            is_pk: false,
            is_autoincrement: false,
            is_null: false,
            is_unique: false,
            validations: {
                ADD:    { min_size: { value: 8, error_msg: "attr1_min_size_KO" }, ... },
                EDIT:   { ... },
                SEARCH: { ... }
            }
        }
    }
};
```

### `nombreentidad_tests.js`

Contiene dos arrays:

- **`nombreentidad_def_tests`**: definiciones de test — `[entidad, campo, elem_html, num_def, descripcion, accion, resultado_esperado, mensaje]`
- **`nombreentidad_pruebas`**: pruebas — `[entidad, campo, num_def, num_prueba, accion, {atributo: valor}, resultado_esperado]`

### `nombreentidad_TestSubmit.js` (opcional)

Array `nombreentidad_TestSubmit` con pruebas de formulario completo — `[entidad, accion, num_prueba, descripcion, {atributo: valor, ...}, resultado_esperado]`.

Si no existe este fichero, `TestSubmit` genera las pruebas automáticamente.

---

## Añadir una nueva entidad

1. Crear `js/entities/nuevaentidad_estructura.js` con la definición de atributos.
2. Crear `js/tests/nuevaentidad_tests.js` con las definiciones de test y las pruebas.
3. Opcionalmente, crear `js/tests/nuevaentidad_TestSubmit.js` y/o `js/classes/nuevaentidad_Class.js`.
4. Añadir `"nuevaentidad"` al array `menu_entidades` en `js/data/menu_entidades.js`.

No es necesario modificar `index.html`.

---

## Documentación API

Disponible en `CODIGO/API.html` (enlace en la cabecera de la aplicación). Incluye la descripción de todos los métodos con sus parámetros y valores de retorno, organizados por tipo de uso (validaciones, tests, submit), y los diagramas de flujo del proceso.
