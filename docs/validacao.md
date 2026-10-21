# Validação da entrega

Executada em 21/10/2026, em Windows, com Node.js 22.19.0 e npm 10.9.3.

## Resultados

| Verificação | Resultado |
|---|---|
| `npm.cmd test` | 25 testes aprovados, em dois arquivos |
| TypeScript + `npm.cmd run build` | Aprovado; saída em `dist/` |
| Servidor Vite local | Inicializado em `127.0.0.1:5173`; HTTP 200 confirmado |
| Banco de questões | 44 válidas, IDs únicos, índices de respostas corretos |
| Pendências | 6: IDs 31 e 46–50, fora do sorteio |
| Arquivo vazio original | Preservado em `../prova.bak`, com 0 bytes |

## Cobertura automatizada

- Bancos com 0, 3, 30 e 40 itens; total sorteado correto e ausência de repetições.
- Preservação do banco original e do gabarito em 100 embaralhamentos, incluindo alternativas com cinco opções.
- Pontuação de acertos, erros e brancos; aprovação em 21/30; reprovação em 20/30; total efetivo e banco vazio.
- Início, marcação, alteração e limpeza de respostas; anterior/próxima e grade; manutenção das respostas ao navegar; limites de navegação.
- Confirmação com brancos, cancelamento por botão e evento `cancel`, finalização com brancos e finalização sem modal quando todas estão preenchidas.
- Revisão em ordem, respostas corretas, notas editoriais, rolagem para revisão, reinício e limpeza da tentativa.
- Operação de início, seleção e limpeza usando Tab, Enter e Espaço.
- Estados inicial vazio/reduzido, listas, MathML acessível e tratamento seguro de strings.

## Limitação da verificação visual

Não foi possível executar a inspeção visual em navegador real. A ferramenta de abas retornou nenhum navegador conectado; a alternativa de Computer Use para Firefox retornou `Computer Use app approval timed out`.

Os testes de interface usam jsdom. Os métodos de diálogo e rolagem foram simulados, portanto não certificam captura nativa de foco pelo modal, renderização visual de MathML, contraste percebido, dimensões reais ou comportamento em dispositivos móveis. O CSS possui adaptações para celular e desktop, incluindo botão de finalizar fixo em telas pequenas, mas essa apresentação ainda requer conferência visual.

Para conferência manual: iniciar o servidor, abrir o endereço no navegador e verificar início, prova e revisão nas larguras de 360 px e 1280 px; navegar por teclado; conferir o modal com Escape e Tab; verificar as fórmulas de gama, Haar e Euler e enunciados longos. Não há deploy ou serviço remoto.

## Observações do ambiente

A instalação inicial foi bloqueada pelo sandbox ao acessar o registro npm. A instalação com permissão de rede e cache local concluiu. O servidor também precisou executar fora das restrições de leitura do sandbox para o esbuild localizar dependências. O build e todos os testes passaram depois disso. O servidor usado na validação foi encerrado ao concluir a entrega; `npm.cmd run dev` o inicia novamente.
