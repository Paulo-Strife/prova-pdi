import type { ExamState } from '../types';
import { PASSING_PERCENT } from '../config';
import { scoreExam } from '../utils/exam';
import { QuestionText } from '../components/QuestionText';

const decimal = (n: number) => n.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
export function ResultScreen({ exam, onRestart }: { exam: ExamState; onRestart: () => void }) {
  const score = scoreExam(exam.questions, exam.answers);
  return <main id="main-content" className="result-layout">
    <section className="result-card"><div className="result-summary"><div className="eyebrow">SIMULADO CONCLUÍDO</div><h1 tabIndex={-1}>Cada tentativa é um avanço.</h1><p className="lead">Agora, transforme suas respostas em aprendizado.</p><span className={`result-status ${score.passed ? 'success' : 'failure'}`}>{score.passed ? '✓ Aprovado' : 'Reprovado'} · mínimo de {PASSING_PERCENT}%</span><div className="result-actions"><button className="primary" onClick={() => { const heading = document.getElementById('review-heading'); heading?.focus({ preventScroll: true }); heading?.scrollIntoView({ behavior: 'smooth' }); }}>Revisar Questões ↓</button><button className="secondary" onClick={onRestart}>Refazer Simulado</button></div></div><div className="score-display"><strong>{decimal(score.percent)}<span>%</span></strong><span>{score.correct} de {score.total} acertos</span><span className="grade">Nota {decimal(score.grade)} / 10</span></div>
      <dl className="score-details"><div><dt>Acertos</dt><dd className="good-text">{score.correct}</dd></div><div><dt>Erros</dt><dd className="bad-text">{score.wrong}</dd></div><div><dt>Em branco</dt><dd>{score.blank}</dd></div></dl>
    </section>
    <div className="review-header"><div><div className="eyebrow">ENTENDA SUAS RESPOSTAS</div><h2 id="review-heading" tabIndex={-1}>Revisão da tentativa</h2></div><span className="muted">{exam.questions.length} questões</span></div>
    <div className="review-list">{exam.questions.map((q, i) => {
      const chosen = exam.answers[i];
      const correct = chosen === q.correctIndex;
      return <article key={q.id} className="review-card"><div className="review-card-heading"><h3>Questão {i + 1}</h3><span className={`review-status ${chosen === null ? 'blank' : correct ? 'success' : 'failure'}`}>{chosen === null ? 'Em branco' : correct ? '✓ Correta' : '✕ Incorreta'}</span></div><span className="topic">{q.topic}</span><QuestionText text={q.question} /><ul className="review-options">{q.options.map((option, index) => <li key={index} className={index === q.correctIndex ? 'correct-option' : index === chosen ? 'wrong-option' : ''}><span className="option-letter">{String.fromCharCode(65 + index)}</span><div>{option}{index === q.correctIndex && <strong className="answer-caption">✓ Resposta correta{index === chosen ? ' · Sua resposta' : ''}</strong>}{index === chosen && index !== q.correctIndex && <strong className="answer-caption">✕ Sua resposta</strong>}</div></li>)}</ul>{chosen === null && <p className="muted">Você não marcou uma alternativa nesta questão.</p>}
        {q.explanation && <div className="explanation"><strong>Por quê?</strong><p>{q.explanation}</p></div>}
        <details className="editorial"><summary>Origem e notas da questão</summary><p>{q.origin}</p>{q.editorialNote && <p>{q.editorialNote}</p>}{!!q.sources?.length && <ul>{q.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a></li>)}</ul>}</details>
      </article>;
    })}</div>
    <div className="review-end"><h2>Pronto para mais uma rodada?</h2><p>Outra seleção de questões. Uma nova oportunidade de aprender.</p><button className="primary" onClick={onRestart}>Refazer Simulado →</button></div>
  </main>;
}
