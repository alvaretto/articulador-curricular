// articulacion.js — Motor de articulación vertical
// Muestra progresión de estándares entre grupos de grados: anterior | actual | siguiente

function getProgresionVertical(areaId, ejeId, grupoActual) {
  if (typeof PROGRESION_VERTICAL === 'undefined') return null;

  const progresionArea = PROGRESION_VERTICAL[areaId];
  if (!progresionArea || !progresionArea[ejeId]) return null;

  const secuencia = GRUPOS_EBC_ORDEN;
  const indexActual = secuencia.indexOf(grupoActual);
  if (indexActual === -1) return null;

  const progresionEje = progresionArea[ejeId];

  return {
    anterior: indexActual > 0 ? {
      grupo: secuencia[indexActual - 1],
      estandares: progresionEje[secuencia[indexActual - 1]] || []
    } : null,
    actual: {
      grupo: grupoActual,
      estandares: progresionEje[grupoActual] || []
    },
    siguiente: indexActual < secuencia.length - 1 ? {
      grupo: secuencia[indexActual + 1],
      estandares: progresionEje[secuencia[indexActual + 1]] || []
    } : null
  };
}

// Articulación vertical completa: todos los ejes de un área para un grupo
function getArticulacionCompleta(areaId, grupoActual) {
  const ejes = getEjesDeArea(areaId);
  const resultado = {};
  for (const eje of ejes) {
    resultado[eje.id] = getProgresionVertical(areaId, eje.id, grupoActual);
  }
  return resultado;
}

// Análisis de progresión: qué estándares del grupo anterior preparan para el actual
function getPrerequisitos(areaId, grupoActual) {
  const indexActual = GRUPOS_EBC_ORDEN.indexOf(grupoActual);
  if (indexActual <= 0) return { grupo: null, estandares: [] };

  const grupoAnterior = GRUPOS_EBC_ORDEN[indexActual - 1];
  return {
    grupo: grupoAnterior,
    estandares: getEstandares(areaId, grupoAnterior)
  };
}

// Análisis de continuidad: hacia dónde avanzan los estándares actuales
function getContinuidad(areaId, grupoActual) {
  const indexActual = GRUPOS_EBC_ORDEN.indexOf(grupoActual);
  if (indexActual >= GRUPOS_EBC_ORDEN.length - 1) return { grupo: null, estandares: [] };

  const grupoSiguiente = GRUPOS_EBC_ORDEN[indexActual + 1];
  return {
    grupo: grupoSiguiente,
    estandares: getEstandares(areaId, grupoSiguiente)
  };
}

// Obtener la línea completa de progresión de un eje (todos los grupos)
function getLineaProgresion(areaId, ejeId) {
  if (typeof PROGRESION_VERTICAL === 'undefined') return [];

  const progresionArea = PROGRESION_VERTICAL[areaId];
  if (!progresionArea || !progresionArea[ejeId]) return [];

  return GRUPOS_EBC_ORDEN.map(grupo => ({
    grupo,
    estandares: progresionArea[ejeId][grupo] || []
  }));
}
