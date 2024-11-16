"use server";

import { Question } from "@/interfaces/question.types";
import prisma from "@/lib/prisma";

export const getQuestions = async (): Promise<Question[]> => {
  try {
    const questions = await prisma.question.findMany({
      include: {
        options: {
          select: {
            content: true,
            type: true,
            id: true,
          },
        },
      },
    });

    // Aleatorizar y limitar al número solicitado
    // const randomQuestions = questions.sort(() => 0.5 - Math.random());
    return questions.map((question) => ({
      id: question.id,
      text: question.text,
      image: question.imageUrl,
      correctAnswer: question.correctAnswer,
      options: question.options.map((option) => ({
        content: option.content,
        type: option.type,
        id: option.id,
      })),
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
};
