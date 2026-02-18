/**
 * Marco de Referencia ICFES Saber - Ciencias Naturales
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Fuente oficial: Matrices de Referencia y Especificaciones de Prueba
 * Saber 3°, 5°, 9° y Saber 11° - ICFES Colombia
 * Disponible en: https://www.icfes.gov.co/evaluaciones/pruebas-saber/marcos-de-referencia
 *
 * Estructura:
 * - 3 competencias transversales a todas las pruebas
 * - 3 componentes temáticos (Entorno Vivo, Entorno Físico, CTS)
 * - 4 pruebas: Saber 3°, Saber 5°, Saber 9°, Saber 11°
 * - Cada prueba incluye aprendizajes con evidencias y niveles de desempeño
 */

const ICFES_NATURALES = {
  area: 'naturales',
  nombre: 'Ciencias Naturales',

  // Las 3 competencias evaluadas por ICFES en Ciencias Naturales
  competencias: [
    {
      id: 'uso-conocimiento',
      nombre: 'Uso comprensivo del conocimiento científico',
      descripcion: 'Capacidad para comprender y usar conceptos, teorías y modelos de las ciencias naturales en la solución de problemas. Implica reconocer y diferenciar fenómenos, representaciones y preguntas propias de las ciencias naturales.',
    },
    {
      id: 'explicacion',
      nombre: 'Explicación de fenómenos',
      descripcion: 'Capacidad para construir explicaciones y comprender argumentos y modelos que den razón de fenómenos naturales. Implica relacionar conceptos y conocimientos adquiridos con fenómenos que se observan con frecuencia.',
    },
    {
      id: 'indagacion',
      nombre: 'Indagación',
      descripcion: 'Capacidad para plantear preguntas y procedimientos adecuados para buscar, seleccionar, organizar e interpretar información relevante para dar respuesta a esas preguntas. Incluye formular hipótesis, diseñar experimentos y analizar resultados.',
    },
  ],

  // Los 3 componentes evaluados
  componentes: [
    {
      id: 'entorno-vivo',
      nombre: 'Entorno vivo',
      descripcion: 'Abarca el estudio de los seres vivos: su organización celular, funciones vitales (nutrición, reproducción, excreción), relaciones ecológicas, biodiversidad, herencia y evolución. Incluye la comprensión de ecosistemas y las interacciones entre los organismos y su ambiente.',
    },
    {
      id: 'entorno-fisico',
      nombre: 'Entorno físico',
      descripcion: 'Abarca fenómenos físicos y químicos: propiedades de la materia, mezclas y sustancias puras, reacciones químicas, transformación y conservación de la energía, movimiento, fuerza, ondas, electricidad y magnetismo. Incluye también el conocimiento del universo y la Tierra.',
    },
    {
      id: 'cts',
      nombre: 'Ciencia, tecnología y sociedad',
      descripcion: 'Abarca las relaciones entre el conocimiento científico, el desarrollo tecnológico y sus implicaciones sociales y ambientales. Incluye la reflexión sobre el papel de la ciencia en la sociedad, la ética en la investigación y el uso responsable de los recursos naturales.',
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
          id: 'nat-s3-01',
          enunciado: 'Reconoce características de los seres vivos y los diferencia de los objetos sin vida usando criterios observables.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s3-01-e1', enunciado: 'Identifica características de los seres vivos: crecer, reproducirse, alimentarse y responder al entorno.' },
            { id: 'nat-s3-01-e2', enunciado: 'Clasifica objetos y organismos usando criterios como vivo o no vivo, con o sin movimiento propio.' },
            { id: 'nat-s3-01-e3', enunciado: 'Describe cambios que experimentan los seres vivos a lo largo de su ciclo de vida.' },
          ],
        },
        {
          id: 'nat-s3-02',
          enunciado: 'Describe las funciones básicas de los seres vivos (nutrición, reproducción, relación) en animales y plantas del entorno.',
          competencia: 'explicacion',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s3-02-e1', enunciado: 'Explica cómo se alimentan y reproducen algunos animales de su entorno.' },
            { id: 'nat-s3-02-e2', enunciado: 'Describe la función de las partes de una planta (raíz, tallo, hojas, flor, fruto).' },
          ],
        },
        {
          id: 'nat-s3-03',
          enunciado: 'Identifica propiedades de los materiales (dureza, color, textura, flexibilidad) y los agrupa según sus características.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s3-03-e1', enunciado: 'Observa y describe propiedades de materiales del entorno cotidiano.' },
            { id: 'nat-s3-03-e2', enunciado: 'Agrupa materiales según propiedades comunes y justifica el criterio de clasificación.' },
          ],
        },
        {
          id: 'nat-s3-04',
          enunciado: 'Describe cambios observables en los materiales cuando se mezclan, calientan o enfrían.',
          competencia: 'explicacion',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s3-04-e1', enunciado: 'Observa y describe qué sucede cuando se mezclan agua con sal o agua con aceite.' },
            { id: 'nat-s3-04-e2', enunciado: 'Reconoce cambios de estado (sólido, líquido, gaseoso) en situaciones cotidianas.' },
          ],
        },
        {
          id: 'nat-s3-05',
          enunciado: 'Formula preguntas sobre fenómenos naturales observables y propone formas sencillas de explorarlos.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s3-05-e1', enunciado: 'Plantea preguntas que pueden responderse mediante observación o experimentación simple.' },
            { id: 'nat-s3-05-e2', enunciado: 'Propone pasos sencillos para responder una pregunta sobre el mundo natural.' },
          ],
        },
        {
          id: 'nat-s3-06',
          enunciado: 'Reconoce prácticas cotidianas que protegen o deterioran el ambiente y los seres vivos del entorno cercano.',
          competencia: 'uso-conocimiento',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s3-06-e1', enunciado: 'Identifica acciones humanas que contaminan el agua, el suelo o el aire.' },
            { id: 'nat-s3-06-e2', enunciado: 'Propone acciones concretas para cuidar los recursos naturales de su entorno.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No diferencia seres vivos de objetos inertes ni identifica propiedades básicas de los materiales.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#f59e0b',
          descripcion: 'El estudiante reconoce características de los seres vivos, identifica propiedades observables de los materiales y distingue entre prácticas que cuidan o deterioran el ambiente.',
          aprendizajesEsperados: ['nat-s3-01', 'nat-s3-03', 'nat-s3-06'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#22c55e',
          descripcion: 'El estudiante describe funciones de los seres vivos, explica cambios en los materiales y formula preguntas simples sobre fenómenos naturales.',
          aprendizajesEsperados: ['nat-s3-01', 'nat-s3-02', 'nat-s3-03', 'nat-s3-04', 'nat-s3-06'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3b82f6',
          descripcion: 'El estudiante clasifica organismos y materiales usando múltiples criterios, explica cambios de estado, propone formas de explorar preguntas científicas y argumenta sobre el cuidado del ambiente.',
          aprendizajesEsperados: ['nat-s3-01', 'nat-s3-02', 'nat-s3-03', 'nat-s3-04', 'nat-s3-05', 'nat-s3-06'],
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
          id: 'nat-s5-01',
          enunciado: 'Explica las funciones de los sistemas del cuerpo humano (digestivo, respiratorio, circulatorio, excretor) y las relaciones entre ellos.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s5-01-e1', enunciado: 'Describe el recorrido de los alimentos en el sistema digestivo e identifica los órganos involucrados.' },
            { id: 'nat-s5-01-e2', enunciado: 'Explica cómo el sistema circulatorio transporta nutrientes y oxígeno a las células.' },
            { id: 'nat-s5-01-e3', enunciado: 'Establece relaciones entre los sistemas del cuerpo para mantener el equilibrio interno.' },
          ],
        },
        {
          id: 'nat-s5-02',
          enunciado: 'Describe las relaciones entre los seres vivos en un ecosistema (cadenas y redes tróficas, depredación, simbiosis) y las relaciona con el equilibrio ecológico.',
          competencia: 'explicacion',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s5-02-e1', enunciado: 'Construye cadenas alimentarias identificando productores, consumidores y descomponedores.' },
            { id: 'nat-s5-02-e2', enunciado: 'Explica qué sucede en un ecosistema cuando desaparece uno de sus organismos.' },
          ],
        },
        {
          id: 'nat-s5-03',
          enunciado: 'Identifica y clasifica mezclas y sustancias puras, y describe métodos para separar mezclas.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s5-03-e1', enunciado: 'Diferencia entre mezclas homogéneas y heterogéneas con ejemplos del entorno.' },
            { id: 'nat-s5-03-e2', enunciado: 'Selecciona el método de separación adecuado (filtración, decantación, evaporación) según el tipo de mezcla.' },
            { id: 'nat-s5-03-e3', enunciado: 'Relaciona las propiedades de los materiales con los métodos usados para separarlos.' },
          ],
        },
        {
          id: 'nat-s5-04',
          enunciado: 'Describe las transformaciones de la energía en sistemas cotidianos y reconoce que la energía se conserva aunque cambie de forma.',
          competencia: 'explicacion',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s5-04-e1', enunciado: 'Identifica transformaciones de energía en dispositivos cotidianos (bombilla, estufa, bicicleta).' },
            { id: 'nat-s5-04-e2', enunciado: 'Explica que la energía no se crea ni se destruye, sino que se transforma.' },
          ],
        },
        {
          id: 'nat-s5-05',
          enunciado: 'Describe el movimiento de los cuerpos usando conceptos de velocidad, dirección y trayectoria.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s5-05-e1', enunciado: 'Describe el movimiento de un objeto indicando su velocidad y dirección.' },
            { id: 'nat-s5-05-e2', enunciado: 'Compara movimientos de diferentes cuerpos y los clasifica como rápidos o lentos, rectilíneos o curvos.' },
          ],
        },
        {
          id: 'nat-s5-06',
          enunciado: 'Diseña y realiza observaciones sistemáticas y experimentos sencillos para responder preguntas sobre fenómenos naturales.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s5-06-e1', enunciado: 'Formula una hipótesis comprobable sobre un fenómeno natural observado.' },
            { id: 'nat-s5-06-e2', enunciado: 'Registra datos de una observación o experimento usando tablas sencillas.' },
            { id: 'nat-s5-06-e3', enunciado: 'Saca conclusiones a partir de los datos recolectados y las compara con su hipótesis.' },
          ],
        },
        {
          id: 'nat-s5-07',
          enunciado: 'Analiza el impacto de las actividades humanas en los ecosistemas y propone acciones para reducirlo.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s5-07-e1', enunciado: 'Identifica consecuencias de la deforestación, la contaminación del agua y la caza indiscriminada.' },
            { id: 'nat-s5-07-e2', enunciado: 'Propone medidas concretas para mitigar el impacto ambiental de las actividades humanas.' },
          ],
        },
        {
          id: 'nat-s5-08',
          enunciado: 'Reconoce la importancia de los avances científicos y tecnológicos en el mejoramiento de la calidad de vida y sus posibles efectos negativos.',
          competencia: 'uso-conocimiento',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s5-08-e1', enunciado: 'Identifica inventos o descubrimientos científicos que han mejorado la salud o la alimentación humana.' },
            { id: 'nat-s5-08-e2', enunciado: 'Reconoce efectos negativos de algunas tecnologías sobre el medio ambiente.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No identifica los órganos del cuerpo humano ni clasifica mezclas por sus propiedades.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#f59e0b',
          descripcion: 'El estudiante describe funciones básicas de los sistemas del cuerpo, construye cadenas alimentarias sencillas y diferencia mezclas homogéneas de heterogéneas.',
          aprendizajesEsperados: ['nat-s5-01', 'nat-s5-02', 'nat-s5-03'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#22c55e',
          descripcion: 'El estudiante explica relaciones entre sistemas del cuerpo humano, identifica transformaciones de energía, selecciona métodos de separación de mezclas y formula hipótesis simples.',
          aprendizajesEsperados: ['nat-s5-01', 'nat-s5-02', 'nat-s5-03', 'nat-s5-04', 'nat-s5-06', 'nat-s5-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3b82f6',
          descripcion: 'El estudiante explica el equilibrio ecosistémico, describe transformaciones de energía, diseña experimentos para comprobar hipótesis y analiza críticamente el impacto de la tecnología en el ambiente.',
          aprendizajesEsperados: ['nat-s5-01', 'nat-s5-02', 'nat-s5-03', 'nat-s5-04', 'nat-s5-05', 'nat-s5-06', 'nat-s5-07', 'nat-s5-08'],
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
          id: 'nat-s9-01',
          enunciado: 'Analiza la estructura y función de los niveles de organización biológica, desde la célula hasta el ecosistema.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s9-01-e1', enunciado: 'Describe las funciones de los organelos celulares y los relaciona con las funciones vitales de la célula.' },
            { id: 'nat-s9-01-e2', enunciado: 'Establece diferencias entre células procariotas y eucariotas, y entre células animales y vegetales.' },
            { id: 'nat-s9-01-e3', enunciado: 'Explica cómo se integran célula, tejido, órgano, sistema y organismo en la organización de los seres vivos.' },
          ],
        },
        {
          id: 'nat-s9-02',
          enunciado: 'Explica los mecanismos de herencia genética y los relaciona con la variabilidad de los seres vivos.',
          competencia: 'explicacion',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s9-02-e1', enunciado: 'Describe el papel del ADN como portador de la información genética.' },
            { id: 'nat-s9-02-e2', enunciado: 'Aplica las leyes de Mendel para predecir la probabilidad de que un rasgo aparezca en la descendencia.' },
            { id: 'nat-s9-02-e3', enunciado: 'Diferencia entre mutación, variabilidad genética y adaptación en el contexto de la evolución.' },
          ],
        },
        {
          id: 'nat-s9-03',
          enunciado: 'Describe y compara los procesos de fotosíntesis y respiración celular como transformaciones de energía en los seres vivos.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s9-03-e1', enunciado: 'Explica la fotosíntesis como proceso de captación de energía solar y producción de materia orgánica.' },
            { id: 'nat-s9-03-e2', enunciado: 'Describe la respiración celular como proceso de obtención de energía a partir de la glucosa.' },
          ],
        },
        {
          id: 'nat-s9-04',
          enunciado: 'Explica fenómenos relacionados con la transformación y conservación de la energía en sistemas físicos.',
          competencia: 'explicacion',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s9-04-e1', enunciado: 'Aplica la ley de conservación de la energía a situaciones cotidianas (caída libre, resortes, circuitos eléctricos).' },
            { id: 'nat-s9-04-e2', enunciado: 'Diferencia entre energía cinética y energía potencial e identifica conversiones entre ellas.' },
            { id: 'nat-s9-04-e3', enunciado: 'Explica el papel del calor como forma de transferencia de energía entre sistemas.' },
          ],
        },
        {
          id: 'nat-s9-05',
          enunciado: 'Describe las propiedades de las ondas y explica fenómenos cotidianos de luz y sonido.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s9-05-e1', enunciado: 'Identifica las características de las ondas: amplitud, frecuencia, longitud de onda y velocidad.' },
            { id: 'nat-s9-05-e2', enunciado: 'Explica fenómenos como la reflexión, la refracción y la difracción de la luz con ejemplos del entorno.' },
          ],
        },
        {
          id: 'nat-s9-06',
          enunciado: 'Explica la estructura de la materia usando modelos atómicos y describe los tipos de enlace químico.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s9-06-e1', enunciado: 'Describe la evolución de los modelos atómicos y sus aportes al conocimiento de la materia.' },
            { id: 'nat-s9-06-e2', enunciado: 'Diferencia compuestos iónicos y covalentes por sus propiedades y tipos de enlace.' },
            { id: 'nat-s9-06-e3', enunciado: 'Usa la tabla periódica para clasificar elementos y predecir propiedades de compuestos simples.' },
          ],
        },
        {
          id: 'nat-s9-07',
          enunciado: 'Reconoce y describe reacciones químicas identificando reactivos, productos, tipos de reacción y factores que afectan la velocidad.',
          competencia: 'explicacion',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s9-07-e1', enunciado: 'Identifica reactivos y productos en ecuaciones químicas sencillas y las balancea por tanteo.' },
            { id: 'nat-s9-07-e2', enunciado: 'Clasifica reacciones químicas (síntesis, descomposición, sustitución, doble sustitución) con ejemplos.' },
          ],
        },
        {
          id: 'nat-s9-08',
          enunciado: 'Diseña experimentos para verificar hipótesis sobre fenómenos naturales, controla variables y analiza resultados.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s9-08-e1', enunciado: 'Formula hipótesis verificables e identifica las variables independiente, dependiente y de control.' },
            { id: 'nat-s9-08-e2', enunciado: 'Diseña un procedimiento experimental coherente para probar una hipótesis.' },
            { id: 'nat-s9-08-e3', enunciado: 'Analiza datos experimentales, saca conclusiones y evalúa si la hipótesis fue confirmada o refutada.' },
          ],
        },
        {
          id: 'nat-s9-09',
          enunciado: 'Evalúa el impacto de los avances científicos y tecnológicos en el ambiente, la salud y la sociedad, reconociendo dilemas éticos.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s9-09-e1', enunciado: 'Analiza ventajas y desventajas de aplicaciones tecnológicas como los transgénicos, las energías alternativas o los antibióticos.' },
            { id: 'nat-s9-09-e2', enunciado: 'Reconoce dilemas éticos en la investigación científica y los argumenta desde diferentes perspectivas.' },
          ],
        },
        {
          id: 'nat-s9-10',
          enunciado: 'Analiza problemas ambientales globales (cambio climático, pérdida de biodiversidad, contaminación) y propone soluciones fundamentadas.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s9-10-e1', enunciado: 'Explica las causas y consecuencias del cambio climático usando conceptos científicos.' },
            { id: 'nat-s9-10-e2', enunciado: 'Propone acciones individuales y colectivas para mitigar problemas ambientales globales y las sustenta con evidencia.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [100, 226],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No describe la función de los organelos celulares ni identifica los reactivos y productos en una reacción química simple.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [226, 295],
          color: '#f59e0b',
          descripcion: 'El estudiante describe la organización celular, diferencia fotosíntesis y respiración, identifica transformaciones de energía en situaciones simples y clasifica reacciones químicas básicas.',
          aprendizajesEsperados: ['nat-s9-01', 'nat-s9-03', 'nat-s9-04', 'nat-s9-07'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [295, 380],
          color: '#22c55e',
          descripcion: 'El estudiante aplica las leyes de Mendel, explica fenómenos de luz y sonido, describe la estructura atómica, diseña experimentos controlados y analiza el impacto de la tecnología en la sociedad.',
          aprendizajesEsperados: ['nat-s9-01', 'nat-s9-02', 'nat-s9-03', 'nat-s9-04', 'nat-s9-05', 'nat-s9-07', 'nat-s9-08', 'nat-s9-09'],
        },
        {
          nombre: 'Avanzado',
          rango: [380, 500],
          color: '#3b82f6',
          descripcion: 'El estudiante explica mecanismos de herencia y evolución, usa la tabla periódica para predecir propiedades, balancea ecuaciones químicas, evalúa críticamente dilemas éticos científicos y propone soluciones argumentadas a problemas ambientales globales.',
          aprendizajesEsperados: ['nat-s9-01', 'nat-s9-02', 'nat-s9-03', 'nat-s9-04', 'nat-s9-05', 'nat-s9-06', 'nat-s9-07', 'nat-s9-08', 'nat-s9-09', 'nat-s9-10'],
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
          id: 'nat-s11-01',
          enunciado: 'Explica los mecanismos de regulación génica y su relación con la expresión del fenotipo en condiciones normales y patológicas.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s11-01-e1', enunciado: 'Describe el proceso de transcripción y traducción del ADN y su relación con la síntesis de proteínas.' },
            { id: 'nat-s11-01-e2', enunciado: 'Explica cómo las mutaciones génicas pueden causar enfermedades hereditarias.' },
            { id: 'nat-s11-01-e3', enunciado: 'Relaciona la regulación génica con procesos de diferenciación celular y desarrollo embrionario.' },
          ],
        },
        {
          id: 'nat-s11-02',
          enunciado: 'Analiza los mecanismos evolutivos (selección natural, deriva génica, flujo génico) y los usa para explicar la biodiversidad actual.',
          competencia: 'explicacion',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s11-02-e1', enunciado: 'Explica cómo la selección natural actúa sobre la variación genética en una población.' },
            { id: 'nat-s11-02-e2', enunciado: 'Interpreta árboles filogenéticos para establecer relaciones evolutivas entre organismos.' },
          ],
        },
        {
          id: 'nat-s11-03',
          enunciado: 'Aplica los principios de la termodinámica para analizar transformaciones de energía en sistemas biológicos y físicos.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s11-03-e1', enunciado: 'Aplica el primer principio de la termodinámica (conservación de energía) en situaciones concretas.' },
            { id: 'nat-s11-03-e2', enunciado: 'Explica el segundo principio de la termodinámica en términos de entropía y dirección de los procesos espontáneos.' },
            { id: 'nat-s11-03-e3', enunciado: 'Calcula trabajo y calor en ciclos termodinámicos sencillos.' },
          ],
        },
        {
          id: 'nat-s11-04',
          enunciado: 'Explica fenómenos eléctricos y magnéticos usando los conceptos de campo eléctrico, campo magnético y fuerza electromagnética.',
          competencia: 'explicacion',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s11-04-e1', enunciado: 'Describe el campo eléctrico generado por cargas eléctricas y calcula la fuerza entre ellas usando la ley de Coulomb.' },
            { id: 'nat-s11-04-e2', enunciado: 'Explica el electromagnetismo y sus aplicaciones (motores, generadores, transformadores).' },
          ],
        },
        {
          id: 'nat-s11-05',
          enunciado: 'Describe los equilibrios químicos y los factores que los modifican, y los relaciona con procesos industriales y biológicos.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s11-05-e1', enunciado: 'Aplica el principio de Le Chatelier para predecir el efecto de cambios en concentración, temperatura o presión sobre un equilibrio.' },
            { id: 'nat-s11-05-e2', enunciado: 'Relaciona conceptos de pH, ácidos, bases y soluciones tampón con procesos biológicos (digestión, respiración).' },
            { id: 'nat-s11-05-e3', enunciado: 'Describe procesos industriales que usan el equilibrio químico, como la síntesis del amoníaco (proceso Haber).' },
          ],
        },
        {
          id: 'nat-s11-06',
          enunciado: 'Diseña y evalúa investigaciones científicas, identificando fuentes de error y limitaciones metodológicas.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s11-06-e1', enunciado: 'Formula preguntas de investigación y diseña metodologías que permitan responderlas con rigor.' },
            { id: 'nat-s11-06-e2', enunciado: 'Identifica fuentes de error sistemático y aleatorio en un experimento y propone correcciones.' },
            { id: 'nat-s11-06-e3', enunciado: 'Evalúa la validez y confiabilidad de resultados experimentales y discute sus limitaciones.' },
          ],
        },
        {
          id: 'nat-s11-07',
          enunciado: 'Analiza críticamente la relación entre ciencia, tecnología, sociedad y ambiente en el contexto de problemas globales contemporáneos.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s11-07-e1', enunciado: 'Evalúa las implicaciones éticas, sociales y ambientales de tecnologías emergentes (biotecnología, nanotecnología, energía nuclear).' },
            { id: 'nat-s11-07-e2', enunciado: 'Argumenta posiciones sobre problemas científico-ambientales globales usando evidencia y múltiples perspectivas.' },
          ],
        },
        {
          id: 'nat-s11-08',
          enunciado: 'Interpreta datos experimentales usando herramientas estadísticas y matemáticas, y construye modelos que expliquen fenómenos naturales.',
          competencia: 'indagacion',
          componente: 'cts',
          evidencias: [
            { id: 'nat-s11-08-e1', enunciado: 'Representa e interpreta datos experimentales usando gráficas, tablas y medidas estadísticas.' },
            { id: 'nat-s11-08-e2', enunciado: 'Construye modelos matemáticos o conceptuales para explicar y predecir fenómenos naturales.' },
          ],
        },
        {
          id: 'nat-s11-09',
          enunciado: 'Explica la estructura y evolución del universo, el sistema solar y los fenómenos geológicos de la Tierra.',
          competencia: 'uso-conocimiento',
          componente: 'entorno-fisico',
          evidencias: [
            { id: 'nat-s11-09-e1', enunciado: 'Describe las etapas de formación y evolución del universo desde el Big Bang hasta la actualidad.' },
            { id: 'nat-s11-09-e2', enunciado: 'Explica fenómenos geológicos (tectónica de placas, terremotos, vulcanismo) usando modelos científicos.' },
          ],
        },
        {
          id: 'nat-s11-10',
          enunciado: 'Analiza las interacciones entre los ciclos biogeoquímicos (carbono, nitrógeno, agua) y los efectos del cambio climático sobre los ecosistemas.',
          competencia: 'explicacion',
          componente: 'entorno-vivo',
          evidencias: [
            { id: 'nat-s11-10-e1', enunciado: 'Describe los ciclos del carbono, nitrógeno y agua, y su importancia para el mantenimiento de los ecosistemas.' },
            { id: 'nat-s11-10-e2', enunciado: 'Explica cómo la alteración de los ciclos biogeoquímicos por actividades humanas contribuye al cambio climático.' },
          ],
        },
      ],

      niveles: [
        {
          nombre: 'Insuficiente',
          rango: [0, 35],
          color: '#ef4444',
          descripcion: 'El estudiante no supera las preguntas de menor complejidad. No describe la síntesis de proteínas ni identifica transformaciones de energía en sistemas termodinámicos simples.',
          aprendizajesEsperados: [],
        },
        {
          nombre: 'Mínimo',
          rango: [36, 50],
          color: '#f59e0b',
          descripcion: 'El estudiante describe procesos de transcripción y traducción, aplica la conservación de energía en situaciones directas y reconoce factores que afectan los equilibrios químicos.',
          aprendizajesEsperados: ['nat-s11-01', 'nat-s11-03', 'nat-s11-05'],
        },
        {
          nombre: 'Satisfactorio',
          rango: [51, 70],
          color: '#22c55e',
          descripcion: 'El estudiante explica mecanismos evolutivos, aplica principios termodinámicos, describe fenómenos electromagnéticos, diseña investigaciones científicas y analiza implicaciones éticas de la tecnología.',
          aprendizajesEsperados: ['nat-s11-01', 'nat-s11-02', 'nat-s11-03', 'nat-s11-04', 'nat-s11-05', 'nat-s11-06', 'nat-s11-07'],
        },
        {
          nombre: 'Avanzado',
          rango: [71, 100],
          color: '#3b82f6',
          descripcion: 'El estudiante integra conceptos de genética, evolución, termodinámica y química para explicar sistemas complejos. Interpreta datos con herramientas estadísticas, explica la evolución del universo y analiza críticamente los efectos del cambio climático sobre los ciclos biogeoquímicos.',
          aprendizajesEsperados: ['nat-s11-01', 'nat-s11-02', 'nat-s11-03', 'nat-s11-04', 'nat-s11-05', 'nat-s11-06', 'nat-s11-07', 'nat-s11-08', 'nat-s11-09', 'nat-s11-10'],
        },
      ],
    },
  },
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ICFES_NATURALES }
}
