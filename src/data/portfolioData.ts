export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  role: string;
  shortDesc: string;
  previewImage: string;
  previewVideo?: string;
  previewWebsites?: {
    name: string;
    image: string;
  }[];
  gallery: {
    type: 'image' | 'video';
    src: string;
    caption: string;
  }[];
  tags: string[];
  highlights: string[];
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  features: string[];
}

export const BRAND_DATA = {
  name: "julianabv.social",
  heroHeadline: [
    "DIGITAL.",
    "CONTENIDO.",
    "SISTEMAS."
  ],
  heroSubtitle: "Creo experiencias digitales y soluciones que ayudan a los negocios a avanzar.",
  badge: "julianabv.social",
  positioning: "Ayudo a marcas personales, emprendimientos y pequeños negocios a mejorar su presencia digital, crear contenido con intención y automatizar procesos.",
  coreIdea: "DIGITAL + CONTENIDO + AUTOMATIZACIÓN",
  links: {
    whatsapp: "https://wa.me/message/ZVNRUBLOIDYQA1",
    instagram: "https://www.instagram.com/julianabv.social/",
    beacons: "https://beacons.ai/julianabv.social"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "doctor-motos",
    number: "01",
    title: "Doctor de las Motos",
    category: "Contenido · Gestión digital",
    role: "Contenido y gestión digital",
    shortDesc: "Estrategia audiovisual enfocada en conectar con la comunidad motera, demostraciones de taller, productos y aceleración de consultas por canales directos.",
    previewImage: "/assets/doctor-cover.png",
    previewVideo: "/assets/doctor-destacado.mp4",
    gallery: [
      {
        type: "video",
        src: "/assets/doctor-destacado.mp4",
        caption: "Reel dinámico de producto y taller con alta interacción"
      },
      {
        type: "video",
        src: "/assets/doctor-viral.mp4",
        caption: "Formato audiovisual de alto alcance y retención"
      },
      {
        type: "image",
        src: "/assets/doctor-presenter.jpg",
        caption: "Despues- Dirección de contenido"
      },
      {
        type: "image",
        src: "/assets/doctor-grid-reels.jpg",
        caption: "Antes"
      },
    
      {
        type: "image",
        src: "/assets/doctor-pagina.png",
        caption: "Gestión de presencia digital y catálogo web"
      },
      {
        type: "image",
        src: "/assets/doctor-social.png",
        caption: "Perfil de Instagram y optimización de biografía"
      },
  
    ],
    tags: ["Estrategia de Reels", "Grabación & Edición", "Gestión de Canales", "Enfoque Comercial"],
    highlights: ["Formato dinámico en taller", "Conexión directa con clientes vía WhatsApp", "Dirección de cámara e interacción"]
  },
  {
    id: "sr-burger",
    number: "02",
    title: "Sr Burger / My Burger",
    category: "Contenido · Operación · Publicidad",
    role: "Operación, gestión y contenido",
    shortDesc: "Comprensión integral de la operación física del negocio gastronómico combinada con generación de contenido apetecible y soporte en ventas.",
    previewImage: "/assets/sr-burger-cover.jpg",
    gallery: [
      {
        type: "image",
        src: "/assets/sr-burger-content.png",
        caption: "Piezas visuales promocionales y comunicación de promociones de temporada"
      },
      {
        type: "image",
        src: "/assets/sr-burger-fotos.png",
        caption: "Producción fotográfica de producto y menú para delivery"
      }
    ],
    tags: ["Operación de Negocio", "Contenido Gastronómico", "Publicidad Local", "Atención al Cliente"],
    highlights: ["Visión desde la cocina y la caja", "Alineación de promociones con tiempos de cocina", "Estrategia orientada a consumo y pedidos"]
  },
  {
    id: "casa-helado",
    number: "03",
    title: "La Casa del Helado",
    category: "Video · Redes",
    role: "Edición de video y administración de redes",
    shortDesc: "Producción de contenido dinámico y divertido para heladería, aprovechando trends, interacción visual de producto y administración de interacciones.",
    previewImage: "/assets/helado-ig.png",
    gallery: [
      {
        type: "image",
        src: "/assets/helado-ig.png",
        caption: "Captura de presencia y optimización de redes sociales de La Casa del Helado"
      },
      {
        type: "image",
        src: "/assets/helado-viral.png",
        caption: "Evidencia de alcance y métricas orgánicas en reels virales"
      },
      {
        type: "video",
        src: "/assets/helado-video.mp4",
        caption: "Video viral demostrativo de producto y experiencia de compra"
      },
      {
        type: "image",
        src: "/assets/helado-cover.png",
        caption: "Identidad visual de marca y estilo gráfico"
      },
      {
        type: "image",
        src: "/assets/helado-antes.png",
        caption: "Estado inicial del canal antes de la renovación de contenido"
      }
    ],
    tags: ["Edición Rítmica", "Humor & Trends", "Community Management", "Visual Appeal"],
    highlights: ["Storytelling rápido", "Picos orgánicos de reproducciones", "Manejo cercano de mensajes y comentarios"]
  },
  {
    id: "colombia-cocktails",
    number: "04",
    title: "Colombia Cocktails",
    category: "Contenido · Video",
    role: "Contenido y video",
    shortDesc: "Estética visual sofisticada y ritmo audiovisual para eventos y coctelería premium, capturando el proceso artesanal y la experiencia social.",
    previewImage: "/assets/colombia-video.mp4",
    previewVideo: "/assets/colombia-video.mp4",
    gallery: [
      {
        type: "video",
        src: "/assets/colombia-video.mp4",
        caption: "Edición de video destacando la experiencia y carta digital Beacons"
      },
      {
        type: "video",
        src: "/assets/colombia-video-alt.mp4",
        caption: "Formato vertical para historias y reels de interacción"
      }
    ],
    tags: ["Edición Cinematográfica", "Estilo Premium", "Eventos Sociales", "Branding Visual"],
    highlights: ["Tratamiento estético de iluminación", "Ritmo musical sincronizado", "Enfoque en experiencia de cliente"]
  },
  {
    id: "clinica-motos",
    number: "05",
    title: "Clínica de Motos / Servimotos / MD Center / Velux",
    category: "Contenido · Digital",
    role: "Contenido y gestión de plataformas",
    shortDesc: "Ecosistema integral de marcas y talleres especializados. Desarrollo de páginas web, catálogo de servicios, perfiles sociales y piezas con más de 247k reproducciones.",
    previewImage: "/assets/clinica-pagina.png",
    previewWebsites: [
      { name: "Clínica de Motos", image: "/assets/clinica-pagina.png" },
      { name: "Servimotos", image: "/assets/servimotos-pagina.png" },
      { name: "MD Center", image: "/assets/mdcenter-cover.png" },
      { name: "Velux Estética", image: "/assets/veluxe-pagina.png" }
    ],
    gallery: [
      {
        type: "video",
        src: "/assets/clinica-video.mp4",
        caption: "Video editado para servicios técnicos y mantenimiento en taller"
      },
      {
        type: "image",
        src: "/assets/clinica-viral-247k.jpg",
        caption: "Reel viral con más de 247.000 reproducciones orgánicas comprobables"
      },
      {
        type: "image",
        src: "/assets/clinica-pagina.png",
        caption: "Página web de soporte y agendamiento para Clínica de Motos PTY"
      },
      {
        type: "image",
        src: "/assets/servimotos-pagina.png",
        caption: "Plataforma web digital para la red de talleres Servimotos"
      },
      {
        type: "image",
        src: "/assets/veluxe-pagina.png",
        caption: "Página web Beacons y catálogo de servicios de Velux Estética Integral"
      },
    
      {
        type: "image",
        src: "/assets/clinica-ig-profile.png",
        caption: "Perfil oficial y biografía orientada a conversión de visitas"
      },
      {
        type: "image",
        src: "/assets/clini.png",
        caption: "Diseño de catálogo y piezas de equipamiento técnico"
      },
      {
        type: "image",
        src: "/assets/clinica-antes.png",
        caption: "Punto de partida antes de la implementación de la nueva estrategia"
      }
    ],
    tags: ["Caso Viral (+247k)", "Desarrollo Web", "Sistemas de Cita", "Ecosistema Multi-Marca"],
    highlights: ["Reel destacado con +247k vistas", "Galería de 4 plataformas web activas", "Enfoque multisede y digital"]
  }
];

