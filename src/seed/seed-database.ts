import prisma from "../lib/prisma";
import questions from "./seed";
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

(() => {
  main();
})(); // IIFE
