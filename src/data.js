/* ==========================================================================
   SkillPro AI - Data Catalog & Educational Taxonomies
   ========================================================================== */

export const SKILLS_CATALOG = [
  // Hard Skills
  { id: 'prog', name: 'Programación (JS / Python)', category: 'hard', categoryName: 'Hard Skills' },
  { id: 'sql', name: 'Bases de Datos (SQL / NoSQL)', category: 'hard', categoryName: 'Hard Skills' },
  { id: 'git', name: 'Git & GitHub (Control de versiones)', category: 'hard', categoryName: 'Hard Skills' },
  { id: 'apis', name: 'APIs RESTful & Backend', category: 'hard', categoryName: 'Hard Skills' },
  { id: 'docker', name: 'Docker & Contenedores', category: 'hard', categoryName: 'Hard Skills' },
  { id: 'data', name: 'Análisis de Datos', category: 'hard', categoryName: 'Hard Skills' },

  // Soft Skills
  { id: 'com', name: 'Comunicación Asertiva', category: 'soft', categoryName: 'Soft Skills' },
  { id: 'team', name: 'Trabajo en Equipo', category: 'soft', categoryName: 'Soft Skills' },
  { id: 'crit', name: 'Pensamiento Crítico', category: 'soft', categoryName: 'Soft Skills' },
  { id: 'lead', name: 'Liderazgo & Iniciativa', category: 'soft', categoryName: 'Soft Skills' },
  { id: 'adapt', name: 'Adaptabilidad al Cambio', category: 'soft', categoryName: 'Soft Skills' },

  // Transferable Skills
  { id: 'prob', name: 'Resolución de Problemas Complejos', category: 'trans', categoryName: 'Transferibles' },
  { id: 'time', name: 'Gestión del Tiempo & Productividad', category: 'trans', categoryName: 'Transferibles' },
  { id: 'proj', name: 'Planificación de Proyectos', category: 'trans', categoryName: 'Transferibles' },

  // Digital & AI Skills
  { id: 'prompt', name: 'Prompt Engineering & LLMs', category: 'ai', categoryName: 'Digitales & IA' },
  { id: 'automa', name: 'Automatización de Flujos con IA', category: 'ai', categoryName: 'Digitales & IA' },
  { id: 'ethics', name: 'Uso Ético y Seguro de IA', category: 'ai', categoryName: 'Digitales & IA' },
  { id: 'collab', name: 'Herramientas Colaborativas Digitales', category: 'ai', categoryName: 'Digitales & IA' }
];

export const OBJECTIVE_PRESETS = [
  "Desarrollador de Software Junior / Trainee",
  "Desarrollador Web Frontend",
  "Desarrollador Web Full Stack",
  "Analista de Datos / Data Scientist Junior",
  "Ingeniero de QA y Testing de Software",
  "Especialista en Ciberseguridad Trainee"
];

export const FAQ_DATA = [
  {
    question: "¿Qué es SkillPro AI?",
    answer: "SkillPro AI es un asistente inteligente diseñado para orientar a estudiantes de ingeniería y profesionales en el reconocimiento de sus competencias, diagnóstico de fortalezas y brechas, y generación de planes de aprendizaje personalizados orientados a las exigencias reales del mercado laboral."
  },
  {
    question: "¿A quién está dirigida la herramienta?",
    answer: "Está dirigida principalmente a estudiantes universitarios, egresados técnicos y profesionales en transición de carrera que buscan estructurar su formación, construir un portafolio sólido de proyectos y adquirir habilidades técnicas, blandas, transferibles y de inteligencia artificial."
  },
  {
    question: "¿Qué tipos de habilidades permite explorar?",
    answer: "SkillPro AI clasifica las competencias en 4 categorías esenciales: 1) Hard Skills (conocimientos técnicos específicos como código y bases de datos), 2) Soft Skills (comunicación, liderazgo y trabajo en equipo), 3) Habilidades Transferibles (organización y resolución de problemas), y 4) Habilidades Digitales y de IA (automatización, prompt engineering y uso ético de modelos)."
  },
  {
    question: "¿Cómo se construye un plan de aprendizaje?",
    answer: "El plan se construye a partir de tu perfil actual, nivel de experiencia, objetivo profesional y disponibilidad semanal. El motor analiza las brechas formativas prioritarias y estructura un cronograma de 4 semanas con actividades prácticas, hitos de proyecto e indicadores clave de progreso (KPIs)."
  },
  {
    question: "¿La demostración utiliza inteligencia artificial real?",
    answer: "En esta versión de presentación académica, la demostración interactiva funciona de manera local y determinista en el cliente (navegador web) sin consumir claves de API de terceros. Implementa un motor algorítmico diseñado según las directrices documentadas en el archivo SKILL.md, el cual contiene las instrucciones preparadas para su posterior despliegue en Google Gemini."
  }
];
