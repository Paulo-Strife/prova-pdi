import { EXAM_SIZE, PASSING_PERCENT } from '../config';

export function StartScreen({ count, pending, onStart }: { count: number; pending: number; onStart: () => void }) {
  const size = Math.min(count, EXAM_SIZE);
  return <main id="main-content" className="start-layout">
    <section className="intro">
      <div className="eyebrow"><span className="tiny-square" /> SEU PRÓXIMO PASSO NOS ESTUDOS</div>
      <h1 tabIndex={-1}>Simulado <span className="title-dash">— </span><span>Processamento Digital de Imagens</span></h1>
      <p className="lead">Da primeira imagem aos detalhes que fazem a diferença. Coloque seus conhecimentos em prática, no seu ritmo.</p>
      <div className="facts">
        <div><strong>{size}</strong><span>questões por tentativa</span></div>
        <div><strong>Sem pressa</strong><span>nenhum limite de tempo</span></div>
        <div><strong>{PASSING_PERCENT}%</strong><span>para aprovação</span></div>
      </div>
      <div className="start-actions">
        <button className="primary start-button" disabled={count === 0} onClick={onStart}>Iniciar Simulado <span aria-hidden="true">→</span></button>
        <span className="muted">Uma nova seleção a cada tentativa.</span>
      </div>
      {count > 0 && count < EXAM_SIZE && <p className="notice" role="status">O banco tem {count} questões disponíveis. Esta tentativa usará todas elas.</p>}
      {count === 0 && <p className="notice" role="status">Ainda não há questões disponíveis para iniciar o simulado.</p>}
    </section>
    <aside className="start-aside">
      <div className="pixel-art" aria-hidden="true"><div className="pixel-grid">{Array.from({ length: 64 }, (_, i) => <span key={i} className={`pixel pixel-${(i * 7 + Math.floor(i / 8) * 3) % 6}`} />)}</div><span className="art-caption">OBSERVAR. ENTENDER. PRATICAR.</span></div>
      <div className="how-it-works">
        <h2>Uma questão de cada vez.</h2>
        <ol>
          <li><span>01</span><div><strong>Responda com calma</strong><p>Questões e alternativas em ordem aleatória.</p></div></li>
          <li><span>02</span><div><strong>Volte quando precisar</strong><p>Navegue livremente e altere suas respostas.</p></div></li>
          <li><span>03</span><div><strong>Aprenda com a revisão</strong><p>Confira o resultado e as explicações ao finalizar.</p></div></li>
        </ol>
      </div>
    </aside>
    <section className="bank-note"><span className="bank-icon" aria-hidden="true">▤</span><div><strong>Seu material, pronto para praticar</strong><p>{count} questões disponíveis · {pending} questões ausentes aguardando complementação. O banco inclui adaptações identificadas na revisão.</p></div></section>
  </main>;
}
