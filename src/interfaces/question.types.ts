export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: number;
  image?: string | null;
}

export interface Option {
  id: number;
  type: string;
  content: string;
}
