import type { LandingDictionary } from "./dictionary-types";

export const ptDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Ferramentas privadas e instantâneas para o dia a dia. Zero uploads na nuvem.",
    description:
      "Ferramentas práticas de PDF, imagem e mídia executadas localmente no seu computador. Edite contratos confidenciais, relatórios financeiros e documentos pessoais sem enviar nada para a nuvem.",
    keywords: [
      "SlickKit",
      "ferramentas pdf privadas",
      "editor pdf offline",
      "sem upload na nuvem",
      "juntar pdf seguro",
      "comprimir pdf local",
      "em conformidade rgpd",
      "documentos confidenciais",
    ],
    ogTitle: "SlickKit | Ferramentas privadas e instantâneas para o dia a dia. Zero uploads na nuvem.",
    ogDescription:
      "Ferramentas de arquivos que priorizam sua privacidade. Edite PDFs confidenciais, relatórios financeiros e fotos de forma 100% privada no seu dispositivo.",
  },
  header: {
    skipToContent: "Pular para o conteúdo",
    brandTag: "Studio",
    nav: {
      tools: "Ferramentas",
      howItWorks: "Como Funciona",
      versus: "Comparações",
      compliance: "Conformidade",
      faq: "Perguntas Frequentes",
    },
    switchTheme: "Mudar tema de cores",
    themeDaylight: "Mudar para modo claro",
    themeDark: "Mudar para modo escuro",
    openPdfToolkit: "Abrir SlickKit PDF",
    toggleMenu: "Alternar menu de navegação",
  },
  hero: {
    eyebrow: "Ferramentas Privadas para o Dia a Dia",
    headlineBefore: "Ferramentas de arquivos que colocam sua ",
    headlineHighlight: "privacidade",
    headlineAfter: " em primeiro lugar.",
    subtext:
      "Edite PDFs confidenciais, documentos financeiros e fotos direto no seu computador. Zero uploads na nuvem e sem assinaturas mensais.",
    openPdfToolkit: "Abrir SlickKit PDF",
    exploreSuite: "Explorar Ferramentas",
    verifierTitle: "Garantia Interativa de Privacidade no Dispositivo",
    testWithFile: "Testar com Qualquer Arquivo",
    presets: [
      {
        id: "finance-audit",
        name: "Financas_Q4_2026.pdf",
        sizeLabel: "18.4 MB · Finanças",
        category: "Relatório Financeiro Confidencial",
        speedLabel: "0.2 seg",
      },
      {
        id: "legal-nda",
        name: "Contrato_Cliente.pdf",
        sizeLabel: "6.2 MB · Jurídico",
        category: "Acordo Corporativo Confidencial",
        speedLabel: "0.1 seg",
      },
      {
        id: "tax-return",
        name: "Declaracao_Renda_2026.pdf",
        sizeLabel: "12.8 MB · Pessoal",
        category: "Registro Fiscal Sensível",
        speedLabel: "0.2 seg",
      },
    ],
    docLabel: "Documento",
    speedLabel: "Velocidade",
    opening: "Abrindo...",
    instantPrefix: "Instantâneo",
    cloudUploadsLabel: "Uploads na Nuvem",
    zeroFilesUploaded: "0 Arquivos Enviados",
    localGuarantee: "Fica 100% no seu computador.",
    useCasesTitle: "Criado para quem lida com documentos confidenciais todos os dias",
    useCases: {
      finance: "Finanças e Bancos",
      legal: "Contratos Jurídicos",
      company: "Empresas e RH",
      personal: "Impostos e Documentos de Identidade",
      office: "Trabalho Diário de Escritório",
    },
  },
  productSuite: {
    sectionTitle: "Um conjunto simples de ferramentas para seus arquivos do dia a dia.",
    sectionSubtext:
      "Utilitários rápidos e fáceis para seus documentos, fotos e mídia. Tudo é processado no seu próprio computador para que seus arquivos confidenciais nunca sejam enviados para a internet.",
    availableNow: "DISPONÍVEL AGORA",
    comingSoon: "EM DESENVOLVIMENTO",
    notifyMe: "Avisar-me quando estiver pronto",
    pdf: {
      title: "SlickKit PDF",
      tag: "PDFs Diários e Confidenciais",
      description:
        "Junte, divida, comprima e reordene PDFs em segundos. Ideal para demonstrativos financeiros, contratos de clientes, faturas e declarações fiscais que você não pode enviar para a nuvem.",
      openToolkit: "Abrir SlickKit PDF",
      previewModes: {
        compress: {
          label: "Comprimir",
          desc: "Reduza o tamanho em até 80% mantendo a nitidez e legibilidade.",
          stat: "14.2 MB → 2.8 MB em 0.4s",
        },
        merge: {
          label: "Juntar",
          desc: "Combine relatórios de várias páginas, anexos e contratos escaneados sem complicação.",
          stat: "3 documentos combinados localmente",
        },
        rotate: {
          label: "Girar",
          desc: "Corrija documentos escaneados de cabeça para baixo e erros de orientação em 1 clique.",
          stat: "Reorientação instantânea",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Otimização Visual no Cliente",
      description:
        "Converta em lote, remova metadados e comprima imagens PNG, JPEG e WebP diretamente com o hardware gráfico do seu dispositivo.",
      previewTitle: "Compressão WebP e AVIF por Hardware",
      qualityLabel: "Qualidade Alvo",
      reductionLabel: "Espaço Economizado",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Segurança e Ocultação Local de Documentos",
      description:
        "Higienize documentos confidenciais, remova dados sensíveis, apague metadados ocultos e proteja com senha antes de enviar por e-mail.",
      previewTitle: "Limpeza de Metadados e Documentos",
      exifLabel: "Remover Tags GPS e EXIF",
      passphraseLabel: "Criptografia no Navegador",
    },
    video: {
      title: "SlickKit Video",
      tag: "Corte e Conversão de Vídeo no Dispositivo",
      description:
        "Corte gravações de tela, converta MP4 para WebM leve e remova faixas de áudio localmente usando WebAssembly FFmpeg.",
      previewTitle: "Compressor de Vídeo sem Nuvem",
      formatLabel: "Formato de Saída",
      trimLabel: "Corte Rápido sem Perda de Qualidade",
    },
  },
  benchmark: {
    sectionTitle: "Por que o processamento local supera a nuvem.",
    sectionSubtext:
      "As ferramentas de PDF online tradicionais enviam seus arquivos confidenciais para servidores remotos. O SlickKit processa tudo diretamente na memória do seu computador.",
    workloads: [
      {
        id: "tax-forms",
        label: "Formulários Fiscais e Bancários",
        cloudTimeSec: "25 seg",
        localTimeSec: "Instantâneo",
        cloudRiskNote: "Enviado para servidores de terceiros",
        benefitBadge: "100% Privado",
      },
      {
        id: "finance-report",
        label: "Relatório Financeiro Confidencial",
        cloudTimeSec: "45 seg",
        localTimeSec: "Instantâneo",
        cloudRiskNote: "Viola políticas de privacidade corporativas",
        benefitBadge: "Seguro para o Trabalho",
      },
      {
        id: "client-deck",
        label: "Apresentação Grande de 200 Páginas",
        cloudTimeSec: "2+ min",
        localTimeSec: "Menos de 1 seg",
        cloudRiskNote: "Frequentemente bloqueado por limites de tamanho",
        benefitBadge: "Sem Limites de Tamanho",
      },
    ],
    cloudHeading: "Serviços em Nuvem Tradicionais",
    cloudSubheading: "Upload → Fila Remota → Download",
    localHeading: "Motor de Silício SlickKit",
    localSubheading: "Zero Tráfego de Rede · Direto na Memória",
    privacyVerdict: "Zero Uploads Garantido",
    privacyVerdictDesc:
      "Seus documentos nunca transitam pela internet. Você pode desligar seu Wi-Fi por completo e o SlickKit continuará funcionando perfeitamente.",
  },
  manifesto: {
    titleBefore: "Construído para sua ",
    titleHighlight: "tranquilidade total.",
    thesisP1:
      "Todos os anos, milhões de contratos confidenciais, declarações de impostos e auditorias financeiras são enviados para sites aleatórios de conversão sem qualquer cautela.",
    thesisP2:
      "Acreditamos que ferramentas fundamentais do dia a dia devem ser privadas, instantâneas e pertencer a você — e não ser alugadas por R$ 100 todo mês.",
    principles: [
      {
        title: "Seguro para Trabalho Confidencial e Financeiro",
        badge: "NUNCA SAI DO SEU DISPOSITIVO",
        tagline: "Feito para arquivos que você não tem permissão de enviar para lugar nenhum.",
        description:
          "Seja preparando relatórios trimestrais, revisando acordos de confidencialidade, organizando folha de pagamento ou juntando comprovantes fiscais, seus documentos ficam exclusivamente no seu computador. Eles nunca vazam para terceiros.",
        points: [
          "Confiado para documentos bancários, financeiros, jurídicos e pessoais",
          "Seus arquivos nunca são enviados para servidores na nuvem",
          "Desligue o Wi-Fi e continue trabalhando com total tranquilidade",
        ],
      },
      {
        title: "Passe Vitalício Único. Zero Assinaturas.",
        badge: "PAGUE UMA VEZ, TENHA PARA SEMPRE",
        tagline: "Pare de pagar mensalidades só para editar um PDF.",
        description:
          "Você não deveria ter que alugar ferramentas básicas de escritório. Como seu próprio computador faz o processamento, não temos custos colossais de servidores para repassar a você. Use nossos recursos essenciais de graça ou adquira o passe vitalício.",
        points: [
          "Sem cobranças recorrentes nem armadilhas de renovação automática",
          "Pague uma única vez e seja dono das suas ferramentas para sempre",
          "Recursos principais funcionam na hora, sem precisar criar conta",
        ],
      },
      {
        title: "Velocidade Instantânea sem Espera de Upload",
        badge: "SEM FILAS NEM LIMITES DE TAMANHO",
        tagline: "Abra um relatório de 300 páginas tão rápido quanto uma folha de 1 página.",
        description:
          "Chega de barras de progresso lentas ou limites chatos de tamanho de arquivo na hora do prazo final. Como nada trafega pela internet, até arquivos pesados e digitalizações em alta resolução abrem e salvam em frações de segundo.",
        points: [
          "Funciona perfeitamente em redes Wi-Fi lentas de hotéis ou aviões",
          "Manipule grandes relatórios e documentos escaneados sem atrasos",
          "Ambiente de trabalho limpo, sem anúncios nem janelas pop-up",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Perguntas frequentes.",
    sectionSubtext: "Tudo o que você precisa saber sobre nossa arquitetura de privacidade e tecnologia.",
    items: [
      {
        category: "Privacidade e Segurança",
        question: "Meus documentos são enviados para algum servidor ao usar o SlickKit PDF?",
        answer:
          "Não. O SlickKit PDF opera 100% localmente no seu computador usando JavaScript no cliente, Web Workers e WebAssembly. Seus documentos nunca saem do seu dispositivo e jamais são enviados para servidores em nuvem ou armazenamento de terceiros. Você pode conferir isso a qualquer momento na aba Rede das Ferramentas de Desenvolvedor do seu navegador: você verá zero bytes transmitidos.",
      },
      {
        category: "Execução Offline",
        question: "Posso usar o SlickKit PDF completamente desconectado da internet?",
        answer:
          "Sim. Assim que o aplicativo web é carregado no seu navegador ou instalado como Progressive Web App (PWA), todos os mecanismos de processamento rodam localmente. Você pode desligar seu Wi-Fi, trabalhar em um avião ou em ambientes corporativos de alta segurança sem perder nenhuma função.",
      },
      {
        category: "Conformidade e Legislação",
        question: "O SlickKit PDF é seguro para contratos confidenciais e registros financeiros?",
        answer:
          "Sim. Como nenhum dado trafega pela rede, o SlickKit cumpre com rigorosos acordos de confidencialidade (NDA), normas de segurança financeira e princípios da LGPD e RGPD, pois não ocorre tratamento de dados por terceiros.",
      },
      {
        category: "Comparação e Desempenho",
        question: "Qual é a diferença entre o SlickKit PDF e serviços online como iLovePDF ou Smallpdf?",
        answer:
          "Serviços online convencionais enviam seus documentos confidenciais para servidores remotos, onde eles entram em filas de espera e ficam armazenados temporariamente. O SlickKit elimina os passos de upload e download ao processar os arquivos diretamente na memória do seu computador, sendo muito mais seguro, instantâneo e livre de assinaturas mensais.",
      },
      {
        category: "Limites e Preços",
        question: "Existem limites de tamanho de arquivo ou cobranças ocultas?",
        answer:
          "Não existem limites artificiais de servidor. Como os arquivos são processados pelos recursos do seu próprio aparelho, o único limite é a memória RAM disponível no seu equipamento. O SlickKit é gratuito, sem assinaturas obrigatórias, sem necessidade de cadastro e sem surpresas no cartão.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Manipule seus documentos confidenciais com total tranquilidade.",
    launchBannerSubtext:
      "Abra o SlickKit PDF direto no seu navegador. Zero uploads na nuvem, sem necessidade de cadastro e sem assinaturas mensais.",
    openPdfToolkit: "Abrir SlickKit PDF",
    exploreSuite: "Explorar Ferramentas",
    brandDescription:
      "Ferramentas práticas e privadas executadas no cliente, criadas para profissionais e pessoas que lidam diariamente com documentos confidenciais.",
    offlineMode: "Pronto para Offline · 100% no Cliente",
    onlineMode: "Conectado · Zero Transferência de Dados para a Nuvem",
    globalEditions: "EDIÇÕES GLOBAIS (9 IDIOMAS):",
    colProducts: "Produtos",
    colComparisons: "Comparações",
    colCompliance: "Conformidade e Segurança",
    colCompany: "Legal e Confiança",
    copyright: "SlickKit Studio. Todos os direitos reservados. Zero telemetria, zero rastreamento na nuvem.",
    terms: "Termos de Serviço",
    privacy: "Política de Privacidade",
    refunds: "Política de Reembolso",
    contact: "Contato e Suporte",
  },
};
