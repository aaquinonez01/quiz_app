import questions, { Question } from "./seed";
import prisma from "../lib/prisma";

const newQuestions: Question[] = [
  {
    text: "¿Qué es la resonancia eléctrica en líneas de transmisión de alto voltaje?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Una condición en la que la frecuencia de la fuente coincide con la frecuencia natural de la línea.",
        type: "text",
      },
      { content: "Un fenómeno de disipación de energía.", type: "text" },
      {
        content: "Un aumento de la corriente debido a la carga inductiva.",
        type: "text",
      },
      {
        content: "Una oscilación de corriente por cortocircuito.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Qué se entiende como transitorios eléctricos?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Se definen como perturbaciones aleatorias de alta energía y de muy corta duración, que no pueden ser detectados y/o despejados por los dispositivos de protección instalados, se dividen en dos subcategorías: transitorios impulsivos y transitorios oscilatorios.",
        type: "text",
      },
      {
        content: "Variaciones permanentes de tensión en circuitos eléctricos.",
        type: "text",
      },
      {
        content:
          "Oscilaciones de corriente en transformadores de alta tensión.",
        type: "text",
      },
      {
        content: "Cortocircuitos temporales en redes secundarias.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Cuáles son los tipos de transitorios eléctricos que se pueden presentar en un sistema eléctrico de potencia?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Transitorios eléctricos impulsivos, Transitorios eléctricos Oscilatorios",
        type: "text",
      },
      {
        content: "Transitorios de cortocircuito y de sobrevoltaje.",
        type: "text",
      },
      { content: "Transitorios por saturación y resonancia.", type: "text" },
      { content: "Transitorios térmicos y magnéticos.", type: "text" },
    ],
  },
  {
    text: "¿Qué es la compatibilidad electromagnética (EMC) en el diseño de sistemas de alto voltaje?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Asegurar que los sistemas sean inmunes a interferencias electromagnéticas.",
        type: "text",
      },
      {
        content: "Regular el flujo de corriente en transformadores.",
        type: "text",
      },
      {
        content: "Aumentar la resistencia térmica de los conductores.",
        type: "text",
      },
      { content: "Disminuir las pérdidas por sobrecarga.", type: "text" },
    ],
  },
  {
    text: "¿Por qué es importante considerar la compatibilidad electromagnética en el diseño de sistemas de alto voltaje?",
    correctAnswerIndex: 0,
    options: [
      {
        content: "Para garantizar una operación segura y confiable.",
        type: "text",
      },
      { content: "Para reducir el consumo de energía.", type: "text" },
      {
        content: "Para incrementar la capacidad reactiva del sistema.",
        type: "text",
      },
      { content: "Para reducir las pérdidas por calentamiento.", type: "text" },
    ],
  },
  {
    text: "¿Cuáles son los tratamientos del suelo para obtener resistividad más baja?",
    correctAnswerIndex: 3,
    options: [
      { content: "Uso de cloruro de calcio y tubos de acero.", type: "text" },
      {
        content: "Colocación de varillas adicionales sin material conductor.",
        type: "text",
      },
      { content: "Incrementar la cantidad de agua en el suelo.", type: "text" },
      { content: "Todas las opciones.", type: "text" },
    ],
  },
  {
    text: "¿En qué consiste el método de Wenner?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Es un arreglo tetraelectródico para medir la resistividad del suelo.",
        type: "text",
      },
      {
        content: "Un sistema para medir la corriente en redes de alta tensión.",
        type: "text",
      },
      {
        content:
          "Un método para analizar las pérdidas eléctricas en transformadores.",
        type: "text",
      },
      {
        content:
          "Un procedimiento para regular la frecuencia de una línea de transmisión.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Por qué es importante analizar la impedancia característica de una línea de transmisión de alto voltaje?",
    correctAnswerIndex: 0,
    options: [
      {
        content: "Para lograr una transmisión eficiente de energía",
        type: "text",
      },
      { content: "Para reducir las pérdidas por calor.", type: "text" },
      { content: "Para estabilizar las barras colectoras.", type: "text" },
      {
        content: "Para reducir la interferencia electromagnética.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Qué es el efecto corona en sistemas de alto voltaje y por qué es importante controlarlo?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "Una descarga eléctrica en forma de chispa que puede causar pérdida de energía y daños en la línea.",
        type: "text",
      },
      {
        content: "Un aumento de la corriente en líneas secundarias.",
        type: "text",
      },
      {
        content: "Una condición normal en sistemas de transmisión.",
        type: "text",
      },
      {
        content: "Un fenómeno que mejora la conductividad de los conductores.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Qué papel desempeñan las corrientes parásitas en un transformador y por qué es importante considerarlas en el diseño?",
    correctAnswerIndex: 0,
    options: [
      {
        content: "Puede causar resonancia eléctrica y dañar el sistema.",
        type: "text",
      },
      { content: "Reducen la eficiencia del sistema.", type: "text" },
      {
        content: "Aumentan la capacidad de carga del transformador.",
        type: "text",
      },
      { content: "Ayudan a regular la corriente alterna.", type: "text" },
    ],
  },
  {
    text: "Si tienes un cable de 10 metros de longitud, una resistencia de 0.2 ohmios y una corriente de 5 amperios, ¿cuál es la caída de voltaje en el cable?",
    correctAnswerIndex: 0,
    options: [
      { content: "10 V", type: "text" },
      { content: "8 V", type: "text" },
      { content: "9 V", type: "text" },
      { content: "12 V", type: "text" },
    ],
  },
  {
    text: "¿Cuál de las siguientes afirmaciones es cierta acerca del diseño de puesta a tierra en sistemas de alto voltaje?",
    correctAnswerIndex: 0,
    options: [
      {
        content:
          "La puesta a tierra debe ser diseñada cuidadosamente para evitar corrientes peligrosas.",
        type: "text",
      },
      {
        content: "La puesta a tierra reduce las pérdidas eléctricas.",
        type: "text",
      },
      { content: "Mejora la capacidad de transmisión.", type: "text" },
      { content: "Disminuye el flujo reactivo.", type: "text" },
    ],
  },
  {
    text: "¿Qué funciones cumple el sistema puesto a tierra en sistemas eléctricos de potencia?",
    correctAnswerIndex: 3,
    options: [
      { content: "Proteger contra descargas atmosféricas.", type: "text" },
      {
        content: "Reducir las interferencias electromagnéticas.",
        type: "text",
      },
      {
        content: "Garantizar la operación segura de los equipos.",
        type: "text",
      },
      { content: "Todas las respuestas son correctas.", type: "text" },
    ],
  },
  {
    text: "¿Qué efectos pueden tener las ondas errantes en sistemas de transmisión de alto voltaje?",
    correctAnswerIndex: 1,
    options: [
      { content: "Reducen las pérdidas por calor.", type: "text" },
      {
        content: "Aumento de la interferencia electromagnética.",
        type: "text",
      },
      { content: "Mejoran la estabilidad de la red.", type: "text" },
      {
        content: "Incrementan la eficiencia de los transformadores.",
        type: "text",
      },
    ],
  },
  {
    text: "¿Cuál es el objetivo principal del control de la ferroresonancia en transformadores eléctricos?",
    correctAnswerIndex: 0,
    options: [
      {
        content: "Evitar la saturación del núcleo del transformador.",
        type: "text",
      },
      { content: "Incrementar la capacidad térmica del núcleo.", type: "text" },
      {
        content: "Reducir las pérdidas en las barras colectoras.",
        type: "text",
      },
      {
        content: "Regular la corriente alterna en sistemas secundarios.",
        type: "text",
      },
    ],
  },
];

async function main() {
  console.log("Seeding database...");

  await Promise.all([prisma.option.deleteMany(), prisma.question.deleteMany()]);

  // Agregar opciones a la base de datos
  const questionsData = questions.map((question) => {
    const { correctAnswerIndex, text, imageUrl } = question;
    return {
      text: text,
      correctAnswer: correctAnswerIndex,
      imageUrl: imageUrl,
    };
  });

  await prisma.question.createMany({
    data: questionsData,
  });
  // Obtener preguntas de la base de datos
  const questionsDB = await prisma.question.findMany();

  //Agregar opciones a la base de datos

  const optionsData = questionsDB.flatMap((questionRecord, index) => {
    const options = questions[index].options.map((option) => ({
      questionId: questionRecord.id,
      type: option.type,
      content: option.content,
    }));
    return options;
  });

  await prisma.option.createMany({
    data: optionsData,
  });

  //Terminar de agregar datos a la base de datos
  console.log("Database seeded!");
}

async function addNewQuestions() {
  console.log("Adding new questions...");

  // Insertar las nuevas preguntas en la base de datos
  const newQuestionsData = newQuestions.map((question) => {
    const { correctAnswerIndex, text, imageUrl } = question;
    return {
      text: text,
      correctAnswer: correctAnswerIndex,
      imageUrl: imageUrl,
    };
  });

  // Crear nuevas preguntas
  await prisma.question.createMany({
    data: newQuestionsData,
  });

  // Obtener las nuevas preguntas desde la base de datos
  const questionsDB = await prisma.question.findMany({
    where: {
      id: { gte: 101 }, // Solo preguntas nuevas
    },
  });

  // Relacionar opciones con las nuevas preguntas
  const optionsData = questionsDB.flatMap((questionRecord, index) => {
    const options = newQuestions[index].options.map((option) => ({
      questionId: questionRecord.id,
      type: option.type,
      content: option.content,
    }));
    return options;
  });

  // Crear nuevas opciones
  await prisma.option.createMany({
    data: optionsData,
  });

  console.log("New questions added successfully!");
}

(() => {
  addNewQuestions();
})(); // IIFE
