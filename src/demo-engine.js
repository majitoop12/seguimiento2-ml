/* ==========================================================================
   SkillPro AI - Client-Side Demo Engine & Learning Path Generator
   Generación determinista y contextual para demostración académica local
   ========================================================================== */

export function generateSkillPlan({
  profileName,
  targetRole,
  experienceLevel,
  selectedSkills,
  weeklyTime
}) {
  const levelText = {
    principiante: 'Nivel Inicial / Formativo',
    intermedio: 'Nivel Intermedio / Consolidación',
    avanzado: 'Nivel Avanzado / Especialización'
  }[experienceLevel] || 'Nivel Inicial';

  // 1. Objetivo recomendado SMART
  const smartGoal = `Alcanzar el perfil de "${targetRole}" mediante el desarrollo práctico de competencias críticas, completando un proyecto de portafolio publicado y verificable en un plazo de 4 a 6 semanas con una dedicación estimada de ${weeklyTime}.`;

  // 2. Habilidades prioritarias calculadas
  const prioritizedSkills = selectedSkills.map((skill, index) => {
    let baseline = 30;
    let target = 80;

    if (experienceLevel === 'intermedio') {
      baseline = 55;
      target = 90;
    } else if (experienceLevel === 'avanzado') {
      baseline = 75;
      target = 95;
    }

    // Variación pequeña para realismo
    const currentScore = Math.min(baseline + (index % 3) * 5, 85);
    const targetScore = Math.min(target + (index % 2) * 5, 100);

    return {
      name: skill,
      current: currentScore,
      target: targetScore,
      priority: index < 2 ? 'Alta' : index < 4 ? 'Media' : 'Complementaria'
    };
  });

  // 3. Fortalezas potenciales según nivel y perfil
  const potentialStrengths = [];
  if (experienceLevel === 'principiante') {
    potentialStrengths.push('Curiosidad y alta disposición para adquirir metodologías de desarrollo modernas.');
    potentialStrengths.push('Capacidad de aprendizaje rápido mediante documentación y ejercicios guiados.');
    potentialStrengths.push('Perspectiva fresca y apertura para adoptar buenas prácticas desde cero.');
  } else if (experienceLevel === 'intermedio') {
    potentialStrengths.push('Comprensión de conceptos fundamentales de arquitectura y flujo de trabajo.');
    potentialStrengths.push('Capacidad para depurar código y encontrar soluciones a errores comunes.');
    potentialStrengths.push('Experiencia previa en proyectos académicos o colaboraciones en equipo.');
  } else {
    potentialStrengths.push('Dominio de patrones de diseño y estándares de ingeniería de software.');
    potentialStrengths.push('Autonomía técnica para liderar la arquitectura de soluciones.');
    potentialStrengths.push('Habilidad para evaluar compensaciones de rendimiento y escalabilidad.');
  }

  // 4. Aspectos por mejorar (Brechas identificadas)
  const improvementGaps = [];
  if (selectedSkills.some(s => s.toLowerCase().includes('git') || s.toLowerCase().includes('versión'))) {
    improvementGaps.push('Estandarización de ramas y mensajes de commit bajo convenciones profesionales (Conventional Commits).');
  } else {
    improvementGaps.push('Sistematización de flujo de control de versiones y revisión de código (Pull Requests).');
  }

  if (selectedSkills.some(s => s.toLowerCase().includes('sql') || s.toLowerCase().includes('base'))) {
    improvementGaps.push('Modelado relacional normalizado y optimización de consultas frente a grandes volúmenes de datos.');
  }

  if (selectedSkills.some(s => s.toLowerCase().includes('ia') || s.toLowerCase().includes('prompt'))) {
    improvementGaps.push('Validación crítica de respuestas de IA y mitigación de sesgos o alucinaciones en flujos de producción.');
  }

  improvementGaps.push('Documentación técnica de arquitectura (README estructurado, diagramas de componentes y contratos de API).');
  improvementGaps.push('Medición y cobertura de pruebas unitarias/integración para garantizar robustez.');

  // 5. Actividades prácticas recomendadas
  const practicalActivities = [
    {
      title: 'Creación de Repositorio Central en GitHub',
      desc: 'Inicializar un proyecto base con Git, licencia abierta, .gitignore optimizado y README detallado con badge de estado.'
    },
    {
      title: 'Desarrollo de Proyecto Práctico de Portafolio',
      desc: `Diseñar e implementar una solución funcional vinculada a "${targetRole}" que resuelva un problema real usando las habilidades seleccionadas.`
    },
    {
      title: 'Simulación de Escenarios y Resolución de Problemas',
      desc: 'Resolver retos de algoritmia o diseño modular para ejercitar el pensamiento crítico y la toma de decisiones técnicas.'
    },
    {
      title: 'Socialización Técnica y Documentación',
      desc: 'Redactar una guía técnica o grabar una demostración en video explicando el funcionamiento y los retos superados.'
    }
  ];

  // 6. Plan de acción semanal detallado (4 semanas)
  const weeklyActionPlan = [
    {
      weekNumber: 1,
      title: 'Fundamentos, Entorno y Diagnóstico',
      tasks: [
        'Configurar el entorno de desarrollo y dependencias locales necesarias.',
        `Repasar conceptos esenciales de las habilidades prioritarias (${selectedSkills.slice(0, 2).join(', ') || 'técnicas'}).`,
        'Definir el alcance y especificación de requerimientos del proyecto de portafolio.'
      ],
      deliverable: 'Entorno listo + Documento de requerimientos inicial.'
    },
    {
      weekNumber: 2,
      title: 'Estructuración y Arquitectura Base',
      tasks: [
        'Construir la estructura modular y componentes base del proyecto.',
        'Implementar control de versiones continuo con al menos 3 commits semanales bien documentados.',
        'Integrar ejercicios prácticos y validar el flujo de datos principal.'
      ],
      deliverable: 'Prototipo funcional alfa funcionando localmente.'
    },
    {
      weekNumber: 3,
      title: 'Refinamiento, Testing y Buenas Prácticas',
      tasks: [
        'Reforzar áreas de mejora detectadas y corregir deuda técnica.',
        'Añadir validaciones defensivas, control de errores y pruebas básicas.',
        'Integrar competencias blandas: preparar explicación oral o técnica de la solución.'
      ],
      deliverable: 'Proyecto funcional completo con casos de prueba superados.'
    },
    {
      weekNumber: 4,
      title: 'Documentación, Portafolio y Métricas',
      tasks: [
        'Elaborar el README.md definitivo con capturas, instrucciones de despliegue y arquitectura.',
        'Publicar el repositorio en GitHub y configurar demostración pública.',
        'Evaluar el cumplimiento de los indicadores y definir los siguientes hitos de especialización.'
      ],
      deliverable: 'Portafolio profesional actualizado y verificable en GitHub.'
    }
  ];

  // 7. Indicadores para medir el progreso (KPIs)
  const kpis = [
    {
      label: 'Repositorio Público Activo',
      target: '1 Repositorio en GitHub',
      detail: 'Con commits frecuentes, ramas y documentación profesional.'
    },
    {
      label: 'Consistencia Semanal',
      target: `100% de las horas cumplidas (${weeklyTime})`,
      detail: 'Registro ordenado de tiempo de práctica y estudio.'
    },
    {
      label: 'Cobertura de Requerimientos',
      target: '>= 85% de funcionalidades',
      detail: 'Proyecto evaluado contra la lista inicial de objetivos.'
    }
  ];

  return {
    profileName: profileName || 'Estudiante / Profesional',
    targetRole,
    experienceLevel: levelText,
    weeklyTime,
    matchScore: 92,
    smartGoal,
    prioritizedSkills,
    potentialStrengths,
    improvementGaps,
    practicalActivities,
    weeklyActionPlan,
    kpis,
    generatedAt: new Date().toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  };
}
