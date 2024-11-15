import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Question } from "@/interfaces/question.types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  isCorrect: boolean | null;
  onAnswer: (index: number) => void;
  currentQuestionIndex: number;
  totalQuestions: number;
  nextQuestion: () => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onAnswer,
  currentQuestionIndex,
  totalQuestions,
  nextQuestion,
}) => {
  console.log(question);
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Quiz Interactivo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">
          <span dangerouslySetInnerHTML={{ __html: question.text }} />
        </h2>
        {question.image && (
          <div className="mb-4 flex justify-center">
            <Image
              src={question.image}
              alt="Imagen de la pregunta"
              width={200}
              height={130}
              className="rounded-lg"
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((option, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                className={`w-full text-left h-auto py-3 px-4 ${
                  selectedAnswer !== null
                    ? index === question.correctAnswer
                      ? "bg-green-500 hover:bg-green-600"
                      : selectedAnswer === index
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-primary hover:bg-primary/90"
                    : "bg-primary hover:bg-primary/90"
                }`}
                onClick={() => onAnswer(index)}
                disabled={selectedAnswer !== null}
              >
                {option.type === "formatted" ? (
                  <span dangerouslySetInnerHTML={{ __html: option.content }} />
                ) : (
                  <span>{option.content}</span>
                )}
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <p className="text-sm text-muted-foreground">
          Pregunta {currentQuestionIndex + 1} de {totalQuestions}
        </p>
        {selectedAnswer !== null && (
          <Button onClick={nextQuestion}>
            {currentQuestionIndex < totalQuestions - 1
              ? "Siguiente pregunta"
              : "Finalizar quiz"}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
