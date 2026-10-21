import type { ExamState } from '../types';
import { QuestionText } from '../components/QuestionText';

export function ExamScreen({ exam, onAnswer, onNavigate, onFinish }: { exam: ExamState; onAnswer: (answer: number | null) => void; onNavigate: (index: number) => void; onFinish: () => void }) {
  const { questions, answers, current } = exam;
  const q = questions[current];
  const completed = answers.filter(answer => answer !== null).length;
  const isLastQuestion = current === questions.length - 1;
  return <main id="main-content" className="exam-layout">
    <div className="exam-heading">
      <div><div className="eyebrow">SIMULADO EM ANDAMENTO</div><h1 id="question-heading" tabIndex={-1}>Questão {current + 1} <span>de {questions.length}</span></h1></div>
      <div className="progress-area"><span aria-live="polite">{completed} de {questions.length} respondidas</span><progress aria-label="Questões respondidas" value={completed} max={questions.length} /></div>
    </div>
    <section className="question-card" aria-labelledby="question-heading">
      <div className="question-meta"><span className="topic">{q.topic}</span><span className="muted">Escolha uma alternativa</span></div>
      <QuestionText text={q.question} />
      <fieldset className="options"><legend className="sr-only">Alternativas da questão {current + 1}</legend>
        {q.options.map((option, index) => <label key={`${q.id}-${index}`} className={`option ${answers[current] === index ? 'selected' : ''}`}>
          <input type="radio" name={`question-${q.id}`} value={index} checked={answers[current] === index} onChange={() => onAnswer(index)} />
          <span className="option-letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span className="option-copy"><span className="sr-only">{String.fromCharCode(65 + index)}: </span>{option}</span><span className="radio-indicator" aria-hidden="true" />
        </label>)}
      </fieldset>
      <button className="text-button clear-button" disabled={answers[current] === null} onClick={() => onAnswer(null)}>Limpar resposta</button>
      <div className="question-controls"><button className="secondary" disabled={current === 0} onClick={() => onNavigate(current - 1)}>← Anterior</button><span className="muted">{current + 1} / {questions.length}</span><button className="primary" onClick={isLastQuestion ? onFinish : () => onNavigate(current + 1)}>{isLastQuestion ? 'Finalizar Prova' : 'Próxima →'}</button></div>
    </section>
    <aside className="exam-aside">
      <section className="navigation-card"><h2>Suas questões</h2><p className="muted">Vá direto para qualquer questão.</p>
        <nav className="question-grid" aria-label="Navegação entre questões">{questions.map((item, i) => <button key={item.id} className={`grid-item ${answers[i] !== null ? 'answered' : ''} ${i === current ? 'current' : ''}`} aria-current={i === current ? 'step' : undefined} aria-label={`Questão ${i + 1}, ${answers[i] === null ? 'não respondida' : 'respondida'}`} onClick={() => onNavigate(i)}>{i + 1}</button>)}</nav>
        <div className="grid-legend"><span><i className="legend-dot answered" />Respondida</span><span><i className="legend-dot" />Em branco</span><span><i className="legend-dot current" />Atual</span></div>
        <div className="finish-area"><p><strong>{questions.length - completed}</strong> {questions.length - completed === 1 ? 'questão em branco' : 'questões em branco'}</p><button className="primary" onClick={onFinish}>Finalizar Prova</button><span className="muted">O gabarito aparece só no final.</span></div>
      </section>
      <p className="study-note">Pode mudar de ideia.<br />Suas respostas ficam salvas enquanto você navega nesta tentativa.</p>
    </aside>
  </main>;
}
