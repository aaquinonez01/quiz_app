import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuizFormProps {
  onStart: () => void;
}

export const QuizHome: React.FC<QuizFormProps> = ({ onStart }) => {
  const handleStart = () => {
    // onSetQuestionCount(selectedCount);
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
          Este quiz contiene 115 preguntas de opción múltiple.
        </p>

        {/* <p className="text-xl">
          Selecciona la cantidad de preguntas que deseas responder:
        </p> */}
        {/* <Input
          type="number"
          min={1}
          max={115}
          value={selectedCount}
          onChange={handleCountChange}
          className="text-center"
        /> */}
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
