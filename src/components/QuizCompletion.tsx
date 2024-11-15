import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, RefreshCw } from "lucide-react";

interface QuizCompletionProps {
  score: number;
  totalQuestions: number;
  onReset: () => void;
}

export const QuizCompletion: React.FC<QuizCompletionProps> = ({
  score,
  totalQuestions,
  onReset,
}) => {
  const getFeedbackMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) return "¡Perfecto! Has dominado este quiz.";
    if (percentage >= 80) return "¡Excelente trabajo! Casi perfecto.";
    if (percentage >= 60) return "Buen esfuerzo. Hay espacio para mejorar.";
    return "No te desanimes. Inténtalo de nuevo para mejorar tu puntuación.";
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          ¡Quiz Completado!
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center">
        <Trophy className="w-24 h-24 mx-auto mb-6 text-yellow-500" />
        <h2 className="text-2xl font-bold mb-4">Tu puntuación final</h2>
        <p className="text-4xl font-bold mb-6 text-primary">
          {score} de {totalQuestions}
        </p>
        <p className="text-xl mb-8">{getFeedbackMessage()}</p>
        <Button onClick={onReset} size="lg" className="text-lg px-8 py-6">
          <RefreshCw className="mr-2 h-5 w-5" /> Volver a intentar
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuizCompletion;
