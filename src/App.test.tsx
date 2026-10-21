// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { StartScreen } from './screens/StartScreen';
import { QuestionText } from './components/QuestionText';
import { questions } from './data/questions';
import { EXAM_SIZE } from './config';

const examSize = Math.min(EXAM_SIZE, questions.length);
const questionFinishButton = () => within(screen.getByRole('region', { name: /Questão \d+ de \d+/ })).getByRole('button', { name:'Finalizar Prova' });

beforeEach(() => {
  vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
  HTMLElement.prototype.scrollIntoView = vi.fn();
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); });

describe('fluxo completo da interface', () => {
  it('permite iniciar, marcar e limpar usando somente teclado', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole('button', { name:/Iniciar Simulado/ }));
    await user.keyboard('{Enter}');
    await user.tab();
    expect(document.activeElement).toBe(screen.getAllByRole('radio')[0]);
    await user.keyboard(' ');
    expect((screen.getAllByRole('radio')[0] as HTMLInputElement).checked).toBe(true);
    await user.tab();
    expect(document.activeElement).toBe(screen.getByRole('button', {name:'Limpar resposta'}));
    await user.keyboard('{Enter}');
    expect(screen.getAllByRole('radio').every(r => !(r as HTMLInputElement).checked)).toBe(true);
  });
  it('seleciona, altera, limpa, navega, cancela, entrega, revisa e reinicia', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name: /Iniciar Simulado/ }));
    expect(screen.getByRole('heading', { level:1 }).textContent).toBe(`Questão 1 de ${examSize}`);
    expect(document.activeElement).toBe(screen.getByRole('heading', { level:1 }));
    expect((screen.getByRole('button', { name: /Anterior/ }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.queryByText('Por quê?')).toBeNull();
    expect(screen.queryByText(/Resposta correta/)).toBeNull();
    const firstText = document.querySelector('.question-text')!.textContent;
    await user.click(screen.getAllByRole('radio')[0]);
    await user.click(screen.getAllByRole('radio')[1]);
    expect((screen.getAllByRole('radio')[1] as HTMLInputElement).checked).toBe(true);
    expect(screen.getByRole('progressbar').getAttribute('value')).toBe('1');
    await user.click(screen.getByRole('button', { name: /Próxima/ }));
    await user.click(screen.getByRole('button', { name: 'Questão 1, respondida' }));
    expect(document.querySelector('.question-text')!.textContent).toBe(firstText);
    expect((screen.getAllByRole('radio')[1] as HTMLInputElement).checked).toBe(true);
    await user.click(screen.getByRole('button', { name:'Limpar resposta' }));
    expect(screen.getAllByRole('radio').every(r => !(r as HTMLInputElement).checked)).toBe(true);
    expect(screen.getByRole('progressbar').getAttribute('value')).toBe('0');
    await user.click(screen.getAllByRole('radio')[0]);
    await user.click(screen.getByRole('button', { name:`Questão ${examSize}, não respondida` }));
    expect(screen.queryByRole('button', { name:/Próxima/ })).toBeNull();
    expect((questionFinishButton() as HTMLButtonElement).disabled).toBe(false);
    await user.click(questionFinishButton());
    expect(screen.getByRole('dialog').textContent).toContain(`${examSize - 1} questões em branco`);
    await user.click(screen.getByRole('button', { name:'Continuar respondendo' }));
    expect(screen.queryByRole('dialog')).toBeNull();
    await user.click(questionFinishButton());
    fireEvent(screen.getByRole('dialog'), new Event('cancel', { bubbles: true, cancelable: true }));
    expect(screen.queryByRole('dialog')).toBeNull();
    await user.click(questionFinishButton());
    await user.click(screen.getByRole('button', { name:'Finalizar mesmo assim' }));
    expect(screen.getByRole('heading', { level:1 }).textContent).toContain('Cada tentativa');
    expect(screen.getAllByRole('article')).toHaveLength(examSize);
    expect(screen.getAllByText(/✓ Resposta correta/)).toHaveLength(examSize);
    expect(document.querySelectorAll('.review-status.blank')).toHaveLength(examSize - 1);
    expect(document.querySelector('.review-card .question-text')!.textContent).toBe(firstText);
    await user.click(screen.getByRole('button', { name:/Revisar Questões/ }));
    expect(document.activeElement).toBe(screen.getByRole('heading', { name:'Revisão da tentativa' }));
    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled();
    const firstReview = screen.getAllByRole('article')[0];
    await user.click(within(firstReview).getByText('Origem e notas da questão'));
    expect(firstReview.querySelector('details')!.open).toBe(true);
    await user.click(screen.getAllByRole('button', { name:/Refazer Simulado/ })[0]);
    expect(screen.getByRole('button', { name:/Iniciar Simulado/ })).toBeTruthy();
    await user.click(screen.getByRole('button', { name:/Iniciar Simulado/ }));
    expect(screen.getByRole('progressbar').getAttribute('value')).toBe('0');
  });

  it('finaliza sem modal quando todas as respostas estão preenchidas', async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole('button', { name:/Iniciar Simulado/ }));
    for (let i = 0; i < examSize; i++) {
      await user.click(screen.getAllByRole('radio')[0]);
      if (i < examSize - 1) await user.click(screen.getByRole('button', { name:/Próxima/ }));
    }
    await user.click(questionFinishButton());
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(screen.getByRole('heading', { name:'Revisão da tentativa' })).toBeTruthy();
    expect(document.querySelectorAll('.review-status.blank')).toHaveLength(0);
  }, 15000);
});

describe('estados e conteúdo', () => {
  it('permite iniciar com banco pequeno, avisando o total efetivo', () => {
    const onStart = vi.fn();
    render(<StartScreen count={3} pending={6} onStart={onStart} />);
    expect(screen.getByRole('status').textContent).toContain('3 questões');
    fireEvent.click(screen.getByRole('button', { name:/Iniciar Simulado/ }));
    expect(onStart).toHaveBeenCalledOnce();
  });
  it('bloqueia início sem questões', () => {
    render(<StartScreen count={0} pending={6} onStart={vi.fn()} />);
    expect((screen.getByRole('button', { name:/Iniciar Simulado/ }) as HTMLButtonElement).disabled).toBe(true);
    expect(screen.getByRole('status').textContent).toContain('Ainda não há questões');
  });
  it('renderiza fórmulas em MathML com descrição acessível', () => {
    for (const id of [6, 27, 41]) {
      const { container, unmount } = render(<QuestionText text={questions.find(q => q.id === id)!.question} />);
      const math = container.querySelector('math');
      expect(math).not.toBeNull();
      expect(math!.getAttribute('aria-label')).toBeTruthy();
      expect(container.textContent).not.toContain('[[math:');
      unmount();
    }
  });
  it('preserva listas e trata strings como texto, sem executar HTML', () => {
    const {container} = render(<QuestionText text={'<script>alert(1)</script>\n\n- Um\n- Dois\n\n1. Primeiro\n2. Segundo'} />);
    expect(container.querySelector('script')).toBeNull();
    expect(container.querySelectorAll('ul li')).toHaveLength(2);
    expect(container.querySelectorAll('ol li')).toHaveLength(2);
  });
});
