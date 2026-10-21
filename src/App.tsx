import { useEffect, useState } from 'react';
import type { ExamState } from './types';
import { EXAM_SIZE } from './config';
import { questions, pendingQuestions } from './data/questions';
import { buildExam, validateBank } from './utils/exam';
import { StartScreen } from './screens/StartScreen';
import { ExamScreen } from './screens/ExamScreen';
import { ResultScreen } from './screens/ResultScreen';
import { FinishDialog } from './components/FinishDialog';

const bankErrors = validateBank(questions);
export default function App() {
  const [screen, setScreen] = useState<'start' | 'exam' | 'result'>('start');
  const [exam, setExam] = useState<ExamState | null>(null);
  const [confirmFinish, setConfirmFinish] = useState(false);
  useEffect(() => {
    document.querySelector<HTMLElement>('h1')?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [screen, exam?.current]);
  const start = () => {
    const selected = buildExam(questions, EXAM_SIZE);
    if (!selected.length || bankErrors.length) return;
    setExam({ questions: selected, answers: selected.map(() => null), current: 0, startedAt: Date.now() });
    setScreen('exam');
  };
  const finish = () => { setConfirmFinish(false); setScreen('result'); };
  const blank = exam?.answers.filter(answer => answer === null).length ?? 0;
  return <>
    <a href="#main-content" className="skip-link">Pular para o conteúdo</a>
    <header className="site-header"><div className="brand"><span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span><span>PDI<span className="brand-divider">/</span><span className="brand-subtitle">Caderno de prática</span></span></div><span className="header-label">{screen === 'start' ? 'ESTUDE NO SEU RITMO' : screen === 'exam' ? 'UMA QUESTÃO DE CADA VEZ' : 'REVISAR TAMBÉM É APRENDER'}</span></header>
    {bankErrors.length > 0 ? <main id="main-content"><h1>Banco de questões indisponível</h1><p>Há dados inválidos que precisam ser corrigidos antes de iniciar.</p></main> : <>
      {screen === 'start' && <StartScreen count={questions.length} pending={pendingQuestions.length} onStart={start} />}
      {screen === 'exam' && exam && <ExamScreen exam={exam} onAnswer={answer => setExam(prev => prev && ({ ...prev, answers: prev.answers.map((value, i) => i === prev.current ? answer : value) }))} onNavigate={current => setExam(prev => prev && ({ ...prev, current }))} onFinish={() => blank ? setConfirmFinish(true) : finish()} />}
      {screen === 'result' && exam && <ResultScreen exam={exam} onRestart={() => { setExam(null); setScreen('start'); }} />}
    </>}
    <footer className="site-footer"><span>Processamento Digital de Imagens</span><span>Seu progresso vale a prática.</span></footer>
    {confirmFinish && <FinishDialog blank={blank} onCancel={() => setConfirmFinish(false)} onConfirm={finish} />}
  </>;
}
