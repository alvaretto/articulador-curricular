/**
 * Estándares Básicos de Competencias (EBC) - Ciencias Sociales
 * Fuente: Ministerio de Educación Nacional (MEN) Colombia
 * Documento: "Estándares Básicos de Competencias en Ciencias Naturales y Ciencias Sociales" (2004)
 * Complementado con: "Estándares Básicos de Competencias Ciudadanas" (2004)
 *
 * Estructura por grupos de grados: 1-3, 4-5, 6-7, 8-9, 10-11
 * Ejes: Relaciones con la Historia y las Culturas, Relaciones Espaciales y Ambientales, Relaciones Ético-Políticas
 *
 * Nota: Las Competencias Ciudadanas están integradas transversalmente en el eje Ético-Político
 * siguiendo el enfoque del MEN que articula ambos documentos.
 */

const EBC_SOCIALES = {
  area: 'ciencias-sociales',
  nombre: 'Ciencias Sociales',
  color: '#a78bfa',

  ejes: [
    {
      id: 'historico-cultural',
      nombre: 'Relaciones con la Historia y las Culturas',
      color: '#8B5CF6',
      descripcion: 'Comprensión de procesos históricos, identidades culturales y diversidad de las civilizaciones a lo largo del tiempo'
    },
    {
      id: 'espacial-ambiental',
      nombre: 'Relaciones Espaciales y Ambientales',
      color: '#10B981',
      descripcion: 'Lectura crítica del espacio geográfico, relaciones sociedad-naturaleza y problemas ambientales'
    },
    {
      id: 'etico-politico',
      nombre: 'Relaciones Ético-Políticas',
      color: '#EF4444',
      descripcion: 'Convivencia, derechos humanos, democracia, ciudadanía y construcción de lo público, con integración de Competencias Ciudadanas'
    }
  ],

  grupos: {

    // =====================================================================
    // GRADOS 1 - 3
    // =====================================================================
    '1-3': {
      estandarGeneral: 'Me identifico como un ser social e histórico que hace parte de una familia y una comunidad, en las que me desarrollo y aprendo a relacionarme con los demás y con la naturaleza.',

      estandares: {

        'historico-cultural': [
          'Identifico y describo características de mi familia, de las familias de mis compañeros y de las familias de otras culturas.',
          'Comparo aspectos de la vida cotidiana de niños y niñas de otras épocas y culturas con los de la actualidad.',
          'Identifico y describo costumbres y tradiciones de mi comunidad y de otras comunidades y culturas.',
          'Reconozco y describo festividades y conmemoraciones de mi región y explico su significado histórico y cultural.',
          'Reconozco la existencia de diversas culturas en Colombia y en el mundo, y las respeto.'
        ],

        'espacial-ambiental': [
          'Reconozco y describo el espacio en el que vivo y me ubico en él usando puntos de referencia.',
          'Identifico y describo características del entorno físico: relieve, clima, agua y suelos de la región donde vivo.',
          'Identifico recursos naturales de la región y las formas en que las personas los utilizan.',
          'Reconozco y describo las necesidades básicas de las personas de mi familia y mi comunidad.',
          'Identifico y describo situaciones de contaminación ambiental en mi comunidad y sus causas.'
        ],

        'etico-politico': [
          'Reconozco que pertenezco a diferentes grupos (familia, colegio, comunidad) y que en cada uno de ellos tengo derechos y deberes.',
          'Participo en actividades escolares y de mi comunidad con actitud colaborativa y respeto.',
          'Identifico y respeto las diferencias étnicas, culturales y de género en mi familia, mi comunidad y mi país.',
          'Reconozco y respeto las normas que regulan la convivencia en mi familia, en mi salón y en la escuela.',
          'Identifico situaciones de injusticia y maltrato en mi entorno y propongo acciones para superarlas.',
          'Reconozco la importancia de tomar decisiones democráticas, escuchar las opiniones de los demás y llegar a acuerdos.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 4 - 5
    // =====================================================================
    '4-5': {
      estandarGeneral: 'Reconozco que soy un sujeto con derechos y deberes, que pertenezco a una familia y una comunidad que comparten una historia y un territorio, y que hacen parte de Colombia.',

      estandares: {

        'historico-cultural': [
          'Reconozco características de las principales culturas y civilizaciones prehispánicas de América y establezco relaciones entre sus legados y el presente.',
          'Describo el proceso de conquista y colonización de América y sus consecuencias para los pueblos originarios.',
          'Identifico las características de la sociedad colonial y las razones que llevaron a la independencia.',
          'Describo el proceso de formación de la nación colombiana y reconozco aportes de los distintos grupos étnicos.',
          'Identifico y describo costumbres, tradiciones y fiestas de las diferentes regiones de Colombia.',
          'Reconozco la diversidad étnica y cultural de Colombia y la riqueza que representa para el país.'
        ],

        'espacial-ambiental': [
          'Identifico y describo las características geográficas de las regiones naturales de Colombia.',
          'Utilizo mapas, planos y otros instrumentos para representar y ubicar regiones, países y continentes.',
          'Descripto los modos de vida de las principales regiones de Colombia y los relaciono con el clima, el relieve y los recursos naturales.',
          'Reconozco el impacto de las actividades humanas sobre el entorno natural de Colombia.',
          'Identifico y describo problemas ambientales de Colombia y propongo alternativas de solución.',
          'Describo la organización política y administrativa de Colombia: municipios, departamentos y nación.'
        ],

        'etico-politico': [
          'Reconozco los derechos de los niños y las niñas en Colombia y en el mundo y las instituciones que los protegen.',
          'Identifico y describo la organización político-administrativa de mi municipio y mi departamento.',
          'Describo situaciones de discriminación y propongo formas de combatirla desde el respeto a la diferencia.',
          'Reconozco la diversidad de culturas, etnias y religiones presentes en Colombia y el mundo.',
          'Identifico la Constitución Política de Colombia como el principal acuerdo de la nación y reconozco sus principios fundamentales.',
          'Reconozco la importancia de la participación ciudadana y describo mecanismos para ejercerla.',
          'Identifico y describo situaciones de conflicto en la vida cotidiana y propongo formas pacíficas de resolverlos.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 6 - 7
    // =====================================================================
    '6-7': {
      estandarGeneral: 'Reconozco que los seres humanos somos sujetos de derechos y que en la historia hemos construido diferentes formas de organización social, política y cultural, que siguen transformándose.',

      estandares: {

        'historico-cultural': [
          'Reconozco características de las civilizaciones de la Antigüedad y las relaciono con el desarrollo de la cultura occidental.',
          'Explico el surgimiento y la expansión del Islam y su influencia en Europa, África y Asia.',
          'Describo y explico las características de la Edad Media: feudalismo, Iglesia, ciudades medievales.',
          'Explico el proceso de conquista y colonización de América y las consecuencias para los pueblos originarios.',
          'Identifico y describo las principales características de las culturas indígenas americanas: aztecas, mayas, incas.',
          'Comparo el proceso de formación del Estado-nación en distintas regiones del mundo.',
          'Reconozco y valoro la contribución de las culturas africanas a la historia y la cultura latinoamericana.'
        ],

        'espacial-ambiental': [
          'Utilizo e interpreto mapas, gráficas y otras representaciones cartográficas para ubicar y analizar fenómenos geográficos.',
          'Identifico y describo los principales tipos de relieve, climas y biomas del mundo.',
          'Describo las relaciones entre los ecosistemas y los modos de vida de las poblaciones que los habitan.',
          'Reconozco y explico el origen de los principales problemas ambientales globales (deforestación, desertificación, cambio climático).',
          'Analizo la distribución de la población en el mundo y las causas de las migraciones.',
          'Identifico y describo las principales regiones geoeconómicas del mundo y sus recursos estratégicos.'
        ],

        'etico-politico': [
          'Explico el surgimiento de los derechos humanos, su evolución histórica y las instituciones internacionales que los protegen.',
          'Identifico y describo los principios de la democracia y los comparo con otras formas de organización política.',
          'Reconozco y describo la organización del Estado colombiano según la Constitución de 1991.',
          'Analizo situaciones de discriminación y vulneración de derechos y propongo acciones de defensa.',
          'Identifico y describo los mecanismos de participación ciudadana establecidos en la Constitución.',
          'Explico la importancia de la solidaridad, la justicia y el bien común en la convivencia democrática.',
          'Reconozco la diversidad sexual y de género como parte de la dignidad humana y rechazo toda forma de discriminación.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 8 - 9
    // =====================================================================
    '8-9': {
      estandarGeneral: 'Reconozco la dinámica de los procesos históricos, políticos, económicos y culturales de Colombia y el mundo, y asumo una posición crítica frente a ellos.',

      estandares: {

        'historico-cultural': [
          'Explico las causas y consecuencias de las revoluciones burguesas (Revolución Francesa, Independencia Norteamericana) y su influencia en la construcción del Estado moderno.',
          'Describo el proceso de formación de los estados nacionales latinoamericanos y los relaciono con el contexto mundial del siglo XIX.',
          'Explico el surgimiento y las consecuencias del imperialismo y la colonización en Asia, África y América Latina.',
          'Analizo causas y consecuencias de las guerras mundiales del siglo XX y su impacto en el orden global.',
          'Explico el surgimiento de los movimientos sociales del siglo XX (feminismo, movimiento obrero, derechos civiles) y su impacto.',
          'Describo los principales hitos del proceso de construcción de la nación colombiana en los siglos XIX y XX.',
          'Analizo el conflicto armado colombiano: sus actores, causas históricas y consecuencias sociales.'
        ],

        'espacial-ambiental': [
          'Analizo la distribución desigual de los recursos naturales en el mundo y su relación con la geopolítica.',
          'Explico el fenómeno de la urbanización en el mundo y en Colombia y sus consecuencias ambientales y sociales.',
          'Identifico y describo los problemas ambientales globales (cambio climático, pérdida de biodiversidad) y propongo soluciones.',
          'Relaciono el modelo de desarrollo económico predominante con el deterioro ambiental.',
          'Analizo los procesos de integración y fragmentación territorial en distintas regiones del mundo.',
          'Reconozco los tratados internacionales sobre medio ambiente y evalúo el cumplimiento de Colombia.'
        ],

        'etico-politico': [
          'Analizo las causas y consecuencias de conflictos sociales y políticos en Colombia y el mundo, y propongo alternativas de solución.',
          'Explico los mecanismos constitucionales de protección de los derechos fundamentales (tutela, habeas corpus, acción popular).',
          'Identifico y analizo formas de corrupción en los sistemas políticos y sus consecuencias para la democracia.',
          'Reconozco la importancia de la justicia transicional y la memoria histórica para la construcción de paz en Colombia.',
          'Evalúo críticamente las decisiones de las instituciones del Estado colombiano y su impacto en la sociedad.',
          'Analizo la relación entre desigualdad económica, exclusión social y violación de derechos humanos.',
          'Reconozco la importancia de la cultura de paz, la reconciliación y la no violencia como fundamentos de la convivencia.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 10 - 11
    // =====================================================================
    '10-11': {
      estandarGeneral: 'Comprendo y asumo una posición crítica frente a los procesos históricos, políticos, económicos y culturales de Colombia y el mundo, y actúo como ciudadano responsable comprometido con la construcción de un mundo más justo.',

      estandares: {

        'historico-cultural': [
          'Analizo el surgimiento del capitalismo, la industrialización y sus impactos en las relaciones sociales y culturales a escala global.',
          'Explico las causas y consecuencias de la Guerra Fría y el proceso de descolonización del siglo XX.',
          'Analizo los procesos de globalización y sus efectos en las identidades culturales, las economías y los sistemas políticos.',
          'Evalúo críticamente el papel de los medios de comunicación en la construcción de imaginarios culturales e identidades.',
          'Analizo el desarrollo político y económico de Colombia en el siglo XX: la Violencia, el Frente Nacional, el narcotráfico y el conflicto armado.',
          'Evalúo el impacto del Proceso de Paz en Colombia y las perspectivas para la construcción de una sociedad más justa.',
          'Reconozco contribuciones de intelectuales, artistas y movimientos sociales latinoamericanos al pensamiento universal.'
        ],

        'espacial-ambiental': [
          'Analizo las dinámicas de la economía global: intercambios, dependencias, bloques económicos y crisis.',
          'Evalúo el impacto del modelo de desarrollo extractivista sobre los territorios y comunidades de Colombia.',
          'Propongo y argumento alternativas de desarrollo sostenible y economía circular para Colombia y el mundo.',
          'Analizo la crisis climática global: causas, consecuencias, acuerdos internacionales y responsabilidades diferenciadas.',
          'Reconozco la importancia de la soberanía alimentaria y la seguridad hídrica como asuntos de justicia social.',
          'Evalúo las políticas públicas de ordenamiento territorial en Colombia y sus impactos en las comunidades.'
        ],

        'etico-politico': [
          'Analizo críticamente el funcionamiento del Estado colombiano, sus instituciones y los mecanismos de control democrático.',
          'Evalúo las políticas públicas en Colombia desde criterios de justicia, equidad e inclusión.',
          'Reconozco y defiendo los derechos de las minorías étnicas, raciales, de género y orientación sexual en Colombia y el mundo.',
          'Argumento ética y políticamente frente a dilemas contemporáneos (desigualdad, migración, violencia de género, bienestar animal).',
          'Reconozco el papel de los movimientos sociales en la transformación histórica y en la ampliación de derechos.',
          'Propongo y lidero acciones colectivas orientadas al bien común, la convivencia pacífica y la justicia social.',
          'Evalúo el papel de Colombia en el sistema internacional y su responsabilidad frente a desafíos globales (cambio climático, migraciones, derechos humanos).',
          'Reconozco la importancia de la ética del cuidado, la empatía y la solidaridad como fundamentos de la ciudadanía activa.'
        ]
      }
    }

  }, // fin grupos

  // =======================================================================
  // MATRIZ DE REFERENCIA - Prueba Saber (Ciencias Sociales y Ciudadanas)
  // Fuente: ICFES - Lineamientos Saber 9° y 11°
  // =======================================================================
  matrizReferencia: [
    {
      competencia: 'Pensamiento social',
      afirmacion: 'Comprende modelos conceptuales, sus características y contextos de aplicación.',
      evidencias: [
        'Identifica y usa conceptos sociales básicos (económicos, políticos, culturales y geográficos).',
        'Conoce el modelo de Estado social de derecho y su aplicación en Colombia.',
        'Conoce la organización del Estado: conoce las funciones y alcances de las ramas del poder y de los organismos de control.',
        'Conoce los mecanismos que los ciudadanos tienen a su disposición para participar activamente en la democracia y para garantizar el respeto de sus derechos.'
      ]
    },
    {
      competencia: 'Pensamiento social',
      afirmacion: 'Comprende dimensiones espaciales y temporales de eventos, problemáticas y prácticas sociales.',
      evidencias: [
        'Contextualiza temporal y espacialmente eventos relevantes y procesos sociales, económicos, políticos y culturales.',
        'Reconoce las dimensiones temporales y espaciales de eventos, problemáticas y prácticas sociales.',
        'Reconoce que los fenómenos sociales pueden observarse desde diversos puntos de vista.'
      ]
    },
    {
      competencia: 'Interpretación y análisis de perspectivas',
      afirmacion: 'Evalúa las fuentes y argumentos del conocimiento social.',
      evidencias: [
        'Reconoce y compara diferentes perspectivas sobre un mismo problema social.',
        'Relaciona las dimensiones de un problema social con sus posibles causas y consecuencias.',
        'Evalúa la confiabilidad y pertinencia de una fuente de información de acuerdo a la situación.'
      ]
    },
    {
      competencia: 'Interpretación y análisis de perspectivas',
      afirmacion: 'Reconoce y compara perspectivas de diferentes actores y grupos sociales.',
      evidencias: [
        'Identifica sesgos y limitaciones de fuentes y argumentos.',
        'Analiza la vigencia de los derechos fundamentales, los mecanismos de protección y las instituciones relacionadas.',
        'Reconoce y compara diferentes perspectivas frente a una situación social.'
      ]
    },
    {
      competencia: 'Pensamiento reflexivo y sistémico',
      afirmacion: 'Comprende los usos sociales de las ciencias sociales.',
      evidencias: [
        'Analiza y evalúa la pertinencia y solidez de enunciados o discursos.',
        'Establece relaciones entre la información y los datos recopilados.',
        'Evalúa las causas y consecuencias de un hecho o proceso social, político, económico o cultural.'
      ]
    },
    {
      competencia: 'Pensamiento reflexivo y sistémico',
      afirmacion: 'Identifica y analiza problemáticas sociales como resultado de dinámicas históricas, geográficas, políticas, económicas y culturales.',
      evidencias: [
        'Reconoce las causas y consecuencias de un fenómeno y establece su relación con otros fenómenos.',
        'Identifica los intereses y expectativas de diferentes grupos sociales frente a un problema.',
        'Analiza factores que generan desigualdad económica, social, política y cultural.'
      ]
    }
  ],

  // =======================================================================
  // COMPETENCIAS CIUDADANAS (integradas en el eje Ético-Político)
  // Fuente: MEN - Estándares Básicos de Competencias Ciudadanas (2004)
  // =======================================================================
  competenciasCiudadanas: {
    descripcion: 'Las Competencias Ciudadanas están integradas transversalmente en el eje Ético-Político y se desarrollan en tres grandes grupos.',
    grupos: [
      {
        id: 'convivencia-paz',
        nombre: 'Convivencia y paz',
        descripcion: 'Competencias relacionadas con la convivencia pacífica, la resolución de conflictos y la construcción de acuerdos.'
      },
      {
        id: 'participacion-democracia',
        nombre: 'Participación y responsabilidad democrática',
        descripcion: 'Competencias relacionadas con la participación en decisiones colectivas, el ejercicio de la ciudadanía y la comprensión del sistema democrático.'
      },
      {
        id: 'pluralidad-identidad',
        nombre: 'Pluralidad, identidad y valoración de las diferencias',
        descripcion: 'Competencias relacionadas con el reconocimiento y valoración de la diversidad étnica, cultural, de género y de pensamiento.'
      }
    ],
    tiposCompetencia: [
      {
        id: 'cognitivas',
        nombre: 'Cognitivas',
        descripcion: 'Capacidades para realizar procesos mentales que favorecen el ejercicio de la ciudadanía: toma de perspectiva, interpretación de intenciones, generación de opciones, consideración de consecuencias.'
      },
      {
        id: 'emocionales',
        nombre: 'Emocionales',
        descripcion: 'Capacidades para identificar y responder constructivamente ante las emociones propias y ajenas: empatía, identificación de emociones, manejo de la ira.'
      },
      {
        id: 'comunicativas',
        nombre: 'Comunicativas',
        descripcion: 'Capacidades para establecer un diálogo constructivo con los demás: escucha activa, asertividad, argumentación.'
      },
      {
        id: 'integradoras',
        nombre: 'Integradoras',
        descripcion: 'Capacidades que articulan las anteriores en la acción ciudadana: mediación de conflictos, participación en proyectos colectivos.'
      }
    ]
  }

}; // fin EBC_SOCIALES

// Exportar para uso como módulo (si se usa con bundler)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EBC_SOCIALES;
}
