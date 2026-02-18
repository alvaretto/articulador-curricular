/**
 * Estándares Básicos de Competencias (EBC) - Lenguaje
 * Fuente: Ministerio de Educación Nacional (MEN) Colombia
 * Documento: "Estándares Básicos de Competencias en Lenguaje, Matemáticas, Ciencias y Ciudadanas" (2006)
 *
 * Estructura por grupos de grados: 1-3, 4-5, 6-7, 8-9, 10-11
 * Factores: Producción Textual, Comprensión e Interpretación Textual, Literatura,
 *           Medios de Comunicación y Otros Sistemas Simbólicos, Ética de la Comunicación
 *
 * Nota: El factor "Producción Textual" integra producción oral y escrita.
 *       El factor "Medios de Comunicación" incluye medios masivos y otros sistemas simbólicos.
 */

const EBC_LENGUAJE = {
  area: 'lenguaje',
  nombre: 'Lenguaje',
  color: '#19c37d',

  ejes: [
    {
      id: 'produccion',
      nombre: 'Producción Textual',
      color: '#10B981',
      descripcion: 'Producción de textos orales y escritos que responden a diversas necesidades comunicativas'
    },
    {
      id: 'comprension',
      nombre: 'Comprensión e Interpretación Textual',
      color: '#3B82F6',
      descripcion: 'Comprensión e interpretación de textos con actitud crítica y capacidad argumentativa'
    },
    {
      id: 'literatura',
      nombre: 'Literatura',
      color: '#8B5CF6',
      descripcion: 'Literatura como representación de la experiencia humana y como fuente de disfrute estético'
    },
    {
      id: 'medios',
      nombre: 'Medios de Comunicación y Otros Sistemas Simbólicos',
      color: '#F59E0B',
      descripcion: 'Comprensión y uso de los medios de comunicación masiva y otros sistemas de significación'
    },
    {
      id: 'etica',
      nombre: 'Ética de la Comunicación',
      color: '#EF4444',
      descripcion: 'Reconocimiento de los derechos propios y ajenos en el acto comunicativo con respeto y valoración de la diferencia'
    }
  ],

  grupos: {

    // =====================================================================
    // GRADOS 1 - 3
    // =====================================================================
    '1-3': {
      estandarGeneral: 'Produzco textos orales que responden a distintos propósitos comunicativos.',

      estandares: {

        produccion: [
          // Producción oral
          'Produzco textos orales, en situaciones comunicativas que permiten evidenciar el uso significativo de la entonación y la pertinencia articulatoria.',
          'Describo personas, objetos, lugares y eventos de manera clara.',
          'Narro historias, anécdotas y situaciones de mi entorno de manera coherente.',
          'Utilizo el lenguaje para satisfacer necesidades concretas de comunicación.',
          'Expreso de manera apropiada y con buena pronunciación las ideas que quiero compartir.',
          // Producción escrita
          'Produzco textos escritos que responden a diversas necesidades comunicativas.',
          'Determino el tema, el posible lector de mi texto y el propósito comunicativo que me lleva a producirlo.',
          'Elijo el tipo de texto que requiere mi propósito comunicativo.',
          'Reviso y corrijo los textos que produzco para mejorarlos.',
          'Establezco nexos entre las oraciones de mis textos (concordancia de número, género, tiempo y persona).'
        ],

        comprension: [
          'Comprendo textos que tienen diferentes formatos y finalidades.',
          'Leo diferentes clases de textos: manuales, diccionarios, enciclopedias, periódicos, obras literarias, etc.',
          'Relaciono el contenido de los textos que leo con mi experiencia.',
          'Identifico la silueta o el formato de los textos que leo.',
          'Elaboro y respondo preguntas sobre los textos leídos.',
          'Leo en voz alta con entonación y ritmo adecuados.'
        ],

        literatura: [
          'Elaboro hipótesis de lectura acerca de las relaciones entre los elementos constitutivos de un texto literario (personajes, espacios, ambientes, acciones) y entre éste y el contexto.',
          'Leo con cierta fluidez y comprensión diferentes tipos de textos literarios: cuentos, fábulas, leyendas y mitos.',
          'Diferencio entre los textos de carácter informativo y los de carácter literario.',
          'Reconozco en los textos literarios la posibilidad de desarrollar mi capacidad creativa y lúdica.',
          'Disfruto de la literatura como espacio de recreación, fantasía y exploración de sentimientos.'
        ],

        medios: [
          // Medios de comunicación masiva
          'Identifico los medios de comunicación masiva y las situaciones en los cuales es adecuado utilizarlos.',
          'Reconozco la información emitida por los medios de comunicación masivos: televisión, radio, prensa.',
          'Reconozco la diferencia entre la información y el entretenimiento en los medios de comunicación masiva.',
          // Otros sistemas simbólicos
          'Identifico la función social de los sistemas de comunicación no verbales (señales de tránsito, íconos, colores, gestos).',
          'Reconozco que los gestos, los movimientos corporales y los objetos tienen significado en la comunicación.',
          'Comprendo el sentido de mensajes a través de íconos y símbolos presentes en mi entorno.'
        ],

        etica: [
          'Identifico los roles que cumplen las personas que intervienen en la comunicación.',
          'Identifico las intenciones comunicativas de mis interlocutores al hablar, escribir, leer o escuchar.',
          'Reconozco la importancia de escuchar activamente a quien habla.',
          'Valoro y respeto el uso que las personas hacen del lenguaje de acuerdo con su contexto.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 4 - 5
    // =====================================================================
    '4-5': {
      estandarGeneral: 'Produzco textos orales, en situaciones comunicativas que permiten evidenciar el uso significativo de la entonación y la pertinencia articulatoria.',

      estandares: {

        produccion: [
          // Producción oral
          'Produzco textos orales de diferente tipo en situaciones comunicativas reales (narración, descripción, argumentación).',
          'Utilizo estrategias argumentativas con el fin de convencer a mis interlocutores.',
          'Reconozco el papel del gesto y la entonación en la significación de un enunciado oral.',
          'Adecúo la expresión oral a la situación comunicativa y al interlocutor.',
          // Producción escrita
          'Produzco textos escritos que responden a diversas necesidades comunicativas y que siguen un procedimiento estratégico para su elaboración.',
          'Determino el tema, el posible lector y el propósito comunicativo que me lleva a producir el texto.',
          'Delimito el tema de mi texto, siguiendo un plan de escritura.',
          'Produzco la primera versión del texto y la reviso teniendo en cuenta la coherencia y el uso de signos de puntuación.',
          'Reescribo el texto a partir de las propuestas de corrección formuladas por mis compañeros y por mi docente.',
          'Utilizo diversas estrategias de búsqueda, organización y almacenamiento de la información.'
        ],

        comprension: [
          'Comprendo diversos tipos de texto, utilizando algunas estrategias de búsqueda, organización y almacenamiento de la información.',
          'Leo diferentes clases de textos con fluidez y comprensión: explicativos, argumentativos, literarios, informativos.',
          'Relaciono el contenido de los textos con mi experiencia y con otros textos.',
          'Identifico las ideas principales y secundarias en los textos que leo.',
          'Establezco relaciones de causa-efecto, comparación y oposición entre los contenidos del texto.',
          'Formulo preguntas antes, durante y después de leer textos que tratan temas de interés para mí.'
        ],

        literatura: [
          'Leo con fluidez y comprensión diferentes tipos de textos literarios (cuentos, novelas, fábulas, mitos, leyendas).',
          'Reconozco en los textos literarios la posibilidad de desarrollar mi capacidad creativa y lúdica.',
          'Identifico la silueta o formato de los textos literarios que leo.',
          'Reconozco y diferencio elementos constitutivos de las obras literarias: personajes, espacio, tiempo, argumento.',
          'Elaboro y comparo interpretaciones sobre las obras literarias leídas.',
          'Creo textos con intención literaria usando recursos como la rima, la metáfora y la comparación.'
        ],

        medios: [
          // Medios de comunicación masiva
          'Reconozco la información emitida por diferentes medios de comunicación masiva y adopto una posición crítica frente a ella.',
          'Selecciono y clasifico la información emitida por los medios de comunicación masivos.',
          'Establezco diferencias entre las características de los medios de comunicación masiva (televisión, radio, prensa, internet).',
          'Identifico el uso que se hace del lenguaje en los medios de comunicación masiva.',
          // Otros sistemas simbólicos
          'Comprendo la información que circula a través de sistemas de comunicación no verbales.',
          'Identifico los elementos constitutivos de los medios de comunicación gráficos: comics, caricaturas, afiches.',
          'Reconozco y comprendo las características de los sistemas de comunicación no lingüísticos de mi entorno.'
        ],

        etica: [
          'Reconozco la importancia del lenguaje para la construcción de los acuerdos sociales.',
          'Identifico las intenciones comunicativas de los textos que leo y escucho.',
          'Comprendo que la comunicación supone respeto por el interlocutor y conciencia del rol que cumplo como hablante y oyente.',
          'Valorizo el uso de lenguas distintas al castellano, como el inglés y las lenguas de comunidades colombianas.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 6 - 7
    // =====================================================================
    '6-7': {
      estandarGeneral: 'Produzco textos orales, en situaciones comunicativas que permiten evidenciar el uso significativo de la entonación y la pertinencia articulatoria.',

      estandares: {

        produccion: [
          // Producción oral
          'Produzco textos orales de tipo argumentativo para exponer mis ideas y llegar a acuerdos en los que prime el respeto por mi interlocutor.',
          'Organizo y estructuro mis ideas antes de comunicarlas oralmente.',
          'Utilizo el discurso oral para establecer acuerdos y resolver conflictos.',
          'Produzco textos orales con diferentes propósitos: informar, convencer, entretener, expresar sentimientos.',
          // Producción escrita
          'Produzco textos escritos que evidencian el conocimiento que tengo de la estructura de los textos narrativos, argumentativos e informativos.',
          'Delimito el tema y produzco textos escritos con coherencia y cohesión.',
          'Uso la función representativa del lenguaje para producir descripciones, narraciones y explicaciones.',
          'Diseño un plan que articule la superestructura del texto que voy a producir.',
          'Reviso, socializo y corrijo mis escritos, tomando en cuenta las propuestas de mis compañeros.',
          'Utilizo el diccionario y otras fuentes bibliográficas para escoger el léxico más apropiado para mis textos.'
        ],

        comprension: [
          'Comprendo e interpreto diversos tipos de texto, para establecer sus relaciones internas y su clasificación en una tipología.',
          'Elaboro hipótesis de lectura acerca de las relaciones entre los elementos constitutivos de un texto.',
          'Identifico la silueta o formato de los textos que leo y los relaciono con el contexto de comunicación.',
          'Establezco relaciones entre los textos que leo y el contexto sociocultural en el que fueron producidos.',
          'Identifico diferentes tipos de relaciones que puede haber entre proposiciones (causalidad, temporalidad, especialización, complementariedad).',
          'Comparo textos de diferentes autores, épocas y culturas.'
        ],

        literatura: [
          'Leo con sentido crítico diversas manifestaciones literarias de la tradición oral colombiana.',
          'Reconozco los elementos del contexto cultural que determinan una obra literaria.',
          'Diferencio el lenguaje literario del lenguaje de otros textos y exploro sus posibilidades estéticas.',
          'Reconozco la ironía, el humor y otros recursos que utiliza el autor en la elaboración de un texto literario.',
          'Identifico y explico los elementos constitutivos de la narración (personajes, tiempo, espacio, narrador).',
          'Establezco relaciones entre los temas de la literatura y los problemas del ser humano.'
        ],

        medios: [
          // Medios de comunicación masiva
          'Comprendo la información emitida por los medios de comunicación masivos y adopto una posición crítica y responsable frente a ella.',
          'Produzco textos orales y escritos utilizando los medios de comunicación masiva (radio, televisión, prensa, internet).',
          'Comparo el uso del lenguaje en diferentes medios de comunicación masiva.',
          'Establezco diferencias entre las estructuras narrativas del texto literario y las del texto periodístico.',
          // Otros sistemas simbólicos
          'Exploro e interpreto el significado de los signos en la imagen y en otros sistemas de comunicación no verbal.',
          'Comprendo textos que utilizan de manera simultánea imagen y texto escrito (publicidades, historietas).',
          'Reconozco el uso y la función de los medios audiovisuales en la transmisión de información y cultura.'
        ],

        etica: [
          'Reconozco y valoro el lenguaje como medio de manifestación de la cultura y la identidad.',
          'Comprendo que las intenciones de los interlocutores no siempre son transparentes en la comunicación.',
          'Identifico y cuestiono los usos del lenguaje que suponen discriminación por razones de género, etnia, religión y condición social.',
          'Valoro la diversidad lingüística del país y reconozco el español como lengua de unidad nacional.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 8 - 9
    // =====================================================================
    '8-9': {
      estandarGeneral: 'Produzco textos orales de tipo argumentativo para exponer mis ideas y llegar a acuerdos en los que prime el respeto por mi interlocutor y la valoración de los contextos comunicativos.',

      estandares: {

        produccion: [
          // Producción oral
          'Produzco textos orales de tipo argumentativo, expositivo y descriptivo con estructuras claras y pertinentes.',
          'Utilizo estrategias argumentativas que dan cuenta de mi posición crítica frente a un tema.',
          'Reconozco y utilizo recursos del discurso oral (entonación, pausa, postura corporal) para lograr los propósitos comunicativos.',
          'Produzco exposiciones orales con apoyo en fuentes diversas y materiales audiovisuales.',
          // Producción escrita
          'Produzco textos escritos que evidencian el conocimiento que tengo de la estructura de cada texto y de la complejidad de las relaciones entre su forma y su contenido.',
          'Delimito el tema de mis textos y los desarrollo de manera coherente y cohesionada.',
          'Elaboro planes de escritura para organizar mis ideas y las desarrollo oportunamente en el escrito.',
          'Produzco textos con diferentes propósitos y estructuras: argumentativos, expositivos, narrativos, descriptivos.',
          'Reviso y mejoro mis escritos a la luz de criterios formales y de contenido.',
          'Utilizo el lenguaje con coherencia, cohesión y adecuación a la situación comunicativa.'
        ],

        comprension: [
          'Comprendo e interpreto textos con actitud crítica y capacidad argumentativa.',
          'Elaboro hipótesis de interpretación atendiendo a la intención comunicativa y al sentido global del texto.',
          'Identifico y analizo los aspectos textuales, conceptuales y formales de cada tipo de texto.',
          'Reconozco y analizo las estrategias argumentativas utilizadas en un texto.',
          'Establezco relaciones entre los textos que leo y el contexto sociocultural en el que fueron producidos.',
          'Evalúo críticamente los argumentos y posturas expresadas en los textos que leo.',
          'Utilizo estrategias de búsqueda y almacenamiento de información para leer de manera significativa.'
        ],

        literatura: [
          'Leo con sentido crítico textos literarios de diferentes géneros y épocas.',
          'Reconozco y comprendo las características de la literatura como arte del lenguaje.',
          'Identifico las huellas del contexto histórico y cultural en los textos literarios.',
          'Reconozco los recursos retóricos del discurso literario y los relaciono con la producción de sentido.',
          'Establezco relaciones entre los textos literarios y la realidad que representan.',
          'Elaboro ensayos y reseñas literarias sobre las obras que leo.'
        ],

        medios: [
          // Medios de comunicación masiva
          'Comprendo y utilizo de manera crítica los medios de comunicación masiva para consultar, procesar y divulgar información.',
          'Establezco comparaciones entre los diferentes medios de comunicación y sus lenguajes específicos.',
          'Analizo el uso del lenguaje en la publicidad y en otros discursos de los medios masivos.',
          'Reconozco los propósitos de los diferentes géneros periodísticos (noticia, crónica, editorial, caricatura).',
          // Otros sistemas simbólicos
          'Exploro y comprendo la relación entre lenguaje, imagen y sonido en los medios audiovisuales.',
          'Interpreto de manera crítica los mensajes implícitos y explícitos de los medios de comunicación.',
          'Produzco textos orales y escritos adecuados a diferentes situaciones y con apoyo en los medios de comunicación.'
        ],

        etica: [
          'Reflexiono y tomo posición frente a las situaciones que propician o dificultan la comunicación.',
          'Evalúo las intenciones comunicativas de los participantes en actos de comunicación cotidianos.',
          'Reconozco las manifestaciones de poder en el lenguaje y las cuestiono con argumentos.',
          'Identifico y rechazo las formas de discriminación, exclusión e imposición cultural presentes en el lenguaje.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 10 - 11
    // =====================================================================
    '10-11': {
      estandarGeneral: 'Produzco textos argumentativos que evidencian mi conocimiento de la lengua y el control sobre el uso que hago de ella en contextos comunicativos orales y escritos.',

      estandares: {

        produccion: [
          // Producción oral
          'Produzco textos orales argumentativos que evidencian mi conocimiento de la lengua en situaciones formales de comunicación.',
          'Diseño y expongo planes de acción y proyectos a partir de posiciones argumentadas sobre temas de interés.',
          'Participo en espacios de discusión académica con posturas argumentadas y pertinentes al tema.',
          'Utilizo estrategias discursivas pertinentes y adecuadas al propósito de producción oral.',
          // Producción escrita
          'Produzco textos escritos coherentes y cohesionados de distinta complejidad (argumentativos, expositivos, literarios).',
          'Delimito el tema de mis textos y los desarrollo con coherencia, cohesión y adecuación.',
          'Produzco ensayos de carácter argumentativo en los que planteo tesis y las desarrollo con argumentos de diversa índole.',
          'Incorporo procedimientos formales en el proceso de escritura: planeación, elaboración de borradores y revisión.',
          'Utilizo el lenguaje con precisión, propiedad y corrección atendiendo a las normas ortográficas y gramaticales.',
          'Valoro la escritura como herramienta de comunicación, organización del pensamiento y registro de la experiencia.'
        ],

        comprension: [
          'Comprendo e interpreto textos con actitud crítica y capacidad argumentativa, reconociendo los múltiples sentidos que puede tener un texto.',
          'Analizo los aspectos textuales, conceptuales y formales de textos de diferentes géneros, propósitos y contextos.',
          'Evalúo estrategias explícitas o implícitas de los autores para lograr sus propósitos comunicativos.',
          'Elaboro hipótesis de lectura atendiendo a los paratextos, el contexto de producción y la intención comunicativa.',
          'Reconozco posiciones e intenciones de los actores involucrados en los textos que leo.',
          'Produzco reseñas críticas de los textos que leo.',
          'Utilizo diversas estrategias para leer textos especializados propios de los ámbitos académico y científico.'
        ],

        literatura: [
          'Leo con sentido crítico obras literarias de autores colombianos, latinoamericanos y universales.',
          'Identifico las características de los principales movimientos literarios (Romanticismo, Realismo, Modernismo, Vanguardia) y los relaciono con sus contextos históricos y culturales.',
          'Interpreto el simbolismo, la ironía y otros recursos literarios en función de la producción de sentido.',
          'Establezco relaciones entre los textos literarios y las realidades que representan, considerando sus contextos históricos y sociales.',
          'Produzco textos con intención literaria haciendo uso de los recursos del lenguaje estético.',
          'Reconozco y comparo las concepciones del mundo presentes en textos literarios de diferentes épocas y culturas.'
        ],

        medios: [
          // Medios de comunicación masiva
          'Comprendo y produzco con sentido crítico textos propios de los medios de comunicación masiva para establecer posturas frente a ellos.',
          'Establezco relaciones entre los contenidos de los medios de comunicación masiva y el contexto político, económico y social.',
          'Analizo los mecanismos de construcción y transmisión de la información en los distintos medios masivos.',
          'Identifico el rol de los medios de comunicación en la producción y difusión de la cultura.',
          // Otros sistemas simbólicos
          'Produzco textos empleando el lenguaje verbal y no verbal para lograr efectos en el interlocutor.',
          'Comprendo e interpreto el significado de textos que combinan distintos sistemas de signos (lingüísticos, visuales, sonoros).',
          'Establezco relaciones entre los distintos sistemas simbólicos y explico su función social y cultural.'
        ],

        etica: [
          'Respeto y asumo posturas fundamentadas frente a la diversidad cultural que se manifiesta en el lenguaje.',
          'Reconozco la función del lenguaje en la construcción y transformación de las relaciones de poder.',
          'Analizo los mecanismos de persuasión y manipulación presentes en discursos públicos y los cuestiono con argumentos.',
          'Asumo una posición crítica frente al uso que los medios de comunicación hacen del lenguaje y de las representaciones sociales.'
        ]
      }
    }

  } // fin grupos

}; // fin EBC_LENGUAJE

// Exportar para uso como módulo (si se usa con bundler)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EBC_LENGUAJE;
}
