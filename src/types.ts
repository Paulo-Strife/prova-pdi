export type Source = { title: string; url: string };
export type Question = {
  id: number;
  topic?: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation?: string;
  origin?: string;
  editorialNote?: string;
  sources?: Source[];
};
export type ExamState = {
  questions: Question[];
  answers: (number | null)[];
  current: number;
  startedAt: number;
};
