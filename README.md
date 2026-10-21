# Simulado — Processamento Digital de Imagens

Aplicação local em React + TypeScript + Vite, com CSS puro. O banco contém **44 questões disponíveis** e **6 pendentes**, documentadas em [docs/revisao-questoes.md](docs/revisao-questoes.md).

## Executar

Requer Node.js 22.12+ (testado com 22.19.0) e npm. Na pasta `prova`:

```powershell
npm.cmd install
npm.cmd run dev
```

Abra o endereço local informado pelo Vite, normalmente `http://127.0.0.1:5173/`. No PowerShell, `npm.cmd` evita problemas com políticas de execução de scripts `.ps1`. Em outros terminais, `npm` também funciona. As dependências já foram instaladas nesta entrega; para iniciar agora basta `npm.cmd run dev`.

## Testar e gerar build

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run preview
```

O build está em `dist/`; `preview` normalmente usa `http://127.0.0.1:4173/`. Para instalação reprodutível, use `npm.cmd ci` com o `package-lock.json` fornecido. Sirva `dist/` por HTTP; não abra `index.html` diretamente com `file://`.

## Uso e pontuação

- Cada início sorteia até 30 questões sem repetição e embaralha as alternativas, preservando o gabarito.
- Se o banco tiver menos de 30 itens, todos serão usados e a tela inicial avisará. Um banco vazio impede o início.
- Escolha uma alternativa; use **Limpar resposta** para deixá-la em branco. As respostas permanecem ao navegar por **Anterior**, **Próxima** ou pela grade.
- **Finalizar Prova** pede confirmação se houver questões em branco. Nenhum feedback de acerto é exibido durante a tentativa.
- Acertos e nota usam o total efetivo de questões. Erros e brancos aparecem separados; brancos não pontuam. Aprovação: pelo menos 70%, sem arredondamento antes da decisão.
- **Revisar Questões** mostra as alternativas corretas, suas escolhas e explicações. As notas editoriais e fontes estão no expansor de cada questão.
- **Refazer Simulado** limpa a tentativa e volta ao início. O próximo início sorteia novamente; a aleatoriedade não garante que questões anteriores sejam excluídas.

Sem cronômetro, login, backend, analytics, fontes externas ou persistência. Atualizar ou fechar a página perde a tentativa. O download inicial das dependências requer internet; depois de instalado, o simulado pode ser servido e usado localmente sem internet. Links de fontes são abertos somente quando acionados.

## Configuração e conteúdo

- `src/config.ts`: `EXAM_SIZE` e `PASSING_PERCENT`.
- `src/data/questions.ts`: array tipado com `id`, `topic`, `question`, `options` e `correctIndex` (base zero), além de metadados opcionais de revisão. `pendingQuestions` reúne as lacunas e não participa do sorteio.
- O texto admite parágrafos, listas simples e os marcadores `[[math:gamma]]`, `[[math:haar]]`, `[[math:euler]]`, convertidos em MathML por `QuestionText`. HTML arbitrário não é interpretado.
- `docs/material-original.md`: anexo original preservado.
- `docs/revisao-questoes.md`: correções, reconstruções, gabaritos, fontes e pendências. As adaptações não são apresentadas como transcrições ou gabaritos oficiais.

Para reproduzir a importação, opcionalmente com Python 3:

```powershell
python scripts/import_questions.py docs/material-original.md
```

O script foi feito para a estrutura deste anexo; não é um importador genérico. Ele sobrescreve o banco e o relatório. Para futuras edições manuais do banco, não execute novamente sem antes incorporar as mudanças ao script.

## Validação da entrega

Os testes incluem integridade do banco, sorteio, gabaritos embaralhados, pontuação, fluxo completo de interface, modal, respostas em branco, reinício, listas e MathML. Os testes de interface usam jsdom: não substituem uma inspeção visual em navegador real. Consulte [docs/validacao.md](docs/validacao.md) para resultados e limitações.

O arquivo vazio original `prova` foi preservado como `../prova.bak`. Nenhum deploy foi realizado.

## Como contribuir

As contribuições devem ser enviadas por **Pull Request (PR)** para a branch **`master`**. Trabalhe em uma branch separada: não faça push direto nem force push para `master`. O merge final fica a cargo do mantenedor autorizado. Esse fluxo também vale para contribuições do próprio administrador.

### 1. Prepare o projeto

Se você tem permissão de escrita no repositório, clone-o:

```powershell
git clone https://github.com/RhaastGaucho/prova-pdi.git
cd prova-pdi
npm.cmd ci
```

Se não tiver permissão de escrita, crie um **fork** no GitHub e use a URL do seu fork no comando de clone. Nesse caso, `origin` apontará para seu fork; o PR deverá ter como destino o repositório original `RhaastGaucho/prova-pdi`.

### 2. Crie uma branch para sua alteração

Partindo de uma cópia local sem alterações pendentes:

```powershell
git switch master
git pull --ff-only origin master
git switch -c feat/minha-melhoria
```

Escolha um nome que descreva a contribuição, por exemplo `feat/filtro-por-topico`, `fix/correcao-gabarito` ou `docs/instrucoes`. Se estiver usando um fork, sincronize sua `master` com a do repositório original antes desses comandos.

### 3. Faça as alterações e valide

Mantenha cada PR focado em uma mudança. Para alterações nas questões, confira o gabarito, preserve os IDs e registre fontes e adaptações em `docs/revisao-questoes.md`. Considere também o script de importação, que pode sobrescrever o banco.

Na pasta do projeto, execute:

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run dev
```

Para mudanças na interface, confira o comportamento no navegador em celular e desktop, incluindo navegação por teclado. Atualize a documentação quando mudar o uso do simulado.

### 4. Envie sua branch e abra um Pull Request

Confira os arquivos alterados, faça o commit e envie a branch. Substitua o nome da branch pelo escolhido no passo anterior:

```powershell
git status
git diff
git add .
git diff --cached
git commit -m "Descreve a melhoria realizada"
git push -u origin feat/minha-melhoria
```

No GitHub, abra um PR com **base: `master`** no repositório original e **compare: sua branch**. Informe o que mudou, o motivo e como foi testado. Inclua capturas de tela quando ajudarem a avaliar mudanças visuais.

### 5. Aguarde a revisão

O mantenedor avaliará a contribuição e realizará o merge quando estiver pronta. Se forem solicitados ajustes, faça novos commits e envie para a mesma branch; eles entrarão no mesmo PR. Não tente contornar as proteções da branch principal.

Estas são as regras de contribuição do projeto; a configuração das proteções no GitHub é responsabilidade do administrador.
