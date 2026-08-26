export interface ProjectGalleryItem {
  url: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  imageUrl?: string;
  gallery?: ProjectGalleryItem[];
  color?: string;
  description: string;
  fullDescription: string;
  tags: string[];
  backendRepo?: string;
  frontendRepo?: string;
  liveUrl?: string;
  features: string[];
  architecture?: string[];
}

export const projects: Project[] = [
  {
    slug: "orquestra-queue-system",
    title: "Orquestra Queue System",
    color: "#0a3884",
    tagline:
      "Solução distribuída de alta performance para gerenciamento de agendamentos, filas virtuais e concorrência em tempo real.",
    role: "Desenvolvedor Backend / Architect",
    period: "2026",
    imageUrl: "/orquestra.png",
    gallery: [
      {
        url: "/orquestra-front.png",
        caption:
          "Demonstração da interface visual do sistema Orquestra Queue System.",
      },
      {
        url: "/orquestra-back.jpg",
        caption: "Estrutura da API e logs de execução do serviço backend.",
      },
    ],
    description:
      "Gerenciador de filas e agendamentos projetado para mitigar Race Conditions e garantir consistência estrita em acessos simultâneos.",
    fullDescription:
      "O Orquestra Queue System é uma solução desenvolvida para resolver a corrida por vagas (Race Conditions) em plataformas de agendamento em massa. O sistema utiliza trava de concorrência atômica via Redis para impedir que múltiplos clientes reservem o mesmo horário ou recebam posições duplicadas. Além disso, conta com orquestração assíncrona de filas via BullMQ, gerenciando a expiração automática de confirmações e a reordenação dinâmica de vagas liberadas com transações atômicas no banco de dados.",
    tags: [
      "Node.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "BullMQ",
      "REST API",
    ],
    backendRepo: "https://github.com/galesTV/orquestra-queue-system",
    frontendRepo: "https://github.com/galesTV/orquestra-queue-system-frontend",
    features: [
      "Agendamento Inteligente com alocação direta ou inserção dinâmica na fila de espera",
      "Garantia de Fila de Espera Ordenada sem sobreposição de posições (position)",
      "Timer de Confirmação temporizado via delayed jobs para validação do usuário",
      "Cancelamento Assíncrono com liberação automática e promoção do próximo da fila",
      "Monitoramento de estado e posição em tempo real via endpoints dedicados",
    ],
    architecture: [
      "Trava de Concorrência Atômica (Distributed Locking com Redis) no AppointmentsService",
      "Transações Atômicas isoladas ($transaction) com Prisma 7 + PostgreSQL (@prisma/adapter-pg)",
      "Processamento Assíncrono e Expiração de Janela por Filas (BullMQ & Redis)",
      "Padronização e DTOs rigorosos com Class-Validator e NestJS (v11)",
    ],
  },
  {
    slug: "furafila-digital",
    title: "FuraFila Digital",
    color: "#ffba80",
    tagline:
      "Sistema desenvolvido para otimizar o tempo de espera em filas de cantina, integrando painel administrativo, rotas de pedidos e banco de dados relacional.",
    role: "Desenvolvedor Full-Stack",
    period: "2026",
    imageUrl: "/furafila-logo.png",
    gallery: [
      {
        url: "/furafila-aluno.png",
        caption:
          "Print com demonstração da interface do aluno no sistema FuraFila Digital.",
      },
      {
        url: "/furafila-aluno-carrinho.png",
        caption:
          "Print com demonstração do carrinho de pedidos no sistema FuraFila Digital.",
      },
      {
        url: "/furafila-aluno-pedidos.png",
        caption:
          "Print com demonstração dos pedidos do aluno no sistema FuraFila Digital.",
      },
      {
        url: "/furafila-admin.png",
        caption:
          "Print com demonstração da interface do administrador no sistema FuraFila Digital.",
      },
      {
        url: "/furafila-admin-painel.png",
        caption:
          "Print com demonstração do painel de pedidos ativos no sistema FuraFila Digital.",
      },
    ],
    description:
      "Plataforma Web Full-Stack para gestão e pedidos antecipados em cantinas escolares.",
    fullDescription:
      "Desenvolvido em grupo para atender a demanda de agilidade no ambiente escolar. O projeto abrange desde o fluxo de autenticação até o acompanhamento do status do pedido no painel do administrador.",
    tags: ["Node.js", "JavaScript", "MySQL", "HTML5/CSS3", "Express"],
    frontendRepo: "https://github.com/galesTV/furafila-digital",
    features: [
      "Painel administrativo para gestão do cardápio e estoque",
      "Interface responsiva para pedidos rápidos de alunos",
      "Inscrição de rotas server-side com Node.js e Express",
      "Modelagem e consultas personalizadas em MySQL",
    ],
  },
  {
    slug: "copa-do-mundo",
    title: "Copa do Mundo",
    color: "#0c38be",
    tagline:
      "Projeto sobre a Copa do Mundo de 2026, com direito a álbum de figurinhas, histórico das copas, escalação de jogadores, quiz interativo e simulador da copa.",
    role: "Desenvolvedor Front-End",
    period: "2026",
    imageUrl: "/copa-do-mundo.png",
    gallery: [
      {
        url: "/copa-do-mundo.png",
        caption:
          "Print com demonstração da página inicial do projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-pais1.png",
        caption:
          "Print com demonstração da página de informações sobre o país participante no projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-pais2.png",
        caption:
          "Print com demonstração da página de informações sobre o país participante no projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-pais3.png",
        caption:
          "Print com demonstração da página de informações sobre o país participante no projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-linha.png",
        caption:
          "Print com demonstração da linha do tempo das copas do mundo no projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-quiz.png",
        caption:
          "Print com demonstração do quiz interativo no projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-escalacao.png",
        caption:
          "Print com demonstração da escalação de jogadores no projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-simulador1.png",
        caption:
          "Print com demonstração do simulador da copa do mundo no projeto sobre a Copa do Mundo de 2026.",
      },
      {
        url: "/copa-do-mundo-simulador2.png",
        caption:
          "Print com demonstração do simulador da copa do mundo no projeto sobre a Copa do Mundo de 2026.",
      },
    ],
    description:
      "Projeto Front-End desenvolvido para a matéria de Desenvolvimento Web da Fatec Itaquera sobre a Copa do Mundo de 2026, incluindo álbum de figurinhas, histórico das copas, escalação de jogadores, quiz interativo e simulador da copa.",
    fullDescription:
      "O projeto foi desenvolvido com foco em design responsivo e interatividade, utilizando tecnologias modernas para criar uma experiência envolvente para os usuários, permitindo explorar informações sobre a Copa do Mundo de 2026 de forma divertida e educativa. Para o álbum de figurinhas, foi utilizado o conceito de localStorage para armazenar as figurinhas coletadas pelos usuários, proporcionando uma experiência personalizada e interativa. Na escalação, foi usado a API thesportsdb para obter informações sobre os jogadores e suas estatísticas, garantindo dados atualizados e precisos. No simulador da copa do mundo, foi implementado um sistema de simulação dos resultados, permitindo que os usuários possam prever os resultados dos jogos e acompanhar o desempenho das equipes ao longo do torneio e prevendo o campeão da copa.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    frontendRepo: "https://github.com/galesTV/copa-do-mundo",
    features: [
      "Design responsivo e interativo",
      "Álbum de figurinhas com localStorage",
      "Escalação de jogadores com API thesportsdb",
      "Quiz interativo sobre a copa do mundo",
      "Simulador da copa do mundo com previsão de resultados",
    ],
  },
  {
    slug: "lendas-nacionais",
    title: "Lendas Nacionais",
    color: "#b80000",
    tagline:
      "Projeto sobre Roberto Rivelino e Sônia Braga, com direito a curiosidades, momentos marcantes, vídeos, linha do tempo e quiz interativo.",
    role: "Desenvolvedor Front-End",
    period: "2026",
    imageUrl: "/lendas-nacionais.png",
    gallery: [
      {
        url: "/lendas-nacionais.png",
        caption:
          "Print com demonstração da página inicial do projeto sobre Roberto Rivelino e Sônia Braga.",
      },
      {
        url: "/lendas-nacionais1.png",
        caption:
          "Print com demonstração da página de curiosidades de Rivelino no projeto sobre Roberto Rivelino e Sônia Braga.",
      },
      {
        url: "/lendas-nacionais2.png",
        caption:
          "Print com demonstração da página de curiosidades de Sônia Braga no projeto sobre Roberto Rivelino e Sônia Braga.",
      },
      {
        url: "/lendas-nacionais-multimidia.png",
        caption:
          "Print com demonstração da página de multimídia do projeto sobre Roberto Rivelino e Sônia Braga.",
      },
      {
        url: "/lendas-nacionais-cronologia.png",
        caption:
          "Print com demonstração da página de linha do tempo do projeto sobre Roberto Rivelino e Sônia Braga.",
      },
      {
        url: "/lendas-nacionais-quiz.png",
        caption:
          "Print com demonstração da página de quiz do projeto sobre Roberto Rivelino e Sônia Braga.",
      },
    ],
    description:
      "Projeto Front-End desenvolvido para apresentar informações sobre Roberto Rivelino e Sônia Braga, incluindo curiosidades, momentos marcantes, vídeos, linha do tempo e quiz interativo.",
    fullDescription:
      "O projeto foi desenvolvido para a matéria de Desenvolvimento Web na Fatec Itaquera, com foco em design responsivo e interatividade, utilizando tecnologias modernas para criar uma experiência envolvente para os usuários.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    frontendRepo: "https://github.com/galesTV/lendas-nacionais",
    features: [
      "Design responsivo e interativo",
      "Quiz interativo sobre os artistas",
      "Linha do tempo com momentos marcantes",
      "Integração de vídeos e curiosidades",
    ],
  },
  {
    slug: "finwise",
    title: "FinWise",
    color: "#eab308",
    tagline:
      "Aplicativo mobile de gestão financeira pessoal desenvolvido como Trabalho de Conclusão de Curso (TCC) na ETEC de Guarulhos, focado em simplicidade, orçamentos e relatórios em tempo real.",
    role: "Líder do Projeto / Desenvolvedor Backend & Banco de Dados",
    period: "2025",
    imageUrl: "/finwise-logo.png",
    gallery: [
      {
        url: "/finwise.png",
        caption:
          "Demonstração do aplicativo mobile FinWise e visualização das telas de controle financeiro.",
      },
    ],
    description:
      "Aplicativo mobile de controle financeiro pessoal com análise de gastos, metas de economia e orçamentos.",
    fullDescription:
      "O Finwise é um aplicativo mobile desenvolvido para tornar o gerenciamento de finanças simples, acessível e robusto. Como responsável principal pela engenharia de Backend e Banco de Dados, estruturei a API REST com Node.js/Express e a modelagem NoSQL via Firebase Firestore. O sistema conta com autenticação segura (Firebase Auth + Bcrypt), rotas protegidas e estratégias de caching/persistência offline com AsyncStorage para otimizar chamadas à API. No suporte ao Frontend em React Native (Expo), atuei na integração das rotas, controle de estado com Context API e refinamentos de UI/UX.",
    tags: [
      "Node.js",
      "Express",
      "TypeScript",
      "React Native",
      "Expo",
      "Firebase Firestore",
      "Firebase Auth",
      "REST API",
      "AsyncStorage",
    ],
    liveUrl: "https://finwise-orcin.vercel.app/",
    features: [
      "Autenticação e Segurança com Firebase Auth, tokens de sessão e Bcrypt",
      "Dashboard Interativo com atualização do saldo em tempo real e gráficos de gastos",
      "Gestão completa de transações com categorização e filtros avançados",
      "Metas Financeiras e 'Cofrinho Virtual' com acompanhamento visual de progresso",
      "Planejamento de orçamento mensal com notificações de limites próximos",
      "Extrato detalhado e balanço periódico (diário, semanal, mensal e anual)",
    ],
    architecture: [
      "API REST modular construída em Node.js com Express e validação de segurança",
      "Banco de Dados NoSQL com Firebase Firestore para dados em tempo real",
      "Estratégia de caching e persistência offline com AsyncStorage / localStorage",
      "App Cross-Platform com React Native, Expo, Context API e Styled Components",
    ],
  },
];
