# SkillPro AI — Plataforma Inteligente de Orientación y Desarrollo de Competencias

> **Eslogan:** *“Aprende. Practica. Demuestra tu talento.”*  
> **Proyecto Académico:** Trabajo Universitario para la carrera de **Ingeniería Informática**  
> **Estado del Proyecto:** Completado, verificado y listo para exposición y repositorio público en GitHub.

---

## 1. Nombre del Proyecto

**SkillPro AI** (Skill Profile Artificial Intelligence Assistant)

---

## 2. Descripción General

**SkillPro AI** es una solución tecnológica web concebida como un asistente inteligente orientado a estudiantes universitarios y profesionales técnicos. La plataforma permite evaluar el perfil de competencias del usuario, clasificar sus habilidades en cuatro dimensiones formativas (técnicas, blandas, transferibles e inteligencia artificial), detectar brechas críticas respecto a las demandas reales del mercado laboral y generar un plan de acción estructurado con proyectos de portafolio y métricas medibles.

---

## 3. Problema que Busca Resolver

En la formación universitaria de Ingeniería Informática y carreras afines se identifican problemáticas recurrentes:
1. **Desconexión con el mercado laboral:** Dificultad para saber qué tecnologías y competencias prácticas exigen los procesos de reclutamiento actuales.
2. **Falta de orientación estratégica:** Muchos estudiantes acumulan cursos teóricos sin construir un portafolio de proyectos funcionales que respalde sus conocimientos.
3. **Desatención a competencias clave:** Se prioriza exclusivamente la programación olvidando las habilidades blandas, la gestión de proyectos y el uso responsable de la inteligencia artificial.
4. **Sobrecarga y abandono:** Rutinas de estudio desorganizadas sin objetivos medibles (SMART) ni cronogramas realistas que conducen a la frustración.

---

## 4. Objetivo General

Construir una plataforma web moderna, accesible y funcional que integre una landing page de presentación institucional y una herramienta interactiva de demostración capaz de diagnosticar competencias, analizar brechas y trazar planes de aprendizaje personalizados basados en proyectos para estudiantes y profesionales.

---

## 5. Objetivos Específicos

1. Diseñar una experiencia de usuario (UI/UX) limpia, moderna y tecnológica basada en una paleta de azul oscuro, azul turquesa, blanco/gris claro y violeta de acento para representar IA.
2. Estructurar una taxonomía integral de habilidades que abarque: *Hard Skills*, *Soft Skills*, Habilidades Transferibles y Habilidades Digitales/IA.
3. Implementar un motor demostrativo en JavaScript que valide las entradas del usuario y genere en tiempo real diagnósticos con objetivos SMART, planes semanales e indicadores de progreso (KPIs).
4. Proporcionar un caso de uso práctico universitario con la opción de cargarse dinámicamente en el formulario para facilitar demostraciones en vivo.
5. Documentar formalmente las directrices de la Skill mediante un archivo `SKILL.md` estructurado y compatible con Google Gemini.
6. Preparar el código bajo estándares profesionales de control de versiones para su despliegue y publicación en GitHub.

---

## 6. Público Objetivo

- **Estudiantes de pregrado:** Principalmente de Ingeniería Informática, Ingeniería de Sistemas y Ciencia de la Computación que buscan sus primeras prácticas o empleo junior.
- **Egresados y desarrolladores junior:** Que desean identificar qué habilidades específicas les faltan para aspirar a roles de mayor especialización.
- **Profesionales en transición tecnológica:** Que buscan una guía metodológica para ingresar al ecosistema del desarrollo de software y la inteligencia artificial.
- **Docentes y tutores universitarios:** Como herramienta complementaria para la formulación de proyectos académicos orientados a portafolio.

---

## 7. Funcionalidades Implementadas

La plataforma cuenta con las siguientes funcionalidades operativas:

- **Navegación Fluida y Adaptable:** Barra de navegación fija con efecto glassmorphism, indicador de sección activa mediante `IntersectionObserver` y menú móvil colapsable.
- **Hero Section Tecnológico:** Presentación del valor central con botones de llamada a la acción y un mockup visual interactivo que simula el panel de un estudiante de ingeniería.
- **Módulo Educativo de Competencias:** Cuatro tarjetas con bordes interactivos, iconos temáticos y etiquetas de ejemplos reales para cada tipo de habilidad.
- **Metodología en 5 Pasos:** Flujo secuencial numerado que explica con claridad el proceso metodológico de la herramienta.
- **Demostración Interactiva en Cliente:**
  - Formulario con validación visual en tiempo real (nombre, rol deseado, nivel y tiempo semanal).
  - Selector de chips de habilidades predefinidas por categorías y campo para añadir habilidades personalizadas.
  - Generación de plan dinámico sin recargar la página (objetivo SMART, barras comparativas de nivel, fortalezas, brechas, plan de 4 semanas y KPIs).
  - Herramientas auxiliares: copia rápida al portapapeles con toast de confirmación, impresión/exportación a PDF y reinicio del formulario.
