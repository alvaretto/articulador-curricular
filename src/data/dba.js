/**
 * Derechos Básicos de Aprendizaje (DBA) - MEN Colombia
 * Fuente: Ministerio de Educación Nacional, versiones 2016
 * Áreas: Matemáticas, Lenguaje, Ciencias Naturales, Ciencias Sociales
 * Grados: 1 a 11
 *
 * Nota: Los DBA son enunciados que señalan hitos de aprendizaje
 * esperados al finalizar cada grado escolar.
 */

const DBA = {

  // ================================================================
  // MATEMÁTICAS
  // Fuente: MEN, DBA Matemáticas V.2 (2016)
  // ================================================================
  matematicas: {
    '1': [
      'Cuenta colecciones de objetos en situaciones cotidianas y representa cantidades con números hasta el 99.',
      'Reconoce y usa la suma y la resta como operaciones que responden a situaciones de juntar/separar cantidades, y las representa con símbolos matemáticos.',
      'Establece comparaciones (mayor que, menor que, igual que) entre cantidades usando material concreto y representaciones gráficas.',
      'Describe y reproduce patrones con figuras y con números para predecir los elementos siguientes.',
      'Identifica y describe atributos de figuras planas (círculo, cuadrado, triángulo, rectángulo) y cuerpos sólidos del entorno.',
      'Compara y ordena objetos usando magnitudes como longitud, peso y capacidad, utilizando unidades no convencionales.',
      'Lee y registra datos cualitativos en pictogramas para responder preguntas sobre ellos.',
    ],
    '2': [
      'Lee, escribe y ordena números naturales hasta el 999, comprendiendo el valor posicional de cada cifra.',
      'Utiliza las operaciones de adición y sustracción para resolver y formular problemas en situaciones cotidianas, verificando sus resultados.',
      'Identifica regularidades y patrones numéricos, y utiliza la multiplicación como suma repetida.',
      'Reconoce y describe figuras planas, cuerpos geométricos y sus propiedades (lados, vértices, ángulos) en objetos del entorno.',
      'Mide longitudes y capacidades utilizando unidades de medida no convencionales y convencionales (metro, centímetro).',
      'Interpreta datos presentados en tablas y gráficas de barras sencillas para responder preguntas.',
      'Describe e identifica trayectorias y posiciones relativas de objetos en el espacio usando términos como izquierda, derecha, arriba, abajo.',
    ],
    '3': [
      'Lee, escribe y ordena números naturales hasta el 99.999, reconociendo el valor posicional de sus cifras.',
      'Resuelve y formula situaciones de adición, sustracción, multiplicación y división, comprendiendo la relación entre estas operaciones.',
      'Identifica y utiliza fracciones comunes (medio, tercio, cuarto) para representar partes de un todo en contextos cotidianos.',
      'Describe y construye secuencias numéricas y geométricas, identificando la regla de formación.',
      'Clasifica y describe figuras planas y cuerpos geométricos según sus propiedades (número de lados, ángulos, caras).',
      'Estima, mide y compara longitudes, masas, capacidades y tiempos usando unidades del Sistema Internacional.',
      'Recopila, organiza e interpreta datos en tablas de frecuencia y gráficas de barras para dar respuesta a preguntas.',
    ],
    '4': [
      'Reconoce el valor posicional de cifras en números de hasta seis dígitos y realiza operaciones básicas con ellos.',
      'Resuelve y formula problemas que involucran las cuatro operaciones básicas en contextos cotidianos, explicando sus procedimientos.',
      'Comprende las fracciones como parte de un todo y como razón, y realiza comparaciones y ordenamientos entre fracciones.',
      'Identifica y usa propiedades de la adición y la multiplicación (conmutativa, asociativa, distributiva) para simplificar cálculos.',
      'Clasifica y describe ángulos, polígonos y cuerpos geométricos según sus propiedades, e identifica simetrías en figuras planas.',
      'Convierte unidades de longitud, masa y capacidad dentro del Sistema Métrico, y resuelve problemas con tiempo y dinero.',
      'Interpreta gráficas de barras y circulares, y calcula el promedio de un conjunto de datos.',
    ],
    '5': [
      'Lee, escribe y opera números naturales, decimales y fracciones, reconociendo sus relaciones y representaciones en la recta numérica.',
      'Resuelve y formula problemas que involucran operaciones con números naturales, fracciones y decimales, justificando los procedimientos utilizados.',
      'Identifica y usa porcentajes en situaciones cotidianas (descuentos, intereses) relacionándolos con fracciones y decimales.',
      'Reconoce y predice patrones numéricos y geométricos, y los representa con expresiones simbólicas sencillas.',
      'Calcula perímetros y áreas de figuras planas y las aplica en la resolución de problemas.',
      'Identifica y describe las características de las figuras tridimensionales (prismas, pirámides, cilindros, conos, esferas).',
      'Recopila, organiza y representa datos estadísticos, calcula moda, mediana y promedio, e interpreta los resultados.',
    ],
    '6': [
      'Comprende la estructura del sistema numérico de los enteros, sus operaciones y propiedades, y los usa en la solución de problemas.',
      'Opera con fracciones y números decimales para resolver problemas en diferentes contextos, justificando los procedimientos.',
      'Identifica y aplica razones, proporciones y porcentajes en situaciones cotidianas como escalas, mezclas y descuentos.',
      'Reconoce situaciones de variación directa e inversa y las representa con tablas, gráficas y expresiones algebraicas sencillas.',
      'Calcula áreas y perímetros de polígonos y las aplica en la resolución de situaciones problema.',
      'Reconoce y describe transformaciones de figuras en el plano (traslaciones, rotaciones, reflexiones).',
      'Recopila y organiza datos, los representa en gráficas estadísticas y los interpreta usando medidas de tendencia central.',
    ],
    '7': [
      'Resuelve y formula problemas que involucran operaciones con números enteros y racionales, comprendiendo sus propiedades.',
      'Comprende y usa proporciones, razones y variación proporcional para resolver situaciones en contextos reales.',
      'Plantea y resuelve ecuaciones de primer grado con una variable para modelar situaciones cotidianas.',
      'Representa, interpreta y usa funciones lineales expresadas en tablas, gráficas y fórmulas.',
      'Calcula el área y el volumen de figuras tridimensionales básicas (prismas, cilindros) y los aplica en problemas contextualizados.',
      'Comprende y aplica conceptos básicos de probabilidad para estimar la posibilidad de eventos simples.',
      'Analiza e interpreta datos estadísticos usando medidas de tendencia central y de dispersión básicas.',
    ],
    '8': [
      'Construye representaciones, argumentos y ejemplos de propiedades de los números racionales y no racionales.',
      'Propone y desarrolla expresiones algebraicas en el conjunto de los números reales y utiliza las propiedades de la igualdad y de orden para determinar el conjunto solución de ecuaciones e inecuaciones.',
      'Comprende y aplica el Teorema de Pitágoras para resolver situaciones problema en contextos geométricos y cotidianos.',
      'Reconoce y describe funciones de proporcionalidad directa e inversa, y las representa en el plano cartesiano.',
      'Calcula el área y el volumen de figuras tridimensionales (pirámides, conos, esferas) y los aplica en situaciones reales.',
      'Comprende la semejanza de figuras y la aplica para resolver problemas de escala, proporcionalidad y trigonometría básica.',
      'Interpreta y analiza datos estadísticos usando tablas de distribución de frecuencias y representa la información en gráficas adecuadas.',
    ],
    '9': [
      'Utiliza expresiones numéricas, algebraicas o gráficas para hacer descripciones de situaciones concretas y tomar decisiones con base en su interpretación.',
      'Resuelve sistemas de ecuaciones lineales y los utiliza para representar situaciones de la vida cotidiana.',
      'Comprende el concepto de función como una relación entre variables y analiza sus propiedades en representaciones tabulares, gráficas y algebraicas.',
      'Aplica razones trigonométricas (seno, coseno, tangente) en triángulos rectángulos para resolver problemas de medición indirecta.',
      'Identifica y describe cónicas (circunferencia, elipse, parábola, hipérbola) como lugares geométricos y en sus ecuaciones.',
      'Comprende y calcula probabilidades de eventos compuestos usando reglas de adición y multiplicación.',
      'Analiza e interpreta datos estadísticos usando medidas de dispersión (varianza y desviación estándar) para tomar decisiones.',
    ],
    '10': [
      'Comprende el concepto de función (polinomial, exponencial, logarítmica, trigonométrica) y analiza sus propiedades para modelar situaciones reales.',
      'Opera con polinomios y factoriza expresiones algebraicas para resolver ecuaciones y simplificar expresiones.',
      'Aplica límites y la idea intuitiva de continuidad para describir el comportamiento de funciones en un punto o en el infinito.',
      'Resuelve ecuaciones trigonométricas e identidades para modelar fenómenos periódicos.',
      'Usa el concepto de derivada como razón de cambio para analizar el comportamiento de funciones (crecimiento, decrecimiento, extremos).',
      'Comprende y aplica la combinatoria y el conteo (permutaciones, combinaciones) en el cálculo de probabilidades.',
      'Diseña, recolecta y analiza datos estadísticos, usando distribuciones de probabilidad para tomar decisiones informadas.',
    ],
    '11': [
      'Comprende el concepto de integral definida como área bajo una curva y lo usa para resolver situaciones de medida y acumulación.',
      'Aplica derivadas e integrales en la modelación y solución de problemas del mundo real (física, economía, biología).',
      'Comprende y aplica sucesiones y series numéricas (aritméticas, geométricas) en situaciones de modelación.',
      'Resuelve problemas de geometría analítica usando ecuaciones de cónicas y sus propiedades.',
      'Comprende y aplica distribuciones de probabilidad (binomial, normal) para modelar y tomar decisiones en situaciones de incertidumbre.',
      'Diseña y ejecuta proyectos de investigación estadística que incluyan recolección, análisis e interpretación de datos con inferencia básica.',
      'Valora el papel de las matemáticas en el desarrollo científico, tecnológico y social, y las usa como herramienta de pensamiento crítico.',
    ],
  },

  // ================================================================
  // LENGUAJE
  // Fuente: MEN, DBA Lenguaje V.2 (2016)
  // ================================================================
  lenguaje: {
    '1': [
      'Reconoce la función comunicativa de la escritura en diferentes tipos de textos de su entorno (carteles, avisos, libros, revistas).',
      'Lee textos literarios breves (cuentos, poemas, rondas) y expresa sus impresiones sobre ellos de manera oral.',
      'Escribe palabras, oraciones y textos cortos con sentido completo, usando las convenciones del sistema de escritura alfabético.',
      'Participa en conversaciones y exposiciones orales, respetando turnos y usando un vocabulario adecuado al contexto.',
      'Identifica personajes, acciones y lugares en textos narrativos escuchados o leídos.',
      'Reconoce letras, sílabas y palabras como unidades del sistema escrito y entiende la direccionalidad de la escritura.',
    ],
    '2': [
      'Lee textos literarios (cuentos, fábulas, poemas) y da cuenta de los elementos básicos que los componen (personajes, lugar, tiempo, acciones).',
      'Produce textos escritos cortos (narración, descripción) que responden a una intención comunicativa, usando signos de puntuación básicos.',
      'Expresa de forma oral sus ideas, sentimientos e impresiones sobre textos leídos o escuchados, con coherencia y fluidez.',
      'Identifica la estructura básica de textos informativos (inicio, desarrollo, cierre) y los diferencia de textos literarios.',
      'Usa el diccionario para buscar el significado de palabras desconocidas y amplía su vocabulario.',
      'Reconoce que los textos tienen un propósito (informar, entretener, persuadir) y lo identifica en textos sencillos.',
    ],
    '3': [
      'Lee con fluidez y comprensión textos de diferentes tipos (narrativos, informativos, descriptivos) y los relaciona con sus experiencias.',
      'Produce textos escritos con coherencia y cohesión, usando conectores, signos de puntuación y mayúsculas de manera apropiada.',
      'Identifica la intención comunicativa y el punto de vista del autor en diferentes tipos de textos.',
      'Participa en exposiciones y debates orales, organizando sus ideas con claridad y escuchando respetuosamente a los demás.',
      'Comprende el significado de palabras en contexto y reconoce el uso de sinónimos, antónimos y familias de palabras.',
      'Disfruta y valora la literatura como fuente de placer, conocimiento e imaginación.',
    ],
    '4': [
      'Comprende textos literarios y no literarios de diferentes estructuras, identificando tema, propósito e información relevante.',
      'Produce textos escritos de diferente tipo (narración, descripción, exposición) con estructura clara, coherencia y corrección ortográfica.',
      'Identifica recursos literarios básicos (metáfora, comparación, personificación) en textos poéticos y narrativos.',
      'Participa en situaciones comunicativas orales formales e informales, adaptando el registro al contexto.',
      'Usa estrategias de comprensión lectora (predicción, inferencia, resumen) para acceder al significado de textos.',
      'Reconoce la función de diferentes tipos de párrafo (introducción, desarrollo, conclusión) en la estructura de un texto.',
    ],
    '5': [
      'Lee textos de diferentes géneros y épocas, identificando su estructura, intención comunicativa y puntos de vista del autor.',
      'Produce textos escritos con propósito definido (argumentativos, expositivos, narrativos), usando conectores adecuados y recursos ortográficos.',
      'Analiza personajes, conflictos y valores en obras literarias, y los relaciona con situaciones de la vida real.',
      'Usa medios de comunicación y fuentes de información para buscar, seleccionar y organizar datos sobre temas de interés.',
      'Reconoce el papel de la comunicación no verbal (gestos, postura, entonación) en la comunicación oral.',
      'Comprende y usa la estructura de textos argumentativos sencillos: tesis, argumentos, conclusión.',
    ],
    '6': [
      'Comprende textos literarios de diferentes géneros (cuento, novela, poesía, teatro) reconociendo sus características y estructura.',
      'Produce textos escritos coherentes (narrativos, descriptivos, expositivos) con estructura adecuada, conectores y manejo ortográfico.',
      'Identifica y analiza recursos literarios (narrador, figuras retóricas, versificación) en textos poéticos y narrativos.',
      'Comprende la estructura de textos no literarios (noticias, artículos, ensayos) e identifica la posición del autor.',
      'Participa en debates y exposiciones con argumentos sustentados, escucha activamente y reformula sus ideas.',
      'Reconoce variedades lingüísticas (dialectos, registros) y reflexiona sobre la diversidad del español.',
    ],
    '7': [
      'Lee obras literarias de diferentes géneros y tradiciones culturales, interpretando su sentido en relación con el contexto de producción.',
      'Produce textos argumentativos y expositivos con tesis clara, argumentos sustentados y conclusión, usando vocabulario formal.',
      'Comprende textos de los medios de comunicación (noticia, reportaje, editorial) e identifica su intención e ideología.',
      'Analiza el uso del lenguaje figurado en textos literarios y lo aplica en producciones escritas y orales propias.',
      'Usa la consulta de fuentes variadas para ampliar y verificar información, citando adecuadamente las fuentes.',
      'Reflexiona sobre la gramática de la lengua (morfología, sintaxis básica) para mejorar sus producciones escritas.',
    ],
    '8': [
      'Lee y analiza obras literarias representativas de diferentes épocas y culturas, identificando sus características y el contexto histórico.',
      'Produce textos escritos con intención argumentativa o expositiva, usando estrategias retóricas y recursos discursivos adecuados.',
      'Comprende el discurso periodístico y publicitario, identificando sus estrategias de persuasión e información.',
      'Analiza la función del narrador, el punto de vista y los recursos estilísticos en textos narrativos complejos.',
      'Participa en situaciones comunicativas que requieren el uso de registros formales e informales según el contexto.',
      'Relaciona obras literarias con su contexto histórico, cultural y social de producción para ampliar su interpretación.',
    ],
    '9': [
      'Lee y analiza obras literarias de diferentes géneros, épocas y corrientes estéticas, estableciendo relaciones intertextuales.',
      'Produce textos escritos argumentativos (ensayo, reseña crítica) con postura propia, argumentos sólidos y manejo de fuentes.',
      'Comprende y analiza textos académicos y científicos, usando estrategias de lectura crítica.',
      'Reconoce y analiza las características del discurso político y publicitario, identificando sus estrategias de persuasión.',
      'Desarrolla proyectos de investigación lingüística o literaria sencillos, usando metodología básica.',
      'Reflexiona sobre el uso del lenguaje como medio de construcción de identidad, cultura y poder.',
    ],
    '10': [
      'Lee obras literarias canónicas y contemporáneas de literatura universal, relacionándolas con su contexto de producción y recepción.',
      'Produce textos argumentativos complejos (ensayo académico) con estructura, argumentación sólida y fuentes citadas.',
      'Analiza el lenguaje de los medios de comunicación y las nuevas tecnologías como prácticas sociales y culturales.',
      'Comprende y produce textos propios de ámbitos académicos y profesionales (informes, reseñas, ponencias breves).',
      'Reflexiona sobre la historia de la lengua española y su diversidad dialectal y sociolingüística.',
      'Desarrolla proyectos de lectura y escritura que conectan la literatura con otras manifestaciones artísticas y culturales.',
    ],
    '11': [
      'Lee y analiza críticamente textos literarios de diferentes tradiciones culturales, construyendo interpretaciones sustentadas.',
      'Produce textos escritos complejos (ensayos, artículos) con argumentación sólida, manejo de fuentes y postura crítica propia.',
      'Comprende y evalúa críticamente textos de los medios y las TIC, reconociendo su papel en la construcción de realidad social.',
      'Desarrolla proyectos de investigación y comunicación que articulan lenguaje, literatura y otras disciplinas.',
      'Reflexiona sobre las posibilidades comunicativas y estéticas del lenguaje para construir identidad y participar en la sociedad.',
      'Valora la lectura y la escritura como herramientas de aprendizaje, participación ciudadana y desarrollo personal.',
    ],
  },

  // ================================================================
  // CIENCIAS NATURALES
  // Fuente: MEN, DBA Ciencias Naturales V.1 (2016)
  // ================================================================
  'ciencias-naturales': {
    '1': [
      'Describe características observables de los seres vivos (plantas y animales) que les permiten sobrevivir en su entorno.',
      'Identifica los estados de la materia (sólido, líquido, gaseoso) en objetos y sustancias cotidianas y reconoce algunos cambios entre ellos.',
      'Describe las propiedades del agua (color, sabor, olor) y su importancia para los seres vivos.',
      'Reconoce los movimientos de la Tierra (rotación y traslación) y los relaciona con los cambios de día/noche y las estaciones.',
      'Diferencia los seres vivos de los objetos inertes a partir de características como crecimiento, reproducción y nutrición.',
      'Usa los sentidos para explorar el entorno y describe características de objetos y fenómenos naturales.',
    ],
    '2': [
      'Explica la función de los órganos de los sentidos en la relación del ser humano con el entorno.',
      'Describe las necesidades básicas de los seres vivos (alimento, agua, luz, aire) y cómo el entorno las satisface.',
      'Identifica mezclas en el entorno cotidiano y describe métodos sencillos para separarlas (filtración, decantación).',
      'Reconoce que la Tierra está conformada por suelo, agua y aire, y describe características básicas de cada componente.',
      'Describe el ciclo del agua en la naturaleza y explica su importancia para los ecosistemas.',
      'Realiza observaciones, registra datos y formula preguntas a partir de fenómenos naturales cotidianos.',
    ],
    '3': [
      'Clasifica los seres vivos en grupos (plantas, animales, hongos, microorganismos) usando criterios observables.',
      'Comprende la función de los sistemas del cuerpo humano (digestivo, respiratorio, circulatorio) y su relación con la salud.',
      'Describe las propiedades de materiales y sustancias (dureza, solubilidad, conductividad) y las relaciona con sus usos.',
      'Identifica y describe cadenas alimentarias sencillas en ecosistemas locales.',
      'Explica el ciclo de vida de plantas con flores y lo relaciona con la reproducción de las especies.',
      'Realiza experimentos sencillos para verificar hipótesis y comunica sus resultados de forma oral y escrita.',
    ],
    '4': [
      'Comprende la célula como unidad básica de los seres vivos y distingue entre células animales y vegetales.',
      'Describe la función de los sistemas del cuerpo humano (nervioso, excretor, locomotor) y los relaciona con el mantenimiento de la salud.',
      'Explica cómo la energía solar es transformada y transferida en los ecosistemas a través de las cadenas tróficas.',
      'Identifica y describe las propiedades del suelo y su importancia para el sostenimiento de la vida.',
      'Comprende el concepto de mezcla homogénea y heterogénea, y técnicas de separación aplicadas en la industria y la vida diaria.',
      'Reconoce que los fenómenos naturales (terremotos, erupciones, inundaciones) son resultado de procesos internos y externos de la Tierra.',
    ],
    '5': [
      'Comprende los procesos de fotosíntesis y respiración celular como base del flujo de energía en los ecosistemas.',
      'Describe la biodiversidad como característica de los ecosistemas y explica factores que la amenazan.',
      'Comprende las leyes básicas de la herencia y explica cómo los rasgos se transmiten de padres a hijos.',
      'Describe las propiedades del movimiento (velocidad, aceleración) y las relaciona con fuerzas cotidianas.',
      'Identifica cambios físicos y químicos de la materia, y los diferencia según sus características observables.',
      'Comprende el concepto de ecosistema, sus componentes (bióticos y abióticos) y las relaciones entre ellos.',
    ],
    '6': [
      'Comprende la organización de los seres vivos desde la célula hasta el ecosistema, identificando los niveles de organización biológica.',
      'Describe los ciclos biogeoquímicos (carbono, nitrógeno, agua) y su importancia para el mantenimiento de los ecosistemas.',
      'Comprende la teoría atómica básica (Dalton, Bohr) y la usa para explicar la estructura de la materia.',
      'Identifica la tabla periódica como herramienta de clasificación de los elementos y describe propiedades de grupos representativos.',
      'Comprende las leyes de Newton y las aplica para explicar el movimiento de objetos en situaciones cotidianas.',
      'Analiza el impacto ambiental de actividades humanas sobre los ecosistemas y propone acciones para la sostenibilidad.',
    ],
    '7': [
      'Comprende la teoría celular y describe la estructura y función de organelos celulares en células procarióticas y eucarióticas.',
      'Comprende el ciclo del carbono y relaciona fotosíntesis y respiración con el equilibrio del ecosistema.',
      'Describe la estructura atómica (protones, neutrones, electrones) y la usa para interpretar la tabla periódica.',
      'Comprende los tipos de enlace químico (iónico, covalente) y los relaciona con las propiedades de las sustancias.',
      'Comprende el concepto de fuerza gravitacional, magnética y eléctrica, y describe sus efectos en la materia.',
      'Comprende las causas y consecuencias del cambio climático y propone acciones individuales y colectivas para mitigarlo.',
    ],
    '8': [
      'Comprende los mecanismos de la herencia genética (leyes de Mendel) y los aplica para predecir características en descendientes.',
      'Describe la estructura del ADN, el proceso de síntesis de proteínas y su papel en la expresión de los rasgos hereditarios.',
      'Comprende los procesos de reacción química (reactivos, productos, tipos de reacción) y los aplica en situaciones cotidianas.',
      'Identifica las propiedades de los ácidos, bases y sales, y explica reacciones de neutralización con ejemplos del entorno.',
      'Comprende el concepto de energía (cinética, potencial, calórica) y las leyes de la termodinámica básica.',
      'Analiza la relación entre salud, ambiente y estilo de vida, e identifica factores de riesgo y protección.',
    ],
    '9': [
      'Comprende la teoría de la evolución (Darwin) y usa la evidencia fósil, anatómica y molecular para sustentarla.',
      'Describe la biotecnología y sus aplicaciones (ingeniería genética, clonación, transgénicos) y analiza sus implicaciones éticas.',
      'Comprende el concepto de soluciones (concentración, solubilidad) y aplica la estequiometría básica en reacciones químicas.',
      'Comprende las leyes del movimiento (cinemática) y las leyes de Newton para describir y predecir el movimiento de cuerpos.',
      'Identifica fuentes de energía renovables y no renovables, y analiza su impacto ambiental y sostenibilidad.',
      'Desarrolla proyectos de investigación científica usando el método científico para resolver problemas del entorno.',
    ],
    '10': [
      'Comprende los mecanismos de regulación del cuerpo humano (sistema endocrino, nervioso) y su importancia para la homeostasis.',
      'Comprende la termodinámica y sus leyes, y las aplica para explicar procesos naturales e industriales.',
      'Describe los procesos de la reacción química (velocidad, equilibrio, energía de activación) en contextos reales.',
      'Comprende las ondas (sonido, luz) y sus propiedades, y aplica estos conocimientos en tecnología y comunicación.',
      'Analiza los avances de la biotecnología y la genómica, y reflexiona sobre sus implicaciones éticas y sociales.',
      'Evalúa el impacto de la ciencia y la tecnología en el desarrollo sostenible y la calidad de vida.',
    ],
    '11': [
      'Comprende la estructura y función del ecosistema y analiza cómo los desequilibrios ecosistémicos afectan la biodiversidad.',
      'Comprende la electroquímica (pilas, electrólisis) y aplica sus principios en el análisis de procesos industriales.',
      'Comprende los principios de la física cuántica y relativista básica y los relaciona con tecnologías de uso cotidiano.',
      'Analiza situaciones de salud pública (epidemias, enfermedades crónicas) usando conceptos biológicos y epidemiológicos.',
      'Desarrolla proyectos de investigación que integran conceptos de diferentes ciencias naturales para resolver problemas complejos.',
      'Valora el papel de la ciencia como actividad humana, cultural e histórica en la construcción del conocimiento.',
    ],
  },

  // ================================================================
  // CIENCIAS SOCIALES
  // Fuente: MEN, DBA Ciencias Sociales V.1 (2016)
  // ================================================================
  'ciencias-sociales': {
    '1': [
      'Reconoce características de su familia, escuela y comunidad como los grupos sociales más cercanos.',
      'Identifica normas de convivencia en el hogar, la escuela y la comunidad, y comprende su importancia para la vida en sociedad.',
      'Describe características del entorno natural y construido de su comunidad, y reconoce cómo el ser humano lo transforma.',
      'Ubica en el tiempo sucesos cotidianos usando nociones temporales (antes, ahora, después, ayer, hoy, mañana).',
      'Reconoce la diversidad de culturas, costumbres y tradiciones en Colombia, y las valora como parte de nuestra identidad.',
      'Identifica los símbolos patrios de Colombia y su significado para la nación.',
    ],
    '2': [
      'Describe características físicas del territorio colombiano (ríos, montañas, costas, llanuras) y las relaciona con las actividades humanas.',
      'Comprende la función de los servicios públicos y las instituciones del Estado en el bienestar de la comunidad.',
      'Reconoce que Colombia tiene una historia que se construye a partir del aporte de diferentes culturas (indígenas, africanas, europeas).',
      'Usa mapas sencillos para ubicar lugares de su entorno y reconoce los puntos cardinales.',
      'Identifica los derechos y deberes de los niños y las niñas, y los relaciona con la Constitución Política de Colombia.',
      'Reconoce que las comunidades tienen necesidades y que el trabajo organizado contribuye a satisfacerlas.',
    ],
    '3': [
      'Comprende cómo las características geográficas de las regiones de Colombia influyen en las actividades económicas y culturales de sus habitantes.',
      'Describe las principales regiones naturales de Colombia y las relaciona con la biodiversidad y las culturas regionales.',
      'Identifica los procesos de poblamiento de América y Colombia (indígenas, colonización europea, esclavitud africana) y sus consecuencias.',
      'Reconoce la organización política de Colombia (municipio, departamento, nación) y las funciones básicas de sus instituciones.',
      'Comprende que la democracia implica derechos y responsabilidades para todos los ciudadanos.',
      'Valora la diversidad étnica y cultural de Colombia como riqueza que debe protegerse.',
    ],
    '4': [
      'Comprende las causas y consecuencias del proceso de Independencia de Colombia y su significado para la identidad nacional.',
      'Describe la organización política y económica de Colombia durante el siglo XIX y sus cambios hasta el XX.',
      'Analiza la división política de Colombia (departamentos, municipios) y sus características geográficas, económicas y culturales.',
      'Comprende el concepto de ciudadanía y los mecanismos de participación democrática en Colombia.',
      'Identifica los problemas ambientales del territorio colombiano y propone acciones para la sostenibilidad.',
      'Reconoce el papel de grupos sociales y movimientos en la construcción de la historia de Colombia.',
    ],
    '5': [
      'Comprende los procesos históricos que configuraron América Latina como región con características culturales, políticas y económicas comunes.',
      'Describe las grandes civilizaciones prehispánicas (Maya, Azteca, Inca) y analiza su legado cultural.',
      'Comprende el concepto de globalización y sus efectos en las economías, culturas y medio ambiente de los países.',
      'Identifica problemas ambientales globales (deforestación, contaminación, cambio climático) y comprende su impacto en el planeta.',
      'Analiza la estructura y funciones de organismos internacionales (ONU, OEA) y su papel en la solución de conflictos mundiales.',
      'Reflexiona sobre los derechos humanos, su historia y los mecanismos internacionales para su protección.',
    ],
    '6': [
      'Comprende las características de las grandes civilizaciones antiguas (Mesopotamia, Egipto, Grecia, Roma) y su legado a la humanidad.',
      'Describe los sistemas económicos básicos (economía de mercado, planificada, mixta) y los compara con situaciones actuales.',
      'Analiza el concepto de espacio geográfico y los factores que influyen en la distribución de la población mundial.',
      'Comprende el proceso de conquista y colonización española en América y sus consecuencias para los pueblos originarios.',
      'Reconoce la diversidad de expresiones culturales en el mundo y reflexiona sobre el respeto a la diferencia.',
      'Comprende conceptos básicos de economía (oferta, demanda, mercado) y los aplica en situaciones cotidianas.',
    ],
    '7': [
      'Comprende las causas, desarrollo y consecuencias de la Edad Media y el surgimiento del mundo moderno.',
      'Analiza el proceso de Reforma Protestante y Contrarreforma como transformaciones religiosas, políticas y culturales de Europa.',
      'Comprende el surgimiento del capitalismo mercantil y su relación con la expansión colonial europea.',
      'Describe la distribución de la población en el territorio colombiano y los factores geográficos que la determinan.',
      'Analiza los sistemas políticos (democracia, monarquía, dictadura) y los relaciona con situaciones históricas y actuales.',
      'Comprende los conflictos armados del mundo actual y el papel de los organismos internacionales en la búsqueda de la paz.',
    ],
    '8': [
      'Comprende las causas y consecuencias de las Revoluciones Americana, Francesa e Industrial, y su impacto en el mundo moderno.',
      'Analiza el colonialismo europeo del siglo XIX en África y Asia y sus efectos en la configuración del mundo actual.',
      'Describe los grandes biomas del planeta y relaciona sus características con las actividades humanas y los problemas ambientales.',
      'Comprende la Constitución Política de Colombia de 1991 como pacto de convivencia y garante de derechos.',
      'Analiza los mecanismos de participación ciudadana en Colombia y evalúa su efectividad en la vida democrática.',
      'Comprende el concepto de conflicto armado y sus consecuencias humanitarias, con énfasis en el caso colombiano.',
    ],
    '9': [
      'Comprende las causas y consecuencias de la Primera y Segunda Guerra Mundial, y el surgimiento del orden bipolar de la Guerra Fría.',
      'Analiza los procesos de descolonización en África y Asia y el surgimiento de los movimientos de liberación nacional.',
      'Comprende el concepto de desarrollo sostenible y analiza los retos ambientales, sociales y económicos del planeta en el siglo XXI.',
      'Analiza las tensiones entre globalización e identidades locales, y sus efectos en la cultura colombiana y latinoamericana.',
      'Comprende los fundamentos del Derecho Internacional Humanitario y los mecanismos de protección de los derechos humanos.',
      'Reflexiona sobre la construcción de paz en Colombia, los acuerdos de paz y los retos de la reconciliación.',
    ],
    '10': [
      'Comprende el surgimiento y desarrollo de América Latina como región y los factores históricos, geográficos y culturales que la configuran.',
      'Analiza los regímenes autoritarios del siglo XX (fascismo, nazismo, estalinismo) y sus consecuencias para la humanidad.',
      'Comprende los fundamentos de la economía política y analiza modelos económicos (neoliberalismo, socialismo) en contextos históricos.',
      'Describe las migraciones internacionales contemporáneas y sus causas económicas, políticas y ambientales.',
      'Analiza el papel de los movimientos sociales en la transformación de las sociedades democráticas.',
      'Comprende los principales problemas políticos y económicos de Colombia en el contexto global del siglo XXI.',
    ],
    '11': [
      'Analiza los procesos de globalización económica y sus efectos en la soberanía de los Estados, la cultura y el medio ambiente.',
      'Comprende los principales conflictos geopolíticos del siglo XXI y el papel de los organismos internacionales en su gestión.',
      'Reflexiona sobre el ejercicio de la ciudadanía activa, los derechos humanos y los mecanismos de participación política.',
      'Analiza los retos del desarrollo sostenible en Colombia y el mundo, y evalúa propuestas de solución.',
      'Comprende los conceptos de justicia transicional y construye argumentos sobre los retos de la paz en Colombia.',
      'Desarrolla proyectos de investigación social que integran conceptos históricos, geográficos, económicos y políticos para comprender el mundo actual.',
    ],
  },
};

// Exportar para uso como módulo ES6 y como variable global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DBA;
} else if (typeof window !== 'undefined') {
  window.DBA = DBA;
}
