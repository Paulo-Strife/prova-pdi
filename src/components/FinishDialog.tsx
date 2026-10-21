import { useEffect, useRef } from 'react';

export function FinishDialog({ blank, onCancel, onConfirm }: { blank: number; onCancel: () => void; onConfirm: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = ref.current!;
    const previous = document.activeElement as HTMLElement | null;
    dialog.showModal();
    return () => { dialog.close(); previous?.focus(); };
  }, []);
  return <dialog ref={ref} aria-labelledby="finish-title" aria-describedby="finish-description" onCancel={onCancel}>
    <span className="eyebrow">ANTES DE ENTREGAR</span>
    <h2 id="finish-title">Ainda há questões em branco</h2>
    <p id="finish-description">Você deixou <strong>{blank} {blank === 1 ? 'questão em branco' : 'questões em branco'}</strong>. Elas não somam pontos. Deseja finalizar mesmo assim?</p>
    <div className="dialog-actions">
      <button className="secondary" onClick={onCancel} autoFocus>Continuar respondendo</button>
      <button className="primary" onClick={onConfirm}>Finalizar mesmo assim</button>
    </div>
  </dialog>;
}
