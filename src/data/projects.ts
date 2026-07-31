export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
  imageUrl?: string;
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
      "Sistema distribuído de gerenciamento e orquestração de filas de atendimento em tempo real.",
    role: "Desenvolvedor Backend / Architect",
    period: "2026",
    imageUrl: "/orquestra-front.png",
    description:
      "Solução completa para controle de filas e prioridades com arquitetura separada entre API Backend e Interface Frontend.",
    fullDescription:
      "O Orquestra Queue System foi desenvolvido para resolver o problema de alta demanda e organização de atendimento de forma eficiente. O sistema permite emissão de senhas, chamadas em tempo real e gerenciamento por painéis administrativos.",
    tags: [
      "Node.js",
      "TypeScript",
      "Express",
      "REST API",
      "React / Next.js",
      "MySQL",
    ],
    backendRepo: "https://github.com/galesTV/orquestra-queue-system",
    frontendRepo: "https://github.com/galesTV/orquestra-queue-system-frontend",
    features: [
      "Emissão e controle de senhas prioritárias e convencionais",
      "Comunicação entre painel de atendimento e tela de exibição",
      "Arquitetura desentrelada com API RESTful no Backend",
      "Estrutura escalável focada em microsserviços e baixa latência",
    ],
    architecture: [
      "Node.js & Express para rotas e middleware",
      "Modelagem relacional de dados para persistência e relatórios",
      "Separação clara de responsabilidades (Clean Architecture / MVC)",
    ],
  },
  {
    slug: "furafila-digital",
    title: "FuraFila Digital",
    color: "#ffba80",
    tagline:
      "Plataforma Web Full-Stack para gestão e pedidos antecipados em cantinas escolares.",
    role: "Desenvolvedor Full-Stack",
    period: "2026",
    imageUrl: "/furafila-aluno.png",
    description:
      "Sistema desenvolvido para otimizar o tempo de espera em filas de cantina, integrando painel administrativo, rotas de pedidos e banco de dados relacional.",
    fullDescription:
      "Desenvolvido em dupla para atender a demanda de agilidade no ambiente escolar. O projeto abrange desde o fluxo de autenticação até o acompanhamento do status do pedido no painel do administrador.",
    tags: ["Node.js", "JavaScript", "MySQL", "HTML5/CSS3", "Express"],
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
      "Plataforma de gestão financeira pessoal com análise de gastos e planejamento de metas.",
    role: "Desenvolvedor Full-Stack",
    period: "2025",
    imageUrl: "/finwise.png",
    description:
      "Sistema para auxiliar na gestão financeira pessoal, permitindo o acompanhamento de gastos, análise de despesas e planejamento de metas financeiras.",
    fullDescription:
      "Desenvolvido com foco em usabilidade e experiência do usuário, o projeto oferece uma interface intuitiva para gerenciar finanças pessoais, com funcionalidades como categorização de gastos, relatórios e alertas.",
    tags: [
      "Node.js",
      "JavaScript",
      "Firebase Firestore",
      "React Native",
      "Express",
    ],
    liveUrl: "https://finwise-orcin.vercel.app/",
    features: [
      "Gestão de despesas e receitas",
      "Análise de gastos por categoria",
      "Planejamento de metas financeiras",
      "Relatórios personalizados",
    ],
  },
];
