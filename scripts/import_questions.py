"""Importação reprodutível do anexo; gera o banco e o relatório editorial.
Uso: python scripts/import_questions.py caminho/do/anexo.txt
"""
import json
import re
import sys
from pathlib import Path

root = Path(__file__).resolve().parents[1]
raw = Path(sys.argv[1]).read_text(encoding='utf-8-sig')
sections = re.split(r'^## Grupo ', raw, flags=re.M)[1:]
topics = ['Fundamentos da imagem digital', 'Intensidade e filtragem espacial', 'Domínio da frequência', 'Restauração e reconstrução', 'Imagens coloridas', 'Wavelets e multirresolução', 'Compressão de imagens', 'Morfologia e segmentação', 'Representação e descrição', 'Reconhecimento de objetos']
bank = []
pending = []
for group, section in enumerate(sections):
    heading = section.splitlines()[0]
    if group == 9:
        pending.extend({'id': 46+i, 'origin': f'Capítulo 12 · questão {i+1}', 'reason': 'Questão não transcrita; sem enunciado, alternativas ou gabarito.'} for i in range(5))
        continue
    for block in re.split(r'^### ', section, flags=re.M)[1:]:
        number = int(re.match(r'(\d+)', block)[1])
        ident = group * 5 + number
        body = block.split('\n', 1)[1].split('**Gabarito')[0].strip().strip('-').strip()
        opts = re.findall(r'^[A-Ea-e]\) (.+)', body, re.M)
        statement = re.split(r'^[A-Ea-e]\) ', body, flags=re.M)[0].strip()
        answer = re.search(r'\*\*Gabarito:\*\* ([A-E])\b', block)
        if ident == 31:
            pending.append({'id': ident, 'origin': 'Capítulo 8 · questão 1', 'reason': 'Questão não transcrita; apenas a letra C foi fornecida.'})
            continue
        statement = re.sub(r'^> .*\n*', '', statement, flags=re.M).strip()
        q = dict(id=ident, topic=topics[group], origin=f'{heading.split(":")[0]} · questão {number}', question=statement, options=[s.strip() for s in opts], correctIndex=ord(answer[1])-65 if answer else {1:2,3:1,4:2}[ident])
        bank.append(q)

