"use client";

import { useState } from "react";
import { QuizHome } from "@/components/QuizHome";
import { QuestionCard } from "@/components/QuestionCard";
import { QuizCompletion } from "@/components/QuizCompletion";
import { Question } from "@/interfaces/question.types";
import { getQuestions } from "@/actions/questions";

export const Simulator = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);

  const loadQuestions = async () => {
    const newQuestions = await getQuestions();
    setQuestions(newQuestions);
  };

  const startQuiz = async () => {
    await loadQuestions();
    setQuizStarted(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
    setQuestions([]);
  };

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div>
      {!quizStarted ? (
        <QuizHome onStart={startQuiz} />
      ) : quizCompleted ? (
        <QuizCompletion
          score={score}
          totalQuestions={questions.length}
          onReset={resetQuiz}
        />
      ) : (
        <QuestionCard
          question={questions[currentQuestion]}
          selectedAnswer={selectedAnswer}
          isCorrect={null}
          onAnswer={handleAnswer}
          currentQuestionIndex={currentQuestion}
          totalQuestions={questions.length}
          nextQuestion={nextQuestion}
        />
      )}
    </div>
  );
};