- **Carga de Caso de Estudio con un Clic:** Botón en la sección de caso práctico que autocompleta el formulario con los datos del perfil universitario.
- **Acordeón Interactivo de Preguntas Frecuentes (FAQ):** Preguntas desplegables para resolver dudas sobre el alcance de la herramienta y el uso de IA.
- **Pie de Página Completo:** Enlaces directos, enlaces a documentación, mención de repositorio y atribución académica universitaria.

---

## 8. Tecnologías Utilizadas

- **HTML5:** Estructura semántica moderna (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **CSS3 Puro (Vanilla CSS):** Arquitectura modular basada en variables (`variables.css`), estilos base (`base.css`), componentes reutilizables (`components.css`) y secciones responsivas (`sections.css`). Sin dependencias pesadas de terceros.
- **JavaScript Moderno (ES6+ Modules):** Lógica modular desacoplada en:
  - `src/main.js`: Controlador general de interfaz y eventos del DOM.
  - `src/demo-engine.js`: Motor algorítmico de generación de diagnósticos y cronogramas.
  - `src/data.js`: Catálogo estructurado de habilidades, roles preconfigurados y preguntas frecuentes.
- **Vite (v6.2.0+):** Herramienta de compilación ultrarrápida y servidor de desarrollo local.
- **Google Fonts:** Tipografías profesionales `Outfit` (encabezados) e `Inter` (cuerpo de texto).
- **SVG Vectorial Nativo:** Iconografía ligera escalable integrada en el código fuente.

---

## 9. Estructura de Carpetas y Archivos

```text
skillpro-ai/
├── .gitignore               # Archivos ignorados por Git (node_modules, dist, logs)
├── index.html               # Documento principal y estructura semántica de la landing page
├── package.json             # Manifiesto del proyecto y scripts de Vite
├── README.md                # Documentación técnica completa del proyecto
├── SKILL.md                 # Especificación de instrucciones de la Skill para Google Gemini
├── styles/
│   ├── base.css             # Reseteo CSS, tipografía global y contenedor
│   ├── components.css       # Botones, tarjetas, badges, inputs, acordeón y toasts
│   ├── sections.css         # Estilos específicos de cada sección y reglas @media
│   └── variables.css        # Tokens de diseño (colores, fuentes, sombras, gradientes)
└── src/
    ├── data.js              # Taxonomía de habilidades y preguntas frecuentes
    ├── demo-engine.js       # Motor de cálculo y armado del plan de aprendizaje
    └── main.js              # Inicialización de eventos, DOM y navegación
```

---

## 10. Requisitos Previos

Para ejecutar este proyecto en tu entorno local requieres:
- **Node.js:** Versión 18.x o superior (desarrollado y probado en Node v24.19.0).
- **npm:** Gestor de paquetes versión 9.x o superior (incluido con Node.js).
- **Navegador web moderno:** Google Chrome, Mozilla Firefox, Microsoft Edge o Safari con soporte para ES Modules.
- **Git:** Para clonar y publicar en GitHub.

---

## 11. Instrucciones de Instalación

1. Clona el repositorio o sitúate en la carpeta raíz del proyecto:
   ```bash
   cd c:\Users\EQUIPO\.gemini\antigravity-ide\scratch\machinelearning
   ```

2. Instala las dependencias de desarrollo (Vite):
   ```bash
   npm install
   ```

---

## 12. Instrucciones para Ejecutar el Proyecto Localmente

### Modo Desarrollo (con recarga rápida):
Ejecuta el servidor de desarrollo con el comando:
```bash
npm run dev
```
La terminal mostrará la dirección local para abrir en tu navegador (habitualmente `http://127.0.0.1:5173/` o `http://localhost:5173/`).

### Modo Compilación de Producción:
Para compilar los archivos optimizados para producción:
```bash
npm run build
```
Los archivos finales se generarán en la carpeta `dist/`.

### Previsualizar la Compilación de Producción:
```bash
npm run preview
```

---

## 13. Descripción de la Demostración Interactiva

La sección **Demostración Interactiva de SkillPro AI** permite probar de primera mano la lógica de orientación profesional:

1. **Ingreso de Información:** El usuario define su perfil (ej. *Estudiante de Ingeniería Informática*), su objetivo (ej. *Desarrollador de Software Junior*), su nivel de partida (*Principiante*, *Intermedio* o *Avanzado*), las competencias que desea priorizar y las horas semanales disponibles.
2. **Validación Defensiva:** Antes de procesar, la aplicación valida que no existan campos vacíos y que al menos se haya seleccionado una habilidad, mostrando mensajes de advertencia si corresponde.
3. **Simulación de Análisis:** El botón principal entra en estado de carga con un spinner durante 650 ms para simular el procesamiento inteligente.
4. **Presentación de Resultados:** Sin recargar la página, se despliega una tarjeta completa que incluye:
   - Formulación de objetivo **SMART**.
   - Tarjetas de nivel actual vs. meta para cada competencia prioritaria.
   - Diagnóstico cruzado de **Fortalezas Potenciales** vs. **Brechas Críticas**.
   - 4 actividades prácticas y proyectos de código recomendados.
   - **Cronograma de 4 semanas** adaptado a la dedicación horaria, con entregables claros.
   - 3 **KPIs cuantitativos** para verificar el progreso.
5. **Utilidades de Usuario:** Botón para copiar el plan formateado directamente al portapapeles, botón para imprimir o guardar como PDF, y botón de reinicio rápido.

> **Nota de Transparencia:** La demostración opera en el lado del cliente (navegador web). No consume saldo de APIs externas ni finge realizar llamadas de red falsas.

---

## 14. Arquitectura y Funcionamiento General

La arquitectura del proyecto sigue el patrón de separación de responsabilidades:
- **Capa de Presentación (HTML/CSS):** Maquetación semántica respaldada por un sistema de diseño con variables CSS (`--color-primary`, `--color-accent-ai`, etc.) que asegura coherencia visual y facilidad de personalización.
- **Capa de Datos (`src/data.js`):** Estructuras inmutables con el catálogo de habilidades clasificadas por categoría (*hard*, *soft*, *trans*, *ai*).
- **Capa Lógica (`src/demo-engine.js`):** Función pura `generateSkillPlan()` que recibe el estado del formulario y devuelve un modelo de datos estructurado con objetivos SMART, brechas y cronogramas.
- **Capa de Control (`src/main.js`):** Orquestador de eventos, manipulación del DOM, observadores de intersección y notificaciones toast.

---

## 15. Descripción del Archivo `SKILL.md`

El archivo `SKILL.md` ubicado en la raíz del proyecto constituye la especificación canónica de la Skill para asistentes de inteligencia artificial:
- Define el rol del agente como **Orientador de Desarrollo Profesional y Competencias Técnicas**.
- Establece la metodología **D.A.P.E.** (Diagnóstico, Análisis de Brechas, Planificación SMART y Evaluación por KPIs).
- Contiene las **System Instructions** exactas para configurar modelos de lenguaje generativo.
- Incluye plantillas de respuesta en Markdown, límites operativos, reglas éticas y un ejemplo completo de diálogo con un estudiante universitario.

---

## 16. Pasos para Adaptar e Integrar la Skill en Google Gemini

Para trasladar las instrucciones de `SKILL.md` al ecosistema de Google Gemini, existen tres alternativas prácticas:

### Método 1: Creación de un Gem Personalizado en Gemini Web
1. Ingresa a [gemini.google.com](https://gemini.google.com/) con tu cuenta de Google.
2. Abre la sección **Gems** en la barra lateral y presiona **"Nuevo Gem"**.
3. En el nombre, coloca: `SkillPro AI`.
4. En el apartado de **Instrucciones**, copia el contenido de las secciones 5 a 9 del archivo `SKILL.md`.
5. Guarda el Gem. A partir de ese momento, podrás chatear con SkillPro AI directamente en la interfaz de Gemini.

### Método 2: Configuración en Google AI Studio (System Instructions)
1. Entra a [aistudio.google.com](https://aistudio.google.com/).
2. Haz clic en **Create New Prompt** (Chat Prompt) y selecciona el modelo `gemini-1.5-pro` o `gemini-2.0-flash`.
3. En la caja **System Instructions**, pega el texto completo de `SKILL.md`.
4. Ajusta la temperatura a `0.5` para garantizar respuestas metódicas y estructuradas.
5. Puedes interactuar en la consola de pruebas o generar una API Key para vincularlo a un backend futuro.

### Método 3: Uso como Workspace Skill en Antigravity IDE
1. Coloca la carpeta de la skill dentro de `.agents/skills/skillpro-ai/SKILL.md`.
2. Antigravity IDE reconocerá automáticamente la habilidad dentro de su árbol de agentes para proporcionar asistencia guiada a tus proyectos.

---

## 17. Pruebas Realizadas y Resultados

| Prueba | Procedimiento | Resultado |
| :--- | :--- | :--- |
| **Compilación de Producción** | Ejecución de `npm run build` con Vite. | **Aprobada:** Generación limpia en 388 ms sin errores de sintaxis ni dependencias rotas. |
| **Validación de Formulario** | Envío de formulario con campos vacíos y sin habilidades seleccionadas. | **Aprobada:** Se activan las clases de validación (`is-invalid`) y se impide el envío erróneo. |
| **Generación Dinámica de Plan** | Selección de perfil intermedio con 6 habilidades y envío del formulario. | **Aprobada:** Renderizado completo del panel de resultados con objetivos SMART y cronograma de 4 semanas. |
| **Carga de Caso Práctico** | Clic en el botón "Cargar este caso en la Demo". | **Aprobada:** Relleno automático de campos y desplazamiento suave a la sección interactiva. |
| **Portapapeles & Feedback** | Clic en "Copiar Plan al Portapapeles". | **Aprobada:** Texto formateado copiado al portapapeles y despliegue del componente Toast. |
| **Interacción FAQ** | Clic secuencial en los encabezados del acordeón. | **Aprobada:** Expansión y colapso suave con rotación del icono indicador. |
| **Navegación Responsiva** | Verificación en resoluciones de escritorio, tableta y móvil. | **Aprobada:** Menú colapsable funcional y reorganización de tarjetas en una sola columna. |

---

## 18. Limitaciones Conocidas

- **Persistencia en LocalStorage:** La versión actual no guarda el histórico de planes generados en sesiones anteriores; al refrescar la página, el formulario vuelve a su estado inicial.
- **Ejecución Local de la Demo:** La demostración interactiva aplica algoritmos deterministas en JavaScript y no está conectada a una API de Gemini en tiempo real para evitar requerir credenciales de pago a los evaluadores.
- **Límite de 4 Semanas en Cronograma:** El algoritmo actual genera planes concentrados en 4 semanas; para programas semestrales completos se requeriría una extensión modular.

---

## 19. Posibles Mejoras Futuras

1. **Conexión con la API de Google Gemini:** Habilitar un campo opcional para que los evaluadores puedan ingresar su clave de Gemini y generar respuestas asistidas por LLM en tiempo real.
2. **Descarga en PDF con Diseño Gráfico:** Integrar una librería ligera para generar un reporte descargable en PDF con los diagramas y el portafolio propuesto.
3. **Módulo de Autoevaluación de Código:** Integrar un analizador estático para que el estudiante ingrese el link de su repositorio de GitHub y reciba retroalimentación automática de buenas prácticas.
4. **Modo Oscuro / Claro Conmutable:** Añadir un selector para alternar entre el tema claro predeterminado y un tema oscuro completo.

---

## 20. Instrucciones para Publicar el Proyecto en GitHub

Para subir este proyecto a un repositorio público en tu cuenta de GitHub, ejecuta los siguientes comandos en tu terminal de Git:

```bash
# 1. Inicializa el repositorio local si aún no está inicializado
git init

# 2. Agrega todos los archivos al área de preparación
git add .

# 3. Realiza el primer commit formal
git commit -m "feat: proyecto inicial SkillPro AI con landing page, demo interactiva y documentacion"

# 4. Cambia la rama principal a main
git branch -M main

# 5. Vincula tu repositorio remoto de GitHub (reemplaza con tu URL real)
git remote add origin https://github.com/TU_USUARIO/skillpro-ai.git

# 6. Sube los cambios a la rama principal
git push -u origin main
```

---

## 21. Licencia

Este proyecto fue desarrollado con fines educativos para la carrera de **Ingeniería Informática** y se distribuye bajo la **Licencia MIT**.

```text
MIT License

Copyright (c) 2026 SkillPro AI Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
#   s e g u i m i e n t o 2 - m l  
 