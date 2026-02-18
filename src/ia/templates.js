// templates.js — Prompts comprimidos para IA (<200 tokens input fijos cada uno)
// El contexto variable (estándares filtrados) se inyecta en tiempo de ejecución

const TEMPLATES_IA = {

  // 1. Diferenciación por NEE (~150 tokens fijos + contexto)
  diferenciacion(contexto) {
    return `Eres pedagogo colombiano experto en inclusión educativa.
[AREA] ${contexto.area} [GRADO] ${contexto.grado}° [PERIODO] ${contexto.periodo}
[EBC] ${contexto.estandar}
[NEE] ${contexto.tipoNEE}: ${contexto.descripcionNEE || ''}
[TAREA] Genera 3 actividades diferenciadas para este estudiante:
- Cada actividad: máx 80 palabras, aplicable en aula colombiana
- Incluye: recurso necesario + criterio de evaluación adaptado
[FORMATO] Lista numerada. Sin introducción.`;
  },

  // 2. Preguntas tipo ICFES (~120 tokens fijos + contexto)
  preguntasICFES(contexto) {
    return `Genera 3 preguntas tipo ICFES Saber 11.
[AREA] ${contexto.area} [GRADO] ${contexto.grado}°
[COMPETENCIA] ${contexto.competencia}
[COMPONENTE] ${contexto.componente}
[EVIDENCIA] ${contexto.evidencia}
[NIVEL] ${contexto.nivel || '2-3'}
Cada pregunta: enunciado + 4 opciones (A-D) + clave + justificación breve.
Contexto colombiano. Sin imágenes. Formato ICFES estricto.`;
  },

  // 3. Conexión interdisciplinar (~100 tokens fijos)
  interdisciplinar(contexto) {
    return `Eres pedagogo colombiano. Articula 2 áreas EBC.
[AREA 1] ${contexto.area1}: ${contexto.estandar1}
[AREA 2] ${contexto.area2}: ${contexto.estandar2}
[GRADO] ${contexto.grado}° [SEMANAS] ${contexto.semanas || 4}
[TAREA] Propón 2 proyectos integradores:
- Nombre + descripción (60 palabras c/u)
- Producto esperado del estudiante
- Criterios de evaluación (saber/hacer/ser)
Sin introducción. Formato lista.`;
  },

  // 4. Malla curricular personalizada (~180 tokens fijos + contexto)
  mallaPersonalizada(contexto) {
    return `Eres coordinador académico colombiano.
[INSTITUCION] ${contexto.institucion || 'IE Colombia'}
[AREA] ${contexto.area} [GRADO] ${contexto.grado}° [PERIODO] ${contexto.periodo}
[SEMANAS] ${contexto.semanas} [HORAS/SEM] ${contexto.horasSemana}
[EBC] ${contexto.estandares?.join(' | ') || ''}
[DBA] ${contexto.dba || ''}
[CONTEXTO] ${contexto.criteriosPriorizacion || 'Sin criterios específicos'}
[TAREA] Genera distribución semanal de contenidos:
- Semana X: Tema + actividad principal + evaluación
- Incluye semana de repaso y evaluación final
Máx ${contexto.semanas} líneas. Formato tabla markdown.`
  },

  // 5. Sugerencia pedagógica contextualizada (~90 tokens fijos)
  sugerenciaPedagogica(contexto) {
    return `Pedagogo colombiano experto en didáctica de ${contexto.area}.
[GRADO] ${contexto.grado}° [TEMA] ${contexto.tema}
[DIFICULTAD] ${contexto.diagnostico || 'No especificada'}
[TAREA] 3 estrategias metodológicas innovadoras:
- Nombre de la estrategia
- Descripción práctica (50 palabras)
- Recurso necesario (disponible en IE rural colombiana)
Sin introducción.`;
  }
};

// Construir prompt con contexto mínimo del plan actual
function construirPrompt(tipo, vistaActual, datosAdicionales = {}) {
  const plan = vistaActual.plan || {};
  const area = AREAS_EBC[vistaActual.area]?.nombre || vistaActual.area;
  const institucion = Storage.getInstitucion();

  const contextoBase = {
    area,
    grado: vistaActual.grado || '8',
    periodo: vistaActual.periodo || 1,
    semanas: plan.semanas || 10,
    horasSemana: plan.horasSemana || 4,
    estandar: plan.estandares?.[0] || '',
    estandares: plan.estandares,
    dba: plan.dba || '',
    diagnostico: plan.diagnostico || '',
    institucion: institucion.nombre,
    ...datosAdicionales
  };

  const template = TEMPLATES_IA[tipo];
  if (!template) return null;

  return template(contextoBase);
}

// Ejecutar acción IA con estimación previa
async function ejecutarIA(tipo, vistaActual, datosAdicionales = {}) {
  const prompt = construirPrompt(tipo, vistaActual, datosAdicionales);
  if (!prompt) return { error: 'template_no_encontrado' };

  const tokensEstimados = IA.estimarTokens(prompt);

  return {
    prompt,
    tokensEstimados,
    ejecutar: () => IA.generar(prompt),
    abrirEnGemini: () => IA.abrirEnGemini(prompt)
  };
}
