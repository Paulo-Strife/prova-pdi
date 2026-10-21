import { createElement } from 'react';

// Apenas marcações matemáticas conhecidas. O conteúdo do banco nunca vira HTML.
function formula(name: string) {
  const m = (tag: string, ...children: (string | ReturnType<typeof createElement>)[]): ReturnType<typeof createElement> => createElement(tag, null, ...children);
  const mi = (text: string) => m('mi', text);
  const mo = (text: string) => m('mo', text);
  const mn = (text: string) => m('mn', text);
  let body;
  let label;
  if (name === 'gamma') {
    body = m('mrow', mi('s'), mo('='), mi('c'), mo('·'), m('msup', mi('r'), mi('γ')));
    label = 's igual a c vezes r elevado a gama';
  } else if (name === 'haar') {
    body = m('mrow', m('msub', mi('H'), mn('2')), mo('='), m('mfrac', mn('1'), m('msqrt', mn('2'))), mo('['), m('mtable', m('mtr', m('mtd', mn('1')), m('mtd', mn('1'))), m('mtr', m('mtd', mn('1')), m('mtd', m('mrow', mo('−'), mn('1'))))), mo(']'));
    label = 'H dois igual a um sobre raiz de dois vezes a matriz: primeira linha um, um; segunda linha um, menos um';
  } else {
    body = m('mrow', mi('E'), mo('='), mi('C'), mo('−'), mi('H'));
    label = 'E igual a C menos H';
  }
  return createElement('math', { display: 'block', 'aria-label': label }, body);
}

export function QuestionText({ text }: { text: string }) {
  return <div className="question-text">{text.split(/\n\s*\n/).map((paragraph, i) => {
    const math = paragraph.match(/^\[\[math:(gamma|haar|euler)\]\]$/);
    if (math) return <div className="formula" key={i}>{formula(math[1])}</div>;
    const lines = paragraph.split('\n').map(line => line.trim());
    if (lines.every(line => /^- /.test(line))) return <ul key={i}>{lines.map((line, j) => <li key={j}>{line.slice(2)}</li>)}</ul>;
    if (lines.every(line => /^\d+\. /.test(line))) return <ol key={i}>{lines.map((line, j) => <li key={j}>{line.replace(/^\d+\. /, '')}</li>)}</ol>;
    return <p key={i}>{paragraph}</p>;
  })}</div>;
}
