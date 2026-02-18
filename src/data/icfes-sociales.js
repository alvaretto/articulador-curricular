/**
 * Marco de Referencia ICFES Saber - Ciencias Sociales y Competencias Ciudadanas
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Fuente oficial: Matrices de Referencia y Especificaciones de Prueba
 * Saber 3°, 5°, 9° y Saber 11° - ICFES Colombia
 * Disponible en: https://www.icfes.gov.co/evaluaciones/pruebas-saber/marcos-de-referencia
 *
 * Estructura:
 * - 3 competencias transversales a todas las pruebas
 * - 3 componentes temáticos (Conocimientos sociales, Argumentación, Multiperspectividad)
 * - 4 pruebas: Saber 3°, Saber 5°, Saber 9°, Saber 11°
 * - Cada prueba incluye aprendizajes con evidencias y niveles de desempeño
 */

const ICFES_SOCIALES = {
  area: 'sociales',
  nombre: 'Ciencias Sociales y Competencias Ciudadanas',

  // Las 3 competencias evaluadas por ICFES en Ciencias Sociales
  competencias: [
    {
      id: 'pensamiento-social',
      nombre: 'Pensamiento social',
      descripcion: 'Capacidad para reconocer, usar y aplicar conceptos y teorías de las ciencias sociales en el análisis de fenómenos históricos, geográficos, políticos y culturales. Implica comprender las causas y consecuencias de los procesos sociales.',
    },
    {
      id: 'interpretacion',
      nombre: 'Interpretación y análisis de perspectivas',
      descripcion: 'Capacidad para interpretar situaciones y problemáticas sociales desde distintos puntos de vista, reconociendo que los actores sociales tienen intereses, creencias y valores que influyen en sus acciones y decisiones.',
    },
    {
      id: 'pensamiento-sistemico',
      nombre: 'Pensamiento reflexivo y sistémico',
      descripcion: 'Capacidad para reflexionar sobre las interrelaciones entre los fenómenos sociales, económicos, políticos y ambientales, reconociendo que los sistemas sociales son complejos e interdependientes.',
    },
  ],

  // Los 3 componentes evaluados
  componentes: [
    {
      id: 'conocimientos-sociales',
      nombre: 'Conocimientos sociales',
      descripcion: 'Abarca el conocimiento de la historia, la geografía, la política, la economía y la democracia. Incluye hechos históricos relevantes, procesos de formación de los Estados, organización del territorio, sistemas políticos y económicos, y participación ciudadana.',
    },
    {
      id: 'argumentacion',
      nombre: 'Argumentación',
      descripcion: 'Abarca la capacidad de construir y evaluar argumentos en contextos sociales. Incluye el uso de evidencias históricas y geográficas para sustentar posiciones, la identificación de falacias y la distinción entre hechos y opiniones en discursos sobre temas sociales.',
    },
    {
      id: 'multiperspectividad',
      nombre: 'Multiperspectividad',
      descripcion: 'Abarca la capacidad de reconocer y analizar diferentes perspectivas sobre los fenómenos sociales. Incluye la empatía histórica, el reconocimiento de la diversidad cultural, la comprensión de conflictos desde múltiples puntos de vista y el análisis de dilemas éticos ciudadanos.',
    },
  ],

  // Pruebas por nivel
  pruebas: {

    // =========================================================
    // SABER 3°
    // =========================================================
    'saber-3': {
      nombre: 'Saber 3°',
      grados: ['3'],

      aprendizajes: [
        {
          id: 'soc-s3-01',
          enunciado: 'Reconoce características del entorno físico (relieve, clima, paisaje) y los relaciona con las actividades humanas de su región.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s3-01-e1', enunciado: 'Identifica y nombra accidentes geográficos (montañas, ríos, valles, costas) de su entorno.' },
            { id: 'soc-s3-01-e2', enunciado: 'Relaciona las características del paisaje con las actividades económicas de las personas que lo habitan.' },
            { id: 'soc-s3-01-e3', enunciado: 'Describe cómo el clima influye en la forma de vida, la vestimenta y la alimentación de las comunidades.' },
          ],
        },
        {
          id: 'soc-s3-02',
          enunciado: 'Describe las normas de convivencia en el hogar, la escuela y la comunidad, y comprende la importancia de cumplirlas.',
          competencia: 'pensamiento-social',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s3-02-e1', enunciado: 'Identifica normas de convivencia en espacios cotidianos (hogar, escuela, parque) y explica para qué sirven.' },
            { id: 'soc-s3-02-e2', enunciado: 'Reconoce que las normas son construidas por las comunidades para favorecer la convivencia y el bienestar común.' },
          ],
        },
        {
          id: 'soc-s3-03',
          enunciado: 'Reconoce cambios y permanencias en la historia de su familia y comunidad usando fuentes primarias sencillas.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s3-03-e1', enunciado: 'Compara aspectos del pasado y el presente de su familia o comunidad (costumbres, medios de transporte, tecnología).' },
            { id: 'soc-s3-03-e2', enunciado: 'Usa fotos, relatos de familiares u objetos del pasado como fuentes de información histórica.' },
          ],
        },
        {
          id: 'soc-s3-04',
          enunciado: 'Reconoce la diversidad cultural, étnica y regional de Colombia y la valora como parte de la identidad nacional.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s3-04-e1', enunciado: 'Identifica grupos étnicos presentes en Colombia (indígenas, afrocolombianos, mestizos, raizales) y reconoce algunas de sus tradiciones.' },
            { id: 'soc-s3-04-e2', enunciado: 'Argumenta por qué la diversidad cultural enriquece a la sociedad colombiana.' },
          ],
        },
        {
          id: 'soc-s3-05',
          enunciado: 'Identifica derechos y deberes fundamentales de niños y niñas y reconoce instituciones que los protegen.',
          competencia: 'pensamiento-social',
          componente: 'argumentacion',
          evidencias: [
            { id: 'soc-s3-05-e1', enunciado: 'Nombra derechos de los niños establecidos en la Convención sobre los Derechos del Niño.' },
            { id: 'soc-s3-05-e2', enunciado: 'Identifica instituciones locales y nacionales que protegen los derechos de los niños (ICBF, Defensoría del Pueblo).' },
          ],
        },
        {
          id: 'soc-s3-06',
          enunciado: 'Participa en la toma de decisiones colectivas en el aula y reconoce la importancia del voto y el consenso.',
          competencia: 'pensamiento-sistemico',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s3-06-e1', enunciado: 'Participa en votaciones del aula y comprende por qué se respeta la decisión de la mayoría.' },
            { id: 'soc-s3-06-e2', enunciado: 'Reconoce formas de participación democrática en la escuela (gobierno escolar, personero).' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No identifica accidentes geográficos del entorno ni reconoce derechos básicos de los niños.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#f59e0b',
          descripcion: 'El estudiante reconoce características del entorno geográfico, identifica normas básicas de convivencia y nombra derechos fundamentales de los niños.',
          aprendizajesEsperados: ['soc-s3-01', 'soc-s3-02', 'soc-s3-05'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#22c55e',
          descripcion: 'El estudiante relaciona el entorno físico con las actividades humanas, compara el pasado y el presente de su comunidad, reconoce la diversidad cultural colombiana y participa en decisiones colectivas.',
          aprendizajesEsperados: ['soc-s3-01', 'soc-s3-02', 'soc-s3-03', 'soc-s3-04', 'soc-s3-05'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3b82f6',
          descripcion: 'El estudiante usa fuentes primarias para reconstruir la historia de su comunidad, argumenta el valor de la diversidad cultural, identifica mecanismos de participación democrática y comprende la interrelación entre el entorno físico, las normas y la vida social.',
          aprendizajesEsperados: ['soc-s3-01', 'soc-s3-02', 'soc-s3-03', 'soc-s3-04', 'soc-s3-05', 'soc-s3-06'],
        },
      ],
    },

    // =========================================================
    // SABER 5°
    // =========================================================
    'saber-5': {
      nombre: 'Saber 5°',
      grados: ['5'],

      aprendizajes: [
        {
          id: 'soc-s5-01',
          enunciado: 'Describe la organización político-administrativa de Colombia (municipios, departamentos, nación) y sus funciones.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s5-01-e1', enunciado: 'Ubica su municipio y departamento en el mapa de Colombia e identifica las principales regiones geográficas.' },
            { id: 'soc-s5-01-e2', enunciado: 'Describe las funciones del alcalde, el gobernador y el presidente como representantes de los distintos niveles de gobierno.' },
            { id: 'soc-s5-01-e3', enunciado: 'Explica cómo el Estado colombiano garantiza derechos y presta servicios a los ciudadanos.' },
          ],
        },
        {
          id: 'soc-s5-02',
          enunciado: 'Analiza procesos históricos relevantes de América Latina en los siglos XIX y XX identificando causas, consecuencias y actores.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s5-02-e1', enunciado: 'Describe las causas y consecuencias de las guerras de independencia en América Latina.' },
            { id: 'soc-s5-02-e2', enunciado: 'Identifica actores clave (Bolívar, Miranda, San Martín) y sus roles en los procesos de independencia.' },
          ],
        },
        {
          id: 'soc-s5-03',
          enunciado: 'Describe las principales características de las regiones naturales de Colombia y las relaciona con la biodiversidad y las actividades humanas.',
          competencia: 'pensamiento-sistemico',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s5-03-e1', enunciado: 'Caracteriza las regiones naturales de Colombia (Andina, Caribe, Pacífica, Orinoquía, Amazonia, insular) por su clima y relieve.' },
            { id: 'soc-s5-03-e2', enunciado: 'Relaciona la biodiversidad de cada región con las actividades económicas predominantes.' },
          ],
        },
        {
          id: 'soc-s5-04',
          enunciado: 'Reconoce mecanismos de participación ciudadana en Colombia y su importancia para la democracia.',
          competencia: 'pensamiento-social',
          componente: 'argumentacion',
          evidencias: [
            { id: 'soc-s5-04-e1', enunciado: 'Identifica mecanismos de participación ciudadana: voto, plebiscito, referendo, consulta popular, cabildo abierto.' },
            { id: 'soc-s5-04-e2', enunciado: 'Argumenta por qué la participación ciudadana es fundamental para el funcionamiento de la democracia.' },
          ],
        },
        {
          id: 'soc-s5-05',
          enunciado: 'Analiza situaciones de conflicto social y propone alternativas de solución pacífica basadas en el diálogo y el respeto.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s5-05-e1', enunciado: 'Identifica las causas de un conflicto social desde las perspectivas de los diferentes actores involucrados.' },
            { id: 'soc-s5-05-e2', enunciado: 'Propone estrategias de mediación y conciliación para resolver conflictos de manera pacífica.' },
          ],
        },
        {
          id: 'soc-s5-06',
          enunciado: 'Interpreta mapas temáticos y usa coordenadas geográficas para ubicar lugares en el espacio terrestre.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s5-06-e1', enunciado: 'Usa latitud y longitud para ubicar puntos en un mapa o globo terráqueo.' },
            { id: 'soc-s5-06-e2', enunciado: 'Interpreta mapas temáticos (población, clima, relieve, uso del suelo) para extraer información relevante.' },
          ],
        },
        {
          id: 'soc-s5-07',
          enunciado: 'Comprende el concepto de derechos humanos y reconoce situaciones en que son vulnerados o protegidos.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s5-07-e1', enunciado: 'Identifica derechos humanos fundamentales consagrados en la Declaración Universal de los Derechos Humanos.' },
            { id: 'soc-s5-07-e2', enunciado: 'Analiza situaciones concretas para determinar si se respetan o violan los derechos humanos.' },
          ],
        },
        {
          id: 'soc-s5-08',
          enunciado: 'Analiza el papel de las migraciones en la configuración cultural y social de Colombia y América Latina.',
          competencia: 'pensamiento-sistemico',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s5-08-e1', enunciado: 'Describe causas y consecuencias de los procesos migratorios en Colombia y América Latina.' },
            { id: 'soc-s5-08-e2', enunciado: 'Reconoce aportes de los grupos migrantes (españoles, africanos, indígenas) a la cultura colombiana.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No describe la organización política de Colombia ni ubica las regiones naturales en el mapa.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#f59e0b',
          descripcion: 'El estudiante describe la organización político-administrativa de Colombia, ubica las regiones naturales y reconoce mecanismos básicos de participación ciudadana.',
          aprendizajesEsperados: ['soc-s5-01', 'soc-s5-03', 'soc-s5-04'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#22c55e',
          descripcion: 'El estudiante analiza procesos históricos de independencia, interpreta mapas temáticos, comprende derechos humanos y propone soluciones pacíficas a conflictos sociales.',
          aprendizajesEsperados: ['soc-s5-01', 'soc-s5-02', 'soc-s5-03', 'soc-s5-04', 'soc-s5-05', 'soc-s5-06', 'soc-s5-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3b82f6',
          descripcion: 'El estudiante relaciona la geografía con la biodiversidad y las actividades económicas, analiza múltiples perspectivas en conflictos sociales, comprende el impacto de las migraciones en la cultura colombiana y argumenta sobre la importancia de los derechos humanos.',
          aprendizajesEsperados: ['soc-s5-01', 'soc-s5-02', 'soc-s5-03', 'soc-s5-04', 'soc-s5-05', 'soc-s5-06', 'soc-s5-07', 'soc-s5-08'],
        },
      ],
    },

    // =========================================================
    // SABER 9°
    // =========================================================
    'saber-9': {
      nombre: 'Saber 9°',
      grados: ['6', '7', '8', '9'],

      aprendizajes: [
        {
          id: 'soc-s9-01',
          enunciado: 'Analiza procesos históricos mundiales (colonialismo, Revolución Industrial, guerras mundiales) identificando causas, consecuencias y relaciones con el presente.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s9-01-e1', enunciado: 'Explica las causas y consecuencias del colonialismo europeo en América, África y Asia.' },
            { id: 'soc-s9-01-e2', enunciado: 'Establece relaciones entre la Revolución Industrial, el capitalismo y las desigualdades sociales actuales.' },
            { id: 'soc-s9-01-e3', enunciado: 'Analiza las causas de las guerras mundiales y sus consecuencias para el orden internacional.' },
          ],
        },
        {
          id: 'soc-s9-02',
          enunciado: 'Comprende la estructura y el funcionamiento del Estado colombiano a partir de la Constitución Política de 1991.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s9-02-e1', enunciado: 'Describe los principios fundamentales de la Constitución de 1991 (Estado social de derecho, soberanía popular, pluralismo).' },
            { id: 'soc-s9-02-e2', enunciado: 'Explica la separación de poderes (legislativo, ejecutivo, judicial) y los mecanismos de control entre ellos.' },
            { id: 'soc-s9-02-e3', enunciado: 'Identifica acciones de tutela, derechos de petición y otros mecanismos constitucionales de protección de derechos.' },
          ],
        },
        {
          id: 'soc-s9-03',
          enunciado: 'Analiza la distribución desigual de la población y los recursos en el mundo, relacionándola con procesos históricos y factores geográficos.',
          competencia: 'pensamiento-sistemico',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s9-03-e1', enunciado: 'Interpreta mapas de densidad poblacional y los relaciona con el acceso a recursos y servicios.' },
            { id: 'soc-s9-03-e2', enunciado: 'Explica cómo factores históricos (colonialismo, esclavitud) contribuyen a las desigualdades globales actuales.' },
          ],
        },
        {
          id: 'soc-s9-04',
          enunciado: 'Evalúa críticamente los sistemas económicos (capitalismo, socialismo, economía mixta) y sus implicaciones sociales y ambientales.',
          competencia: 'pensamiento-sistemico',
          componente: 'argumentacion',
          evidencias: [
            { id: 'soc-s9-04-e1', enunciado: 'Compara las características principales del capitalismo y el socialismo, identificando ventajas y limitaciones de cada sistema.' },
            { id: 'soc-s9-04-e2', enunciado: 'Analiza cómo los sistemas económicos impactan la distribución del ingreso y el acceso a bienes y servicios.' },
          ],
        },
        {
          id: 'soc-s9-05',
          enunciado: 'Analiza conflictos históricos y contemporáneos desde múltiples perspectivas, reconociendo los intereses y valores en juego.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s9-05-e1', enunciado: 'Describe un conflicto histórico (guerra, colonización, revolución) desde las perspectivas de distintos actores sociales.' },
            { id: 'soc-s9-05-e2', enunciado: 'Evalúa cómo los intereses económicos, políticos y culturales condicionan las posiciones de los actores en un conflicto.' },
          ],
        },
        {
          id: 'soc-s9-06',
          enunciado: 'Comprende el proceso de construcción de paz en Colombia, sus avances, obstáculos y los retos para la reconciliación.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s9-06-e1', enunciado: 'Describe el conflicto armado colombiano, sus causas históricas, actores y consecuencias humanitarias.' },
            { id: 'soc-s9-06-e2', enunciado: 'Analiza los acuerdos de paz y los retos de la implementación desde las perspectivas de diferentes sectores de la sociedad.' },
          ],
        },
        {
          id: 'soc-s9-07',
          enunciado: 'Construye y evalúa argumentos sobre problemas sociales usando evidencia histórica, estadística y fuentes diversas.',
          competencia: 'pensamiento-sistemico',
          componente: 'argumentacion',
          evidencias: [
            { id: 'soc-s9-07-e1', enunciado: 'Elabora argumentos sustentados en evidencia (datos estadísticos, fuentes históricas, testimonios) sobre un problema social.' },
            { id: 'soc-s9-07-e2', enunciado: 'Identifica falacias y generalizaciones indebidas en discursos sobre problemas sociales y políticos.' },
          ],
        },
        {
          id: 'soc-s9-08',
          enunciado: 'Analiza la globalización como proceso económico, cultural y político, reconociendo sus beneficios y sus efectos desiguales.',
          competencia: 'pensamiento-sistemico',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s9-08-e1', enunciado: 'Describe características de la globalización: integración de mercados, flujo de información y movilidad cultural.' },
            { id: 'soc-s9-08-e2', enunciado: 'Evalúa los efectos desiguales de la globalización en países desarrollados y en vías de desarrollo.' },
          ],
        },
        {
          id: 'soc-s9-09',
          enunciado: 'Reconoce y analiza formas de discriminación (racial, de género, étnica, socioeconómica) y propone acciones para combatirlas.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s9-09-e1', enunciado: 'Identifica situaciones de discriminación y las relaciona con estructuras históricas y sociales que las perpetúan.' },
            { id: 'soc-s9-09-e2', enunciado: 'Propone acciones concretas para promover la igualdad y combatir la discriminación en su entorno.' },
          ],
        },
        {
          id: 'soc-s9-10',
          enunciado: 'Comprende el concepto de ciudadanía global y la importancia de la participación en organismos internacionales para la resolución de problemas comunes.',
          competencia: 'pensamiento-social',
          componente: 'argumentacion',
          evidencias: [
            { id: 'soc-s9-10-e1', enunciado: 'Describe el papel de organismos internacionales (ONU, OEA, Corte Penal Internacional) en la protección de los derechos humanos.' },
            { id: 'soc-s9-10-e2', enunciado: 'Argumenta por qué los problemas globales (cambio climático, migración, pobreza) requieren soluciones cooperativas entre naciones.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No identifica causas básicas de procesos históricos mundiales ni reconoce los principios fundamentales de la Constitución de 1991.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#f59e0b',
          descripcion: 'El estudiante describe procesos históricos básicos, identifica los principios de la Constitución de 1991, interpreta mapas de distribución poblacional y reconoce características de los sistemas económicos.',
          aprendizajesEsperados: ['soc-s9-01', 'soc-s9-02', 'soc-s9-03', 'soc-s9-04'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#22c55e',
          descripcion: 'El estudiante analiza conflictos históricos desde múltiples perspectivas, evalúa los efectos de la globalización, construye argumentos con evidencia y comprende el proceso de construcción de paz en Colombia.',
          aprendizajesEsperados: ['soc-s9-01', 'soc-s9-02', 'soc-s9-03', 'soc-s9-04', 'soc-s9-05', 'soc-s9-06', 'soc-s9-07', 'soc-s9-08'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3b82f6',
          descripcion: 'El estudiante analiza críticamente formas de discriminación y sus causas estructurales, evalúa falacias en discursos sociales, comprende la ciudadanía global y argumenta sobre la necesidad de cooperación internacional para resolver problemas comunes.',
          aprendizajesEsperados: ['soc-s9-01', 'soc-s9-02', 'soc-s9-03', 'soc-s9-04', 'soc-s9-05', 'soc-s9-06', 'soc-s9-07', 'soc-s9-08', 'soc-s9-09', 'soc-s9-10'],
        },
      ],
    },

    // =========================================================
    // SABER 11°
    // =========================================================
    'saber-11': {
      nombre: 'Saber 11°',
      grados: ['10', '11'],

      aprendizajes: [
        {
          id: 'soc-s11-01',
          enunciado: 'Analiza los procesos de formación del mundo contemporáneo (Guerra Fría, descolonización, caída del muro de Berlín) y sus efectos en el orden internacional actual.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s11-01-e1', enunciado: 'Explica las causas y consecuencias de la Guerra Fría y su influencia en los conflictos regionales del siglo XX.' },
            { id: 'soc-s11-01-e2', enunciado: 'Analiza el proceso de descolonización en África y Asia y sus efectos en la configuración del orden mundial actual.' },
            { id: 'soc-s11-01-e3', enunciado: 'Relaciona la caída del muro de Berlín y la disolución de la URSS con la reorganización del sistema internacional.' },
          ],
        },
        {
          id: 'soc-s11-02',
          enunciado: 'Evalúa el sistema político colombiano, sus fortalezas, debilidades e instituciones desde la perspectiva de la democracia constitucional.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s11-02-e1', enunciado: 'Analiza los mecanismos de control del poder en Colombia (Contraloría, Procuraduría, Defensoría) y evalúa su efectividad.' },
            { id: 'soc-s11-02-e2', enunciado: 'Evalúa la participación política en Colombia: electoral, comunitaria y en movimientos sociales.' },
          ],
        },
        {
          id: 'soc-s11-03',
          enunciado: 'Analiza los modelos de desarrollo económico y sus implicaciones sociales, ambientales y geopolíticas en el contexto global.',
          competencia: 'pensamiento-sistemico',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s11-03-e1', enunciado: 'Compara modelos de desarrollo económico (neoliberalismo, economía social, desarrollo sostenible) identificando sus supuestos y consecuencias.' },
            { id: 'soc-s11-03-e2', enunciado: 'Analiza indicadores de desarrollo humano (IDH, Gini, pobreza multidimensional) para comparar países y regiones.' },
          ],
        },
        {
          id: 'soc-s11-04',
          enunciado: 'Construye y evalúa argumentos sobre problemas políticos y sociales contemporáneos usando fuentes diversas y reconociendo sesgos.',
          competencia: 'pensamiento-sistemico',
          componente: 'argumentacion',
          evidencias: [
            { id: 'soc-s11-04-e1', enunciado: 'Evalúa la credibilidad y el sesgo de fuentes de información política y social (prensa, redes sociales, informes institucionales).' },
            { id: 'soc-s11-04-e2', enunciado: 'Construye un argumento estructurado sobre un problema político usando evidencia diversa y reconociendo contraargumentos.' },
          ],
        },
        {
          id: 'soc-s11-05',
          enunciado: 'Analiza conflictos internacionales contemporáneos (guerras, disputas territoriales, conflictos étnicos) desde múltiples perspectivas.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s11-05-e1', enunciado: 'Describe un conflicto internacional actual identificando los actores, sus intereses y las causas históricas del conflicto.' },
            { id: 'soc-s11-05-e2', enunciado: 'Evalúa propuestas de resolución de conflictos internacionales desde perspectivas jurídicas, humanitarias y geopolíticas.' },
          ],
        },
        {
          id: 'soc-s11-06',
          enunciado: 'Comprende los fundamentos filosóficos de la ética y los aplica al análisis de dilemas morales en contextos sociales y políticos.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s11-06-e1', enunciado: 'Aplica principios éticos (utilitarismo, deontología, ética del cuidado) al análisis de dilemas morales contemporáneos.' },
            { id: 'soc-s11-06-e2', enunciado: 'Evalúa decisiones políticas y sociales desde criterios de justicia, equidad y bienestar colectivo.' },
          ],
        },
        {
          id: 'soc-s11-07',
          enunciado: 'Analiza los movimientos sociales del siglo XX y XXI (feminismo, ambientalismo, movimientos de derechos civiles) y su impacto en la transformación social.',
          competencia: 'pensamiento-sistemico',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s11-07-e1', enunciado: 'Describe los orígenes, demandas y logros de movimientos sociales relevantes (sufragismo, movimiento por los derechos civiles, ambientalismo).' },
            { id: 'soc-s11-07-e2', enunciado: 'Evalúa el papel de la sociedad civil organizada como agente de cambio social frente al Estado y al mercado.' },
          ],
        },
        {
          id: 'soc-s11-08',
          enunciado: 'Analiza la geopolítica global contemporánea: bloques de poder, organismos multilaterales y relaciones entre naciones.',
          competencia: 'pensamiento-social',
          componente: 'conocimientos-sociales',
          evidencias: [
            { id: 'soc-s11-08-e1', enunciado: 'Describe la configuración del sistema multipolar actual y el papel de potencias emergentes (China, India, Brasil).' },
            { id: 'soc-s11-08-e2', enunciado: 'Analiza el papel de organismos multilaterales (ONU, OMC, FMI) en la regulación de las relaciones internacionales.' },
          ],
        },
        {
          id: 'soc-s11-09',
          enunciado: 'Evalúa el papel de la memoria histórica y los derechos humanos en la construcción de sociedades más justas y democráticas.',
          competencia: 'interpretacion',
          componente: 'multiperspectividad',
          evidencias: [
            { id: 'soc-s11-09-e1', enunciado: 'Analiza el papel de la memoria histórica en la reparación a víctimas y la no repetición de violaciones a los derechos humanos.' },
            { id: 'soc-s11-09-e2', enunciado: 'Evalúa mecanismos de justicia transicional (comisiones de la verdad, reparación, garantías de no repetición) desde la perspectiva de las víctimas y la sociedad.' },
          ],
        },
        {
          id: 'soc-s11-10',
          enunciado: 'Analiza los retos del desarrollo sostenible en América Latina: desigualdad, gobernanza ambiental y modelos de desarrollo alternativo.',
          competencia: 'pensamiento-sistemico',
          componente: 'argumentacion',
          evidencias: [
            { id: 'soc-s11-10-e1', enunciado: 'Evalúa las tensiones entre el crecimiento económico, la equidad social y la sostenibilidad ambiental en América Latina.' },
            { id: 'soc-s11-10-e2', enunciado: 'Analiza modelos de desarrollo alternativo (buen vivir, economía solidaria, desarrollo humano) y los compara con el modelo convencional.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [0, 35],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No describe los procesos del mundo contemporáneo ni analiza el sistema político colombiano en sus aspectos básicos.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [36, 50],
          color: '#f59e0b',
          descripcion: 'El estudiante describe procesos históricos del siglo XX, identifica características del sistema político colombiano y reconoce modelos de desarrollo económico.',
          aprendizajesEsperados: ['soc-s11-01', 'soc-s11-02', 'soc-s11-03'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [51, 70],
          color: '#22c55e',
          descripcion: 'El estudiante construye argumentos con fuentes diversas, analiza conflictos internacionales desde múltiples perspectivas, aplica principios éticos a dilemas sociales y evalúa el impacto de movimientos sociales.',
          aprendizajesEsperados: ['soc-s11-01', 'soc-s11-02', 'soc-s11-03', 'soc-s11-04', 'soc-s11-05', 'soc-s11-06', 'soc-s11-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [71, 100],
          color: '#3b82f6',
          descripcion: 'El estudiante analiza la geopolítica global contemporánea, evalúa mecanismos de justicia transicional desde múltiples perspectivas, reconoce sesgos en fuentes de información y argumenta sobre los retos del desarrollo sostenible en América Latina.',
          aprendizajesEsperados: ['soc-s11-01', 'soc-s11-02', 'soc-s11-03', 'soc-s11-04', 'soc-s11-05', 'soc-s11-06', 'soc-s11-07', 'soc-s11-08', 'soc-s11-09', 'soc-s11-10'],
        },
      ],
    },
  },
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICFES_SOCIALES }
}
