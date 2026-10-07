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
  featured?: boolean;
  contextLabel?: string;
  contribution?: string;
  caseStudy?: { context: string; problem: string; role: string; decisions?: string[]; challenges?: string[]; solution: string; result?: string; learnings?: string[] };
}

export const projects: Project[] = [
  {
    slug: "orquestra-queue-system",
    title: "Orquestra Queue System",
    featured: true,
    contextLabel: "Solo project · Backend / Systems",
    contribution: "Arquitetura e desenvolvimento integral do sistema.",
    caseStudy: {
      context: "O projeto nasceu de um problema comum em sistemas de agendamento: quando uma vaga é liberada, várias pessoas podem tentar ocupá-la ao mesmo tempo. A ideia foi transformar esse cenário em um sistema de filas e agendamentos capaz de lidar com concorrência, cancelamentos e processamento assíncrono.",
      problem: "Evitar Race Conditions, manter a fila consistente e automatizar a promoção de usuários quando uma vaga é liberada, sem concentrar toda a lógica em operações síncronas.",
      role: "Conduzi sozinho a arquitetura e o desenvolvimento do sistema, do desenho das regras de negócio à implementação do backend e da infraestrutura.",
      decisions: ["Redis foi usado para controle de concorrência e locks distribuídos em operações críticas.","BullMQ e Redis cuidam do processamento assíncrono e dos jobs temporizados.","PostgreSQL com Prisma mantém os dados transacionais e as regras que precisam de consistência."],
      challenges: ["Projetar operações que continuem consistentes quando múltiplos clientes disputam a mesma vaga.","Coordenar banco de dados, locks e filas sem criar estados intermediários difíceis de prever."],
      solution: "A solução separa responsabilidades entre API, PostgreSQL, Redis e BullMQ. O backend controla as operações críticas com locking e transações, enquanto jobs assíncronos cuidam de expirações, cancelamentos e promoção da fila.",
      result: "Um projeto autoral que demonstra minha capacidade de pensar arquitetura, concorrência e processamento assíncrono de ponta a ponta.",
      learnings: ["Concorrência precisa ser tratada como parte da regra de negócio, não como detalhe de implementação.","Uma arquitetura distribuída só vale a pena quando cada componente resolve um problema real."],
    },
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
    featured: true,
    contextLabel: "TCC · Mobile / Backend",
    contribution: "Responsável por todo o backend e apoio no frontend na reta final.",
    caseStudy: {
      context: "O FinWise foi meu projeto de TCC e nasceu da necessidade de tornar o controle financeiro pessoal mais organizado e acessível. A proposta é ajudar o usuário a registrar e entender sua vida financeira sem depender de integrações bancárias.",
      problem: "Muitas pessoas registram gastos de forma dispersa ou deixam de acompanhar o próprio orçamento por falta de uma experiência simples para organizar transações, categorias, metas e histórico.",
      role: "Fui líder do projeto e cuidei de todo o backend do aplicativo. Na reta final do TCC, também ajudei o time em algumas partes do frontend para fechar a integração e o produto.",
      decisions: ["Node.js, Express e TypeScript estruturaram o backend e suas rotas.","Firebase Auth e Firestore foram usados para autenticação e persistência dos dados.","A API foi organizada por responsabilidades para manter autenticação, usuários, categorias e transações separadas."],
      challenges: ["Construir um backend que atendesse diferentes fluxos do aplicativo mobile sem deixar a regra de negócio espalhada pelo frontend.","Manter a experiência simples para um público que pode ter pouca familiaridade com organização financeira."],
      solution: "O aplicativo combina um backend próprio com Firebase para autenticação e dados, enquanto o frontend em React Native consome as rotas para oferecer categorias, histórico de transações, metas e organização do orçamento.",
      result: "Um produto de TCC com backend desenvolvido integralmente por mim e uma experiência mobile pensada para transformar registros financeiros em uma rotina de organização.",
      learnings: ["Liderar um projeto também significa manter as decisões técnicas alinhadas ao que o usuário realmente precisa.","Backend e produto precisam evoluir juntos: uma API bem estruturada só é útil quando simplifica a experiência de quem usa o sistema."],
    },
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
  {
    slug: "fala-fatec",
    title: "Fala Fatec",
    featured: true,
    contextLabel: "Hackathon · Team project",
    contribution: "Back-end Web e API Core com FastAPI.",
    tagline: "Assistente de comunicação acadêmica que reúne avisos, aulas, provas, eventos e orientação por IA em um único canal.",
    role: "Back-end Web / API Core",
    period: "2026",
    description: "MVP criado no Hackathon FATEC Itaquera para reduzir a dispersão de informações acadêmicas e facilitar o acesso dos alunos pelo WhatsApp.",
    fullDescription: "O Fala Fatec centraliza informações acadêmicas em uma API FastAPI integrada a um bot de WhatsApp e ao Google Gemini. Minha responsabilidade ficou no backend web e na API Core, trabalhando em conjunto com o restante da equipe para conectar os fluxos de comunicação e consulta de informações.",
    tags: ["Python", "FastAPI", "Google Gemini", "WhatsApp", "Node.js"],
    backendRepo: "https://github.com/imlucsz/hackathon-fatec-2026",
    liveUrl: "https://github.com/imlucsz/hackathon-fatec-2026",
    features: [
      "API para comunicados, aulas, provas, eventos e sugestões",
      "Integração com Google Gemini para dúvidas em linguagem natural",
      "Fluxo de atendimento pelo WhatsApp",
      "Distribuição de comunicados por curso e semestre",
    ],
    architecture: [
      "API Core desenvolvida com Python e FastAPI",
      "Contrato HTTP documentado via OpenAPI / Swagger",
      "Integração entre API, bridge WhatsApp e serviço de IA",
    ],
  },
];
    caseStudy: {
      context: "Criado durante o 1º Hackathon FATEC Itaquera para enfrentar a dispersão de informações acadêmicas entre diferentes canais. A proposta foi concentrar comunicados, aulas, provas, eventos e orientação por IA em uma experiência acessível pelo WhatsApp.",
      problem: "Os alunos tinham dificuldade para encontrar informações acadêmicas importantes porque elas estavam espalhadas por diferentes canais e formatos.",
      role: "Atuei como responsável pelo Back-end Web e pela API Core, trabalhando em equipe para construir os endpoints que sustentavam os fluxos de consulta e comunicação do MVP.",
      decisions: ["FastAPI foi escolhido para construir uma API web enxuta e bem documentada.","OpenAPI/Swagger ajudou a manter claro o contrato entre o backend e os demais componentes.","A IA do Gemini foi posicionada como camada de interpretação e orientação, enquanto informações oficiais deveriam vir da API e dos comunicados."],
      challenges: ["Fazer diferentes partes do MVP conversarem dentro do tempo limitado de um hackathon.","Manter uma separação clara entre respostas geradas por IA e informações acadêmicas oficiais."],
      solution: "A API Core em FastAPI expõe os dados acadêmicos e recebe integrações do restante da solução. O projeto conecta essa API a uma bridge de WhatsApp e ao Google Gemini, permitindo que o usuário consulte informações pelo canal que já utiliza.",
      result: "Um MVP funcional construído em equipe durante o hackathon, com uma divisão clara de responsabilidades entre backend web, WhatsApp, IA e interface.",
      learnings: ["Em um projeto curto, contratos claros entre componentes ajudam a equipe a avançar sem bloquear uns aos outros.","Integração é tão importante quanto código quando o produto depende de vários serviços."],
    },
