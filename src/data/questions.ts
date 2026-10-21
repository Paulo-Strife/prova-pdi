import type { Question } from '../types';

export const questions: Question[] = [
  {
    "id": 1,
    "topic": "Fundamentos da imagem digital",
    "origin": "1 — Capítulos 1 e 2 · questão 1",
    "question": "O seguinte modelo NÃO é utilizado na representação de uma imagem digital:",
    "options": [
      "Escala de cinza.",
      "RGB (Red-Green-Blue).",
      "DOI (Digital Object Identifier System).",
      "HSV (Hue-Saturation-Value).",
      "CMY (Cyan-Magenta-Yellow)."
    ],
    "correctIndex": 2,
    "editorialNote": "Gabarito ausente no anexo; completado como C na ordem original.",
    "explanation": "DOI identifica objetos; não é um modelo de representação de imagens.",
    "sources": [
      {
        "title": "DOI Foundation — identificadores",
        "url": "https://www.doi.org/the-identifier/what-is-a-doi/"
      }
    ]
  },
  {
    "id": 2,
    "topic": "Fundamentos da imagem digital",
    "origin": "1 — Capítulos 1 e 2 · questão 2",
    "question": "Um sistema de monitoramento utiliza radar de micro-ondas para investigar alterações de umidade no solo. Considerando o princípio físico do sensoriamento por radar, assinale a alternativa correta.",
    "options": [
      "As imagens de radar dependem da luz do Sol para iluminar a Terra, o que impede a coleta de dados durante a noite ou em dias nublados.",
      "O radar emite micro-ondas e mede o sinal retroespalhado. A presença de água altera as propriedades dielétricas do solo; a penetração depende da frequência e das condições do terreno.",
      "O radar opera como um sensor passivo, ou seja, ele não envia nenhum sinal, apenas escuta a radiação emitida naturalmente pelo solo.",
      "A penetração das micro-ondas no solo atinge profundidades infinitas, dependendo apenas da potência do satélite, sem sofrer interferência do tipo de solo ou da presença de água."
    ],
    "correctIndex": 1,
    "editorialNote": "Contexto jornalístico não verificado substituído por cenário genérico. Removida a garantia de penetração de 3 m e corrigida a descrição do sinal.",
    "explanation": "A umidade modifica as propriedades dielétricas e o retroespalhamento. A penetração depende do comprimento de onda e das condições do terreno.",
    "sources": [
      {
        "title": "ESA — umidade do solo e retroespalhamento",
        "url": "https://step.esa.int/main/wp-content/help/versions/14.0.0/snap-toolboxes/org.csa.rstb.rstb.op.soil.moisture.ui/operators/IEMMultiPol.html"
      }
    ]
  },
  {
    "id": 3,
    "topic": "Fundamentos da imagem digital",
    "origin": "1 — Capítulos 1 e 2 · questão 3",
    "question": "Uma empresa de visão computacional desenvolveu um sistema para inspeção automática de peças metálicas retangulares em uma linha de produção. As câmeras utilizadas capturam imagens em baixa resolução (320×240 pixels) devido a limitações de custo do hardware. Para permitir que os operadores visualizem os defeitos com mais clareza em um monitor de alta resolução, o sistema amplia digitalmente essas imagens antes de exibi-las. Os engenheiros notaram que, ao utilizar o método de ampliação padrão do sistema, as bordas retas das peças metálicas ficavam visivelmente serrilhadas e distorcidas, dificultando a análise visual. Considerando os métodos de interpolação utilizados no redimensionamento de imagens digitais, a alternativa que apresenta a técnica mais adequada para reduzir esse tipo de distorção nas bordas é:",
    "options": [
      "Utilizar a interpolação por vizinho mais próximo, pois esse método sempre preserva a nitidez original das bordas retas da imagem, sem introduzir distorções.",
      "Utilizar a interpolação bilinear, pois esse método estima o valor de cada novo pixel a partir dos quatro vizinhos mais próximos na imagem original, produzindo transições mais suaves e reduzindo distorções em bordas.",
      "Reduzir o número de níveis de intensidade (k) da imagem antes da ampliação, pois isso aumenta a resolução espacial e elimina a distorção nas bordas.",
      "Aumentar a faixa dinâmica da imagem antes da ampliação, pois isso corrige distorções geométricas causadas pelo processo de redimensionamento."
    ],
    "correctIndex": 1,
    "editorialNote": "Gabarito ausente no anexo; completado como B na ordem original.",
    "explanation": "A interpolação bilinear combina quatro vizinhos e suaviza as transições, embora não recupere detalhes que não foram capturados.",
    "sources": [
      {
        "title": "OpenCV — transformações geométricas",
        "url": "https://docs.opencv.org/4.x/da/d54/group__imgproc__transform.html"
      }
    ]
  },
  {
    "id": 4,
    "topic": "Fundamentos da imagem digital",
    "origin": "1 — Capítulos 1 e 2 · questão 4",
    "question": "Um engenheiro desenvolve um sistema para contar células em uma imagem microscópica binária. Para que a contagem seja precisa, o algoritmo precisa identificar \"caminhos\" únicos entre os pixels para definir as fronteiras dos objetos. Ao utilizar a adjacência-8, o engenheiro percebeu que o sistema gerava caminhos redundantes e ambiguidades em certas estruturas diagonais, o que dificultava a extração correta do esqueleto das células.\n\nConsiderando o conjunto de intensidades de interesse V={1}, qual critério de adjacência deve ser implementado para eliminar essas ambiguidades e qual a regra lógica que o define?",
    "options": [
      "Adjacência-4, pois ao restringir a conectividade apenas aos vizinhos horizontais e verticais, ela simplifica o contorno e impede naturalmente a formação de caminhos diagonais redundantes.",
      "Adjacência-8, pois por ser a mais abrangente (incluindo vizinhos-4 e diagonais), ela garante que nenhum pixel de interesse seja ignorado, sendo o padrão para evitar quebras em objetos finos.",
      "Adjacência-m (mista), que permite a conexão diagonal entre dois pixels p e q apenas se a interseção de seus vizinhos-4 não contiver nenhum pixel pertencente ao conjunto V, priorizando conexões diretas (4-vizinhos) sobre diagonais.",
      "Adjacência Euclidiana, que utiliza o cálculo da distância em linha reta para conectar pixels cujo valor seja inferior a um raio r, garantindo que a topologia da malha digital seja idêntica à do espaço contínuo."
    ],
    "correctIndex": 2,
    "editorialNote": "Início truncado reconstruído e gabarito completado como C; não é uma transcrição literal. Conferência: seção 2.5.2.",
    "explanation": "Na adjacência-m, vizinhos diagonais só se conectam se seus vizinhos-4 comuns não pertencerem a V.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 5,
    "topic": "Fundamentos da imagem digital",
    "origin": "1 — Capítulos 1 e 2 · questão 5",
    "question": "Um fotógrafo tira duas fotos da mesma parede branca: uma dentro de um quarto com pouca luz, e outra do lado de fora, sob sol forte. Embora a parede seja fisicamente a mesma, com a mesma cor, as duas fotos mostram tons de cinza bem diferentes, a primeira mais escura, a segunda mais clara.\n\nConsiderando o modelo de formação de imagem digital, no qual o valor de um ponto da imagem é dado por f(x,y) = i(x,y) · r(x,y), assinale a alternativa que explica corretamente esse fenômeno.",
    "options": [
      "A refletância da parede (r) mudou entre as duas fotos, pois materiais brancos alteram sua composição física conforme a luz incidente.",
      "O valor final da imagem depende apenas da refletância do objeto; a diferença observada foi causada exclusivamente por ajustes automáticos da câmera.",
      "A iluminação (i) foi diferente nos dois ambientes, e como o valor final da imagem é o produto entre iluminação e refletância, uma mudança na iluminação altera o resultado mesmo com a refletância constante.",
      "O fenômeno não tem relação com o modelo f(x,y) = i(x,y) · r(x,y), sendo explicado exclusivamente por processamento digital posterior à captura."
    ],
    "correctIndex": 2,
    "explanation": "Com r constante, a variação de i altera diretamente o produto f = i · r.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 6,
    "topic": "Intensidade e filtragem espacial",
    "origin": "2 — Capítulo 3 · questão 1",
    "question": "Um técnico em radiologia recebe uma imagem de ressonância magnética da coluna vertebral que se apresenta predominantemente escura. O objetivo é expandir os níveis de intensidade para revelar mais detalhes ocultos nas regiões escuras, mas sem alterar drasticamente o contraste das poucas regiões que já são claras.\n\nPara isso, decide-se utilizar uma transformação de potência (transformação gama) dada pela função:\n\n[[math:gamma]]\n\nConsidere 0 ≤ r ≤ 1, c = 1 e γ > 0. Considerando as propriedades das transformações de potência no realce de imagens digitais, a alternativa que apresenta a configuração mais adequada para resolver o problema do técnico é:",
    "options": [
      "Utilizar γ = 1, pois essa configuração preserva os detalhes originais da imagem sem introduzir ruídos no domínio espacial.",
      "Utilizar γ > 1, pois essa configuração comprime os tons escuros e expande os tons claros, realçando as partes brilhantes da ressonância.",
      "Utilizar γ < 1, pois essa configuração expande a faixa de tons escuros e comprime a de tons claros, revelando os detalhes ocultos na sombra.",
      "Utilizar um valor de constante c > 255, independentemente do gama, para garantir que os pixels atinjam a intensidade máxima de brilho permitida na imagem."
    ],
    "correctIndex": 2,
    "editorialNote": "Explicitado o domínio normalizado da transformação gama.",
    "explanation": "Para 0 < r < 1 e 0 < γ < 1, r elevado a γ é maior que r.",
    "sources": [
      {
        "title": "scikit-image — transformações de intensidade",
        "url": "https://scikit-image.org/docs/stable/api/skimage.exposure.html"
      }
    ]
  },
  {
    "id": 7,
    "topic": "Intensidade e filtragem espacial",
    "origin": "2 — Capítulo 3 · questão 2",
    "question": "Um engenheiro de software está desenvolvendo um aplicativo de edição de fotos para smartphones. Ele implementa a técnica de equalização de histograma com o objetivo de melhorar automaticamente o contraste de fotos tiradas em condições de iluminação ruins.\n\nDurante os testes, ele nota que algumas fotos, especialmente as que já tinham muitos pixels escuros, ficam com um aspecto artificial e \"lavado\".\n\nCom base nos conceitos de processamento de histograma para imagens digitais, qual é a afirmação correta sobre a equalização de histograma e o seu comportamento?",
    "options": [
      "A equalização sempre garante um histograma de saída perfeitamente uniforme (plano) para imagens discretas, resolvendo qualquer problema de iluminação.",
      "O algoritmo utiliza como função de transformação a função de distribuição acumulada (CDF) baseada no histograma da própria imagem de entrada.",
      "A técnica exige que o usuário defina manualmente o formato do histograma-alvo antes do processamento, caracterizando um processo de especificação (matching).",
      "A equalização atua como um filtro espacial local, analisando blocos de 3 × 3 pixels para suavizar bordas ao mesmo tempo que aumenta o contraste."
    ],
    "correctIndex": 1,
    "explanation": "A equalização usa a distribuição acumulada das intensidades; em imagens discretas, não garante um histograma perfeitamente uniforme.",
    "sources": [
      {
        "title": "OpenCV — equalização",
        "url": "https://docs.opencv.org/4.x/d4/d1b/tutorial_histogram_equalization.html"
      }
    ]
  },
  {
    "id": 8,
    "topic": "Intensidade e filtragem espacial",
    "origin": "2 — Capítulo 3 · questão 3",
    "question": "Ao projetar um sistema de visão computacional para uma linha de montagem industrial, um grupo de estudantes precisa aplicar uma filtragem espacial linear para suavizar (borrar) as imagens capturadas e reduzir o ruído do sensor.\n\nEles estudam a teoria por trás da operação de vizinhança e debatem sobre o uso de duas abordagens matemáticas fundamentais: a correlação e a convolução.\n\nConsiderando uma máscara de filtragem espacial w(x, y) de dimensões 3 × 3, qual é a diferença fundamental entre as operações de correlação e convolução no domínio espacial?",
    "options": [
      "A convolução exige que a máscara seja rotacionada em 180° antes de realizar o processo de soma dos produtos pela vizinhança da imagem.",
      "A correlação só pode ser aplicada em imagens coloridas (RGB), enquanto a convolução é restrita a imagens em tons de cinza.",
      "A convolução elimina a necessidade de se preencher as bordas da imagem original com zeros (técnica de padding).",
      "A correlação utiliza matrizes (máscaras) que devem ser, obrigatoriamente, maiores do que as máscaras utilizadas na convolução."
    ],
    "correctIndex": 0,
    "explanation": "A convolução inverte a máscara em ambos os eixos, o equivalente a uma rotação de 180°.",
    "sources": [
      {
        "title": "OpenCV — filtragem e morfologia",
        "url": "https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html"
      }
    ]
  },
  {
    "id": 9,
    "topic": "Intensidade e filtragem espacial",
    "origin": "2 — Capítulo 3 · questão 4",
    "question": "Durante o processamento de imagens de satélite, é frequentemente necessário realçar detalhes finos, como ruas e construções, que aparecem borrados devido à distância e a fatores atmosféricos. Uma equipe de analistas decide utilizar uma técnica de aguçamento (nitidez) no domínio espacial, baseada no uso de operadores derivativos isotrópicos (que são invariantes à rotação).\n\nQual das seguintes alternativas apresenta a técnica mais adequada para realçar detalhes finos de forma isotrópica, com base em derivadas de segunda ordem?",
    "options": [
      "A aplicação de um filtro de mediana 3 × 3, que além de eliminar o ruído impulsivo, atua acentuando transições abruptas de intensidade.",
      "O uso do operador Gradiente de Sobel (∇f), que calcula a primeira derivada da imagem destacando as bordas independentemente da direção.",
      "A soma ou subtração do operador Laplaciano (∇²f) em relação à imagem original, dependendo do sinal do coeficiente central da máscara aplicada.",
      "A aplicação sucessiva de filtros de média espacial, de modo a isolar as altas frequências remanescentes na imagem final."
    ],
    "correctIndex": 2,
    "explanation": "O Laplaciano usa derivadas de segunda ordem; o sinal de incorporação depende da convenção da máscara.",
    "sources": [
      {
        "title": "OpenCV — Laplaciano",
        "url": "https://docs.opencv.org/4.x/d5/db5/tutorial_laplace_operator.html"
      }
    ]
  },
  {
    "id": 10,
    "topic": "Intensidade e filtragem espacial",
    "origin": "2 — Capítulo 3 · questão 5",
    "question": "Um sistema automatizado de diagnóstico por imagem precisa destacar lesões escuras em tomografias sem utilizar fórmulas globais rígidas, já que as características de \"escuro\" e \"claro\" variam entre pacientes.\n\nA equipe decide aplicar Lógica Fuzzy para o realce de contraste, utilizando regras linguísticas formuladas por médicos, como:\n\n“SE o pixel pertence a uma região muito escura, ENTÃO torne-o ainda mais escuro”\n\nConsiderando a aplicação da Lógica Fuzzy em transformações de intensidade, assinale a principal vantagem dessa abordagem quando comparada a técnicas globais tradicionais:",
    "options": [
      "A Lógica Fuzzy exige que cada pixel seja transformado obrigatoriamente para os valores limites (0 ou 255), binarizando a imagem final de forma precisa.",
      "Ela permite incorporar conhecimento impreciso de especialistas por meio de graus de pertinência e regras SE–ENTÃO para controlar as transformações de intensidade.",
      "A etapa de fuzzificação substitui a necessidade de matrizes espaciais, o que só a torna aplicável quando combinada com a transformada de Fourier no domínio da frequência.",
      "O processo elimina completamente o ruído impulsivo (\"sal e pimenta\") da imagem, pois atua da mesma forma que os filtros de estatística de ordem (ex: mediana)."
    ],
    "correctIndex": 1,
    "editorialNote": "Removida da alternativa B a garantia absoluta de ausência de efeito artificial; a qualidade depende das regras e funções de pertinência. Conferência: seção 3.8.",
    "explanation": "Regras fuzzy permitem representar graus de pertinência e conhecimento linguístico, sem exigir decisões binárias de intensidade.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 11,
    "topic": "Domínio da frequência",
    "origin": "3 — Capítulo 4 · questão 1",
    "question": "Um engenheiro quer calcular a convolução linear entre uma imagem e um filtro usando FFT. Ele calcula as transformadas em uma grade do tamanho da imagem, multiplica os espectros e aplica a transformada inversa. O resultado apresenta sobreposição entre bordas opostas (wrap-around). Qual etapa foi omitida?",
    "options": [
      "Ele esqueceu de multiplicar a imagem por (-1)^(x+y) antes de calcular a FFT para centralizar o espectro de frequências.",
      "Ele não realizou o preenchimento com zeros (zero-padding) adequado nas imagens de entrada antes de calcular a transformada.",
      "O filtro escolhido era um Filtro Ideal, o que causou o efeito de ringing (anelamento) nas bordas da imagem processada.",
      "Ele utilizou apenas a parte real da Transformada Inversa de Fourier, descartando a parte imaginária que continha as bordas."
    ],
    "correctIndex": 1,
    "editorialNote": "Enunciado ausente reconstruído a partir das alternativas e do gabarito B. Versão adaptada, sem alegação de recuperar o texto original.",
    "explanation": "Sem preenchimento suficiente, a multiplicação das DFTs produz convolução circular e pode misturar bordas opostas.",
    "sources": [
      {
        "title": "SciPy — convolução por FFT",
        "url": "https://docs.scipy.org/doc/scipy/reference/generated/scipy.signal.fftconvolve.html"
      }
    ]
  },
  {
    "id": 12,
    "topic": "Domínio da frequência",
    "origin": "3 — Capítulo 4 · questão 2",
    "question": "Em sistemas de visão computacional, filtros passa-baixa no domínio da frequência são frequentemente usados para suavização e redução de ruído. Analisando as características do Filtro Passa-Baixa Ideal (ILPF), do Filtro Passa-Baixa de Butterworth (BLPF) e do Filtro Passa-Baixa Gaussiano (GLPF), é correto afirmar que:",
    "options": [
      "O Filtro Gaussiano apresenta o efeito de anelamento (ringing) mais severo de todos, devido à sua geometria sino-espacial.",
      "O Filtro Passa-Baixa Ideal, por ter um corte perfeitamente abrupto no domínio da frequência, não produz artefatos visuais no domínio espacial.",
      "O Filtro de Butterworth de ordem muito alta (n tendendo ao infinito) aproxima-se do comportamento de um Filtro Ideal, passando a exibir efeito de anelamento.",
      "Todos os três filtros mencionados eliminam a componente DC (frequência zero) da imagem, causando necessariamente uma tela totalmente preta."
    ],
    "correctIndex": 2,
    "explanation": "O aumento da ordem torna a transição de Butterworth mais abrupta e próxima da resposta ideal.",
    "sources": [
      {
        "title": "scikit-image — filtros de frequência e inversos",
        "url": "https://scikit-image.org/docs/stable/api/skimage.filters.html"
      }
    ]
  },
  {
    "id": 13,
    "topic": "Domínio da frequência",
    "origin": "3 — Capítulo 4 · questão 3",
    "question": "Ao aplicar um Filtro Passa-Alta no domínio da frequência, as bordas de uma imagem são realçadas, mas a imagem resultante costuma perder seu tom geral e as áreas lisas tendem ao fundo escuro. Para contornar esse problema, preservando o brilho geral e o fundo da imagem original enquanto as bordas são realçadas, a técnica mais indicada é:",
    "options": [
      "Aplicar o filtro passa-alta duas vezes consecutivas para forçar a recuperação da iluminação perdida.",
      "Reduzir a frequência de corte do filtro passa-alta para o valor zero, convertendo as altas em baixas frequências.",
      "Utilizar a filtragem de ênfase de altas frequências, adicionando uma constante e multiplicando o filtro por um ganho.",
      "Substituir o filtro passa-alta por um filtro passa-banda com largura de banda extremamente estreita em torno da origem."
    ],
    "correctIndex": 2,
    "explanation": "Uma resposta a + bH, com a positivo, preserva a componente de fundo enquanto enfatiza altas frequências.",
    "sources": [
      {
        "title": "scikit-image — filtros de frequência e inversos",
        "url": "https://scikit-image.org/docs/stable/api/skimage.filters.html"
      }
    ]
  },
  {
    "id": 14,
    "topic": "Domínio da frequência",
    "origin": "3 — Capítulo 4 · questão 4",
    "question": "A Transformada Discreta de Fourier (DFT) mapeia uma imagem do domínio espacial para o domínio da frequência, resultando em um espectro composto por magnitude e fase. Em um experimento clássico, a magnitude calculada da imagem de um Gato é combinada com a fase calculada da imagem de uma Casa, e a transformada inversa é executada. Sobre a imagem resultante deste experimento, assinale a afirmativa correta:",
    "options": [
      "A imagem resultante será visualmente muito semelhante à do Gato, pois a magnitude contém as informações estruturais da imagem.",
      "As frequências armazenadas na magnitude ditam a geometria dos objetos, forçando o resultado a ser um Gato com textura de Casa.",
      "A imagem resultante exibirá fortemente a estrutura geométrica da Casa, evidenciando que a fase carrega a informação espacial da localização das formas.",
      "A transformada inversa falhará em gerar uma imagem reconhecível, pois o teorema de Fourier exige simetria conjugada original para o retorno ao domínio espacial."
    ],
    "correctIndex": 2,
    "explanation": "A fase determina a posição relativa das componentes e é decisiva para a estrutura espacial reconstruída.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 15,
    "topic": "Domínio da frequência",
    "origin": "3 — Capítulo 4 · questão 5",
    "question": "O modelo clássico de iluminação-reflexão descreve uma imagem como o produto de duas componentes f(x,y) = i(x,y) * r(x,y). Para tratar imagens capturadas sob iluminação muito desuniforme (como sombras duras), utiliza-se a técnica de Filtragem Homomórfica no domínio da frequência. Sobre as etapas dessa filtragem, é correto afirmar que:",
    "options": [
      "O objetivo da técnica é atenuar a componente r(x,y) (reflexão) e amplificar a componente i(x,y) (iluminação).",
      "A técnica requer a aplicação do cálculo exponencial antes de transformar a imagem para o domínio da frequência, visando a separação espacial.",
      "O processo aplica um logaritmo natural na imagem original para converter o produto f = i * r em uma soma, permitindo a separação dessas componentes pelo filtro.",
      "Como a iluminação varia de forma muito brusca e os detalhes do objeto (reflexão) variam lentamente, usa-se um filtro passa-baixa severo para o ajuste."
    ],
    "correctIndex": 2,
    "explanation": "O logaritmo transforma o produto iluminação–refletância em soma.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 16,
    "topic": "Restauração e reconstrução",
    "origin": "4 — Capítulo 5 · questão 1",
    "question": "Considere um cenário em que um sistema automatizado de inspeção visual recebe imagens corrompidas por uma alta densidade de ruído impulsivo (sal e pimenta). O sistema precisa limpar a imagem garantindo a máxima preservação de bordas e detalhes finos (como linhas finas e pontos pequenos).\n\nI. A aplicação de um Filtro de Média Aritmética atenuará o ruído impulsivo presente na imagem, mas terá como consequência direta o borramento das bordas e a perda de nitidez dos detalhes.  \nII. O Filtro de Mediana padrão é a escolha definitiva e à prova de falhas para esse cenário, pois ele substitui apenas os pixels de ruído pela mediana local, garantindo que nenhum detalhe fino da imagem seja perdido independentemente da densidade do ruído.  \nIII. O Filtro Adaptativo de Mediana é altamente recomendado para este caso, pois ele possui a capacidade de aumentar dinamicamente o tamanho de sua janela de busca caso a mediana calculada seja considerada um ruído, preservando o valor original do pixel se este não for um impulso.  \nIV. O Filtro de Ponto Médio seria a solução computacional mais eficiente para eliminar esse ruído de sal e pimenta, pois ele calcula exatamente a média entre os valores máximo e mínimo da vizinhança.",
    "options": [
      "I e III, apenas.",
      "II e IV, apenas.",
      "I, II e III, apenas.",
      "III e IV, apenas.",
      "I, II, III e IV."
    ],
    "correctIndex": 0,
    "editorialNote": "Trecho inicial truncado substituído por introdução completa; gabarito A mantido. Conferência: seção 5.3, mediana adaptativa.",
    "explanation": "A média borra detalhes; a mediana adaptativa ajusta a janela e busca preservar pixels que não sejam impulsos.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 17,
    "topic": "Restauração e reconstrução",
    "origin": "4 — Capítulo 5 · questão 2",
    "question": "Durante a aquisição de uma imagem, um sistema de captura apresenta interferências que provocam alterações nos níveis de intensidade dos pixels. Ao analisar algumas imagens produzidas pelo sistema, um técnico observa que determinadas imagens apresentam um padrão repetitivo. Ao aplicar a Transformada de Fourier sobre uma dessas imagens, são observados picos bem definidos no espectro.\n\nEm outro conjunto de imagens, não há um padrão periódico visualmente evidente. Nesse caso, o técnico seleciona pequenas regiões do fundo que possuem intensidade aproximadamente constante e constrói histogramas dos valores de intensidade dessas regiões. Os histogramas apresentam formatos semelhantes aos de algumas funções densidade de probabilidade de ruído estudadas.\n\nConsiderando os procedimentos apresentados por Gonzalez e Woods para a caracterização e estimativa dos parâmetros de ruído, assinale a alternativa que apresenta a interpretação mais adequada para as duas situações descritas.",
    "options": [
      "Nas imagens com padrão repetitivo, os picos observados no espectro de Fourier indicam componentes associados ao ruído periódico. Para os demais casos, os histogramas obtidos de regiões aproximadamente constantes podem ser comparados às PDFs de ruído para identificar a distribuição e auxiliar na estimativa de seus parâmetros.",
      "Nas imagens com padrão repetitivo, os picos no espectro de Fourier indicam necessariamente a presença de ruído gaussiano. Nas demais imagens, basta calcular a média dos pixels da região selecionada para determinar diretamente o tipo de ruído presente.",
      "Nas imagens com padrão repetitivo, a análise deve ser realizada exclusivamente no domínio espacial, pois a Transformada de Fourier é utilizada apenas para imagens sem ruído periódico. Para os demais casos, o histograma deve ser desconsiderado, pois não permite identificar características estatísticas do ruído.",
      "Nas imagens com padrão repetitivo, os picos no espectro de Fourier representam diretamente pixels pretos e brancos causados pelo ruído impulsivo. Nas demais imagens, a análise do histograma permite determinar qualquer modelo de ruído apenas pela observação de sua média, sem necessidade de considerar sua variância."
    ],
    "correctIndex": 0,
    "explanation": "Periodicidade gera componentes espectrais localizadas; regiões uniformes auxiliam a estimar distribuições de ruído.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 18,
    "topic": "Restauração e reconstrução",
    "origin": "4 — Capítulo 5 · questão 3",
    "question": "Uma equipe dispõe de 100 imagens da mesma cena estática, capturadas sob baixa iluminação e com a mesma exposição. O ruído é aditivo, de média zero, independente entre capturas e tem a mesma variância. Qual procedimento reduz o ruído preservando o sinal da cena?",
    "options": [
      "A equipe deve aplicar um filtro de mediana de tamanho 3×3 em uma das imagens isoladas, pois este filtro de estatística de ordem elimina totalmente o ruído aleatório de sensores e não provoca perda de detalhes.",
      "A equipe deve utilizar um filtro passa-alta no domínio da frequência sobre a soma das imagens, pois os ruídos aleatórios de sensores concentram-se predominantemente nas baixas frequências da transformada de Fourier.",
      "A equipe deve calcular a média aritmética pixel a pixel das 100 imagens, certificando-se de que elas estejam previamente registradas (alinhadas), o que reduzirá o desvio padrão do ruído da imagem média em um fator de 10.",
      "A equipe deve aplicar uma máscara de nitidez (unsharp masking) em uma das imagens ruidosas subtraindo uma versão borrada da original, pois isso reduzirá a variância do ruído a zero e realçará as estrelas."
    ],
    "correctIndex": 2,
    "editorialNote": "Pergunta truncada completada. Explicitadas 100 capturas alinhadas e as hipóteses estatísticas.",
    "explanation": "Para N ruídos independentes de mesma variância, a média tem desvio padrão σ/√N; com N = 100, o fator é 10.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 19,
    "topic": "Restauração e reconstrução",
    "origin": "4 — Capítulo 5 · questão 4",
    "question": "Considerando os fundamentos matemáticos e a evolução geométrica da Tomografia Computadorizada (CT), qual é a principal justificativa técnica para a utilização combinada do filtro rampa janelado (como a janela de Hamming) no domínio da frequência e da alta densidade de amostragem angular em scanners modernos de feixe em leque?",
    "options": [
      "A janela de Hamming substitui a Transformada de Radon na geração de senogramas, enquanto a amostragem angular densa compensa os lentos movimentos de translação obrigatórios nas terceira e quarta gerações de scanners.",
      "O filtro rampa compensa o borramento da retroprojeção direta; a janela de Hamming reduz o ringing com compromisso de resolução, e a amostragem angular suficientemente densa reduz artefatos de aliasing na reconstrução.",
      "O janelamento elimina a necessidade de aplicar o Teorema da Fatia de Fourier, permitindo a reconstrução direta do laminograma no domínio espacial, e a amostragem densa reduz o espalhamento de raios X.",
      "A combinação de filtros serve exclusivamente para amplificar os artefatos de \"ringing\" no domínio da frequência, reduzindo a carga computacional, o que permite o uso de poucos detectores sem gerar distorções."
    ],
    "correctIndex": 1,
    "editorialNote": "Alternativa B ajustada para não prometer prevenção absoluta de aliasing nem restringi-lo à conversão entre geometrias. Conferência: seção 5.11, reconstrução por projeções.",
    "explanation": "A rampa compensa o borramento da retroprojeção; o janelamento controla altas frequências e a amostragem angular densa limita aliasing.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 20,
    "topic": "Restauração e reconstrução",
    "origin": "4 — Capítulo 5 · questão 5",
    "question": "No domínio da frequência, o modelo de degradação de uma imagem é representado por G(u, v) = H(u, v)F(u, v) + N(u, v). Ao tentarmos recuperar a estimativa da imagem original F(u, v) por meio da filtragem inversa direta, foram identificadas limitações severas de instabilidade matemática causadas pela presença de ruído. Assinale a alternativa que apresenta uma limitação real ou uma estratégia correta de mitigação descrita para esse método:",
    "options": [
      "A divisão direta realizada no método de filtragem inversa G(u, v)/H(u, v) é realizada através de uma multiplicação clássica pela inversa da matriz de degradação H, e não por uma operação de divisão elemento a elemento (arranjo matricial).",
      "Uma técnica prática para contornar o problema de valores nulos ou muito pequenos na função de degradação consiste em limitar as frequências do filtro a valores próximos à origem espectral, onde H(u, v) costuma apresentar seus maiores valores.",
      "A filtragem inversa direta garante a recuperação perfeita da imagem original mesmo na presença de ruído aditivo N(u, v), pois a divisão direta consegue isolar completamente e subtrair o termo aleatório de ruído do domínio da frequência.",
      "Funções de degradação com formato gaussiano são as mais problemáticas e instáveis para a filtragem inversa porque, por definição, possuem múltiplos valores iguais a zero em frequências intermediárias."
    ],
    "correctIndex": 1,
    "explanation": "Dividir por H muito pequeno amplifica o ruído; restringir a inversão reduz essa instabilidade.",
    "sources": [
      {
        "title": "scikit-image — filtros de frequência e inversos",
        "url": "https://scikit-image.org/docs/stable/api/skimage.filters.html"
      }
    ]
  },
  {
    "id": 21,
    "topic": "Imagens coloridas",
    "origin": "5 — Capítulo 6 · questão 1",
    "question": "Qual grandeza radiométrica mede a energia radiante emitida por uma fonte por unidade de tempo, sendo expressa em watts?",
    "options": [
      "Cromaticidade",
      "Fluxo radiante (potência radiante)",
      "Brilho",
      "Luminância"
    ],
    "correctIndex": 1,
    "editorialNote": "Correção conceitual: o anexo chamava a grandeza em watts de radiância. Enunciado e alternativa B foram corrigidos para fluxo radiante.",
    "explanation": "Fluxo radiante é potência em watts. Radiância tem unidade W/(m²·sr); energia é medida em joules.",
    "sources": [
      {
        "title": "NIST — radiometria e fotometria",
        "url": "https://nvlpubs.nist.gov/nistpubs/jres/106/1/j61par.pdf"
      }
    ]
  },
  {
    "id": 22,
    "topic": "Imagens coloridas",
    "origin": "5 — Capítulo 6 · questão 2",
    "question": "Qual conceito resulta da combinação direta entre a matiz (hue) e a saturação de uma cor?",
    "options": [
      "Cromaticidade",
      "Radiância",
      "Brilho",
      "Luminância"
    ],
    "correctIndex": 0,
    "explanation": "Matiz e saturação caracterizam a cromaticidade.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 23,
    "topic": "Imagens coloridas",
    "origin": "5 — Capítulo 6 · questão 3",
    "question": "Qual é a razão principal para a adição do pigmento Preto (K) de forma independente no modelo CMYK?",
    "options": [
      "A mistura prática de CMY produz um tom marrom escuro",
      "Os pigmentos Ciano e Amarelo refletem toda a luz visível",
      "O modelo CMYK não consegue reproduzir tons de cinza",
      "O pigmento Preto reduz o custo de fabricação do Ciano"
    ],
    "correctIndex": 0,
    "explanation": "Pigmentos reais não produzem preto ideal ao misturar CMY; o canal K melhora a reprodução de preto.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 24,
    "topic": "Imagens coloridas",
    "origin": "5 — Capítulo 6 · questão 4",
    "question": "Qual dos espaços de cor abaixo representa explicitamente matiz, saturação e intensidade em componentes distintas, permitindo processar a intensidade separadamente das componentes cromáticas?",
    "options": [
      "CMYK",
      "HSI",
      "CIE XYZ",
      "RGB"
    ],
    "correctIndex": 1,
    "editorialNote": "Substituída a expressão absoluta “ideal” por uma descrição do modelo HSI.",
    "explanation": "HSI organiza a cor em matiz, saturação e intensidade; isso permite tratar a intensidade separadamente.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 25,
    "topic": "Imagens coloridas",
    "origin": "5 — Capítulo 6 · questão 5",
    "question": "Em que consiste a técnica de fatiamento de intensidade no processamento de pseudocores?",
    "options": [
      "Filtrar frequências altas no domínio da transformada de Fourier",
      "Converter todos os pixels vermelhos para o canal de luz azul",
      "Equalizar a saturação dos canais RGB de forma contínua",
      "Dividir o histograma monocromático e atribuir cores às faixas"
    ],
    "correctIndex": 3,
    "explanation": "O fatiamento associa uma cor a cada intervalo de intensidades da imagem original.",
    "sources": [
      {
        "title": "Gonzalez & Woods, 3ª ed. — texto dos autores, capítulos 2–6",
        "url": "https://studylib.net/doc/25973196/digital-image-processing--3rd-e----rafael-c.-gonzalez"
      }
    ]
  },
  {
    "id": 26,
    "topic": "Wavelets e multirresolução",
    "origin": "1 — Capítulo 7 · questão 1",
    "question": "Um pesquisador precisa desenvolver um sistema de análise de imagens capaz de identificar, na mesma cena, tanto pequenos detalhes de baixo contraste quanto grandes objetos homogêneos. De acordo com os fundamentos do processamento multirresolução de imagens, qual é a estratégia mais adequada para esse problema?",
    "options": [
      "Representar a imagem em múltiplas resoluções (por exemplo, por meio de uma pirâmide de imagem), permitindo analisar desde aproximações grosseiras até detalhes finos.",
      "Reduzir a imagem a uma única versão de baixíssima resolução, eliminando as informações de textura consideradas irrelevantes.",
      "Segmentar a imagem em blocos de tamanho fixo e processar cada bloco isoladamente, sem relação entre as escalas.",
      "Utilizar somente a Transformada de Fourier global da imagem, sem considerar variações espaciais de resolução."
    ],
    "correctIndex": 0,
    "explanation": "Múltiplas resoluções permitem examinar estruturas em escalas distintas.",
    "sources": [
      {
        "title": "PyWavelets — DWT 2D e convenções de coordenadas",
        "url": "https://pywavelets.readthedocs.io/en/latest/ref/2d-dwt-and-idwt.html"
      }
    ]
  },
  {
    "id": 27,
    "topic": "Wavelets e multirresolução",
    "origin": "1 — Capítulo 7 · questão 2",
    "question": "A transformada de Haar H2 decompõe um par de pixels (f1, f2) em dois coeficientes: um de aproximação (média) e um de detalhe (diferença), segundo a matriz anexada:\n\n[[math:haar]]\n\nEssa propriedade é amplamente explorada em algoritmos de compressão de imagens digitais. Considerando a aplicação da transformada de Haar H2 a pares de pixels vizinhos localizados em regiões suaves de uma imagem (isto é, regiões sem bordas ou variações bruscas de intensidade), é correto afirmar que:",
    "options": [
      "Os coeficientes de detalhe (diferença) tendem a assumir valores altos, uma vez que capturam a intensidade média da região analisada.",
      "Os coeficientes de aproximação (média) tendem a zero, pois representam exclusivamente o ruído presente na imagem.",
      "Os coeficientes de detalhe (diferença) tendem a valores próximos de zero, o que favorece a compressão por meio da eliminação ou da codificação econômica desses coeficientes.",
      "A matriz H2 deixa de ser ortonormal quando aplicada a regiões suaves da imagem, tornando necessário o cálculo de uma base dual para a reconstrução."
    ],
    "correctIndex": 2,
    "explanation": "Em pares semelhantes, (f1 − f2)/√2 fica próximo de zero.",
    "sources": [
      {
        "title": "PyWavelets — DWT 2D e convenções de coordenadas",
        "url": "https://pywavelets.readthedocs.io/en/latest/ref/2d-dwt-and-idwt.html"
      }
    ]
  },
  {
    "id": 28,
    "topic": "Wavelets e multirresolução",
    "origin": "1 — Capítulo 7 · questão 3",
    "question": "Uma equipe de engenharia está desenvolvendo um sistema de identificação biométrica que utiliza a Transformada Wavelet Discreta para processar e armazenar imagens de impressões digitais. O algoritmo trabalha com a Análise de Multirresolução, transitando entre diferentes níveis de detalhes da imagem, representados matematicamente pelos espaços vetoriais Vⱼ e Wⱼ. O engenheiro líder explica para a equipe que a imagem em sua resolução mais alta, chamada de Vⱼ₊₁, é formada pela relação fundamental da multirresolução: Vⱼ₊₁ = Vⱼ ⊕ Wⱼ.\n\nConsiderando o papel prático de cada espaço vetorial nessa equação de multirresolução, assinale a alternativa que descreve corretamente como a imagem é dividida e reconstruída:",
    "options": [
      "O espaço V_j armazena os detalhes finos e as variações bruscas (criados pela função wavelet psi), enquanto o espaço W_j armazena a versão borrada da impressão digital (criada pela função de escala phi).",
      "O espaço W_j atua de forma complementar ao espaço V_j, guardando exclusivamente os detalhes finos e contornos que faltam na aproximação (V_j) para reconstruir perfeitamente a imagem em alta resolução (V_{j+1}).",
      "Ambos os espaços, V_j e W_j, são criados exclusivamente pela função de escala (phi), o que garante que as altas frequências da imagem sejam preservadas em todas as resoluções.",
      "O espaço V_{j+1} é gerado ignorando o espaço W_j durante a transformada inversa, já que a versão aproximada presente em V_j possui sozinha toda a informação necessária para reconstruir a imagem sem perdas."
    ],
    "correctIndex": 1,
    "explanation": "W_j fornece os detalhes complementares à aproximação V_j.",
    "sources": [
      {
        "title": "PyWavelets — DWT 2D e convenções de coordenadas",
        "url": "https://pywavelets.readthedocs.io/en/latest/ref/2d-dwt-and-idwt.html"
      }
    ]
  },
  {
    "id": 29,
    "topic": "Wavelets e multirresolução",
    "origin": "1 — Capítulo 7 · questão 4",
    "question": "Um estudante está aprendendo sobre a arquitetura em banco de filtros utilizada na Transformada Rápida de Wavelet (FWT). Ele sabe que, a cada estágio, o sinal da imagem passa simultaneamente por dois filtros digitais, um passa-baixa e um passa-alta, seguidos de subamostragem. Sobre o resultado gerado por cada um desses filtros, é correto afirmar que:",
    "options": [
      "O filtro passa-baixa gera os coeficientes de detalhes, isolando bordas e texturas, enquanto o filtro passa-alta gera os coeficientes de aproximação, produzindo uma versão borrada da imagem.",
      "O filtro passa-baixa gera os coeficientes de aproximação, produzindo uma versão suavizada (borrada) da imagem com sua estrutura fundamental, enquanto o filtro passa-alta gera os coeficientes de detalhes, isolando bordas, ruídos e texturas.",
      "Ambos os filtros, passa-baixa e passa-alta, geram exatamente o mesmo tipo de coeficiente, diferindo apenas na escala em que são aplicados.",
      "O filtro passa-baixa remove completamente a informação da imagem, sendo utilizado apenas como etapa preparatória antes da aplicação do filtro passa-alta."
    ],
    "correctIndex": 1,
    "explanation": "Passa-baixa produz aproximações; passa-alta produz detalhes.",
    "sources": [
      {
        "title": "PyWavelets — DWT 2D e convenções de coordenadas",
        "url": "https://pywavelets.readthedocs.io/en/latest/ref/2d-dwt-and-idwt.html"
      }
    ]
  },
  {
    "id": 30,
    "topic": "Wavelets e multirresolução",
    "origin": "1 — Capítulo 7 · questão 5",
    "question": "Uma inspeção por wavelets 2D procura microfissuras verticais em uma chapa. Considere x como eixo horizontal e y como eixo vertical. Nesta questão, a primeira letra da sub-banda indica o filtro em x e a segunda, em y (H = passa-alta; L = passa-baixa). Qual sub-banda destaca transições de intensidade ao atravessar uma fissura vertical?",
    "options": [
      "LL, com φ(x)φ(y), retendo aproximações de baixa frequência nos dois eixos.",
      "LH, com φ(x)ψ(y), medindo variações na direção vertical.",
      "HL, com ψ(x)φ(y), medindo variações na direção horizontal.",
      "HH, com ψ(x)ψ(y), isolando apenas a iluminação uniforme."
    ],
    "correctIndex": 2,
    "editorialNote": "Enunciado e alternativas adaptados para fixar x horizontal e y vertical; HL indica passa-alta em x e passa-baixa em y. Letra C original mantida com descrição corrigida.",
    "explanation": "Uma borda vertical varia em x. Na convenção declarada, ψ(x)φ(y) detecta essa variação. Nomes HL/LH dependem da convenção dos eixos.",
    "sources": [
      {
        "title": "PyWavelets — DWT 2D e convenções de coordenadas",
        "url": "https://pywavelets.readthedocs.io/en/latest/ref/2d-dwt-and-idwt.html"
      }
    ]
  },
  {
    "id": 32,
    "topic": "Compressão de imagens",
    "origin": "2 — Capítulo 8 · questão 2",
    "question": "Considere uma imagem cujos níveis de intensidade não ocorrem com a mesma frequência. Alguns valores são muito comuns e outros aparecem raramente. Qual técnica é mais diretamente associada à redução da redundância de codificação nesse caso?",
    "options": [
      "Equalização de histograma, pois redistribui os níveis de cinza para melhorar contraste.",
      "Codificação de Huffman, pois atribui códigos menores aos símbolos mais frequentes.",
      "Filtro da média, pois suaviza regiões ruidosas antes da compressão.",
      "Amostragem espacial, pois aumenta a resolução da imagem original."
    ],
    "correctIndex": 1,
    "explanation": "Huffman associa códigos mais curtos a símbolos mais frequentes.",
    "sources": [
      {
        "title": "ITU-T T.81 — JPEG",
        "url": "https://www.w3.org/Graphics/JPEG/itu-t81.pdf"
      }
    ]
  },
  {
    "id": 33,
    "topic": "Compressão de imagens",
    "origin": "2 — Capítulo 8 · questão 3",
    "question": "Em um sistema de compressão com perda, a imagem reconstruída pode diferir da imagem original. Considerando os critérios de fidelidade apresentados, assinale a alternativa correta.",
    "options": [
      "RMSE igual a zero indica reconstrução diferente da imagem original.",
      "Critérios subjetivos são baseados apenas em equações sobre pixels.",
      "A quantização é sempre reversível quando aplicada depois de uma transformada.",
      "RMSE mede erro objetivo, mas pode não corresponder perfeitamente à percepção visual."
    ],
    "correctIndex": 3,
    "explanation": "O erro quadrático resume diferenças numéricas, mas não descreve integralmente a percepção visual.",
    "sources": []
  },
  {
    "id": 34,
    "topic": "Compressão de imagens",
    "origin": "2 — Capítulo 8 · questão 4",
    "question": "No JPEG baseline, uma imagem é processada em blocos e passa por transformada, quantização e codificação. Qual alternativa descreve adequadamente o papel desses estágios?",
    "options": [
      "A DCT criptografa os pixels e impede a reconstrução da imagem.",
      "A quantização tende a gerar muitos coeficientes pequenos ou nulos, favorecendo RLE e Huffman.",
      "O Huffman é responsável pela perda visual, pois descarta altas frequências.",
      "O RLE aumenta propositalmente os zeros para melhorar a qualidade visual."
    ],
    "correctIndex": 1,
    "explanation": "A quantização reduz a precisão dos coeficientes e pode zerá-los, favorecendo a codificação subsequente.",
    "sources": [
      {
        "title": "ITU-T T.81 — JPEG",
        "url": "https://www.w3.org/Graphics/JPEG/itu-t81.pdf"
      }
    ]
  },
  {
    "id": 35,
    "topic": "Compressão de imagens",
    "origin": "2 — Capítulo 8 · questão 5",
    "question": "Para uma imagem com forte correlação entre pixels vizinhos, cada pixel é previsto a partir do pixel anterior da mesma linha, e o compressor codifica o resíduo entre valor real e valor previsto. Sobre esse procedimento, assinale a alternativa correta.",
    "options": [
      "O algoritmo é com perda porque todo método preditivo descarta resíduos pequenos.",
      "A predição substitui Huffman e elimina a necessidade de codificação de símbolos.",
      "Os resíduos tendem a se concentrar próximos de zero, tornando a codificação Huffman mais eficiente.",
      "A primeira coluna não precisa ser armazenada, pois todos os pixels podem ser previstos."
    ],
    "correctIndex": 2,
    "editorialNote": "Acrescentada a hipótese de correlação entre pixels vizinhos; gabarito C mantido.",
    "explanation": "Em regiões correlacionadas, diferenças entre vizinhos costumam ser pequenas e podem ser codificadas de modo eficiente.",
    "sources": [
      {
        "title": "ITU-T T.81 — JPEG",
        "url": "https://www.w3.org/Graphics/JPEG/itu-t81.pdf"
      }
    ]
  },
  {
    "id": 36,
    "topic": "Morfologia e segmentação",
    "origin": "3 — Capítulos 9 e 10 · questão 1",
    "question": "Considere letras brancas sobre fundo preto. No contexto de processamento morfológico de imagens binárias, considere uma imagem de documentos escaneados contendo letras que foram corrompidas, apresentando pequenos pontos brancos ao redor do texto (ruído de fundo) e pequenos buracos negros dentro das letras. Deseja-se remover os pequenos pontos brancos do fundo sem alterar significativamente o formato e a espessura das letras originais. Qual operação morfológica é a mais adequada para atingir esse objetivo específico?",
    "options": [
      "Erosão.",
      "Dilatação.",
      "Abertura (Opening).",
      "Fechamento (Closing)."
    ],
    "correctIndex": 2,
    "editorialNote": "Explicitada a convenção de primeiro plano branco.",
    "explanation": "A abertura é erosão seguida de dilatação e remove pequenos componentes brancos compatíveis com o elemento estruturante.",
    "sources": [
      {
        "title": "OpenCV — filtragem e morfologia",
        "url": "https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html"
      }
    ]
  },
  {
    "id": 37,
    "topic": "Morfologia e segmentação",
    "origin": "3 — Capítulos 9 e 10 · questão 2",
    "question": "A detecção de padrões geométricos específicos em uma imagem binária é uma tarefa clássica em visão computacional. Na morfologia matemática, existe uma transformação projetada especificamente para localizar um formato exato, utilizando simultaneamente um elemento estruturante para casar com o objeto de interesse (foreground) e outro para casar com o fundo (background). Assinale a alternativa que indica o nome correto dessa transformação:",
    "options": [
      "Filtro Laplaciano.",
      "Transformação Hit-or-Miss (Acerta ou Erra).",
      "Transformada de Hough.",
      "Crescimento de Regiões."
    ],
    "correctIndex": 1,
    "explanation": "Hit-or-miss combina condições sobre objeto e fundo para localizar padrões.",
    "sources": [
      {
        "title": "OpenCV — filtragem e morfologia",
        "url": "https://docs.opencv.org/4.x/d4/d86/group__imgproc__filter.html"
      }
    ]
  },
  {
    "id": 38,
    "topic": "Morfologia e segmentação",
    "origin": "3 — Capítulos 9 e 10 · questão 3",
    "question": "A segmentação de imagens baseada em descontinuidades frequentemente utiliza o cálculo de derivadas espaciais da intensidade dos pixels. A primeira e a segunda derivada possuem características distintas ao operar sobre transições de intensidade (bordas). Em relação ao uso do operador Laplaciano (segunda derivada), qual é a sua principal utilidade na detecção de bordas?",
    "options": [
      "Medir exclusivamente a intensidade média de regiões homogêneas.",
      "Produzir um vetor com a orientação da primeira derivada em cada pixel.",
      "Localizar possíveis bordas por cruzamentos por zero da segunda derivada, normalmente após suavização para reduzir ruído.",
      "Eliminar o ruído sem qualquer suavização e sem afetar os contornos."
    ],
    "correctIndex": 2,
    "editorialNote": "As quatro alternativas foram elaboradas para o enunciado existente, mantendo a letra C indicada no anexo. Não são as alternativas originais.",
    "explanation": "Cruzar zero na segunda derivada ajuda a localizar bordas; a suavização reduz a sensibilidade ao ruído.",
    "sources": [
      {
        "title": "OpenCV — Laplaciano",
        "url": "https://docs.opencv.org/4.x/d5/db5/tutorial_laplace_operator.html"
      }
    ]
  },
  {
    "id": 39,
    "topic": "Morfologia e segmentação",
    "origin": "3 — Capítulos 9 e 10 · questão 4",
    "question": "A limiarização é uma técnica comum de segmentação. O método de Otsu é amplamente utilizado por fornecer um valor de limiar global automático em vez de exigir que o usuário o escolha empiricamente. Qual o princípio matemático central utilizado pelo algoritmo de Otsu para determinar esse limiar ideal?",
    "options": [
      "Ele calcula a média aritmética de todos os pixels da imagem e a define como o limiar.",
      "Ele maximiza a variância interclasses, separando de forma ótima os pixels que representam o fundo dos pixels do objeto.",
      "Ele aplica uma erosão morfológica até que a imagem se reduza a dois tons de cinza.",
      "Ele analisa as bordas da imagem por gradientes direcionais e fixa o limiar nos pontos de maior inclinação."
    ],
    "correctIndex": 1,
    "explanation": "Otsu maximiza a separação entre classes, equivalentemente minimizando a variância intraclasse ponderada.",
    "sources": [
      {
        "title": "OpenCV — limiarização de Otsu",
        "url": "https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html"
      }
    ]
  },
  {
    "id": 40,
    "topic": "Morfologia e segmentação",
    "origin": "3 — Capítulos 9 e 10 · questão 5",
    "question": "Considere o problema de segmentar partículas (como células em uma amostra de sangue) que estão ligeiramente sobrepostas ou se tocando na imagem, formando aglomerados. A limiarização simples é incapaz de separá-las, agrupando-as como um único objeto. Qual técnica de segmentação, frequentemente descrita por uma analogia topográfica, é a mais indicada para separar (desgrudar) objetos convexos em contato?",
    "options": [
      "Crescimento de Regiões (Region Growing).",
      "Método de Otsu.",
      "Filtro de Sobel em X e Y.",
      "Algoritmo de Watershed (Divisor de Águas)."
    ],
    "correctIndex": 3,
    "explanation": "Watershed com marcadores e transformação de distância pode separar objetos em contato.",
    "sources": [
      {
        "title": "OpenCV — Watershed",
        "url": "https://docs.opencv.org/4.x/d3/db4/tutorial_py_watershed.html"
      }
    ]
  },
  {
    "id": 41,
    "topic": "Representação e descrição",
    "origin": "4 — Capítulo 11 · questão 1",
    "question": "Em um sistema de processamento de imagens, uma região segmentada pode ser descrita por meio de características topológicas. Essas características são úteis porque permanecem inalteradas diante de transformações como rotação e alongamento, desde que não ocorram cortes ou junções na região.\n\nConsidere uma imagem que apresenta uma região formada por um único componente conexo e dois buracos. Para caracterizar essa região, pode-se utilizar o número de Euler, definido por:\n\n[[math:euler]]\n\nEm que:\n\n- C representa o número de componentes conexos;\n- H representa o número de buracos.\n\nCom base nessas informações, o número de Euler da região apresentada é:",
    "options": [
      "-2",
      "-1",
      "0",
      "1",
      "2"
    ],
    "correctIndex": 1,
    "explanation": "E = C − H = 1 − 2 = −1.",
    "sources": [
      {
        "title": "scikit-image — Euler, momentos e aproximação poligonal",
        "url": "https://scikit-image.org/docs/stable/api/skimage.measure.html"
      }
    ]
  },
  {
    "id": 42,
    "topic": "Representação e descrição",
    "origin": "4 — Capítulo 11 · questão 2",
    "question": "Uma equipe está desenvolvendo um sistema para analisar imagens de folhas de árvores. Após a segmentação, a fronteira de uma folha é representada por 1.900 pontos. Para facilitar o armazenamento e a análise da forma, a equipe utiliza o método do Polígono de Perímetro Mínimo (MPP) com diferentes tamanhos de células. Observa-se que, com uma configuração intermediária, a fronteira passa a ser representada por 127 vértices, mantendo as principais características da folha. Entretanto, ao aumentar ainda mais o tamanho das células, o número de vértices diminui, mas características importantes da forma começam a desaparecer.\n\nCom base nessa situação, a utilização do MPP demonstra que:",
    "options": [
      "quanto maior o tamanho das células, maior será a precisão da representação, pois haverá menos interferência dos pixels.",
      "a redução da quantidade de vértices deve ocorrer sem considerar a preservação das características da fronteira, pois o objetivo principal do MPP é minimizar o número de pontos.",
      "existe um equilíbrio entre a redução da quantidade de dados e a preservação das características da forma, sendo necessário escolher um tamanho de célula adequado à aplicação.",
      "o MPP mantém necessariamente todos os pontos da fronteira original, apenas reorganizando-os em uma sequência mais eficiente."
    ],
    "correctIndex": 2,
    "explanation": "A simplificação deve equilibrar redução de dados e fidelidade da fronteira.",
    "sources": [
      {
        "title": "scikit-image — Euler, momentos e aproximação poligonal",
        "url": "https://scikit-image.org/docs/stable/api/skimage.measure.html"
      }
    ]
  },
  {
    "id": 43,
    "topic": "Representação e descrição",
    "origin": "4 — Capítulo 11 · questão 3",
    "question": "No estudo de representação e descrição em Processamento Digital de Imagens (Gonzalez & Woods, Capítulo 11), os métodos apresentados nas seções 11.4 e 11.5 abordam o problema de caracterizar um objeto sob óticas fundamentalmente distintas. Se você precisasse explicar a um colega a diferença conceitual entre o uso de Componentes Principais (Seção 11.4) e o uso de Descritores Relacionais (Seção 11.5), qual alternativa sintetiza corretamente essa distinção?",
    "options": [
      "O 11.4 adota uma abordagem quantitativa e estatística voltada a identificar as direções de maior variabilidade e descartar redundâncias numéricas; já o 11.5 adota uma abordagem sintática e estrutural voltada a expressar formalmente como as partes ou primitivas do objeto se conectam e organizam.",
      "O 11.4 concentra-se em descrever fronteiras lineares por meio de códigos de cadeia unidimensionais; já o 11.5 foca-se na compressão espectral de imagens multidimensionais por eliminação de correlação entre pixels.",
      "O 11.4 serve para extrair a forma física exata de regiões contíguas no domínio espacial; já o 11.5 calcula a média e a variância dos níveis de cinza ao longo de uma árvore hierárquica.",
      "O 11.4 busca determinar o formato geométrico das bordas de um objeto isolado; já o 11.5 determina a intensidade de cor ideal para classificar pixels em detectores de satélite multiespectrais.",
      "Ambos os métodos realizam a mesma decomposição em autovetores e autovalores, diferenciando-se apenas pelo fato de o 11.4 atuar em imagens binárias e o 11.5 atuar em imagens em escala de cinza."
    ],
    "correctIndex": 0,
    "explanation": "PCA descreve variabilidade estatística; descritores relacionais representam a organização das partes.",
    "sources": [
      {
        "title": "OpenCV — PCA",
        "url": "https://docs.opencv.org/4.x/d1/dee/tutorial_introduction_to_pca.html"
      }
    ]
  },
  {
    "id": 44,
    "topic": "Representação e descrição",
    "origin": "4 — Capítulo 11 · questão 4",
    "question": "Um sistema de visão computacional foi projetado para a inspeção automatizada de peças industriais em uma linha de montagem. O sistema precisa realizar duas tarefas distintas:\n\n1. Reconhecer a forma e a geometria de peças metálicas, independentemente de estarem rotacionadas, transladadas ou com pequenas variações de escala na esteira transportadora;\n2. Analisar a textura da superfície do material para diferenciar regiões suaves de superfícies rugosas ou com padrões periódicos de usinagem.\n\nConsiderando a aplicação dos descritores regionais adequados para a solução deste problema, assinale a alternativa correta:",
    "options": [
      "O histograma de intensidade de primeira ordem deve ser utilizado para identificar a forma da peça, pois preserva a distribuição espacial relativa dos pixels, enquanto os Momentos Invariantes de Hu são indicados para medir a periodicidade da textura.",
      "A Matriz de Co-ocorrência em Níveis de Cinza (GLCM) analisa a relação espacial entre pares de pixels para quantificar a textura, enquanto os 7 Momentos Invariantes de Hu descrevem a forma global sendo invariantes a translação, escala e rotação.",
      "Os Momentos Invariantes de Hu Φ1 a Φ7 medem exclusivamente a energia radial e angular no domínio da frequência, sendo incapazes de descrever a silhueta de objetos.",
      "A abordagem estatística por GLCM garante invariância automática a rotações e mudanças de escala da geometria do objeto, dispensando o uso de momentos centrais normalizados."
    ],
    "correctIndex": 1,
    "explanation": "GLCM caracteriza relações entre intensidades vizinhas; momentos de Hu descrevem propriedades globais da forma.",
    "sources": [
      {
        "title": "scikit-image — matriz de coocorrência",
        "url": "https://scikit-image.org/docs/stable/api/skimage.feature.html"
      },
      {
        "title": "scikit-image — Euler, momentos e aproximação poligonal",
        "url": "https://scikit-image.org/docs/stable/api/skimage.measure.html"
      }
    ]
  },
  {
    "id": 45,
    "topic": "Representação e descrição",
    "origin": "4 — Capítulo 11 · questão 5",
    "question": "Durante o desenvolvimento de um sistema de reconhecimento automático de objetos em imagens, uma equipe de estudantes precisa identificar um determinado objeto independentemente de sua posição na imagem. Para isso, eles decidem utilizar uma técnica de assinatura, que transforma a fronteira bidimensional (2-D) do objeto em uma função unidimensional (1-D).\n\nEm um dos testes, o mesmo objeto é deslocado para diferentes posições da imagem, sem sofrer alterações em seu formato. A equipe deseja utilizar uma característica da fronteira que permaneça igual mesmo após esse deslocamento. Considerando os conceitos de descritores e assinaturas de fronteiras, qual das abordagens apresentadas é mais adequada para produzir uma assinatura invariante à translação?",
    "options": [
      "Calcular, para cada ponto da fronteira, a distância entre o centroide do objeto e esse ponto, relacionando essa distância ao ângulo correspondente.",
      "Armazenar, em sequência, as coordenadas absolutas (x, y) de cada ponto pertencente à fronteira do objeto.",
      "Armazenar os valores de intensidade dos pixels que compõem toda a região interna do objeto.",
      "Utilizar apenas as dimensões do retângulo envolvente do objeto, considerando sua posição absoluta na imagem.",
      "Calcular a distância de cada ponto da fronteira até a origem (0, 0) da imagem."
    ],
    "correctIndex": 0,
    "explanation": "Ao transladar o objeto, seu centroide também se desloca; as distâncias relativas permanecem iguais.",
    "sources": [
      {
        "title": "scikit-image — Euler, momentos e aproximação poligonal",
        "url": "https://scikit-image.org/docs/stable/api/skimage.measure.html"
      }
    ]
  }
];

export const pendingQuestions = [
  {
    "id": 31,
    "origin": "Capítulo 8 · questão 1",
    "reason": "Questão não transcrita; apenas a letra C foi fornecida."
  },
  {
    "id": 46,
    "origin": "Capítulo 12 · questão 1",
    "reason": "Questão não transcrita; sem enunciado, alternativas ou gabarito."
  },
  {
    "id": 47,
    "origin": "Capítulo 12 · questão 2",
    "reason": "Questão não transcrita; sem enunciado, alternativas ou gabarito."
  },
  {
    "id": 48,
    "origin": "Capítulo 12 · questão 3",
    "reason": "Questão não transcrita; sem enunciado, alternativas ou gabarito."
  },
  {
    "id": 49,
    "origin": "Capítulo 12 · questão 4",
    "reason": "Questão não transcrita; sem enunciado, alternativas ou gabarito."
  },
  {
    "id": 50,
    "origin": "Capítulo 12 · questão 5",
    "reason": "Questão não transcrita; sem enunciado, alternativas ou gabarito."
  }
];
