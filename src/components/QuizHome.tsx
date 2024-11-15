import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuizFormProps {
  onStart: () => void;
  onSetQuestionCount: (count: number) => void;
}

export const QuizHome: React.FC<QuizFormProps> = ({
  onStart,
  onSetQuestionCount,
}) => {
  const [selectedCount, setSelectedCount] = useState<number>(5); // Valor por defecto

  const handleCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setSelectedCount(value);
    }
  };

  const handleStart = () => {
    onSetQuestionCount(selectedCount);
    onStart();
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">
          Bienvenido al Quiz
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <p className="text-xl">
          Selecciona la cantidad de preguntas que deseas responder:
        </p>
        <Input
          type="number"
          min={1}
          max={20}
          value={selectedCount}
          onChange={handleCountChange}
          className="text-center"
        />
        <Button
          onClick={handleStart}
          size="lg"
          className="text-lg px-8 py-6 w-full"
        >
          Comenzar Quiz
        </Button>
      </CardContent>
    </Card>
  );
};
