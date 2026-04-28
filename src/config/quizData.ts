export const QUIZ_PHASES = [
  { id: 1, label: 'SEU GOSTO' },
  { id: 2, label: 'SEUS HÁBITOS' },
  { id: 3, label: 'SUAS FRUSTRAÇÕES' },
  { id: 4, label: 'SUA PERSONALIDADE' },
  { id: 5, label: 'SEU RESULTADO' }
];

export const QUIZ_QUESTIONS = [
  // FASE 1: SEU GOSTO (Conexão)
  {
    id: 'goal',
    phase: 1,
    title: 'Beleza. Hoje você quer um filme para...',
    subtitle: 'Sem julgamentos. A gente também já escolheu filme errado.',
    type: 'single',
    options: [
      { id: 'relax', label: 'Só desligar a cabeça e relaxar', icon: 'Coffee' },
      { id: 'learn', label: 'Sair da zona de conforto e aprender algo', icon: 'Brain' },
      { id: 'feel', label: 'Sentir. Chorar, rir, ficar tenso — o completo', icon: 'Heart' },
      { id: 'distract', label: 'Adrenalina pura. Explosão, perseguição, ação', icon: 'Zap' }
    ]
  },
  {
    id: 'genres',
    phase: 1,
    title: 'Quais gêneros você NUNCA deixa de assistir?',
    subtitle: 'Selecione pelo menos 2. Esses são seus "comfort zones".',
    type: 'multiple',
    min: 2,
    options: [
      { id: 'action', label: 'Ação & Aventura' },
      { id: 'scifi', label: 'Ficção Científica' },
      { id: 'drama', label: 'Drama' },
      { id: 'comedy', label: 'Comédia' },
      { id: 'thriller', label: 'Suspense & Terror' },
      { id: 'doc', label: 'Documentários' },
      { id: 'romance', label: 'Romance' }
    ]
  },
  {
    id: 'era',
    phase: 1,
    title: 'Qual época te pega de jeito?',
    type: 'single',
    options: [
      { id: 'new', label: 'Lançamentos (últimos 3 anos)' },
      { id: '2000s', label: 'Anos 2000 — saudades dessa época' },
      { id: 'classics', label: 'Clássicos atemporais (antes de 2000)' },
      { id: 'any', label: 'Sou eclético. Bom filme é bom filme.' }
    ]
  },
  {
    id: 'format',
    phase: 1,
    title: 'Filme ou série? Diz a verdade.',
    type: 'single',
    options: [
      { id: 'movies', label: 'Filme. Começo, meio e fim. Pronto.' },
      { id: 'series', label: 'Série. Gosto de mergulhar fundo.' },
      { id: 'both', label: 'Depende do dia e do meu humor' }
    ]
  },

  // FASE 2: SEUS HÁBITOS (Contexto)
  {
    id: 'frequency',
    phase: 2,
    title: 'Com que frequência você assiste algo?',
    type: 'single',
    options: [
      { id: 'daily', label: 'Todo santo dia' },
      { id: 'weekends', label: 'Só fim de semana — semana é caos' },
      { id: 'rarely', label: 'Quando sobra tempo (quase nunca)' }
    ]
  },
  {
    id: 'company',
    phase: 2,
    title: 'Com quem você divide o sofá?',
    type: 'single',
    options: [
      { id: 'alone', label: 'Sozinho. Meu momento sagrado.' },
      { id: 'partner', label: 'Com meu parceiro(a) — e a briga pelo controle' },
      { id: 'family', label: 'Família/filhos (tem que agradar geral)' },
      { id: 'friends', label: 'Com a galera — pipoca e risada' }
    ]
  },
  {
    id: 'streamings',
    phase: 2,
    title: 'Quais streamings você paga atualmente?',
    subtitle: 'Selecione todos. A gente não vai julgar seus gastos.',
    type: 'multiple',
    min: 1,
    options: [
      { id: 'netflix', label: 'Netflix' },
      { id: 'prime', label: 'Prime Video' },
      { id: 'max', label: 'Max (ex-HBO)' },
      { id: 'disney', label: 'Disney+ / Star+' },
      { id: 'apple', label: 'Apple TV+' },
      { id: 'other', label: 'Outros / "Alternativos"' }
    ]
  },
  {
    id: 'time',
    phase: 2,
    title: 'Seu horário de cinema é...',
    type: 'single',
    options: [
      { id: 'morning', label: 'Manhã/tarde — raro, mas acontece' },
      { id: 'night', label: 'Noite, depois do trabalho — clássico' },
      { id: 'latenight', label: 'Madrugada. Coruja noturna.' }
    ]
  },

  // FASE 3: SUAS FRUSTRAÇÕES (Agitação - PAS)
  {
    id: 'struggle',
    phase: 3,
    title: 'Qual dessas situações te tira do sério?',
    subtitle: 'A gente sabe que mais de uma acontece. Escolha a PIOR.',
    type: 'single',
    options: [
      { id: 'time_lost', label: 'Perder 40 minutos rolando catálogo e não escolher NADA' },
      { id: 'where', label: 'Achar um filme top e descobrir que não tá no meu streaming' },
      { id: 'sleep', label: 'Escolher um filme chato e dormir no meio — noite perdida' },
      { id: 'forget', label: 'Esquecer o nome daquele filme que me indicaram' }
    ]
  },
  {
    id: 'annoyance',
    phase: 3,
    title: 'O que o algoritmo das plataformas faz com você?',
    type: 'single',
    options: [
      { id: 'bad_algo', label: 'Só me recomenda o mesmo tipo de conteúdo, sem surpresa' },
      { id: 'interface', label: 'Interface confusa — procuro 10 min e desisto' },
      { id: 'spoilers', label: 'Tomo spoiler no feed antes de assistir' },
      { id: 'cancel', label: 'Cancelam minha série favorita no melhor momento' }
    ]
  },
  {
    id: 'decision',
    phase: 3,
    title: 'Quando você não sabe o que assistir, o que acontece de VERDADE?',
    type: 'single',
    options: [
      { id: 'paralyzed', label: 'Fico paralisado rolando infinitamente. É um vício.' },
      { id: 'random', label: 'Escolho qualquer um e torço pra não ser ruim' },
      { id: 'ask', label: 'Pergunto pro grupo, mas ngm responde na hora' },
      { id: 'revisit', label: 'Acabo reassistindo algo que já vi. De novo.' }
    ]
  },
  {
    id: 'decision_time',
    phase: 3,
    title: 'Quantas vezes você DESISTIU de assistir algo porque não conseguiu escolher?',
    type: 'single',
    options: [
      { id: '10min', label: 'Raramente — sou rápido (ou sortudo)' },
      { id: '30min', label: 'Às vezes. Quando tô cansado, piora.' },
      { id: '1h', label: 'Com frequência. Já cancelei noite de filme por isso.' },
      { id: '1h+', label: 'Toda semana. É exaustivo.' }
    ]
  },

  // FASE 4: SUA PERSONALIDADE (Sonho + Identidade)
  {
    id: 'recommendations',
    phase: 4,
    title: 'Se um amigo te indica um filme, você...',
    type: 'single',
    options: [
      { id: 'trust', label: 'Assisto na hora. Confiança é tudo.' },
      { id: 'research', label: 'Checo nota no IMDb e trailer no YouTube antes' },
      { id: 'ignore', label: 'Anoto na lista e nunca assisto. Lista infinita.' }
    ]
  },
  {
    id: 'plot_twists',
    phase: 4,
    title: 'Plot twists: você é do time...',
    type: 'single',
    options: [
      { id: 'love', label: 'Quanto mais confuso e surpreendente, melhor' },
      { id: 'hate', label: 'Prefiro histórias lineares. Não me enrola.' },
      { id: 'depends', label: 'Gosto, desde que faça sentido no final' }
    ]
  },
  {
    id: 'rewatch',
    phase: 4,
    title: 'Reassistir filmes é...',
    type: 'single',
    options: [
      { id: 'always', label: 'Terapia. Sempre acho detalhes novos.' },
      { id: 'never', label: 'Perda de tempo. Vida é curta demais.' },
      { id: 'comfort', label: 'Conforto. Meus favoritos são meu cobertor emocional.' },
      { id: 'rarely', label: 'Só se passou anos e eu esqueci a história' }
    ]
  },
  {
    id: 'time_value',
    phase: 4,
    title: 'Se você pudesse pagar para NUNCA mais perder tempo escolhendo filme, quanto valeria?',
    type: 'single',
    options: [
      { id: '10', label: 'R$ 10/mês — já ajudaria bastante' },
      { id: '25', label: 'R$ 25/mês — meu tempo livre é precioso' },
      { id: '50', label: 'R$ 50/mês — pago pra não ter essa dor de cabeça' },
      { id: '100', label: 'R$ 100+/mês — se funcionar de verdade, não tem preço' }
    ]
  },

  // FASE 5: CAPTURA (Lead com baixa fricção + MOHT)
  {
    id: 'name',
    phase: 5,
    title: 'Como você gosta de ser chamado?',
    subtitle: 'Vamos personalizar seu Perfil Cinematográfico com seu nome.',
    type: 'input',
    placeholder: 'Seu primeiro nome'
  },
  {
    id: 'email',
    phase: 5,
    title: 'Onde enviamos seu Perfil Cinematográfico completo?',
    subtitle: 'Sem spam. Odiamos inbox lotado tanto quanto você. Só seu resultado + 1 dica por semana.',
    type: 'input',
    placeholder: 'seu.melhor@email.com'
  },
  {
    id: 'whatsapp',
    phase: 5,
    title: 'Quer receber dicas no WhatsApp?',
    subtitle: 'Opcional. A gente manda 1 mensagem por semana com filmes selecionados pra você. Sem grupo, sem flood.',
    type: 'input',
    placeholder: '(11) 99999-9999',
    inputType: 'tel'
  }
];

