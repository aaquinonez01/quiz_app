export interface Question {
  text: string;
  correctAnswerIndex: number;
  imageUrl?: string;
  options: Option[];
}

interface Option {
  content: string;
  type: string;
}

const questions: Question[] = [
  {
    text: "¿Cuál será la Potencia perdida en el cobre si se tiene una corriente de 9 A y una resistencia de 15Ω?",
    correctAnswerIndex: 2,
    options: [
      { content: "135 W", type: "text" },
      { content: "2500 W", type: "text" },
      { content: "3645 W", type: "text" },
      { content: "4050 W", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la velocidad síncrona de un generador síncrono de doce polos de 640 V, a 50 Hz?",
    correctAnswerIndex: 1,
    options: [
      { content: "450 rpm", type: "text" },
      { content: "500 rpm", type: "text" },
      { content: "600 rpm", type: "text" },
      { content: "750 rpm", type: "text" },
    ],
  },
  {
    text: "¿Cuál será el voltaje máximo (E_max) de un generador si tiene 15 vueltas en cada bobina, un flujo de 0,05 Wb, y una velocidad en el rotor de 377 rad/s?",
    correctAnswerIndex: 1,
    options: [
      { content: "150 V", type: "text" },
      { content: "282,75 V", type: "text" },
      { content: "310 V", type: "text" },
      { content: "400 V", type: "text" },
    ],
  },
  {
    text: "La tensión Nominal de la Red es el valor eficaz de la tensión entre:",
    correctAnswerIndex: 0,
    options: [
      { content: "Conductores", type: "text" },
      { content: "El generador y el circuito", type: "text" },
      { content: "El transformador y el generador", type: "text" },
      { content: "La fuente y la carga", type: "text" },
    ],
  },
  {
    text: "Sobre tensión admisible: El cable soporta una ........... sobre el máximo de 25%, pero no en forma .................",
    correctAnswerIndex: 1,
    options: [
      { content: "corriente - rápida", type: "text" },
      { content: "carga - permanente", type: "text" },
      { content: "carga - esporádica", type: "text" },
      { content: "voltaje - constante", type: "text" },
    ],
  },
  {
    text: "¿Cuál será el voltaje total del generador que está conectado en Y, si se tiene un voltaje interno (EA) de 840 V?",
    correctAnswerIndex: 1,
    options: [
      { content: "1200 V", type: "text" },
      { content: "1455 V", type: "text" },
      { content: "1600 V", type: "text" },
      { content: "1680 V", type: "text" },
    ],
  },
  {
    text: "¿Cuál será el voltaje máximo (E_max) de un generador si tiene 30 vueltas en cada bobina, un flujo de 0,075 Wb, y una velocidad en el rotor de 386 rad/s?",
    correctAnswerIndex: 2,
    options: [
      { content: "500 V", type: "text" },
      { content: "750 V", type: "text" },
      { content: "868,5 V", type: "text" },
      { content: "900 V", type: "text" },
    ],
  },
  {
    text: "¿Cuál será el voltaje máximo (E_max) de un generador si tiene 40 vueltas en cada bobina, un flujo de 0,08 Wb, y una velocidad en el rotor de 565,2 rad/s?",
    correctAnswerIndex: 2,
    options: [
      { content: "1500 V", type: "text" },
      { content: "1750 V", type: "text" },
      { content: "1809 V", type: "text" },
      { content: "2000 V", type: "text" },
    ],
  },
  {
    text: "El conjunto de elementos y equipos que permiten distribuir la energía eléctrica a un ambiente determinado. Está conformado por: interruptor del tablero (si lo tiene), barras de alimentación, interruptores que protegen a cada circuito ramal. Esto define:",
    correctAnswerIndex: 2,
    options: [
      { content: "Interruptor de protección", type: "text" },
      { content: "Barra de alimentación", type: "text" },
      { content: "Tablero principal", type: "text" },
      { content: "Unidad de distribución", type: "text" },
    ],
  },
  {
    text: "Establece que los calibres son definidos por una escala numérica que obedece a una progresión geométrica.",
    correctAnswerIndex: 0,
    options: [
      { content: "Sistema AWG (American Wire Gauge)", type: "text" },
      { content: "Sistema Europeo de Calibres", type: "text" },
      { content: "Norma IEC", type: "text" },
      { content: "Escala de Calibración", type: "text" },
    ],
  },
  {
    text: "La Demanda Máxima Unitaria se determina a partir de la carga ............................ del consumidor Comercial o Industrial y la aplicación del factor de ........................................ para cada una de las cargas instaladas, el cual determina la incidencia de la carga considerada en la demanda coincidente durante el periodo de máxima demanda.",
    correctAnswerIndex: 0,
    options: [
      { content: "Instalada – Simultaneidad", type: "text" },
      { content: "Media – Coincidencia", type: "text" },
      { content: "Activa – Demanda", type: "text" },
      { content: "Conectada – Capacidad", type: "text" },
    ],
  },
  {
    text: "El Factor de Demanda definido por la relación entre la demanda ............................. y la Carga Instalada, indica la fracción de carga instalada que se utiliza simultáneamente en el período de máxima solicitación y permite ................................... los valores adoptados por comparación con aquellos en instalaciones existentes similares.",
    correctAnswerIndex: 0,
    options: [
      { content: "Máxima – Evaluar", type: "text" },
      { content: "Media – Controlar", type: "text" },
      { content: "Activa – Calcular", type: "text" },
      { content: "Conectada – Revisar", type: "text" },
    ],
  },
  {
    text: "Se define el grado de electrificación de acuerdo al área de …………………………….. de la residencia y se establece el número de …………………………. para iluminación y fuerza.",
    correctAnswerIndex: 0,
    options: [
      { content: "Construcción – Circuitos", type: "text" },
      { content: "Uso – Salidas", type: "text" },
      { content: "Construcción – Fases", type: "text" },
      { content: "Instalación – Conexiones", type: "text" },
    ],
  },
  {
    text: "¿Qué concepto corresponde a la correcta definición de capacidad de corriente de un conductor?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Es la máxima corriente que puede transportar un conductor en condiciones de uso sin superar su temperatura nominal de servicio.",
        type: "text",
      },
      {
        content:
          "Es la cantidad total de carga que un conductor puede transportar sin interrupción.",
        type: "text",
      },
      {
        content:
          "Es la potencia máxima que puede transportar un conductor en condiciones normales.",
        type: "text",
      },
      {
        content: "Es la velocidad de transmisión de corriente en un conductor.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Cuál es la fórmula para calcular la potencia aparente en una red de distribución primaria aérea?",
    correctAnswerIndex: 0,
    options: [
      { content: "S=V*I", type: "text" },
      { content: "P=V/I", type: "text" },
      { content: "S=I/R", type: "text" },
      { content: "P=I*R", type: "text" },
    ],
  },
  {
    text: "¿Qué fórmula se utiliza para calcular la caída de voltaje en un cable de longitud L y resistencia R a una corriente I?",
    correctAnswerIndex: 0,
    options: [
      { content: "V=IRL", type: "text" },
      { content: "V=I/R*L", type: "text" },
      { content: "V=I^2*R", type: "text" },
      { content: "V=I*L/R", type: "text" },
    ],
  },
  {
    text: "¿Qué parámetro se utiliza para medir la capacidad de carga de una línea de distribución primaria aérea?",
    correctAnswerIndex: 0,
    options: [
      { content: "Capacidad térmica", type: "text" },
      { content: "Resistencia eléctrica", type: "text" },
      { content: "Voltaje nominal", type: "text" },
      { content: "Capacidad de voltaje", type: "text" },
    ],
  },
  {
    text: "¿Cuál es la fórmula para calcular la resistencia de un conductor en una red de distribución secundaria?",
    correctAnswerIndex: 1,
    options: [
      { content: "R = V/I", type: "text" },
      { content: "R = P/V^2", type: "text" },
      { content: "R = V^2/P", type: "text" },
      { content: "R = I^2*V", type: "text" },
    ],
  },
  {
    text: "¿Cuál es el estándar típico de frecuencia de la corriente alterna en una red de distribución secundaria en la mayoría de los países?",
    correctAnswerIndex: 1,
    options: [
      { content: "50 Hz", type: "text" },
      { content: "60 Hz", type: "text" },
      { content: "75 Hz", type: "text" },
      { content: "100 Hz", type: "text" },
    ],
  },
  {
    text: "Para líneas de distribución primaria aéreas, ¿cuál es el calibre mínimo para el alimentador principal?",
    correctAnswerIndex: 2,
    options: [
      { content: "ACSR 4/0 AWG", type: "text" },
      { content: "ACSR 1/0 AWG", type: "text" },
      { content: "ACSR 2/0 AWG", type: "text" },
      { content: "ACSR 3/0 AWG", type: "text" },
    ],
  },
  {
    text: "¿Cuál es la simbología de la estructura trifásica centrada doble retención?",
    correctAnswerIndex: 2,
    options: [
      { content: "3CA", type: "text" },
      { content: "2CD", type: "text" },
      { content: "3CD", type: "text" },
      { content: "3CR", type: "text" },
    ],
  },
  {
    text: "¿Cuál es la simbología de la estructura una vía pre ensamblado retención?",
    correctAnswerIndex: 1,
    options: [
      { content: "1PR1", type: "text" },
      { content: "1PR3", type: "text" },
      { content: "1VR", type: "text" },
      { content: "1CA3", type: "text" },
    ],
  },
  {
    text: "¿Qué tipo de sobretensión es causada por una falla en la red de distribución?",
    correctAnswerIndex: 2,
    options: [
      { content: "Sobretensión transitoria", type: "text" },
      { content: "Sobretensión de maniobra", type: "text" },
      { content: "Sobretensión permanente", type: "text" },
      { content: "Sobretensión inductiva", type: "text" },
    ],
  },
  {
    text: "¿Cuál es una de las formas de detectar sobre voltajes en una red de distribución?",
    correctAnswerIndex: 2,
    options: [
      { content: "Monitoreo de corriente", type: "text" },
      { content: "Medición de reactancia", type: "text" },
      { content: "Monitoreo de voltaje", type: "text" },
      { content: "Análisis de armónicos", type: "text" },
    ],
  },
  {
    text: "¿Cuál es la simbología de la estructura Monofásica en volado retención?",
    correctAnswerIndex: 1,
    options: [
      { content: "1CR", type: "text" },
      { content: "1VR", type: "text" },
      { content: "1PR", type: "text" },
      { content: "1FR", type: "text" },
    ],
  },
  {
    text: "¿Qué papel juegan los fusibles en la protección contra sobrecorrientes?",
    correctAnswerIndex: 2,
    options: [
      { content: "Detectar cortocircuitos", type: "text" },
      { content: "Desviar la corriente", type: "text" },
      { content: "Limitar las sobrecorrientes", type: "text" },
      { content: "Incrementar la resistencia", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la profundidad de un poste de 12 m? (Usa la fórmula D = H/10 + 0,5 m)",
    correctAnswerIndex: 1,
    options: [
      { content: "1.5 m", type: "text" },
      { content: "1.7 m", type: "text" },
      { content: "2.0 m", type: "text" },
      { content: "2.5 m", type: "text" },
    ],
  },
  {
    text: "¿Cuál es la simbología de la estructura Trifásica centrada angular?",
    correctAnswerIndex: 1,
    options: [
      { content: "2CA", type: "text" },
      { content: "3CA", type: "text" },
      { content: "3CR", type: "text" },
      { content: "3VR", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la profundidad de un poste de 14 m? (Usa la fórmula D = H/10 + 0,5 m)",
    correctAnswerIndex: 1,
    options: [
      { content: "1.8 m", type: "text" },
      { content: "1.9 m", type: "text" },
      { content: "2.0 m", type: "text" },
      { content: "2.2 m", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la densidad de flujo en el entrehierro del motor, si el flujo es de 0,035 Wb y el área es de 0,014 m²?",
    correctAnswerIndex: 1,
    options: [
      { content: "2.0 T", type: "text" },
      { content: "2.5 T", type: "text" },
      { content: "3.0 T", type: "text" },
      { content: "3.5 T", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la fuerza magneto motriz necesaria si la intensidad de campo es de 115 A espiras y una longitud de 35 cm?",
    correctAnswerIndex: 1,
    options: [
      { content: "38.5 A espiras", type: "text" },
      { content: "40.25 A espiras", type: "text" },
      { content: "42.0 A espiras", type: "text" },
      { content: "45.0 A espiras", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la fuerza magneto motriz necesaria si la intensidad de campo es de 215 A espiras y una longitud de 55 cm?",
    correctAnswerIndex: 2,
    options: [
      { content: "115.0 A espiras", type: "text" },
      { content: "120.0 A espiras", type: "text" },
      { content: "118.25 A espiras", type: "text" },
      { content: "125.5 A espiras", type: "text" },
    ],
  },
  {
    text: "¿Cuál será el flujo de la máquina si el diámetro es de 4 m, la longitud es de 3 m y la densidad de flujo es de 0,35 T?",
    correctAnswerIndex: 1,
    options: [
      { content: "4.0 Wb", type: "text" },
      { content: "4.2 Wb", type: "text" },
      { content: "4.5 Wb", type: "text" },
      { content: "5.0 Wb", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la fuerza magneto motriz necesaria si la intensidad de campo es de 350 A espiras y una longitud de 0,25 m?",
    correctAnswerIndex: 1,
    options: [
      { content: "85.0 A espiras", type: "text" },
      { content: "87.5 A espiras", type: "text" },
      { content: "90.0 A espiras", type: "text" },
      { content: "92.5 A espiras", type: "text" },
    ],
  },
  {
    text: "¿Cuál será el voltaje total del generador que está conectado en Y, si se tiene un voltaje interno (EA) de 240 V?",
    correctAnswerIndex: 1,
    options: [
      { content: "380 V", type: "text" },
      { content: "415,69 V", type: "text" },
      { content: "450 V", type: "text" },
      { content: "480 V", type: "text" },
    ],
  },
  {
    text: "¿Cuál será el voltaje total del generador que está conectado en ∆, si se tiene un voltaje interno (EA) de 540 V?",
    correctAnswerIndex: 1,
    options: [
      { content: "415 V", type: "text" },
      { content: "540 V", type: "text" },
      { content: "620 V", type: "text" },
      { content: "720 V", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la velocidad síncrona de un generador síncrono con cuatro polos de 480 V, a 50 Hz?",
    correctAnswerIndex: 1,
    options: [
      { content: "1200 rpm", type: "text" },
      { content: "1500 rpm", type: "text" },
      { content: "1800 rpm", type: "text" },
      { content: "2000 rpm", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la velocidad síncrona de un generador síncrono de seis polos de 540 V, a 60 Hz?",
    correctAnswerIndex: 0,
    options: [
      { content: "1200 rpm", type: "text" },
      { content: "1500 rpm", type: "text" },
      { content: "1800 rpm", type: "text" },
      { content: "1000 rpm", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la Potencia perdida en el cobre si se tiene una corriente de 3 A y una resistencia de 5Ω?",
    correctAnswerIndex: 1,
    options: [
      { content: "100 kW", type: "text" },
      { content: "135 kW", type: "text" },
      { content: "150 kW", type: "text" },
      { content: "175 kW", type: "text" },
    ],
  },
  {
    text: "La potencia total de entrada al generador, si las pérdidas en el núcleo son de 30 kW, las pérdidas por fricción y aire son de 40 kW, las pérdidas de cobre son de 27 kW, y la potencia de salida es de 790 kW, será:",
    correctAnswerIndex: 2,
    options: [
      { content: "850 kW", type: "text" },
      { content: "870 kW", type: "text" },
      { content: "887 kW", type: "text" },
      { content: "900 kW", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la Potencia perdida en el cobre si se tiene una corriente de 4 A y una resistencia de 8Ω?",
    correctAnswerIndex: 1,
    options: [
      { content: "360 kW", type: "text" },
      { content: "384 kW", type: "text" },
      { content: "400 kW", type: "text" },
      { content: "420 kW", type: "text" },
    ],
  },
  {
    text: "La potencia total de entrada al generador, si las pérdidas en el núcleo son de 50 kW, las pérdidas por fricción y aire son de 30 kW, las pérdidas de cobre son de 35 kW, y la potencia de salida es de 840 kW, será:",
    correctAnswerIndex: 2,
    options: [
      { content: "920 kW", type: "text" },
      { content: "940 kW", type: "text" },
      { content: "955 kW", type: "text" },
      { content: "970 kW", type: "text" },
    ],
  },
  {
    text: "¿Cuál será la velocidad síncrona de un generador síncrono de ocho polos de 640 V, a 60 Hz?",
    correctAnswerIndex: 1,
    options: [
      { content: "750 rpm", type: "text" },
      { content: "900 rpm", type: "text" },
      { content: "1200 rpm", type: "text" },
      { content: "1500 rpm", type: "text" },
    ],
  },
  {
    text: "Formas de llevar los conductores por las aceras:",
    correctAnswerIndex: 1,
    options: [
      { content: "Tubos galvanizados", type: "text" },
      { content: "Ductos de PVC reforzados", type: "text" },
      { content: "Bandejas portacables", type: "text" },
      { content: "Conductos de aluminio", type: "text" },
    ],
  },
  {
    text: "Para manipular instalaciones o máquinas con seguridad, es necesario disponer de medios que permitan aislar eléctricamente los circuitos de .................. y de .................. de la red general.",
    correctAnswerIndex: 1,
    options: [
      { content: "Energía – Control", type: "text" },
      { content: "Potencia – Control", type: "text" },
      { content: "Corriente – Voltaje", type: "text" },
      { content: "Fuente – Carga", type: "text" },
    ],
  },
  {
    text: "Los fusibles proporcionan una protección .................., con un poder de corte muy .................. y un volumen reducido.",
    correctAnswerIndex: 1,
    options: [
      { content: "Transitoria – bajo", type: "text" },
      { content: "Fase a fase – elevado", type: "text" },
      { content: "Permanente – moderado", type: "text" },
      { content: "Cortocircuito – medio", type: "text" },
    ],
  },
  {
    text: "Según la Normativa Eléctrica Ecuatoriana, la acometida eléctrica en medio voltaje es la que va desde .................. hasta .................. voltios.",
    correctAnswerIndex: 2,
    options: [
      { content: "220 – 10,000", type: "text" },
      { content: "500 – 30,000", type: "text" },
      { content: "600 – 40,000", type: "text" },
      { content: "1,000 – 50,000", type: "text" },
    ],
  },
  {
    text: "Para efectuar la inversión de giro de un motor trifásico, deben montarse dos contactores que van en ..........; uno alimenta el motor con las tres fases en un orden y el otro .......... dos de las tres fases entre sí, manteniendo la tercera inalterable.",
    correctAnswerIndex: 1,
    options: [
      { content: "Secuencia – alternará", type: "text" },
      { content: "Paralelo – intercambiará", type: "text" },
      { content: "Serie – invertirá", type: "text" },
      { content: "Cruce – desconectará", type: "text" },
    ],
  },
  {
    text: "El circuito de enclavamiento eléctrico a través del contacto normalmente abierto KM1 se realiza en el instante que:",
    correctAnswerIndex: 2,
    options: [
      { content: "Se pulsa S1 y se cierra el interruptor.", type: "text" },
      { content: "La bobina KM2 se energiza y desconecta KM1.", type: "text" },
      {
        content:
          "Se pulsa S2, se energiza la bobina KM1 y automáticamente se cierra el contacto KM1.",
        type: "text",
      },
      { content: "KM1 se cierra manualmente.", type: "text" },
    ],
  },
  {
    text: "La iluminancia o nivel de iluminación (E), definida como el flujo luminoso por unidad de superficie E=Φ/A, se expresa en:",
    correctAnswerIndex: 2,
    options: [
      { content: "Candela", type: "text" },
      { content: "Lumen", type: "text" },
      { content: "Lux", type: "text" },
      { content: "Watt", type: "text" },
    ],
  },
  {
    text: "Las luminarias, desde el punto de vista óptico, son elementos que en forma general se encargan de:",
    correctAnswerIndex: 2,
    options: [
      { content: "Proveer energía a las lámparas", type: "text" },
      { content: "Regular la intensidad de luz", type: "text" },
      {
        content:
          "Distribuir la luz emitida por las lámparas y protegerlas mecánicamente",
        type: "text",
      },
      { content: "Absorber el flujo luminoso", type: "text" },
    ],
  },
  {
    text: "Los apagadores o conmutadores de 3 vías sirven para controlar lámparas desde dos puntos distintos. Según el diagrama de conexiones, una instalación bien realizada debe cumplir:",
    correctAnswerIndex: 1,
    options: [
      {
        content: "X = neutro, Y = línea, A1 y A2 son conmutadores",
        type: "text",
      },
      {
        content: "X = línea, Y = neutro, A1 y A2 son 2 conmutadores de 3 vías",
        type: "text",
      },
      {
        content: "X = fase, Y = línea, A1 y A2 son interruptores",
        type: "text",
      },
      { content: "X = fase, Y = tierra, A1 y A2 son conectores", type: "text" },
    ],
  },
  {
    text: "De acuerdo con la distribución del flujo luminoso, la iluminación es aquella donde:",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "La mayor parte del flujo de las lámparas va hacia el piso y el resto a las paredes, con un rendimiento entre 60 - 90%.",
        type: "text",
      },
      {
        content: "El flujo se dirige completamente hacia el piso.",
        type: "text",
      },
      {
        content:
          "La luz se distribuye en proporciones iguales hacia el piso y las paredes.",
        type: "text",
      },
      { content: "El rendimiento supera el 90%.", type: "text" },
    ],
  },
  {
    text: "La nomenclatura MI en un cable significa:",
    correctAnswerIndex: 2,
    options: [
      { content: "Aislado con plástico mineral", type: "text" },
      { content: "Conductor magnético aislado", type: "text" },
      { content: "Tiene un aislamiento mineral", type: "text" },
      { content: "Cable de material ignífugo", type: "text" },
    ],
  },
  {
    text: `Ordene los pasos a seguir para un correcto cálculo de un sistema de puesta a tierra:\n
    1. Cálculo de la tensión de defecto en el CT,
    2. Cálculo de la intensidad de defecto,
    3. Elección de una configuración,
    4. Cálculo de la tensión admisible de paso.`,
    options: [
      { content: "1, 3, 2, 4", type: "text" },
      { content: "2, 1, 3, 4", type: "text" },
      { content: "4, 1, 2, 3", type: "text" },
      { content: "3, 2, 1, 4", type: "text" }, // respuesta correcta
    ],
    correctAnswerIndex: 3,
  },
  {
    text: `Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.`,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_56.png", // Reemplaza con la URL de la imagen
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 48.25 μA, I<sub>C</sub> = 4.83 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      }, // respuesta correcta
      {
        content:
          "Fija, I<sub>B</sub> = 50 μA, I<sub>C</sub> = 4.5 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Variable, I<sub>B</sub> = 47 μA, I<sub>C</sub> = 5 mA, V<sub>E</sub> = 1V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 40 μA, I<sub>C</sub> = 4 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
    correctAnswerIndex: 0,
  },
  {
    text: `Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.`,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_57.png", // Reemplaza con la URL de la imagen
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 38.6 μA, I<sub>C</sub> = 3.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      }, // respuesta correcta
      {
        content:
          "Fija, I<sub>B</sub> = 35 μA, I<sub>C</sub> = 3.5 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Variable, I<sub>B</sub> = 40 μA, I<sub>C</sub> = 4 mA, V<sub>E</sub> = 1V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 37 μA, I<sub>C</sub> = 3.7 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
    correctAnswerIndex: 0,
  },

  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_58.png",
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 32.17μA, I<sub>C</sub> = 3.22 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 32.17mA, I<sub>C</sub> = 3.22 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 32.17μA, I<sub>C</sub> = 3.22 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 32.17mA, I<sub>C</sub> = 3.22 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_59.png",
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 60.75μA, I<sub>C</sub> = 6.08 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 60.75mA, I<sub>C</sub> = 6.08 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 60.75μA, I<sub>C</sub> = 6.08 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 60.75mA, I<sub>C</sub> = 6.08 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_60.png",
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 48.6μA, I<sub>C</sub> = 4.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 48.6mA, I<sub>C</sub> = 4.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 48.6μA, I<sub>C</sub> = 4.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 48.6mA, I<sub>C</sub> = 4.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_61.png",
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 40.5μA, I<sub>C</sub> = 4.05 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 40.5mA, I<sub>C</sub> = 4.05 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 40.5μA, I<sub>C</sub> = 4.05 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 40.5mA, I<sub>C</sub> = 4.05 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar que tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_62.png", // Cambia esta ruta a la ubicación de tu imagen
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 73.25 μA, I<sub>C</sub> = 7.33 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 73.25 mA, I<sub>C</sub> = 7.33 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 73.25 μA, I<sub>C</sub> = 7.33 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 73.25 mA, I<sub>C</sub> = 7.33 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar que tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_63.png",
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 58.6 μA, I<sub>C</sub> = 5.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 58.6 mA, I<sub>C</sub> = 5.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 58.6 μA, I<sub>C</sub> = 5.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 58.6 mA, I<sub>C</sub> = 5.86 mA, V<sub>E</sub> = 0V",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar que tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_64.png",
    options: [
      {
        content:
          "Fija, I<sub>B</sub> = 48.83 μA, I<sub>C</sub> = 4.88 mA, I<sub>E</sub> = 0A",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 48.83 mA, I<sub>C</sub> = 4.88 mA, I<sub>E</sub> = 0A",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 48.83 μA, I<sub>C</sub> = 4.88 mA, I<sub>E</sub> = 0A",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 48.83 mA, I<sub>C</sub> = 4.88 mA, I<sub>E</sub> = 0A",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar que tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y I<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_65.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 42.84 μA, I<sub>C</sub> = 4.28 mA, I<sub>E</sub> = 4.28 mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 42.84 mA, I<sub>C</sub> = 4.28 mA, I<sub>E</sub> = 4.28 mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 42.84 μA, I<sub>C</sub> = 4.28 mA, I<sub>E</sub> = 4.28 mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 42.84 mA, I<sub>C</sub> = 4.28 mA, I<sub>E</sub> = 4.28 mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar que tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y I<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_66.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 35.06 μA, I<sub>C</sub> = 3.51 mA, I<sub>E</sub> = 3.51 mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 35.06 mA, I<sub>C</sub> = 3.51 mA, I<sub>E</sub> = 3.51 mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 35.06 μA, I<sub>C</sub> = 3.51 mA, I<sub>E</sub> = 3.51 mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 35.06 mA, I<sub>C</sub> = 3.51 mA, I<sub>E</sub> = 3.51 mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar que tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y I<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_67.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 53.94 μA, I<sub>C</sub> = 5.39 mA, I<sub>E</sub> = 5.39 mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 53.94 mA, I<sub>C</sub> = 5.39 mA, I<sub>E</sub> = 5.39 mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 53.94 μA, I<sub>C</sub> = 5.39 mA, I<sub>E</sub> = 5.39 mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 53.94 mA, I<sub>C</sub> = 5.39 mA, I<sub>E</sub> = 5.39 mA",
        type: "formatted",
      },
    ],
  },

  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_68.png", // reemplazar con la URL de la imagen correspondiente
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 44.14μA, I<sub>C</sub> = 4.41mA, I<sub>E</sub> = 4.41mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 44.14mA, I<sub>C</sub> = 4.41mA, I<sub>E</sub> = 4.41mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 44.14μA, I<sub>C</sub> = 4.41mA, I<sub>E</sub> = 4.41mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 44.14mA, I<sub>C</sub> = 4.41mA, I<sub>E</sub> = 4.41mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_69.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 51.36μA, I<sub>C</sub> = 5.14mA, I<sub>E</sub> = 5.14mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 51.36mA, I<sub>C</sub> = 5.14mA, I<sub>E</sub> = 5.14mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 51.36μA, I<sub>C</sub> = 5.14mA, I<sub>E</sub> = 5.14mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 51.36mA, I<sub>C</sub> = 5.14mA, I<sub>E</sub> = 5.14mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_70.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 40.57μA, I<sub>C</sub> = 4.06mA, I<sub>E</sub> = 4.06mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 40.57mA, I<sub>C</sub> = 4.06mA, I<sub>E</sub> = 4.06mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 40.57μA, I<sub>C</sub> = 4.06mA, I<sub>E</sub> = 4.06mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 40.57mA, I<sub>C</sub> = 4.06mA, I<sub>E</sub> = 4.06mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_71.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 33.52μA, I<sub>C</sub> = 3.35mA, I<sub>E</sub> = 3.35mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 33.52mA, I<sub>C</sub> = 3.35mA, I<sub>E</sub> = 3.35mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 33.52μA, I<sub>C</sub> = 3.35mA, I<sub>E</sub> = 3.35mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 33.52mA, I<sub>C</sub> = 3.35mA, I<sub>E</sub> = 3.35mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_72.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 64.67μA, I<sub>C</sub> = 6.47mA, I<sub>E</sub> = 6.47mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 64.67mA, I<sub>C</sub> = 6.47mA, I<sub>E</sub> = 6.47mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 64.67μA, I<sub>C</sub> = 6.47mA, I<sub>E</sub> = 6.47mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 64.67mA, I<sub>C</sub> = 6.47mA, I<sub>E</sub> = 6.47mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_73.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 51.08μA, I<sub>C</sub> = 5.11mA, I<sub>E</sub> = 5.11mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 51.08mA, I<sub>C</sub> = 5.11mA, I<sub>E</sub> = 5.11mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 51.08μA, I<sub>C</sub> = 5.11mA, I<sub>E</sub> = 5.11mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 51.08mA, I<sub>C</sub> = 5.11mA, I<sub>E</sub> = 5.11mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_74.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 42.21μA, I<sub>C</sub> = 4.22mA, I<sub>E</sub> = 4.22mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 42.21mA, I<sub>C</sub> = 4.22mA, I<sub>E</sub> = 4.22mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 42.21μA, I<sub>C</sub> = 4.22mA, I<sub>E</sub> = 4.22mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 42.21mA, I<sub>C</sub> = 4.22mA, I<sub>E</sub> = 4.22mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "Indicar qué tipo de configuración es, y además calcular I<sub>B</sub>, I<sub>C</sub> y V<sub>E</sub>, teniendo un β = 100.",
    correctAnswerIndex: 0,
    imageUrl:
      "https://res.cloudinary.com/diajz7kwe/image/upload/v1731688698/questions_images/question_75.png",
    options: [
      {
        content:
          "Estabilizada, I<sub>B</sub> = 35.96μA, I<sub>C</sub> = 3.60mA, I<sub>E</sub> = 3.60mA",
        type: "formatted",
      },
      {
        content:
          "Estabilizada, I<sub>B</sub> = 35.96mA, I<sub>C</sub> = 3.60mA, I<sub>E</sub> = 3.60mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 35.96μA, I<sub>C</sub> = 3.60mA, I<sub>E</sub> = 3.60mA",
        type: "formatted",
      },
      {
        content:
          "Fija, I<sub>B</sub> = 35.96mA, I<sub>C</sub> = 3.60mA, I<sub>E</sub> = 3.60mA",
        type: "formatted",
      },
    ],
  },
  {
    text: "¿Qué funciones cumplen las subestaciones en los sistemas eléctricos de potencia?",
    correctAnswerIndex: 2,
    options: [
      { content: "Producir energía eléctrica para el sistema.", type: "text" },
      {
        content:
          "Convertir energía eléctrica en mecánica para su distribución.",
        type: "text",
      },
      {
        content:
          "Modificar y establecer los niveles de tensión para facilitar la transmisión, distribución y uso final de la energía eléctrica.",
        type: "text",
      },
      {
        content:
          "Controlar exclusivamente la distribución en sistemas urbanos.",
        type: "text",
      },
    ],
  },
  {
    text: "Las subestaciones eléctricas se clasifican según:",
    correctAnswerIndex: 2,
    options: [
      { content: "La cantidad de transformadores que poseen.", type: "text" },
      { content: "La capacidad de sus barras colectoras.", type: "text" },
      { content: "Su función y su tipo de instalación.", type: "text" },
      { content: "El tipo de interruptores utilizados.", type: "text" },
    ],
  },
  {
    text: "¿A qué rango de voltaje funcionan las subestaciones receptoras secundarias?",
    correctAnswerIndex: 0,
    options: [
      { content: "6.6, 13.8, 23 y 34.5 kV", type: "text" },
      { content: "2.2, 4.4, 11 y 25 kV", type: "text" },
      { content: "10, 20, 30 y 40 kV", type: "text" },
      { content: "7.5, 15, 25 y 35 kV", type: "text" },
    ],
  },
  {
    text: "¿Cuál es la función de una doble barra más barra de transferencia?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Conectarse a cualquiera de las dos barras y aislar los interruptores principales para mantenimiento.",
        type: "text",
      },
      {
        content: "Incrementar la capacidad de transmisión de energía.",
        type: "text",
      },
      {
        content: "Reducir las pérdidas en la transmisión eléctrica.",
        type: "text",
      },
      {
        content: "Facilitar la conexión de cargas industriales.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Qué permiten las barras con by-pass?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "La continuidad de los circuitos conectados a la barra, aislando fallas.",
        type: "text",
      },
      { content: "Reducir la tensión en caso de sobrecarga.", type: "text" },
      {
        content: "Repartir equitativamente la carga entre los transformadores.",
        type: "text",
      },
      {
        content: "Controlar el flujo eléctrico hacia las redes secundarias.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Qué son los enclavamientos?",
    correctAnswerIndex: 2,
    options: [
      {
        content:
          "Dispositivos que desconectan automáticamente la subestación ante una falla.",
        type: "text",
      },
      {
        content:
          "Interruptores automáticos que controlan las barras colectoras.",
        type: "text",
      },
      {
        content:
          "Secuencias de procedimientos que evitan la apertura de seccionadores bajo carga.",
        type: "text",
      },
      {
        content: "Sistemas de conexión rápida entre transformadores.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Cuál es el propósito de los sistemas de protección en una subestación eléctrica?",
    correctAnswerIndex: 1,
    options: [
      {
        content:
          "Reducir las pérdidas de energía en las redes de distribución.",
        type: "text",
      },
      {
        content:
          "Proteger las instalaciones y el personal de posibles daños causados por fallas eléctricas.",
        type: "text",
      },
      {
        content: "Controlar la energía reactiva en sistemas eléctricos.",
        type: "text",
      },
      {
        content: "Optimizar el flujo eléctrico en las barras colectoras.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Qué sucede en la subestación eléctrica cuando existe una falla en las barras simples?",
    correctAnswerIndex: 1,
    options: [
      {
        content: "Aumenta la eficiencia de los circuitos secundarios.",
        type: "text",
      },
      {
        content:
          "Prolongada interrupción del servicio en todos los puntos de conexión a la barra.",
        type: "text",
      },
      { content: "Las barras secundarias asumen la carga.", type: "text" },
      {
        content: "Se reduce la capacidad de generación de energía.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Por qué son necesarios los disyuntores en una subestación?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Para activar o desconectar circuitos eléctricos en condiciones normales o de fallas.",
        type: "text",
      },
      {
        content: "Para medir la corriente en los transformadores.",
        type: "text",
      },
      { content: "Para controlar el flujo de energía reactiva.", type: "text" },
      {
        content: "Para regular el voltaje de las barras colectoras.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Qué son los transformadores de potencial (PT)?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Instrumentos que transforman el voltaje de un valor mayor a uno menor para operar elementos de medición y control.",
        type: "text",
      },
      {
        content:
          "Transformadores que regulan la potencia activa en redes secundarias.",
        type: "text",
      },
      {
        content:
          "Dispositivos que convierten corriente alterna en corriente continua.",
        type: "text",
      },
      {
        content:
          "Equipos que reducen la resistencia en circuitos de alta tensión.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Cuál de estas definiciones pertenece a un transformador de corriente (TC)?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Utiliza el campo magnético generado por una corriente alterna para inducir una corriente proporcional en un segundo circuito.",
        type: "text",
      },
      {
        content:
          "Dispositivo que reduce el voltaje para la operación de equipos de control.",
        type: "text",
      },
      {
        content:
          "Instrumento que regula el flujo eléctrico en barras colectoras.",
        type: "text",
      },
      {
        content: "Aparato que genera campos magnéticos en sistemas eléctricos.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Cuál es la función de los transformadores de corriente (TC) en una subestación eléctrica?",
    correctAnswerIndex: 0,
    options: [
      { content: "Medir la corriente.", type: "text" },
      { content: "Regular el voltaje en circuitos secundarios.", type: "text" },
      { content: "Incrementar la potencia reactiva.", type: "text" },
      { content: "Reducir las pérdidas eléctricas.", type: "text" },
    ],
  },
  {
    text: "¿Qué tipo de subestación se utiliza para aumentar el voltaje de la energía eléctrica?",
    correctAnswerIndex: 2,
    options: [
      { content: "Subestación reductora.", type: "text" },
      { content: "Subestación intermedia.", type: "text" },
      { content: "Subestación elevadora.", type: "text" },
      { content: "Subestación de transferencia.", type: "text" },
    ],
  },
  {
    text: "¿Qué tipo de subestación se utiliza para conectar una central a la red eléctrica?",
    correctAnswerIndex: 2,
    options: [
      { content: "Subestación reductora.", type: "text" },
      { content: "Subestación receptora.", type: "text" },
      { content: "Subestación elevadora.", type: "text" },
      { content: "Subestación de distribución.", type: "text" },
    ],
  },
  {
    text: "¿Cuál de estas definiciones corresponde a 'burden'?",
    correctAnswerIndex: 1,
    options: [
      {
        content: "Es la capacidad de carga de un transformador de corriente.",
        type: "text",
      },
      {
        content:
          "Es la potencia del circuito conectado al secundario del transformador.",
        type: "text",
      },
      {
        content: "Es el flujo eléctrico que pasa por un circuito primario.",
        type: "text",
      },
      {
        content: "Es la resistencia equivalente de un circuito de medición.",
        type: "text",
      },
    ],
  },
];

export default questions;