def source(title, url): return {'title': title, 'url': url}
refs = {
 'book': source('Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6', 'https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez'),
 'doi': source('DOI Foundation — identificadores', 'https://www.doi.org/the-identifier/what-is-a-doi/'),
 'interpolation': source('OpenCV — transformações geométricas', 'https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html'),
 'filter': source('OpenCV — filtragem e morfologia', 'https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html'),
 'gamma': source('scikit-image — transformações de intensidade', 'https://scikit-image.org/docs/stable/api/skimage.exposure.html'),
 'hist': source('OpenCV — equalização', 'https://docs.opencv.org/4.x/d4/d1b/tutorial_histogram_equalization.html'),
 'laplace': source('OpenCV — Laplaciano', 'https://docs.opencv.org/4.x/d5/db5/tutorial_laplace_operator.html'),
 'wavelet': source('PyWavelets — DWT 2D e convenções de coordenadas', 'https://pywavelets.readthedocs.io/en/latest/ref/2d-dwt-and-idwt.html'),
 'radiometry': source('NIST — radiometria e fotometria', 'https://nvlpubs.nist.gov/nistpubs/jres/106/1/j61par.pdf'),
 'fft': source('SciPy — convolução por FFT', 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.fftconvolve.html'),
 'frequency': source('scikit-image — filtros de frequência e inversos', 'https://scikit-image.org/docs/stable/api/skimage.filters.html'),
 'jpeg': source('ITU-T T.81 — JPEG', 'https://www.w3.org/Graphics/JPEG/itu-t81.pdf'),
 'otsu': source('OpenCV — limiarização de Otsu', 'https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html'),
 'watershed': source('OpenCV — Watershed', 'https://docs.opencv.org/4.x/d3/db4/tutorial_py_watershed.html'),
 'measure': source('scikit-image — Euler, momentos e aproximação poligonal', 'https://scikit-image.org/docs/stable/api/skimage.measure.html'),
 'pca': source('OpenCV — PCA', 'https://docs.opencv.org/4.x/d1/dee/tutorial_introduction_to_pca.html'),
 'texture': source('scikit-image — matriz de coocorrência', 'https://scikit-image.org/docs/stable/api/skimage.feature.html'),
 'radar': source('ESA — umidade do solo e retroespalhamento', 'https://step.esa.int/main/wp-content/help/versions/14.0.0/snap-toolboxes/org.csa.rstb.rstb.op.soil.moisture.ui/operators/IEMMultiPol.html'),
}
by_id = {q['id']: q for q in bank}
def edit(ident, note, explanation, keys=(), **changes):
    q = by_id[ident]
    q.update(changes)
    q['editorialNote'] = note
    q['explanation'] = explanation
    q['sources'] = [refs[k] for k in keys]

edit(1, 'Gabarito ausente no anexo; completado como C na ordem original.', 'DOI identifica objetos; não é um modelo de representação de imagens.', ['doi'])
edit(2, 'Contexto jornalístico não verificado substituído por cenário genérico. Removida a garantia de penetração de 3 m e corrigida a descrição do sinal.', 'A umidade modifica as propriedades dielétricas e o retroespalhamento. A penetração depende do comprimento de onda e das condições do terreno.', ['radar'], question='Um sistema de monitoramento utiliza radar de micro-ondas para investigar alterações de umidade no solo. Considerando o princípio físico do sensoriamento por radar, assinale a alternativa correta.')
by_id[2]['options'][1] = 'O radar emite micro-ondas e mede o sinal retroespalhado. A presença de água altera as propriedades dielétricas do solo; a penetração depende da frequência e das condições do terreno.'
edit(3, 'Gabarito ausente no anexo; completado como B na ordem original.', 'A interpolação bilinear combina quatro vizinhos e suaviza as transições, embora não recupere detalhes que não foram capturados.', ['interpolation'])
edit(4, 'Início truncado reconstruído e gabarito completado como C; não é uma transcrição literal. Conferência: seção 2.5.2.', 'Na adjacência-m, vizinhos diagonais só se conectam se seus vizinhos-4 comuns não pertencerem a V.', ['book'], question=by_id[4]['question'].replace('... células', 'Um engenheiro desenvolve um sistema para contar células', 1))
edit(6, 'Explicitado o domínio normalizado da transformação gama.', 'Para 0 < r < 1 e 0 < γ < 1, r elevado a γ é maior que r.', ['gamma'], question=by_id[6]['question'].replace('Considerando as propriedades', 'Considere 0 ≤ r ≤ 1, c = 1 e γ > 0. Considerando as propriedades'))
edit(11, 'Enunciado ausente reconstruído a partir das alternativas e do gabarito B. Versão adaptada, sem alegação de recuperar o texto original.', 'Sem preenchimento suficiente, a multiplicação das DFTs produz convolução circular e pode misturar bordas opostas.', ['fft'], question='Um engenheiro quer calcular a convolução linear entre uma imagem e um filtro usando FFT. Ele calcula as transformadas em uma grade do tamanho da imagem, multiplica os espectros e aplica a transformada inversa. O resultado apresenta sobreposição entre bordas opostas (wrap-around). Qual etapa foi omitida?')
edit(16, 'Trecho inicial truncado substituído por introdução completa; gabarito A mantido. Conferência: seção 5.3, mediana adaptativa.', 'A média borra detalhes; a mediana adaptativa ajusta a janela e busca preservar pixels que não sejam impulsos.', ['book'], question=by_id[16]['question'][by_id[16]['question'].index('Considere um cenário'):])
edit(18, 'Pergunta truncada completada. Explicitadas 100 capturas alinhadas e as hipóteses estatísticas.', 'Para N ruídos independentes de mesma variância, a média tem desvio padrão σ/√N; com N = 100, o fator é 10.', [], question='Uma equipe dispõe de 100 imagens da mesma cena estática, capturadas sob baixa iluminação e com a mesma exposição. O ruído é aditivo, de média zero, independente entre capturas e tem a mesma variância. Qual procedimento reduz o ruído preservando o sinal da cena?')
edit(21, 'Correção conceitual: o anexo chamava a grandeza em watts de radiância. Enunciado e alternativa B foram corrigidos para fluxo radiante.', 'Fluxo radiante é potência em watts. Radiância tem unidade W/(m²·sr); energia é medida em joules.', ['radiometry'], question='Qual grandeza radiométrica mede a energia radiante emitida por uma fonte por unidade de tempo, sendo expressa em watts?')
by_id[21]['options'][1] = 'Fluxo radiante (potência radiante)'
edit(24, 'Substituída a expressão absoluta “ideal” por uma descrição do modelo HSI.', 'HSI organiza a cor em matiz, saturação e intensidade; isso permite tratar a intensidade separadamente.', [], question='Qual dos espaços de cor abaixo representa explicitamente matiz, saturação e intensidade em componentes distintas, permitindo processar a intensidade separadamente das componentes cromáticas?')
edit(30, 'Enunciado e alternativas adaptados para fixar x horizontal e y vertical; HL indica passa-alta em x e passa-baixa em y. Letra C original mantida com descrição corrigida.', 'Uma borda vertical varia em x. Na convenção declarada, ψ(x)φ(y) detecta essa variação. Nomes HL/LH dependem da convenção dos eixos.', ['wavelet'], question='Uma inspeção por wavelets 2D procura microfissuras verticais em uma chapa. Considere x como eixo horizontal e y como eixo vertical. Nesta questão, a primeira letra da sub-banda indica o filtro em x e a segunda, em y (H = passa-alta; L = passa-baixa). Qual sub-banda destaca transições de intensidade ao atravessar uma fissura vertical?', options=['LL, com φ(x)φ(y), retendo aproximações de baixa frequência nos dois eixos.', 'LH, com φ(x)ψ(y), medindo variações na direção vertical.', 'HL, com ψ(x)φ(y), medindo variações na direção horizontal.', 'HH, com ψ(x)ψ(y), isolando apenas a iluminação uniforme.'])
edit(35, 'Acrescentada a hipótese de correlação entre pixels vizinhos; gabarito C mantido.', 'Em regiões correlacionadas, diferenças entre vizinhos costumam ser pequenas e podem ser codificadas de modo eficiente.', ['jpeg'], question=by_id[35]['question'].replace('No algoritmo demonstrado,', 'Para uma imagem com forte correlação entre pixels vizinhos,'))
edit(36, 'Explicitada a convenção de primeiro plano branco.', 'A abertura é erosão seguida de dilatação e remove pequenos componentes brancos compatíveis com o elemento estruturante.', ['filter'], question=by_id[36]['question'].replace('No contexto', 'Considere letras brancas sobre fundo preto. No contexto', 1))
edit(38, 'As quatro alternativas foram elaboradas para o enunciado existente, mantendo a letra C indicada no anexo. Não são as alternativas originais.', 'Cruzar zero na segunda derivada ajuda a localizar bordas; a suavização reduz a sensibilidade ao ruído.', ['laplace'], options=['Medir exclusivamente a intensidade média de regiões homogêneas.', 'Produzir um vetor com a orientação da primeira derivada em cada pixel.', 'Localizar possíveis bordas por cruzamentos por zero da segunda derivada, normalmente após suavização para reduzir ruído.', 'Eliminar o ruído sem qualquer suavização e sem afetar os contornos.'])
by_id[10]['options'][1] = 'Ela permite incorporar conhecimento impreciso de especialistas por meio de graus de pertinência e regras SE–ENTÃO para controlar as transformações de intensidade.'
by_id[10]['editorialNote'] = 'Removida da alternativa B a garantia absoluta de ausência de efeito artificial; a qualidade depende das regras e funções de pertinência. Conferência: seção 3.8.'
by_id[19]['options'][1] = 'O filtro rampa compensa o borramento da retroprojeção direta; a janela de Hamming reduz o ringing com compromisso de resolução, e a amostragem angular suficientemente densa reduz artefatos de aliasing na reconstrução.'
by_id[19]['editorialNote'] = 'Alternativa B ajustada para não prometer prevenção absoluta de aliasing nem restringi-lo à conversão entre geometrias. Conferência: seção 5.11, reconstrução por projeções.'

explanations = {
5: 'Com r constante, a variação de i altera diretamente o produto f = i · r.',
7: 'A equalização usa a distribuição acumulada das intensidades; em imagens discretas, não garante um histograma perfeitamente uniforme.',
8: 'A convolução inverte a máscara em ambos os eixos, o equivalente a uma rotação de 180°.',
9: 'O Laplaciano usa derivadas de segunda ordem; o sinal de incorporação depende da convenção da máscara.',
10: 'Regras fuzzy permitem representar graus de pertinência e conhecimento linguístico, sem exigir decisões binárias de intensidade.',
12: 'O aumento da ordem torna a transição de Butterworth mais abrupta e próxima da resposta ideal.',
13: 'Uma resposta a + bH, com a positivo, preserva a componente de fundo enquanto enfatiza altas frequências.',
14: 'A fase determina a posição relativa das componentes e é decisiva para a estrutura espacial reconstruída.',
15: 'O logaritmo transforma o produto iluminação–refletância em soma.',
17: 'Periodicidade gera componentes espectrais localizadas; regiões uniformes auxiliam a estimar distribuições de ruído.',
19: 'A rampa compensa o borramento da retroprojeção; o janelamento controla altas frequências e a amostragem angular densa limita aliasing.',
20: 'Dividir por H muito pequeno amplifica o ruído; restringir a inversão reduz essa instabilidade.',
22: 'Matiz e saturação caracterizam a cromaticidade.',
23: 'Pigmentos reais não produzem preto ideal ao misturar CMY; o canal K melhora a reprodução de preto.',
25: 'O fatiamento associa uma cor a cada intervalo de intensidades da imagem original.',
26: 'Múltiplas resoluções permitem examinar estruturas em escalas distintas.',
27: 'Em pares semelhantes, (f1 − f2)/√2 fica próximo de zero.',
28: 'W_j fornece os detalhes complementares à aproximação V_j.',
29: 'Passa-baixa produz aproximações; passa-alta produz detalhes.',
32: 'Huffman associa códigos mais curtos a símbolos mais frequentes.',
33: 'O erro quadrático resume diferenças numéricas, mas não descreve integralmente a percepção visual.',
34: 'A quantização reduz a precisão dos coeficientes e pode zerá-los, favorecendo a codificação subsequente.',
37: 'Hit-or-miss combina condições sobre objeto e fundo para localizar padrões.',
39: 'Otsu maximiza a separação entre classes, equivalentemente minimizando a variância intraclasse ponderada.',
40: 'Watershed com marcadores e transformação de distância pode separar objetos em contato.',
41: 'E = C − H = 1 − 2 = −1.',
42: 'A simplificação deve equilibrar redução de dados e fidelidade da fronteira.',
43: 'PCA descreve variabilidade estatística; descritores relacionais representam a organização das partes.',
44: 'GLCM caracteriza relações entre intensidades vizinhas; momentos de Hu descrevem propriedades globais da forma.',
45: 'Ao transladar o objeto, seu centroide também se desloca; as distâncias relativas permanecem iguais.'}
source_map = {7:['hist'],8:['filter'],9:['laplace'],12:['frequency'],13:['frequency'],20:['frequency'],26:['wavelet'],27:['wavelet'],28:['wavelet'],29:['wavelet'],32:['jpeg'],34:['jpeg'],37:['filter'],39:['otsu'],40:['watershed'],41:['measure'],42:['measure'],43:['pca'],44:['texture','measure'],45:['measure']}
source_map.update({5:['book'],10:['book'],14:['book'],15:['book'],17:['book'],19:['book'],22:['book'],23:['book'],25:['book']})
for ident, explanation in explanations.items():
    by_id[ident]['explanation'] = explanation
    by_id[ident]['sources'] = [refs[key] for key in source_map.get(ident, [])]
by_id[18]['sources'] = [refs['book']]
by_id[24]['sources'] = [refs['book']]

# Fórmulas de bloco conhecidas são renderizadas por MathML, sem interpretar HTML do banco.
for q in bank:
    q['question'] = re.sub(r'\\\[\s*s = c \\cdot r\^\\gamma\s*\\\]', '[[math:gamma]]', q['question'])
    q['question'] = re.sub(r'\\\[\s*H_2 = .*?\\\]', '[[math:haar]]', q['question'], flags=re.S)
    q['question'] = re.sub(r'\\\[\s*E = C - H\s*\\\]', '[[math:euler]]', q['question'])
    q['question'] = q['question'].replace('V_{j+1} = V_j + W_j', 'Vⱼ₊₁ = Vⱼ ⊕ Wⱼ').replace('V_{j+1}', 'Vⱼ₊₁').replace('V_j', 'Vⱼ').replace('W_j', 'Wⱼ')
    q['question'] = q['question'].replace('*p*', 'p').replace('*q*', 'q')
    q['options'] = [o.replace('*p*', 'p').replace('*q*', 'q').replace('*r*', 'r') for o in q['options']]

(root/'src/data').mkdir(parents=True, exist_ok=True)
(root/'docs').mkdir(exist_ok=True)
(root/'docs/material-original.md').write_text(raw, encoding='utf-8')
(root/'src/data/questions.ts').write_text("import type { Question } from '../types';\n\nexport const questions: Question[] = " + json.dumps(bank, ensure_ascii=False, indent=2) + ';\n\nexport const pendingQuestions = ' + json.dumps(pending, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
report = ['# Revisão editorial do banco', '', 'Data: 21/10/2026.', '', f'{len(bank)} questões disponíveis; {len(pending)} questões ausentes mantidas fora do sorteio. IDs correspondem à posição no material (1–50), preservando lacunas.', '', 'O material original foi preservado em material-original.md. As letras abaixo referem-se à ordem original; no simulado as alternativas são embaralhadas. Reconstruções são adaptações editoriais, não recuperação do texto perdido nem gabarito oficial.', '', '## Alterações e complementações', '']
for q in bank:
    if q.get('editorialNote'):
        report += [f"### ID {q['id']} — {q['origin']}", q['editorialNote'], '', q['explanation'], '']
report += ['## Conferência por questão', '', '| ID | Origem | Gabarito adotado | Justificativa |', '|---|---|---|---|']
for q in bank:
    report.append(f"| {q['id']} | {q['origin']} | {chr(65+q['correctIndex'])} | {q.get('explanation', '')} |")
report += ['', '## Fontes técnicas consultadas', '', 'As fontes vinculadas em cada questão apoiam o conceito indicado; não representam gabaritos oficiais desta prova. Itens sem link individual possuem justificativa conceitual ou algébrica na tabela, a ser distinguida de verificação documental externa.', '']
for key, ref in refs.items():
    ids = ', '.join(str(q['id']) for q in bank if ref in q.get('sources', []))
    if ids: report += [f"- [{ref['title']}]({ref['url']}) — IDs {ids}."]
report += ['', '## Pendências', '']
report += [f"- ID {q['id']} — {q['origin']}: {q['reason']}" for q in pending]
(root/'docs/revisao-questoes.md').write_text('\n'.join(report)+'\n', encoding='utf-8')
print(f'Importadas {len(bank)} questões; {len(pending)} pendentes.')