export const SYSTEMS_DATA = {
  title: "NO SOLO CREO CONTENIDO.",
  subtitle: "TAMBIÉN CREO SISTEMAS.",
  description: "Cuando un proceso puede ser más simple, busco la forma de hacerlo.",
  app: {
    title: "APP PROPIA",
    tagline: "Sistema propio para gestionar reservas, clientes, vehículos, gastos y ventas.",
    video: "/assets/video-app-admin.mp4",
    categories: [
      { name: "Reservas", desc: "Gestión de citas y turnos en tiempo real para evitar solapamientos" },
      { name: "Clientes", desc: "Directorio de historial, datos de contacto y fidelización" },
      { name: "Vehículos", desc: "Ficha técnica, placas, modelo y trazabilidad por cliente" },
      { name: "Gastos", desc: "Control financiero operativo y clasificación de egresos" },
      { name: "Ventas", desc: "Facturación de servicios, repuestos y balance diario" }
    ],
    badges: ["Software a Medida", "Operación Real", "Control Total", "Sin Fricciones"]
  },
  automation: {
    title: "AUTOMATIZACIÓN ING CARS",
    tagline: "Automatización de procesos con n8n.",
    image: "/assets/n8n-ing-cars.png",
    badges: ["n8n", "FLUJOS", "PROCESOS"],
    details: [
      "Captura automática de leads desde formularios y canales de entrada",
      "Validación de datos y enrutamiento a bases de datos en tiempo real",
      "Notificaciones instantáneas al equipo comercial para acelerar el cierre"
    ]
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    number: "01",
    title: "DIGITAL START",
    tagline: "Haz que tu presencia empiece bien.",
    features: [
      "Presencia digital",
      "Estrategia",
      "Contenido",
      "Orientación"
    ]
  },
  {
    number: "02",
    title: "DIGITAL GROWTH",
    tagline: "Contenido con dirección.",
    features: [
      "Estrategia",
      "Contenido",
      "Gestión digital",
      "Optimización"
    ]
  },
  {
    number: "03",
    title: "SMART BUSINESS",
    tagline: "Automatiza lo repetitivo.",
    features: [
      "Automatización",
      "IA",
      "Flujos digitales",
      "Optimización de procesos"
    ]
  }
];
