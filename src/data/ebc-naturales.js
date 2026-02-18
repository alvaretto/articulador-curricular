/**
 * Estándares Básicos de Competencias (EBC) - Ciencias Naturales
 * Fuente: Ministerio de Educación Nacional (MEN) Colombia
 * Documento: "Estándares Básicos de Competencias en Ciencias Naturales y Ciencias Sociales" (2004)
 *
 * Estructura por grupos de grados: 1-3, 4-5, 6-7, 8-9, 10-11
 * Ejes temáticos: Entorno Vivo, Entorno Físico, CTS, Me Aproximo al Conocimiento
 */

const EBC_NATURALES = {
  area: 'ciencias-naturales',
  nombre: 'Ciencias Naturales',
  color: '#f59e0b',

  ejes: [
    {
      id: 'entorno-vivo',
      nombre: 'Entorno Vivo',
      color: '#10B981',
      descripcion: 'Estudio de los seres vivos, sus características, relaciones y procesos vitales'
    },
    {
      id: 'entorno-fisico',
      nombre: 'Entorno Físico',
      color: '#3B82F6',
      descripcion: 'Estudio de la materia, la energía, las fuerzas y los fenómenos del universo'
    },
    {
      id: 'cts',
      nombre: 'Ciencia, Tecnología y Sociedad',
      color: '#8B5CF6',
      descripcion: 'Relaciones entre el conocimiento científico, los desarrollos tecnológicos y el contexto social y ambiental'
    },
    {
      id: 'aprox-cientifica',
      nombre: 'Me Aproximo al Conocimiento como Científico Natural',
      color: '#F59E0B',
      descripcion: 'Habilidades y actitudes propias del quehacer científico: observar, preguntar, formular hipótesis, experimentar y comunicar'
    }
  ],

  grupos: {

    // =====================================================================
    // GRADOS 1 - 3
    // =====================================================================
    '1-3': {
      estandarGeneral: 'Me identifico como un ser vivo que comparte algunas características con otros seres vivos y que se relaciona con ellos en un entorno en el que todos nos desarrollamos.',

      estandares: {

        'entorno-vivo': [
          'Describo características de seres vivos y objetos inertes, establezco semejanzas y diferencias entre ellos y los clasifico.',
          'Describo y verifico el efecto de la luz, el sonido, el calor y la humedad sobre algunos seres vivos.',
          'Reconozco en el entorno fenómenos físicos que me afectan y registro mis observaciones.',
          'Identifico condiciones de cambio y de equilibrio en los seres vivos y en los objetos de mi entorno.',
          'Propongo respuestas a mis preguntas y las comparo con las de otras personas.',
          'Reconozco y describo organismos del entorno como animales, plantas, hongos y microorganismos.',
          'Identifico y describo características de los seres vivos (células, tejidos, órganos, sistemas) en organismos del entorno.'
        ],

        'entorno-fisico': [
          'Describo y clasifico objetos según características que percibo con los sentidos (forma, textura, color, olor, sabor).',
          'Propongo respuestas a preguntas sobre mi entorno físico y registro mis observaciones en forma organizada y las comunico.',
          'Identifico y describo características del suelo, el agua y el aire de mi entorno.',
          'Reconozco y describo cambios en los seres vivos y en los objetos de mi entorno.',
          'Identifico y describo el ciclo del agua en el entorno.',
          'Reconozco instrumentos para medir variables del entorno físico (regla, balanza, termómetro) y los uso correctamente.'
        ],

        'cts': [
          'Identifico y describo la flora, la fauna, el agua y el suelo de mi entorno y el impacto que sobre ellos tienen las actividades humanas.',
          'Indago sobre el uso que mi comunidad hace de los recursos naturales.',
          'Reconozco y describo situaciones en las que los seres humanos modifican el entorno.',
          'Participo en actividades grupales para proponer soluciones a problemas del entorno cercano.',
          'Reconozco la importancia del agua, el suelo y el aire para el sostenimiento de la vida.',
          'Identifico objetos tecnológicos de mi entorno cotidiano y los relaciono con las ciencias naturales.'
        ],

        'aprox-cientifica': [
          'Observo mi entorno y formulo preguntas sobre él.',
          'Registro mis observaciones y resultados en forma organizada y los comunico.',
          'Propongo respuestas a mis preguntas y las relaciono con las formuladas por científicos y científicas.',
          'Identifico condiciones que influyen en los resultados de una experiencia y que pueden permanecer constantes o cambiar (variables).',
          'Propongo y verifico necesidades de luz, agua, suelo y aire de plantas y animales.',
          'Comunico el proceso de indagación y los resultados, utilizando lenguaje oral y escrito.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 4 - 5
    // =====================================================================
    '4-5': {
      estandarGeneral: 'Me identifico como un ser vivo que comparte algunas características con otros seres vivos y que se relaciona con ellos en un entorno en el que todos nos desarrollamos.',

      estandares: {

        'entorno-vivo': [
          'Clasifico organismos en grupos taxonómicos de acuerdo con sus características.',
          'Identifico y describo la flora, la fauna, el agua y el suelo de mi entorno.',
          'Describo el ciclo de vida de organismos de mi entorno.',
          'Explico las funciones de los sistemas de órganos de los seres vivos y sus interacciones.',
          'Identifico adaptaciones de los seres vivos en diferentes ecosistemas.',
          'Describo cadenas alimentarias en ecosistemas y explico el flujo de energía en ellas.',
          'Identifico factores de riesgo que afectan la salud de mi comunidad y propongo alternativas de solución.'
        ],

        'entorno-fisico': [
          'Identifico y describo características de los tres estados de la materia y los cambios entre ellos.',
          'Establezco relaciones entre las propiedades de los materiales y su utilización.',
          'Describo y comparo movimientos rectilíneos y curvilíneos de objetos cotidianos.',
          'Identifico y describo fuerzas de mi entorno cotidiano.',
          'Describo propiedades de la luz e identifico fenómenos ópticos básicos (reflexión, refracción).',
          'Identifico la electricidad y el magnetismo como fenómenos físicos y los relaciono con aplicaciones tecnológicas.',
          'Establezco relaciones entre el movimiento de la Tierra y los ciclos día-noche y año.'
        ],

        'cts': [
          'Identifico y uso aportes de algunos científicos colombianos en el desarrollo de la ciencia y la tecnología.',
          'Describo el efecto del sol sobre los seres vivos y relaciono la energía solar con otros tipos de energía.',
          'Identifico y explico situaciones de contaminación del entorno.',
          'Establezco relaciones entre el desarrollo tecnológico y el impacto sobre el entorno natural.',
          'Identifico artefactos tecnológicos de mi entorno y describo el principio físico en que se basan.',
          'Reconozco que los modelos de la ciencia cambian con el tiempo y que varios pueden coexistir.'
        ],

        'aprox-cientifica': [
          'Formulo preguntas sobre objetos, organismos y fenómenos de mi entorno y exploro posibles respuestas.',
          'Propongo y verifico hipótesis sobre características y comportamientos de organismos y objetos.',
          'Realizo mediciones con instrumentos y equipos adecuados a las características y magnitudes de los objetos y fenómenos.',
          'Registro mis observaciones y resultados en forma organizada (en tablas) y las comunico.',
          'Identifico y analizo variables que influyen en los resultados de una experiencia.',
          'Saco conclusiones de mis experiencias y las comunico.',
          'Relaciono mis conclusiones con las presentadas por científicos en textos científicos y en otros medios.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 6 - 7
    // =====================================================================
    '6-7': {
      estandarGeneral: 'Me aproximo al conocimiento como científico natural: me formulo preguntas, planteo y verifico hipótesis, argumento y comunico conclusiones.',

      estandares: {

        'entorno-vivo': [
          'Explico la estructura de la célula y las funciones básicas de sus componentes.',
          'Comparo mecanismos de obtención de energía en seres vivos (respiración aerobia y anaerobia, fotosíntesis).',
          'Explico las funciones de los sistemas de órganos en plantas y animales y las interacciones entre ellos.',
          'Describo y ejemplifico los tipos de reproducción en los seres vivos y establezco sus ventajas y desventajas.',
          'Identifico y describo las adaptaciones de los organismos a los ecosistemas.',
          'Explico las condiciones de nutrición y de salud que favorecen el desarrollo de mi comunidad.',
          'Explico y comparo los procesos de nutrición en seres autótrofos y heterótrofos.',
          'Identifico y describo la fauna y la flora representativa de los principales biomas de Colombia.'
        ],

        'entorno-fisico': [
          'Explico la estructura de la materia en términos de átomos y moléculas.',
          'Describo y explico propiedades físicas y químicas de la materia y sus cambios.',
          'Identifico y describo las fuerzas de atracción entre los cuerpos (gravitacional, eléctrica, magnética).',
          'Explico el movimiento de los cuerpos con base en las leyes de Newton.',
          'Identifico y describo formas de transferencia de calor y su efecto sobre la materia.',
          'Explico la formación de suelos y las características que les permiten sustentar la vida.',
          'Identifico y describo mezclas y sustancias puras y explico procesos de separación de mezclas.',
          'Relaciono la estructura del sistema solar con la dinámica de los planetas y otros cuerpos celestes.'
        ],

        'cts': [
          'Establezco relaciones entre los conocimientos científicos y tecnológicos que se han desarrollado a lo largo de la historia y las características del contexto social en el que se produjeron.',
          'Identifico y justifico la importancia de las ciencias naturales en la solución de problemas de mi entorno.',
          'Descripto el impacto de algunas actividades humanas sobre el suelo, el agua, el aire y los ecosistemas.',
          'Propongo y sustento alternativas para cuidar mi entorno y evitar peligros que lo amenazan.',
          'Reconozco la importancia de la biodiversidad colombiana y expreso razones para preservarla.',
          'Indago sobre adelantos tecnológicos para el manejo de residuos y la reducción de la contaminación.'
        ],

        'aprox-cientifica': [
          'Formulo preguntas específicas sobre una observación, sobre una experiencia o sobre las explicaciones de otros.',
          'Formulo hipótesis con base en el conocimiento cotidiano, teorías y modelos científicos.',
          'Identifico y controlo variables en diseños experimentales.',
          'Registro mis observaciones y resultados utilizando esquemas, gráficas y tablas.',
          'Busco información en diversas fuentes, la selecciono, la organizo e interpreto.',
          'Evalúo la calidad de la información recopilada y doy crédito a las fuentes.',
          'Propongo y sustento respuestas a mis preguntas y las comparo con las de científicos y con las de mis compañeros.',
          'Saco conclusiones de mis experiencias y las comunico con distintos formatos (orales, escritos, gráficos).'
        ]
      }
    },

    // =====================================================================
    // GRADOS 8 - 9
    // =====================================================================
    '8-9': {
      estandarGeneral: 'Desarrollo compromisos personales y sociales a partir del análisis de situaciones del entorno natural que me permiten comprender los procesos físicos, químicos y biológicos que ocurren en la naturaleza.',

      estandares: {

        'entorno-vivo': [
          'Explico la variabilidad en las poblaciones y la diversidad biológica como consecuencia de estrategias de reproducción, cambios genéticos y selección natural.',
          'Describo aplicaciones de la biotecnología en la cotidianidad.',
          'Explico el flujo de materia y energía en los ecosistemas y las consecuencias de las interacciones de los seres vivos con el entorno.',
          'Explico las funciones de las proteínas, los ácidos nucleicos, los lípidos y los carbohidratos en el organismo.',
          'Explico la transmisión del impulso nervioso y los efectos de drogas y sustancias psicoactivas en el sistema nervioso.',
          'Describo y explico los ciclos biológicos de los organismos y los eventos de desarrollo.',
          'Relaciono la dieta de las personas con su estado de salud, sus hábitos y el entorno.'
        ],

        'entorno-fisico': [
          'Realizo cálculos cuantitativos de situaciones cotidianas que involucran cambios físicos y/o químicos de la materia.',
          'Identifico y explico los cambios químicos en situaciones cotidianas y describo la reacción química que los explica.',
          'Identifico y describo situaciones donde se presentan los tres estados de la materia y sus cambios.',
          'Relaciono masa, peso, aceleración y fuerza en situaciones de movimiento de cuerpos.',
          'Explico el principio de conservación de la energía en sistemas mecánicos, eléctricos y térmicos.',
          'Explico la estructura atómica de la materia y la tabla periódica como herramienta de organización de los elementos.',
          'Identifico y describo los diferentes tipos de energía (mecánica, eléctrica, térmica, química, radiante, nuclear).',
          'Explico la formación del universo, las características del sistema solar y la dinámica de los cuerpos celestes.'
        ],

        'cts': [
          'Relaciono los conocimientos científicos y tecnológicos que se han desarrollado a lo largo de la historia con las características del contexto social, político, económico y cultural en el que se produjeron.',
          'Explico la importancia del desarrollo de criterios propios frente a los dilemas éticos que plantea la ciencia y la tecnología.',
          'Identifico y explico avances tecnológicos para la producción de alimentos, medicamentos y para el cuidado de la salud.',
          'Establezco relaciones entre el origen de los combustibles fósiles, su uso cotidiano y las consecuencias ambientales.',
          'Propongo alternativas para conservar la fauna y flora de mi región.',
          'Identifico y evalúo el impacto de las actividades humanas sobre el clima y la biodiversidad global.'
        ],

        'aprox-cientifica': [
          'Formulo hipótesis y las verifico mediante la selección y aplicación de una metodología adecuada.',
          'Diseño y realizo experimentos y verifico el efecto de modificar diversas variables.',
          'Registro y sistematizo la información proveniente de observaciones y consultas de diferentes fuentes, y comparto los resultados con el grupo de estudio.',
          'Evalúo la calidad de los argumentos propios y ajenos.',
          'Identifico y manejo con cuidado herramientas, instrumentos y sustancias de laboratorio.',
          'Propongo respuestas a mis preguntas y las comparo con las de científicos y con las de mis compañeros.',
          'Establezco diferencias entre descripción, explicación y evidencia.',
          'Analizo críticamente las implicaciones de los hallazgos científicos.'
        ]
      }
    },

    // =====================================================================
    // GRADOS 10 - 11
    // =====================================================================
    '10-11': {
      estandarGeneral: 'Relaciono los conocimientos científicos y tecnológicos con aplicaciones en la vida cotidiana y con el contexto social, político y económico, y asumo compromisos para cuidar el entorno.',

      estandares: {

        'entorno-vivo': [
          'Explico los mecanismos de herencia en términos de los postulados de Mendel y de la estructura del ADN.',
          'Describo y explico los mecanismos de evolución de las especies (selección natural, mutación, deriva génica).',
          'Explico la función de las enzimas como catalizadores de reacciones bioquímicas.',
          'Describo y explico técnicas de ingeniería genética y sus aplicaciones en la producción de alimentos, fármacos y terapias.',
          'Explico los mecanismos de regulación del organismo (homeostasis) y las respuestas al estrés ambiental.',
          'Relaciono la variedad de organismos presentes en la Tierra con los procesos evolutivos.',
          'Argumento ética y científicamente en torno a aplicaciones de la biotecnología (clonación, transgénicos, terapia génica).'
        ],

        'entorno-fisico': [
          'Explico los modelos atómicos que sustentan el desarrollo de la química y la física moderna.',
          'Explico el enlace químico y las propiedades de los compuestos orgánicos e inorgánicos.',
          'Verifico la conservación de la masa en reacciones químicas y establezco relaciones estequiométricas.',
          'Explico las leyes del movimiento de Newton y las aplico en situaciones cotidianas.',
          'Relaciono el trabajo y la energía con las máquinas simples y los sistemas mecánicos.',
          'Explico los principios de la termodinámica y sus aplicaciones en máquinas térmicas.',
          'Describo el comportamiento eléctrico y magnético de la materia y explico principios de electromagnetismo.',
          'Explico la naturaleza ondulatoria de la luz y su comportamiento al interactuar con distintos materiales.',
          'Reconozco aplicaciones de la física moderna (relatividad, física cuántica) en la tecnología actual.'
        ],

        'cts': [
          'Analizo críticamente implicaciones éticas, sociales, económicas y ambientales de desarrollos tecnológicos.',
          'Evalúo el impacto del uso de recursos naturales en el desarrollo económico de Colombia y el mundo.',
          'Justifico la importancia de la ciencia y la tecnología para el desarrollo de la sociedad.',
          'Establezco relaciones entre el modelo energético global y el cambio climático.',
          'Propongo alternativas de producción y consumo sostenibles.',
          'Evalúo críticamente dilemas éticos derivados de la investigación científica (experimentación con seres vivos, uso de datos personales).',
          'Reconozco la contribución de científicos colombianos e iberoamericanos al desarrollo de la ciencia universal.'
        ],

        'aprox-cientifica': [
          'Formulo preguntas de investigación a partir de la observación de fenómenos y consulta de literatura científica.',
          'Diseño y realizo investigaciones para poner a prueba mis explicaciones.',
          'Relaciono mis conclusiones con las presentadas por científicos en textos científicos.',
          'Evalúo la solidez de mis conclusiones y las de otros a partir de criterios lógicos y metodológicos.',
          'Comunico oralmente y por escrito el proceso de investigación y sus resultados, haciendo uso de tablas, gráficas y ecuaciones.',
          'Reconozco que los modelos científicos son aproximaciones que se revisan y que pueden coexistir otros modelos.',
          'Reconozco la importancia del pensamiento crítico y la honestidad intelectual en la construcción del conocimiento científico.'
        ]
      }
    }

  } // fin grupos

}; // fin EBC_NATURALES

// Exportar para uso como módulo (si se usa con bundler)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EBC_NATURALES;
}
