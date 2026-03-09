export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  repoUrl: string;
  tags: string[];
  cardDescription: string;
  readmeIntro: string;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "scanplant-api",
    title: "ScanPlant API",
    subtitle:
      "API voltada ao suporte de fluxos de leitura, cadastro e consulta para o ecossistema ScanPlant.",
    repoUrl: "https://github.com/Parys-boop/Projeto-ScanPlant",
    tags: ["API", "Back-end", "Integração"],
    cardDescription:
      "Projeto focado em serviços e endpoints para organizar dados de uma solução ligada a plantas e leitura estruturada.",
    readmeIntro:
      "A ScanPlant API foi pensada como base de integração para operações de cadastro, consulta e organização de dados do sistema. O projeto concentra regras de negócio, estruturação de endpoints e uma camada preparada para expansão, manutenção e consumo por aplicações cliente.",
    highlights: [
      "Estrutura de API organizada para evolução incremental do domínio.",
      "Separação entre responsabilidades de rota, serviço e tratamento de dados.",
      "Base adequada para integração com aplicações web e fluxos de leitura.",
    ],
    stack: ["Node.js", "JavaScript", "API REST", "GitHub"],
  },
  {
    slug: "plataforma-ead-matriculas",
    title: "Plataforma EAD Matrículas",
    subtitle:
      "Sistema acadêmico para gerenciar matrícula de alunos com fluxo voltado ao contexto EAD.",
    repoUrl: "https://github.com/Parys-boop/ProjetoMatriculadeAluno",
    tags: ["Sistema", "Acadêmico", "CRUD"],
    cardDescription:
      "Aplicação orientada ao processo de matrícula, com foco em organização de registros e jornada administrativa.",
    readmeIntro:
      "A Plataforma EAD Matrículas centraliza o processo de cadastro e gerenciamento de alunos em um cenário educacional. A proposta do projeto é estruturar uma experiência objetiva para operações administrativas, mantendo o código acessível para manutenção e novas regras de negócio.",
    highlights: [
      "Fluxo principal centrado em cadastro e controle de matrículas.",
      "Modelagem pensada para rotinas administrativas mais claras.",
      "Arquitetura adequada para expansão de módulos acadêmicos.",
    ],
    stack: ["Java", "Spring Boot", "Banco de Dados", "CRUD"],
  },
  {
    slug: "angular-supabase",
    title: "Angular + Supabase",
    subtitle:
      "Aplicação com Angular integrada ao Supabase para autenticação, persistência e operações em tempo real.",
    repoUrl: "https://github.com/Parys-boop/Angula_Supabase",
    tags: ["Angular", "Supabase", "Full Stack"],
    cardDescription:
      "Projeto que conecta front-end reativo com backend gerenciado, explorando autenticação e armazenamento de dados.",
    readmeIntro:
      "Angular + Supabase demonstra uma abordagem prática para construir aplicações modernas com front-end estruturado e backend como serviço. O foco está em integração fluida, produtividade no desenvolvimento e um fluxo consistente entre interface, autenticação e persistência.",
    highlights: [
      "Integração direta entre Angular e Supabase.",
      "Base útil para autenticação e leitura/escrita de dados.",
      "Estrutura preparada para evoluir recursos com baixo atrito operacional.",
    ],
    stack: ["Angular", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    slug: "teste-estagio-dev",
    title: "Teste Estágio Dev",
    subtitle:
      "Desafio técnico desenvolvido para vaga de estágio com foco em lógica, organização e entrega funcional.",
    repoUrl: "https://github.com/Parys-boop/TesteEstagioDesenvolvedor",
    tags: ["Desafio Técnico", "Front-end", "Processo Seletivo"],
    cardDescription:
      "Entrega de avaliação técnica voltada a demonstrar raciocínio, estrutura de código e capacidade de implementação.",
    readmeIntro:
      "O projeto Teste Estágio Dev representa uma solução construída a partir de requisitos de avaliação técnica. A implementação prioriza clareza, leitura do código e capacidade de transformar um enunciado em uma entrega concreta, organizada e passível de evolução.",
    highlights: [
      "Solução montada a partir de requisitos de teste técnico.",
      "Código organizado para facilitar leitura e avaliação.",
      "Ênfase em entrega funcional com atenção a estrutura e consistência.",
    ],
    stack: ["TypeScript", "React", "UI", "GitHub"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
