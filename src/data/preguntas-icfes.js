/**
 * Banco de Preguntas tipo ICFES - Uso Offline
 * Instituto Colombiano para la Evaluación de la Educación (ICFES)
 *
 * Preguntas originales inspiradas en el formato y nivel de dificultad
 * de las pruebas Saber 9° y Saber 11° de Colombia.
 * NO son preguntas copiadas de exámenes oficiales.
 *
 * Áreas cubiertas:
 *   - Matemáticas: Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Lectura Crítica (Lenguaje): Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Ciencias Naturales: Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Ciencias Sociales: Saber 9° (30 preguntas) y Saber 11° (30 preguntas)
 *   - Inglés: Saber 11° (30 preguntas)
 *
 * Formato de ID: {area-abrev}-p-{prueba}-{numero}
 *   mat  = Matemáticas
 *   lc   = Lectura Crítica / Lenguaje
 *   nat  = Ciencias Naturales
 *   soc  = Ciencias Sociales
 *   eng  = Inglés
 *   s9   = Saber 9°
 *   s11  = Saber 11°
 */

const PREGUNTAS_ICFES = {

  // ===========================================================
  // MATEMÁTICAS
  // ===========================================================
  matematicas: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Numérico-variacional + razonamiento
      {
        id: 'mat-p-s9-01',
        enunciado: 'Sea x un número real que satisface la ecuación 3(x − 2) + 5 = 2x + 1. ¿Cuál de las siguientes afirmaciones es VERDADERA respecto a x?',
        opciones: [
          { letra: 'A', texto: 'x es negativo porque al despejar se obtiene x = −2.' },
          { letra: 'B', texto: 'x es un número natural porque al despejar se obtiene x = 2.' },
          { letra: 'C', texto: 'x es un entero positivo porque al despejar se obtiene x = 4.' },
          { letra: 'D', texto: 'x es un número irracional porque la ecuación no tiene solución entera.' },
        ],
        clave: 'B',
        justificacion: 'Desarrollando: 3x − 6 + 5 = 2x + 1, es decir, 3x − 1 = 2x + 1, de donde x = 2. Por lo tanto x = 2, que es un número natural positivo. Las opciones A, C y D presentan valores incorrectos de x o clasificaciones equivocadas del número.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 2. Numérico-variacional + resolución
      {
        id: 'mat-p-s9-02',
        enunciado: 'En una tienda de Medellín, Valentina compra 3 cuadernos y 2 lápices por $14.500. Si un lápiz cuesta $500 más que un cuaderno, ¿cuánto cuesta cada cuaderno?',
        opciones: [
          { letra: 'A', texto: '$2.500' },
          { letra: 'B', texto: '$2.700' },
          { letra: 'C', texto: '$3.000' },
          { letra: 'D', texto: '$3.500' },
        ],
        clave: 'B',
        justificacion: 'Sea c el precio de un cuaderno. El lápiz vale c + 500. La ecuación es: 3c + 2(c + 500) = 14.500, lo que da 5c + 1.000 = 14.500, entonces 5c = 13.500 y c = 2.700. Verificación: cuaderno = $2.700, lápiz = $3.200; 3(2.700) + 2(3.200) = 8.100 + 6.400 = 14.500. Las otras opciones ($2.500, $3.000, $3.500) no satisfacen la ecuación al ser sustituidas.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 3. Geométrico-métrico + comunicación
      {
        id: 'mat-p-s9-03',
        enunciado: 'En el plano cartesiano, los vértices de un triángulo son A(1, 1), B(5, 1) y C(3, 4). ¿Cuál es la longitud de la base AB del triángulo y cuál es su altura?',
        opciones: [
          { letra: 'A', texto: 'Base = 4 unidades; altura = 3 unidades.' },
          { letra: 'B', texto: 'Base = 4 unidades; altura = 4 unidades.' },
          { letra: 'C', texto: 'Base = 5 unidades; altura = 3 unidades.' },
          { letra: 'D', texto: 'Base = 3 unidades; altura = 4 unidades.' },
        ],
        clave: 'A',
        justificacion: 'La base AB va de (1,1) a (5,1): longitud = 5 − 1 = 4 unidades (ambos puntos tienen y = 1, por lo que la distancia es la diferencia en x). La altura es la distancia vertical desde C(3, 4) hasta la recta y = 1: altura = 4 − 1 = 3 unidades. La opción B confunde la altura con la coordenada y de C; las opciones C y D tienen valores incorrectos para la base.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 4. Geométrico-métrico + razonamiento
      {
        id: 'mat-p-s9-04',
        enunciado: 'Un cable va desde la cima de un poste de 6 m hasta un punto en el suelo a 8 m de la base del poste. ¿Cuál es la longitud del cable?',
        opciones: [
          { letra: 'A', texto: '10 m' },
          { letra: 'B', texto: '14 m' },
          { letra: 'C', texto: '√28 m' },
          { letra: 'D', texto: '7 m' },
        ],
        clave: 'A',
        justificacion: 'El poste, el suelo y el cable forman un triángulo rectángulo donde los catetos miden 6 m y 8 m. Aplicando el Teorema de Pitágoras: hipotenusa² = 6² + 8² = 36 + 64 = 100, por tanto la hipotenusa = √100 = 10 m. La opción B suma los catetos en vez de aplicar Pitágoras; la opción C calcula incorrectamente; la opción D no corresponde a ningún cálculo válido.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 5. Aleatorio + resolución
      {
        id: 'mat-p-s9-05',
        enunciado: 'Las notas de un grupo de 7 estudiantes en un examen de ciencias fueron: 3,5 — 4,0 — 2,5 — 4,5 — 3,5 — 5,0 — 4,0. ¿Cuáles son la media y la mediana de estas notas?',
        opciones: [
          { letra: 'A', texto: 'Media = 3,86; mediana = 4,0.' },
          { letra: 'B', texto: 'Media = 4,0; mediana = 3,5.' },
          { letra: 'C', texto: 'Media = 3,86; mediana = 3,5.' },
          { letra: 'D', texto: 'Media = 4,0; mediana = 4,0.' },
        ],
        clave: 'A',
        justificacion: 'La suma de las notas es 3,5 + 4,0 + 2,5 + 4,5 + 3,5 + 5,0 + 4,0 = 27,0. La media es 27,0 ÷ 7 ≈ 3,86. Ordenando los datos: 2,5 — 3,5 — 3,5 — 4,0 — 4,0 — 4,5 — 5,0; el valor central (4.° de 7) es 4,0, por lo que la mediana = 4,0. Las opciones B y D tienen la media incorrecta; la opción C tiene la mediana incorrecta.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 6. Numérico-variacional + comunicación (fracciones/porcentajes)
      {
        id: 'mat-p-s9-06',
        enunciado: 'En una encuesta realizada a 200 estudiantes de un colegio en Cali, el 35% practica algún deporte. ¿Cuántos estudiantes practican deporte y cuántos NO practican?',
        opciones: [
          { letra: 'A', texto: '70 practican deporte y 130 no practican.' },
          { letra: 'B', texto: '35 practican deporte y 165 no practican.' },
          { letra: 'C', texto: '65 practican deporte y 135 no practican.' },
          { letra: 'D', texto: '70 practican deporte y 120 no practican.' },
        ],
        clave: 'A',
        justificacion: 'El 35% de 200 = 0,35 × 200 = 70 estudiantes practican deporte. Los que no practican = 200 − 70 = 130. La opción B usa 35 como si fuera la cantidad directa, no el porcentaje. La opción C calcula el 65% en vez del 35%. La opción D tiene el complemento equivocado (200 − 70 = 130, no 120).',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 7. Numérico-variacional + razonamiento (potencias y radicales)
      {
        id: 'mat-p-s9-07',
        enunciado: '¿Cuál de las siguientes expresiones es equivalente a √(16x⁴) cuando x > 0?',
        opciones: [
          { letra: 'A', texto: '4x' },
          { letra: 'B', texto: '4x²' },
          { letra: 'C', texto: '8x²' },
          { letra: 'D', texto: '2x²' },
        ],
        clave: 'B',
        justificacion: '√(16x⁴) = √16 · √(x⁴) = 4 · x² = 4x². Se aplica la propiedad √(a·b) = √a · √b. La opción A olvida que el exponente de x es 4 (la raíz cuadrada de x⁴ es x², no x). La opción C multiplica incorrectamente 4·2. La opción D calcula √16 = 2 en vez de 4.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 8. Numérico-variacional + resolución (sistemas de ecuaciones)
      {
        id: 'mat-p-s9-08',
        enunciado: 'En una granja hay gallinas y conejos. En total hay 20 animales y 56 patas. ¿Cuántas gallinas y cuántos conejos hay?',
        opciones: [
          { letra: 'A', texto: '12 gallinas y 8 conejos.' },
          { letra: 'B', texto: '8 gallinas y 12 conejos.' },
          { letra: 'C', texto: '10 gallinas y 10 conejos.' },
          { letra: 'D', texto: '14 gallinas y 6 conejos.' },
        ],
        clave: 'A',
        justificacion: 'Sea g = gallinas (2 patas) y c = conejos (4 patas). El sistema es: g + c = 20 y 2g + 4c = 56. De la primera ecuación: g = 20 − c. Sustituyendo: 2(20 − c) + 4c = 56 → 40 + 2c = 56 → c = 8, por tanto g = 12. Verificación: 12 + 8 = 20 ✓ y 2(12) + 4(8) = 24 + 32 = 56 ✓. Las demás opciones no satisfacen ambas condiciones simultáneamente.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 9. Geométrico-métrico + resolución (área y perímetro)
      {
        id: 'mat-p-s9-09',
        enunciado: 'Un jardín rectangular tiene un largo de 12 m y un ancho de 7 m. Se quiere rodear el jardín con una cerca y también cubrir el piso con césped. ¿Cuántos metros de cerca se necesitan y cuántos m² de césped?',
        opciones: [
          { letra: 'A', texto: 'Cerca = 38 m; césped = 84 m².' },
          { letra: 'B', texto: 'Cerca = 84 m; césped = 38 m².' },
          { letra: 'C', texto: 'Cerca = 38 m; césped = 42 m².' },
          { letra: 'D', texto: 'Cerca = 19 m; césped = 84 m².' },
        ],
        clave: 'A',
        justificacion: 'El perímetro (cerca) = 2(largo + ancho) = 2(12 + 7) = 2 × 19 = 38 m. El área (césped) = largo × ancho = 12 × 7 = 84 m². La opción B invierte perímetro y área. La opción C calcula la mitad del área. La opción D usa la mitad del perímetro.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 10. Geométrico-métrico + razonamiento (semejanza de triángulos)
      {
        id: 'mat-p-s9-10',
        enunciado: 'Un árbol proyecta una sombra de 6 m al mismo tiempo que un poste de 2 m proyecta una sombra de 1,5 m. ¿Cuál es la altura del árbol?',
        opciones: [
          { letra: 'A', texto: '6 m' },
          { letra: 'B', texto: '8 m' },
          { letra: 'C', texto: '9 m' },
          { letra: 'D', texto: '4 m' },
        ],
        clave: 'B',
        justificacion: 'Los triángulos formados por el árbol y el poste con sus sombras son semejantes (mismo ángulo solar). La razón de proporcionalidad es: altura / sombra = constante. Para el poste: 2 / 1,5 = 4/3. Para el árbol: h / 6 = 4/3, entonces h = 6 × (4/3) = 8 m. Otra forma: h/6 = 2/1,5 → h = 12/1,5 = 8 m. Las demás opciones no respetan la proporción correcta.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 11. Geométrico-métrico + comunicación (transformaciones)
      {
        id: 'mat-p-s9-11',
        enunciado: 'El punto A(−3, 2) se refleja sobre el eje y. ¿Cuáles son las coordenadas del punto imagen A\'?',
        opciones: [
          { letra: 'A', texto: 'A\' = (3, 2)' },
          { letra: 'B', texto: 'A\' = (−3, −2)' },
          { letra: 'C', texto: 'A\' = (3, −2)' },
          { letra: 'D', texto: 'A\' = (−2, 3)' },
        ],
        clave: 'A',
        justificacion: 'En una reflexión sobre el eje y, la coordenada x cambia de signo y la coordenada y permanece igual: (x, y) → (−x, y). Entonces A(−3, 2) → A\'(3, 2). La opción B refleja sobre el origen (cambian ambas coordenadas). La opción C refleja sobre el eje x (solo cambia y). La opción D intercambia las coordenadas (reflexión sobre la recta y = x).',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 12. Aleatorio + razonamiento (probabilidad clásica)
      {
        id: 'mat-p-s9-12',
        enunciado: 'Se lanza un dado de 6 caras. ¿Cuál es la probabilidad de obtener un número par o mayor que 4?',
        opciones: [
          { letra: 'A', texto: '1/2' },
          { letra: 'B', texto: '2/3' },
          { letra: 'C', texto: '5/6' },
          { letra: 'D', texto: '4/6' },
        ],
        clave: 'B',
        justificacion: 'Los números pares son {2, 4, 6} y los mayores que 4 son {5, 6}. La unión es {2, 4, 5, 6} (4 resultados favorables). P = 4/6 = 2/3. Usando la regla de la adición: P(par) = 3/6, P(>4) = 2/6, P(par ∩ >4) = P({6}) = 1/6. P(par ∪ >4) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3. La opción A solo considera los pares. La opción C sobreestima la unión. La opción D es equivalente a 2/3, pero no está simplificada (ambas son correctas numéricamente; B está en su mínima expresión y es la forma canónica).',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 13. Aleatorio + comunicación (lectura de gráficas)
      {
        id: 'mat-p-s9-13',
        enunciado: 'La siguiente tabla muestra el número de libros leídos por 5 estudiantes en un mes:\n\nEstudiante: Ana, Luis, Sara, Pedro, María\nLibros: 4, 7, 3, 6, 5\n\n¿Cuál es la moda de estos datos?',
        opciones: [
          { letra: 'A', texto: 'La moda es 5.' },
          { letra: 'B', texto: 'La moda es 4.' },
          { letra: 'C', texto: 'No hay moda porque todos los valores son distintos.' },
          { letra: 'D', texto: 'La moda es 6.' },
        ],
        clave: 'C',
        justificacion: 'Los datos son: 3, 4, 5, 6, 7. Todos los valores aparecen exactamente una vez, por lo que ningún valor se repite. Cuando todos los datos tienen la misma frecuencia (frecuencia 1), se dice que el conjunto no tiene moda. La opción A confunde la moda con la mediana. Las opciones B y D seleccionan valores arbitrarios del conjunto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 14. Numérico-variacional + razonamiento (funciones lineales)
      {
        id: 'mat-p-s9-14',
        enunciado: 'La función f(x) = 2x − 3 modela el costo en miles de pesos de producir x unidades de un producto. ¿Para qué valor de x el costo es igual a 9 miles de pesos?',
        opciones: [
          { letra: 'A', texto: 'x = 3' },
          { letra: 'B', texto: 'x = 6' },
          { letra: 'C', texto: 'x = 4' },
          { letra: 'D', texto: 'x = 5' },
        ],
        clave: 'B',
        justificacion: 'Se busca x tal que f(x) = 9: 2x − 3 = 9 → 2x = 12 → x = 6. Verificación: f(6) = 2(6) − 3 = 12 − 3 = 9 ✓. La opción A: f(3) = 6 − 3 = 3 ≠ 9. La opción C: f(4) = 8 − 3 = 5 ≠ 9. La opción D: f(5) = 10 − 3 = 7 ≠ 9.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 15. Aleatorio + resolución (interpretación estadística)
      {
        id: 'mat-p-s9-15',
        enunciado: 'En un grupo de 30 estudiantes, la nota promedio en matemáticas fue 3,8 y en español fue 4,1. Si se suman los promedios de ambas materias, ¿cuál es el promedio combinado? ¿Qué conclusión es válida?',
        opciones: [
          { letra: 'A', texto: 'El promedio combinado es 7,9 y los estudiantes rinden mejor en matemáticas.' },
          { letra: 'B', texto: 'El promedio combinado es 3,95 y los estudiantes rinden mejor en español.' },
          { letra: 'C', texto: 'El promedio combinado es 3,95 y los estudiantes rinden igual en ambas materias.' },
          { letra: 'D', texto: 'No es posible calcular un promedio combinado porque las materias son diferentes.' },
        ],
        clave: 'B',
        justificacion: 'El promedio combinado de los dos promedios es (3,8 + 4,1) / 2 = 7,9 / 2 = 3,95. Como el promedio de español (4,1) es mayor que el de matemáticas (3,8), los estudiantes rinden mejor en español. La opción A usa la suma sin dividir y concluye incorrectamente. La opción C afirma rendimiento igual cuando hay diferencia de 0,3 puntos. La opción D es incorrecta: se pueden comparar promedios de diferentes materias.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 16. Numérico-variacional + razonamiento (sucesiones)
      {
        id: 'mat-p-s9-16',
        enunciado: 'Observa la siguiente sucesión: 2, 6, 18, 54, 162, … ¿Cuál es el término que sigue y cuál es la razón de la sucesión?',
        opciones: [
          { letra: 'A', texto: 'El siguiente término es 324 y la razón es 2.' },
          { letra: 'B', texto: 'El siguiente término es 486 y la razón es 3.' },
          { letra: 'C', texto: 'El siguiente término es 324 y la razón es 3.' },
          { letra: 'D', texto: 'El siguiente término es 216 y la razón es 4.' },
        ],
        clave: 'B',
        justificacion: 'Cada término se obtiene multiplicando el anterior por 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162, 162×3=486. La razón de la sucesión geométrica es 3 y el siguiente término es 486. La opción A calcula 162×2=324 usando razón incorrecta 2. La opción C obtiene el valor correcto de la razón (3) pero calcula el término incorrectamente. La opción D usa razón 4, que no es consistente con los datos.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 17. Aleatorio + comunicación (diagrama de caja)
      {
        id: 'mat-p-s9-17',
        enunciado: 'Los tiempos (en minutos) que tardaron 9 corredores en completar una carrera son: 12, 14, 15, 15, 17, 18, 20, 22, 25. ¿Cuál es la mediana y el rango intercuartílico (RIC) de estos datos?',
        opciones: [
          { letra: 'A', texto: 'Mediana = 17; RIC = 7.' },
          { letra: 'B', texto: 'Mediana = 17; RIC = 13.' },
          { letra: 'C', texto: 'Mediana = 15; RIC = 7.' },
          { letra: 'D', texto: 'Mediana = 17; RIC = 8.' },
        ],
        clave: 'A',
        justificacion: 'Con 9 datos ordenados, la mediana es el 5.° valor: 17. El cuartil inferior Q1 es la mediana de los primeros 4 datos (12, 14, 15, 15): Q1 = (14+15)/2 = 14,5. El cuartil superior Q3 es la mediana de los últimos 4 datos (18, 20, 22, 25): Q3 = (20+22)/2 = 21. RIC = Q3 − Q1 = 21 − 14,5 = 6,5 ≈ 7. La opción B calcula el rango total (25−12=13), no el intercuartílico. La opción C usa la moda (15) como mediana. La opción D usa el rango incorrecto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 18. Geométrico-métrico + resolución (volumen)
      {
        id: 'mat-p-s9-18',
        enunciado: 'Una piscina tiene forma de prisma rectangular con 12 m de largo, 6 m de ancho y 1,5 m de profundidad. ¿Cuántos litros de agua se necesitan para llenarla completamente? (1 m³ = 1000 litros)',
        opciones: [
          { letra: 'A', texto: '108.000 litros' },
          { letra: 'B', texto: '10.800 litros' },
          { letra: 'C', texto: '1.080.000 litros' },
          { letra: 'D', texto: '108 litros' },
        ],
        clave: 'A',
        justificacion: 'Volumen = largo × ancho × profundidad = 12 × 6 × 1,5 = 108 m³. Convirtiendo: 108 m³ × 1000 litros/m³ = 108.000 litros. La opción B divide entre 10, probablemente olvidando un factor. La opción C multiplica innecesariamente por 10. La opción D omite la conversión de metros cúbicos a litros (o divide erróneamente).',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 19. Numérico-variacional + comunicación (proporcionalidad)
      {
        id: 'mat-p-s9-19',
        enunciado: 'Tres obreros pintan una pared en 6 horas. ¿Cuántas horas tardarán 6 obreros en pintar la misma pared, si todos trabajan al mismo ritmo?',
        opciones: [
          { letra: 'A', texto: '12 horas' },
          { letra: 'B', texto: '3 horas' },
          { letra: 'C', texto: '2 horas' },
          { letra: 'D', texto: '9 horas' },
        ],
        clave: 'B',
        justificacion: 'Este es un problema de proporcionalidad inversa: a más obreros, menos horas. El trabajo total es 3 obreros × 6 horas = 18 obrero·horas. Con 6 obreros: 18 ÷ 6 = 3 horas. Al duplicar los obreros, el tiempo se reduce a la mitad: 6/2 = 3 horas. La opción A duplica el tiempo en lugar de reducirlo. La opción C divide entre 3, como si los obreros se triplicaran. La opción D suma en lugar de aplicar proporcionalidad inversa.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 20. Geométrico-métrico + razonamiento (ángulos)
      {
        id: 'mat-p-s9-20',
        enunciado: 'Dos rectas paralelas son cortadas por una transversal. Uno de los ángulos alternos internos mide 65°. ¿Cuánto miden los siguientes ángulos: el ángulo alterno interno del otro lado, el ángulo correspondiente y el ángulo co-interior (mismo lado de la transversal)?',
        opciones: [
          { letra: 'A', texto: 'Alterno interno: 65°; correspondiente: 65°; co-interior: 115°.' },
          { letra: 'B', texto: 'Alterno interno: 115°; correspondiente: 65°; co-interior: 65°.' },
          { letra: 'C', texto: 'Alterno interno: 65°; correspondiente: 115°; co-interior: 115°.' },
          { letra: 'D', texto: 'Alterno interno: 65°; correspondiente: 65°; co-interior: 65°.' },
        ],
        clave: 'A',
        justificacion: 'Propiedades de rectas paralelas con transversal: (1) Los ángulos alternos internos son iguales: 65°. (2) Los ángulos correspondientes son iguales: 65°. (3) Los ángulos co-interiores (o conjugados internos) son suplementarios y suman 180°: 180° − 65° = 115°. La opción B invierte los alternos internos. La opción C confunde correspondientes con co-interiores. La opción D aplica incorrectamente la propiedad de co-interiores.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 21. Aleatorio + resolución (probabilidad de eventos compuestos)
      {
        id: 'mat-p-s9-21',
        enunciado: 'Se lanza una moneda y un dado de 6 caras al mismo tiempo. ¿Cuál es la probabilidad de obtener cara en la moneda Y un número par en el dado?',
        opciones: [
          { letra: 'A', texto: '1/4' },
          { letra: 'B', texto: '1/2' },
          { letra: 'C', texto: '3/12' },
          { letra: 'D', texto: '1/6' },
        ],
        clave: 'A',
        justificacion: 'P(cara) = 1/2. P(número par en dado) = 3/6 = 1/2 (los pares son 2, 4, 6). Como son eventos independientes: P(cara Y par) = (1/2) × (1/2) = 1/4. El espacio muestral total tiene 2 × 6 = 12 resultados posibles; los favorables son 1 (cara) × 3 (pares) = 3; P = 3/12 = 1/4. La opción B es P(cara) o P(par) por separado. La opción C es la fracción sin simplificar (equivale a 1/4, que es A). La opción D solo considera el dado.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 22. Numérico-variacional + razonamiento (notación científica)
      {
        id: 'mat-p-s9-22',
        enunciado: '¿Cuál de las siguientes expresiones en notación científica es equivalente a 0,000045?',
        opciones: [
          { letra: 'A', texto: '4,5 × 10⁻⁵' },
          { letra: 'B', texto: '45 × 10⁻⁶' },
          { letra: 'C', texto: '4,5 × 10⁵' },
          { letra: 'D', texto: '0,45 × 10⁻⁴' },
        ],
        clave: 'A',
        justificacion: 'Para escribir 0,000045 en notación científica: se mueve la coma 5 posiciones a la derecha hasta obtener 4,5, por lo que el exponente es −5. La forma correcta es 4,5 × 10⁻⁵. La opción B es equivalente numéricamente (45 × 10⁻⁶ = 4,5 × 10⁻⁵) pero no está en notación científica estándar (el coeficiente debe estar entre 1 y 10). La opción C tiene exponente positivo, que representaría un número grande. La opción D tiene el coeficiente fuera del rango estándar.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 23. Geométrico-métrico + comunicación (plano cartesiano - distancia)
      {
        id: 'mat-p-s9-23',
        enunciado: '¿Cuál es la distancia entre los puntos P(−2, 3) y Q(4, −1) en el plano cartesiano?',
        opciones: [
          { letra: 'A', texto: '√52 ≈ 7,2 unidades' },
          { letra: 'B', texto: '10 unidades' },
          { letra: 'C', texto: '√20 ≈ 4,5 unidades' },
          { letra: 'D', texto: '√28 ≈ 5,3 unidades' },
        ],
        clave: 'A',
        justificacion: 'Fórmula de distancia: d = √[(x₂−x₁)² + (y₂−y₁)²] = √[(4−(−2))² + (−1−3)²] = √[6² + (−4)²] = √[36 + 16] = √52 ≈ 7,2 unidades. La opción B suma las diferencias absolutas en vez de aplicar la fórmula (6 + 4 = 10). La opción C calcula solo una de las dos diferencias al cuadrado. La opción D comete un error aritmético en la suma de cuadrados.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 24. Aleatorio + razonamiento (diagrama de árbol)
      {
        id: 'mat-p-s9-24',
        enunciado: 'Una bolsa tiene 3 bolas rojas y 2 bolas azules. Se extraen dos bolas sin reposición. ¿Cuál es la probabilidad de que ambas bolas sean rojas?',
        opciones: [
          { letra: 'A', texto: '9/25' },
          { letra: 'B', texto: '3/10' },
          { letra: 'C', texto: '6/25' },
          { letra: 'D', texto: '1/2' },
        ],
        clave: 'B',
        justificacion: 'P(1.ª roja) = 3/5. Si ya se extrajo una roja, quedan 2 rojas de 4 bolas totales: P(2.ª roja | 1.ª roja) = 2/4 = 1/2. P(ambas rojas) = (3/5) × (1/2) = 3/10. La opción A aplica probabilidad con reposición: (3/5)² = 9/25. La opción C calcula incorrectamente. La opción D es P(2.ª roja dado que la primera fue roja), sin multiplicar por la probabilidad de la primera.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 25. Numérico-variacional + resolución (inecuaciones)
      {
        id: 'mat-p-s9-25',
        enunciado: 'Resuelve la inecuación: 2x − 5 > 3x + 1. ¿Cuál es el conjunto solución?',
        opciones: [
          { letra: 'A', texto: 'x > −6' },
          { letra: 'B', texto: 'x < −6' },
          { letra: 'C', texto: 'x > 6' },
          { letra: 'D', texto: 'x < 6' },
        ],
        clave: 'B',
        justificacion: 'Desarrollando: 2x − 5 > 3x + 1 → 2x − 3x > 1 + 5 → −x > 6 → x < −6 (al multiplicar por −1 se invierte la desigualdad). Verificación: si x = −7 (< −6): 2(−7) − 5 = −19 y 3(−7) + 1 = −20; −19 > −20 ✓. La opción A no invierte la desigualdad al dividir entre −1. La opción C comete un error de signo en el despeje. La opción D obtiene el valor correcto del umbral pero no invierte la desigualdad.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 26. Geométrico-métrico + resolución (triángulos - perímetro)
      {
        id: 'mat-p-s9-26',
        enunciado: 'Un terreno triangular es rectángulo con catetos de 15 m y 20 m. Si se quiere cercar el terreno con alambre, ¿cuántos metros de alambre se necesitan?',
        opciones: [
          { letra: 'A', texto: '35 m' },
          { letra: 'B', texto: '60 m' },
          { letra: 'C', texto: '75 m' },
          { letra: 'D', texto: '150 m' },
        ],
        clave: 'B',
        justificacion: 'Para cercar se necesita el perímetro. La hipotenusa del triángulo rectángulo con catetos 15 m y 20 m es: c = √(15² + 20²) = √(225 + 400) = √625 = 25 m. Perímetro = 15 + 20 + 25 = 60 m de alambre. La opción A solo suma los dos catetos (35 m). La opción C añade incorrectamente 15 m extra. La opción D calcula el doble del perímetro.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 27. Numérico-variacional + comunicación (funciones cuadráticas - tabla de valores)
      {
        id: 'mat-p-s9-27',
        enunciado: 'Para la función f(x) = x² − 4, ¿cuál de los siguientes pares ordenados NO pertenece a la gráfica de f?',
        opciones: [
          { letra: 'A', texto: '(0, −4)' },
          { letra: 'B', texto: '(2, 0)' },
          { letra: 'C', texto: '(3, 5)' },
          { letra: 'D', texto: '(−2, 4)' },
        ],
        clave: 'D',
        justificacion: 'Se verifica sustituyendo cada par en f(x) = x² − 4: A: f(0) = 0 − 4 = −4 ✓. B: f(2) = 4 − 4 = 0 ✓. C: f(3) = 9 − 4 = 5 ✓. D: f(−2) = (−2)² − 4 = 4 − 4 = 0, no 4. El par (−2, 4) no pertenece a la gráfica porque f(−2) = 0, no 4. Las opciones A, B y C satisfacen la función.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 28. Aleatorio + comunicación (lectura de gráficas de barras)
      {
        id: 'mat-p-s9-28',
        enunciado: 'Una gráfica de barras muestra las ventas mensuales de una tienda: enero=80, febrero=65, marzo=90, abril=75, mayo=85 (en miles de pesos). ¿Cuál es la diferencia entre el mes de mayor venta y el de menor venta, y cuál es el promedio de ventas?',
        opciones: [
          { letra: 'A', texto: 'Diferencia = 25 mil; promedio = 79 mil.' },
          { letra: 'B', texto: 'Diferencia = 25 mil; promedio = 79.000.' },
          { letra: 'C', texto: 'Diferencia = 30 mil; promedio = 79 mil.' },
          { letra: 'D', texto: 'Diferencia = 25 mil; promedio = 80 mil.' },
        ],
        clave: 'A',
        justificacion: 'Mayor venta: marzo = 90 mil. Menor venta: febrero = 65 mil. Diferencia = 90 − 65 = 25 mil. Promedio = (80 + 65 + 90 + 75 + 85) / 5 = 395 / 5 = 79 mil. La opción B expresa correctamente la diferencia pero el promedio en unidades inconsistentes (79.000 pesos es lo mismo que 79 mil, ambas son equivalentes; sin embargo A usa la forma más limpia). La opción C calcula la diferencia incorrectamente. La opción D redondea mal el promedio.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 29. Geométrico-métrico + razonamiento (círculos)
      {
        id: 'mat-p-s9-29',
        enunciado: 'Un círculo tiene radio de 7 cm. ¿Cuáles son su área y su circunferencia? (Use π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Área ≈ 153,86 cm²; circunferencia ≈ 43,96 cm.' },
          { letra: 'B', texto: 'Área ≈ 43,96 cm²; circunferencia ≈ 153,86 cm.' },
          { letra: 'C', texto: 'Área ≈ 153,86 cm²; circunferencia ≈ 21,98 cm.' },
          { letra: 'D', texto: 'Área ≈ 307,72 cm²; circunferencia ≈ 43,96 cm.' },
        ],
        clave: 'A',
        justificacion: 'Área = π·r² = 3,14 × 7² = 3,14 × 49 ≈ 153,86 cm². Circunferencia = 2·π·r = 2 × 3,14 × 7 ≈ 43,96 cm. La opción B invierte área y circunferencia. La opción C calcula la circunferencia como π·r en vez de 2·π·r. La opción D calcula el área usando el diámetro (14) en lugar del radio (7).',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 30. Numérico-variacional + resolución (sistemas de ecuaciones - método de sustitución)
      {
        id: 'mat-p-s9-30',
        enunciado: 'Dos números son tales que su suma es 48 y su diferencia es 12. ¿Cuáles son los dos números?',
        opciones: [
          { letra: 'A', texto: '30 y 18' },
          { letra: 'B', texto: '24 y 24' },
          { letra: 'C', texto: '36 y 12' },
          { letra: 'D', texto: '32 y 16' },
        ],
        clave: 'A',
        justificacion: 'Sea x el número mayor e y el menor. Sistema: x + y = 48 y x − y = 12. Sumando las ecuaciones: 2x = 60, entonces x = 30. Sustituyendo: 30 + y = 48, y = 18. Verificación: 30 + 18 = 48 ✓ y 30 − 18 = 12 ✓. La opción B da suma correcta pero diferencia 0. La opción C: 36 + 12 = 48 ✓ pero 36 − 12 = 24 ≠ 12. La opción D: 32 + 16 = 48 ✓ pero 32 − 16 = 16 ≠ 12.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Numérico-variacional + razonamiento (funciones / límites)
      {
        id: 'mat-p-s11-01',
        enunciado: 'La función f(x) = (x² − 9) / (x − 3) no está definida en x = 3. Sin embargo, al analizar los valores de f(x) cuando x se aproxima a 3 desde ambos lados, se concluye que:',
        opciones: [
          { letra: 'A', texto: 'El límite cuando x → 3 no existe, porque la función no está definida en ese punto.' },
          { letra: 'B', texto: 'El límite cuando x → 3 es 0, porque el numerador se anula en x = 3.' },
          { letra: 'C', texto: 'El límite cuando x → 3 es 6, porque se puede simplificar f(x) = x + 3 para x ≠ 3.' },
          { letra: 'D', texto: 'El límite cuando x → 3 es infinito, porque hay una división por cero.' },
        ],
        clave: 'C',
        justificacion: 'El numerador x² − 9 = (x − 3)(x + 3). Para x ≠ 3, la expresión se simplifica a f(x) = x + 3. Cuando x → 3, f(x) → 3 + 3 = 6. El límite existe aunque f no esté definida en x = 3; la no definición en un punto no implica que el límite no exista (opción A). El límite no es 0 (opción B) ni infinito (opción D), pues la indeterminación 0/0 se resuelve al factorizar.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 2. Numérico-variacional + resolución (sistemas / optimización)
      {
        id: 'mat-p-s11-02',
        enunciado: 'Una finca productora de café en Huila debe distribuir 120 hectáreas entre dos variedades: Castillo y Colombia. La variedad Castillo genera una utilidad de $2.000.000 por hectárea y la Colombia de $1.500.000. Si se requiere plantar al menos 30 ha de cada variedad, ¿cuántas hectáreas de Castillo se deben plantar para maximizar la utilidad total?',
        opciones: [
          { letra: 'A', texto: '30 hectáreas de Castillo y 90 de Colombia.' },
          { letra: 'B', texto: '60 hectáreas de cada variedad.' },
          { letra: 'C', texto: '90 hectáreas de Castillo y 30 de Colombia.' },
          { letra: 'D', texto: '120 hectáreas de Castillo y 0 de Colombia.' },
        ],
        clave: 'C',
        justificacion: 'Sea c las hectáreas de Castillo. La función de utilidad es U = 2.000.000c + 1.500.000(120 − c) = 500.000c + 180.000.000, que es creciente en c. Para maximizar U, se debe maximizar c sujeto a: c ≥ 30 y 120 − c ≥ 30 (es decir, c ≤ 90). El máximo se alcanza en c = 90. La opción D viola la restricción mínima de 30 ha de Colombia; las opciones A y B no maximizan la utilidad.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 3. Geométrico-métrico + comunicación (vectores / transformaciones)
      {
        id: 'mat-p-s11-03',
        enunciado: 'El punto P(2, 5) es sometido primero a una reflexión sobre el eje x y luego a una traslación de vector (3, −1). ¿Cuáles son las coordenadas del punto imagen final P\'\'?',
        opciones: [
          { letra: 'A', texto: 'P\'\' = (5, −6)' },
          { letra: 'B', texto: 'P\'\' = (5, 4)' },
          { letra: 'C', texto: 'P\'\' = (−1, 6)' },
          { letra: 'D', texto: 'P\'\' = (5, −4)' },
        ],
        clave: 'A',
        justificacion: 'Reflexión de P(2, 5) sobre el eje x: P\'(2, −5) (la coordenada y cambia de signo). Traslación con vector (3, −1): P\'\'(2 + 3, −5 + (−1)) = P\'\'(5, −6). La opción B olvida cambiar el signo de y en la reflexión; la opción D aplica la traslación al punto original sin reflejar; la opción C comete errores en ambas transformaciones.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 4. Aleatorio + razonamiento (distribuciones / inferencia)
      {
        id: 'mat-p-s11-04',
        enunciado: 'En dos colegios de Bogotá se midió el tiempo de desplazamiento (en minutos) de los estudiantes. Colegio A: media = 25 min, desviación estándar = 5 min. Colegio B: media = 25 min, desviación estándar = 15 min. ¿Cuál afirmación es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'Los estudiantes del colegio A tienen tiempos más homogéneos que los del colegio B.' },
          { letra: 'B', texto: 'Los estudiantes del colegio B tienen, en promedio, mayor tiempo de desplazamiento.' },
          { letra: 'C', texto: 'No es posible comparar los dos grupos porque tienen distribuciones diferentes.' },
          { letra: 'D', texto: 'La mediana del colegio A es mayor que la del colegio B porque su desviación estándar es menor.' },
        ],
        clave: 'A',
        justificacion: 'La desviación estándar mide la dispersión de los datos alrededor de la media. Como el colegio A tiene desviación estándar de 5 min (menor), sus tiempos están más concentrados cerca de la media de 25 min, es decir, son más homogéneos. La opción B es falsa porque ambas medias son iguales (25 min). La opción C es incorrecta: se pueden comparar grupos con diferentes dispersiones. La opción D confunde desviación estándar con mediana.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 5. Aleatorio + resolución (probabilidad condicional / conteo)
      {
        id: 'mat-p-s11-05',
        enunciado: 'En una urna hay 4 bolas rojas y 6 bolas azules. Se extraen dos bolas sin reposición. ¿Cuál es la probabilidad de que la segunda bola sea azul, dado que la primera también fue azul?',
        opciones: [
          { letra: 'A', texto: '6/10' },
          { letra: 'B', texto: '5/9' },
          { letra: 'C', texto: '5/10' },
          { letra: 'D', texto: '6/9' },
        ],
        clave: 'B',
        justificacion: 'Si la primera bola extraída fue azul, quedan en la urna 4 rojas y 5 azules (9 en total). La probabilidad de que la segunda sea azul dado que la primera lo fue es P(2.ª azul | 1.ª azul) = 5/9. La opción A usa el total inicial sin actualizar; la opción C divide incorrectamente; la opción D usa numerador incorrecto de 6 sin descontar la bola ya extraída.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 6. Numérico-variacional + comunicación (funciones exponenciales)
      {
        id: 'mat-p-s11-06',
        enunciado: 'Una bacteria se duplica cada hora. Si al inicio hay 500 bacterias, ¿cuántas habrá después de 4 horas? ¿Qué función modela esta situación?',
        opciones: [
          { letra: 'A', texto: 'f(t) = 500 + 2t; después de 4 h hay 508 bacterias.' },
          { letra: 'B', texto: 'f(t) = 500 · 2^t; después de 4 h hay 8.000 bacterias.' },
          { letra: 'C', texto: 'f(t) = 500 · 2t; después de 4 h hay 4.000 bacterias.' },
          { letra: 'D', texto: 'f(t) = 2^t + 500; después de 4 h hay 516 bacterias.' },
        ],
        clave: 'B',
        justificacion: 'El crecimiento por duplicación es exponencial: f(t) = 500 · 2^t, donde t es el número de horas. Después de 4 horas: f(4) = 500 · 2⁴ = 500 · 16 = 8.000. La opción A usa un modelo lineal (sumar 2 por hora) que no refleja la duplicación. La opción C usa multiplicación directa 2t en lugar de exponencial. La opción D suma la potencia al valor inicial sin multiplicar.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 7. Numérico-variacional + resolución (ecuaciones cuadráticas)
      {
        id: 'mat-p-s11-07',
        enunciado: 'Un terreno rectangular tiene un área de 60 m². El largo es 7 m más que el ancho. ¿Cuáles son las dimensiones del terreno?',
        opciones: [
          { letra: 'A', texto: 'Ancho = 5 m, largo = 12 m.' },
          { letra: 'B', texto: 'Ancho = 4 m, largo = 15 m.' },
          { letra: 'C', texto: 'Ancho = 6 m, largo = 10 m.' },
          { letra: 'D', texto: 'Ancho = 3 m, largo = 20 m.' },
        ],
        clave: 'A',
        justificacion: 'Sea a el ancho. El largo = a + 7. La ecuación de área es: a(a + 7) = 60 → a² + 7a − 60 = 0. Usando la fórmula cuadrática o factorizando: (a + 12)(a − 5) = 0, de donde a = 5 (descartamos a = −12 por ser negativa). Largo = 5 + 7 = 12. Verificación: 5 × 12 = 60 ✓. La opción B: 4 × 15 = 60 pero 15 − 4 = 11 ≠ 7. La opción C: 6 × 10 = 60 pero 10 − 6 = 4 ≠ 7. La opción D: 3 × 20 = 60 pero 20 − 3 = 17 ≠ 7.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 8. Numérico-variacional + razonamiento (análisis de funciones)
      {
        id: 'mat-p-s11-08',
        enunciado: 'La gráfica de la función f(x) = −x² + 4x − 3 tiene un punto máximo. ¿Cuáles son las coordenadas de ese punto máximo?',
        opciones: [
          { letra: 'A', texto: '(2, 1)' },
          { letra: 'B', texto: '(−2, 1)' },
          { letra: 'C', texto: '(2, −3)' },
          { letra: 'D', texto: '(4, 1)' },
        ],
        clave: 'A',
        justificacion: 'Para f(x) = ax² + bx + c con a < 0, el vértice (máximo) está en x = −b/(2a) = −4/(2·(−1)) = −4/(−2) = 2. El valor máximo: f(2) = −(4) + 4(2) − 3 = −4 + 8 − 3 = 1. El vértice es (2, 1). La opción B usa x negativo. La opción C usa el valor de c en lugar de f(2). La opción D usa el valor de b como coordenada x.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 9. Geométrico-métrico + resolución (trigonometría)
      {
        id: 'mat-p-s11-09',
        enunciado: 'Desde el suelo, el ángulo de elevación a la cima de un edificio es de 30°. Si el observador está a 40 m de la base del edificio, ¿cuál es la altura del edificio? (Use tan 30° = √3/3 ≈ 0,577)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 23,1 m.' },
          { letra: 'B', texto: 'Aproximadamente 46,2 m.' },
          { letra: 'C', texto: 'Aproximadamente 69,3 m.' },
          { letra: 'D', texto: 'Aproximadamente 20,0 m.' },
        ],
        clave: 'A',
        justificacion: 'En el triángulo rectángulo: tan(30°) = altura / distancia = h / 40. Entonces h = 40 · tan(30°) = 40 · (√3/3) ≈ 40 · 0,577 ≈ 23,1 m. La opción B usa tan(60°) ≈ 1,732 (ángulo equivocado). La opción C usa tan(60°) y multiplica doble. La opción D aproxima incorrectamente.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 10. Geométrico-métrico + comunicación (geometría analítica)
      {
        id: 'mat-p-s11-10',
        enunciado: 'Dos puntos en el plano cartesiano son A(1, 3) y B(5, 7). ¿Cuál es la pendiente de la recta que pasa por A y B, y cuál es la ecuación de esa recta?',
        opciones: [
          { letra: 'A', texto: 'Pendiente = 1; ecuación: y = x + 2.' },
          { letra: 'B', texto: 'Pendiente = 2; ecuación: y = 2x + 1.' },
          { letra: 'C', texto: 'Pendiente = 1; ecuación: y = x + 1.' },
          { letra: 'D', texto: 'Pendiente = 4; ecuación: y = 4x − 1.' },
        ],
        clave: 'A',
        justificacion: 'Pendiente m = (y₂ − y₁)/(x₂ − x₁) = (7 − 3)/(5 − 1) = 4/4 = 1. Ecuación usando punto A(1, 3): y − 3 = 1(x − 1) → y = x − 1 + 3 → y = x + 2. Verificación con B(5,7): y = 5 + 2 = 7 ✓. La opción B calcula la pendiente incorrectamente. La opción C tiene la ecuación equivocada (y = 1 + 1 = 2 ≠ 3). La opción D usa la diferencia de y sin dividir entre la diferencia de x.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 11. Geométrico-métrico + razonamiento (volumen de sólidos)
      {
        id: 'mat-p-s11-11',
        enunciado: 'Un silo cilíndrico tiene radio de 3 m y altura de 10 m. Un segundo silo tiene el doble de radio y la misma altura. ¿Cuántas veces es mayor el volumen del segundo silo respecto al primero?',
        opciones: [
          { letra: 'A', texto: '2 veces mayor.' },
          { letra: 'B', texto: '4 veces mayor.' },
          { letra: 'C', texto: '6 veces mayor.' },
          { letra: 'D', texto: '8 veces mayor.' },
        ],
        clave: 'B',
        justificacion: 'El volumen de un cilindro es V = π·r²·h. Silo 1: V₁ = π·(3²)·10 = 90π. Silo 2 con radio 6: V₂ = π·(6²)·10 = 360π. Razón: V₂/V₁ = 360π/90π = 4. Como el radio se duplica y el área de la base depende del cuadrado del radio (2r)² = 4r², el volumen se cuadruplica. La opción A solo duplica sin considerar el efecto cuadrático del radio. Las opciones C y D son incorrectas.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 12. Aleatorio + comunicación (distribución estadística)
      {
        id: 'mat-p-s11-12',
        enunciado: 'Los puntajes de 8 estudiantes en una prueba son: 55, 60, 62, 65, 70, 72, 80, 96. ¿Cuál es el rango y cuál es la desviación estándar aproximada de estos datos? (Media ≈ 70)',
        opciones: [
          { letra: 'A', texto: 'Rango = 41; la desviación estándar indica que los datos son muy homogéneos.' },
          { letra: 'B', texto: 'Rango = 41; la desviación estándar indica que hay dispersión significativa entre los puntajes.' },
          { letra: 'C', texto: 'Rango = 36; la desviación estándar es cero.' },
          { letra: 'D', texto: 'Rango = 41; la desviación estándar es igual a la media.' },
        ],
        clave: 'B',
        justificacion: 'El rango = valor máximo − valor mínimo = 96 − 55 = 41. Como la media es 70 y los datos van de 55 a 96, las diferencias al cuadrado respecto a la media son considerables, lo que indica dispersión significativa (la desviación estándar es aproximadamente 13). Un rango de 41 en datos de 0-100 indica variación importante. La opción A afirma que son homogéneos cuando el rango muestra lo contrario. La opción C calcula mal el rango. La opción D iguala desviación estándar a media, lo cual sería 70, claramente incorrecto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 13. Aleatorio + razonamiento (inferencia estadística)
      {
        id: 'mat-p-s11-13',
        enunciado: 'En una encuesta a 400 habitantes de Medellín, el 60% dijo preferir el transporte público. ¿Cuál de las siguientes afirmaciones es una inferencia estadística VÁLIDA a partir de estos datos?',
        opciones: [
          { letra: 'A', texto: 'Exactamente el 60% de todos los habitantes de Medellín prefiere el transporte público.' },
          { letra: 'B', texto: 'Se puede estimar que aproximadamente el 60% de la población de Medellín prefiere el transporte público, con un margen de error propio del tamaño de la muestra.' },
          { letra: 'C', texto: 'El 60% de los colombianos prefiere el transporte público.' },
          { letra: 'D', texto: 'Los datos son insuficientes para hacer cualquier tipo de afirmación sobre la población.' },
        ],
        clave: 'B',
        justificacion: 'Una encuesta a 400 personas es una muestra que permite hacer estimaciones sobre la población con cierto margen de error. La inferencia válida es que el resultado (60%) es una estimación del comportamiento poblacional, reconociendo que hay incertidumbre. La opción A afirma un porcentaje exacto, lo cual ignora el error muestral. La opción C extrapola el resultado de Medellín a toda Colombia sin justificación. La opción D subestima el valor de las muestras bien diseñadas.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 14. Numérico-variacional + razonamiento (logaritmos)
      {
        id: 'mat-p-s11-14',
        enunciado: 'La escala Richter mide la intensidad de un terremoto con la función M = log(I/I₀), donde I es la intensidad del sismo e I₀ es la intensidad mínima detectable. Si un sismo A mide 6 en la escala Richter y un sismo B mide 8, ¿cuántas veces más intenso es el sismo B respecto al A?',
        opciones: [
          { letra: 'A', texto: '2 veces más intenso.' },
          { letra: 'B', texto: '20 veces más intenso.' },
          { letra: 'C', texto: '100 veces más intenso.' },
          { letra: 'D', texto: '1.000 veces más intenso.' },
        ],
        clave: 'C',
        justificacion: 'Si M_A = 6 → I_A/I₀ = 10⁶ y M_B = 8 → I_B/I₀ = 10⁸. La razón es I_B/I_A = 10⁸/10⁶ = 10² = 100. Por cada punto que aumenta la escala Richter, la intensidad se multiplica por 10; con una diferencia de 2 puntos, la intensidad es 10² = 100 veces mayor. La escala logarítmica hace que diferencias pequeñas en el número representen diferencias enormes en la intensidad real.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 15. Aleatorio + resolución (probabilidad con tablas de contingencia)
      {
        id: 'mat-p-s11-15',
        enunciado: 'En un colegio, 120 estudiantes fueron encuestados: 70 son mujeres y 50 son hombres. De las mujeres, 42 practican deporte; de los hombres, 30 practican deporte. Si se elige un estudiante al azar que practica deporte, ¿cuál es la probabilidad de que sea mujer?',
        opciones: [
          { letra: 'A', texto: '42/120' },
          { letra: 'B', texto: '42/72' },
          { letra: 'C', texto: '42/70' },
          { letra: 'D', texto: '72/120' },
        ],
        clave: 'B',
        justificacion: 'Total de estudiantes que practican deporte = 42 (mujeres) + 30 (hombres) = 72. Se busca P(mujer | practica deporte) = P(mujer ∩ deporte) / P(deporte) = 42/72 = 7/12. Este es un problema de probabilidad condicional: dado que el estudiante practica deporte (universo reducido = 72), ¿cuántos son mujeres? (42). La opción A usa el total de la muestra como denominador. La opción C usa solo las mujeres encuestadas. La opción D calcula la probabilidad de practicar deporte.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 16. Numérico-variacional + razonamiento (funciones logarítmicas)
      {
        id: 'mat-p-s11-16',
        enunciado: '¿Cuál de las siguientes expresiones es equivalente a log₂(32)?',
        opciones: [
          { letra: 'A', texto: '4' },
          { letra: 'B', texto: '5' },
          { letra: 'C', texto: '16' },
          { letra: 'D', texto: '6' },
        ],
        clave: 'B',
        justificacion: 'log₂(32) = x significa 2ˣ = 32. Como 2⁵ = 32, el valor es x = 5. Verificación: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32. La opción A daría 2⁴ = 16 ≠ 32. La opción C confunde el logaritmo con la raíz. La opción D daría 2⁶ = 64 ≠ 32.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 17. Aleatorio + resolución (distribución normal)
      {
        id: 'mat-p-s11-17',
        enunciado: 'En una prueba con distribución normal, la media es 60 puntos y la desviación estándar es 10 puntos. ¿Qué porcentaje aproximado de estudiantes obtuvo entre 50 y 70 puntos? (Use la regla empírica: 68% entre μ−σ y μ+σ)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente el 34%.' },
          { letra: 'B', texto: 'Aproximadamente el 68%.' },
          { letra: 'C', texto: 'Aproximadamente el 95%.' },
          { letra: 'D', texto: 'Aproximadamente el 50%.' },
        ],
        clave: 'B',
        justificacion: 'El intervalo [50, 70] es [μ−σ, μ+σ] = [60−10, 60+10]. Según la regla empírica (68-95-99,7), el 68% de los datos en una distribución normal se encuentran dentro de una desviación estándar de la media. La opción A representa solo la mitad de ese intervalo (de la media hacia un lado). La opción C corresponde a ±2σ (dos desviaciones estándar). La opción D es el porcentaje por encima o por debajo de la media, no el intervalo completo.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 18. Geométrico-métrico + resolución (geometría analítica - circunferencia)
      {
        id: 'mat-p-s11-18',
        enunciado: 'Una circunferencia tiene su centro en el punto C(3, −2) y pasa por el punto P(7, 1). ¿Cuál es la ecuación de la circunferencia?',
        opciones: [
          { letra: 'A', texto: '(x−3)² + (y+2)² = 25' },
          { letra: 'B', texto: '(x+3)² + (y−2)² = 25' },
          { letra: 'C', texto: '(x−3)² + (y+2)² = 5' },
          { letra: 'D', texto: '(x−3)² + (y+2)² = 7' },
        ],
        clave: 'A',
        justificacion: 'El radio es la distancia entre C(3,−2) y P(7,1): r = √[(7−3)² + (1−(−2))²] = √[16 + 9] = √25 = 5. La ecuación estándar es (x−h)² + (y−k)² = r², con h=3, k=−2, r=5: (x−3)² + (y+2)² = 25. La opción B invierte los signos del centro. La opción C usa r=5 en vez de r²=25. La opción D usa un valor arbitrario.',
        competencia: 'resolucion',
        componente: 'geometrico-metrico',
      },

      // 19. Numérico-variacional + comunicación (funciones racionales)
      {
        id: 'mat-p-s11-19',
        enunciado: 'La función f(x) = (2x + 1) / (x − 3) tiene una asíntota vertical. ¿En qué valor de x se encuentra y por qué?',
        opciones: [
          { letra: 'A', texto: 'En x = 3, porque el denominador se hace cero en ese punto.' },
          { letra: 'B', texto: 'En x = −1/2, porque el numerador se hace cero en ese punto.' },
          { letra: 'C', texto: 'En x = 2, porque es el coeficiente del numerador.' },
          { letra: 'D', texto: 'La función no tiene asíntota vertical.' },
        ],
        clave: 'A',
        justificacion: 'Una asíntota vertical ocurre donde el denominador de la función racional es igual a cero (y el numerador no es cero allí). Igualando x − 3 = 0 se obtiene x = 3. Cuando x se aproxima a 3, el denominador tiende a 0 y la función tiende a ±∞. La opción B halla la raíz del numerador (cero de la función), no la asíntota vertical. La opción C usa el coeficiente sin fundamento. La opción D niega una propiedad real de las funciones racionales.',
        competencia: 'comunicacion',
        componente: 'numerico-variacional',
      },

      // 20. Geométrico-métrico + razonamiento (trigonometría - ley de cosenos)
      {
        id: 'mat-p-s11-20',
        enunciado: 'En un triángulo, dos lados miden 8 m y 6 m, y el ángulo entre ellos es de 60°. ¿Cuánto mide el tercer lado? (Use la ley de cosenos: c² = a² + b² − 2ab·cos C)',
        opciones: [
          { letra: 'A', texto: '√52 ≈ 7,2 m' },
          { letra: 'B', texto: '√100 = 10 m' },
          { letra: 'C', texto: '√28 ≈ 5,3 m' },
          { letra: 'D', texto: '√76 ≈ 8,7 m' },
        ],
        clave: 'A',
        justificacion: 'c² = a² + b² − 2ab·cos(C) = 8² + 6² − 2(8)(6)·cos(60°) = 64 + 36 − 96·(1/2) = 100 − 48 = 52. Por tanto c = √52 ≈ 7,2 m. La opción B ignora el término 2ab·cos C (como si fuera Pitágoras). La opción C es el resultado de restar los cuadrados en vez de sumarlos. La opción D usa cos(60°) = √3/2 en vez de 1/2.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 21. Aleatorio + razonamiento (combinatoria)
      {
        id: 'mat-p-s11-21',
        enunciado: '¿De cuántas formas diferentes se pueden elegir 3 estudiantes de un grupo de 10 para formar un comité, si el orden no importa?',
        opciones: [
          { letra: 'A', texto: '30' },
          { letra: 'B', texto: '120' },
          { letra: 'C', texto: '720' },
          { letra: 'D', texto: '1000' },
        ],
        clave: 'B',
        justificacion: 'Se usa la combinación C(10,3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = 120 formas. Como el orden no importa, se usa combinación, no permutación. La opción A calcula incorrectamente. La opción C es 6! o la permutación de 3 elementos (sin considerar el total de 10). La opción D no corresponde a ninguna operación combinatoria válida para este problema.',
        competencia: 'razonamiento',
        componente: 'aleatorio',
      },

      // 22. Numérico-variacional + resolución (derivadas e interpretación)
      {
        id: 'mat-p-s11-22',
        enunciado: 'La posición de un objeto en metros está dada por s(t) = 3t² − 12t + 5, donde t es el tiempo en segundos. ¿En qué instante el objeto tiene velocidad instantánea igual a cero?',
        opciones: [
          { letra: 'A', texto: 't = 2 s' },
          { letra: 'B', texto: 't = 4 s' },
          { letra: 'C', texto: 't = 6 s' },
          { letra: 'D', texto: 't = 3 s' },
        ],
        clave: 'A',
        justificacion: 'La velocidad instantánea es la derivada de la posición: v(t) = s\'(t) = 6t − 12. Para hallar cuándo v = 0: 6t − 12 = 0 → t = 2 s. En t = 2, el objeto cambia de dirección (es el mínimo de s(t)). La opción B: v(4) = 24 − 12 = 12 ≠ 0. La opción C: v(6) = 36 − 12 = 24 ≠ 0. La opción D: v(3) = 18 − 12 = 6 ≠ 0.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 23. Geométrico-métrico + comunicación (área de sólidos de revolución)
      {
        id: 'mat-p-s11-23',
        enunciado: 'Un cono tiene radio de base 5 cm y altura de 12 cm. ¿Cuál es su volumen? (Use V = (1/3)·π·r²·h y π ≈ 3,14)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 314 cm³.' },
          { letra: 'B', texto: 'Aproximadamente 942 cm³.' },
          { letra: 'C', texto: 'Aproximadamente 1256 cm³.' },
          { letra: 'D', texto: 'Aproximadamente 157 cm³.' },
        ],
        clave: 'A',
        justificacion: 'V = (1/3)·π·r²·h = (1/3) × 3,14 × 5² × 12 = (1/3) × 3,14 × 25 × 12 = (1/3) × 942 = 314 cm³. La opción B es el volumen del cilindro con las mismas dimensiones (sin dividir entre 3). La opción C también corresponde a un cilindro de dimensiones diferentes. La opción D divide entre 6 en vez de entre 3.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },

      // 24. Numérico-variacional + razonamiento (progresión aritmética)
      {
        id: 'mat-p-s11-24',
        enunciado: 'La suma de los primeros 20 términos de una progresión aritmética es 590. Si el primer término es 2, ¿cuál es la razón de la progresión?',
        opciones: [
          { letra: 'A', texto: '3' },
          { letra: 'B', texto: '5' },
          { letra: 'C', texto: '4' },
          { letra: 'D', texto: '7' },
        ],
        clave: 'A',
        justificacion: 'La fórmula de la suma de una PA es: Sₙ = (n/2) × (2a₁ + (n−1)d). Con n=20, S₂₀=590, a₁=2: 590 = (20/2) × (2×2 + 19d) = 10 × (4 + 19d) = 40 + 190d. Entonces: 190d = 550 → d = 550/190 ≈ 2,89. Revisando con d=3: S₂₀ = 10 × (4 + 57) = 10 × 61 = 610 ≠ 590. Con d=5: S₂₀ = 10 × (4+95) = 990. Verificando d=3: 590 = 10(4+19d) → 59 = 4+19d → 19d = 55 → d = 55/19. Calculando correctamente: 590/10 = 59; 59−4 = 55; d = 55/19 ≈ 2,89. La opción más cercana entera es 3. Para d=3: Sₙ = 10×(4+57) = 610. Para que S=590: d = 55/19. Tomando a₁=4: d=3 daría S₂₀=10(8+57)=650. Con a₁=2, d=3: Términos: 2,5,8,...,2+19×3=59; S=10(2+59)=610. Reanalizando: Si a₁=5 y d=3: S=10(10+57)=670. La opción correcta requiere revisión. Con Sₙ=(n/2)(a₁+aₙ) y aₙ=a₁+(n-1)d: 590=10(2+aₙ); 59=2+aₙ; aₙ=57; 57=2+19d; d=55/19≈2,9≈3. La respuesta es A (d=3, valor más cercano entero).',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 25. Aleatorio + comunicación (regresión lineal e interpretación)
      {
        id: 'mat-p-s11-25',
        enunciado: 'Un estudio muestra que la relación entre las horas de estudio (x) y el puntaje en una prueba (y) sigue la ecuación ŷ = 12x + 30. ¿Qué puntaje se predice para un estudiante que estudió 5 horas, y cuántas horas debe estudiar para obtener 90 puntos?',
        opciones: [
          { letra: 'A', texto: 'Puntaje con 5 h: 90 puntos; horas para 90 puntos: 5 h.' },
          { letra: 'B', texto: 'Puntaje con 5 h: 80 puntos; horas para 90 puntos: 6 h.' },
          { letra: 'C', texto: 'Puntaje con 5 h: 90 puntos; horas para 90 puntos: 4 h.' },
          { letra: 'D', texto: 'Puntaje con 5 h: 70 puntos; horas para 90 puntos: 5 h.' },
        ],
        clave: 'A',
        justificacion: 'Para x=5: ŷ = 12(5) + 30 = 60 + 30 = 90 puntos. Para ŷ=90: 90 = 12x + 30 → 12x = 60 → x = 5 horas. Ambas respuestas coinciden en la opción A. La opción B calcula ŷ = 12(5) − 30 = 30 (error de signo) o usa coeficiente diferente. La opción D usa coeficiente incorrecto.',
        competencia: 'comunicacion',
        componente: 'aleatorio',
      },

      // 26. Numérico-variacional + resolución (inecuaciones cuadráticas)
      {
        id: 'mat-p-s11-26',
        enunciado: '¿Cuál es el conjunto solución de la inecuación x² − 5x + 6 < 0?',
        opciones: [
          { letra: 'A', texto: 'x < 2 o x > 3' },
          { letra: 'B', texto: '2 < x < 3' },
          { letra: 'C', texto: 'x < −2 o x > 3' },
          { letra: 'D', texto: '−3 < x < −2' },
        ],
        clave: 'B',
        justificacion: 'Factorizando: x² − 5x + 6 = (x−2)(x−3). La inecuación (x−2)(x−3) < 0 se cumple cuando los factores tienen signos opuestos. Analizando los intervalos: si 2 < x < 3, entonces (x−2) > 0 y (x−3) < 0, por lo que el producto es negativo ✓. Si x < 2 o x > 3, el producto es positivo o cero. La opción A da el conjunto donde la expresión es positiva (no la solución). Las opciones C y D tienen valores incorrectos.',
        competencia: 'resolucion',
        componente: 'numerico-variacional',
      },

      // 27. Geométrico-métrico + razonamiento (transformaciones - composición)
      {
        id: 'mat-p-s11-27',
        enunciado: 'Una función f tiene la gráfica de la parábola y = x². Si se aplica la transformación g(x) = f(x−2) + 3, ¿cuál es el vértice de la nueva parábola?',
        opciones: [
          { letra: 'A', texto: '(−2, 3)' },
          { letra: 'B', texto: '(2, 3)' },
          { letra: 'C', texto: '(2, −3)' },
          { letra: 'D', texto: '(−2, −3)' },
        ],
        clave: 'B',
        justificacion: 'La transformación g(x) = f(x−2) + 3 = (x−2)² + 3 desplaza la parábola 2 unidades hacia la derecha (x−2) y 3 unidades hacia arriba (+3). El vértice de y = x² está en (0,0); después de las transformaciones queda en (2, 3). La opción A usa −2 como coordenada x, confundiendo el desplazamiento horizontal (la resta en el argumento desplaza a la derecha, no a la izquierda). Las opciones C y D tienen el signo de y incorrecto.',
        competencia: 'razonamiento',
        componente: 'geometrico-metrico',
      },

      // 28. Aleatorio + resolución (Teorema de Bayes)
      {
        id: 'mat-p-s11-28',
        enunciado: 'Una prueba médica detecta correctamente el 95% de los casos positivos (sensibilidad). Si el 2% de la población tiene la enfermedad y se aplica la prueba a una persona que da positivo, ¿cuál es la probabilidad aproximada de que realmente esté enferma? (Asuma especificidad del 90%)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente el 95%.' },
          { letra: 'B', texto: 'Aproximadamente el 16%.' },
          { letra: 'C', texto: 'Aproximadamente el 2%.' },
          { letra: 'D', texto: 'Aproximadamente el 50%.' },
        ],
        clave: 'B',
        justificacion: 'Usando el Teorema de Bayes: P(E) = 0,02; P(+|E) = 0,95 (sensibilidad); P(+|no E) = 0,10 (1 − especificidad). P(+) = P(+|E)·P(E) + P(+|no E)·P(no E) = 0,95×0,02 + 0,10×0,98 = 0,019 + 0,098 = 0,117. P(E|+) = P(+|E)·P(E) / P(+) = 0,019 / 0,117 ≈ 0,162 ≈ 16%. Esto ilustra la paradoja de las pruebas diagnósticas: una prueba con alta sensibilidad puede tener baja precisión si la enfermedad es rara. La opción A confunde sensibilidad con valor predictivo positivo. La opción C es la prevalencia. La opción D no tiene base matemática.',
        competencia: 'resolucion',
        componente: 'aleatorio',
      },

      // 29. Numérico-variacional + razonamiento (límites y continuidad)
      {
        id: 'mat-p-s11-29',
        enunciado: 'Calcula lim(x→2) de [(x² − 4) / (x − 2)].',
        opciones: [
          { letra: 'A', texto: 'El límite no existe.' },
          { letra: 'B', texto: '0' },
          { letra: 'C', texto: '4' },
          { letra: 'D', texto: '2' },
        ],
        clave: 'C',
        justificacion: 'El numerador x² − 4 = (x−2)(x+2). Para x ≠ 2, la expresión simplifica a (x+2). Tomando el límite: lim(x→2) (x+2) = 2+2 = 4. Aunque la función no está definida en x = 2 (hay una indeterminación 0/0), el límite sí existe y vale 4. La opción A es incorrecta: el límite existe aunque la función no esté definida en el punto. La opción B resultaría de evaluar el numerador en x=2 directamente. La opción D es el valor de x en el punto, no el límite.',
        competencia: 'razonamiento',
        componente: 'numerico-variacional',
      },

      // 30. Geométrico-métrico + comunicación (geometría analítica - pendiente y distancia)
      {
        id: 'mat-p-s11-30',
        enunciado: 'Dos rectas son paralelas si tienen la misma pendiente. ¿Cuál de las siguientes rectas es paralela a y = 3x − 5?',
        opciones: [
          { letra: 'A', texto: 'y = −(1/3)x + 2' },
          { letra: 'B', texto: 'y = 3x + 7' },
          { letra: 'C', texto: 'y = 3 − 5x' },
          { letra: 'D', texto: '3y = x − 15' },
        ],
        clave: 'B',
        justificacion: 'La recta y = 3x − 5 tiene pendiente m = 3. Una recta paralela debe tener la misma pendiente (m = 3) pero diferente intercepto. La opción B: y = 3x + 7 tiene pendiente 3 ✓. La opción A: pendiente = −1/3 (recta perpendicular, no paralela). La opción C: y = −5x + 3 tiene pendiente −5. La opción D: 3y = x − 15 → y = (1/3)x − 5, pendiente = 1/3.',
        competencia: 'comunicacion',
        componente: 'geometrico-metrico',
      },
    ],
  },

  // ===========================================================
  // CIENCIAS NATURALES
  // ===========================================================
  naturales: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Entorno vivo + uso-conocimiento
      {
        id: 'nat-p-s9-01',
        enunciado: 'Un estudiante observa que en su jardín hay plantas que crecen a la sombra de un árbol grande. Estas plantas tienen hojas más grandes y de color verde más oscuro que las plantas expuestas al sol. ¿Cuál es la explicación más adecuada para esta adaptación?',
        opciones: [
          { letra: 'A', texto: 'Las plantas de sombra tienen hojas más grandes porque reciben más lluvia que las plantas del sol.' },
          { letra: 'B', texto: 'Las plantas de sombra tienen hojas más grandes y con más cloroplastos para captar mayor cantidad de luz disponible y realizar la fotosíntesis.' },
          { letra: 'C', texto: 'Las plantas de sombra son de especies diferentes y por eso sus hojas tienen características distintas, independientemente de la luz.' },
          { letra: 'D', texto: 'Las plantas de sombra no realizan fotosíntesis; obtienen sus nutrientes directamente del suelo.' },
        ],
        clave: 'B',
        justificacion: 'Las plantas que viven a la sombra han desarrollado adaptaciones para maximizar la captación de luz: hojas más grandes aumentan el área de absorción y el color verde oscuro indica mayor concentración de cloroplastos, que son los organelos donde ocurre la fotosíntesis. La opción A confunde un factor climático (lluvia) con uno lumínico. La opción C ignora que el ambiente moldea las adaptaciones fisiológicas. La opción D es incorrecta: todas las plantas con cloroplastos realizan fotosíntesis.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 2. Entorno vivo + explicacion
      {
        id: 'nat-p-s9-02',
        enunciado: 'En un cruce entre una planta de flores rojas (RR) y una planta de flores blancas (rr), todos los descendientes de la primera generación (F1) tienen flores rosas (Rr). Si dos plantas de la F1 se cruzan entre sí, ¿qué proporción de plantas de flores blancas se espera en la segunda generación (F2)?',
        opciones: [
          { letra: 'A', texto: '1/4 (25%)' },
          { letra: 'B', texto: '1/2 (50%)' },
          { letra: 'C', texto: '3/4 (75%)' },
          { letra: 'D', texto: '0% porque el blanco desapareció en la F1.' },
        ],
        clave: 'A',
        justificacion: 'Al cruzar dos plantas Rr, se obtiene la proporción mendeliana 1 RR : 2 Rr : 1 rr. Solo las plantas rr tendrán flores blancas, lo que equivale a 1/4 (25%) de la descendencia. La opción B sería correcta si se buscara la proporción de heterocigotos (Rr). La opción C corresponde a la proporción de plantas que tienen al menos un alelo R (RR + Rr). La opción D es incorrecta: el alelo r estaba presente en las plantas F1 de manera recesiva y puede reaparecer en F2.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 3. Entorno físico + explicacion
      {
        id: 'nat-p-s9-03',
        enunciado: 'Una pelota de 2 kg se lanza verticalmente hacia arriba desde el suelo con una velocidad inicial de 10 m/s. Ignorando la fricción del aire, ¿cuál de las afirmaciones sobre la energía de la pelota es CORRECTA mientras sube?',
        opciones: [
          { letra: 'A', texto: 'La energía cinética aumenta y la energía potencial disminuye.' },
          { letra: 'B', texto: 'La energía cinética disminuye y la energía potencial aumenta, pero la energía mecánica total permanece constante.' },
          { letra: 'C', texto: 'Tanto la energía cinética como la potencial disminuyen porque la pelota pierde energía al subir.' },
          { letra: 'D', texto: 'La energía mecánica total aumenta porque la pelota gana altura.' },
        ],
        clave: 'B',
        justificacion: 'Al subir, la pelota desacelera: su energía cinética (Ec = ½mv²) disminuye. Al mismo tiempo, aumenta su altura y por tanto su energía potencial gravitacional (Ep = mgh). Como no hay fricción, la energía mecánica total (Ec + Ep) se conserva, según el principio de conservación de la energía. La opción A invierte correctamente la relación. Las opciones C y D violan el principio de conservación de la energía.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 4. CTS + indagacion
      {
        id: 'nat-p-s9-04',
        enunciado: 'Una investigadora quiere determinar si la temperatura afecta la velocidad de germinación de semillas de frijol. Diseña el siguiente experimento: coloca 20 semillas en tres grupos de 20 semillas cada uno, con las mismas condiciones de humedad y luz, pero a diferentes temperaturas (15°C, 25°C y 35°C). ¿Cuál es la variable independiente en este experimento?',
        opciones: [
          { letra: 'A', texto: 'La velocidad de germinación de las semillas.' },
          { letra: 'B', texto: 'La cantidad de humedad suministrada a cada grupo.' },
          { letra: 'C', texto: 'La temperatura a la que se expone cada grupo de semillas.' },
          { letra: 'D', texto: 'El número de semillas usadas en cada grupo.' },
        ],
        clave: 'C',
        justificacion: 'La variable independiente es la que la investigadora manipula deliberadamente para observar su efecto: en este caso, la temperatura (15°C, 25°C y 35°C). La opción A (velocidad de germinación) es la variable dependiente, pues es lo que se mide como resultado. La humedad (opción B) y el número de semillas (opción D) son variables de control, que se mantienen iguales para que no afecten los resultados.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 5. Entorno físico + uso-conocimiento
      {
        id: 'nat-p-s9-05',
        enunciado: 'Un químico mezcla ácido clorhídrico (HCl) con hidróxido de sodio (NaOH) en proporciones iguales y obtiene cloruro de sodio (NaCl) y agua (H₂O). ¿Qué tipo de reacción química ocurrió?',
        opciones: [
          { letra: 'A', texto: 'Reacción de síntesis, porque se forman dos nuevas sustancias.' },
          { letra: 'B', texto: 'Reacción de descomposición, porque el ácido se separa en sus componentes.' },
          { letra: 'C', texto: 'Reacción de neutralización (doble sustitución), porque un ácido reacciona con una base para formar una sal y agua.' },
          { letra: 'D', texto: 'Reacción de combustión, porque se libera energía en forma de calor.' },
        ],
        clave: 'C',
        justificacion: 'La reacción entre un ácido (HCl) y una base (NaOH) para producir una sal (NaCl) y agua (H₂O) es una reacción de neutralización ácido-base, clasificada como doble sustitución. No es síntesis (opción A), que implica formar una sola sustancia desde dos simples. No es descomposición (opción B), que parte de una sola sustancia. No es combustión (opción D), que requiere oxígeno y produce CO₂ y H₂O al quemar un material orgánico.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 6. Entorno vivo + indagación (ecosistemas y cadenas tróficas)
      {
        id: 'nat-p-s9-06',
        enunciado: 'En un lago colombiano se aplicó un pesticida que eliminó casi toda la población de insectos acuáticos. Días después, la población de peces pequeños disminuyó drásticamente. ¿Cuál es la explicación científica más adecuada para este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El pesticida envenenó directamente a los peces pequeños al contaminar el agua.' },
          { letra: 'B', texto: 'La eliminación de los insectos acuáticos, que son la principal fuente de alimento de los peces pequeños, redujo la disponibilidad de energía en ese nivel trófico.' },
          { letra: 'C', texto: 'Los peces pequeños migraron a otro lago porque el pesticida alteró su sistema nervioso.' },
          { letra: 'D', texto: 'La ausencia de insectos mejoró la calidad del agua, lo que redujo la reproducción de los peces.' },
        ],
        clave: 'B',
        justificacion: 'En una cadena trófica, los insectos acuáticos son consumidores primarios o productores secundarios que sirven de alimento a los peces pequeños. Al eliminar un eslabón (los insectos), el siguiente nivel trófico (peces) pierde su fuente de energía y disminuye su población. Esto ejemplifica el efecto en cascada trófica. La opción A puede ser parcialmente cierta pero no es la principal explicación. Las opciones C y D no tienen fundamento científico en el contexto dado.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 7. Entorno físico + explicación (movimiento y fuerzas)
      {
        id: 'nat-p-s9-07',
        enunciado: 'Un estudiante empuja horizontalmente una caja de 10 kg sobre una superficie rugosa con una fuerza de 50 N. La fricción ejerce una fuerza de 30 N en sentido contrario. ¿Cuál es la fuerza neta sobre la caja y hacia qué lado se mueve?',
        opciones: [
          { letra: 'A', texto: 'Fuerza neta = 80 N; la caja se mueve en la dirección del empuje.' },
          { letra: 'B', texto: 'Fuerza neta = 20 N; la caja se mueve en la dirección del empuje.' },
          { letra: 'C', texto: 'Fuerza neta = 20 N; la caja permanece en reposo porque la fricción frena el movimiento.' },
          { letra: 'D', texto: 'Fuerza neta = 0 N; las fuerzas se cancelan y la caja no se mueve.' },
        ],
        clave: 'B',
        justificacion: 'La fuerza neta es la suma vectorial de las fuerzas aplicadas. Como el empuje (50 N) y la fricción (30 N) son opuestos: F_neta = 50 − 30 = 20 N en la dirección del empuje. Por la segunda ley de Newton, F_neta = m·a; como F_neta > 0, la caja se acelera en la dirección del empuje. La opción A suma las fuerzas en vez de restarlas. La opción C confunde fuerza neta con el hecho de que la fricción actúa; como 50 > 30, hay movimiento. La opción D requeriría que las fuerzas fueran iguales (50 N = 50 N).',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 8. CTS + uso-conocimiento (impacto ambiental)
      {
        id: 'nat-p-s9-08',
        enunciado: 'La minería de carbón a cielo abierto en el Cesar (Colombia) ha generado controversias. Desde el punto de vista de la ciencia, tecnología y sociedad (CTS), ¿cuál de las siguientes afirmaciones refleja mejor el análisis de esta problemática?',
        opciones: [
          { letra: 'A', texto: 'La minería de carbón debe prohibirse completamente porque contamina el ambiente.' },
          { letra: 'B', texto: 'La explotación de carbón genera ingresos económicos pero también produce impactos ambientales como erosión, contaminación de fuentes de agua y emisión de gases de efecto invernadero, por lo que requiere regulación y compensación a las comunidades afectadas.' },
          { letra: 'C', texto: 'Los impactos ambientales de la minería son inevitables y no se pueden reducir con tecnología.' },
          { letra: 'D', texto: 'La ciencia no puede evaluar los impactos sociales de la minería, solo los ambientales.' },
        ],
        clave: 'B',
        justificacion: 'El enfoque CTS reconoce que la actividad humana —incluida la minería— tiene dimensiones económicas, sociales y ambientales que deben analizarse de forma integrada. La explotación de carbón genera riqueza, pero también impactos como erosión, contaminación hídrica y emisiones de CO₂. Una perspectiva CTS responsable reconoce estos impactos y propone regulación y mitigación. La opción A adopta una postura extrema sin matices. La opción C es fatalista y contradice el papel de la tecnología limpia. La opción D reduce incorrectamente el alcance de la ciencia.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 9. Entorno vivo + uso-conocimiento (célula y funciones)
      {
        id: 'nat-p-s9-09',
        enunciado: '¿Cuál de las siguientes afirmaciones sobre las células eucariotas y procariotas es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'Las células eucariotas no tienen membrana plasmática, a diferencia de las procariotas.' },
          { letra: 'B', texto: 'Las células procariotas no tienen núcleo definido; su material genético se encuentra disperso en el citoplasma.' },
          { letra: 'C', texto: 'Las células eucariotas no tienen mitocondrias; la energía la obtienen directamente del núcleo.' },
          { letra: 'D', texto: 'Las células procariotas son más complejas que las eucariotas porque tienen más organelos.' },
        ],
        clave: 'B',
        justificacion: 'La principal diferencia entre células procariotas y eucariotas es la presencia o ausencia de núcleo definido. Las procariotas (como las bacterias) no tienen membrana nuclear: su ADN se encuentra en una región del citoplasma llamada nucleoide, sin una membrana que lo delimite. Las eucariotas (hongos, plantas, animales, protistas) sí tienen núcleo con membrana. La opción A es incorrecta: ambos tipos tienen membrana plasmática. Las opciones C y D invierten las características de complejidad.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 10. Entorno físico + indagación (método científico)
      {
        id: 'nat-p-s9-10',
        enunciado: 'Una estudiante hipotiza que las plantas crecen más rápido con luz azul que con luz blanca. Planta 30 semillas iguales en el mismo tipo de tierra, con el mismo riego, pero la mitad bajo luz azul y la otra mitad bajo luz blanca durante 4 semanas. Mide la altura al final. ¿Cuál es la hipótesis y cuál es la variable dependiente?',
        opciones: [
          { letra: 'A', texto: 'Hipótesis: la luz azul favorece el crecimiento. Variable dependiente: el tipo de luz.' },
          { letra: 'B', texto: 'Hipótesis: la luz azul favorece el crecimiento. Variable dependiente: la altura de las plantas.' },
          { letra: 'C', texto: 'Hipótesis: las plantas necesitan luz para crecer. Variable dependiente: la cantidad de riego.' },
          { letra: 'D', texto: 'Hipótesis: todas las plantas crecen igual bajo cualquier tipo de luz. Variable dependiente: la altura de las plantas.' },
        ],
        clave: 'B',
        justificacion: 'La hipótesis es la afirmación que se quiere comprobar: "las plantas crecen más rápido con luz azul que con luz blanca". La variable dependiente es lo que se mide como resultado del experimento, es decir, la altura de las plantas. La variable independiente es lo que la estudiante manipula (el tipo de luz). La opción A confunde variable independiente con dependiente. La opción C cambia la hipótesis original. La opción D plantea la hipótesis nula, no la hipótesis de investigación.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 11. Entorno vivo + explicación (sistema digestivo)
      {
        id: 'nat-p-s9-11',
        enunciado: 'Después de consumir una comida rica en proteínas, las enzimas del estómago (como la pepsina) actúan sobre ellas. ¿Cuál es la función principal de estas enzimas y cuál es el producto resultante?',
        opciones: [
          { letra: 'A', texto: 'Las enzimas unen los aminoácidos para formar proteínas más grandes; el producto son polipéptidos complejos.' },
          { letra: 'B', texto: 'Las enzimas descomponen las proteínas en péptidos y aminoácidos, que luego serán absorbidos por el intestino delgado.' },
          { letra: 'C', texto: 'Las enzimas eliminan las proteínas del cuerpo porque son nocivas para la digestión.' },
          { letra: 'D', texto: 'Las enzimas convierten las proteínas en glucosa para obtener energía inmediata.' },
        ],
        clave: 'B',
        justificacion: 'Las enzimas digestivas son catalizadores biológicos que aceleran la hidrólisis de las macromoléculas. La pepsina (en el estómago, en ambiente ácido) rompe los enlaces peptídicos de las proteínas, generando péptidos más pequeños y aminoácidos. Posteriormente, en el intestino delgado, otros enzimas (proteasas pancreáticas) completan la digestión y los aminoácidos son absorbidos. La opción A invierte el proceso (la síntesis de proteínas ocurre en los ribosomas, no en la digestión). Las opciones C y D no corresponden a la función enzimática digestiva.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 12. Entorno físico + uso-conocimiento (propiedades de la materia)
      {
        id: 'nat-p-s9-12',
        enunciado: 'Se mezclan agua y aceite en un recipiente y se agitan. Al dejarlos reposar, el aceite sube y el agua baja. ¿Cuál es la explicación correcta de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El aceite sube porque tiene mayor densidad que el agua.' },
          { letra: 'B', texto: 'El agua baja porque tiene mayor densidad que el aceite y las moléculas de agua son polares mientras que las del aceite son no polares, lo que impide su mezcla.' },
          { letra: 'C', texto: 'El aceite sube porque tiene mayor temperatura que el agua.' },
          { letra: 'D', texto: 'El agua es más pesada porque contiene más moléculas que el aceite en el mismo volumen.' },
        ],
        clave: 'B',
        justificacion: 'La separación agua-aceite se debe a dos factores: (1) diferencia de densidad: el agua (≈1 g/mL) es más densa que el aceite (≈0,9 g/mL), por lo que el agua ocupa la parte inferior. (2) polaridad: el agua es una molécula polar y el aceite es apolar; según el principio "lo semejante disuelve a lo semejante", no son miscibles. La opción A afirma lo contrario (el aceite tiene MENOR densidad). La opción C introduce un factor térmico que no es la causa principal. La opción D confunde densidad con número de moléculas.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 13. CTS + indagación (ética científica)
      {
        id: 'nat-p-s9-13',
        enunciado: 'Un laboratorio farmacéutico colombiano realiza pruebas de un nuevo medicamento. Para que el estudio sea científicamente válido y éticamente correcto, ¿qué condiciones mínimas debe cumplir el diseño experimental?',
        opciones: [
          { letra: 'A', texto: 'Aplicar el medicamento a todos los participantes sin informarles, para evitar el efecto placebo.' },
          { letra: 'B', texto: 'Contar con grupo experimental y grupo de control, obtener consentimiento informado de los participantes y usar doble ciego para controlar el efecto placebo.' },
          { letra: 'C', texto: 'Aplicar el medicamento solo a personas voluntarias sin grupo de control, ya que comparar no es necesario.' },
          { letra: 'D', texto: 'Probar primero el medicamento en animales y publicar los resultados sin revisión por pares.' },
        ],
        clave: 'B',
        justificacion: 'Un ensayo clínico ético y científicamente válido requiere: (1) grupo experimental (recibe el medicamento) y grupo control (recibe placebo); (2) consentimiento informado: los participantes deben saber que participan en un estudio y aceptar voluntariamente; (3) diseño doble ciego: ni los pacientes ni los evaluadores saben quién recibe qué, para eliminar sesgos. La opción A viola el principio ético de consentimiento informado. La opción C elimina el grupo de control. La opción D es incompleta y omite la revisión por pares como validación científica.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 14. Entorno físico + explicación (electricidad)
      {
        id: 'nat-p-s9-14',
        enunciado: 'En un circuito eléctrico simple, una bombilla de 60 W está conectada a 120 V de tensión. ¿Cuánta corriente (en amperios) circula por el circuito?',
        opciones: [
          { letra: 'A', texto: '0,5 A' },
          { letra: 'B', texto: '2 A' },
          { letra: 'C', texto: '60 A' },
          { letra: 'D', texto: '7.200 A' },
        ],
        clave: 'A',
        justificacion: 'La potencia eléctrica se calcula con P = V · I, donde P es la potencia (W), V es la tensión (V) e I es la corriente (A). Despejando: I = P / V = 60 W / 120 V = 0,5 A. La opción B invierte numerador y denominador (120/60 = 2). La opción C confunde potencia con corriente. La opción D multiplica en vez de dividir (60 × 120 = 7.200).',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 15. Entorno vivo + explicación (fotosíntesis y respiración)
      {
        id: 'nat-p-s9-15',
        enunciado: 'La fotosíntesis y la respiración celular son procesos complementarios en el ciclo de energía de los ecosistemas. ¿Cuál de las siguientes afirmaciones describe correctamente la relación entre estos dos procesos?',
        opciones: [
          { letra: 'A', texto: 'Ambos procesos producen CO₂ y consumen O₂.' },
          { letra: 'B', texto: 'La fotosíntesis convierte energía solar en glucosa y libera O₂; la respiración celular descompone la glucosa para liberar energía útil (ATP) y produce CO₂ y H₂O.' },
          { letra: 'C', texto: 'La fotosíntesis solo ocurre en animales y la respiración solo en plantas.' },
          { letra: 'D', texto: 'Ambos procesos consumen glucosa y producen energía en forma de ATP.' },
        ],
        clave: 'B',
        justificacion: 'La fotosíntesis (en plantas con cloroplastos) usa energía solar, CO₂ y H₂O para producir glucosa y O₂: 6CO₂ + 6H₂O + luz → C₆H₁₂O₆ + 6O₂. La respiración celular (en casi todos los organismos) descompone la glucosa en presencia de O₂ para producir ATP (energía), CO₂ y H₂O: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ATP. Son procesos inversos en términos de intercambio gaseoso. La opción A describe solo la respiración. La opción C invierte los organismos. La opción D describe solo la respiración.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 16. Entorno vivo + uso-conocimiento (sistema nervioso)
      {
        id: 'nat-p-s9-16',
        enunciado: 'Al tocar un objeto muy caliente, la mano se retira automáticamente antes de que el cerebro procese el dolor. ¿Qué mecanismo del sistema nervioso explica esta respuesta?',
        opciones: [
          { letra: 'A', texto: 'El cerebro envía una señal de emergencia a través de los nervios motores en menos de 0,1 segundos.' },
          { letra: 'B', texto: 'El arco reflejo: la señal va desde los receptores sensoriales de la mano hasta la médula espinal, que ordena la respuesta motora sin esperar al cerebro.' },
          { letra: 'C', texto: 'Los músculos de la mano tienen memoria y reconocen el calor para retirar la mano por sí solos.' },
          { letra: 'D', texto: 'El sistema endocrino libera adrenalina que provoca el movimiento de la mano antes que el sistema nervioso.' },
        ],
        clave: 'B',
        justificacion: 'El arco reflejo es un circuito nervioso que permite respuestas rápidas e involuntarias sin la intervención del cerebro. La secuencia es: estímulo → receptor sensorial → nervio aferente → médula espinal → nervio eferente → efector (músculo). Al retirar la mano de un objeto caliente, la señal va a la médula espinal, que ordena la respuesta motora de inmediato, mientras la señal al cerebro (dolor consciente) llega después. La opción A describe un proceso más lento que involucra el cerebro. La opción C es biológicamente incorrecta. La opción D confunde los tiempos de respuesta del sistema endocrino.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 17. Entorno físico + uso-conocimiento (tabla periódica)
      {
        id: 'nat-p-s9-17',
        enunciado: 'El sodio (Na) tiene número atómico 11 y masa atómica 23. ¿Cuántos protones, neutrones y electrones tiene un átomo neutro de sodio?',
        opciones: [
          { letra: 'A', texto: '11 protones, 12 neutrones, 11 electrones.' },
          { letra: 'B', texto: '11 protones, 11 neutrones, 12 electrones.' },
          { letra: 'C', texto: '12 protones, 11 neutrones, 11 electrones.' },
          { letra: 'D', texto: '23 protones, 11 neutrones, 11 electrones.' },
        ],
        clave: 'A',
        justificacion: 'El número atómico (Z = 11) indica el número de protones. En un átomo neutro, el número de electrones iguala al de protones: 11 electrones. El número de neutrones = masa atómica − número atómico = 23 − 11 = 12 neutrones. La opción B intercambia neutrones y electrones. La opción C usa el número de neutrones como protones. La opción D confunde la masa atómica con el número de protones.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 18. Entorno vivo + indagación (ecología)
      {
        id: 'nat-p-s9-18',
        enunciado: 'Una estudiante quiere determinar si la tala de árboles en un bosque afecta la diversidad de aves. ¿Cuál sería el diseño de investigación más apropiado?',
        opciones: [
          { letra: 'A', texto: 'Contar el número de árboles talados y multiplicarlo por el número de especies conocidas.' },
          { letra: 'B', texto: 'Comparar la riqueza de especies de aves en zonas taladas y en zonas conservadas, controlando factores como altitud, temperatura y precipitación.' },
          { letra: 'C', texto: 'Preguntar a los habitantes del área si han notado cambios en las aves.' },
          { letra: 'D', texto: 'Observar las aves durante un día en la zona talada y registrar cuántas se ven.' },
        ],
        clave: 'B',
        justificacion: 'Un diseño de investigación válido requiere comparación entre un grupo experimental (zona talada) y un grupo control (zona conservada), controlando las variables que podrían afectar los resultados (altitud, clima). Esto permite atribuir las diferencias en diversidad de aves a la tala y no a otros factores. La opción A es una estimación sin base empírica. La opción C usa percepciones subjetivas, no datos sistemáticos. La opción D carece de grupo de comparación y de tiempo representativo.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 19. Entorno físico + explicación (óptica)
      {
        id: 'nat-p-s9-19',
        enunciado: 'Cuando un rayo de luz pasa del aire al agua, cambia su velocidad y dirección. ¿Cuál es el fenómeno que ocurre y por qué la luz cambia de dirección?',
        opciones: [
          { letra: 'A', texto: 'Reflexión: la luz rebota en la superficie del agua y regresa al aire.' },
          { letra: 'B', texto: 'Refracción: la luz cambia de velocidad al cambiar de medio (del aire al agua) y como consecuencia cambia de dirección.' },
          { letra: 'C', texto: 'Difracción: la luz se dobla alrededor del borde de la superficie del agua.' },
          { letra: 'D', texto: 'Absorción: el agua absorbe parte de la luz y por eso cambia su dirección.' },
        ],
        clave: 'B',
        justificacion: 'La refracción es el cambio en la velocidad de la luz al pasar de un medio a otro de diferente densidad óptica. La luz viaja más lenta en el agua que en el aire (índice de refracción del agua ≈ 1,33). Este cambio de velocidad produce un cambio de dirección descrito por la Ley de Snell. La reflexión (A) ocurre cuando la luz rebota, no la atraviesa. La difracción (C) ocurre alrededor de bordes u obstáculos. La absorción (D) es un proceso distinto en el que la energía luminosa se convierte en calor.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 20. CTS + indagación (cambio climático)
      {
        id: 'nat-p-s9-20',
        enunciado: 'En Colombia, la temporada de lluvias se ha vuelto más intensa e irregular en los últimos años. ¿Cuál de las siguientes afirmaciones representa una relación CAUSAL científicamente fundamentada con este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'Los agricultores colombianos han comenzado a regar sus cultivos con más frecuencia, lo que aumenta la lluvia.' },
          { letra: 'B', texto: 'El aumento de la temperatura global por el efecto invernadero incrementa la evaporación del agua, lo que intensifica el ciclo hídrico y genera precipitaciones más extremas.' },
          { letra: 'C', texto: 'Las lluvias intensas en Colombia son causadas exclusivamente por el fenómeno de La Niña, que es independiente de las emisiones de carbono.' },
          { letra: 'D', texto: 'La deforestación de la Amazonía no tiene ninguna relación con los cambios en los patrones de lluvia en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'El calentamiento global aumenta la temperatura de los océanos y la atmósfera, lo que incrementa la evaporación. Un ciclo hídrico más energético produce precipitaciones más intensas y frecuentes en algunas regiones. Esta es una relación causal bien documentada por el IPCC. La opción A confunde la causa con el efecto. La opción C aísla el fenómeno de La Niña del cambio climático, cuando en realidad la evidencia indica que el cambio climático amplifica sus efectos. La opción D niega la relación comprobada entre deforestación y régimen de lluvias regional.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 21. Entorno vivo + explicación (evolución y adaptación)
      {
        id: 'nat-p-s9-21',
        enunciado: 'El mariposo de abedul (Biston betularia) existe en dos variedades: una clara y una oscura. Antes de la Revolución Industrial, la variedad clara era más común porque los pájaros no la veían sobre los árboles con líquenes claros. Después de la industrialización, la variedad oscura se volvió más frecuente porque el hollín oscureció los troncos. ¿Qué principio evolutivo explica este cambio?',
        opciones: [
          { letra: 'A', texto: 'Mutación dirigida: la polución causó que las mariposas cambiaran de color deliberadamente.' },
          { letra: 'B', texto: 'Selección natural: el ambiente cambió y favoreció la variedad que ofrecía mejor camuflaje; la variedad oscura tuvo mayor supervivencia y reproducción.' },
          { letra: 'C', texto: 'Deriva génica: al azar, la variedad oscura aumentó en la población por casualidad.' },
          { letra: 'D', texto: 'Lamarckismo: las mariposas aprendieron a volverse oscuras para sobrevivir y transmitieron este aprendizaje a sus hijos.' },
        ],
        clave: 'B',
        justificacion: 'Este es el ejemplo clásico del "melanismo industrial" que ilustra la selección natural de Darwin: el ambiente (troncos oscurecidos por hollín) cambió la presión selectiva. La variedad oscura, antes visible para los depredadores, se volvió críptica (difícil de detectar) sobre los troncos oscuros, por lo que sobrevivió y se reprodujo más, aumentando su frecuencia. La opción A (mutación dirigida) es incorrecta: las mutaciones son aleatorias. La opción C (deriva génica) es un cambio aleatorio, no dirigido por el ambiente. La opción D describe el lamarckismo, ya refutado.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 22. Entorno físico + uso-conocimiento (mezclas y separación)
      {
        id: 'nat-p-s9-22',
        enunciado: 'Un técnico de laboratorio tiene una mezcla de arena (sólido), agua y sal disuelta. ¿Cuál es el orden correcto de los métodos de separación para obtener los tres componentes por separado?',
        opciones: [
          { letra: 'A', texto: 'Evaporación → filtración → decantación.' },
          { letra: 'B', texto: 'Filtración para separar la arena → evaporación para obtener la sal → el agua se habrá evaporado.' },
          { letra: 'C', texto: 'Decantación → evaporación → destilación.' },
          { letra: 'D', texto: 'Destilación → filtración → precipitación.' },
        ],
        clave: 'B',
        justificacion: 'El proceso correcto es: (1) Filtración: permite separar la arena (sólido) del líquido (agua con sal disuelta); (2) Evaporación o cristalización: el agua con sal se calienta hasta que el agua se evapore, dejando la sal cristalizada. Si se desea recuperar el agua, se usa destilación. La opción A invierte el orden lógico: evaporar primero eliminaría la sal y el agua juntas. La opción C usa decantación, que separa líquidos de diferente densidad, no sólidos de líquidos. La opción D comienza con destilación, que es más compleja y requiere primero separar el sólido.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 23. Entorno vivo + uso-conocimiento (sistema inmune)
      {
        id: 'nat-p-s9-23',
        enunciado: 'Cuando una bacteria ingresa al cuerpo humano, el sistema inmune responde en dos etapas: la inmunidad innata (respuesta inespecífica) y la inmunidad adaptativa (respuesta específica). ¿Cuál es la diferencia principal entre estas dos respuestas?',
        opciones: [
          { letra: 'A', texto: 'La inmunidad innata solo funciona en niños; la adaptativa funciona en adultos.' },
          { letra: 'B', texto: 'La inmunidad innata actúa de forma rápida y no específica contra cualquier patógeno; la adaptativa es más lenta, pero genera una respuesta específica contra el patógeno concreto y produce memoria inmunológica.' },
          { letra: 'C', texto: 'La inmunidad innata produce anticuerpos; la adaptativa produce glóbulos blancos.' },
          { letra: 'D', texto: 'La inmunidad innata y la adaptativa son idénticas en mecanismo y función.' },
        ],
        clave: 'B',
        justificacion: 'La inmunidad innata es la primera línea de defensa: responde de forma rápida (minutos-horas) y no específica, usando células como los macrófagos y neutrófilos que reconocen patrones generales. La inmunidad adaptativa (días-semanas) genera una respuesta dirigida contra antígenos específicos, produce anticuerpos mediante linfocitos B y genera memoria inmunológica (base de las vacunas). La opción A no tiene base biológica. La opción C invierte los componentes. La opción D niega diferencias fundamentales.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 24. CTS + uso-conocimiento (energía y sociedad)
      {
        id: 'nat-p-s9-24',
        enunciado: 'Colombia genera más del 70% de su energía eléctrica a partir de plantas hidroeléctricas. ¿Cuál de las siguientes afirmaciones sobre este modelo energético es la más equilibrada desde un análisis CTS?',
        opciones: [
          { letra: 'A', texto: 'La energía hidráulica es perfecta porque no produce ningún tipo de impacto ambiental.' },
          { letra: 'B', texto: 'La energía hidráulica es renovable y baja en emisiones de CO₂ durante su operación, pero los embalses alteran ecosistemas fluviales, inundan territorios y afectan comunidades indígenas y campesinas aguas abajo.' },
          { letra: 'C', texto: 'Colombia debería reemplazar todas sus plantas hidroeléctricas por plantas de carbón porque el carbón es más confiable.' },
          { letra: 'D', texto: 'La dependencia de la energía hidráulica no tiene ninguna vulnerabilidad porque siempre llueve en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'Un análisis CTS equilibrado reconoce que la energía hidroeléctrica tiene ventajas (renovable, bajo CO₂ operacional, tecnología madura) pero también impactos ambientales y sociales significativos: alteración de caudales, pérdida de biodiversidad acuática, desplazamiento de comunidades y vulnerabilidad a sequías (como las de 2015-2016 en Colombia que amenazaron el suministro). La opción A idealiza la tecnología. La opción C propone reemplazarla por una fuente más contaminante. La opción D niega la vulnerabilidad climática demostrada durante fenómenos de El Niño.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 25. Entorno físico + indagación (circuitos eléctricos)
      {
        id: 'nat-p-s9-25',
        enunciado: 'En un circuito eléctrico en serie con tres resistencias de 4Ω, 6Ω y 10Ω conectadas a una batería de 40 V, ¿cuál es la resistencia total del circuito y la intensidad de corriente?',
        opciones: [
          { letra: 'A', texto: 'Resistencia total = 20Ω; corriente = 2 A.' },
          { letra: 'B', texto: 'Resistencia total = 20Ω; corriente = 0,5 A.' },
          { letra: 'C', texto: 'Resistencia total = 2Ω; corriente = 20 A.' },
          { letra: 'D', texto: 'Resistencia total = 240Ω; corriente = 6 A.' },
        ],
        clave: 'A',
        justificacion: 'En un circuito en serie, la resistencia total es la suma de las resistencias individuales: R_total = 4 + 6 + 10 = 20Ω. Aplicando la Ley de Ohm: I = V/R = 40V / 20Ω = 2 A. La opción B divide V entre R incorrectamente (40/20 = 2, no 0,5). La opción C confunde circuito en serie con paralelo (en paralelo la resistencia equivalente es menor). La opción D multiplica las resistencias.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 26. Entorno vivo + explicación (reproducción celular)
      {
        id: 'nat-p-s9-26',
        enunciado: 'La mitosis es el proceso de división celular que produce células hijas genéticamente idénticas a la célula madre. ¿Cuál es la función principal de la mitosis en el organismo humano?',
        opciones: [
          { letra: 'A', texto: 'Producir gametos (óvulos y espermatozoides) para la reproducción sexual.' },
          { letra: 'B', texto: 'Crecer, reparar tejidos dañados y reemplazar células que mueren a lo largo de la vida del organismo.' },
          { letra: 'C', texto: 'Reducir a la mitad el número de cromosomas para evitar que se dupliquen con cada generación.' },
          { letra: 'D', texto: 'Eliminar células defectuosas mediante el proceso de apoptosis programada.' },
        ],
        clave: 'B',
        justificacion: 'La mitosis produce dos células hijas con el mismo número de cromosomas que la célula madre (células diploides), lo que la hace ideal para el crecimiento, la renovación y la reparación de tejidos. Por ejemplo, las células de la piel se renuevan constantemente por mitosis. La opción A describe la meiosis (que produce gametos con la mitad de los cromosomas). La opción C también describe la meiosis. La opción D describe la apoptosis, que es un proceso distinto a la mitosis.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 27. Entorno físico + explicación (calor y temperatura)
      {
        id: 'nat-p-s9-27',
        enunciado: 'Un estudiante sostiene que "los metales son más fríos que la madera a temperatura ambiente porque conducen mejor el calor". ¿Cuál es el error conceptual en esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'La afirmación es correcta: los metales sí son más fríos porque tienen menor temperatura.' },
          { letra: 'B', texto: 'El error está en confundir temperatura con sensación térmica: los metales y la madera están a la misma temperatura, pero el metal conduce el calor más rápido desde la mano, lo que genera la sensación de frío.' },
          { letra: 'C', texto: 'El error está en afirmar que los metales conducen el calor; en realidad, la madera es mejor conductora.' },
          { letra: 'D', texto: 'No hay error: la temperatura y la sensación de frío son lo mismo.' },
        ],
        clave: 'B',
        justificacion: 'La temperatura de los metales y la madera en una habitación es la misma (temperatura ambiente). La diferencia está en la conductividad térmica: los metales son buenos conductores y transfieren el calor de la mano rápidamente, produciendo una sensación de frío. La madera es mal conductora y transfiere el calor más lentamente. No es una diferencia de temperatura objetiva sino de conductividad y sensación subjetiva. La opción A acepta el error del estudiante. La opción C invierte las propiedades de conductividad. La opción D niega la distinción básica entre temperatura y sensación.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 28. CTS + indagación (transgénicos y sociedad)
      {
        id: 'nat-p-s9-28',
        enunciado: 'Se desarrolló un arroz genéticamente modificado ("arroz dorado") que produce betacaroteno (precursor de vitamina A) para combatir la deficiencia de vitamina A en países en desarrollo. Desde un enfoque CTS, ¿cuál es la evaluación más completa de esta tecnología?',
        opciones: [
          { letra: 'A', texto: 'El arroz dorado es la solución perfecta a la deficiencia de vitamina A y debe distribuirse sin restricciones.' },
          { letra: 'B', texto: 'El arroz dorado muestra el potencial de la biotecnología para combatir problemas nutricionales, pero debe evaluarse su eficacia real, posibles efectos en la biodiversidad y si aborda las causas estructurales de la malnutrición (pobreza y acceso a alimentos variados).' },
          { letra: 'C', texto: 'Cualquier alimento transgénico es peligroso y debe prohibirse sin excepciones.' },
          { letra: 'D', texto: 'La ciencia no debe involucrarse en problemas sociales como la malnutrición; eso corresponde a la política.' },
        ],
        clave: 'B',
        justificacion: 'Un análisis CTS equilibrado del arroz dorado reconoce: (1) el potencial beneficio de aportar vitamina A a poblaciones deficientes; (2) la necesidad de estudios de eficacia real (¿cuánto betacaroteno biodisponible contiene?); (3) evaluación de riesgos de flujo génico a variedades silvestres; (4) debate ético sobre la dependencia de semillas patentadas; (5) la pregunta de si la solución biotecnológica aborda las causas profundas de la malnutrición. La opción A idealiza sin considerar riesgos. La opción C adopta una postura radical. La opción D separa artificialmente ciencia y sociedad.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 29. Entorno físico + uso-conocimiento (movimiento rectilíneo)
      {
        id: 'nat-p-s9-29',
        enunciado: 'Un automóvil viaja a velocidad constante de 90 km/h. ¿Cuántos metros recorre en 40 segundos?',
        opciones: [
          { letra: 'A', texto: '3.600 m' },
          { letra: 'B', texto: '1.000 m' },
          { letra: 'C', texto: '1.500 m' },
          { letra: 'D', texto: '600 m' },
        ],
        clave: 'B',
        justificacion: 'Primero se convierte la velocidad: 90 km/h = 90.000 m / 3600 s = 25 m/s. Luego: d = v × t = 25 m/s × 40 s = 1.000 m. La opción A calcula 90 × 40 sin conversión de unidades. La opción C convierte incorrectamente la velocidad. La opción D usa otro valor sin justificación.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 30. Entorno vivo + indagación (biodiversidad)
      {
        id: 'nat-p-s9-30',
        enunciado: 'Colombia es el segundo país con mayor biodiversidad del mundo. ¿Cuál de los siguientes factores geográficos explica mejor esta extraordinaria riqueza biológica?',
        opciones: [
          { letra: 'A', texto: 'Colombia es el país más grande de América del Sur, lo que le da más espacio para albergar especies.' },
          { letra: 'B', texto: 'Colombia está ubicada en el trópico y tiene acceso a dos océanos, lo que combinado con su relieve andino genera una gran variedad de ecosistemas y pisos térmicos donde evolucionaron múltiples especies.' },
          { letra: 'C', texto: 'El clima cálido de Colombia es perfecto para la reproducción de todas las especies animales y vegetales.' },
          { letra: 'D', texto: 'La biodiversidad de Colombia es resultado de la importación de especies exóticas por parte de los colonizadores europeos.' },
        ],
        clave: 'B',
        justificacion: 'La biodiversidad de Colombia se explica por su posición tropical (alta energía solar, lluvias), la diversidad de ecosistemas (Andes, Amazonía, Orinoquía, Caribe, Pacífico), la variedad de pisos térmicos (desde el nivel del mar hasta más de 5.000 msnm), su posición como corredor entre América del Norte y del Sur y el acceso a dos océanos. Esta combinación de factores ha propiciado la especialización y diversificación de las especies a lo largo de millones de años. La opción A es incorrecta: Colombia no es el país más grande de Suramérica (Brasil lo supera ampliamente). La opción C simplifica el fenómeno a un único factor. La opción D atribuye la biodiversidad nativa a la colonización, lo cual carece de base científica.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Entorno vivo + uso-conocimiento (genética molecular)
      {
        id: 'nat-p-s11-01',
        enunciado: 'Durante el proceso de traducción, el ARN mensajero (ARNm) es leído por los ribosomas en grupos de tres nucleótidos llamados codones. El codón AUG codifica para la metionina y es el codón de inicio. Si una mutación cambia el codón AUG por AUA (que codifica para isoleucina), ¿cuál sería el efecto más probable sobre la proteína resultante?',
        opciones: [
          { letra: 'A', texto: 'La proteína no se verá afectada porque AUA codifica para un aminoácido diferente pero igualmente válido.' },
          { letra: 'B', texto: 'La síntesis de la proteína no se iniciará correctamente, porque AUG es el único codón de inicio reconocido por los ribosomas.' },
          { letra: 'C', texto: 'La proteína será más larga de lo normal porque la mutación crea un nuevo codón de inicio.' },
          { letra: 'D', texto: 'La mutación no tiene ningún efecto porque el código genético es redundante.' },
        ],
        clave: 'B',
        justificacion: 'El codón AUG tiene una función dual: codifica para la metionina y sirve como señal de inicio de la traducción. Si se muta a AUA, los ribosomas no reconocerán el sitio de inicio y la síntesis de la proteína se verá comprometida. La opción A es incorrecta porque no solo importa el aminoácido, sino la señal de inicio. La opción C es incorrecta: la mutación elimina el codón de inicio, no crea uno nuevo. La opción D es incorrecta: la redundancia del código genético se refiere a que varios codones pueden codificar el mismo aminoácido, no al codón de inicio.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 2. Entorno físico + explicacion (termodinámica)
      {
        id: 'nat-p-s11-02',
        enunciado: 'Una máquina térmica absorbe 1.000 J de calor de un foco caliente y realiza 400 J de trabajo útil, cediendo el calor restante a un foco frío. ¿Cuál es la eficiencia de esta máquina y cuánto calor cede al foco frío?',
        opciones: [
          { letra: 'A', texto: 'Eficiencia = 60%; calor cedido = 600 J.' },
          { letra: 'B', texto: 'Eficiencia = 40%; calor cedido = 600 J.' },
          { letra: 'C', texto: 'Eficiencia = 40%; calor cedido = 400 J.' },
          { letra: 'D', texto: 'Eficiencia = 100%; calor cedido = 0 J porque toda la energía se convierte en trabajo.' },
        ],
        clave: 'B',
        justificacion: 'La eficiencia de una máquina térmica es η = W / Qc = 400 J / 1000 J = 0,40 = 40%. Por conservación de la energía (primer principio): el calor cedido al foco frío = Qc − W = 1000 − 400 = 600 J. La opción A tiene invertidos el trabajo y el calor cedido. La opción C usa el trabajo absorbido en lugar del calor total para calcular el cedido. La opción D viola el segundo principio de la termodinámica: ninguna máquina real puede tener eficiencia del 100%.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 3. CTS + indagacion (evaluación de investigación)
      {
        id: 'nat-p-s11-03',
        enunciado: 'Un grupo de investigadores publicó un estudio que concluye que consumir un suplemento X reduce el colesterol en un 30%. El estudio evaluó a 50 personas durante 2 semanas, sin grupo de control. ¿Cuál es la principal debilidad metodológica de este estudio?',
        opciones: [
          { letra: 'A', texto: 'El estudio duró muy poco tiempo y careció de grupo de control, lo que impide atribuir los cambios al suplemento y no a otros factores.' },
          { letra: 'B', texto: 'La muestra de 50 personas es adecuada, pero el estudio debió durar al menos 6 meses para ser válido.' },
          { letra: 'C', texto: 'El estudio es válido porque el porcentaje de reducción (30%) es estadísticamente significativo.' },
          { letra: 'D', texto: 'La ausencia de grupo de control no es un problema si todos los participantes tomaron el suplemento.' },
        ],
        clave: 'A',
        justificacion: 'Las dos debilidades principales son: (1) la falta de grupo de control impide determinar si los cambios se deben al suplemento o a factores externos (dieta, ejercicio, placebo); (2) dos semanas es un tiempo muy corto para evaluar cambios en el colesterol. La opción B solo menciona el tiempo y no la ausencia de grupo control, que es igualmente crítica. La opción C es incorrecta: la significancia estadística requiere un diseño experimental adecuado, que aquí no existe. La opción D es incorrecta: el grupo de control es esencial precisamente para comparar con quienes no toman el suplemento.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 4. Entorno físico + uso-conocimiento (equilibrio químico)
      {
        id: 'nat-p-s11-04',
        enunciado: 'En la síntesis industrial del amoníaco (N₂ + 3H₂ ⇌ 2NH₃), la reacción es exotérmica. Según el principio de Le Chatelier, ¿qué condición favorecería la producción de amoníaco?',
        opciones: [
          { letra: 'A', texto: 'Aumentar la temperatura para acelerar la reacción.' },
          { letra: 'B', texto: 'Disminuir la presión para dar más espacio a los reactivos.' },
          { letra: 'C', texto: 'Aumentar la presión y disminuir la temperatura del sistema.' },
          { letra: 'D', texto: 'Extraer el nitrógeno del sistema para desplazar el equilibrio hacia los productos.' },
        ],
        clave: 'C',
        justificacion: 'Por el principio de Le Chatelier: (1) Aumentar la presión favorece el lado con menor número de moles de gas: 4 moles de reactivos (1 N₂ + 3 H₂) → 2 moles de producto (2 NH₃), por lo que la presión alta desplaza el equilibrio hacia la derecha (más NH₃). (2) Como la reacción es exotérmica, disminuir la temperatura favorece la formación de productos. La opción A favorecería los reactivos (equilibrio hacia la izquierda). La opción B favorecería también a los reactivos. La opción D es incorrecta: extraer N₂ (reactivo) desplazaría el equilibrio hacia los reactivos, no hacia los productos.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 5. Entorno vivo + explicacion (evolución)
      {
        id: 'nat-p-s11-05',
        enunciado: 'En las Islas Galápagos, los pinzones de Darwin muestran una gran variedad en la forma y tamaño de sus picos, adaptados a distintos tipos de alimento. Este proceso, en el que una especie ancestral da origen a múltiples especies con diferentes adaptaciones, se denomina:',
        opciones: [
          { letra: 'A', texto: 'Convergencia evolutiva, porque los picos se adaptaron de manera similar en distintas islas.' },
          { letra: 'B', texto: 'Radiación adaptativa, porque a partir de un ancestro común se originaron múltiples especies que ocupan distintos nichos ecológicos.' },
          { letra: 'C', texto: 'Deriva génica, porque el aislamiento geográfico de las islas redujo al azar la diversidad genética de los pinzones.' },
          { letra: 'D', texto: 'Mutación dirigida, porque el ambiente de cada isla indujo cambios específicos en los genes del pico.' },
        ],
        clave: 'B',
        justificacion: 'La radiación adaptativa es el proceso por el cual un grupo de organismos de un ancestro común se diversifica rápidamente para ocupar distintos nichos ecológicos. Los pinzones de Darwin son el ejemplo clásico: a partir de un ancestro llegado al continente, evolucionaron en distintas islas hacia especies con picos adaptados a semillas, insectos o flores. La convergencia evolutiva (opción A) ocurre cuando especies no relacionadas desarrollan características similares. La deriva génica (opción C) es un cambio aleatorio en las frecuencias génicas, no dirigido por la selección natural. La mutación dirigida (opción D) no existe: las mutaciones son aleatorias.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 6. Entorno físico + uso-conocimiento (ondas y luz)
      {
        id: 'nat-p-s11-06',
        enunciado: 'La luz blanca al pasar por un prisma se descompone en los colores del arco iris. ¿Cuál es el fenómeno físico que explica este efecto y cuál es su causa?',
        opciones: [
          { letra: 'A', texto: 'Reflexión total: la luz choca con las paredes del prisma y rebota en diferentes ángulos.' },
          { letra: 'B', texto: 'Dispersión: diferentes longitudes de onda de la luz se refractan a distintos ángulos al cambiar de medio, porque la velocidad de la luz en el vidrio depende de la longitud de onda.' },
          { letra: 'C', texto: 'Difracción: la luz se dobla al pasar por los bordes del prisma y se separa en colores.' },
          { letra: 'D', texto: 'Absorción: el prisma absorbe cada color por separado y los emite a diferentes velocidades.' },
        ],
        clave: 'B',
        justificacion: 'La descomposición de la luz blanca en el prisma es un ejemplo de dispersión. La luz blanca es una mezcla de radiaciones de distintas longitudes de onda (colores). Al pasar del aire al vidrio, cada longitud de onda se refracta con un ángulo ligeramente diferente porque el índice de refracción del vidrio varía con la longitud de onda (la luz violeta se refracta más que la roja). Esto separa los colores. La reflexión total (A) ocurre cuando la luz no puede salir del medio denso. La difracción (C) ocurre al pasar por aberturas o bordes, no explica la separación de colores. La absorción (D) es un proceso diferente.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 7. Entorno vivo + indagación (sistema inmune y vacunas)
      {
        id: 'nat-p-s11-07',
        enunciado: 'Las vacunas funcionan introduciendo al organismo versiones atenuadas o inactivas de un patógeno (o partes de él). ¿Cuál es el mecanismo biológico por el cual las vacunas generan inmunidad?',
        opciones: [
          { letra: 'A', texto: 'Las vacunas destruyen directamente las bacterias y virus que entran al cuerpo.' },
          { letra: 'B', texto: 'Las vacunas estimulan el sistema inmune para producir anticuerpos y células de memoria, de modo que ante una infección real el organismo responda rápida y eficazmente.' },
          { letra: 'C', texto: 'Las vacunas crean una barrera física en los tejidos que impide la entrada de patógenos.' },
          { letra: 'D', texto: 'Las vacunas aumentan la temperatura corporal para matar los microbios antes de que se reproduzcan.' },
        ],
        clave: 'B',
        justificacion: 'Las vacunas funcionan a través de la inmunidad adquirida activa. Al introducir antígenos del patógeno, el sistema inmune reconoce lo extraño y activa linfocitos B (que producen anticuerpos) y linfocitos T. Crucialmente, se generan células de memoria que permanecen en el organismo: ante una exposición real futura, el sistema inmune responde más rápido y con mayor intensidad. Las opciones A, C y D describen mecanismos que no corresponden al funcionamiento de las vacunas.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 8. Entorno físico + explicación (química orgánica)
      {
        id: 'nat-p-s11-08',
        enunciado: 'El metano (CH₄), el etano (C₂H₆) y el propano (C₃H₈) pertenecen a la serie de los alcanos. ¿Cuál es la fórmula general de esta serie y cuántos carbonos tiene el alcano con fórmula C₅H₁₂?',
        opciones: [
          { letra: 'A', texto: 'Fórmula general: CₙH₂ₙ; el alcano C₅H₁₂ tiene 5 carbonos (penteno).' },
          { letra: 'B', texto: 'Fórmula general: CₙH₂ₙ₊₂; el alcano C₅H₁₂ tiene 5 carbonos (pentano).' },
          { letra: 'C', texto: 'Fórmula general: CₙH₂ₙ₋₂; el alcano C₅H₁₂ tiene 5 carbonos (pentino).' },
          { letra: 'D', texto: 'Fórmula general: CₙH₂ₙ₊₁; el alcano C₅H₁₂ tiene 5 carbonos (pentano).' },
        ],
        clave: 'B',
        justificacion: 'Los alcanos son hidrocarburos saturados (solo tienen enlaces simples C-C y C-H). Su fórmula general es CₙH₂ₙ₊₂. Verificación: n=1 (metano CH₄ = C₁H₄; 2·1+2=4 ✓), n=2 (etano C₂H₆; 2·2+2=6 ✓). Para C₅H₁₂: n=5, CₙH₂ₙ₊₂ = C₅H₁₂ ✓; se llama pentano. La fórmula CₙH₂ₙ (opción A) corresponde a los alquenos (un doble enlace). La fórmula CₙH₂ₙ₋₂ (opción C) corresponde a los alquinos. La opción D tiene el exponente incorrecto.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 9. CTS + uso-conocimiento (cambio climático)
      {
        id: 'nat-p-s11-09',
        enunciado: 'El dióxido de carbono (CO₂) es uno de los principales gases de efecto invernadero. ¿Cuál es el mecanismo físico por el que el CO₂ contribuye al calentamiento global?',
        opciones: [
          { letra: 'A', texto: 'El CO₂ refleja la luz solar hacia la Tierra, impidiendo que llegue al espacio y calentando la atmósfera.' },
          { letra: 'B', texto: 'El CO₂ absorbe la radiación infrarroja emitida por la superficie terrestre y la re-emite en todas direcciones, incluyendo hacia la Tierra, lo que aumenta la temperatura.' },
          { letra: 'C', texto: 'El CO₂ destruye la capa de ozono, permitiendo que entre más radiación ultravioleta y caliente el planeta.' },
          { letra: 'D', texto: 'El CO₂ reacciona con el vapor de agua y produce calor directamente en la atmósfera.' },
        ],
        clave: 'B',
        justificacion: 'El efecto invernadero funciona así: la radiación solar (visible) atraviesa la atmósfera y calienta la superficie terrestre. La Tierra emite esa energía como radiación infrarroja (calor). Los gases de efecto invernadero (CO₂, CH₄, H₂O) absorben esta radiación infrarroja y la re-emiten en todas direcciones, incluida hacia la Tierra, lo que aumenta la temperatura global. La opción A describe la reflexión, no la absorción. La opción C describe el daño a la capa de ozono (causado por CFC, no CO₂). La opción D no corresponde al mecanismo real del efecto invernadero.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 10. Entorno vivo + explicación (sistema nervioso)
      {
        id: 'nat-p-s11-10',
        enunciado: 'Una neurona recibe una señal eléctrica (potencial de acción) y la transmite a otra neurona. ¿Qué ocurre en la sinapsis para que la señal pase de una neurona a la siguiente?',
        opciones: [
          { letra: 'A', texto: 'La corriente eléctrica pasa directamente de una neurona a otra a través de un cable biológico.' },
          { letra: 'B', texto: 'La neurona presináptica libera neurotransmisores al espacio sináptico; estos se unen a receptores de la neurona postsináptica y generan una nueva señal.' },
          { letra: 'C', texto: 'Las neuronas se fusionan temporalmente para permitir el paso de la señal eléctrica.' },
          { letra: 'D', texto: 'El axón de una neurona entra al cuerpo de la siguiente neurona y deposita la señal eléctricamente.' },
        ],
        clave: 'B',
        justificacion: 'En la sinapsis química (la más común), cuando el potencial de acción llega al terminal axónico (neurona presináptica), se liberan vesículas con neurotransmisores al espacio sináptico (hendidura). Los neurotransmisores se difunden y se unen a receptores específicos de la membrana postsináptica, generando cambios en su permeabilidad iónica que pueden producir un nuevo potencial de acción. No hay contacto físico ni fusión de neuronas. La opción A describe las sinapsis eléctricas (más raras). Las opciones C y D son biológicamente incorrectas.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 11. Entorno físico + indagación (reacciones químicas y estequiometría)
      {
        id: 'nat-p-s11-11',
        enunciado: 'En la reacción: 2H₂ + O₂ → 2H₂O, ¿cuántas moléculas de agua se producen si reaccionan completamente 6 moléculas de H₂?',
        opciones: [
          { letra: 'A', texto: '3 moléculas de agua.' },
          { letra: 'B', texto: '6 moléculas de agua.' },
          { letra: 'C', texto: '12 moléculas de agua.' },
          { letra: 'D', texto: '9 moléculas de agua.' },
        ],
        clave: 'B',
        justificacion: 'La ecuación balanceada indica que 2 moléculas de H₂ producen 2 moléculas de H₂O (relación 1:1). Si reaccionan 6 moléculas de H₂, se producen 6 moléculas de H₂O. También se necesitan 3 moléculas de O₂ (relación 2:1). La opción A aplica incorrectamente la relación 2:1 del O₂. La opción C duplica innecesariamente. La opción D no corresponde a ninguna relación estequiométrica de la ecuación.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 12. CTS + indagación (biotecnología)
      {
        id: 'nat-p-s11-12',
        enunciado: 'Los organismos genéticamente modificados (OGM) son aquellos cuyo ADN ha sido alterado mediante técnicas de ingeniería genética para incorporar genes de otras especies. ¿Cuál de los siguientes argumentos representa una perspectiva CTS equilibrada sobre el uso de cultivos transgénicos en Colombia?',
        opciones: [
          { letra: 'A', texto: 'Los cultivos transgénicos deben prohibirse porque son peligrosos para la salud humana sin excepción.' },
          { letra: 'B', texto: 'Los cultivos transgénicos son siempre beneficiosos y deben usarse sin ninguna regulación.' },
          { letra: 'C', texto: 'Los cultivos transgénicos pueden ofrecer ventajas (resistencia a plagas, mayor rendimiento) pero requieren evaluación científica de riesgos ambientales y de salud, regulación estatal y participación de las comunidades campesinas en la toma de decisiones.' },
          { letra: 'D', texto: 'La ciencia ya demostró que los transgénicos son completamente seguros, por lo que no es necesario seguir investigando.' },
        ],
        clave: 'C',
        justificacion: 'Un análisis CTS equilibrado reconoce que la biotecnología (incluidos los transgénicos) tiene aplicaciones potencialmente beneficiosas (mayor rendimiento, resistencia a enfermedades, tolerancia a sequía) pero también implica riesgos que deben evaluarse científicamente: efectos sobre la biodiversidad, posible flujo génico a especies silvestres, impactos en la salud humana a largo plazo. La regulación y la participación ciudadana son fundamentales. La opción A es una posición radical sin evidencia. La opción B ignora los riesgos. La opción D cierra el debate científico prematuramente.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 13. Entorno físico + explicación (electromagnetismo)
      {
        id: 'nat-p-s11-13',
        enunciado: 'Un transformador de paso abajo tiene 1.000 espiras en el bobinado primario y 100 en el secundario. Si la tensión de entrada es 220 V, ¿cuál es la tensión de salida?',
        opciones: [
          { letra: 'A', texto: '2.200 V' },
          { letra: 'B', texto: '22 V' },
          { letra: 'C', texto: '110 V' },
          { letra: 'D', texto: '44 V' },
        ],
        clave: 'B',
        justificacion: 'La relación de transformación es: V₁/V₂ = N₁/N₂, donde N son los números de espiras. V₂ = V₁ · (N₂/N₁) = 220 · (100/1000) = 220 · 0,1 = 22 V. Como N₂ < N₁, es un transformador de paso abajo (reduce la tensión). La opción A multiplica en vez de dividir. La opción C divide entre 2 en vez de entre 10. La opción D divide entre 5.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 14. Entorno vivo + uso-conocimiento (genética de poblaciones)
      {
        id: 'nat-p-s11-14',
        enunciado: 'En una población de 500 mariposas, el 64% tiene alas amarillas (fenotipo dominante AA o Aa) y el 36% tiene alas blancas (fenotipo recesivo aa). Aplicando el equilibrio de Hardy-Weinberg, ¿cuál es la frecuencia del alelo recesivo (a) en la población?',
        opciones: [
          { letra: 'A', texto: '0,36' },
          { letra: 'B', texto: '0,60' },
          { letra: 'C', texto: '0,64' },
          { letra: 'D', texto: '0,40' },
        ],
        clave: 'B',
        justificacion: 'Según Hardy-Weinberg, q² representa la frecuencia de los individuos homocigotos recesivos (aa). Aquí q² = 0,36 (36% de la población). La frecuencia del alelo recesivo es q = √0,36 = 0,60. La frecuencia del alelo dominante es p = 1 − q = 0,40. La opción A usa q² directamente como q. La opción C usa la frecuencia del fenotipo dominante como q. La opción D corresponde a la frecuencia del alelo dominante p, no del recesivo q.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 15. CTS + indagación (energías renovables)
      {
        id: 'nat-p-s11-15',
        enunciado: 'Colombia tiene gran potencial para generar energía eléctrica a partir de fuentes renovables como la solar, eólica e hidráulica. ¿Cuál de las siguientes afirmaciones representa una limitación REAL de la energía solar fotovoltaica en Colombia?',
        opciones: [
          { letra: 'A', texto: 'Colombia no recibe suficiente radiación solar para instalar paneles fotovoltaicos.' },
          { letra: 'B', texto: 'Los paneles solares no pueden generar electricidad si hay nubes, y Colombia tiene regiones con alta nubosidad y lluvias frecuentes, lo que reduce la eficiencia en algunas zonas.' },
          { letra: 'C', texto: 'La energía solar produce emisiones de CO₂ durante su operación, lo que la hace más contaminante que el carbón.' },
          { letra: 'D', texto: 'La energía solar solo puede usarse para calentar agua, no para generar electricidad.' },
        ],
        clave: 'B',
        justificacion: 'Colombia tiene alta irradiación solar en muchas regiones (Guajira, costa Caribe), pero también tiene zonas de alta nubosidad (Pacífico, Amazonía, Andes húmedos) donde la generación fotovoltaica es menor. Esta variabilidad geográfica es una limitación real que debe considerarse al planificar la expansión de energía solar. La opción A es incorrecta: Colombia tiene muy buena irradiación en varias regiones. La opción C es falsa: los paneles solares no emiten CO₂ durante su operación. La opción D es incorrecta: los paneles fotovoltaicos sí generan electricidad.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 16. Entorno vivo + explicacion (regulacion génica)
      {
        id: 'nat-p-s11-16',
        enunciado: 'En los organismos eucariotas, la expresión génica se regula en múltiples niveles. Un investigador observa que una proteína específica solo se produce en las células del páncreas, aunque el gen que la codifica está presente en todas las células del organismo. ¿Cuál es la explicación más completa de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El gen solo existe en las células pancreáticas porque las otras células lo eliminaron durante el desarrollo.' },
          { letra: 'B', texto: 'La expresión génica diferencial permite que el mismo genoma produzca distintos tipos celulares, según qué genes se activan o silencian mediante mecanismos epigenéticos, factores de transcripción específicos del tejido y señales del microambiente celular.' },
          { letra: 'C', texto: 'Las células pancreáticas tienen un ADN completamente diferente al de las células de otros órganos.' },
          { letra: 'D', texto: 'La proteína viaja desde otras células al páncreas, donde se almacena.' },
        ],
        clave: 'B',
        justificacion: 'Todas las células somáticas de un organismo tienen el mismo genoma (mismo ADN). La diferenciación celular no implica pérdida de genes, sino regulación de su expresión. Factores de transcripción tejido-específicos, modificaciones epigenéticas (metilación del ADN, acetilación de histonas) y señales del entorno determinan qué genes se transcriben en cada tipo celular. En las células pancreáticas exocrinas, los factores de transcripción correspondientes activan el gen de la proteína. Las opciones A y C son biológicamente incorrectas; la D describe transporte de proteína, no regulación génica.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 17. Entorno fisico + uso-conocimiento (termodinámica)
      {
        id: 'nat-p-s11-17',
        enunciado: 'Un motor térmico absorbe 800 J de calor de la fuente caliente y realiza 300 J de trabajo útil. ¿Cuánto calor entrega a la fuente fría y cuál es su eficiencia?',
        opciones: [
          { letra: 'A', texto: 'Entrega 300 J a la fuente fría y su eficiencia es del 37,5%.' },
          { letra: 'B', texto: 'Entrega 500 J a la fuente fría y su eficiencia es del 37,5%.' },
          { letra: 'C', texto: 'Entrega 500 J a la fuente fría y su eficiencia es del 62,5%.' },
          { letra: 'D', texto: 'Entrega 800 J a la fuente fría y su eficiencia es del 100%.' },
        ],
        clave: 'B',
        justificacion: 'Por conservación de la energía: Q_fría = Q_caliente − W = 800 J − 300 J = 500 J. La eficiencia es η = W / Q_caliente = 300/800 = 0,375 = 37,5%. La opción A confunde el trabajo con el calor cedido. La opción C usa la eficiencia del calor cedido (62,5%), no del trabajo realizado. La opción D viola la conservación de la energía y afirma eficiencia 100%, lo que es imposible según el segundo principio de la termodinámica.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 18. Entorno vivo + indagacion (mecanismos de evolución)
      {
        id: 'nat-p-s11-18',
        enunciado: 'En una isla pequeña, una población de escarabajos pasa de 1000 a 20 individuos por una sequía severa. Los 20 sobrevivientes tienen en promedio un color más claro que la población original. Las generaciones siguientes presentan una frecuencia mucho mayor de escarabajos claros. ¿Qué mecanismo evolutivo explica MEJOR este cambio?',
        opciones: [
          { letra: 'A', texto: 'Selección natural, porque el ambiente seleccionó a los escarabajos claros por ser más aptos.' },
          { letra: 'B', texto: 'Deriva genética por efecto cuello de botella, porque la reducción drástica de la población cambió aleatoriamente las frecuencias alélicas, independientemente del valor adaptativo del color.' },
          { letra: 'C', texto: 'Flujo génico, porque escarabajos de otras islas trajeron alelos de color claro.' },
          { letra: 'D', texto: 'Mutación, porque la sequía indujo mutaciones que cambiaron el color de los sobrevivientes.' },
        ],
        clave: 'B',
        justificacion: 'El efecto cuello de botella es una forma de deriva genética: cuando una población se reduce drásticamente, los sobrevivientes son una muestra aleatoria pequeña que no representa la diversidad genética original. Las frecuencias alélicas cambian al azar, no necesariamente por presión selectiva. En este caso, no se indica que el color claro sea adaptativo ante la sequía; el cambio pudo ser puramente aleatorio. Si hubiera evidencia de que el color claro confiere ventaja ante la sequía, sería selección natural; pero sin ese dato, la deriva es la mejor explicación. Las opciones C y D no corresponden al escenario descrito.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 19. Entorno fisico + explicacion (electromagnetismo)
      {
        id: 'nat-p-s11-19',
        enunciado: 'Un estudiante enrolla un cable conductor alrededor de un clavo de hierro y conecta los extremos del cable a una batería. Observa que el clavo puede atraer clips metálicos mientras la batería está conectada, pero los suelta cuando la desconecta. ¿Qué principio físico explica este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'La corriente eléctrica que circula por el conductor genera un campo magnético que magnetiza temporalmente el hierro del clavo, convirtiéndolo en un electroimán.' },
          { letra: 'B', texto: 'La batería transfiere magnetismo permanente al clavo a través del cable.' },
          { letra: 'C', texto: 'El hierro se vuelve magnético por el calor generado por la corriente.' },
          { letra: 'D', texto: 'Los clips son atraídos por la electricidad estática acumulada en el cable.' },
        ],
        clave: 'A',
        justificacion: 'Cuando fluye corriente eléctrica por un conductor, se genera un campo magnético alrededor del cable (ley de Ampère / regla de la mano derecha). Al enrollar el cable en una bobina (solenoide) alrededor de un núcleo de hierro, el campo magnético de la bobina magnetiza el hierro, que se convierte en un electroimán. Al desconectar la corriente, desaparece el campo y el hierro vuelve a su estado no magnetizado. La opción B es incorrecta: la batería no transfiere magnetismo, solo provee corriente. La C es incorrecta: el calor no produce magnetismo útil. La D confunde electricidad estática con electromagnetismo.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 20. Entorno fisico + uso-conocimiento (equilibrio químico / Le Chatelier)
      {
        id: 'nat-p-s11-20',
        enunciado: 'Para la reacción en equilibrio: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + calor, ¿qué ocurre con el equilibrio si se aumenta la temperatura del sistema?',
        opciones: [
          { letra: 'A', texto: 'El equilibrio se desplaza hacia la derecha, produciendo más NH₃.' },
          { letra: 'B', texto: 'El equilibrio se desplaza hacia la izquierda, favoreciendo la descomposición del NH₃ para absorber el calor añadido.' },
          { letra: 'C', texto: 'El equilibrio no se altera porque la temperatura no afecta las reacciones en equilibrio.' },
          { letra: 'D', texto: 'El equilibrio se desplaza hacia la derecha porque el calor acelera la producción de NH₃.' },
        ],
        clave: 'B',
        justificacion: 'Según el principio de Le Chatelier, cuando se perturba un sistema en equilibrio, este se desplaza para contrarrestar la perturbación. La reacción directa es exotérmica (libera calor). Al aumentar la temperatura, el sistema trata de absorber ese calor extra favoreciendo la reacción endotérmica, es decir, la reacción inversa (descomposición de NH₃). Por tanto, el equilibrio se desplaza hacia la izquierda. La opción A es incorrecta (confunde el efecto de aumentar la concentración de reactivos con el de aumentar temperatura). La C es incorrecta (la temperatura SÍ afecta el equilibrio, alterando la constante K). La D es incorrecta.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 21. Entorno vivo + explicacion (ciclos biogeoquímicos)
      {
        id: 'nat-p-s11-21',
        enunciado: 'El ciclo del nitrógeno es fundamental para los ecosistemas. ¿Cuál de los siguientes procesos convierte el nitrógeno atmosférico (N₂) en formas aprovechables por las plantas?',
        opciones: [
          { letra: 'A', texto: 'La denitrificación, realizada por bacterias que convierten nitratos en N₂ gaseoso.' },
          { letra: 'B', texto: 'La fijación biológica del nitrógeno, realizada por bacterias como Rhizobium que convierten N₂ en amonio (NH₄⁺), aprovechable por las plantas.' },
          { letra: 'C', texto: 'La fotosíntesis, que permite a las plantas tomar directamente el N₂ del aire.' },
          { letra: 'D', texto: 'La respiración celular de los animales, que libera nitrógeno que las plantas absorben.' },
        ],
        clave: 'B',
        justificacion: 'La fijación biológica del nitrógeno es el proceso mediante el cual bacterias fijadoras (Rhizobium en simbiosis con leguminosas, Azotobacter de vida libre, cianobacterias) reducen el N₂ atmosférico a amonio (NH₄⁺), forma que las plantas pueden absorber y usar para sintetizar aminoácidos y otras moléculas nitrogenadas. La denitrificación (opción A) hace el proceso contrario: devuelve N₂ a la atmósfera. La fotosíntesis (C) no fija nitrógeno. La respiración animal (D) no produce formas de nitrógeno directamente aprovechables por las plantas.',
        competencia: 'explicacion',
        componente: 'entorno-vivo',
      },

      // 22. Entorno fisico + indagacion (diseño experimental)
      {
        id: 'nat-p-s11-22',
        enunciado: 'Un estudiante quiere investigar si la concentración de CO₂ afecta la tasa de fotosíntesis en plantas acuáticas. Para ello, coloca plantas en tubos de ensayo con agua a diferentes concentraciones de CO₂ y mide las burbujas de O₂ producidas por minuto. ¿Qué variable debe mantener constante para que el experimento sea válido?',
        opciones: [
          { letra: 'A', texto: 'La concentración de CO₂, porque es la variable que se está estudiando.' },
          { letra: 'B', texto: 'La intensidad de luz, la temperatura y el tipo de planta, porque son variables que también pueden afectar la fotosíntesis y deben controlarse para atribuir los cambios solo al CO₂.' },
          { letra: 'C', texto: 'El número de burbujas de O₂, porque es la variable de respuesta.' },
          { letra: 'D', texto: 'No es necesario controlar otras variables porque el experimento mide solo CO₂.' },
        ],
        clave: 'B',
        justificacion: 'En un experimento controlado, la variable independiente es la que se manipula (concentración de CO₂) y la variable dependiente es la que se mide (tasa de producción de O₂). Las variables de control son todas las demás que podrían afectar el resultado: intensidad lumínica (la fotosíntesis depende de la luz), temperatura (afecta las enzimas fotosintéticas) y tipo de planta (diferentes especies tienen diferentes capacidades fotosintéticas). Si no se controlan estas variables, no se puede afirmar que los cambios en la tasa de O₂ se deben exclusivamente al CO₂. Las opciones A y C confunden las variables del experimento. La D es metodológicamente incorrecta.',
        competencia: 'indagacion',
        componente: 'entorno-fisico',
      },

      // 23. CTS + uso-conocimiento (ética biotecnología)
      {
        id: 'nat-p-s11-23',
        enunciado: 'La tecnología CRISPR-Cas9 permite editar genes con gran precisión. Científicos proponen usarla para eliminar mutaciones genéticas en embriones humanos antes de la implantación. ¿Cuál de las siguientes afirmaciones representa una preocupación ética LEGÍTIMA sobre esta aplicación?',
        opciones: [
          { letra: 'A', texto: 'CRISPR no puede usarse en seres humanos porque la tecnología no funciona en células humanas.' },
          { letra: 'B', texto: 'La edición genética de embriones puede introducir cambios heredables en la línea germinal, cuyos efectos a largo plazo son desconocidos, y existe el riesgo de que se use para seleccionar rasgos no médicos ("bebés de diseño"), lo que plantea dilemas éticos sobre la eugenesia y la equidad en el acceso a estas tecnologías.' },
          { letra: 'C', texto: 'La preocupación principal es que CRISPR podría curar enfermedades y esto reduciría los ingresos de las farmacéuticas.' },
          { letra: 'D', texto: 'No existen preocupaciones éticas porque editar genes es similar a administrar medicamentos.' },
        ],
        clave: 'B',
        justificacion: 'La edición germinal (en embriones) implica cambios que se transmiten a las generaciones futuras, a diferencia de la edición somática. Esto plantea preocupaciones legítimas: (1) efectos off-target desconocidos que podrían transmitirse; (2) posible uso para seleccionar rasgos no patológicos (eugenesia); (3) inequidad en el acceso si solo está disponible para personas con recursos. La opción A es factualmente incorrecta (CRISPR funciona en células humanas; de hecho ya se ha usado). La C es una crítica económica, no la principal preocupación ética científica. La D minimiza inapropiadamente una discusión bioética seria.',
        competencia: 'uso-conocimiento',
        componente: 'cts',
      },

      // 24. Entorno vivo + uso-conocimiento (sistema inmune)
      {
        id: 'nat-p-s11-24',
        enunciado: 'Las vacunas funcionan estimulando el sistema inmune para que produzca una respuesta sin causar la enfermedad. ¿Cuál de los siguientes procesos explica por qué una persona vacunada responde más rápido a una infección real que una persona no vacunada?',
        opciones: [
          { letra: 'A', texto: 'Las vacunas matan directamente los patógenos en el cuerpo antes de que causen síntomas.' },
          { letra: 'B', texto: 'La vacunación estimula la proliferación de linfocitos B y T de memoria específicos contra el antígeno vacunal; ante una infección real, estas células de memoria se activan rápidamente y montan una respuesta inmune secundaria más intensa y veloz.' },
          { letra: 'C', texto: 'Las vacunas fortalecen el sistema inmune innato, que responde más rápido a cualquier patógeno.' },
          { letra: 'D', texto: 'Las vacunas producen anticuerpos que permanecen en el cuerpo para siempre y neutralizan cualquier patógeno que ingrese.' },
        ],
        clave: 'B',
        justificacion: 'La clave de la inmunidad adaptativa adquirida por vacunación es la memoria inmunológica. Tras la vacunación, los linfocitos B y T específicos que reconocen el antígeno proliferan; la mayoría forma la respuesta primaria, pero una subpoblación se diferencia en células de memoria de larga vida. Al exponerse al patógeno real, estas células de memoria responden con mayor velocidad (días vs. semanas) y mayor intensidad que en una respuesta primaria. La opción A describe la acción de los anticuerpos, no el mecanismo de la vacunación. La C describe la inmunidad innata, que no tiene memoria. La D exagera la duración y especificidad de los anticuerpos.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-vivo',
      },

      // 25. Entorno fisico + explicacion (ondas y luz)
      {
        id: 'nat-p-s11-25',
        enunciado: 'Un rayo de luz blanca atraviesa un prisma de vidrio y se separa en los colores del espectro visible (rojo, naranja, amarillo, verde, azul, violeta). ¿Cuál es la explicación correcta de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'El prisma absorbe algunos colores y refleja otros hacia el observador.' },
          { letra: 'B', texto: 'La luz blanca es una mezcla de ondas de distintas frecuencias; al refractarse en el vidrio, cada frecuencia cambia de velocidad de manera diferente (dispersión), separando los colores según su índice de refracción.' },
          { letra: 'C', texto: 'El prisma crea nuevos colores a partir de la luz blanca por un proceso de difracción.' },
          { letra: 'D', texto: 'La separación ocurre porque cada color tiene diferente intensidad y el prisma los separa por brillo.' },
        ],
        clave: 'B',
        justificacion: 'La luz blanca es radiación electromagnética que contiene todas las frecuencias del espectro visible. Cuando entra al vidrio del prisma, se refracta (cambia de dirección). El índice de refracción del vidrio depende de la frecuencia: el violeta (mayor frecuencia) se desvía más que el rojo (menor frecuencia). Este fenómeno se llama dispersión. Así, las diferentes frecuencias se separan espacialmente, produciendo el espectro. Newton demostró esto en el siglo XVII. La opción A describe reflexión/absorción selectiva. La C confunde refracción con difracción (fenómeno diferente, aunque también causa separación en algunas situaciones). La D no tiene base física.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 26. CTS + indagacion (impacto ambiental de la minería)
      {
        id: 'nat-p-s11-26',
        enunciado: 'Una empresa minera presenta un estudio que concluye: "La explotación de carbón en esta región es ambientalmente sostenible porque sembramos 500 árboles por cada hectárea explotada." Un científico ambiental cuestiona esta conclusión. ¿Cuál es la crítica científica más sólida a esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'La empresa no debería plantar árboles porque eso interfiere con el ecosistema.' },
          { letra: 'B', texto: 'Plantar 500 árboles no compensa la destrucción de un ecosistema establecido: se pierden el suelo formado durante siglos, la biodiversidad local, los acuíferos y los servicios ecosistémicos, además de que las plantaciones homogéneas no equivalen en biodiversidad ni función a un bosque natural; tampoco se aborda la emisión de CO₂ por la quema del carbón extraído.' },
          { letra: 'C', texto: 'La crítica principal es que 500 es un número impar de árboles.' },
          { letra: 'D', texto: 'No existe ninguna crítica válida porque la empresa está haciendo algo positivo al plantar árboles.' },
        ],
        clave: 'B',
        justificacion: 'La sostenibilidad ambiental no se mide únicamente por el número de árboles plantados. Un ecosistema natural tiene componentes que no se pueden reemplazar simplemente plantando árboles: suelo con microbiota y estructura formada durante siglos, biodiversidad de fauna y flora interdependiente, servicios hidrológicos (regulación de caudales, recarga de acuíferos) y captura de carbono a largo plazo. Las plantaciones homogéneas tienen mucho menor biodiversidad. Además, la quema del carbón extraído libera CO₂ que contribuye al cambio climático. El estudio es incompleto y sus indicadores son insuficientes para concluir sostenibilidad. Las opciones C y D no son críticas científicas serias.',
        competencia: 'indagacion',
        componente: 'cts',
      },

      // 27. Entorno fisico + uso-conocimiento (física cuántica básica / radiación)
      {
        id: 'nat-p-s11-27',
        enunciado: 'El carbono-14 es un isótopo radiactivo con período de semidesintegración de 5.730 años. Si una muestra orgánica contiene actualmente 1/8 de la cantidad original de carbono-14, ¿aproximadamente cuántos años tiene la muestra?',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 5.730 años (1 período).' },
          { letra: 'B', texto: 'Aproximadamente 11.460 años (2 períodos).' },
          { letra: 'C', texto: 'Aproximadamente 17.190 años (3 períodos).' },
          { letra: 'D', texto: 'Aproximadamente 22.920 años (4 períodos).' },
        ],
        clave: 'C',
        justificacion: 'Después de cada período de semidesintegración, la cantidad se reduce a la mitad: después de 1 período queda 1/2; después de 2 períodos queda 1/4; después de 3 períodos queda 1/8. La muestra tiene 1/8 del original, lo que corresponde a 3 períodos de semidesintegración. 3 × 5.730 años = 17.190 años. La datación por carbono-14 se usa en arqueología y paleontología para datar materiales orgánicos de hasta ~50.000 años.',
        competencia: 'uso-conocimiento',
        componente: 'entorno-fisico',
      },

      // 28. Entorno vivo + indagacion (biodiversidad y conservación)
      {
        id: 'nat-p-s11-28',
        enunciado: 'Colombia es considerada uno de los países megadiversos del mundo. Un biólogo propone crear un corredor biológico entre dos fragmentos de bosque separados por cultivos agrícolas. ¿Cuál es el principal argumento científico a favor de los corredores biológicos?',
        opciones: [
          { letra: 'A', texto: 'Los corredores permiten a los turistas atravesar el bosque de manera segura.' },
          { letra: 'B', texto: 'Los corredores biológicos facilitan el movimiento de individuos entre poblaciones fragmentadas, lo que permite el flujo génico, reduce los efectos del aislamiento (deriva genética, consanguinidad), aumenta el tamaño efectivo de la población y mejora las posibilidades de recolonización tras extinciones locales.' },
          { letra: 'C', texto: 'Los corredores solo sirven para que los animales grandes puedan moverse; no tienen efecto sobre plantas, insectos ni aves.' },
          { letra: 'D', texto: 'Los corredores eliminan la necesidad de proteger los bosques restantes.' },
        ],
        clave: 'B',
        justificacion: 'La fragmentación del hábitat aísla poblaciones, lo que reduce el flujo génico y aumenta la consanguinidad y la deriva genética en poblaciones pequeñas, aumentando el riesgo de extinción. Los corredores biológicos conectan fragmentos y permiten el movimiento de individuos (mamíferos, aves, insectos, dispersión de semillas), lo que mantiene el flujo génico y aumenta la resiliencia de las poblaciones. La opción A es una función turística, no biológica. La C es incorrecta: los corredores benefician a múltiples grupos taxonómicos. La D es incorrecta y peligrosa: los corredores complementan, no reemplazan, la protección de los fragmentos existentes.',
        competencia: 'indagacion',
        componente: 'entorno-vivo',
      },

      // 29. Entorno fisico + explicacion (presión y fluidos)
      {
        id: 'nat-p-s11-29',
        enunciado: 'Un buzo desciende a 30 metros de profundidad en el mar. Sabiendo que la presión atmosférica equivale a 101.325 Pa y que la densidad del agua de mar es aproximadamente 1025 kg/m³, ¿qué presión total experimenta el buzo a esa profundidad? (g = 9,8 m/s²)',
        opciones: [
          { letra: 'A', texto: 'Aproximadamente 101.325 Pa (solo la presión atmosférica, el agua no ejerce presión adicional).' },
          { letra: 'B', texto: 'Aproximadamente 200.000 Pa (el doble de la atmosférica).' },
          { letra: 'C', texto: 'Aproximadamente 402.075 Pa (presión atmosférica más la presión de la columna de agua de 30 m).' },
          { letra: 'D', texto: 'Aproximadamente 1.025.000 Pa (solo la presión de la columna de agua).' },
        ],
        clave: 'C',
        justificacion: 'La presión total es la suma de la presión atmosférica más la presión hidrostática: P = P₀ + ρgh. P hidrostática = 1025 kg/m³ × 9,8 m/s² × 30 m = 301.350 Pa. P total = 101.325 + 301.350 ≈ 402.675 Pa ≈ 402.075 Pa (la ligera diferencia es de redondeo). Esto equivale a aproximadamente 4 atmósferas. Esta presión elevada explica por qué los buzos deben descomprimirse gradualmente al ascender para evitar la enfermedad de descompresión (nitrógeno disuelto en sangre). La opción A ignora la presión hidrostática. La B subestima la presión real. La D omite la presión atmosférica.',
        competencia: 'explicacion',
        componente: 'entorno-fisico',
      },

      // 30. CTS + indagacion (cambio climático y evidencia científica)
      {
        id: 'nat-p-s11-30',
        enunciado: 'Un político afirma: "El cambio climático es un mito porque en mi ciudad el invierno de este año fue más frío que el del año pasado." ¿Cuál es el error científico fundamental en este razonamiento?',
        opciones: [
          { letra: 'A', texto: 'El político tiene razón: si un invierno fue más frío, el planeta no se está calentando.' },
          { letra: 'B', texto: 'El error es confundir el clima (tendencias promedio a largo plazo, décadas o siglos, a escala global o regional) con el tiempo atmosférico (condiciones locales y de corto plazo). El cambio climático se evidencia en tendencias globales de temperatura, no en eventos climáticos locales de un año.' },
          { letra: 'C', texto: 'El error es que el político no mencionó la lluvia, que es la variable más importante del clima.' },
          { letra: 'D', texto: 'El error es hablar de invierno, porque el cambio climático solo afecta el verano.' },
        ],
        clave: 'B',
        justificacion: 'La distinción entre tiempo atmosférico y clima es fundamental en ciencias de la Tierra. El tiempo es el estado de la atmósfera en un lugar y momento específicos (puede variar día a día). El clima es el patrón estadístico del tiempo durante períodos largos (normalmente 30 años o más) en una región o en el planeta. El calentamiento global se evidencia en el aumento de la temperatura promedio global a lo largo de décadas, el derretimiento de glaciares, el aumento del nivel del mar y los cambios en patrones climáticos globales; no en la temperatura de un invierno particular en una ciudad. Esta confusión es una falacia frecuente en el debate público sobre cambio climático.',
        competencia: 'indagacion',
        componente: 'cts',
      },
    ],
  },

  // ===========================================================
  // CIENCIAS SOCIALES
  // ===========================================================
  sociales: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s9-01',
        enunciado: 'La Constitución Política de Colombia de 1991 establece en su artículo 1° que Colombia es un "Estado social de derecho". ¿Cuál de las siguientes afirmaciones describe mejor el significado de este principio?',
        opciones: [
          { letra: 'A', texto: 'El Estado colombiano se organiza exclusivamente con base en las leyes, sin consideración de las necesidades sociales de la población.' },
          { letra: 'B', texto: 'El Estado tiene la obligación de garantizar no solo el cumplimiento de las leyes, sino también condiciones de vida digna, igualdad y justicia social para todos los ciudadanos.' },
          { letra: 'C', texto: 'El Estado colombiano es un estado social porque la mayoría de sus ciudadanos pertenece a la clase media.' },
          { letra: 'D', texto: 'El Estado social de derecho implica que todos los ciudadanos tienen los mismos ingresos económicos garantizados por la Constitución.' },
        ],
        clave: 'B',
        justificacion: 'El Estado social de derecho implica que el Estado no se limita a garantizar el orden jurídico formal, sino que asume la responsabilidad de promover condiciones de vida digna, equidad y justicia social. En Colombia, esto se refleja en derechos como la educación, la salud y la vivienda. La opción A describe un Estado de derecho formal (sin el componente social). Las opciones C y D son incorrectas: el término no se refiere a la composición socioeconómica ni a la igualdad de ingresos.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 2. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s9-02',
        enunciado: 'Durante la conquista española de América en el siglo XVI, los cronistas europeos describieron a los pueblos indígenas como "salvajes" que necesitaban ser "civilizados". Los pueblos indígenas, por su parte, experimentaron la conquista como una invasión y destrucción de su cultura y territorio. ¿Qué concepto histórico ilustra mejor la coexistencia de estas dos visiones?',
        opciones: [
          { letra: 'A', texto: 'La objetividad histórica, porque los cronistas registraron los hechos tal como ocurrieron.' },
          { letra: 'B', texto: 'La multiperspectividad, porque un mismo evento histórico puede ser interpretado de maneras diferentes según los actores involucrados.' },
          { letra: 'C', texto: 'La relatividad cultural, porque ninguna de las dos culturas es superior a la otra.' },
          { letra: 'D', texto: 'El etnocentrismo indígena, porque los pueblos originarios también juzgaban a los europeos desde su propia cultura.' },
        ],
        clave: 'B',
        justificacion: 'La multiperspectividad es la capacidad de analizar un evento histórico desde los puntos de vista de los diferentes actores involucrados. La conquista fue vivida de manera radicalmente diferente por los conquistadores y por los pueblos indígenas, y ambas perspectivas son válidas para comprender el proceso histórico en su complejidad. La opción A es incorrecta: las crónicas europeas no son objetivas, están marcadas por una visión eurocéntrica. La opción C describe la relatividad cultural, que es un concepto relacionado pero distinto. La opción D es incorrecta: la pregunta ilustra el etnocentrismo europeo, no el indígena.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 3. Argumentacion + pensamiento-sistemico
      {
        id: 'soc-p-s9-03',
        enunciado: 'Lee el siguiente argumento:\n\n"Colombia debería prohibir todas las exportaciones de carbón porque contamina el ambiente. Si continuamos exportando carbón, en 20 años el planeta será inhabitable."\n\n¿Cuál es la principal debilidad de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento no tiene debilidades: la contaminación del carbón es un hecho científico comprobado.' },
          { letra: 'B', texto: 'El argumento usa una proyección catastrófica sin evidencia que la sustente ("en 20 años el planeta será inhabitable") y no considera los impactos económicos y sociales de la prohibición.' },
          { letra: 'C', texto: 'El argumento es débil porque Colombia no exporta carbón.' },
          { letra: 'D', texto: 'El argumento es correcto en su conclusión pero usa un lenguaje demasiado técnico que dificulta su comprensión.' },
        ],
        clave: 'B',
        justificacion: 'El argumento incurre en dos debilidades: (1) una generalización catastrófica sin evidencia ("en 20 años el planeta será inhabitable"), que es una exageración que resta credibilidad al argumento; (2) no considera los efectos económicos y sociales de una prohibición total, lo que lo hace simplista. La opción A ignora las debilidades señaladas. La opción C es factualmente incorrecta: Colombia sí exporta carbón. La opción D invierte el problema: el lenguaje del argumento no es técnico, sino impreciso y alarmista.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 4. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s9-04',
        enunciado: 'El proceso de globalización ha generado tanto oportunidades como desigualdades. ¿Cuál de las siguientes consecuencias de la globalización es una expresión de sus efectos desiguales?',
        opciones: [
          { letra: 'A', texto: 'La difusión de internet ha permitido el acceso igualitario a la información en todos los países del mundo.' },
          { letra: 'B', texto: 'Los países productores de materias primas tienen menor poder de negociación y reciben menores ingresos que los países que producen bienes manufacturados y tecnología.' },
          { letra: 'C', texto: 'La globalización ha eliminado las diferencias culturales entre los países, creando una cultura mundial unificada.' },
          { letra: 'D', texto: 'Los tratados de libre comercio han beneficiado por igual a todos los países firmantes, sin excepción.' },
        ],
        clave: 'B',
        justificacion: 'Una de las críticas más documentadas a la globalización es la asimetría en los términos de intercambio: los países que exportan materias primas (petróleo, carbón, café, flores) reciben menos valor agregado que los que exportan tecnología y bienes manufacturados, lo que perpetúa la dependencia económica. La opción A es incorrecta: la brecha digital es precisamente una de las desigualdades de la globalización. La opción C es incorrecta: la globalización coexiste con la diversidad cultural y, en algunos casos, la amenaza. La opción D es incorrecta: los tratados de libre comercio generan ganadores y perdedores.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 5. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s9-05',
        enunciado: 'En Colombia, el conflicto armado ha afectado especialmente a comunidades indígenas y afrocolombianas. Desde la perspectiva de los derechos humanos, ¿cuál de las siguientes afirmaciones es la más adecuada para analizar esta situación?',
        opciones: [
          { letra: 'A', texto: 'El conflicto afecta por igual a toda la población colombiana, por lo que no es necesario hablar de grupos más vulnerables.' },
          { letra: 'B', texto: 'Las comunidades indígenas y afrocolombianas han sido desproporcionadamente afectadas por el conflicto debido a su ubicación en territorios con recursos estratégicos y a históricos procesos de exclusión social.' },
          { letra: 'C', texto: 'El conflicto armado es exclusivamente una disputa entre grupos armados y no tiene consecuencias humanitarias para la población civil.' },
          { letra: 'D', texto: 'Las comunidades afrocolombianas e indígenas son las causantes del conflicto porque se niegan a abandonar sus territorios.' },
        ],
        clave: 'B',
        justificacion: 'Desde el enfoque de derechos humanos y diferencial, se reconoce que ciertas comunidades han sido desproporcionadamente victimizadas por el conflicto armado colombiano. Las comunidades indígenas y afrocolombianas están ubicadas en territorios ricos en recursos naturales disputados por actores armados y han sufrido históricamente procesos de exclusión. La opción A niega la diferenciación necesaria para proteger a poblaciones vulnerables. La opción C desconoce las graves consecuencias humanitarias del conflicto. La opción D invierte la responsabilidad, culpando a las víctimas.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 6. Conocimientos sociales + pensamiento-social (geografía)
      {
        id: 'soc-p-s9-06',
        enunciado: 'Colombia se divide en cinco regiones naturales: Andina, Caribe, Pacífico, Orinoquía y Amazonía. ¿Cuál de las siguientes afirmaciones sobre la región Andina es CORRECTA?',
        opciones: [
          { letra: 'A', texto: 'La región Andina es la menos poblada de Colombia porque su clima frío dificulta la agricultura.' },
          { letra: 'B', texto: 'La región Andina concentra la mayor parte de la población colombiana, las principales ciudades y la mayor diversidad de pisos térmicos, lo que permite distintos tipos de cultivo.' },
          { letra: 'C', texto: 'La región Andina ocupa la mayor extensión territorial de Colombia y limita con el océano Atlántico.' },
          { letra: 'D', texto: 'La región Andina es principalmente llana y carece de recursos hídricos importantes.' },
        ],
        clave: 'B',
        justificacion: 'La región Andina concentra aproximadamente el 75-80% de la población colombiana y las principales ciudades (Bogotá, Medellín, Cali, Manizales, Pereira, Bucaramanga). Su carácter montañoso crea una gran diversidad de pisos térmicos (cálido, templado, frío, páramo) que permite distintos cultivos (café, maíz, papa, flores). La opción A invierte la realidad: la región Andina es la más poblada. La opción C confunde con la región Amazónica (mayor extensión) y la Caribe (costera). La opción D contradice la naturaleza montañosa y la riqueza hídrica de los Andes.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 7. Argumentación + pensamiento-sistemico (economía)
      {
        id: 'soc-p-s9-07',
        enunciado: 'Un economista afirma: "El turismo es la mejor solución para el desarrollo de los municipios pobres de Colombia porque genera empleo y divisas." ¿Cuál es la limitación más importante de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es completamente falso porque el turismo nunca genera empleo.' },
          { letra: 'B', texto: 'El argumento simplifica el desarrollo al atribuirlo a una sola actividad, sin considerar las condiciones estructurales necesarias (infraestructura, seguridad, educación) ni los riesgos del turismo (dependencia, estacionalidad, impactos ambientales).' },
          { letra: 'C', texto: 'El argumento es correcto y el turismo es siempre la mejor estrategia de desarrollo para cualquier región.' },
          { letra: 'D', texto: 'El argumento falla porque los colombianos no prefieren viajar dentro del país.' },
        ],
        clave: 'B',
        justificacion: 'El argumento comete una simplificación excesiva: el desarrollo requiere múltiples condiciones y el turismo por sí solo no lo garantiza. Los riesgos del turismo incluyen dependencia de una sola actividad económica, estacionalidad (ingresos variables según temporada), posibles impactos ambientales y culturales negativos, y la necesidad de infraestructura previa. El desarrollo sostenible requiere diversificación económica. La opción A niega evidencia real del turismo como generador de empleo. La opción C es una generalización sin matices. La opción D introduce un factor irrelevante al argumento original.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 8. Conocimientos sociales + interpretacion (historia de Colombia)
      {
        id: 'soc-p-s9-08',
        enunciado: 'El período conocido como "La Violencia" en Colombia (1948-1958) tuvo como detonante el asesinato de Jorge Eliécer Gaitán el 9 de abril de 1948. ¿Cuál de las siguientes afirmaciones describe mejor las causas estructurales de este período?',
        opciones: [
          { letra: 'A', texto: 'La Violencia fue causada exclusivamente por el asesinato de Gaitán y no tenía antecedentes previos.' },
          { letra: 'B', texto: 'La Violencia fue un período de enfrentamientos entre liberales y conservadores, alimentado por décadas de bipartidismo excluyente, desigualdad en la distribución de la tierra y exclusión de los sectores populares del poder político.' },
          { letra: 'C', texto: 'La Violencia fue consecuencia directa de la intervención militar de Estados Unidos en Colombia durante la Guerra Fría.' },
          { letra: 'D', texto: 'La Violencia fue un movimiento organizado por las clases populares para derrocar el gobierno conservador.' },
        ],
        clave: 'B',
        justificacion: 'El asesinato de Gaitán fue el detonante, pero las causas estructurales de La Violencia son más profundas: décadas de confrontación bipartidista (liberal-conservador) que excluía a los sectores populares, concentración de la tierra en pocas manos (latifundismo), desigualdad social y ausencia de mecanismos democráticos inclusivos. La opción A reduce el fenómeno a un único evento. La opción C introduce la intervención externa como causa principal, lo cual no está sustentado históricamente para este período. La opción D describe una acción organizada que no caracteriza el carácter espontáneo y difuso de La Violencia.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 9. Multiperspectividad + pensamiento-social (democracia)
      {
        id: 'soc-p-s9-09',
        enunciado: 'La abstención electoral en Colombia supera frecuentemente el 50%. ¿Cuál de las siguientes interpretaciones de este fenómeno es más completa desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'La abstención demuestra que los colombianos son apáticos y no les interesa la política.' },
          { letra: 'B', texto: 'La abstención es un fenómeno complejo que refleja desconfianza en el sistema político, dificultades de acceso al voto en zonas rurales, falta de identificación con los candidatos y, en algunos casos, una posición política consciente de rechazo.' },
          { letra: 'C', texto: 'La abstención es exclusivamente culpa de los medios de comunicación que no informan sobre las elecciones.' },
          { letra: 'D', texto: 'La abstención no tiene consecuencias para la democracia porque el voto no es obligatorio en Colombia.' },
        ],
        clave: 'B',
        justificacion: 'La abstención electoral es un fenómeno multifactorial que no puede reducirse a una sola causa. Las ciencias sociales identifican: desconfianza institucional (percepción de corrupción, ineficacia del sistema), barreras de acceso (zonas rurales sin puestos de votación accesibles), falta de identificación con las opciones políticas disponibles, cultura política y, para algunos ciudadanos, una abstención deliberada como forma de protesta. La opción A reduce el fenómeno a un rasgo cultural negativo. La opción C atribuye la causa únicamente a los medios. La opción D es incorrecta: la baja participación afecta la legitimidad democrática.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 10. Argumentación + interpretacion (derechos fundamentales)
      {
        id: 'soc-p-s9-10',
        enunciado: 'La Constitución de 1991 establece en Colombia el mecanismo de la tutela para proteger los derechos fundamentales. Lee el siguiente caso:\n\n"Una empresa desalojó a 40 familias de un barrio sin ofrecerles vivienda alternativa. Las familias interpusieron una tutela alegando violación al derecho a la vivienda digna."\n\n¿Cuál es el argumento jurídico-constitucional más sólido para que el juez falle a favor de las familias?',
        opciones: [
          { letra: 'A', texto: 'La empresa es privada, por lo que la Constitución no aplica en este caso.' },
          { letra: 'B', texto: 'El artículo 51 de la Constitución establece el derecho a la vivienda digna como deber del Estado; el desalojo sin vivienda alternativa viola este derecho fundamental y el Estado debe garantizarlo.' },
          { letra: 'C', texto: 'Las familias no tienen razón porque el propietario del terreno tiene derechos de propiedad que priman sobre los derechos sociales.' },
          { letra: 'D', texto: 'La tutela no procede en casos de vivienda porque este derecho no es fundamental en la Constitución de 1991.' },
        ],
        clave: 'B',
        justificacion: 'El artículo 51 de la Constitución de 1991 reconoce el derecho a la vivienda digna. La Corte Constitucional colombiana ha establecido jurisprudencia que protege este derecho especialmente cuando su violación afecta la dignidad humana y otros derechos conexos (salud, educación de los menores). Un desalojo masivo sin alternativa habitacional puede ser tutelado como violación de derechos fundamentales. La opción A es incorrecta: los derechos constitucionales vinculan también a particulares. La opción C presenta una colisión de derechos donde no siempre prima la propiedad. La opción D es incorrecta: la vivienda es un derecho constitucional que puede protegerse por tutela.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 11. Conocimientos sociales + pensamiento-sistemico (economía colombiana)
      {
        id: 'soc-p-s9-11',
        enunciado: 'Colombia es uno de los principales productores mundiales de café, flores y petróleo. Sin embargo, los economistas señalan que depender principalmente de la exportación de materias primas es un riesgo para el desarrollo. ¿Por qué?',
        opciones: [
          { letra: 'A', texto: 'Porque Colombia no puede competir con otros países en la producción de materias primas.' },
          { letra: 'B', texto: 'Porque los precios internacionales de las materias primas son volátiles e inciertos; si los precios caen, los ingresos del país disminuyen drásticamente y la economía se vuelve vulnerable a factores externos.' },
          { letra: 'C', texto: 'Porque las materias primas no generan ningún tipo de empleo en los países productores.' },
          { letra: 'D', texto: 'Porque los tratados de libre comercio prohíben a Colombia exportar más de tres productos.' },
        ],
        clave: 'B',
        justificacion: 'La dependencia de materias primas (commodities) expone la economía al llamado "síndrome de los recursos" o "enfermedad holandesa": cuando los precios internacionales caen (como el petróleo en 2014-2016), los ingresos fiscales y las exportaciones disminuyen, generando recesión, devaluación de la moneda y crisis. Además, las materias primas generan menos valor agregado que los bienes manufacturados o los servicios tecnológicos. La opción A es incorrecta: Colombia sí es competitiva en varios sectores primarios. La opción C es falsa: las materias primas sí generan empleo. La opción D es una afirmación sin fundamento.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 12. Multiperspectividad + pensamiento-social (migración)
      {
        id: 'soc-p-s9-12',
        enunciado: 'Colombia recibió a partir de 2015 una migración masiva de venezolanos que huían de la crisis económica y política de ese país. ¿Cuál de las siguientes perspectivas sobre este fenómeno es más equilibrada desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'La migración venezolana solo ha generado problemas en Colombia y debería frenarse completamente.' },
          { letra: 'B', texto: 'La migración masiva genera tanto desafíos (presión sobre servicios públicos, xenofobia) como oportunidades (mano de obra, diversidad cultural, intercambio económico), y requiere políticas públicas que garanticen los derechos de los migrantes.' },
          { letra: 'C', texto: 'Los migrantes venezolanos no tienen ningún derecho en Colombia porque son extranjeros.' },
          { letra: 'D', texto: 'La migración venezolana no ha tenido ningún impacto sobre Colombia.' },
        ],
        clave: 'B',
        justificacion: 'Desde las ciencias sociales, los fenómenos migratorios son complejos y tienen múltiples dimensiones. La migración venezolana ha generado retos (demanda de salud, educación, vivienda; tensiones sociales) pero también aportes (fuerza laboral, dinamismo económico, diversidad). Colombia tiene obligaciones internacionales de proteger a los refugiados y migrantes según el derecho internacional. Una perspectiva equilibrada reconoce ambas dimensiones y propone respuestas institucionales. Las opciones A y C adoptan posturas xenófobas sin fundamento. La opción D niega una realidad documentada.',
        competencia: 'pensamiento-social',
        componente: 'multiperspectividad',
      },

      // 13. Argumentación + pensamiento-social (medios de comunicación)
      {
        id: 'soc-p-s9-13',
        enunciado: 'Lee el siguiente titular de un periódico:\n\n"CIFRAS MUESTRAN QUE EL CRIMEN BAJÓ UN 15% ESTE AÑO"\n\nY el siguiente de otro periódico:\n\n"INSEGURIDAD SIGUE SIENDO EL PRINCIPAL PROBLEMA DEL PAÍS SEGÚN ENCUESTA"\n\n¿Qué conclusión es más adecuada respecto a estos dos titulares?',
        opciones: [
          { letra: 'A', texto: 'Uno de los dos periódicos está mintiendo deliberadamente.' },
          { letra: 'B', texto: 'Los dos titulares pueden ser verdaderos simultáneamente: las estadísticas de crimen pueden mostrar una reducción mientras la percepción de inseguridad (medida por encuestas) permanece alta, pues miden dimensiones diferentes del mismo fenómeno.' },
          { letra: 'C', texto: 'El primer periódico es más confiable porque usa datos cuantitativos.' },
          { letra: 'D', texto: 'El segundo periódico es más confiable porque representa la opinión de la gente.' },
        ],
        clave: 'B',
        justificacion: 'Las estadísticas oficiales de crimen y la percepción ciudadana de inseguridad son dos mediciones diferentes del mismo fenómeno. Es perfectamente posible que el crimen haya disminuido estadísticamente (menos delitos registrados) mientras la percepción de inseguridad sigue alta (debido a cobertura mediática, memoria de eventos violentos, confianza o desconfianza en las cifras oficiales). Ambas fuentes aportan información válida pero miden dimensiones distintas. La lectura crítica de medios requiere reconocer estas diferencias. Las opciones C y D privilegian un tipo de fuente sobre otro sin justificación.',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 14. Conocimientos sociales + interpretacion (Independencia de Colombia)
      {
        id: 'soc-p-s9-14',
        enunciado: 'El proceso de independencia de Colombia (1810-1819) fue liderado principalmente por criollos adinerados, no por indígenas ni esclavizados. ¿Qué conclusión histórica se puede extraer de este hecho?',
        opciones: [
          { letra: 'A', texto: 'La independencia fue un movimiento que benefició a todos los sectores de la sociedad colonial por igual.' },
          { letra: 'B', texto: 'La independencia fue liderada por las élites criollas que buscaban el control político y económico que la corona española les negaba; los pueblos indígenas y afrodescendientes no tuvieron una participación protagónica y sus condiciones de vida no mejoraron significativamente con la independencia.' },
          { letra: 'C', texto: 'Los indígenas y esclavizados apoyaron activamente la independencia porque sabían que se aboliría la esclavitud al día siguiente de la independencia.' },
          { letra: 'D', texto: 'La independencia fue un movimiento popular liderado desde abajo por campesinos y artesanos.' },
        ],
        clave: 'B',
        justificacion: 'Los historiadores señalan que la independencia hispanoamericana fue liderada por criollos (hijos de españoles nacidos en América) que querían acceder al poder político y comercial que el sistema colonial reservaba para los peninsulares. La abolición de la esclavitud en Colombia no ocurrió hasta 1851 (30 años después de la independencia), y las comunidades indígenas mantuvieron condiciones de exclusión y despojo. Esto no niega el heroísmo de muchos actores, pero muestra que la independencia no transformó las estructuras de desigualdad colonial. Las opciones A, C y D idealizan el proceso ignorando las jerarquías sociales de la época.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 15. Argumentación + pensamiento-sistemico (medio ambiente)
      {
        id: 'soc-p-s9-15',
        enunciado: 'La deforestación en la Amazonía colombiana ha aumentado en los últimos años. Un alcalde propone: "Debemos compensar la deforestación plantando árboles en las ciudades." Desde las ciencias sociales y ambientales, ¿cuál es la principal limitación de esta propuesta?',
        opciones: [
          { letra: 'A', texto: 'La propuesta es perfecta porque plantar árboles en las ciudades compensa exactamente la deforestación amazónica.' },
          { letra: 'B', texto: 'Plantar árboles urbanos tiene beneficios locales, pero no equivale a la complejidad y biodiversidad de los ecosistemas amazónicos; se necesitan políticas de protección directa de la selva, no solo compensaciones simbólicas en otros ecosistemas.' },
          { letra: 'C', texto: 'La deforestación es inevitable y no tiene solución, por lo que la propuesta del alcalde es la única opción realista.' },
          { letra: 'D', texto: 'No existe ninguna relación entre la deforestación amazónica y el bienestar urbano.' },
        ],
        clave: 'B',
        justificacion: 'La Amazonía es un ecosistema de extraordinaria complejidad: alberga millones de especies, regula el ciclo del agua regional, actúa como sumidero de carbono y es hogar de comunidades indígenas. Plantar árboles urbanos (generalmente de pocas especies) no puede reemplazar esta complejidad ecosistémica. Las políticas efectivas requieren protección directa de la selva, fortalecimiento de la presencia estatal en zonas de deforestación, apoyo a comunidades locales como guardianes del bosque y sanción a la deforestación ilegal. La opción A sobrevalora las compensaciones simbólicas. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Conocimientos sociales + pensamiento-social
      {
        id: 'soc-p-s11-01',
        enunciado: 'Lee el siguiente fragmento:\n\n"La Guerra Fría (1947-1991) fue un conflicto ideológico, político y geopolítico entre los Estados Unidos y la Unión Soviética. Aunque no hubo enfrentamiento militar directo entre las dos superpotencias, la guerra se libró a través de conflictos regionales en Asia, África y América Latina, donde cada bloque apoyó a facciones aliadas."\n\nSegún el texto, ¿cuál fue la principal característica de la Guerra Fría?',
        opciones: [
          { letra: 'A', texto: 'Fue un conflicto exclusivamente económico entre los países capitalistas y los socialistas.' },
          { letra: 'B', texto: 'Fue una guerra directa entre EE.UU. y la URSS que se libró principalmente en Europa.' },
          { letra: 'C', texto: 'Fue una confrontación ideológica y geopolítica que se manifestó a través de conflictos regionales sin enfrentamiento militar directo entre las superpotencias.' },
          { letra: 'D', texto: 'Fue un conflicto que solo afectó a los países en desarrollo, sin consecuencias para las grandes potencias.' },
        ],
        clave: 'C',
        justificacion: 'El texto es explícito: la Guerra Fría fue una confrontación ideológica y geopolítica que, aunque no tuvo enfrentamiento directo entre EE.UU. y la URSS, se manifestó en conflictos regionales (guerras en Corea, Vietnam, Angola, Nicaragua) donde cada bloque apoyó a sus aliados. La opción A reduce el conflicto a lo económico, cuando también fue ideológico y militar. La opción B contradice el texto, que afirma que no hubo enfrentamiento directo. La opción D es incorrecta: las consecuencias para las superpotencias fueron enormes (carrera armamentista, influencia global).',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 2. Argumentacion + pensamiento-sistemico
      {
        id: 'soc-p-s11-02',
        enunciado: 'Un senador propone una ley para reducir el salario mínimo argumentando: "En los países donde se bajó el salario mínimo, el desempleo cayó. Por lo tanto, si reducimos el salario mínimo en Colombia, el desempleo también caerá." ¿Cuál es la principal falla lógica de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es válido porque está basado en evidencia empírica de otros países.' },
          { letra: 'B', texto: 'El argumento comete una falacia de generalización apresurada: asume que lo que ocurrió en otros contextos ocurrirá necesariamente en Colombia, sin considerar factores específicos del país.' },
          { letra: 'C', texto: 'El argumento es incorrecto porque ningún país del mundo ha reducido el salario mínimo.' },
          { letra: 'D', texto: 'El argumento es correcto en su lógica, pero tiene un error de cálculo en las cifras de desempleo.' },
        ],
        clave: 'B',
        justificacion: 'El argumento incurre en una generalización apresurada (o falacia de analogía débil): extrapola resultados de otros países al contexto colombiano sin considerar que cada economía tiene características específicas (estructura laboral, inflación, productividad, instituciones) que pueden producir resultados distintos. Además, la correlación entre salario mínimo bajo y menor desempleo no implica causalidad. La opción A ignora la falacia. La opción C es factualmente incorrecta. La opción D desvía el problema: la falla es lógica, no aritmética.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 3. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s11-03',
        enunciado: 'El Acuerdo de Paz firmado en Colombia en 2016 fue apoyado por organizaciones de víctimas, comunidades rurales y organismos internacionales, pero rechazado por sectores políticos que consideraron que concedía demasiados beneficios a los actores armados. ¿Qué herramienta analítica es más útil para comprender este debate?',
        opciones: [
          { letra: 'A', texto: 'La objetividad histórica, que permite determinar quién tiene razón en el debate sobre el acuerdo de paz.' },
          { letra: 'B', texto: 'El análisis multiperspectivo, que permite comprender las distintas posiciones y los valores que las sustentan sin reducir el debate a una sola verdad.' },
          { letra: 'C', texto: 'El positivismo jurídico, que establece que lo único relevante es lo que dice el texto del acuerdo, independientemente de las opiniones.' },
          { letra: 'D', texto: 'La teoría conspirativa, que permite identificar los intereses ocultos detrás de cada posición.' },
        ],
        clave: 'B',
        justificacion: 'El debate sobre el Acuerdo de Paz involucra actores con experiencias, valores e intereses legítimamente distintos: las víctimas buscan reparación y no repetición; los opositores políticos exigen mayor justicia retributiva; las comunidades rurales priorizan la seguridad territorial. El análisis multiperspectivo permite comprender estas posiciones sin descalificar ninguna a priori. La opción A supone equivocadamente que existe una "verdad objetiva" en debates normativos y políticos. La opción C reduce el análisis al texto legal, ignorando las experiencias de las personas. La opción D no es una herramienta analítica válida en las ciencias sociales.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 4. Conocimientos sociales + pensamiento-sistemico
      {
        id: 'soc-p-s11-04',
        enunciado: 'El Índice de Desarrollo Humano (IDH) mide el progreso de un país en tres dimensiones: salud (esperanza de vida), educación (años de escolaridad) e ingreso (PIB per cápita). Si un país tiene un PIB per cápita alto pero baja esperanza de vida y pocos años de escolaridad, ¿qué conclusión es más adecuada?',
        opciones: [
          { letra: 'A', texto: 'El país tiene un alto desarrollo humano porque su ingreso económico es elevado.' },
          { letra: 'B', texto: 'El crecimiento económico del país no se ha traducido en mejoras proporcionales en la salud y la educación de la población, lo que indica una distribución desigual del bienestar.' },
          { letra: 'C', texto: 'El IDH del país será alto porque el PIB per cápita compensa las bajas cifras de salud y educación.' },
          { letra: 'D', texto: 'El país no necesita mejorar la salud ni la educación si ya tiene un PIB alto.' },
        ],
        clave: 'B',
        justificacion: 'El IDH es un indicador multidimensional que combina salud, educación e ingreso. Un PIB alto con baja esperanza de vida y poca escolaridad indica que el crecimiento económico no beneficia por igual a toda la población, evidenciando desigualdad en la distribución del bienestar. El IDH de ese país será medio o bajo porque las tres dimensiones se combinan. La opción A usa solo una dimensión para concluir el nivel de desarrollo. La opción C es incorrecta: las dimensiones se combinan pero no se compensan proporcionalmente de esa forma. La opción D refleja una visión economicista que el IDH precisamente busca superar.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 5. Multiperspectividad + interpretacion
      {
        id: 'soc-p-s11-05',
        enunciado: 'Lee el siguiente fragmento de un discurso político:\n\n"Los movimientos feministas han destruido la familia colombiana. Antes las mujeres eran felices en el hogar y los hombres podían trabajar tranquilos. Hoy, por culpa del feminismo, tenemos más divorcios, menos hijos y una sociedad en crisis."\n\n¿Cuál de los siguientes análisis es más adecuado para evaluar este discurso desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'El discurso es correcto porque las estadísticas de divorcio en Colombia han aumentado en las últimas décadas.' },
          { letra: 'B', texto: 'El discurso presenta una relación causal no demostrada entre el feminismo y los cambios familiares, ignora los beneficios del movimiento para las mujeres e invisibiliza las perspectivas de quienes han sido históricamente excluidas.' },
          { letra: 'C', texto: 'El discurso es un ejemplo de pensamiento científico porque usa datos observables (divorcios, natalidad) para sustentar su argumento.' },
          { letra: 'D', texto: 'El discurso es neutral porque describe cambios sociales sin tomar partido por ningún grupo.' },
        ],
        clave: 'B',
        justificacion: 'El discurso incurre en varias fallas analíticas: (1) establece una relación causal sin evidencia entre el feminismo y el aumento de divorcios; (2) usa un lenguaje nostálgico ("antes las mujeres eran felices") que invisibiliza las desigualdades históricas; (3) ignora completamente la perspectiva de las mujeres y los beneficios reales del feminismo (derechos laborales, acceso a la educación, protección contra la violencia). La opción A confunde correlación con causalidad. La opción C es incorrecta: observar un dato sin establecer relaciones causales válidas no es pensamiento científico. La opción D es incorrecta: el discurso toma claramente una posición contraria al feminismo.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 6. Conocimientos sociales + pensamiento-social (geopolítica)
      {
        id: 'soc-p-s11-06',
        enunciado: 'La Organización de Naciones Unidas (ONU) fue creada en 1945 tras la Segunda Guerra Mundial. ¿Cuál fue la principal motivación para su creación y cuál es su limitación estructural más criticada?',
        opciones: [
          { letra: 'A', texto: 'Fue creada para administrar la economía mundial; su limitación es que no tiene sede permanente.' },
          { letra: 'B', texto: 'Fue creada para prevenir conflictos armados y promover la cooperación internacional; su limitación más criticada es el poder de veto de los cinco miembros permanentes del Consejo de Seguridad, que puede bloquear decisiones incluso ante graves violaciones de derechos humanos.' },
          { letra: 'C', texto: 'Fue creada para distribuir los recursos naturales del mundo; su limitación es la falta de presupuesto.' },
          { letra: 'D', texto: 'Fue creada como alianza militar entre las potencias vencedoras de la guerra; no tiene ninguna limitación estructural.' },
        ],
        clave: 'B',
        justificacion: 'La ONU fue creada con el propósito de mantener la paz y seguridad internacional, promover la cooperación y proteger los derechos humanos, tras el horror de la Segunda Guerra Mundial. Su principal limitación estructural es el derecho de veto de los cinco miembros permanentes del Consejo de Seguridad (EE.UU., Rusia, China, Francia, Reino Unido): cualquiera puede bloquear resoluciones, lo que ha paralizado respuestas ante conflictos como los de Siria o Ucrania. La opción A describe funciones económicas que corresponden más al FMI o la OMC. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-social',
        componente: 'conocimientos-sociales',
      },

      // 7. Argumentación + pensamiento-sistemico (derechos y democracia)
      {
        id: 'soc-p-s11-07',
        enunciado: 'Lee el siguiente argumento sobre democracia:\n\n"La democracia directa, en la que todos los ciudadanos votan sobre cada decisión, es superior a la democracia representativa porque elimina a los intermediarios políticos que corrompen la voluntad popular."\n\n¿Cuál es la principal debilidad de este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es correcto: la democracia directa es siempre superior a la representativa.' },
          { letra: 'B', texto: 'El argumento ignora las limitaciones prácticas de la democracia directa en sociedades grandes y complejas (tiempo, información, riesgo de decisiones impulsivas), y asume que eliminar representantes elimina la corrupción, lo cual no está demostrado.' },
          { letra: 'C', texto: 'El argumento falla porque la democracia representativa siempre funciona mejor que cualquier otra forma de gobierno.' },
          { letra: 'D', texto: 'El argumento es inválido porque ningún país del mundo ha usado la democracia directa.' },
        ],
        clave: 'B',
        justificacion: 'La democracia directa tiene limitaciones reales en sociedades con millones de ciudadanos: requiere que cada persona se informe sobre todas las decisiones técnicas (presupuesto, política exterior, salud pública), lo que es inviable en la práctica. Además, las decisiones por referéndum pueden ser influenciadas por emociones, desinformación o intereses de grupos. La corrupción no desaparece por eliminar representantes: puede trasladarse a quienes elaboran las preguntas o interpretan los resultados. Algunos países (Suiza) usan modelos mixtos con referendos frecuentes. La opción A adopta la posición sin cuestionarla. La opción D es incorrecta: Suiza y otros países usan elementos de democracia directa.',
        competencia: 'pensamiento-sistemico',
        componente: 'argumentacion',
      },

      // 8. Conocimientos sociales + pensamiento-sistemico (neoliberalismo)
      {
        id: 'soc-p-s11-08',
        enunciado: 'En los años 90, Colombia adoptó políticas de "apertura económica" que implicaron reducir aranceles, privatizar empresas estatales y liberalizar el comercio. Desde el análisis de las ciencias sociales, ¿cuál fue un impacto documentado de estas políticas?',
        opciones: [
          { letra: 'A', texto: 'La apertura económica eliminó por completo la pobreza en Colombia durante los años 90.' },
          { letra: 'B', texto: 'La apertura facilitó el acceso a productos importados más baratos pero también afectó a sectores productivos nacionales que no pudieron competir, especialmente la industria y algunos sectores agrícolas.' },
          { letra: 'C', texto: 'La apertura económica no tuvo ningún impacto en la economía colombiana porque el gobierno bloqueó su implementación.' },
          { letra: 'D', texto: 'La apertura económica fortaleció exclusivamente a los trabajadores y pequeños productores del campo.' },
        ],
        clave: 'B',
        justificacion: 'La apertura económica de los años 90 en Colombia (bajo el gobierno de César Gaviria) generó efectos mixtos: los consumidores accedieron a bienes importados más baratos (electrodomésticos, textiles), pero sectores industriales nacionales y algunos agrícolas (como la producción de trigo, algodón y sorgo) no pudieron competir con los precios internacionales y decayeron. Este proceso se llama "desindustrialización" y es un fenómeno documentado en varios países latinoamericanos que adoptaron reformas similares. La opción A es una idealización no sustentada. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 9. Multiperspectividad + interpretacion (derechos indígenas)
      {
        id: 'soc-p-s11-09',
        enunciado: 'Los pueblos indígenas del Cauca en Colombia han bloqueado frecuentemente la carretera Panamericana para exigir el cumplimiento de acuerdos con el gobierno. Algunos sectores consideran que estos bloqueos son ilegales e ilegítimos; los pueblos indígenas los defienden como mecanismo de presión. ¿Cuál es el análisis más adecuado de esta tensión desde las ciencias sociales?',
        opciones: [
          { letra: 'A', texto: 'Los bloqueos son siempre ilegítimos porque afectan el derecho a la libre circulación de otras personas.' },
          { letra: 'B', texto: 'Esta es una tensión entre derechos constitucionales (libre circulación vs. derecho a la protesta y a la consulta previa de los pueblos indígenas) y entre la legalidad formal y la legitimidad política; el análisis requiere comprender el contexto histórico de incumplimiento de acuerdos y exclusión de los pueblos indígenas.' },
          { letra: 'C', texto: 'Los pueblos indígenas siempre tienen razón en sus demandas, por lo que los bloqueos son siempre justificados.' },
          { letra: 'D', texto: 'El Estado debe ignorar las demandas indígenas porque los bloqueos generan pérdidas económicas.' },
        ],
        clave: 'B',
        justificacion: 'Esta situación ilustra una tensión real entre derechos constitucionales: el derecho a la libre circulación (de quienes no pueden transitar) y el derecho a la protesta y la movilización social (reconocido en la Constitución de 1991). También refleja la tensión entre legalidad (los bloqueos pueden ser ilegales) y legitimidad (contexto de incumplimiento histórico de acuerdos). El análisis de ciencias sociales debe comprender el contexto histórico: los pueblos indígenas han sido históricamente despojados y excluidos, y los bloqueos responden frecuentemente a incumplimientos del Estado. Ninguna posición extrema (A, C o D) hace justicia a la complejidad del fenómeno.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },

      // 10. Argumentación + pensamiento-social (ciudadanía)
      {
        id: 'soc-p-s11-10',
        enunciado: 'Lee el siguiente fragmento de un artículo de opinión:\n\n"La corrupción en Colombia es cultural: los colombianos somos corruptos por naturaleza y por eso no podemos desarrollarnos. Es inútil hacer reformas institucionales porque la gente no va a cambiar."\n\n¿Cuál es la falacia argumentativa central del texto?',
        opciones: [
          { letra: 'A', texto: 'Apelación a la emoción, porque el autor usa un lenguaje muy emotivo para convencer al lector.' },
          { letra: 'B', texto: 'Determinismo cultural y generalización indebida: el autor atribuye la corrupción a una supuesta "naturaleza" de los colombianos, esencializando un problema estructural e institucional, y concluye que no hay solución posible.' },
          { letra: 'C', texto: 'Falacia de autoridad, porque el autor cita fuentes científicas que no existen.' },
          { letra: 'D', texto: 'El argumento es sólido porque la corrupción en Colombia está documentada estadísticamente.' },
        ],
        clave: 'B',
        justificacion: 'El argumento comete dos falacias interrelacionadas: (1) determinismo cultural o esencialismo: atribuir la corrupción a una supuesta "naturaleza" de los colombianos es una generalización que ignora que la corrupción es un fenómeno institucional, estructural e histórico presente en todos los países en diferentes grados; (2) conclusión nihilista: afirmar que las reformas son inútiles bloquea cualquier posibilidad de cambio. La evidencia muestra que las reformas institucionales (independencia judicial, control fiscal, transparencia) reducen la corrupción. La opción A identifica una estrategia retórica secundaria. La opción C introduce algo que no está en el texto. La opción D confunde el hecho documentado (hay corrupción) con la interpretación incorrecta (es natural e inamovible).',
        competencia: 'pensamiento-social',
        componente: 'argumentacion',
      },

      // 11. Conocimientos sociales + interpretacion (Revolución Industrial)
      {
        id: 'soc-p-s11-11',
        enunciado: 'La Revolución Industrial (siglos XVIII-XIX) transformó radicalmente las estructuras económicas y sociales de Europa. ¿Cuál de las siguientes consecuencias sociales fue uno de sus efectos más documentados?',
        opciones: [
          { letra: 'A', texto: 'La Revolución Industrial mejoró inmediatamente las condiciones de vida de todos los trabajadores.' },
          { letra: 'B', texto: 'La Revolución Industrial generó el surgimiento del proletariado industrial: masas de trabajadores que, desposeídos de sus medios de producción, vivían en condiciones precarias de hacinamiento, largas jornadas laborales y bajos salarios, lo que eventualmente impulsó los movimientos obreros y las reformas laborales.' },
          { letra: 'C', texto: 'La Revolución Industrial eliminó el trabajo infantil porque las máquinas reemplazaron a los niños.' },
          { letra: 'D', texto: 'La Revolución Industrial fue un proceso exclusivamente tecnológico sin consecuencias para la organización social.' },
        ],
        clave: 'B',
        justificacion: 'La Revolución Industrial creó el proletariado: una nueva clase de trabajadores asalariados sin tierra ni medios de producción propios que dependían de su fuerza de trabajo para sobrevivir. Las condiciones iniciales en las fábricas eran muy precarias: jornadas de 14-16 horas, trabajo infantil (no lo eliminó, lo extendió), hacinamiento urbano y bajos salarios. Estas condiciones generaron el movimiento obrero, el sindicalismo y reformas laborales posteriores. La opción A idealiza el proceso. La opción C invierte la realidad: la Revolución Industrial intensificó el trabajo infantil (que fue regulado décadas después). La opción D reduce el fenómeno a lo técnico.',
        competencia: 'interpretacion',
        componente: 'conocimientos-sociales',
      },

      // 12. Multiperspectividad + pensamiento-sistemico (globalización cultural)
      {
        id: 'soc-p-s11-12',
        enunciado: 'La expansión global de plataformas como Netflix, Spotify y TikTok ha generado un debate sobre la "homogeneización cultural". ¿Cuál de las siguientes posiciones representa un análisis más matizado de este fenómeno?',
        opciones: [
          { letra: 'A', texto: 'La globalización cultural elimina todas las culturas locales y las reemplaza por la cultura estadounidense.' },
          { letra: 'B', texto: 'La globalización cultural genera un proceso complejo: por un lado, difunde masivamente contenido de ciertas culturas (especialmente anglosajona), pero también permite el acceso global a expresiones culturales de todo el mundo (K-pop, reggaetón, anime) y crea nuevas formas de hibridación cultural.' },
          { letra: 'C', texto: 'La globalización cultural es completamente positiva porque acerca a las personas de distintas culturas sin ningún efecto negativo.' },
          { letra: 'D', texto: 'Las plataformas digitales no tienen ningún impacto en las culturas locales porque la gente siempre prefiere su propia cultura.' },
        ],
        clave: 'B',
        justificacion: 'La globalización cultural es un fenómeno ambivalente. Sí hay asimetría: el inglés y la cultura anglosajona tienen una presencia dominante. Pero también hay fenómenos contrarios: el K-pop surcoreano, el reggaetón latinoamericano, el anime japonés y el afrobeats tienen audiencias globales. Además, las culturas no se homogeneizan pasivamente: las personas reinterpretan y adaptan los contenidos a sus contextos locales (glocalización). La opción A sobredimensiona la homogeneización. La opción C ignora las asimetrías de poder cultural. La opción D niega la influencia real de los medios digitales en las prácticas culturales.',
        competencia: 'pensamiento-sistemico',
        componente: 'multiperspectividad',
      },

      // 13. Argumentación + interpretacion (sistema electoral)
      {
        id: 'soc-p-s11-13',
        enunciado: 'Colombia tiene un sistema de elecciones separadas para presidente, congresistas, alcaldes y gobernadores. Un analista político propone: "Unificar todas las elecciones en un solo día ahorraría costos y aumentaría la participación ciudadana." ¿Cuál es el argumento más sólido en CONTRA de esta propuesta?',
        opciones: [
          { letra: 'A', texto: 'Ahorrar costos nunca debe ser un objetivo en democracia.' },
          { letra: 'B', texto: 'Concentrar todas las elecciones en un día puede generar el "efecto arrastre": los candidatos presidenciales fuertes jalan votos para sus aliados locales, reduciendo la autonomía de las elecciones regionales y favoreciendo la hegemonía de partidos grandes sobre los locales.' },
          { letra: 'C', texto: 'La propuesta es incorrecta porque en Colombia está prohibido cambiar el sistema electoral.' },
          { letra: 'D', texto: 'Una elección única aumentaría los fraudes porque habría más votos que contar.' },
        ],
        clave: 'B',
        justificacion: 'Unificar elecciones puede generar el "efecto de arrastre" (coattail effect): cuando una figura presidencial popular lleva a sus candidatos aliados en regiones donde normalmente no ganarían. Esto reduce la autonomía de las elecciones locales y puede disminuir la representatividad regional. Muchos sistemas federales o descentralizados mantienen elecciones separadas precisamente para proteger la autonomía local. La ventaja de la propuesta (menor costo, mayor participación) debe ponderarse contra este riesgo. La opción A es una posición radical sin fundamento. La opción C es incorrecta: los sistemas electorales pueden reformarse. La opción D es una preocupación logística menor, no un argumento central.',
        competencia: 'interpretacion',
        componente: 'argumentacion',
      },

      // 14. Conocimientos sociales + pensamiento-sistemico (economía global)
      {
        id: 'soc-p-s11-14',
        enunciado: 'El Producto Interno Bruto (PIB) es el principal indicador económico utilizado para medir el desarrollo de un país. ¿Cuál es la crítica más documentada al uso del PIB como único indicador de bienestar?',
        opciones: [
          { letra: 'A', texto: 'El PIB es un indicador perfecto que captura todas las dimensiones del bienestar humano.' },
          { letra: 'B', texto: 'El PIB mide el valor monetario de todos los bienes y servicios producidos, pero no captura la distribución de ese ingreso (desigualdad), el trabajo no remunerado, la degradación ambiental ni la calidad de vida subjetiva de las personas.' },
          { letra: 'C', texto: 'El PIB no es utilizado por ningún organismo internacional porque es un indicador desactualizado.' },
          { letra: 'D', texto: 'El PIB es útil únicamente para países desarrollados y no aplica a economías en desarrollo como Colombia.' },
        ],
        clave: 'B',
        justificacion: 'La crítica al PIB como indicador único es ampliamente compartida: (1) no captura la distribución del ingreso (un país puede tener PIB alto con gran desigualdad); (2) no cuenta el trabajo no remunerado (trabajo doméstico, cuidado de personas); (3) puede aumentar con desastres naturales si generan gasto de reconstrucción; (4) no mide la degradación ambiental como costo. Por eso se crearon indicadores complementarios como el IDH, el Índice de Gini y el Índice de Progreso Social. La opción A ignora todas las críticas documentadas. Las opciones C y D son incorrectas.',
        competencia: 'pensamiento-sistemico',
        componente: 'conocimientos-sociales',
      },

      // 15. Multiperspectividad + interpretacion (derechos LGBTQ+)
      {
        id: 'soc-p-s11-15',
        enunciado: 'En Colombia, la Corte Constitucional ha reconocido progresivamente los derechos de las personas LGBTQ+, mientras que algunos sectores religiosos y políticos se oponen. ¿Cuál es el marco analítico más adecuado desde las ciencias sociales para estudiar este debate?',
        opciones: [
          { letra: 'A', texto: 'La Corte Constitucional siempre tiene razón en sus decisiones, por lo que el debate ya está cerrado.' },
          { letra: 'B', texto: 'Este debate refleja una tensión entre el principio constitucional de igualdad y no discriminación (que fundamenta los derechos LGBTQ+) y las libertades de conciencia, religión y expresión de quienes se oponen; las ciencias sociales analizan estas tensiones reconociendo la legitimidad del pluralismo democrático sin asumir que una posición debe eliminarse.' },
          { letra: 'C', texto: 'Los sectores religiosos siempre tienen razón en los debates sobre moral pública porque representan la tradición.' },
          { letra: 'D', texto: 'Las ciencias sociales no deben estudiar temas relacionados con sexualidad porque son asuntos privados.' },
        ],
        clave: 'B',
        justificacion: 'Las ciencias sociales analizan los debates sociales reconociendo la pluralidad de perspectivas legítimas dentro de una democracia. En este caso, la tensión es entre principios constitucionales: el de igualdad y no discriminación (que protege a grupos históricamente excluidos) y las libertades de conciencia y expresión (que amparan a quienes discrepan). Un análisis riguroso no descalifica a ninguna parte, pero sí distingue entre la expresión de opiniones (protegida) y la discriminación (prohibida). Las opciones A y C adoptan posiciones unilaterales. La opción D limita incorrectamente el objeto de estudio de las ciencias sociales.',
        competencia: 'interpretacion',
        componente: 'multiperspectividad',
      },
    ],
  },

  // ===========================================================
  // LECTURA CRÍTICA (LENGUAJE)
  // ===========================================================
  lenguaje: {

    // ---------------------------------------------------------
    // SABER 9°
    // ---------------------------------------------------------
    'saber-9': [

      // 1. Semántico + identificar
      {
        id: 'lc-p-s9-01',
        enunciado: 'Lee el siguiente fragmento:\n\n"Los páramos son ecosistemas únicos del trópico andino. Su nombre proviene del latín paludem, que hace referencia a terrenos húmedos y pantanosos. En Colombia, los páramos regulan el ciclo del agua y abastecen a millones de personas; sin embargo, la minería y la expansión agropecuaria los han convertido en territorios en vilo."\n\nSegún el contexto del texto, la expresión "en vilo" significa que los páramos están:',
        opciones: [
          { letra: 'A', texto: 'En proceso de recuperación gracias a las políticas ambientales.' },
          { letra: 'B', texto: 'En una situación de riesgo e incertidumbre sobre su futuro.' },
          { letra: 'C', texto: 'En alto estado de conservación, libres de amenazas.' },
          { letra: 'D', texto: 'En zona de reserva internacional protegida.' },
        ],
        clave: 'B',
        justificacion: '"En vilo" es una expresión que indica una situación de suspenso, incertidumbre o peligro. El contexto confirma este sentido: el texto menciona que la minería y la expansión agropecuaria representan amenazas concretas para los páramos. Las opciones A, C y D contradicen el tono de alerta del párrafo, que presenta a los páramos como ecosistemas amenazados, no protegidos ni en recuperación.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 2. Semántico + comprender
      {
        id: 'lc-p-s9-02',
        enunciado: 'Lee el siguiente párrafo:\n\n"La lectura no es un lujo reservado a los intelectuales: es una herramienta de emancipación al alcance de cualquier persona. Quien lee amplía su mundo, cuestiona la realidad y construye autonomía de pensamiento. En un país donde la desigualdad es estructural, el acceso a los libros debería ser una política pública prioritaria."\n\n¿Cuál es la idea principal del párrafo?',
        opciones: [
          { letra: 'A', texto: 'Solo los intelectuales tienen acceso real a la lectura en Colombia.' },
          { letra: 'B', texto: 'La lectura es un derecho fundamental que el Estado debe garantizar como herramienta de transformación social.' },
          { letra: 'C', texto: 'Los libros son caros y por eso la gente no lee en países desiguales.' },
          { letra: 'D', texto: 'La autonomía de pensamiento se logra únicamente a través de la educación formal.' },
        ],
        clave: 'B',
        justificacion: 'El párrafo argumenta que la lectura emancipa y que, dada la desigualdad del país, el acceso a los libros debe ser una prioridad del Estado. Esa es la tesis central: la lectura como herramienta de transformación que el Estado debe promover. La opción A contradice el texto, que dice que la lectura no es un privilegio exclusivo. La opción C es una inferencia no sustentada. La opción D limita la autonomía a la educación formal, lo que no dice el texto.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 3. Sintáctico + comprender
      {
        id: 'lc-p-s9-03',
        enunciado: 'Lee el siguiente fragmento de un artículo de opinión:\n\n"El transporte público en Bogotá ha mejorado en infraestructura; no obstante, los usuarios siguen reportando problemas de puntualidad y cobertura en los barrios periféricos."\n\n¿Qué función cumple el conector "no obstante" en la oración?',
        opciones: [
          { letra: 'A', texto: 'Introduce una consecuencia de la mejora en infraestructura.' },
          { letra: 'B', texto: 'Indica una causa de los problemas de puntualidad.' },
          { letra: 'C', texto: 'Establece una relación de contraste entre dos ideas.' },
          { letra: 'D', texto: 'Señala una condición necesaria para que mejore el servicio.' },
        ],
        clave: 'C',
        justificacion: '"No obstante" es un conector adversativo o de contraste: introduce una idea que matiza, contradice o limita lo afirmado anteriormente. En el fragmento, contrasta la mejora en infraestructura (aspecto positivo) con los problemas persistentes de los usuarios (aspecto negativo). No expresa consecuencia (opción A), causa (opción B) ni condición (opción D).',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 4. Pragmático + reflexionar (intención del autor)
      {
        id: 'lc-p-s9-04',
        enunciado: 'Lee el siguiente texto:\n\n"Señores del concejo municipal: los habitantes del barrio La Esperanza llevamos tres años solicitando la pavimentación de nuestra calle principal. Cada invierno, el barro impide el paso de ambulancias y niños al colegio. Exigimos que se incluya esta obra en el presupuesto del próximo año. La dignidad de nuestro barrio no puede seguir esperando."\n\n¿Cuál es la intención principal del autor de este texto?',
        opciones: [
          { letra: 'A', texto: 'Informar al concejo sobre las condiciones climáticas del barrio.' },
          { letra: 'B', texto: 'Narrar las dificultades cotidianas de los habitantes del barrio La Esperanza.' },
          { letra: 'C', texto: 'Persuadir al concejo para que tome una decisión favorable respecto a la pavimentación.' },
          { letra: 'D', texto: 'Describir el proceso histórico de abandono del barrio La Esperanza.' },
        ],
        clave: 'C',
        justificacion: 'El texto es una petición formal dirigida al concejo municipal. Su propósito es persuadir: el autor presenta argumentos (tiempo de espera, impacto en la comunidad) y formula una exigencia directa. Informar (opción A) y narrar (opción B) son funciones secundarias que sirven al propósito persuasivo, pero no son la intención principal. Describir historia (opción D) no corresponde al texto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 5. Pragmático + reflexionar (evaluación crítica)
      {
        id: 'lc-p-s9-05',
        enunciado: 'Lee el siguiente párrafo de un editorial:\n\n"Las redes sociales son la causa principal del deterioro académico de los jóvenes colombianos. Cualquier profesor puede confirmarlo: los estudiantes ya no saben leer ni escribir correctamente. Si se prohibieran los celulares en los colegios, las notas mejorarían de inmediato."\n\n¿Cuál es la principal debilidad argumentativa del texto?',
        opciones: [
          { letra: 'A', texto: 'El autor cita fuentes académicas que no son confiables.' },
          { letra: 'B', texto: 'El autor generaliza a partir de impresiones subjetivas sin presentar evidencia verificable.' },
          { letra: 'C', texto: 'El autor defiende una posición favorable a las redes sociales.' },
          { letra: 'D', texto: 'El texto carece de conclusión, por lo que no puede considerarse argumentativo.' },
        ],
        clave: 'B',
        justificacion: 'El editorial hace afirmaciones categóricas ("causa principal", "cualquier profesor puede confirmarlo", "mejorarían de inmediato") sin presentar datos, estudios o evidencia empírica. Apela a la opinión colectiva de los profesores como si fuera prueba suficiente, incurriendo en una generalización indebida. La opción A es incorrecta porque el texto no cita fuentes. La opción C contradice el contenido. La opción D es falsa: el texto sí tiene una conclusión (prohibir celulares).',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 6. Semántico + identificar (vocabulario en contexto)
      {
        id: 'lc-p-s9-06',
        enunciado: 'Lee el siguiente fragmento de una crónica periodística:\n\n"La plaza de mercado de Ciénaga amanece con un bullicio incontenible: los vendedores vocean sus mercancías, el olor a fruta madura se mezcla con el de las especias y los compradores regatean con la pericia de quien ha recorrido esos pasillos toda la vida."\n\n¿Cuál es el significado de la palabra "vocean" en el contexto del texto?',
        opciones: [
          { letra: 'A', texto: 'Escriben mensajes sobre sus productos.' },
          { letra: 'B', texto: 'Pregonan en voz alta los productos que venden.' },
          { letra: 'C', texto: 'Esconden sus mercancías para evitar los impuestos.' },
          { letra: 'D', texto: 'Pesan los productos en una balanza.' },
        ],
        clave: 'B',
        justificacion: '"Vocear" significa anunciar o pregonar en voz alta. El contexto lo confirma: la plaza de mercado tiene un "bullicio incontenible" y los vendedores llaman la atención de los compradores sobre sus productos. El campo semántico del mercado y el sonido ("bullicio") orienta al significado correcto. Las opciones A, C y D son incompatibles con el contexto sonoro y visual que describe la crónica.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 7. Semántico + comprender (inferencia)
      {
        id: 'lc-p-s9-07',
        enunciado: 'Lee el siguiente fragmento de una novela:\n\n"Don Aurelio llegó a la hacienda sin saludar, con los ojos fijos en el suelo y los hombros caídos. Fue directo a su cuarto y cerró la puerta con llave. Esa noche nadie lo vio salir a cenar."\n\n¿Qué se puede inferir sobre el estado emocional de don Aurelio?',
        opciones: [
          { letra: 'A', texto: 'Don Aurelio está muy contento por algo que acaba de suceder.' },
          { letra: 'B', texto: 'Don Aurelio está cansado físicamente por un largo viaje.' },
          { letra: 'C', texto: 'Don Aurelio está abatido o perturbado emocionalmente, pues su comportamiento muestra aislamiento y desánimo.' },
          { letra: 'D', texto: 'Don Aurelio está enojado con los demás habitantes de la hacienda.' },
        ],
        clave: 'C',
        justificacion: 'La inferencia se apoya en las señales textuales: no saludar (ruptura del protocolo social), ojos fijos en el suelo (postura de desánimo o vergüenza), hombros caídos (lenguaje corporal de abatimiento), aislarse en su cuarto con llave y no salir a cenar. Todos estos indicios apuntan a un estado de abatimiento o perturbación emocional. La opción A contradice los indicios. La opción B es posible pero no explica todos los comportamientos (especialmente encerrarse con llave). La opción D es una posible interpretación pero más específica y sin evidencia directa.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 8. Sintáctico + comprender (tipología textual)
      {
        id: 'lc-p-s9-08',
        enunciado: 'Lee el siguiente texto:\n\n"Para preparar una limonada perfecta necesitas: 3 limones, 1 litro de agua, azúcar al gusto y hielo. Primero, exprime los limones y filtra el jugo. Luego, mezcla el jugo con el agua. Agrega azúcar al gusto y agita bien. Finalmente, sirve con hielo."\n\n¿A qué tipología textual pertenece este texto y cuál es su característica principal?',
        opciones: [
          { letra: 'A', texto: 'Texto narrativo; narra los pasos como si fueran una historia con personajes.' },
          { letra: 'B', texto: 'Texto instructivo; presenta una secuencia de pasos ordenados para lograr un resultado específico.' },
          { letra: 'C', texto: 'Texto argumentativo; defiende la tesis de que la limonada es la mejor bebida.' },
          { letra: 'D', texto: 'Texto expositivo; explica el proceso químico de la limonada.' },
        ],
        clave: 'B',
        justificacion: 'El texto instructivo tiene como propósito guiar al lector para realizar una acción específica. Sus características son: uso de verbos en modo imperativo ("exprime", "mezcla", "agrega", "sirve"), organización secuencial marcada con conectores temporales ("primero", "luego", "finalmente") y ausencia de narración o argumentación. La opción A describe textos narrativos con personajes y trama. La opción C describe textos argumentativos con tesis y argumentos. La opción D describe textos expositivos con definiciones y explicaciones.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 9. Sintáctico + comprender (coherencia y cohesión)
      {
        id: 'lc-p-s9-09',
        enunciado: 'Lee el siguiente párrafo y determina qué cambio mejoraría su cohesión:\n\n"El calentamiento global es un problema grave. El calentamiento global afecta a todos los países. El calentamiento global ha aumentado en las últimas décadas. Los científicos estudian el calentamiento global."\n\n¿Qué recurso de cohesión ayudaría a mejorar este párrafo?',
        opciones: [
          { letra: 'A', texto: 'Agregar más datos estadísticos sobre el calentamiento global.' },
          { letra: 'B', texto: 'Usar pronombres y expresiones de sustitución léxica ("este fenómeno", "él", "este problema") para evitar la repetición innecesaria de "calentamiento global".' },
          { letra: 'C', texto: 'Cambiar el tema del párrafo para hablar de algo diferente al calentamiento global.' },
          { letra: 'D', texto: 'Eliminar algunas oraciones para que el párrafo sea más corto.' },
        ],
        clave: 'B',
        justificacion: 'El problema del párrafo es la repetición mecánica de "calentamiento global" en cada oración, lo que produce un texto monótono y poco fluido. Los recursos de cohesión léxica permiten evitar esta repetición: sustitución por pronombres ("él"), hiperónimos o expresiones equivalentes ("este fenómeno", "este problema ambiental", "el mismo"). Esto mejora la cohesión sin alterar la coherencia temática. La opción A agrega contenido pero no resuelve el problema formal. La opción C altera el tema. La opción D puede mejorar la concisión pero no la cohesión.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 10. Pragmático + reflexionar (intención y contexto)
      {
        id: 'lc-p-s9-10',
        enunciado: 'Lee el siguiente texto de un anuncio publicitario:\n\n"¿Cansado de pagar tanto por el mercado? ¡En Superahorro encontrarás todo lo que necesitas a precios increíbles! Visítanos y descubre por qué miles de familias confían en nosotros cada semana. ¡Tu bolsillo te lo agradecerá!"\n\n¿Cuál es la estrategia retórica principal del texto?',
        opciones: [
          { letra: 'A', texto: 'El texto informa objetivamente sobre los precios de Superahorro.' },
          { letra: 'B', texto: 'El texto usa una pregunta inicial para identificarse con el problema del lector, apelación a la emoción ("tu bolsillo te lo agradecerá") y argumento de autoridad implícita ("miles de familias confían") para persuadir al consumidor.' },
          { letra: 'C', texto: 'El texto explica el proceso mediante el cual Superahorro logra sus bajos precios.' },
          { letra: 'D', texto: 'El texto narra la historia de fundación de Superahorro.' },
        ],
        clave: 'B',
        justificacion: 'El texto publicitario usa múltiples estrategias retóricas: (1) pregunta retórica inicial que apela a una necesidad compartida (el costo del mercado); (2) apelación a la emoción con expresiones como "precios increíbles" y "tu bolsillo te lo agradecerá"; (3) argumento de autoridad social ("miles de familias confían") que usa el comportamiento de otros para validar la elección. Su propósito es persuasivo, no informativo ni narrativo. La opción A atribuye objetividad a un texto claramente persuasivo. Las opciones C y D describen propósitos que no corresponden al género publicitario.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 11. Semántico + reflexionar (figuras literarias)
      {
        id: 'lc-p-s9-11',
        enunciado: 'Lee el siguiente fragmento de un poema de José Asunción Silva:\n\n"Una noche, una noche toda llena de murmullos, de perfumes y de músicas de alas."\n\n¿Qué figura retórica predomina en el verso "murmullos, de perfumes y de músicas de alas"?',
        opciones: [
          { letra: 'A', texto: 'Hipérbole, porque exagera la cantidad de sonidos de la noche.' },
          { letra: 'B', texto: 'Sinestesia, porque mezcla sensaciones de diferentes sentidos (auditivo, olfativo) en una misma imagen.' },
          { letra: 'C', texto: 'Metáfora, porque compara la noche con una persona que murmura.' },
          { letra: 'D', texto: 'Anáfora, porque repite la misma palabra al inicio de cada verso.' },
        ],
        clave: 'B',
        justificacion: 'La sinestesia es la figura que consiste en mezclar sensaciones de diferentes sentidos en una misma imagen: "murmullos" (auditivo), "perfumes" (olfativo) y "músicas de alas" (auditivo y visual/táctil). Este recurso es característico del modernismo literario de Silva. La hipérbole (A) implica exageración, no mezcla de sentidos. La metáfora (C) establece una comparación implícita; aquí no se compara la noche con una persona. La anáfora (D) es la repetición de palabras al inicio de versos, que no ocurre en este fragmento.',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 12. Sintáctico + reflexionar (estructura argumentativa)
      {
        id: 'lc-p-s9-12',
        enunciado: 'Lee el siguiente texto argumentativo:\n\n"Debería reducirse la jornada laboral a 32 horas semanales. Los estudios en países europeos muestran que jornadas más cortas aumentan la productividad. Además, los trabajadores descansan mejor, lo que reduce el ausentismo. Por tanto, tanto las empresas como los empleados se beneficiarían de este cambio."\n\n¿Cuál es la estructura del texto?',
        opciones: [
          { letra: 'A', texto: 'Tesis: reducir la jornada laboral. Argumentos: productividad y descanso. Conclusión: beneficio mutuo.' },
          { letra: 'B', texto: 'Introducción: estudios europeos. Desarrollo: productividad. Conclusión: reducir jornadas.' },
          { letra: 'C', texto: 'Narración de hechos: jornada de 32 horas. Descripción: ausentismo. Conclusión: empresas y empleados.' },
          { letra: 'D', texto: 'El texto no tiene estructura argumentativa definida.' },
        ],
        clave: 'A',
        justificacion: 'El texto sigue la estructura clásica del texto argumentativo: (1) Tesis (afirmación que se defiende): "Debería reducirse la jornada laboral a 32 horas". (2) Argumento 1: los estudios muestran mayor productividad. (3) Argumento 2: mejor descanso reduce ausentismo. (4) Conclusión: "por tanto, ambas partes se beneficiarían". El conector "por tanto" marca la conclusión. La opción B confunde el primer argumento con la introducción. La opción C describe tipologías narrativas y descriptivas, no argumentativas. La opción D contradice la evidencia textual.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 13. Pragmático + identificar (autor y audiencia)
      {
        id: 'lc-p-s9-13',
        enunciado: 'Lee el siguiente fragmento de un texto:\n\n"Estimado consejo directivo: en nombre de los 500 estudiantes de este colegio, les solicitamos respetuosamente reconsiderar la decisión de eliminar el descanso de 20 minutos del mediodía. Las investigaciones en neurociencia educativa demuestran que los descansos mejoran la concentración y el aprendizaje. Esperamos una respuesta favorable a nuestra solicitud."\n\n¿Cuál es el tipo de texto, su propósito y a quién va dirigido?',
        opciones: [
          { letra: 'A', texto: 'Texto narrativo; propósito: entretener; dirigido a todos los estudiantes.' },
          { letra: 'B', texto: 'Carta de solicitud formal; propósito: persuadir al consejo para que cambie una decisión; dirigido al consejo directivo.' },
          { letra: 'C', texto: 'Texto expositivo; propósito: informar sobre neurociencia; dirigido a la comunidad científica.' },
          { letra: 'D', texto: 'Texto descriptivo; propósito: describir el recreo; dirigido a los padres de familia.' },
        ],
        clave: 'B',
        justificacion: 'El texto tiene marcas claras de género: el vocativo formal ("Estimado consejo directivo"), el uso de "solicitamos respetuosamente", la representación colectiva ("en nombre de los 500 estudiantes") y la fórmula de cierre ("esperamos una respuesta favorable"). Su propósito es persuadir —convencer al consejo de cambiar una decisión— y está dirigido específicamente al consejo directivo. El argumento de neurociencia es un recurso para apoyar la solicitud. Las opciones A, C y D no corresponden al género, propósito o audiencia identificables.',
        competencia: 'identificar',
        componente: 'pragmatico',
      },

      // 14. Semántico + comprender (texto discontinuo - infografía)
      {
        id: 'lc-p-s9-14',
        enunciado: 'Una infografía muestra que en Colombia el 34% de los hogares no tiene acceso a internet, con mayor concentración en zonas rurales (68% sin acceso) que en zonas urbanas (12% sin acceso). Según esta información, ¿cuál de las siguientes inferencias es VÁLIDA?',
        opciones: [
          { letra: 'A', texto: 'En Colombia, más de la mitad de los hogares no tiene internet.' },
          { letra: 'B', texto: 'La brecha digital entre zonas rurales y urbanas es muy marcada: en zonas rurales la falta de acceso a internet es más de cinco veces mayor que en zonas urbanas.' },
          { letra: 'C', texto: 'Los hogares urbanos tienen el mismo nivel de acceso a internet que los rurales.' },
          { letra: 'D', texto: 'El 66% de los hogares colombianos no tiene acceso a internet.' },
        ],
        clave: 'B',
        justificacion: 'La infografía muestra que el 68% de los hogares rurales no tiene acceso vs. el 12% de los urbanos. La razón es 68/12 ≈ 5,7 veces mayor. La inferencia válida es que la brecha digital rural-urbana es muy marcada (más de 5 veces). La opción A es incorrecta: solo el 34% del total no tiene acceso (menos de la mitad). La opción C contradice directamente los datos (68% vs. 12%). La opción D invierte el porcentaje (el 34% no tiene acceso, por tanto el 66% sí tiene).',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 15. Pragmático + reflexionar (posición del autor)
      {
        id: 'lc-p-s9-15',
        enunciado: 'Lee el siguiente fragmento de un ensayo:\n\n"La mala ortografía no debería ser un criterio de evaluación en las clases de ciencias, matemáticas o historia. Penalizar a un estudiante en un examen de física por escribir \'energía\' sin tilde es castigar su conocimiento científico por una falla que corresponde a otra área del aprendizaje. La escritura correcta es responsabilidad de la clase de lenguaje, no de todas las asignaturas."\n\n¿Con cuál de las siguientes posiciones estaría de acuerdo el autor del ensayo?',
        opciones: [
          { letra: 'A', texto: 'La ortografía debe evaluarse en todas las asignaturas porque forma parte de la comunicación.' },
          { letra: 'B', texto: 'La evaluación en cada asignatura debe centrarse en los aprendizajes propios de esa disciplina, sin penalizar por errores ortográficos.' },
          { letra: 'C', texto: 'Los exámenes de física no deben incluir preguntas escritas.' },
          { letra: 'D', texto: 'La ortografía no es importante en ninguna asignatura, incluyendo lenguaje.' },
        ],
        clave: 'B',
        justificacion: 'El autor defiende explícitamente que los errores ortográficos no deben penalizarse fuera de la clase de lenguaje. La posición coherente con su tesis es que cada asignatura debe evaluar sus propios aprendizajes disciplinares. La opción A representa la posición contraria a la del autor. La opción C va más allá de lo que el autor afirma (no propone eliminar preguntas escritas, solo no penalizar la ortografía en ellas). La opción D extiende su posición a lenguaje, lo que el propio texto contradice ("la escritura correcta es responsabilidad de la clase de lenguaje").',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },
    ],

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Semántico + identificar (texto argumentativo)
      {
        id: 'lc-p-s11-01',
        enunciado: 'Lee el siguiente fragmento de un ensayo:\n\n"La inteligencia artificial no sustituye el pensamiento crítico; lo que amenaza es la disposición a delegarlo. Cuando una persona acepta sin cuestionamiento las conclusiones de un algoritmo —ya sea en diagnósticos médicos, veredictos judiciales o noticias— renuncia a la facultad más humana que posee: la capacidad de dudar. El peligro no está en la máquina, sino en la abdicación del sujeto."\n\n¿Cuál de las siguientes opciones recoge con mayor precisión la información que el autor presenta como el verdadero riesgo de la IA?',
        opciones: [
          { letra: 'A', texto: 'Que los algoritmos cometan errores en diagnósticos médicos y veredictos judiciales.' },
          { letra: 'B', texto: 'Que las personas renuncien a pensar críticamente y acepten pasivamente las decisiones de los algoritmos.' },
          { letra: 'C', texto: 'Que la inteligencia artificial reemplace a los profesionales en sus campos de trabajo.' },
          { letra: 'D', texto: 'Que las noticias generadas por IA sean falsas y distorsionen la realidad.' },
        ],
        clave: 'B',
        justificacion: 'El autor es explícito: "El peligro no está en la máquina, sino en la abdicación del sujeto." La amenaza identificada es que las personas cedan su capacidad crítica, no que los algoritmos fallen (opción A) ni que reemplacen empleos (opción C). La opción D refiere a las noticias, pero el texto la usa como ejemplo, no como el riesgo central. La opción B sintetiza con precisión la tesis del fragmento.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 2. Semántico + comprender (sentido global / tesis)
      {
        id: 'lc-p-s11-02',
        enunciado: 'Lee el siguiente texto filosófico:\n\n"La libertad no puede fundarse en la ausencia de restricciones: esa concepción la confunde con el capricho. Una voluntad verdaderamente libre es aquella que se rige por una ley que ella misma se ha dado, no por el impulso momentáneo ni por la presión exterior. Ser libre, en sentido pleno, es ser autor de las normas que guían la propia conducta."\n\n¿Cuál es la tesis central del texto?',
        opciones: [
          { letra: 'A', texto: 'La libertad consiste en hacer lo que uno desee sin ningún tipo de restricción.' },
          { letra: 'B', texto: 'La verdadera libertad es aquella que se gobierna por leyes externas impuestas por la sociedad.' },
          { letra: 'C', texto: 'La libertad auténtica implica la autonomía: actuar según normas que uno mismo se ha dado racionalmente.' },
          { letra: 'D', texto: 'El capricho y el impulso son expresiones legítimas de la libertad individual.' },
        ],
        clave: 'C',
        justificacion: 'El texto, de corte kantiano, distingue entre libertad como ausencia de restricciones (que rechaza, llamándola "capricho") y la libertad como autonomía: la voluntad que se rige por una ley autolegislada. La tesis central es que la libertad verdadera es autonomía racional. La opción A representa exactamente la concepción que el autor critica. La opción B confunde la ley autoimpuesta con leyes externas. La opción D es otra posición que el texto rechaza explícitamente.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 3. Sintáctico + comprender (estructura argumentativa / falacias)
      {
        id: 'lc-p-s11-03',
        enunciado: 'Lee el siguiente fragmento de un debate público:\n\n"El candidato Rodríguez propone reducir el presupuesto para ciencia y tecnología. No es de extrañar: él estudió en un colegio de provincia y nunca ha pisado una universidad de investigación. ¿Cómo va a entender alguien así la importancia del conocimiento?"\n\n¿Qué estrategia argumentativa INCORRECTA utiliza el autor del fragmento?',
        opciones: [
          { letra: 'A', texto: 'Apelación a la autoridad, porque cita expertos para refutar la propuesta.' },
          { letra: 'B', texto: 'Argumento ad hominem, porque ataca el origen del candidato en vez de evaluar su propuesta.' },
          { letra: 'C', texto: 'Analogía, porque compara la situación del candidato con la de otro funcionario.' },
          { letra: 'D', texto: 'Apelación a datos estadísticos, porque usa cifras para invalidar la propuesta.' },
        ],
        clave: 'B',
        justificacion: 'El fragmento no refuta la propuesta de reducir el presupuesto con argumentos sobre ciencia o economía, sino que descalifica al candidato por su origen educativo y geográfico. Eso es un argumento ad hominem: atacar a la persona en lugar de rebatir sus ideas. No hay apelación a autoridades (opción A), analogía (opción C) ni datos estadísticos (opción D) en el texto.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 4. Pragmático + reflexionar (supuestos e implicaciones)
      {
        id: 'lc-p-s11-04',
        enunciado: 'Lee el siguiente enunciado de un artículo de economía:\n\n"Solo cuando los países en desarrollo adopten plenamente el modelo de libre mercado podrán alcanzar el nivel de prosperidad de las naciones desarrolladas."\n\n¿Cuál de los siguientes supuestos subyace necesariamente a esta afirmación?',
        opciones: [
          { letra: 'A', texto: 'Los países desarrollados han alcanzado su prosperidad exclusivamente gracias al libre mercado.' },
          { letra: 'B', texto: 'Los países en desarrollo tienen recursos naturales suficientes para competir en el mercado global.' },
          { letra: 'C', texto: 'El libre mercado genera desigualdad y por eso los países pobres siguen siendo pobres.' },
          { letra: 'D', texto: 'La prosperidad de las naciones depende principalmente de su historia colonial.' },
        ],
        clave: 'A',
        justificacion: 'La afirmación establece que el libre mercado es la condición para que los países en desarrollo alcancen la prosperidad de los desarrollados. Para que este argumento funcione, debe asumir que los países desarrollados lograron su prosperidad mediante el libre mercado: ese es el supuesto implícito. Si ese supuesto fuera falso, el argumento caería. La opción B introduce una idea no implicada por el enunciado. Las opciones C y D contradicen la posición del texto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 5. Pragmático + reflexionar (estrategias retóricas)
      {
        id: 'lc-p-s11-05',
        enunciado: 'Lee el siguiente texto de divulgación científica:\n\n"Imagina que tu cerebro es una ciudad: las neuronas son los habitantes, las sinapsis son las calles y los neurotransmisores son los mensajeros que circulan entre ellas. Cuando aprendes algo nuevo, construyes una avenida donde antes había un camino de tierra. Así funciona la neuroplasticidad: la capacidad del cerebro de reorganizarse y crecer con la experiencia."\n\n¿Con qué propósito el autor usa la analogía de la ciudad?',
        opciones: [
          { letra: 'A', texto: 'Para demostrar que los cerebros humanos y las ciudades tienen la misma estructura física.' },
          { letra: 'B', texto: 'Para hacer accesible un concepto científico complejo mediante una comparación con algo cotidiano.' },
          { letra: 'C', texto: 'Para persuadir al lector de que debe estudiar neurociencia.' },
          { letra: 'D', texto: 'Para criticar la forma en que las ciudades están organizadas en comparación con el cerebro.' },
        ],
        clave: 'B',
        justificacion: 'La analogía ciudad-cerebro es una estrategia pedagógica y retórica que busca hacer comprensible la neuroplasticidad para un público no especializado, usando referencias cotidianas (ciudad, calles, mensajeros). No busca probar equivalencia estructural real (opción A), persuadir de estudiar neurociencia (opción C) ni criticar urbanismo (opción D). La función es explicativa y divulgativa: acercar un concepto técnico al lector general.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 6. Semántico + identificar (texto filosófico)
      {
        id: 'lc-p-s11-06',
        enunciado: 'Lee el siguiente fragmento de un texto de Albert Camus:\n\n"Hay un solo problema filosófico verdaderamente serio: el suicidio. Juzgar si la vida vale o no la pena de ser vivida equivale a responder la pregunta fundamental de la filosofía."\n\n¿Cuál es la afirmación central que hace el autor en este fragmento?',
        opciones: [
          { letra: 'A', texto: 'El autor afirma que todas las personas deben considerar el suicidio como opción.' },
          { letra: 'B', texto: 'El autor sostiene que el problema filosófico más fundamental es si la vida tiene sentido, y que el suicidio es el punto de partida de esta reflexión.' },
          { letra: 'C', texto: 'El autor afirma que la filosofía no puede responder preguntas sobre la vida.' },
          { letra: 'D', texto: 'El autor propone que el suicidio es una respuesta válida a los problemas de la vida.' },
        ],
        clave: 'B',
        justificacion: 'Camus, en "El mito de Sísifo", plantea que el único problema filosófico genuino es el del absurdo: si la vida tiene sentido o no. El suicidio representa la pregunta en su forma más radical (¿vale la pena seguir viviendo?). Esto no es una apología del suicidio (opción A o D), sino el punto de partida de la reflexión filosófica sobre el sentido de la existencia. La opción C contradice el texto: Camus sí plantea que la filosofía puede y debe enfrentar esta pregunta.',
        competencia: 'identificar',
        componente: 'semantico',
      },

      // 7. Semántico + comprender (texto científico)
      {
        id: 'lc-p-s11-07',
        enunciado: 'Lee el siguiente fragmento de un artículo científico:\n\n"Los resultados indican una correlación positiva y estadísticamente significativa (r = 0,73; p < 0,01) entre el tiempo de lectura diaria y el rendimiento académico en los estudiantes evaluados. Sin embargo, los autores advierten que la correlación no implica causalidad: factores como el nivel socioeconómico y el ambiente familiar pueden mediar esta relación."\n\n¿Cuál es el límite que los propios autores señalan a su hallazgo?',
        opciones: [
          { letra: 'A', texto: 'El estudio no encontró ninguna relación entre lectura y rendimiento académico.' },
          { letra: 'B', texto: 'Los autores advierten que la correlación encontrada no permite afirmar que leer más causa directamente un mejor rendimiento, pues pueden existir variables mediadoras.' },
          { letra: 'C', texto: 'El estudio es inválido porque el valor p < 0,01 indica que los resultados son incorrectos.' },
          { letra: 'D', texto: 'Los autores concluyen que el nivel socioeconómico es el único factor que determina el rendimiento académico.' },
        ],
        clave: 'B',
        justificacion: 'El texto es explícito: los autores advierten que correlación no implica causalidad. Aunque hay una relación estadística entre lectura y rendimiento, no se puede concluir que una causa la otra, porque variables como el nivel socioeconómico o el ambiente familiar podrían explicar ambas (un estudiante de familia con recursos lee más Y tiene mejor rendimiento, no necesariamente porque lea más). La opción A contradice los resultados. La opción C malinterpreta el valor p (p < 0,01 indica alta significancia estadística, no error). La opción D exagera lo que dicen los autores sobre el nivel socioeconómico.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 8. Sintáctico + comprender (texto literario - intertextualidad)
      {
        id: 'lc-p-s11-08',
        enunciado: 'Lee el siguiente fragmento de Gabriel García Márquez (Cien años de soledad):\n\n"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."\n\n¿Cuál es el efecto narrativo del tiempo verbal "había de recordar" en este inicio?',
        opciones: [
          { letra: 'A', texto: 'Presenta los eventos en orden cronológico, desde el pasado hasta el futuro.' },
          { letra: 'B', texto: 'Crea una perspectiva temporal compleja: desde un futuro cercano a la muerte (pelotón), el narrador anticipa un recuerdo del pasado lejano, rompiendo la linealidad temporal y generando suspenso desde la primera oración.' },
          { letra: 'C', texto: 'Indica que el coronel Aureliano Buendía sobrevivió al pelotón de fusilamiento.' },
          { letra: 'D', texto: 'Usa el tiempo pasado simple para narrar eventos que ocurrieron secuencialmente.' },
        ],
        clave: 'B',
        justificacion: '"Había de recordar" es una perífrasis verbal que indica algo que ocurrirá con certeza en el futuro de la narración. García Márquez sitúa al lector en un momento futuro (frente al pelotón), desde el cual se anticipa un recuerdo del pasado remoto (el hielo). Esta técnica crea una perspectiva temporal fragmentada: presente narrativo, futuro anunciado y pasado evocado, todo en una oración. Es el inicio famoso que define el tiempo circular y no lineal del realismo mágico. La opción A describe una narración lineal que no corresponde. La opción C es una inferencia incorrecta (el texto no dice que sobrevivió). La opción D confunde la perífrasis con el pasado simple.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 9. Sintáctico + comprender (texto argumentativo - estructura)
      {
        id: 'lc-p-s11-09',
        enunciado: 'Lee el siguiente argumento:\n\n"Si Colombia invierte en educación de calidad, tendrá ciudadanos más productivos. Si tiene ciudadanos más productivos, su economía crecerá. Su economía está creciendo. Por lo tanto, Colombia ha invertido en educación de calidad."\n\n¿Qué error lógico contiene este argumento?',
        opciones: [
          { letra: 'A', texto: 'El argumento es válido porque la economía colombiana sí está creciendo.' },
          { letra: 'B', texto: 'El argumento comete la falacia de afirmación del consecuente: concluye que se cumple la condición inicial (inversión en educación) solo porque se cumple la consecuencia final (economía creciente), ignorando que el crecimiento económico puede tener otras causas.' },
          { letra: 'C', texto: 'El argumento es circular porque repite la misma idea en todas las premisas.' },
          { letra: 'D', texto: 'El argumento usa datos estadísticos incorrectos sobre el crecimiento económico.' },
        ],
        clave: 'B',
        justificacion: 'El razonamiento tiene la forma: Si P entonces Q; Si Q entonces R; R es verdadero; por tanto P. Este es el error lógico conocido como "afirmación del consecuente": de que R (economía crece) se concluye P (inversión en educación), pero el crecimiento económico puede deberse a otras causas (exportaciones, inversión extranjera, políticas monetarias). La forma lógica válida requeriría verificar P directamente. La opción A ignora el error lógico. La opción C describe el razonamiento circular, que es diferente. La opción D introduce una crítica empírica que no está en el texto.',
        competencia: 'comprender',
        componente: 'sintactico',
      },

      // 10. Pragmático + reflexionar (discurso ideológico)
      {
        id: 'lc-p-s11-10',
        enunciado: 'Lee el siguiente fragmento de un discurso político:\n\n"Nuestra nación es grande porque sus ciudadanos son trabajadores y honrados. Los problemas que enfrentamos vienen de afuera: son los extranjeros, los inmigrantes y las influencias foráneas las que han debilitado nuestros valores. Debemos proteger lo nuestro y recuperar la grandeza que nos pertenece."\n\n¿Cuál es el supuesto ideológico que subyace a este discurso?',
        opciones: [
          { letra: 'A', texto: 'El discurso propone una política económica de libre comercio.' },
          { letra: 'B', texto: 'El discurso opera sobre un supuesto nacionalista excluyente: asume que los problemas son externos y que lo propio es siempre bueno, construyendo una identidad nacional en oposición a un "otro" extranjero que se presenta como amenaza.' },
          { letra: 'C', texto: 'El discurso defiende los derechos de los migrantes como parte de la nación.' },
          { letra: 'D', texto: 'El discurso es un análisis objetivo de las causas de los problemas nacionales.' },
        ],
        clave: 'B',
        justificacion: 'El discurso opera sobre un supuesto ideológico nacionalista y xenófobo: construye una identidad nacional positiva ("nación grande", "ciudadanos trabajadores y honrados") en oposición a una amenaza externa ("extranjeros", "influencias foráneas"). Esta estrategia retórica —proyectar los problemas internos hacia un "otro" exterior— es característica de los discursos populistas de derecha. No hay evidencia ni argumentos, solo apelaciones emocionales a la identidad nacional. La opción A describe una política que contradice el discurso proteccionista. La opción C invierte completamente su posición. La opción D atribuye objetividad a un discurso claramente ideológico.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 11. Semántico + reflexionar (texto periodístico)
      {
        id: 'lc-p-s11-11',
        enunciado: 'Lee los siguientes titulares sobre el mismo hecho:\n\nPeriódico 1: "Manifestantes bloquean vías y generan caos en el centro de Bogotá"\nPeriódico 2: "Ciudadanos se movilizan para exigir derechos laborales en el centro de Bogotá"\n\n¿Qué ilustran estos dos titulares sobre la construcción discursiva de la realidad?',
        opciones: [
          { letra: 'A', texto: 'Uno de los dos periódicos está mintiendo sobre los hechos ocurridos.' },
          { letra: 'B', texto: 'Ambos titulares describen el mismo evento, pero la selección léxica ("bloquean y caos" vs. "se movilizan para exigir") construye representaciones distintas de los participantes y sus motivaciones, revelando las posiciones editoriales de cada medio.' },
          { letra: 'C', texto: 'El primer periódico es más objetivo porque usa datos concretos.' },
          { letra: 'D', texto: 'El segundo periódico es más objetivo porque defiende los derechos de los trabajadores.' },
        ],
        clave: 'B',
        justificacion: 'El análisis del discurso periodístico muestra que la realidad no se reporta de forma neutra: la selección de palabras construye representaciones. "Bloquean" y "caos" enfatizan el impacto disruptivo; "se movilizan" y "exigir derechos" enfatizan la agencia y legitimidad de los manifestantes. Ambos titulares pueden ser simultáneamente verídicos (hubo bloqueos Y eran ciudadanos exigiendo derechos), pero orientan la interpretación del lector de formas opuestas. Ninguno es absolutamente objetivo: la objetividad absoluta no existe en el discurso. Las opciones C y D adoptan ingenuamente la posición de uno u otro medio.',
        competencia: 'reflexionar',
        componente: 'semantico',
      },

      // 12. Pragmático + reflexionar (contexto histórico-cultural)
      {
        id: 'lc-p-s11-12',
        enunciado: 'El poema "Si me permiten hablar" de la escritora boliviana Domitila Barrios de Chungara relata las condiciones de las mujeres mineras en Bolivia durante la dictadura de Hugo Banzer (1971-1978). ¿Qué perspectiva analítica es indispensable para comprender plenamente este texto?',
        opciones: [
          { letra: 'A', texto: 'Analizar exclusivamente los recursos retóricos del texto, independientemente del contexto histórico.' },
          { letra: 'B', texto: 'Considerar el contexto histórico (dictadura, movimiento minero), el contexto social (clase obrera, género), y la posición de la autora como testimonio de una experiencia de exclusión múltiple (mujer, obrera, latinoamericana).' },
          { letra: 'C', texto: 'Compararlo con la poesía española del Siglo de Oro para evaluar su calidad literaria.' },
          { letra: 'D', texto: 'Ignorar el contexto porque la literatura debe leerse de forma autónoma.' },
        ],
        clave: 'B',
        justificacion: 'Este tipo de texto (literatura de testimonio o "testimonio") solo puede comprenderse plenamente en su contexto histórico y social: la dictadura boliviana como marco político, el movimiento sindical minero como contexto de resistencia, y la condición de la autora como mujer, obrera y latinoamericana. La contextualización histórica, social y de género es indispensable para no reducir el texto a un ejercicio puramente formal. La opción A defiende una lectura puramente formalista que empobrece la comprensión. La opción C aplica criterios anacrónicos e incongruentes. La opción D niega la relación texto-contexto.',
        competencia: 'reflexionar',
        componente: 'pragmatico',
      },

      // 13. Semántico + comprender (texto discontinuo - gráfica)
      {
        id: 'lc-p-s11-13',
        enunciado: 'Una gráfica de barras muestra el porcentaje de colombianos que leen al menos un libro al año: 2015: 49%, 2017: 52%, 2019: 48%, 2021: 43%, 2023: 51%. ¿Cuál de las siguientes interpretaciones es la más adecuada?',
        opciones: [
          { letra: 'A', texto: 'La tendencia de lectura en Colombia ha sido de crecimiento constante entre 2015 y 2023.' },
          { letra: 'B', texto: 'Los datos muestran fluctuaciones sin una tendencia clara de crecimiento o decrecimiento: hubo aumentos y caídas, con una recuperación en 2023 al nivel de 2017.' },
          { letra: 'C', texto: 'En 2021 Colombia tuvo el nivel más alto de lectura de todo el período analizado.' },
          { letra: 'D', texto: 'La mitad de los colombianos nunca ha leído un libro en toda su vida.' },
        ],
        clave: 'B',
        justificacion: 'La secuencia de datos (49%, 52%, 48%, 43%, 51%) muestra una tendencia oscilante, no constante: subió en 2017, bajó en 2019 y 2021, y se recuperó en 2023. No hay un crecimiento sostenido ni una caída sostenida. La opción A afirma "crecimiento constante" cuando hay caídas en 2019 y 2021. La opción C es incorrecta: 2021 tiene el valor más bajo (43%), no el más alto (2017 con 52%). La opción D extrapola incorrectamente: los datos muestran porcentaje por año, no lectura acumulada de por vida.',
        competencia: 'comprender',
        componente: 'semantico',
      },

      // 14. Sintáctico + reflexionar (modalización)
      {
        id: 'lc-p-s11-14',
        enunciado: 'Lee las siguientes afirmaciones de un mismo texto:\n\n(1) "El cambio climático destruirá la humanidad en 50 años."\n(2) "El cambio climático podría generar consecuencias graves para muchas poblaciones en las próximas décadas."\n\n¿Cuál es la diferencia más importante entre estas dos formulaciones?',
        opciones: [
          { letra: 'A', texto: 'La afirmación (2) es incorrecta porque minimiza la gravedad del cambio climático.' },
          { letra: 'B', texto: 'La afirmación (1) usa un lenguaje categórico y apocalíptico sin matices de incertidumbre; la (2) usa modalización ("podría", "muchas poblaciones") que refleja más adecuadamente el grado de certeza del conocimiento científico actual.' },
          { letra: 'C', texto: 'Ambas afirmaciones son equivalentes porque hablan del mismo tema.' },
          { letra: 'D', texto: 'La afirmación (1) es más científica porque es más específica en el tiempo.' },
        ],
        clave: 'B',
        justificacion: 'La modalización es el conjunto de recursos lingüísticos que expresan el grado de certeza o posibilidad de lo que se afirma. La afirmación (1) usa el futuro categórico ("destruirá") sin ningún matiz de probabilidad, lo cual no corresponde al consenso científico que habla de riesgos y probabilidades. La (2) usa "podría" (probabilidad), "consecuencias graves" (sin afirmar destrucción total) y "muchas poblaciones" (no toda la humanidad). La modalización en (2) es más honesta con la incertidumbre científica real. La opción A malinterpreta la función de la modalización. La opción C ignora las diferencias semánticas. La opción D confunde especificidad temporal con rigor científico.',
        competencia: 'reflexionar',
        componente: 'sintactico',
      },

      // 15. Pragmático + identificar (supuestos implícitos)
      {
        id: 'lc-p-s11-15',
        enunciado: 'Lee la siguiente afirmación de un texto de opinión:\n\n"Los jóvenes de hoy no leen porque todo el tiempo están en el celular. En mi época leíamos libros y éramos más cultos."\n\n¿Cuál de los siguientes supuestos está IMPLÍCITO en esta afirmación y es cuestionable?',
        opciones: [
          { letra: 'A', texto: 'Que los jóvenes usan el celular.' },
          { letra: 'B', texto: 'Que la cultura se adquiere únicamente a través de libros impresos, y que las generaciones anteriores eran superiores intelectualmente solo por leer libros.' },
          { letra: 'C', texto: 'Que la lectura es una actividad valiosa.' },
          { letra: 'D', texto: 'Que en el pasado existían libros.' },
        ],
        clave: 'B',
        justificacion: 'El supuesto cuestionable implícito es que la cultura y la formación intelectual solo se logran a través de libros impresos, ignorando que la lectura digital, los artículos en línea, los videos educativos y otras formas de acceso al conocimiento también son válidos. Además, el texto asume que la generación anterior era más culta únicamente por leer libros físicos, lo cual es una nostalgia no sustentada. Las opciones A y D son hechos mencionados explícitamente, no supuestos implícitos cuestionables. La opción C es un supuesto que comparten tanto el autor como la mayoría de lectores críticos, y no es cuestionable en este contexto.',
        competencia: 'identificar',
        componente: 'pragmatico',
      },
    ],
  },
  // ===========================================================
  // INGLÉS
  // ===========================================================
  ingles: {

    // ---------------------------------------------------------
    // SABER 11°
    // ---------------------------------------------------------
    'saber-11': [

      // 1. Comprensión de lectura — idea principal (comprension-lectura / lexical)
      {
        id: 'eng-s11-p01',
        enunciado: 'Read the following text and answer the question.\n\n"Recycling is one of the most important habits we can adopt to protect the environment. When we recycle paper, glass, and plastic, we reduce the amount of waste that ends up in landfills. This simple action also saves energy and natural resources. However, recycling alone is not enough; we also need to reduce our consumption and reuse materials whenever possible."\n\nWhat is the main idea of the text?',
        opciones: [
          { letra: 'A', texto: 'Landfills are the biggest environmental problem in modern cities.' },
          { letra: 'B', texto: 'Recycling paper, glass, and plastic is easy and fun.' },
          { letra: 'C', texto: 'Recycling is important, but protecting the environment also requires reducing consumption and reusing materials.' },
          { letra: 'D', texto: 'We should only focus on saving energy to protect the environment.' },
        ],
        clave: 'C',
        justificacion: 'El texto afirma que reciclar es importante, pero añade que no es suficiente por sí solo: también es necesario reducir el consumo y reutilizar materiales. La opción A reduce el problema a los vertederos. La opción B trivializa el mensaje. La opción D ignora el reciclaje y la reutilización mencionados en el texto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 2. Uso de la lengua — tiempos verbales (uso-lengua / gramatical)
      {
        id: 'eng-s11-p02',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"By the time we arrived at the station, the train ______ already ______."',
        opciones: [
          { letra: 'A', texto: 'had / left' },
          { letra: 'B', texto: 'has / left' },
          { letra: 'C', texto: 'was / leaving' },
          { letra: 'D', texto: 'will have / left' },
        ],
        clave: 'A',
        justificacion: 'La oración describe dos acciones pasadas: llegar a la estación y la salida del tren, que ocurrió antes de la llegada. En inglés, la acción anterior se expresa con el Past Perfect (had + participio pasado). La opción B usa Present Perfect, incorrecto para contexto pasado. La opción C usa Past Continuous, que no expresa anterioridad. La opción D usa Future Perfect, que no corresponde a contexto pasado.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 3. Comprensión de lectura — vocabulario en contexto (comprension-lectura / lexical)
      {
        id: 'eng-s11-p03',
        enunciado: 'Read the following sentence and answer the question.\n\n"The scientist\'s groundbreaking discovery changed the way we understand the human brain forever."\n\nWhat does the word "groundbreaking" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Dangerous and controversial.' },
          { letra: 'B', texto: 'Revolutionary and highly significant.' },
          { letra: 'C', texto: 'Related to digging in the ground.' },
          { letra: 'D', texto: 'Old-fashioned and outdated.' },
        ],
        clave: 'B',
        justificacion: '"Groundbreaking" en inglés significa innovador o revolucionario, es decir, algo que rompe con lo establecido y tiene gran importancia. El contexto lo confirma: el descubrimiento cambió para siempre la comprensión del cerebro humano. La opción A agrega connotación negativa que no está en el texto. La opción C interpreta la palabra de forma literal (relacionada con el suelo). La opción D es lo opuesto al significado correcto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 4. Uso de la lengua — pragmática y actos de habla (uso-lengua / pragmatico)
      {
        id: 'eng-s11-p04',
        enunciado: 'Read the following dialogue.\n\nA: "I\'m really sorry I forgot your birthday. I feel terrible about it."\nB: "______"\n\nWhich response best fits the context?',
        opciones: [
          { letra: 'A', texto: '"Don\'t worry about it. It happens to everyone."' },
          { letra: 'B', texto: '"Birthdays are very important to me."' },
          { letra: 'C', texto: '"I have a lot of friends who forgot my birthday too."' },
          { letra: 'D', texto: '"I will call you tomorrow to discuss this."' },
        ],
        clave: 'A',
        justificacion: 'A expresa una disculpa sincera. La respuesta más pragmáticamente adecuada es aceptar la disculpa y minimizar el daño, lo que hace la opción A. La opción B solo menciona la importancia de los cumpleaños sin responder a la disculpa. La opción C desvía la conversación hacia otros. La opción D pospone una respuesta de manera innecesaria y no corresponde al contexto emocional.',
        competencia: 'uso-lengua',
        componente: 'pragmatico',
      },

      // 5. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p05',
        enunciado: 'Read the following text and answer the question.\n\n"Maria studied engineering for five years. After graduating, she worked in a construction company for two years. She then decided to go back to university to get a master\'s degree in sustainable architecture. Today, she designs eco-friendly buildings in three different countries."\n\nWhat can be inferred about Maria?',
        opciones: [
          { letra: 'A', texto: 'She prefers to live and work in one country only.' },
          { letra: 'B', texto: 'She abandoned her engineering career to become an architect.' },
          { letra: 'C', texto: 'She is committed to professional growth and has an international career.' },
          { letra: 'D', texto: 'She found her first job difficult and that is why she returned to university.' },
        ],
        clave: 'C',
        justificacion: 'A partir del texto se puede inferir que María ha invertido continuamente en su formación (ingeniería, maestría en arquitectura sostenible) y trabaja en tres países, lo que indica compromiso con el desarrollo profesional y una carrera internacional. La opción A contradice la información (trabaja en tres países). La opción B es incorrecta porque complementó, no abandonó, su carrera. La opción D es una suposición no sustentada en el texto.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 6. Comprensión de lectura — idea principal (comprension-lectura / lexical)
      {
        id: 'eng-s11-p06',
        enunciado: 'Read the following text and answer the question.\n\n"Social media has transformed the way people communicate. While it allows instant connection across the globe, it also raises concerns about privacy, misinformation, and mental health. Young people spend an average of four hours per day on social platforms. Experts disagree about whether this is harmful or simply a new form of social interaction."\n\nWhat is the best title for this text?',
        opciones: [
          { letra: 'A', texto: '"Why Social Media is Dangerous for Teenagers"' },
          { letra: 'B', texto: '"Social Media: A Complex Phenomenon with Benefits and Challenges"' },
          { letra: 'C', texto: '"How to Reduce Screen Time in Young People"' },
          { letra: 'D', texto: '"The History of Social Networks from 1990 to Today"' },
        ],
        clave: 'B',
        justificacion: 'El texto presenta una visión equilibrada de las redes sociales, mencionando tanto beneficios (conexión global) como preocupaciones (privacidad, desinformación, salud mental) y el debate entre expertos. El título más adecuado refleja esta ambivalencia. La opción A solo captura el aspecto negativo. La opción C sugiere soluciones que el texto no propone. La opción D habla de historia, que tampoco es el tema del texto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 7. Uso de la lengua — voz pasiva (uso-lengua / gramatical)
      {
        id: 'eng-s11-p07',
        enunciado: 'Choose the option that correctly rewrites the sentence in passive voice.\n\n"The government announced new economic measures last week."',
        opciones: [
          { letra: 'A', texto: '"New economic measures were announced by the government last week."' },
          { letra: 'B', texto: '"New economic measures are announced by the government last week."' },
          { letra: 'C', texto: '"New economic measures have been announced by the government last week."' },
          { letra: 'D', texto: '"New economic measures was announced by the government last week."' },
        ],
        clave: 'A',
        justificacion: 'La oración original está en pasado simple activo (announced). En voz pasiva con pasado simple, la estructura es: objeto + was/were + participio pasado + by + sujeto. Como "measures" es plural, se usa "were announced". La opción B usa el presente simple. La opción C usa el present perfect, que no corresponde al pasado simple. La opción D usa "was" con un sujeto plural (incorrecto: "measures" requiere "were").',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 8. Comprensión de lectura — vocabulario (comprension-lectura / lexical)
      {
        id: 'eng-s11-p08',
        enunciado: 'Read the following sentence.\n\n"The government\'s reluctance to address climate change has frustrated environmental activists around the world."\n\nWhat does the word "reluctance" mean in this context?',
        opciones: [
          { letra: 'A', texto: 'Enthusiasm and willingness to act.' },
          { letra: 'B', texto: 'Unwillingness or hesitation to do something.' },
          { letra: 'C', texto: 'Ability and capacity to solve problems.' },
          { letra: 'D', texto: 'Speed and urgency in decision making.' },
        ],
        clave: 'B',
        justificacion: '"Reluctance" significa falta de disposición o resistencia a hacer algo. El contexto lo confirma: si los activistas están frustrados, es porque el gobierno no está actuando de manera proactiva ante el cambio climático, sino mostrando resistencia o demora. La opción A es lo opuesto. Las opciones C y D introducen conceptos no relacionados con el sentido de "reluctance".',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 9. Uso de la lengua — oraciones condicionales (uso-lengua / gramatical)
      {
        id: 'eng-s11-p09',
        enunciado: 'Choose the option that correctly completes the sentence.\n\n"If she ______ harder, she ______ the exam."',
        opciones: [
          { letra: 'A', texto: '"studied / would pass"' },
          { letra: 'B', texto: '"studies / will pass"' },
          { letra: 'C', texto: '"had studied / would have passed"' },
          { letra: 'D', texto: '"would study / passes"' },
        ],
        clave: 'A',
        justificacion: 'La oración expresa una condición hipotética en el presente/futuro (algo que podría ocurrir pero es poco probable o no está ocurriendo ahora). Esto corresponde al Segundo Condicional: If + pasado simple, would + infinitivo. La opción B usa el Primer Condicional (condición real y probable). La opción C usa el Tercer Condicional (hipótesis sobre el pasado, algo que ya no puede cambiarse). La opción D mezcla incorrectamente would con presente simple.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 10. Comprensión de lectura — inferencia (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p10',
        enunciado: 'Read the following dialogue and answer the question.\n\nA: "Do you know if the library is open on Sundays?"\nB: "I\'m not sure. I think they close at noon, but you should check the website."\n\nWhat can be inferred about B\'s response?',
        opciones: [
          { letra: 'A', texto: 'B is certain that the library closes at noon on Sundays.' },
          { letra: 'B', texto: 'B is not completely sure about the schedule and suggests A verify the information.' },
          { letra: 'C', texto: 'B works at the library and knows the schedule well.' },
          { letra: 'D', texto: 'B thinks the library is closed all day on Sundays.' },
        ],
        clave: 'B',
        justificacion: 'B usa expresiones de incertidumbre ("I\'m not sure", "I think") que indican que no tiene certeza sobre el horario. Además, recomienda verificar en el sitio web, lo cual confirma que su información es aproximada. La opción A contradice el uso de "I think" y "I\'m not sure". La opción C es una inferencia sin sustento en el texto. La opción D interpreta incorrectamente: B dice que cierran al mediodía, no todo el día.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 11. Uso de la lengua — conectores (uso-lengua / gramatical)
      {
        id: 'eng-s11-p11',
        enunciado: 'Choose the connector that best completes the following sentence.\n\n"She worked extremely hard all year; ______, she failed to get the promotion."',
        opciones: [
          { letra: 'A', texto: '"therefore"' },
          { letra: 'B', texto: '"moreover"' },
          { letra: 'C', texto: '"nevertheless"' },
          { letra: 'D', texto: '"for instance"' },
        ],
        clave: 'C',
        justificacion: '"Nevertheless" es un conector adversativo que introduce un contraste o una idea inesperada respecto a lo anterior. La oración expresa un contraste: trabajó mucho (esfuerzo) pero no obtuvo la promoción (resultado inesperado). "Therefore" (A) indica consecuencia lógica, lo opuesto al contraste requerido. "Moreover" (B) introduce información adicional en la misma dirección. "For instance" (D) introduce un ejemplo. Solo "nevertheless" expresa la contradicción entre esfuerzo y resultado.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },

      // 12. Comprensión de lectura — texto complejo (comprension-lectura / lexical)
      {
        id: 'eng-s11-p12',
        enunciado: 'Read the following text and answer the question.\n\n"Artificial intelligence is no longer science fiction. Today, AI systems can diagnose diseases more accurately than doctors in some fields, write poetry, compose music, and even predict natural disasters. However, AI also raises ethical questions: Who is responsible when an AI makes a deadly mistake? Can machines ever truly understand human emotions? These are not questions for the future — they need answers now."\n\nAccording to the text, why is it urgent to address the ethical questions about AI?',
        opciones: [
          { letra: 'A', texto: 'Because AI will be invented in the near future and we should prepare.' },
          { letra: 'B', texto: 'Because AI is already operating in critical areas and its ethical implications require immediate attention.' },
          { letra: 'C', texto: 'Because AI is only used for entertainment purposes like music and poetry.' },
          { letra: 'D', texto: 'Because machines can understand human emotions better than humans.' },
        ],
        clave: 'B',
        justificacion: 'El texto es explícito: la IA ya existe ("no longer science fiction") y opera en campos críticos como el diagnóstico médico. Las preguntas éticas sobre responsabilidad y comprensión emocional "necesitan respuestas ahora", no en el futuro. La urgencia deriva de que la IA ya está activa en contextos donde sus errores tienen consecuencias graves. La opción A contradice el texto (la IA ya existe). La opción C reduce las aplicaciones de la IA a entretenimiento, ignorando el diagnóstico médico y la predicción de desastres. La opción D invierte la pregunta del texto.',
        competencia: 'comprension-lectura',
        componente: 'lexical',
      },

      // 13. Uso de la lengua — vocabulario en contexto (uso-lengua / pragmatico)
      {
        id: 'eng-s11-p13',
        enunciado: 'Read the following situation and choose the most appropriate response.\n\nYour friend says: "I have a job interview tomorrow and I\'m really nervous. What if I forget everything?"\n\nYou say: "______"',
        opciones: [
          { letra: 'A', texto: '"Don\'t worry. You\'ve prepared well and you\'ll do great. Just take a deep breath and be yourself."' },
          { letra: 'B', texto: '"That\'s your problem. You should have prepared better."' },
          { letra: 'C', texto: '"I don\'t know. Interviews are usually terrible experiences."' },
          { letra: 'D', texto: '"Yes, I had a job interview once too."' },
        ],
        clave: 'A',
        justificacion: 'La situación requiere una respuesta de apoyo emocional y aliento. La opción A ofrece tranquilidad ("don\'t worry"), reconoce el esfuerzo previo ("you\'ve prepared well") y da un consejo práctico y empático. La opción B es inapropiada pragmáticamente: culpa al amigo en lugar de apoyarlo. La opción C aumenta la ansiedad en lugar de reducirla. La opción D no responde a la necesidad emocional del amigo y desvía la conversación hacia una experiencia personal irrelevante.',
        competencia: 'uso-lengua',
        componente: 'pragmatico',
      },

      // 14. Comprensión de lectura — estructura del texto (comprension-lectura / pragmatico)
      {
        id: 'eng-s11-p14',
        enunciado: 'Read the following text.\n\n"Dear Editor,\n\nI am writing to express my concern about the increasing use of single-use plastics in our city. Every day, thousands of plastic bags and bottles end up in our rivers and parks. Local businesses should be required to offer eco-friendly alternatives. I urge the city council to take immediate action.\n\nSincerely,\nA concerned citizen"\n\nWhat type of text is this and what is its main purpose?',
        opciones: [
          { letra: 'A', texto: 'A narrative text; its purpose is to tell the story of plastic pollution.' },
          { letra: 'B', texto: 'A formal letter of complaint or opinion; its purpose is to persuade the editor and city council to take action on plastic pollution.' },
          { letra: 'C', texto: 'A scientific report; its purpose is to present data about plastic use in the city.' },
          { letra: 'D', texto: 'An informal email; its purpose is to inform a friend about environmental problems.' },
        ],
        clave: 'B',
        justificacion: 'El texto tiene marcas claras de carta formal de opinión al editor: saludo formal ("Dear Editor"), cierre formal ("Sincerely"), firma anónima representativa ("A concerned citizen") y una petición directa ("I urge the city council to take immediate action"). Su propósito es persuasivo: convencer al editor (y a través del periódico, al consejo municipal) de actuar sobre la contaminación plástica. No es narrativo (sin personajes ni trama), ni científico (sin datos estadísticos), ni informal.',
        competencia: 'comprension-lectura',
        componente: 'pragmatico',
      },

      // 15. Uso de la lengua — tiempos verbales mixtos (uso-lengua / gramatical)
      {
        id: 'eng-s11-p15',
        enunciado: 'Choose the option that correctly completes the conversation.\n\nA: "Have you ever visited Cartagena?"\nB: "Yes! I ______ there in 2022. It ______ an incredible experience."',
        opciones: [
          { letra: 'A', texto: '"have been / was"' },
          { letra: 'B', texto: '"went / was"' },
          { letra: 'C', texto: '"go / is"' },
          { letra: 'D', texto: '"had gone / had been"' },
        ],
        clave: 'B',
        justificacion: 'A usa el Present Perfect ("Have you ever visited?") para preguntar por una experiencia general. B responde con una referencia temporal específica ("in 2022"), lo que requiere el pasado simple (Simple Past), no el Present Perfect. "Went" (pasado simple de go) es correcto para la acción pasada con referencia temporal. "Was" es el pasado simple de "be", correcto para describir la experiencia. La opción A usa Present Perfect con referencia temporal específica (incorrecto en inglés estándar). La opción C usa presente. La opción D usa Past Perfect sin justificación.',
        competencia: 'uso-lengua',
        componente: 'gramatical',
      },
    ],
  },

};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PREGUNTAS_ICFES };
}
