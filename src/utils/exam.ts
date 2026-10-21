import type { Question } from '../types';
import { PASSING_PERCENT } from '../config';

export function shuffle<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function buildExam(bank: readonly Question[], size: number, random: () => number = Math.random): Question[] {
  return shuffle(bank, random).slice(0, Math.max(0, Math.floor(size))).map(q => {
    const indices = shuffle(q.options.map((_, index) => index), random);
    return { ...q, options: indices.map(index => q.options[index]), correctIndex: indices.indexOf(q.correctIndex) };
  });
}

export function scoreExam(questions: readonly Question[], answers: readonly (number | null)[]) {
  const total = questions.length;
  const correct = questions.filter((q, i) => answers[i] === q.correctIndex).length;
  const blank = questions.filter((_, i) => answers[i] == null).length;
  const percent = total ? correct / total * 100 : 0;
  return { total, correct, blank, wrong: total - correct - blank, percent,
    grade: percent / 10, passed: total > 0 && percent >= PASSING_PERCENT };
}

export function validateBank(bank: readonly Question[]): string[] {
  const errors: string[] = [];
  const ids = new Set<number>();
  for (const q of bank) {
    if (ids.has(q.id)) errors.push(`ID duplicado: ${q.id}`);
    ids.add(q.id);
    if (!q.question.trim()) errors.push(`Enunciado vazio: ${q.id}`);
    if (q.options.length < 2 || q.options.some(o => !o.trim())) errors.push(`Alternativas inválidas: ${q.id}`);
    if (new Set(q.options).size !== q.options.length) errors.push(`Alternativas duplicadas: ${q.id}`);
    if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.options.length) errors.push(`Gabarito inválido: ${q.id}`);
  }
  return errors;
}
