/**
 * Progresión Vertical de Estándares por Pensamientos/Ejes Curriculares
 * Fuente: MEN Colombia — Estándares Básicos de Competencias (2006)
 *         y Lineamientos Curriculares por área.
 *
 * Organización: por área → eje/pensamiento → grupos de grados
 * Propósito: mostrar al docente cómo aumenta la complejidad de un mismo
 * eje a lo largo de la escolaridad (articulación vertical).
 *
 * Selección: 2-3 estándares MÁS representativos por eje y grupo de grados.
 */

const PROGRESION_VERTICAL = {

  // ================================================================
  // MATEMÁTICAS — 5 pensamientos del MEN
  // ================================================================
  matematicas: {

    /**
     * Pensamiento Numérico y Sistemas Numéricos
     * Progresión: conteo → operaciones → fracciones → enteros/racionales → reales → cálculo
     */
    numerico: {
      '1-3': [
        'Reconozco el significado del número en diferentes contextos (medición, conteo, código, orden).',
        'Describo situaciones que requieren el uso de medidas relativas y absolutas, y utilizo la suma y la resta para resolver problemas cotidianos.',
        'Uso representaciones concretas, pictóricas y simbólicas para comprender el valor posicional en el sistema decimal.',
      ],
      '4-5': [
        'Justifico el valor de posición en el sistema de numeración decimal y lo uso para hacer estimaciones y calcular operaciones.',
        'Utilizo las cuatro operaciones con números naturales, fracciones y decimales para resolver situaciones problema.',
        'Identifico y uso porcentajes, razones y proporciones para resolver situaciones de la vida cotidiana.',
      ],
      '6-7': [
        'Resuelvo y formulo problemas utilizando propiedades básicas de los números enteros y los números racionales.',
        'Comprendo el concepto de fracción como razón, como parte de un todo y como resultado de una división, y opero con ellas.',
        'Justifico procedimientos aritméticos usando las propiedades de las operaciones (conmutativa, asociativa, distributiva).',
      ],
      '8-9': [
        'Utilizo los números reales en sus diferentes representaciones (decimal, fraccionaria, potencia, radical) y en diversos contextos.',
        'Comprendo y aplico las propiedades de los números irracionales y distingo entre racionales e irracionales en la recta numérica.',
        'Resuelvo ecuaciones e inecuaciones en los reales y argumento sobre el conjunto solución.',
      ],
      '10-11': [
        'Analizo representaciones decimales de los números reales para diferenciar entre racionales e irracionales, y los uso en cálculo.',
        'Comprendo el concepto de límite y continuidad como herramientas para analizar el comportamiento de funciones numéricas.',
        'Uso sucesiones y series numéricas (aritméticas, geométricas) para modelar situaciones del mundo real.',
      ],
    },

    /**
     * Pensamiento Espacial y Sistemas Geométricos
     * Progresión: percepción → clasificación → propiedades → transformaciones → geometría analítica
     */
    espacial: {
      '1-3': [
        'Reconozco y describo figuras y cuerpos geométricos a partir de sus características observables (lados, vértices, caras).',
        'Ubico objetos en el espacio y los describo usando referencias como izquierda/derecha, arriba/abajo, cerca/lejos.',
        'Identifico y reproduzco simetrías, patrones y regularidades en figuras planas del entorno.',
      ],
      '4-5': [
        'Clasifico y comparo figuras planas y cuerpos geométricos según sus propiedades (ángulos, paralelismo, perpendicularidad).',
        'Represento y describo la posición de objetos en el plano cartesiano usando coordenadas.',
        'Identifico ejes de simetría en figuras planas y construyo figuras simétricas respecto a un eje.',
      ],
      '6-7': [
        'Predigo y comparo los resultados de aplicar transformaciones rígidas (traslación, rotación, reflexión) a figuras en el plano.',
        'Aplico el Teorema de Tales y la proporcionalidad para resolver problemas de semejanza entre figuras.',
        'Uso sistemas de coordenadas cartesianas para representar y analizar figuras geométricas y sus transformaciones.',
      ],
      '8-9': [
        'Aplico el Teorema de Pitágoras y las razones trigonométricas básicas (seno, coseno, tangente) para resolver situaciones problema.',
        'Identifico y describo cónicas (circunferencia, parábola, elipse, hipérbola) a partir de sus ecuaciones y propiedades.',
        'Comprendo la semejanza de polígonos y la uso para resolver problemas de escala y proporcionalidad en contextos reales.',
      ],
      '10-11': [
        'Uso representaciones geométricas de vectores para modelar y resolver situaciones del mundo físico.',
        'Comprendo y aplico conceptos de geometría analítica (distancias, ángulos, lugares geométricos) en el plano y el espacio.',
        'Articulo álgebra y geometría para analizar transformaciones y figuras usando matrices y coordenadas.',
      ],
    },

    /**
     * Pensamiento Métrico y Sistemas de Medidas
     * Progresión: medición directa → unidades convencionales → conversiones → magnitudes derivadas → modelación
     */
    metrico: {
      '1-3': [
        'Comparo y ordeno objetos respecto a atributos medibles (longitud, masa, capacidad) usando unidades no convencionales.',
        'Reconozco el uso de patrones e instrumentos de medida en actividades cotidianas y en diferentes oficios.',
        'Mido longitudes usando unidades convencionales (cm, m) y realizo estimaciones de medidas.',
      ],
      '4-5': [
        'Utilizo unidades del Sistema Internacional para medir longitud, masa, capacidad y tiempo, y convierto entre ellas.',
        'Calculo perímetros y áreas de figuras planas regulares e irregulares y aplico estos conceptos en situaciones reales.',
        'Resuelvo problemas que requieren estimar, medir, registrar y operar con medidas de magnitudes diversas.',
      ],
      '6-7': [
        'Calculo el volumen de cuerpos geométricos básicos (prismas, cilindros) y los uso en la resolución de problemas.',
        'Comprendo la diferencia entre área y volumen, y entre magnitudes directas e indirectas (velocidad, densidad).',
        'Identifico y aplico relaciones entre longitud, área y volumen cuando se amplifican o reducen figuras.',
      ],
      '8-9': [
        'Calculo áreas de figuras planas y áreas y volúmenes de cuerpos geométricos (pirámides, esferas, conos) y resuelvo problemas.',
        'Utilizo el concepto de magnitud escalar y vectorial para representar y resolver situaciones físicas sencillas.',
        'Comprendo los errores de medición y aplico conceptos de precisión y exactitud en procesos de medición.',
      ],
      '10-11': [
        'Comprendo el concepto de integral definida como herramienta para calcular áreas y acumulaciones en situaciones reales.',
        'Modelo fenómenos físicos que implican tasas de cambio usando derivadas e integrales.',
        'Analizo la relación entre unidades de medida y escalas en contextos científicos, tecnológicos y cotidianos.',
      ],
    },

    /**
     * Pensamiento Aleatorio y Sistemas de Datos
     * Progresión: recolección → representación → medidas centrales → dispersión → probabilidad → inferencia
     */
    aleatorio: {
      '1-3': [
        'Recolecto datos cualitativos y cuantitativos de situaciones del entorno y los organizo en tablas y pictogramas.',
        'Describo datos registrados en tablas y gráficas sencillas y respondo preguntas sobre ellos.',
        'Identifico si un evento es posible, imposible o seguro en situaciones cotidianas.',
      ],
      '4-5': [
        'Represento datos usando tablas de frecuencia y gráficas de barras, circulares y de líneas, y las interpreto.',
        'Calculo e interpreto la moda, la mediana y el promedio de conjuntos de datos en situaciones reales.',
        'Comprendo el concepto básico de probabilidad (frecuencia relativa) y lo uso para predecir resultados.',
      ],
      '6-7': [
        'Interpreto y critico información estadística de medios de comunicación, identificando el tipo de gráfica y sus características.',
        'Comprendo y uso las medidas de dispersión básicas (rango, desviación media) para describir la variabilidad de un conjunto.',
        'Calculo la probabilidad de eventos simples y compuestos usando el espacio muestral.',
      ],
      '8-9': [
        'Organizo datos en distribuciones de frecuencia y los represento en histogramas, polígonos y ojivas.',
        'Calculo e interpreto la varianza y la desviación estándar como medidas de dispersión en situaciones reales.',
        'Comprendo y aplico las reglas de adición y multiplicación de probabilidades en eventos independientes y dependientes.',
      ],
      '10-11': [
        'Comprendo los conceptos de variable aleatoria y distribución de probabilidad (binomial, normal) y los aplico en situaciones.',
        'Diseño y ejecuto un proceso estadístico completo: pregunta, recolección, análisis, interpretación e inferencia.',
        'Evalúo críticamente argumentos basados en datos estadísticos, identificando sesgos y manipulaciones.',
      ],
    },

    /**
     * Pensamiento Variacional y Sistemas Algebraicos y Analíticos
     * Progresión: patrones → proporcionalidad → expresiones → ecuaciones → funciones → cálculo
     */
    variacional: {
      '1-3': [
        'Identifico y describo regularidades y patrones en secuencias numéricas y geométricas para predecir términos siguientes.',
        'Uso convenciones para representar situaciones de variación en tablas y gráficas sencillas.',
        'Comprendo la igualdad como relación y la uso para resolver situaciones de balance y equivalencia.',
      ],
      '4-5': [
        'Identifico y uso la variación proporcional directa en situaciones reales (recetas, escalas, velocidad constante).',
        'Represento situaciones de variación en tablas, gráficas y expresiones verbales, identificando la regla de cambio.',
        'Introduzco el uso de letras como representación de cantidades desconocidas en ecuaciones sencillas.',
      ],
      '6-7': [
        'Represento y opero con expresiones algebraicas (suma, resta, multiplicación de polinomios simples).',
        'Planteo y resuelvo ecuaciones de primer grado con una variable para modelar situaciones cotidianas.',
        'Identifico y represento funciones lineales en tablas, gráficas y fórmulas, interpretando pendiente e intercepto.',
      ],
      '8-9': [
        'Resuelvo sistemas de ecuaciones lineales (sustitución, igualación, eliminación) y los aplico a problemas reales.',
        'Comprendo el concepto de función y analizo funciones cuadráticas, exponenciales y logarítmicas en sus representaciones.',
        'Factorizo expresiones polinómicas y uso la factorización para resolver ecuaciones de segundo grado.',
      ],
      '10-11': [
        'Comprendo y aplico el concepto de función (incluyendo trigonométricas, exponenciales, logarítmicas) para modelar fenómenos.',
        'Comprendo la derivada como razón de cambio y la uso para analizar el comportamiento de funciones (máximos, mínimos, concavidad).',
        'Comprendo el concepto de integral como operación inversa de la derivada y como área bajo una curva, y los aplico.',
      ],
    },
  },

  // ================================================================
  // LENGUAJE — 5 ejes comunicativos del MEN
  // ================================================================
  lenguaje: {

    /**
     * Producción Textual
     * Progresión: escritura emergente → textos simples → coherencia/cohesión → argumentación → escritura académica
     */
    produccion: {
      '1-3': [
        'Produzco textos orales y escritos que responden a distintas necesidades comunicativas y siguen un procedimiento básico.',
        'Escribo oraciones y textos cortos con sentido completo, usando mayúsculas, punto final y separación entre palabras.',
        'Narro con orden (inicio, nudo, desenlace) historias o experiencias propias usando vocabulario adecuado a la audiencia.',
      ],
      '4-5': [
        'Produzco textos escritos con intención narrativa, descriptiva y expositiva, usando conectores y estructurando párrafos.',
        'Reviso y corrijo mis textos teniendo en cuenta aspectos de coherencia, cohesión y corrección ortográfica.',
        'Uso diversas fuentes de información para nutrir mis textos y cito la fuente de manera básica.',
      ],
      '6-7': [
        'Produzco textos expositivos y argumentativos con tesis, argumentos y conclusión, usando vocabulario formal.',
        'Uso adecuadamente recursos ortográficos y signos de puntuación en producciones escritas de diferentes tipos.',
        'Ajusto mi escritura según el destinatario, el propósito y el contexto comunicativo (registro formal e informal).',
      ],
      '8-9': [
        'Produzco ensayos argumentativos y reseñas críticas con postura propia, argumentos sustentados y manejo de fuentes.',
        'Uso recursos retóricos y discursivos (ejemplos, citas, reformulaciones) para hacer más efectivos mis textos.',
        'Planifico, redacto y reviso textos académicos aplicando estrategias de escritura en proceso.',
      ],
      '10-11': [
        'Produzco textos académicos y formales (ensayos, artículos, ponencias) con argumentación rigurosa y estilo propio.',
        'Cito y referencio fuentes usando normas académicas básicas (APA, MLA), integrando las ideas de otros en mi escritura.',
        'Desarrollo proyectos de escritura que articulan investigación, análisis crítico y comunicación para audiencias reales.',
      ],
    },

    /**
     * Comprensión e Interpretación Textual
     * Progresión: literal → inferencial → crítica → intertextual → evaluación crítica de medios
     */
    comprension: {
      '1-3': [
        'Comprendo textos que leo, escucho y veo, y doy cuenta de su contenido a través de respuestas literales.',
        'Identifico la idea principal y los detalles de apoyo en textos informativos breves.',
        'Infiero el significado de palabras y expresiones desconocidas a partir del contexto del texto.',
      ],
      '4-5': [
        'Leo con fluidez y comprensión textos de diferentes tipos, identificando propósito, estructura e información explícita.',
        'Hago inferencias y predicciones sobre textos que leo, apoyándome en la información del texto y mis conocimientos previos.',
        'Reconozco los diferentes tipos de texto (narrativo, informativo, argumentativo) y sus características estructurales.',
      ],
      '6-7': [
        'Comprendo textos con intención argumentativa e identifico las tesis, los argumentos y las estrategias persuasivas del autor.',
        'Establezco relaciones entre diferentes partes de un texto y entre textos de distintos formatos (verbal, icónico, gráfico).',
        'Leo textos periodísticos y académicos identificando la posición del autor, los datos y las valoraciones.',
      ],
      '8-9': [
        'Analizo críticamente textos de diversas procedencias, evaluando la validez de los argumentos y la pertinencia de las fuentes.',
        'Establezco relaciones intertextuales entre obras literarias y entre textos de distintas disciplinas.',
        'Comprendo textos académicos complejos usando estrategias de lectura activa (anotación, síntesis, cuestionamiento).',
      ],
      '10-11': [
        'Evalúo críticamente textos mediáticos, publicitarios y políticos, identificando estrategias de manipulación e ideología.',
        'Comprendo y analizo textos científicos, filosóficos y de opinión, valorando la solidez de los argumentos.',
        'Construyo interpretaciones sustentadas de textos complejos, integrando perspectivas históricas, culturales y personales.',
      ],
    },

    /**
     * Literatura
     * Progresión: disfrute → identificación de elementos → análisis → contexto histórico → canon/intertextualidad
     */
    literatura: {
      '1-3': [
        'Disfruto de obras literarias (cuentos, poemas, fábulas, rondas) y expreso mis impresiones sobre ellas.',
        'Identifico elementos básicos de los textos narrativos (personajes, lugar, tiempo, problema, solución).',
        'Reconozco recursos sonoros del lenguaje poético (rima, ritmo, aliteración) y los disfruto en canciones y poemas.',
      ],
      '4-5': [
        'Leo obras literarias de diferentes géneros (cuento, novela, poesía, teatro) reconociendo sus características.',
        'Identifico recursos literarios básicos (comparación, metáfora, personificación) en textos poéticos y narrativos.',
        'Analizo el comportamiento de personajes y los relaciono con valores y situaciones de la vida real.',
      ],
      '6-7': [
        'Comprendo obras literarias de diferentes culturas y épocas, reconociendo su contexto histórico y social.',
        'Analizo la función del narrador, el punto de vista y los recursos estilísticos en textos narrativos.',
        'Identifico y analizo la estructura y los recursos formales de textos poéticos (métrica, figuras retóricas, imágenes).',
      ],
      '8-9': [
        'Interpreto obras literarias representativas de las principales corrientes estéticas (Romanticismo, Realismo, Vanguardia).',
        'Relaciono las obras literarias con sus contextos históricos, culturales y biográficos de producción.',
        'Establezco relaciones entre obras de diferentes géneros, autores y épocas, construyendo lecturas intertextuales.',
      ],
      '10-11': [
        'Leo y analizo obras canónicas de la literatura universal y latinoamericana, construyendo interpretaciones críticas.',
        'Relaciono obras literarias con otras manifestaciones artísticas (cine, pintura, música) y filosóficas de la época.',
        'Desarrollo proyectos de lectura y escritura creativa que dialogan con tradiciones literarias y las transforman.',
      ],
    },

    /**
     * Medios de Comunicación y Otros Sistemas Simbólicos
     * Progresión: reconocimiento → lectura crítica → producción → análisis de discurso → evaluación ideológica
     */
    medios: {
      '1-3': [
        'Reconozco diferentes medios de comunicación (radio, televisión, periódico, internet) y los uso con orientación.',
        'Diferencio el lenguaje verbal del no verbal (imágenes, gestos, íconos) en mensajes cotidianos.',
        'Leo imágenes, mapas y gráficas sencillas para extraer información y relacionarla con textos escritos.',
      ],
      '4-5': [
        'Uso medios de comunicación y fuentes digitales para buscar información sobre temas de estudio.',
        'Identifico el propósito comunicativo de anuncios, noticias y propagandas, distinguiendo información de opinión.',
        'Produzco mensajes multimodales (texto + imagen) para comunicar ideas en distintos contextos.',
      ],
      '6-7': [
        'Comprendo la estructura y función de los géneros periodísticos (noticia, crónica, editorial, reportaje).',
        'Analizo el lenguaje publicitario identificando estrategias de persuasión visual y verbal.',
        'Uso las TIC para comunicar, investigar y colaborar, con criterios de selección y uso ético de la información.',
      ],
      '8-9': [
        'Analizo críticamente textos mediáticos (prensa, televisión, redes sociales) identificando sesgos e intenciones.',
        'Comprendo el papel de los medios en la construcción de imaginarios sociales, culturales e identitarios.',
        'Produzco textos multimodales para distintas audiencias y plataformas, adaptando el lenguaje al medio.',
      ],
      '10-11': [
        'Evalúo el rol de los medios de comunicación y las redes sociales como actores políticos en la sociedad contemporánea.',
        'Analizo las transformaciones del lenguaje en la era digital y sus efectos en las prácticas comunicativas.',
        'Desarrollo proyectos de comunicación que articulan lenguaje, medios y ciudadanía para la participación social.',
      ],
    },

    /**
     * Ética de la Comunicación
     * Progresión: normas de convivencia → respeto por la diferencia → debate → argumentación ética → ciudadanía comunicativa
     */
    etica: {
      '1-3': [
        'Respeto los turnos de habla y escucho con atención las ideas de otros en conversaciones grupales.',
        'Identifico que existen diferentes formas de comunicar y que todas merecen respeto.',
        'Reconozco que las palabras pueden herir o ayudar, y elijo un lenguaje que promueva la convivencia.',
      ],
      '4-5': [
        'Participo en debates y exposiciones escuchando activamente, reformulando ideas y siendo respetuoso con los diferentes puntos de vista.',
        'Reconozco la importancia de citar las fuentes cuando uso ideas de otros y valoro la honestidad intelectual.',
        'Reflexiono sobre el uso responsable de los medios digitales y las consecuencias del lenguaje en redes sociales.',
      ],
      '6-7': [
        'Comprendo que el lenguaje puede ser usado para excluir, discriminar o manipular, y reflexiono críticamente ante ello.',
        'Participo en situaciones comunicativas con argumentos sustentados, asumiendo responsabilidad por lo que digo.',
        'Valoro la diversidad lingüística (dialectos, lenguas indígenas) como expresión de la riqueza cultural de Colombia.',
      ],
      '8-9': [
        'Reflexiono sobre el lenguaje como construcción social e histórica que refleja relaciones de poder.',
        'Evalúo el uso ético de la información en internet (verificación de fuentes, respeto a la privacidad, propiedad intelectual).',
        'Participo en proyectos comunicativos que promueven el respeto, la inclusión y la convivencia democrática.',
      ],
      '10-11': [
        'Comprendo la comunicación como práctica ciudadana y reflexiono sobre mis responsabilidades como emisor y receptor.',
        'Analizo situaciones de desinformación (fake news, propaganda) y desarrolla habilidades de pensamiento crítico ante ellas.',
        'Valoro la libertad de expresión como derecho y la ejerce con responsabilidad ética y social.',
      ],
    },
  },

  // ================================================================
  // CIENCIAS NATURALES — 4 entornos del MEN
  // ================================================================
  'ciencias-naturales': {

    /**
     * Entorno Vivo
     * Progresión: seres vivos → célula → genética → evolución → biotecnología
     */
    'entorno-vivo': {
      '1-3': [
        'Reconozco que los seres vivos tienen características que les permiten crecer, reproducirse, nutrirse y relacionarse.',
        'Clasifico seres vivos y objetos inertes, y comprendo las necesidades básicas de plantas y animales en su entorno.',
        'Describo ciclos de vida de seres vivos del entorno y los relaciono con procesos de reproducción y cambio.',
      ],
      '4-5': [
        'Comprendo la célula como unidad básica de los seres vivos y distingo sus partes principales.',
        'Describo cadenas alimentarias y redes tróficas en ecosistemas locales, identificando productores, consumidores y descomponedores.',
        'Comprendo los procesos de fotosíntesis y respiración celular y los relaciono con el flujo de energía en los ecosistemas.',
      ],
      '6-7': [
        'Comprendo los niveles de organización de los seres vivos (célula, tejido, órgano, sistema, organismo) y sus funciones.',
        'Describo los ciclos biogeoquímicos (carbono, nitrógeno, agua) y su papel en el mantenimiento de los ecosistemas.',
        'Comprendo los mecanismos básicos de herencia (leyes de Mendel) y los uso para predecir rasgos en descendientes.',
      ],
      '8-9': [
        'Comprendo la estructura del ADN, la síntesis de proteínas y el papel de los genes en la expresión de características.',
        'Analizo la teoría de la evolución (Darwin) y uso evidencias moleculares, anatómicas y fósiles para sustentarla.',
        'Describo las aplicaciones de la biotecnología (transgénicos, terapia génica) y reflexiono sobre sus implicaciones éticas.',
      ],
      '10-11': [
        'Comprendo los mecanismos de regulación del cuerpo humano (homeostasis) y los relaciono con la salud.',
        'Analizo los ecosistemas como sistemas complejos en equilibrio dinámico, y los efectos de las perturbaciones humanas.',
        'Valoro la biodiversidad como recurso esencial para la humanidad y evalúo estrategias para su conservación.',
      ],
    },

    /**
     * Entorno Físico
     * Progresión: propiedades → materia → reacciones → energía → física moderna
     */
    'entorno-fisico': {
      '1-3': [
        'Describo propiedades observables de los materiales (color, forma, textura, estado) y los clasifico según sus características.',
        'Identifico los estados de la materia y algunos cambios entre ellos (fusión, evaporación) en fenómenos cotidianos.',
        'Comprendo que la energía solar permite la vida en la Tierra y la identifico en fenómenos como la luz y el calor.',
      ],
      '4-5': [
        'Identifico mezclas homogéneas y heterogéneas en el entorno y explico métodos de separación (filtración, destilación).',
        'Comprendo el concepto de fuerza y sus efectos (movimiento, deformación) en objetos cotidianos.',
        'Distingo cambios físicos de cambios químicos de la materia por sus características observables.',
      ],
      '6-7': [
        'Comprendo la estructura atómica y molecular de la materia, y uso la tabla periódica para clasificar los elementos.',
        'Comprendo y aplico las leyes del movimiento de Newton para describir y predecir el comportamiento de los cuerpos.',
        'Identifico y clasifico los tipos de reacción química (síntesis, descomposición, sustitución) en situaciones reales.',
      ],
      '8-9': [
        'Comprendo los conceptos de energía cinética, potencial y calórica, y aplico las leyes de la termodinámica básica.',
        'Describo el concepto de solución (concentración, solubilidad) y aplico estequiometría básica en reacciones químicas.',
        'Comprendo las propiedades de ácidos, bases y sales, y explico neutralizaciones con ejemplos del entorno.',
      ],
      '10-11': [
        'Comprendo los principios de la termodinámica y los aplico al análisis de procesos energéticos e industriales.',
        'Comprendo los conceptos básicos de la física cuántica y relativista, y los relaciono con tecnologías contemporáneas.',
        'Analizo el uso de fuentes de energía renovables y no renovables, evaluando su impacto ambiental y sostenibilidad.',
      ],
    },

    /**
     * Ciencia, Tecnología y Sociedad (CTS)
     * Progresión: uso de instrumentos → relación ciencia-vida → aplicaciones → ética → sostenibilidad
     */
    cts: {
      '1-3': [
        'Uso instrumentos sencillos (lupa, regla, termómetro) para observar y medir fenómenos naturales con apoyo docente.',
        'Reconozco que los seres humanos usan la ciencia y la tecnología para satisfacer necesidades cotidianas.',
        'Identifico inventos y herramientas tecnológicas de uso cotidiano y describo su función.',
      ],
      '4-5': [
        'Comprendo que la ciencia y la tecnología han transformado la vida humana, tanto con beneficios como con riesgos.',
        'Analizo el impacto ambiental de actividades tecnológicas e industriales en el entorno local.',
        'Comprendo el papel de la ciencia en la prevención y tratamiento de enfermedades comunes.',
      ],
      '6-7': [
        'Analizo las relaciones entre desarrollo científico, tecnológico, economía y sociedad en el mundo contemporáneo.',
        'Comprendo que el conocimiento científico es provisional y construido socialmente, y reflexiono sobre la ética en ciencia.',
        'Evalúo alternativas tecnológicas para problemas ambientales locales y globales.',
      ],
      '8-9': [
        'Analizo las implicaciones éticas y sociales de avances biotecnológicos (genómica, clonación, transgénicos).',
        'Comprendo el papel de la investigación científica en la solución de problemas de salud pública.',
        'Evalúo críticamente argumentos sobre riesgos y beneficios de tecnologías emergentes con base en evidencia científica.',
      ],
      '10-11': [
        'Comprendo los principios del desarrollo sostenible y evalúo su aplicación en decisiones políticas y económicas.',
        'Analizo el papel de la ciencia y la tecnología en el agravamiento y en la solución de problemas ambientales globales.',
        'Desarrolla una postura informada y crítica frente a debates científico-tecnológicos de actualidad (vacunas, OGM, energía nuclear).',
      ],
    },

    /**
     * Aproximación al Conocimiento Científico
     * Progresión: observación → hipótesis → experimento → análisis → investigación
     */
    'aprox-cientifica': {
      '1-3': [
        'Observo el entorno con curiosidad, formulo preguntas y registro mis observaciones usando dibujos y palabras.',
        'Realizo experimentos sencillos con orientación del docente y comunico mis hallazgos de forma oral.',
        'Identifico semejanzas y diferencias entre objetos y fenómenos, y los clasifico usando criterios propios.',
      ],
      '4-5': [
        'Formulo hipótesis sencillas sobre fenómenos naturales y diseño procedimientos básicos para verificarlas.',
        'Registro datos de experimentos en tablas y gráficas, y los analizo para extraer conclusiones.',
        'Comprendo que los resultados experimentales pueden ser distintos a lo esperado y reflexiono sobre las causas.',
      ],
      '6-7': [
        'Diseño y ejecuto experimentos controlados, identificando variables independientes, dependientes y de control.',
        'Analizo datos experimentales, calculo promedios y reconozco fuentes de error en las mediciones.',
        'Comunico los resultados de investigaciones usando tablas, gráficas, esquemas y lenguaje científico básico.',
      ],
      '8-9': [
        'Diseño proyectos de investigación aplicando el método científico: pregunta, hipótesis, experimentación, análisis y conclusión.',
        'Uso fuentes científicas confiables (artículos, libros especializados, bases de datos) para sustentar investigaciones.',
        'Evalúo críticamente los resultados de investigaciones propias y ajenas, identificando fortalezas y limitaciones.',
      ],
      '10-11': [
        'Desarrollo investigaciones científicas que articulan pregunta relevante, diseño riguroso, análisis de datos e interpretación.',
        'Comprendo la estructura de los textos científicos (artículo, reporte, ensayo) y los produzco con rigor metodológico.',
        'Valoro la ciencia como actividad humana, histórica y cultural, reflexionando sobre sus alcances y limitaciones éticas.',
      ],
    },
  },

  // ================================================================
  // CIENCIAS SOCIALES — 4 ejes del MEN
  // ================================================================
  'ciencias-sociales': {

    /**
     * Relaciones con la Historia y las Culturas
     * Progresión: historia personal → historia local → historia nacional → historia universal → globalización
     */
    'historico-cultural': {
      '1-3': [
        'Reconozco que tengo una historia personal y familiar, y la relaciono con la historia de mi comunidad.',
        'Identifico cambios y permanencias en la comunidad (antes y ahora) y los relaciono con hechos históricos sencillos.',
        'Reconozco la diversidad étnica y cultural de Colombia (indígenas, afrocolombianos, raizales, mestizos) y la valoro.',
      ],
      '4-5': [
        'Comprendo los procesos de poblamiento de América y Colombia (indígenas, conquista, colonización, esclavitud africana).',
        'Analizo las causas y consecuencias de la Independencia de Colombia y su significado para la nación.',
        'Comprendo que la historia de Colombia está marcada por la diversidad cultural y los aportes de diferentes grupos.',
      ],
      '6-7': [
        'Comprendo las características de las grandes civilizaciones antiguas (Egipto, Grecia, Roma) y su legado cultural.',
        'Analizo los procesos de la Edad Media, el Renacimiento y la expansión europea y su impacto en América.',
        'Comprendo el surgimiento del capitalismo mercantil y su relación con la colonización de América y África.',
      ],
      '8-9': [
        'Analizo las Revoluciones Francesa, Americana e Industrial como transformaciones que configuraron el mundo moderno.',
        'Comprendo el colonialismo del siglo XIX, los procesos de descolonización y el surgimiento de los Estados nación.',
        'Analizo las causas, desarrollo y consecuencias de las Guerras Mundiales y la Guerra Fría.',
      ],
      '10-11': [
        'Comprendo los procesos históricos que configuraron América Latina como región con características comunes.',
        'Analizo los regímenes totalitarios del siglo XX (fascismo, nazismo, estalinismo) y sus consecuencias para la humanidad.',
        'Reflexiono sobre los procesos de globalización, la construcción de identidades culturales y los conflictos del siglo XXI.',
      ],
    },

    /**
     * Relaciones Espaciales y Ambientales
     * Progresión: espacio próximo → territorio local → regiones → geografía nacional → geografía mundial
     */
    'espacial-ambiental': {
      '1-3': [
        'Describo las características del entorno natural cercano (flora, fauna, relieve, agua) y lo relaciono con la vida cotidiana.',
        'Uso mapas y planos sencillos para ubicar lugares y me oriento usando puntos cardinales.',
        'Identifico recursos naturales del entorno y comprendo la importancia de cuidarlos.',
      ],
      '4-5': [
        'Describo las regiones naturales de Colombia, sus características geográficas y sus recursos naturales.',
        'Analizo cómo las características geográficas influyen en las actividades económicas y culturales de las comunidades.',
        'Identifico problemas ambientales del territorio colombiano y propone acciones para la sostenibilidad.',
      ],
      '6-7': [
        'Comprendo la distribución de la población en el mundo y los factores (clima, relieve, economía) que la determinan.',
        'Analizo los grandes biomas terrestres y acuáticos, su biodiversidad y los problemas que los amenazan.',
        'Comprendo el concepto de espacio geográfico como construcción social, histórica y cultural.',
      ],
      '8-9': [
        'Analizo los problemas ambientales globales (cambio climático, deforestación, contaminación) y sus causas humanas.',
        'Comprendo el concepto de desarrollo sostenible y evalúo propuestas de solución a los retos ambientales del planeta.',
        'Describo las migraciones humanas (causas, rutas, efectos) y las relaciono con los conflictos geopolíticos contemporáneos.',
      ],
      '10-11': [
        'Analizo los efectos de la globalización en la transformación de los territorios, las culturas y los ecosistemas.',
        'Comprendo los retos ambientales del siglo XXI (crisis hídrica, pérdida de biodiversidad) en escala local y global.',
        'Evalúa políticas públicas ambientales y territoriales en Colombia desde una perspectiva crítica y propositiva.',
      ],
    },

    /**
     * Relaciones Ético-Políticas
     * Progresión: normas → derechos → democracia → Constitución → ciudadanía crítica
     */
    'etico-politico': {
      '1-3': [
        'Reconozco normas de convivencia en el hogar, la escuela y la comunidad, y comprendo por qué son importantes.',
        'Identifico mis derechos y deberes como niño/niña, y los relaciono con los derechos del niño y la Constitución.',
        'Participo activamente en la toma de decisiones colectivas del aula y la escuela usando mecanismos democráticos.',
      ],
      '4-5': [
        'Comprendo la organización del Estado colombiano (ejecutivo, legislativo, judicial) y las funciones de sus instituciones.',
        'Reflexiono sobre los mecanismos de participación ciudadana (voto, consulta popular, acción de tutela) y su importancia.',
        'Comprendo los conceptos de justicia, equidad e igualdad, y los relaciono con situaciones de la vida cotidiana.',
      ],
      '6-7': [
        'Comprendo la Constitución Política de Colombia de 1991 como pacto de convivencia y garante de derechos fundamentales.',
        'Analizo los sistemas políticos (democracia, monarquía, dictadura) y los comparo con situaciones históricas y actuales.',
        'Reflexiono sobre los derechos humanos, su historia y los mecanismos nacionales e internacionales para su protección.',
      ],
      '8-9': [
        'Analizo los mecanismos de participación ciudadana en Colombia y evalúo su efectividad en la vida democrática.',
        'Comprendo el Derecho Internacional Humanitario y los mecanismos de protección de los derechos en contextos de conflicto.',
        'Reflexiono críticamente sobre el conflicto armado colombiano, sus actores, causas e impacto en las comunidades.',
      ],
      '10-11': [
        'Analizo el papel de los movimientos sociales en la transformación de las sociedades y en la ampliación de derechos.',
        'Comprendo los conceptos de justicia transicional, verdad, reparación y no repetición, y los aplico al caso colombiano.',
        'Ejerzo una ciudadanía activa, crítica y responsable, comprometida con los derechos humanos y la construcción de paz.',
      ],
    },
  },
};

// Exportar para uso como módulo ES6 y como variable global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROGRESION_VERTICAL;
} else if (typeof window !== 'undefined') {
  window.PROGRESION_VERTICAL = PROGRESION_VERTICAL;
}
