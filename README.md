# Test Manager IU

Proyecto web desarrollado en HTML, JavaScript y CSS para la gestión y prueba de validaciones de entidades de base de datos. El sistema permite definir entidades mediante ficheros de estructura JS, escribir pruebas de atributo y de submit, y ejecutarlas desde el navegador sin necesidad de backend.

El objetivo no es construir formularios para el usuario final, sino ofrecer una "pasarela" para verificar que las validaciones atómicas y las personalizadas de cada atributo se comportan como dicta la estructura de la entidad. El corrector solo necesita añadir su propia entidad (cuatro ficheros) para probar el sistema con datos distintos.

---

## Estructura de directorios

> En la entrega oficial, `NombreAlumno` se sustituye por el nombre real del alumno en el directorio raíz y en el fichero de datos.

```text
Julio_NombreAlumno/
└── CODIGO/
    ├── index.html                  Página principal
    ├── API.html                    Documentación de clases y diagramas de flujo
    ├── css/
    │   └── IU.css                  Todos los estilos del interfaz
    ├── iconos/                     Iconos usados en la interfaz
    └── js/
        ├── data/
        │   ├── menu_entidades.js               Lista de entidades del menú
        │   └── Julio_Datos_NombreAlumno.js     Datos de la entrega (Entrega, DNI, nombre, horas)
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
7. Pulsar **Generar JSON TestSubmit** para abrir una ventana con el contenido del fichero `_TestSubmit.js` generado automáticamente desde `nombreentidad_pruebas`, con un botón para copiarlo al portapapeles.

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
| `personalized(elementId, entityInstance, allValues)` | Deriva el método `<atributo>_personalized_validation` del nombre del atributo y lo invoca en la clase de la entidad con todos los valores del formulario |

### Gestor (`Gestor_Class.js`)

Punto de entrada al seleccionar una entidad. Carga dinámicamente los cuatro ficheros asociados (`_estructura.js`, `_tests.js`, `_TestSubmit.js` y `_Class.js`) y verifica que existen las variables necesarias antes de mostrar los botones de test.

### TestForm (`TestForm_Class.js`)

Ejecuta las pruebas de atributo. Muestra:

- Estado de la estructura de la entidad
- Resumen de definiciones de test por atributo
- Resumen de pruebas: total, bien definidas, con error esperado, con éxito esperado, pasadas y fallidas
- Detalle prueba a prueba con resultado obtenido y resultado esperado

### TestSubmit (`TestSubmit_Class.js`)

Ejecuta las pruebas de submit definidas en `nombreentidad_TestSubmit`. Muestra el resumen por acción (ADD, EDIT, SEARCH) y el detalle completo prueba a prueba.

Además expone dos métodos estáticos auxiliares — `TestSubmit.generateFromPruebas(entityName, pruebas)` y `TestSubmit.formatAsJsFile(entityName, generated)` — que construyen el contenido del fichero `nombreentidad_TestSubmit.js` automáticamente a partir de las pruebas de campo (`nombreentidad_pruebas`). Estos métodos no sustituyen al fichero (que sigue siendo obligatorio según el enunciado), solo ayudan a producirlo cuando escribir una prueba de submit por cada prueba de campo sería demasiado trabajo.

### ValidateFieldsForm (`ValidateFieldsForm_Class.js`)

Crea los elementos HTML necesarios para cada atributo, los rellena con los valores de las pruebas (incluyendo ficheros simulados con `DataTransfer`) y lanza las validaciones sobre ellos.

---

## Validaciones personalizadas — entidad `project`

La entidad `project` tiene una clase asociada (`project_Class.js`) porque `end_date_project` necesita una validación cruzada que la validación atómica `date()` no puede hacer: comprobar que la fecha de fin es posterior a la de inicio.

- **`end_date_project_personalized_validation`**: comprueba que la fecha de fin sea posterior a `start_date_project`. La validez de la fecha en sí (días por mes, bisiestos) la gestiona la validación atómica `date()` antes de llegar aquí.

La validación atómica `date()` no impone ningún rango de años: acepta cualquier fecha de calendario real desde el año 1 en adelante.

---

## Formato de los ficheros de datos

### `nombreentidad_estructura.js`

Se usa el nombre de variable `nombreentidad_estructura` exigido por el enunciado. Cada regla de validación con parámetro es una **tupla** `[valor, "codigo_mensaje"]`; las reglas sin parámetro (`no_file`, `date`) se indican solo con su `"codigo_mensaje"`, y las personalizadas con `personalize: true`.

```js
var nombreentidad_estructura = {
    attributes_list: ["attr1", "attr2", ...],
    attributes: {
        attr1: {
            html: { tag: "input", type: "text", component_visible_size: 30 },
            is_pk: true,            // solo en la clave primaria
            is_autoincrement: true, // solo en la clave primaria
            is_null: false,
            validation_rules: {
                ADD: {
                    min_size: [8, "attr1_min_size_KO"],
                    max_size: [100, "attr1_max_size_KO"],
                    format: ["^[A-Za-z\\s]+$", "attr1_format_KO"],
                    personalize: true   // invoca attr1_personalized_validation()
                },
                EDIT:   { /* ... */ },
                SEARCH: { /* ... */ }
            }
        }
    }
};
```

### `nombreentidad_tests.js`

Contiene dos arrays:

- **`nombreentidad_def_tests`**: definiciones de test — `[entidad, campo, elem_html, num_def, descripcion, accion, resultado_esperado, mensaje]`
- **`nombreentidad_pruebas`**: pruebas — `[entidad, campo, num_def, num_prueba, accion, {atributo: valor}, resultado_esperado]`

### `nombreentidad_TestSubmit.js`

Array `nombreentidad_TestSubmit` con pruebas de formulario completo — `[entidad, accion, num_prueba, descripcion, {atributo: valor, ...}, resultado_esperado]`.

---

## Añadir una nueva entidad

1. Crear `js/entities/nuevaentidad_estructura.js` con la definición de atributos.
2. Crear `js/tests/nuevaentidad_tests.js` con las definiciones de test y las pruebas.
3. Crear `js/tests/nuevaentidad_TestSubmit.js` con las pruebas de submit.
4. Si alguna validación es personalizada (`personalize: true` dentro de `validation_rules`), crear `js/classes/nuevaentidad_Class.js` con el método `nombreatributo_personalized_validation(allValues)`. El sistema deriva el nombre del método del nombre del atributo.
5. Añadir `"nuevaentidad"` al array `menu_entidades` en `js/data/menu_entidades.js`.

No es necesario modificar `index.html`.

---

## Documentación API

Disponible en `CODIGO/API.html` (enlace en la cabecera de la aplicación). Incluye la descripción de todos los métodos con sus parámetros y valores de retorno, organizados por tipo de uso (validaciones, tests, submit), y los diagramas de flujo del proceso.

---

## Decisiones de diseño (por qué)

- **Carga dinámica de los ficheros de entidad**: el `index.html` solo carga los ficheros del núcleo (5 clases + `menu_entidades.js` + datos de la entrega). Los cuatro ficheros propios de cada entidad (`_estructura.js`, `_tests.js`, `_TestSubmit.js` y, si procede, `_Class.js`) los inserta `Gestor` en el `<head>` cuando el usuario pulsa esa entidad en el menú. Así añadir una entidad nueva no obliga a tocar el HTML, solo a añadir su nombre a `menu_entidades`.
- **Las cuatro variables son obligatorias**: si falta `nombreentidad_estructura`, `nombreentidad_def_tests`, `nombreentidad_pruebas` o `nombreentidad_TestSubmit`, `Gestor` abre un modal listando los ficheros/variables ausentes. Es la salvaguarda que pide el enunciado para no ejecutar tests sobre datos a medias.
- **Generador automático de `_TestSubmit.js`**: escribir a mano una prueba de submit por cada prueba de campo es un trabajo enorme; por eso `TestSubmit` ofrece dos métodos estáticos que construyen el array `nombreentidad_TestSubmit` a partir de `nombreentidad_pruebas` y lo devuelven formateado como código JS. El usuario lo copia desde una ventana modal y lo pega en el fichero que pide el enunciado. El generador es accesible de dos formas: como tercer botón en la pantalla de la entidad cuando todos los ficheros están, y como botón dentro del modal de error cuando solo falta `_TestSubmit.js` (así el usuario tiene un camino claro para crearlo). El fichero sigue siendo obligatorio: el generador no lo escribe ni lo sustituye, solo da el contenido listo para copiar.
- **Validaciones reciben el `id` del elemento HTML**: cada método de `Validations` lee el valor por sí mismo del DOM mediante `readValue` o `readFile`. No se pasa el valor por parámetro porque el enunciado exige que el identificador del elemento sea la entrada.
- **Validaciones de fichero y `readValue`**: `no_file` y `format_name_file` usan `readValue` para leer el nombre del fichero como cadena, igual que el resto de validaciones atómicas. `type_file` y `max_size_file` usan `readFile` porque necesitan el objeto `File` completo para consultar el tipo MIME y el tamaño en bytes, que `readValue` no proporciona.
- **Validez de fechas en `date()` y validación cruzada en `project_Class.js`**: la atómica `date()` comprueba que `dd/mm/aaaa` exista realmente en el calendario (días por mes y bisiestos); la comparación `end_date_project > start_date_project` no puede ser atómica porque depende de otro atributo, así que vive en `project_Class.js` como validación personalizada (`personalize: true` en la estructura). Esto sirve además como ejemplo real de cómo cablear una clase de entidad.
- **Compactación de valores repetidos en el detalle**: cuando una prueba lleva un valor largo (por ejemplo, una cadena de 200 caracteres iguales para forzar `max_size_KO`), la tabla de detalle lo muestra como `"A".repeat(200)` para que la columna no obligue a desplazarse horizontalmente. Las cadenas heterogéneas se muestran entre comillas tal cual.
- **`CheckSubmit` acumula todos los errores**: no se aborta al primer fallo. Devuelve `true` si todo es válido o un array con todos los códigos de error encontrados, para que el usuario vea cada problema en una sola pasada. No realiza llamada al backend: el proyecto se queda en la verificación previa.
