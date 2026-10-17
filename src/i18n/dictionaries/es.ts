import type { LandingDictionary } from "./dictionary-types";

export const esDictionary: LandingDictionary = {
  meta: {
    title: "SlickKit | Herramientas privadas e instantáneas. Sin subidas a la nube.",
    description:
      "Herramientas diarias para PDF, imágenes y multimedia que funcionan localmente en tu ordenador. Edita contratos confidenciales, extractos bancarios y documentos personales sin subir nada a la nube.",
    keywords: [
      "SlickKit",
      "herramientas pdf privadas",
      "editor pdf sin conexión",
      "sin subir a la nube",
      "unir pdf seguro",
      "comprimir pdf local",
      "conforme rgpd",
      "documentos confidenciales",
      "sin suscripciones pdf",
    ],
    ogTitle: "SlickKit | Herramientas privadas e instantáneas. Sin subidas a la nube.",
    ogDescription:
      "Herramientas de archivos que respetan tu privacidad. Edita PDFs confidenciales, reportes financieros y fotos de forma 100% privada en tu dispositivo.",
  },
  header: {
    skipToContent: "Saltar al contenido",
    brandTag: "Studio",
    nav: {
      tools: "Herramientas",
      howItWorks: "Cómo funciona",
      versus: "Comparativas",
      compliance: "Cumplimiento",
      faq: "Preguntas frecuentes",
    },
    switchTheme: "Cambiar tema de color",
    themeDaylight: "Cambiar a modo claro",
    themeDark: "Cambiar a modo oscuro",
    openPdfToolkit: "Abrir SlickKit PDF",
    toggleMenu: "Alternar menú de navegación",
  },
  hero: {
    eyebrow: "Herramientas privadas para el día a día",
    headlineBefore: "Herramientas de archivos que ponen tu ",
    headlineHighlight: "privacidad",
    headlineAfter: " en primer lugar.",
    subtext:
      "Edita PDFs confidenciales, documentos financieros y fotos directamente en tu ordenador. Cero subidas a la nube y sin suscripciones mensuales.",
    openPdfToolkit: "Abrir SlickKit PDF",
    exploreSuite: "Explorar herramientas",
    verifierTitle: "Garantía interactiva de privacidad en el dispositivo",
    testWithFile: "Prueba con cualquier archivo",
    presets: [
      {
        id: "finance-audit",
        name: "Finanzas_Q4_2026.pdf",
        sizeLabel: "18.4 MB · Finanzas",
        category: "Informe financiero confidencial",
        speedLabel: "0.2 seg",
      },
      {
        id: "legal-nda",
        name: "Contrato_Cliente.pdf",
        sizeLabel: "6.2 MB · Legal",
        category: "Acuerdo privado de empresa",
        speedLabel: "0.1 seg",
      },
      {
        id: "tax-return",
        name: "Declaracion_Renta_2026.pdf",
        sizeLabel: "12.8 MB · Personal",
        category: "Documento fiscal sensible",
        speedLabel: "0.2 seg",
      },
    ],
    docLabel: "Documento",
    speedLabel: "Velocidad",
    opening: "Abriendo...",
    instantPrefix: "Instantáneo",
    cloudUploadsLabel: "Subidas a la nube",
    zeroFilesUploaded: "0 archivos subidos",
    localGuarantee: "Permanece 100% en tu ordenador.",
    useCasesTitle: "Diseñado para quienes manejan documentos confidenciales cada día",
    useCases: {
      finance: "Finanzas y banca",
      legal: "Contratos legales",
      company: "Empresa y RRHH",
      personal: "Impuestos y documentos de identidad",
      office: "Trabajo diario de oficina",
    },
  },
  productSuite: {
    sectionTitle: "Un conjunto sencillo de herramientas para tus archivos diarios.",
    sectionSubtext:
      "Utilidades rápidas y fáciles de usar para tus documentos, fotos y medios cotidianos. Todo se ejecuta en tu propio ordenador para que tus archivos confidenciales nunca salgan de él.",
    availableNow: "DISPONIBLE AHORA",
    comingSoon: "EN DESARROLLO",
    notifyMe: "Avisarme cuando esté listo",
    pdf: {
      title: "SlickKit PDF",
      tag: "PDFs cotidianos y confidenciales",
      description:
        "Une, divide, reduce y reordena PDFs en segundos. Perfecto para extractos financieros, contratos de clientes, facturas y formularios fiscales que no puedes subir a sitios públicos.",
      openToolkit: "Abrir SlickKit PDF",
      previewModes: {
        compress: {
          label: "Comprimir",
          desc: "Reduce el tamaño hasta un 80% sin perder nitidez de lectura.",
          stat: "14.2 MB → 2.8 MB en 0.4s",
        },
        merge: {
          label: "Unir",
          desc: "Combina informes de varias páginas, anexos y contratos escaneados sin problemas.",
          stat: "3 documentos combinados localmente",
        },
        rotate: {
          label: "Girar",
          desc: "Corrige documentos escaneados al revés y errores de orientación en 1 clic.",
          stat: "Reorientación de página instantánea",
        },
      },
    },
    image: {
      title: "SlickKit Image",
      tag: "Optimización visual en el cliente",
      description:
        "Convierte imágenes por lotes, elimina metadatos y comprime PNG, JPEG y WebP directamente con tu hardware gráfico.",
      previewTitle: "Compresión WebP y AVIF por hardware",
      qualityLabel: "Calidad objetivo",
      reductionLabel: "Espacio ahorrado",
    },
    vault: {
      title: "SlickKit Vault",
      tag: "Seguridad y redacción local de documentos",
      description:
        "Depura documentos sensibles, redacta números confidenciales, borra metadatos ocultos y protege con contraseña antes de enviar por correo.",
      previewTitle: "Saneamiento de documentos y metadatos",
      exifLabel: "Eliminar etiquetas GPS y EXIF",
      passphraseLabel: "Cifrado en el navegador",
    },
    video: {
      title: "SlickKit Video",
      tag: "Recorte y compresión de vídeo en el dispositivo",
      description:
        "Recorta grabaciones de pantalla, convierte MP4 a WebM y elimina pistas de audio localmente usando WebAssembly FFmpeg.",
      previewTitle: "Compresor de vídeo sin nube",
      formatLabel: "Formato de salida",
      trimLabel: "Recorte rápido sin pérdidas",
    },
  },
  benchmark: {
    sectionTitle: "Por qué el procesamiento local supera a la nube.",
    sectionSubtext:
      "Las herramientas PDF online convencionales suben tus archivos confidenciales a servidores remotos. SlickKit procesa todo dentro de la memoria de tu ordenador.",
    workloads: [
      {
        id: "tax-forms",
        label: "Formularios bancarios y fiscales",
        cloudTimeSec: "25 seg",
        localTimeSec: "Instantáneo",
        cloudRiskNote: "Subido al servidor de un desconocido",
        benefitBadge: "100% Privado",
      },
      {
        id: "finance-report",
        label: "Informe financiero confidencial",
        cloudTimeSec: "45 seg",
        localTimeSec: "Instantáneo",
        cloudRiskNote: "Infringe políticas de privacidad corporativas",
        benefitBadge: "Seguro para el trabajo",
      },
      {
        id: "client-deck",
        label: "Presentación grande de 200 páginas",
        cloudTimeSec: "2+ min",
        localTimeSec: "Menos de 1 seg",
        cloudRiskNote: "Frecuentemente bloqueado por límites de tamaño",
        benefitBadge: "Sin límites de tamaño",
      },
    ],
    cloudHeading: "Servicios en la nube tradicionales",
    cloudSubheading: "Subida → Cola remota → Descarga",
    localHeading: "Motor de silicio SlickKit",
    localSubheading: "Cero saltos de red · Directo en memoria",
    privacyVerdict: "Cero subidas garantizado",
    privacyVerdictDesc:
      "Tus documentos nunca viajan a través de internet. Puedes desconectar completamente tu conexión y SlickKit seguirá funcionando a la perfección.",
  },
  manifesto: {
    titleBefore: "Construido para tu ",
    titleHighlight: "tranquilidad absoluta.",
    thesisP1:
      "Cada año, millones de contratos legales confidenciales, declaraciones de impuestos personales y auditorías financieras se suben a sitios web de conversión sin pensarlo dos veces.",
    thesisP2:
      "Creemos que las herramientas de archivos diarias deben ser privadas, instantáneas y de tu propiedad, no alquiladas por 20 € al mes.",
    principles: [
      {
        title: "Seguro para trabajo confidencial y financiero",
        badge: "NUNCA SALE DE TU DISPOSITIVO",
        tagline: "Creado para archivos que no puedes subir a ningún sitio.",
        description:
          "Ya estés preparando balances trimestrales, revisando un contrato de confidencialidad, organizando nóminas o uniendo documentos fiscales personales, tus archivos se quedan estrictamente en tu ordenador. Jamás se filtrarán a un servidor de terceros.",
        points: [
          "Confiado para documentos bancarios, financieros, legales y personales",
          "Tus archivos nunca se suben a ningún servidor en la nube",
          "Desconecta el Wi-Fi y continúa trabajando con total tranquilidad",
        ],
      },
      {
        title: "Pase vitalicio único. Cero suscripciones.",
        badge: "PAGA UNA VEZ, TUYO PARA SIEMPRE",
        tagline: "Deja de pagar 20 € cada mes solo para editar un PDF.",
        description:
          "No deberías tener que alquilar herramientas cotidianas. Como tu propio ordenador realiza el procesamiento, no tenemos costes de servidores gigantes que trasladarte. Usa nuestras herramientas diarias gratis u obtén un pase vitalicio sin cuotas.",
        points: [
          "Sin facturación mensual recurrente ni renovaciones automáticas",
          "Paga una vez y sé dueño de tus herramientas para siempre",
          "Las funciones esenciales funcionan al instante sin necesidad de registrarte",
        ],
      },
      {
        title: "Velocidad instantánea sin esperar subidas",
        badge: "SIN COLAS NI LÍMITES DE TAMAÑO",
        tagline: "Abre un informe de 300 páginas tan rápido como una nota de 1 página.",
        description:
          "Deja de esperar barras de carga lentas o toparte con molestos límites de tamaño cuando tienes una fecha límite. Como nada viaja por internet, incluso los archivos pesados y escaneos de alta resolución se procesan en una fracción de segundo.",
        points: [
          "Funciona perfectamente en redes lentas de hotel, avión o cafetería",
          "Maneja grandes documentos financieros sin demoras",
          "Espacio de trabajo limpio sin publicidad ni ventanas emergentes",
        ],
      },
    ],
  },
  faq: {
    sectionTitle: "Preguntas frecuentes.",
    sectionSubtext: "Todo lo que necesitas saber sobre nuestra arquitectura de privacidad y tecnología.",
    items: [
      {
        category: "Privacidad y seguridad",
        question: "¿Se suben mis documentos a algún servidor al usar SlickKit PDF?",
        answer:
          "No. SlickKit PDF funciona 100% de manera local en tu ordenador utilizando JavaScript en el cliente, Web Workers y WebAssembly. Tus documentos nunca salen de tu dispositivo y jamás se suben a ningún servidor en la nube ni almacenamiento de terceros. Puedes comprobarlo en cualquier momento abriendo la pestaña Red de las herramientas para desarrolladores de tu navegador: verás 0 bytes transmitidos.",
      },
      {
        category: "Ejecución sin conexión",
        question: "¿Puedo usar SlickKit PDF totalmente desconectado de internet?",
        answer:
          "Sí. Una vez cargada la aplicación web en tu navegador o instalada como Progressive Web App (PWA), todos los motores de procesamiento se ejecutan localmente en tu dispositivo. Puedes desactivar tu Wi-Fi, trabajar en un avión o en entornos de alta seguridad aislados sin perder funcionalidad.",
      },
      {
        category: "Cumplimiento y legalidad",
        question: "¿Es SlickKit PDF seguro para contratos confidenciales y registros financieros?",
        answer:
          "Sí. Al no transmitirse ningún dato por la red, SlickKit cumple con estrictos acuerdos de confidencialidad corporativa (NDA), normativas de seguridad financiera y los principios del RGPD al no existir tratamiento de datos por terceros. Tus contratos, extractos bancarios y declaraciones tributarias permanecen exclusivamente bajo tu custodia.",
      },
      {
        category: "Comparativa y rendimiento",
        question: "¿Cómo se compara SlickKit PDF con servicios online como iLovePDF o Smallpdf?",
        answer:
          "Los servicios de PDF tradicionales en línea suben tus documentos confidenciales a servidores remotos donde quedan en cola, se procesan y se almacenan temporalmente. SlickKit elimina los pasos de subida y descarga al procesar los archivos directamente en la memoria de tu ordenador, haciéndolo mucho más seguro, instantáneo para archivos pesados y libre de suscripciones mensuales.",
      },
      {
        category: "Límites y precios",
        question: "¿Existen límites de tamaño de archivo o restricciones de pago?",
        answer:
          "No hay límites artificiales de servidor. Como los archivos se procesan localmente utilizando la CPU y la memoria de tu dispositivo, el único límite es la RAM disponible de tu equipo. SlickKit es completamente gratuito, sin suscripciones obligatorias, sin registros de cuenta y sin cobros recurrentes en tu tarjeta.",
      },
    ],
  },
  footer: {
    launchBannerTitle: "Maneja tus documentos confidenciales con total confianza.",
    launchBannerSubtext:
      "Abre SlickKit PDF directamente en tu navegador. Cero subidas a la nube, sin necesidad de registrarte y sin suscripciones mensuales recurrentes.",
    openPdfToolkit: "Abrir SlickKit PDF",
    exploreSuite: "Explorar herramientas",
    brandDescription:
      "Herramientas diarias privadas que funcionan en el cliente, creadas para particulares y profesionales que gestionan documentos confidenciales.",
    offlineMode: "Listo para trabajar sin conexión · 100% en el cliente",
    onlineMode: "Conectado · Cero transferencia de datos a la nube",
    globalEditions: "EDICIONES GLOBALES (9 IDIOMAS):",
    colProducts: "Productos",
    colComparisons: "Comparativas",
    colCompliance: "Cumplimiento y seguridad",
    colCompany: "Legal y confianza",
    copyright: "SlickKit Studio. Todos los derechos reservados. Cero telemetría, cero rastreo en la nube.",
    terms: "Términos del servicio",
    privacy: "Política de privacidad",
    refunds: "Política de reembolso",
    contact: "Contacto y soporte",
  },
};