export const LOADING_TEXTS = [
  "Mapeando seus gêneros favoritos...",
  "Cruzando com filmes que 94% das pessoas com seu perfil amam...",
  "Identificando seus vícios cinematográficos...",
  "Calculando quanto tempo você vai economizar por mês...",
  "Seu Perfil Cinematográfico está pronto. Preparado?"
];

export const RESULT_BENEFITS = [
  {
    title: "Pare de Rolar",
    desc: "Chega de 40 min no catálogo. Receba a indicação certa em 5 segundos, no seu humor do dia.",
    icon: "Clock"
  },
  {
    title: "Match Real",
    desc: "O Oráculo analisa seu perfil — não só o que você viu, mas o que você SENTE ao assistir.",
    icon: "Target"
  },
  {
    title: "Onde Assistir",
    desc: "Sem surpresa. Sabemos em qual dos seus streamings o filme está disponível agora.",
    icon: "Tv"
  },
  {
    title: "Zero Frustração",
    desc: "Filmes com alta probabilidade de você amar. Baseado em dados, não em achismo.",
    icon: "Star"
  }
];

export const PRICING_PLANS = [
  {
    id: 'monthly',
    name: 'Mensal',
    price: 'R$ 9,00',
    period: '/mês',
    daily: 'R$ 0,30 por dia',
    popular: false,
    savings: ''
  },
  {
    id: 'quarterly',
    name: 'Trimestral',
    price: 'R$ 24,00',
    period: '/3 meses',
    daily: 'R$ 0,27 por dia',
    popular: true,
    savings: 'Mais Popular'
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 'R$ 69,00',
    period: '/ano',
    daily: 'R$ 0,19 por dia — menos que um chiclete',
    popular: false,
    savings: 'Melhor Custo-Benefício'
  }
];
