import { describe, expect, it } from 'vitest';
import { buildExam, scoreExam, shuffle, validateBank } from './exam';
import { questions, pendingQuestions } from '../data/questions';
import type { Question } from '../types';

function seeded(seed: number) {
  return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
}
const bank: Question[] = Array.from({ length: 40 }, (_, i) => ({ id: i + 1, question: `Questão ${i}`, options: [`Correta ${i}`, `Errada ${i}`, `Outra ${i}`, `Quarta ${i}`], correctIndex: 0 }));

describe('banco editorial', () => {
  it('contém 44 questões válidas e preserva seis lacunas', () => {
    expect(questions).toHaveLength(44);
    expect(validateBank(questions)).toEqual([]);
    expect(pendingQuestions.map(q => q.id).sort((a,b) => a-b)).toEqual([31,46,47,48,49,50]);
    expect(questions.some(q => pendingQuestions.some(p => p.id === q.id))).toBe(false);
  });
  it('não contém marcadores de transcrição incompleta ou fórmulas LaTeX cruas', () => {
    for (const q of questions) {
      expect(q.question).not.toMatch(/não transcrit|Enunciado incompleto|Alternativas não constam|\\\[|\\begin/);
      expect(q.explanation).toBeTruthy();
    }
  });
  it('detecta dados malformados e IDs repetidos', () => {
    expect(validateBank([{...bank[0], question:'', options:['',''], correctIndex:9}, bank[0]])).toHaveLength(5);
  });
});

describe('preparação da tentativa', () => {
  it.each([0, 3, 30, 40])('usa o total correto com banco de %i itens', size => {
    const result = buildExam(bank.slice(0, size), 30, seeded(size));
    expect(result).toHaveLength(Math.min(size, 30));
    expect(new Set(result.map(q => q.id)).size).toBe(result.length);
  });
  it('não modifica objetos nem alternativas do banco', () => {
    const before = structuredClone(bank);
    const result = buildExam(bank, 30, seeded(12));
    expect(bank).toEqual(before);
    expect(result[0]).not.toBe(bank.find(q => q.id === result[0].id));
    result[0].options[0] = 'Alteração local';
    expect(bank).toEqual(before);
  });
  it('mantém a resposta correta em 100 embaralhamentos, inclusive com cinco opções', () => {
    for (let seed = 0; seed < 100; seed++) {
      const exam = buildExam(questions, 30, seeded(seed));
      for (const q of exam) {
        const original = questions.find(item => item.id === q.id)!;
        expect(q.options[q.correctIndex]).toBe(original.options[original.correctIndex]);
        expect([...q.options].sort()).toEqual([...original.options].sort());
      }
    }
  });
  it('embaralha também um banco com exatamente 30 itens', () => {
    expect(buildExam(bank.slice(0, 30), 30, seeded(10)).map(q => q.id)).not.toEqual(bank.slice(0, 30).map(q => q.id));
  });
  it('produz tentativas distintas com fontes de aleatoriedade diferentes', () => {
    expect(buildExam(bank, 30, seeded(1))).not.toEqual(buildExam(bank, 30, seeded(2)));
  });
  it('shuffle retorna uma cópia, incluindo arrays vazios e unitários', () => {
    expect(shuffle([])).toEqual([]);
    expect(shuffle([1])).toEqual([1]);
    const items = [1, 2, 3];
    expect(shuffle(items, () => 0)).toEqual([2, 3, 1]);
    expect(items).toEqual([1, 2, 3]);
  });
});

describe('correção', () => {
  const exam = bank.slice(0, 30);
  it('calcula todas corretas', () => {
    expect(scoreExam(exam, Array(30).fill(0))).toEqual({total:30, correct:30, wrong:0, blank:0, percent:100, grade:10, passed:true});
  });
  it('calcula todas erradas', () => {
    expect(scoreExam(exam, Array(30).fill(1))).toMatchObject({correct:0, wrong:30, blank:0, percent:0, passed:false});
  });
  it('separa brancos de respostas erradas, sem pontuar brancos', () => {
    expect(scoreExam(exam, [0, 1, ...Array(28).fill(null)])).toMatchObject({correct:1, wrong:1, blank:28});
    expect(scoreExam(exam, Array(30).fill(null))).toMatchObject({correct:0, wrong:0, blank:30, percent:0});
  });
  it('aprova com 21/30 e reprova com 20/30', () => {
    expect(scoreExam(exam, [...Array(21).fill(0), ...Array(9).fill(1)])).toMatchObject({percent:70, grade:7, passed:true});
    expect(scoreExam(exam, [...Array(20).fill(0), ...Array(10).fill(1)]).passed).toBe(false);
  });
  it('usa o total efetivo, sem arredondar antes de decidir a aprovação', () => {
    expect(scoreExam(bank.slice(0, 10), [...Array(7).fill(0), null, null, 1])).toMatchObject({percent:70, grade:7, passed:true});
    expect(scoreExam(bank.slice(0, 3), [0, 0, null]).passed).toBe(false);
  });
  it('não gera NaN nem aprovação para banco vazio', () => {
    expect(scoreExam([], [])).toEqual({total:0, correct:0, wrong:0, blank:0, percent:0, grade:0, passed:false});
  });
});
