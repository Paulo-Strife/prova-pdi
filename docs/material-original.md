Segue o conteúdo organizado em Markdown:

```markdown
# PROCESSAMENTO DE IMAGENS

## Questões da Prova 16/10/2026

> Observação: onde o documento original apresenta enunciado truncado ou questão ausente, isso foi indicado no texto.  
> Formatação original solicitada: fonte Arial, tamanho 11 em todo o conteúdo.

---

## Grupo 1 — Capítulos 1 e 2: Introdução e Fundamentos da Imagem Digital

### 1. (Q61 - POSCOMP 2015)

O seguinte modelo NÃO é utilizado na representação de uma imagem digital:

A) Escala de cinza.  
B) RGB (Red-Green-Blue).  
C) DOI (Digital Object Identifier System).  
D) HSV (Hue-Saturation-Value).  
E) CMY (Cyan-Magenta-Yellow).

**Gabarito:** não informado no documento.

---

### 2.

Em São Paulo, a implementação de uma nova tecnologia de monitoramento urbano utiliza satélites equipados com sensores de radar (banda de micro-ondas) combinados com algoritmos de Inteligência Artificial. O sistema é capaz de identificar a condutividade elétrica da água tratada subterrânea ao emitir micro-ondas que penetram no solo em até 3 metros de profundidade, permitindo a detecção de vazamentos em tubulações enterradas antes que estes se manifestem na superfície.

(Adaptado de: BARREIRO, A. C. C. Como satélite criado para procurar água em Marte ajuda a encontrar vazamentos na Terra. Superinteressante, 2026).

A) As imagens de radar dependem da luz do Sol para iluminar a Terra, o que impede a coleta de dados durante a noite ou em dias nublados.  
B) Por utilizarem ondas mais longas que a luz visível, as micro-ondas conseguem atravessar nuvens e penetrar no solo, sendo a alteração no sinal elétrico provocada pela água o fator que permite identificar o vazamento.  
C) O radar opera como um sensor passivo, ou seja, ele não envia nenhum sinal, apenas escuta a radiação emitida naturalmente pelo solo.  
D) A penetração das micro-ondas no solo atinge profundidades infinitas, dependendo apenas da potência do satélite, sem sofrer interferência do tipo de solo ou da presença de água.

**Gabarito:** B

---

### 3.

Uma empresa de visão computacional desenvolveu um sistema para inspeção automática de peças metálicas retangulares em uma linha de produção. As câmeras utilizadas capturam imagens em baixa resolução (320×240 pixels) devido a limitações de custo do hardware. Para permitir que os operadores visualizem os defeitos com mais clareza em um monitor de alta resolução, o sistema amplia digitalmente essas imagens antes de exibi-las. Os engenheiros notaram que, ao utilizar o método de ampliação padrão do sistema, as bordas retas das peças metálicas ficavam visivelmente serrilhadas e distorcidas, dificultando a análise visual. Considerando os métodos de interpolação utilizados no redimensionamento de imagens digitais, a alternativa que apresenta a técnica mais adequada para reduzir esse tipo de distorção nas bordas é:

A) Utilizar a interpolação por vizinho mais próximo, pois esse método sempre preserva a nitidez original das bordas retas da imagem, sem introduzir distorções.  
B) Utilizar a interpolação bilinear, pois esse método estima o valor de cada novo pixel a partir dos quatro vizinhos mais próximos na imagem original, produzindo transições mais suaves e reduzindo distorções em bordas.  
C) Reduzir o número de níveis de intensidade (k) da imagem antes da ampliação, pois isso aumenta a resolução espacial e elimina a distorção nas bordas.  
D) Aumentar a faixa dinâmica da imagem antes da ampliação, pois isso corrige distorções geométricas causadas pelo processo de redimensionamento.

**Gabarito:** não informado no documento.

---

### 4.

> [Enunciado incompleto no documento]

... células em uma imagem microscópica binária. Para que a contagem seja precisa, o algoritmo precisa identificar "caminhos" únicos entre os pixels para definir as fronteiras dos objetos. Ao utilizar a adjacência-8, o engenheiro percebeu que o sistema gerava caminhos redundantes e ambiguidades em certas estruturas diagonais, o que dificultava a extração correta do esqueleto das células.

Considerando o conjunto de intensidades de interesse V={1}, qual critério de adjacência deve ser implementado para eliminar essas ambiguidades e qual a regra lógica que o define?

A) Adjacência-4, pois ao restringir a conectividade apenas aos vizinhos horizontais e verticais, ela simplifica o contorno e impede naturalmente a formação de caminhos diagonais redundantes.  
B) Adjacência-8, pois por ser a mais abrangente (incluindo vizinhos-4 e diagonais), ela garante que nenhum pixel de interesse seja ignorado, sendo o padrão para evitar quebras em objetos finos.  
C) Adjacência-m (mista), que permite a conexão diagonal entre dois pixels *p* e *q* apenas se a interseção de seus vizinhos-4 não contiver nenhum pixel pertencente ao conjunto V, priorizando conexões diretas (4-vizinhos) sobre diagonais.  
D) Adjacência Euclidiana, que utiliza o cálculo da distância em linha reta para conectar pixels cujo valor seja inferior a um raio *r*, garantindo que a topologia da malha digital seja idêntica à do espaço contínuo.

**Gabarito:** não informado no documento.

---

### 5.

Um fotógrafo tira duas fotos da mesma parede branca: uma dentro de um quarto com pouca luz, e outra do lado de fora, sob sol forte. Embora a parede seja fisicamente a mesma, com a mesma cor, as duas fotos mostram tons de cinza bem diferentes, a primeira mais escura, a segunda mais clara.

Considerando o modelo de formação de imagem digital, no qual o valor de um ponto da imagem é dado por f(x,y) = i(x,y) · r(x,y), assinale a alternativa que explica corretamente esse fenômeno.

A) A refletância da parede (r) mudou entre as duas fotos, pois materiais brancos alteram sua composição física conforme a luz incidente.  
B) O valor final da imagem depende apenas da refletância do objeto; a diferença observada foi causada exclusivamente por ajustes automáticos da câmera.  
C) A iluminação (i) foi diferente nos dois ambientes, e como o valor final da imagem é o produto entre iluminação e refletância, uma mudança na iluminação altera o resultado mesmo com a refletância constante.  
D) O fenômeno não tem relação com o modelo f(x,y) = i(x,y) · r(x,y), sendo explicado exclusivamente por processamento digital posterior à captura.

**Gabarito:** C

---

## Grupo 2 — Capítulo 3: Transformações de Intensidade e Filtragem Espacial

### 1.

Um técnico em radiologia recebe uma imagem de ressonância magnética da coluna vertebral que se apresenta predominantemente escura. O objetivo é expandir os níveis de intensidade para revelar mais detalhes ocultos nas regiões escuras, mas sem alterar drasticamente o contraste das poucas regiões que já são claras.

Para isso, decide-se utilizar uma transformação de potência (transformação gama) dada pela função:

\[
s = c \cdot r^\gamma
\]

Considerando as propriedades das transformações de potência no realce de imagens digitais, a alternativa que apresenta a configuração mais adequada para resolver o problema do técnico é:

A) Utilizar γ = 1, pois essa configuração preserva os detalhes originais da imagem sem introduzir ruídos no domínio espacial.  
B) Utilizar γ > 1, pois essa configuração comprime os tons escuros e expande os tons claros, realçando as partes brilhantes da ressonância.  
C) Utilizar γ < 1, pois essa configuração expande a faixa de tons escuros e comprime a de tons claros, revelando os detalhes ocultos na sombra.  
D) Utilizar um valor de constante c > 255, independentemente do gama, para garantir que os pixels atinjam a intensidade máxima de brilho permitida na imagem.

**Gabarito:** C

---

### 2.

Um engenheiro de software está desenvolvendo um aplicativo de edição de fotos para smartphones. Ele implementa a técnica de equalização de histograma com o objetivo de melhorar automaticamente o contraste de fotos tiradas em condições de iluminação ruins.

Durante os testes, ele nota que algumas fotos, especialmente as que já tinham muitos pixels escuros, ficam com um aspecto artificial e "lavado".

Com base nos conceitos de processamento de histograma para imagens digitais, qual é a afirmação correta sobre a equalização de histograma e o seu comportamento?

A) A equalização sempre garante um histograma de saída perfeitamente uniforme (plano) para imagens discretas, resolvendo qualquer problema de iluminação.  
B) O algoritmo utiliza como função de transformação a função de distribuição acumulada (CDF) baseada no histograma da própria imagem de entrada.  
C) A técnica exige que o usuário defina manualmente o formato do histograma-alvo antes do processamento, caracterizando um processo de especificação (matching).  
D) A equalização atua como um filtro espacial local, analisando blocos de 3 × 3 pixels para suavizar bordas ao mesmo tempo que aumenta o contraste.

**Gabarito:** B

---

### 3.

Ao projetar um sistema de visão computacional para uma linha de montagem industrial, um grupo de estudantes precisa aplicar uma filtragem espacial linear para suavizar (borrar) as imagens capturadas e reduzir o ruído do sensor.

Eles estudam a teoria por trás da operação de vizinhança e debatem sobre o uso de duas abordagens matemáticas fundamentais: a correlação e a convolução.

Considerando uma máscara de filtragem espacial w(x, y) de dimensões 3 × 3, qual é a diferença fundamental entre as operações de correlação e convolução no domínio espacial?

A) A convolução exige que a máscara seja rotacionada em 180° antes de realizar o processo de soma dos produtos pela vizinhança da imagem.  
B) A correlação só pode ser aplicada em imagens coloridas (RGB), enquanto a convolução é restrita a imagens em tons de cinza.  
C) A convolução elimina a necessidade de se preencher as bordas da imagem original com zeros (técnica de padding).  
D) A correlação utiliza matrizes (máscaras) que devem ser, obrigatoriamente, maiores do que as máscaras utilizadas na convolução.

**Gabarito:** A

---

### 4.

Durante o processamento de imagens de satélite, é frequentemente necessário realçar detalhes finos, como ruas e construções, que aparecem borrados devido à distância e a fatores atmosféricos. Uma equipe de analistas decide utilizar uma técnica de aguçamento (nitidez) no domínio espacial, baseada no uso de operadores derivativos isotrópicos (que são invariantes à rotação).

Qual das seguintes alternativas apresenta a técnica mais adequada para realçar detalhes finos de forma isotrópica, com base em derivadas de segunda ordem?

A) A aplicação de um filtro de mediana 3 × 3, que além de eliminar o ruído impulsivo, atua acentuando transições abruptas de intensidade.  
B) O uso do operador Gradiente de Sobel (∇f), que calcula a primeira derivada da imagem destacando as bordas independentemente da direção.  
C) A soma ou subtração do operador Laplaciano (∇²f) em relação à imagem original, dependendo do sinal do coeficiente central da máscara aplicada.  
D) A aplicação sucessiva de filtros de média espacial, de modo a isolar as altas frequências remanescentes na imagem final.

**Gabarito:** C

---

### 5.

Um sistema automatizado de diagnóstico por imagem precisa destacar lesões escuras em tomografias sem utilizar fórmulas globais rígidas, já que as características de "escuro" e "claro" variam entre pacientes.

A equipe decide aplicar Lógica Fuzzy para o realce de contraste, utilizando regras linguísticas formuladas por médicos, como:

“SE o pixel pertence a uma região muito escura, ENTÃO torne-o ainda mais escuro”

Considerando a aplicação da Lógica Fuzzy em transformações de intensidade, assinale a principal vantagem dessa abordagem quando comparada a técnicas globais tradicionais:

A) A Lógica Fuzzy exige que cada pixel seja transformado obrigatoriamente para os valores limites (0 ou 255), binarizando a imagem final de forma precisa.  
B) Ela permite incorporar o conhecimento impreciso de especialistas (através de regras SE-ENTÃO) para manipular as intensidades sem gerar o efeito artificial nos extremos da imagem.  
C) A etapa de fuzzificação substitui a necessidade de matrizes espaciais, o que só a torna aplicável quando combinada com a transformada de Fourier no domínio da frequência.  
D) O processo elimina completamente o ruído impulsivo ("sal e pimenta") da imagem, pois atua da mesma forma que os filtros de estatística de ordem (ex: mediana).

**Gabarito:** B

**Gabarito do grupo:** C - B - A - C - B

---

## Grupo 3 — Capítulo 4: Filtragem no Domínio da Frequência

### 1.

> [Enunciado incompleto no documento]

A) Ele esqueceu de multiplicar a imagem por (-1)^(x+y) antes de calcular a FFT para centralizar o espectro de frequências.  
B) Ele não realizou o preenchimento com zeros (zero-padding) adequado nas imagens de entrada antes de calcular a transformada.  
C) O filtro escolhido era um Filtro Ideal, o que causou o efeito de ringing (anelamento) nas bordas da imagem processada.  
D) Ele utilizou apenas a parte real da Transformada Inversa de Fourier, descartando a parte imaginária que continha as bordas.

**Gabarito:** B

---

### 2.

Em sistemas de visão computacional, filtros passa-baixa no domínio da frequência são frequentemente usados para suavização e redução de ruído. Analisando as características do Filtro Passa-Baixa Ideal (ILPF), do Filtro Passa-Baixa de Butterworth (BLPF) e do Filtro Passa-Baixa Gaussiano (GLPF), é correto afirmar que:

A) O Filtro Gaussiano apresenta o efeito de anelamento (ringing) mais severo de todos, devido à sua geometria sino-espacial.  
B) O Filtro Passa-Baixa Ideal, por ter um corte perfeitamente abrupto no domínio da frequência, não produz artefatos visuais no domínio espacial.  
C) O Filtro de Butterworth de ordem muito alta (n tendendo ao infinito) aproxima-se do comportamento de um Filtro Ideal, passando a exibir efeito de anelamento.  
D) Todos os três filtros mencionados eliminam a componente DC (frequência zero) da imagem, causando necessariamente uma tela totalmente preta.

**Gabarito:** C

---

### 3.

Ao aplicar um Filtro Passa-Alta no domínio da frequência, as bordas de uma imagem são realçadas, mas a imagem resultante costuma perder seu tom geral e as áreas lisas tendem ao fundo escuro. Para contornar esse problema, preservando o brilho geral e o fundo da imagem original enquanto as bordas são realçadas, a técnica mais indicada é:

A) Aplicar o filtro passa-alta duas vezes consecutivas para forçar a recuperação da iluminação perdida.  
B) Reduzir a frequência de corte do filtro passa-alta para o valor zero, convertendo as altas em baixas frequências.  
C) Utilizar a filtragem de ênfase de altas frequências, adicionando uma constante e multiplicando o filtro por um ganho.  
D) Substituir o filtro passa-alta por um filtro passa-banda com largura de banda extremamente estreita em torno da origem.

**Gabarito:** C

---

### 4.

A Transformada Discreta de Fourier (DFT) mapeia uma imagem do domínio espacial para o domínio da frequência, resultando em um espectro composto por magnitude e fase. Em um experimento clássico, a magnitude calculada da imagem de um Gato é combinada com a fase calculada da imagem de uma Casa, e a transformada inversa é executada. Sobre a imagem resultante deste experimento, assinale a afirmativa correta:

A) A imagem resultante será visualmente muito semelhante à do Gato, pois a magnitude contém as informações estruturais da imagem.  
B) As frequências armazenadas na magnitude ditam a geometria dos objetos, forçando o resultado a ser um Gato com textura de Casa.  
C) A imagem resultante exibirá fortemente a estrutura geométrica da Casa, evidenciando que a fase carrega a informação espacial da localização das formas.  
D) A transformada inversa falhará em gerar uma imagem reconhecível, pois o teorema de Fourier exige simetria conjugada original para o retorno ao domínio espacial.

**Gabarito:** C

---

### 5.

O modelo clássico de iluminação-reflexão descreve uma imagem como o produto de duas componentes f(x,y) = i(x,y) * r(x,y). Para tratar imagens capturadas sob iluminação muito desuniforme (como sombras duras), utiliza-se a técnica de Filtragem Homomórfica no domínio da frequência. Sobre as etapas dessa filtragem, é correto afirmar que:

A) O objetivo da técnica é atenuar a componente r(x,y) (reflexão) e amplificar a componente i(x,y) (iluminação).  
B) A técnica requer a aplicação do cálculo exponencial antes de transformar a imagem para o domínio da frequência, visando a separação espacial.  
C) O processo aplica um logaritmo natural na imagem original para converter o produto f = i * r em uma soma, permitindo a separação dessas componentes pelo filtro.  
D) Como a iluminação varia de forma muito brusca e os detalhes do objeto (reflexão) variam lentamente, usa-se um filtro passa-baixa severo para o ajuste.

**Gabarito:** C

**Gabarito do grupo:** B - C - C - C - C

---

## Grupo 4 — Capítulo 5: Restauração e Reconstrução de Imagens

### 1.

> [Enunciado incompleto no documento]

... o ruído, exceto o fato de ser aditivo e aleatório. A filtragem espacial é o método preferido nessas situações. Considere um cenário em que um sistema automatizado de inspeção visual recebe imagens corrompidas por uma alta densidade de ruído impulsivo (sal e pimenta). O sistema precisa limpar a imagem garantindo a máxima preservação de bordas e detalhes finos (como linhas finas e pontos pequenos).

I. A aplicação de um Filtro de Média Aritmética atenuará o ruído impulsivo presente na imagem, mas terá como consequência direta o borramento das bordas e a perda de nitidez dos detalhes.  
II. O Filtro de Mediana padrão é a escolha definitiva e à prova de falhas para esse cenário, pois ele substitui apenas os pixels de ruído pela mediana local, garantindo que nenhum detalhe fino da imagem seja perdido independentemente da densidade do ruído.  
III. O Filtro Adaptativo de Mediana é altamente recomendado para este caso, pois ele possui a capacidade de aumentar dinamicamente o tamanho de sua janela de busca caso a mediana calculada seja considerada um ruído, preservando o valor original do pixel se este não for um impulso.  
IV. O Filtro de Ponto Médio seria a solução computacional mais eficiente para eliminar esse ruído de sal e pimenta, pois ele calcula exatamente a média entre os valores máximo e mínimo da vizinhança.

A) I e III, apenas.  
B) II e IV, apenas.  
C) I, II e III, apenas.  
D) III e IV, apenas.  
E) I, II, III e IV.

**Gabarito:** A (I e III, apenas)

---

### 2.

Durante a aquisição de uma imagem, um sistema de captura apresenta interferências que provocam alterações nos níveis de intensidade dos pixels. Ao analisar algumas imagens produzidas pelo sistema, um técnico observa que determinadas imagens apresentam um padrão repetitivo. Ao aplicar a Transformada de Fourier sobre uma dessas imagens, são observados picos bem definidos no espectro.

Em outro conjunto de imagens, não há um padrão periódico visualmente evidente. Nesse caso, o técnico seleciona pequenas regiões do fundo que possuem intensidade aproximadamente constante e constrói histogramas dos valores de intensidade dessas regiões. Os histogramas apresentam formatos semelhantes aos de algumas funções densidade de probabilidade de ruído estudadas.

Considerando os procedimentos apresentados por Gonzalez e Woods para a caracterização e estimativa dos parâmetros de ruído, assinale a alternativa que apresenta a interpretação mais adequada para as duas situações descritas.

A) Nas imagens com padrão repetitivo, os picos observados no espectro de Fourier indicam componentes associados ao ruído periódico. Para os demais casos, os histogramas obtidos de regiões aproximadamente constantes podem ser comparados às PDFs de ruído para identificar a distribuição e auxiliar na estimativa de seus parâmetros.  
B) Nas imagens com padrão repetitivo, os picos no espectro de Fourier indicam necessariamente a presença de ruído gaussiano. Nas demais imagens, basta calcular a média dos pixels da região selecionada para determinar diretamente o tipo de ruído presente.  
C) Nas imagens com padrão repetitivo, a análise deve ser realizada exclusivamente no domínio espacial, pois a Transformada de Fourier é utilizada apenas para imagens sem ruído periódico. Para os demais casos, o histograma deve ser desconsiderado, pois não permite identificar características estatísticas do ruído.  
D) Nas imagens com padrão repetitivo, os picos no espectro de Fourier representam diretamente pixels pretos e brancos causados pelo ruído impulsivo. Nas demais imagens, a análise do histograma permite determinar qualquer modelo de ruído apenas pela observação de sua média, sem necessidade de considerar sua variância.

**Gabarito:** A

---

### 3.

Em aplicações de processamento digital de imagens com níveis muito baixos de iluminação, frequentemente ocorre a presença de ruído de sensores, o que pode tornar uma imagem isolada praticamente inútil para análise. Um exemplo prático dessa tecnologia ocorre nas câmeras da NASA, que usam longas exposições para somar fótons no sensor ao longo do tempo, formando um sinal detectável mesmo com luz de entrada extremamente fraca.

Considerando as técnicas de processamento de imagens, assinale a alternativa que apresenta:

A) A equipe deve aplicar um filtro de mediana de tamanho 3×3 em uma das imagens isoladas, pois este filtro de estatística de ordem elimina totalmente o ruído aleatório de sensores e não provoca perda de detalhes.  
B) A equipe deve utilizar um filtro passa-alta no domínio da frequência sobre a soma das imagens, pois os ruídos aleatórios de sensores concentram-se predominantemente nas baixas frequências da transformada de Fourier.  
C) A equipe deve calcular a média aritmética pixel a pixel das 100 imagens, certificando-se de que elas estejam previamente registradas (alinhadas), o que reduzirá o desvio padrão do ruído da imagem média em um fator de 10.  
D) A equipe deve aplicar uma máscara de nitidez (unsharp masking) em uma das imagens ruidosas subtraindo uma versão borrada da original, pois isso reduzirá a variância do ruído a zero e realçará as estrelas.

**Gabarito:** C

---

### 4.

Considerando os fundamentos matemáticos e a evolução geométrica da Tomografia Computadorizada (CT), qual é a principal justificativa técnica para a utilização combinada do filtro rampa janelado (como a janela de Hamming) no domínio da frequência e da alta densidade de amostragem angular em scanners modernos de feixe em leque?

A) A janela de Hamming substitui a Transformada de Radon na geração de senogramas, enquanto a amostragem angular densa compensa os lentos movimentos de translação obrigatórios nas terceira e quarta gerações de scanners.  
B) O filtro rampa corrige o borramento inerente à retroprojeção direta e a janela de Hamming atenua o "ringing", enquanto a amostragem densa previne artefatos de "aliasing" durante a conversão matemática da geometria de leque para feixes paralelos.  
C) O janelamento elimina a necessidade de aplicar o Teorema da Fatia de Fourier, permitindo a reconstrução direta do laminograma no domínio espacial, e a amostragem densa reduz o espalhamento de raios X.  
D) A combinação de filtros serve exclusivamente para amplificar os artefatos de "ringing" no domínio da frequência, reduzindo a carga computacional, o que permite o uso de poucos detectores sem gerar distorções.

**Gabarito:** B

---

### 5.

No domínio da frequência, o modelo de degradação de uma imagem é representado por G(u, v) = H(u, v)F(u, v) + N(u, v). Ao tentarmos recuperar a estimativa da imagem original F(u, v) por meio da filtragem inversa direta, foram identificadas limitações severas de instabilidade matemática causadas pela presença de ruído. Assinale a alternativa que apresenta uma limitação real ou uma estratégia correta de mitigação descrita para esse método:

A) A divisão direta realizada no método de filtragem inversa G(u, v)/H(u, v) é realizada através de uma multiplicação clássica pela inversa da matriz de degradação H, e não por uma operação de divisão elemento a elemento (arranjo matricial).  
B) Uma técnica prática para contornar o problema de valores nulos ou muito pequenos na função de degradação consiste em limitar as frequências do filtro a valores próximos à origem espectral, onde H(u, v) costuma apresentar seus maiores valores.  
C) A filtragem inversa direta garante a recuperação perfeita da imagem original mesmo na presença de ruído aditivo N(u, v), pois a divisão direta consegue isolar completamente e subtrair o termo aleatório de ruído do domínio da frequência.  
D) Funções de degradação com formato gaussiano são as mais problemáticas e instáveis para a filtragem inversa porque, por definição, possuem múltiplos valores iguais a zero em frequências intermediárias.

**Gabarito:** B

**Gabarito do grupo:** A - A - C - B - B

---

## Grupo 5 — Capítulo 6: Processamento de Imagens Coloridas

### 1.

Qual grandeza cromática mede a quantidade total de energia emitida por uma fonte de luz, sendo expressa em Watts?

a) Cromaticidade  
b) Radiância  
c) Brilho  
d) Luminância

**Gabarito:** B

---

### 2.

Qual conceito resulta da combinação direta entre a matiz (hue) e a saturação de uma cor?

a) Cromaticidade  
b) Radiância  
c) Brilho  
d) Luminância

**Gabarito:** A

---

### 3.

Qual é a razão principal para a adição do pigmento Preto (K) de forma independente no modelo CMYK?

a) A mistura prática de CMY produz um tom marrom escuro  
b) Os pigmentos Ciano e Amarelo refletem toda a luz visível  
c) O modelo CMYK não consegue reproduzir tons de cinza  
d) O pigmento Preto reduz o custo de fabricação do Ciano

**Gabarito:** A

---

### 4.

Qual espaço de cor é ideal para algoritmos de processamento de imagem por separar a cor da iluminação?

a) CMYK  
b) HSI  
c) CIE XYZ  
d) RGB

**Gabarito:** B

---

### 5.

Em que consiste a técnica de fatiamento de intensidade no processamento de pseudocores?

a) Filtrar frequências altas no domínio da transformada de Fourier  
b) Converter todos os pixels vermelhos para o canal de luz azul  
c) Equalizar a saturação dos canais RGB de forma contínua  
d) Dividir o histograma monocromático e atribuir cores às faixas

**Gabarito:** D

**Gabarito do grupo:** B - A - A - B - D

---

## Grupo 1 — Capítulo 7: Wavelets e Multirresolução

### 1.

Um pesquisador precisa desenvolver um sistema de análise de imagens capaz de identificar, na mesma cena, tanto pequenos detalhes de baixo contraste quanto grandes objetos homogêneos. De acordo com os fundamentos do processamento multirresolução de imagens, qual é a estratégia mais adequada para esse problema?

a) Representar a imagem em múltiplas resoluções (por exemplo, por meio de uma pirâmide de imagem), permitindo analisar desde aproximações grosseiras até detalhes finos.  
b) Reduzir a imagem a uma única versão de baixíssima resolução, eliminando as informações de textura consideradas irrelevantes.  
c) Segmentar a imagem em blocos de tamanho fixo e processar cada bloco isoladamente, sem relação entre as escalas.  
d) Utilizar somente a Transformada de Fourier global da imagem, sem considerar variações espaciais de resolução.

**Gabarito:** A

---

### 2.

A transformada de Haar H2 decompõe um par de pixels (f1, f2) em dois coeficientes: um de aproximação (média) e um de detalhe (diferença), segundo a matriz anexada:

\[
H_2 = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ 1 & -1 \end{bmatrix}
\]

Essa propriedade é amplamente explorada em algoritmos de compressão de imagens digitais. Considerando a aplicação da transformada de Haar H2 a pares de pixels vizinhos localizados em regiões suaves de uma imagem (isto é, regiões sem bordas ou variações bruscas de intensidade), é correto afirmar que:

a) Os coeficientes de detalhe (diferença) tendem a assumir valores altos, uma vez que capturam a intensidade média da região analisada.  
b) Os coeficientes de aproximação (média) tendem a zero, pois representam exclusivamente o ruído presente na imagem.  
c) Os coeficientes de detalhe (diferença) tendem a valores próximos de zero, o que favorece a compressão por meio da eliminação ou da codificação econômica desses coeficientes.  
d) A matriz H2 deixa de ser ortonormal quando aplicada a regiões suaves da imagem, tornando necessário o cálculo de uma base dual para a reconstrução.

**Gabarito:** C

---

### 3.

Uma equipe de engenharia está desenvolvendo um sistema de identificação biométrica que utiliza a Transformada Wavelet Discreta para processar e armazenar imagens de impressões digitais. O algoritmo trabalha com a Análise de Multirresolução, transitando entre diferentes níveis de detalhes da imagem, representados matematicamente pelos espaços vetoriais V_j e W_j. O engenheiro líder explica para a equipe que a imagem em sua resolução mais alta, chamada de V_{j+1}, é formada pela relação fundamental da multirresolução: V_{j+1} = V_j + W_j.

Considerando o papel prático de cada espaço vetorial nessa equação de multirresolução, assinale a alternativa que descreve corretamente como a imagem é dividida e reconstruída:

A) O espaço V_j armazena os detalhes finos e as variações bruscas (criados pela função wavelet psi), enquanto o espaço W_j armazena a versão borrada da impressão digital (criada pela função de escala phi).  
B) O espaço W_j atua de forma complementar ao espaço V_j, guardando exclusivamente os detalhes finos e contornos que faltam na aproximação (V_j) para reconstruir perfeitamente a imagem em alta resolução (V_{j+1}).  
C) Ambos os espaços, V_j e W_j, são criados exclusivamente pela função de escala (phi), o que garante que as altas frequências da imagem sejam preservadas em todas as resoluções.  
D) O espaço V_{j+1} é gerado ignorando o espaço W_j durante a transformada inversa, já que a versão aproximada presente em V_j possui sozinha toda a informação necessária para reconstruir a imagem sem perdas.

**Gabarito:** B

---

### 4.

Um estudante está aprendendo sobre a arquitetura em banco de filtros utilizada na Transformada Rápida de Wavelet (FWT). Ele sabe que, a cada estágio, o sinal da imagem passa simultaneamente por dois filtros digitais, um passa-baixa e um passa-alta, seguidos de subamostragem. Sobre o resultado gerado por cada um desses filtros, é correto afirmar que:

A) O filtro passa-baixa gera os coeficientes de detalhes, isolando bordas e texturas, enquanto o filtro passa-alta gera os coeficientes de aproximação, produzindo uma versão borrada da imagem.  
B) O filtro passa-baixa gera os coeficientes de aproximação, produzindo uma versão suavizada (borrada) da imagem com sua estrutura fundamental, enquanto o filtro passa-alta gera os coeficientes de detalhes, isolando bordas, ruídos e texturas.  
C) Ambos os filtros, passa-baixa e passa-alta, geram exatamente o mesmo tipo de coeficiente, diferindo apenas na escala em que são aplicados.  
D) O filtro passa-baixa remove completamente a informação da imagem, sendo utilizado apenas como etapa preparatória antes da aplicação do filtro passa-alta.

**Gabarito:** B

---

### 5.

Situação-Problema: Uma linha de montagem automatizada utiliza um sistema de visão computacional baseado na Transformada Wavelet Discreta 2D para inspecionar chapas metálicas e identificar microfissuras estruturais dispostas verticalmente. Para isolar essas trincas sem a interferência de falhas horizontais presentes na superfície, o algoritmo deve analisar uma sub-banda de detalhes específica gerada no primeiro nível de decomposição. Com base na formulação das wavelets separáveis direcionais descrita no livro de Gonzalez & Woods, qual sub-banda deve ser selecionada pelo algoritmo e qual a função que a fundamenta?

A) Sub-banda LL (Filtro de Aproximação), fundamentada pela função de escala aplicada em ambos os eixos, pois ela preserva as baixas frequências que realçam transições abruptas.  
B) Sub-banda LH (Wavelet Horizontal), fundamentada pela função wavelet no eixo horizontal e função de escala no eixo vertical, pois ela aplica um filtro passa-alta ao longo do eixo horizontal.  
C) Sub-banda HL (Wavelet Vertical), fundamentada pela função de escala no eixo horizontal e função wavelet no eixo vertical, pois ela mede variações de intensidade ao longo das linhas, isolando bordas verticais.  
D) Sub-banda HH (Wavelet Diagonal), fundamentada pela função wavelet aplicada em ambos os eixos, pois ela elimina componentes contínuos de iluminação em ambas as direções.

**Gabarito:** C

**Gabarito do grupo:** A - C - B - B - C

---

## Grupo 2 — Capítulo 8: Compressão de Imagens

### 1.

> [Questão não transcrita no documento]

**Gabarito indicado no grupo:** C

---

### 2.

Considere uma imagem cujos níveis de intensidade não ocorrem com a mesma frequência. Alguns valores são muito comuns e outros aparecem raramente. Qual técnica é mais diretamente associada à redução da redundância de codificação nesse caso?

A) Equalização de histograma, pois redistribui os níveis de cinza para melhorar contraste.  
B) Codificação de Huffman, pois atribui códigos menores aos símbolos mais frequentes.  
C) Filtro da média, pois suaviza regiões ruidosas antes da compressão.  
D) Amostragem espacial, pois aumenta a resolução da imagem original.

**Gabarito:** B

---

### 3.

Em um sistema de compressão com perda, a imagem reconstruída pode diferir da imagem original. Considerando os critérios de fidelidade apresentados, assinale a alternativa correta.

A) RMSE igual a zero indica reconstrução diferente da imagem original.  
B) Critérios subjetivos são baseados apenas em equações sobre pixels.  
C) A quantização é sempre reversível quando aplicada depois de uma transformada.  
D) RMSE mede erro objetivo, mas pode não corresponder perfeitamente à percepção visual.

**Gabarito:** D

---

### 4.

No JPEG baseline, uma imagem é processada em blocos e passa por transformada, quantização e codificação. Qual alternativa descreve adequadamente o papel desses estágios?

A) A DCT criptografa os pixels e impede a reconstrução da imagem.  
B) A quantização tende a gerar muitos coeficientes pequenos ou nulos, favorecendo RLE e Huffman.  
C) O Huffman é responsável pela perda visual, pois descarta altas frequências.  
D) O RLE aumenta propositalmente os zeros para melhorar a qualidade visual.

**Gabarito:** B

---

### 5.

No algoritmo demonstrado, cada pixel é previsto a partir do pixel anterior da mesma linha, e o compressor codifica o resíduo entre valor real e valor previsto. Sobre esse procedimento, assinale a alternativa correta.

A) O algoritmo é com perda porque todo método preditivo descarta resíduos pequenos.  
B) A predição substitui Huffman e elimina a necessidade de codificação de símbolos.  
C) Os resíduos tendem a se concentrar próximos de zero, tornando a codificação Huffman mais eficiente.  
D) A primeira coluna não precisa ser armazenada, pois todos os pixels podem ser previstos.

**Gabarito:** C

**Gabarito do grupo:** C - B - D - B - C

---

## Grupo 3 — Capítulos 9 e 10: Processamento Morfológico e Segmentação

### 1.

No contexto de processamento morfológico de imagens binárias, considere uma imagem de documentos escaneados contendo letras que foram corrompidas, apresentando pequenos pontos brancos ao redor do texto (ruído de fundo) e pequenos buracos negros dentro das letras. Deseja-se remover os pequenos pontos brancos do fundo sem alterar significativamente o formato e a espessura das letras originais. Qual operação morfológica é a mais adequada para atingir esse objetivo específico?

A) Erosão.  
B) Dilatação.  
C) Abertura (Opening).  
D) Fechamento (Closing).

**Gabarito:** C

---

### 2.

A detecção de padrões geométricos específicos em uma imagem binária é uma tarefa clássica em visão computacional. Na morfologia matemática, existe uma transformação projetada especificamente para localizar um formato exato, utilizando simultaneamente um elemento estruturante para casar com o objeto de interesse (foreground) e outro para casar com o fundo (background). Assinale a alternativa que indica o nome correto dessa transformação:

A) Filtro Laplaciano.  
B) Transformação Hit-or-Miss (Acerta ou Erra).  
C) Transformada de Hough.  
D) Crescimento de Regiões.

**Gabarito:** B

---

### 3.

A segmentação de imagens baseada em descontinuidades frequentemente utiliza o cálculo de derivadas espaciais da intensidade dos pixels. A primeira e a segunda derivada possuem características distintas ao operar sobre transições de intensidade (bordas). Em relação ao uso do operador Laplaciano (segunda derivada), qual é a sua principal utilidade na detecção de bordas?

> [Alternativas não constam no documento original.]

**Gabarito:** C

---

### 4.

A limiarização é uma técnica comum de segmentação. O método de Otsu é amplamente utilizado por fornecer um valor de limiar global automático em vez de exigir que o usuário o escolha empiricamente. Qual o princípio matemático central utilizado pelo algoritmo de Otsu para determinar esse limiar ideal?

A) Ele calcula a média aritmética de todos os pixels da imagem e a define como o limiar.  
B) Ele maximiza a variância interclasses, separando de forma ótima os pixels que representam o fundo dos pixels do objeto.  
C) Ele aplica uma erosão morfológica até que a imagem se reduza a dois tons de cinza.  
D) Ele analisa as bordas da imagem por gradientes direcionais e fixa o limiar nos pontos de maior inclinação.

**Gabarito:** B

---

### 5.

Considere o problema de segmentar partículas (como células em uma amostra de sangue) que estão ligeiramente sobrepostas ou se tocando na imagem, formando aglomerados. A limiarização simples é incapaz de separá-las, agrupando-as como um único objeto. Qual técnica de segmentação, frequentemente descrita por uma analogia topográfica, é a mais indicada para separar (desgrudar) objetos convexos em contato?

A) Crescimento de Regiões (Region Growing).  
B) Método de Otsu.  
C) Filtro de Sobel em X e Y.  
D) Algoritmo de Watershed (Divisor de Águas).

**Gabarito:** D

**Gabarito do grupo:** C - B - C - B - D

---

## Grupo 4 — Capítulo 11: Representação e Descrição

### 1.

Em um sistema de processamento de imagens, uma região segmentada pode ser descrita por meio de características topológicas. Essas características são úteis porque permanecem inalteradas diante de transformações como rotação e alongamento, desde que não ocorram cortes ou junções na região.

Considere uma imagem que apresenta uma região formada por um único componente conexo e dois buracos. Para caracterizar essa região, pode-se utilizar o número de Euler, definido por:

\[
E = C - H
\]

Em que:

- C representa o número de componentes conexos;
- H representa o número de buracos.

Com base nessas informações, o número de Euler da região apresentada é:

A) -2  
B) -1  
C) 0  
D) 1  
E) 2

**Gabarito:** B (-1)

---

### 2.

Uma equipe está desenvolvendo um sistema para analisar imagens de folhas de árvores. Após a segmentação, a fronteira de uma folha é representada por 1.900 pontos. Para facilitar o armazenamento e a análise da forma, a equipe utiliza o método do Polígono de Perímetro Mínimo (MPP) com diferentes tamanhos de células. Observa-se que, com uma configuração intermediária, a fronteira passa a ser representada por 127 vértices, mantendo as principais características da folha. Entretanto, ao aumentar ainda mais o tamanho das células, o número de vértices diminui, mas características importantes da forma começam a desaparecer.

Com base nessa situação, a utilização do MPP demonstra que:

A) quanto maior o tamanho das células, maior será a precisão da representação, pois haverá menos interferência dos pixels.  
B) a redução da quantidade de vértices deve ocorrer sem considerar a preservação das características da fronteira, pois o objetivo principal do MPP é minimizar o número de pontos.  
C) existe um equilíbrio entre a redução da quantidade de dados e a preservação das características da forma, sendo necessário escolher um tamanho de célula adequado à aplicação.  
D) o MPP mantém necessariamente todos os pontos da fronteira original, apenas reorganizando-os em uma sequência mais eficiente.

**Gabarito:** C

---

### 3.

No estudo de representação e descrição em Processamento Digital de Imagens (Gonzalez & Woods, Capítulo 11), os métodos apresentados nas seções 11.4 e 11.5 abordam o problema de caracterizar um objeto sob óticas fundamentalmente distintas. Se você precisasse explicar a um colega a diferença conceitual entre o uso de Componentes Principais (Seção 11.4) e o uso de Descritores Relacionais (Seção 11.5), qual alternativa sintetiza corretamente essa distinção?

A) O 11.4 adota uma abordagem quantitativa e estatística voltada a identificar as direções de maior variabilidade e descartar redundâncias numéricas; já o 11.5 adota uma abordagem sintática e estrutural voltada a expressar formalmente como as partes ou primitivas do objeto se conectam e organizam.  
B) O 11.4 concentra-se em descrever fronteiras lineares por meio de códigos de cadeia unidimensionais; já o 11.5 foca-se na compressão espectral de imagens multidimensionais por eliminação de correlação entre pixels.  
C) O 11.4 serve para extrair a forma física exata de regiões contíguas no domínio espacial; já o 11.5 calcula a média e a variância dos níveis de cinza ao longo de uma árvore hierárquica.  
D) O 11.4 busca determinar o formato geométrico das bordas de um objeto isolado; já o 11.5 determina a intensidade de cor ideal para classificar pixels em detectores de satélite multiespectrais.  
E) Ambos os métodos realizam a mesma decomposição em autovetores e autovalores, diferenciando-se apenas pelo fato de o 11.4 atuar em imagens binárias e o 11.5 atuar em imagens em escala de cinza.

**Gabarito:** A

---

### 4.

Um sistema de visão computacional foi projetado para a inspeção automatizada de peças industriais em uma linha de montagem. O sistema precisa realizar duas tarefas distintas:

1. Reconhecer a forma e a geometria de peças metálicas, independentemente de estarem rotacionadas, transladadas ou com pequenas variações de escala na esteira transportadora;
2. Analisar a textura da superfície do material para diferenciar regiões suaves de superfícies rugosas ou com padrões periódicos de usinagem.

Considerando a aplicação dos descritores regionais adequados para a solução deste problema, assinale a alternativa correta:

a) O histograma de intensidade de primeira ordem deve ser utilizado para identificar a forma da peça, pois preserva a distribuição espacial relativa dos pixels, enquanto os Momentos Invariantes de Hu são indicados para medir a periodicidade da textura.  
b) A Matriz de Co-ocorrência em Níveis de Cinza (GLCM) analisa a relação espacial entre pares de pixels para quantificar a textura, enquanto os 7 Momentos Invariantes de Hu descrevem a forma global sendo invariantes a translação, escala e rotação.  
c) Os Momentos Invariantes de Hu Φ1 a Φ7 medem exclusivamente a energia radial e angular no domínio da frequência, sendo incapazes de descrever a silhueta de objetos.  
d) A abordagem estatística por GLCM garante invariância automática a rotações e mudanças de escala da geometria do objeto, dispensando o uso de momentos centrais normalizados.

**Gabarito:** B

---

### 5.

Durante o desenvolvimento de um sistema de reconhecimento automático de objetos em imagens, uma equipe de estudantes precisa identificar um determinado objeto independentemente de sua posição na imagem. Para isso, eles decidem utilizar uma técnica de assinatura, que transforma a fronteira bidimensional (2-D) do objeto em uma função unidimensional (1-D).

Em um dos testes, o mesmo objeto é deslocado para diferentes posições da imagem, sem sofrer alterações em seu formato. A equipe deseja utilizar uma característica da fronteira que permaneça igual mesmo após esse deslocamento. Considerando os conceitos de descritores e assinaturas de fronteiras, qual das abordagens apresentadas é mais adequada para produzir uma assinatura invariante à translação?

A) Calcular, para cada ponto da fronteira, a distância entre o centroide do objeto e esse ponto, relacionando essa distância ao ângulo correspondente.  
B) Armazenar, em sequência, as coordenadas absolutas (x, y) de cada ponto pertencente à fronteira do objeto.  
C) Armazenar os valores de intensidade dos pixels que compõem toda a região interna do objeto.  
D) Utilizar apenas as dimensões do retângulo envolvente do objeto, considerando sua posição absoluta na imagem.  
E) Calcular a distância de cada ponto da fronteira até a origem (0, 0) da imagem.

**Gabarito:** A

**Gabarito do grupo:** B - C - A - B - A

---

## Grupo 5 — Capítulo 12: Reconhecimento de Objetos + Considerações Finais

1) [Questão não transcrita no documento]  
2) [Questão não transcrita no documento]  
3) [Questão não transcrita no documento]  
4) [Questão não transcrita no documento]  
5) [Questão não transcrita no documento]

**Gabarito:** [não informado no documento]
```