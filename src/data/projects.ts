export interface Project {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  period: string;
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
    tagline:
      "Sistema distribuído de gerenciamento e orquestração de filas de atendimento em tempo real.",
    role: "Desenvolvedor Backend / Architect",
    period: "2026",
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
    tagline:
      "Plataforma Web Full-Stack para gestão e pedidos antecipados em cantinas escolares.",
    role: "Desenvolvedor Full-Stack",
    period: "2026",
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
    slug: "finwise",
    title: "FinWise",
    tagline:
      "Plataforma de gestão financeira pessoal com análise de gastos e planejamento de metas.",
    role: "Desenvolvedor Full-Stack",
    period: "2025",
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
