import { Project } from '../types/Project';


export const projects: Project[] = [
  {
    id: '1',
    title: 'Link Share',
    description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
    longDescription: 'Link Share es un gestor de links.',
    technologies: ['React', 'Java', 'React', 'SpringBoot', 'TailwindCSS', 'Docker'],
    services: ['Web', 'UX/UI'],
    images: ['https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',],
    videos: ['/videos/linkshare.mp4',
    ],
    githubUrl: 'https://github.com/SrtaLiv/LinkShare',
    liveUrl: '#',
    features: [
      'Autenticacion con JWT, OAUTH Google y Github',
      'Alta, Baja, modificacion y lectura de tus links',
      'Busqueda de perfiles',
      'Diseño responsive para todos los dispositivos'
    ],
    challenges: [
      'Implementación de actualizaciones en tiempo real del inventario a través de múltiples servidores',
      'Garantizar el procesamiento seguro de pagos y manejo de datos',
      'Optimización de consultas a la base de datos para catálogos de productos grandes',
      'Construcción de una arquitectura escalable para alto tráfico'
    ],
  },
  {
    id: "2",
    title: "SaveFood",
    description: "Una plataforma para gestionar comidas, con seguimiento de calorías y macronutrientes.",
    longDescription: "SaveFood es una aplicación que permite a los usuarios registrar, gestionar y controlar sus comidas, ayudando a mantener un seguimiento saludable de su nutrición.",
    technologies: ["Angular", "SpringBoot", "Java", "TailwindCSS", "Docker"],
    services: ['Web', 'UX/UI'],
    images: ["/projects/savefood.png",],
    videos: [''],
    githubUrl: "https://github.com/SrtaLiv/SaveFood-Backend",
    liveUrl: "#",
    features: [
      "Registro de comidas con nombre, calorías, proteínas, grasas y carbohidratos.",
      "Opción para agregar imágenes de las comidas.",
      "Visualización de estadísticas nutricionales.",
      "Interfaz responsiva para todo tipo de dispositivos."
    ],
    challenges: [
      "Integración de una base de datos para almacenar información nutricional a gran escala.",
      "Desarrollo de una API para la actualización de información en tiempo real.",
      "Optimización del rendimiento para manejar grandes volúmenes de datos.",
      "Creación de una interfaz amigable para usuarios no técnicos."
    ]
  },
  {
    id: '3',
    title: 'Nebula',
    description: 'A platform that brings together the latest news in technology and innovation, providing users with insightful articles and discussions.',
    longDescription: 'Nebula es una plataforma para descubrir y compartir noticias relacionadas con la tecnología, con un enfoque en innovación y tendencias actuales.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Docker'],
    services: ['Web', 'UX/UI'],
    images: ['/projects/PreviewNebula.png',
      '/projects/Services.png',
    ],
    videos: [''],
    githubUrl: 'https://github.com/SrtaLiv/Nebula',
    liveUrl: 'https://nebulasolution.netlify.app/',
    features: [
      'Interfaz intuitiva para navegar por las noticias.',
      'Funcionalidad de búsqueda avanzada para artículos.',
      'Posibilidad de comentar y participar en discusiones.',
      'Diseño responsivo que se adapta a todos los dispositivos.'
    ],
    challenges: [
      'Manejo de grandes volúmenes de tráfico debido a la alta demanda de noticias.',
      'Desarrollo de una API escalable para manejar consultas rápidas.',
      'Integración de un sistema de comentarios en tiempo real.',
      'Optimización del rendimiento para un acceso rápido a contenido de alta calidad.'
    ]
  },
  {
    id: '4',
    title: 'Landing PageNutricionista',
    description: 'Una plataforma que conecta a las personas con servicios nutricionales personalizados, promoviendo hábitos saludables y bienestar.',
    longDescription: 'NutriBalance es una solución digital diseñada para ayudar a los usuarios a acceder fácilmente a servicios de nutrición, con información clara sobre planes, ubicaciones y servicios disponibles.',
    technologies: ['Next.js 14', 'NextUI v2', 'Tailwind CSS', 'Tailwind Variants', 'TypeScript', 'Framer Motion', 'next-themes'],
    services: ['Web', 'UX/UI'],
    images: ['/projects/pcc.png','/projects/contact preview.PNG'
    ],
    videos: ['/videos/show project.mp4',
    ],
    githubUrl: 'https://github.com/SrtaLiv/Consultorio-Nutricionista-v2',
    liveUrl: 'https://nutribalanceapp.netlify.app/',
    features: [
      'Interfaz moderna y atractiva para explorar servicios nutricionales.',
      'Información detallada sobre planes de alimentación y ubicación del consultorio.',
      'Formulario de contacto para agendar consultas fácilmente.',
      'Diseño responsivo que se adapta a cualquier dispositivo.'
    ],
    challenges: [
      'Implementación de una navegación fluida para mejorar la experiencia del usuario.',
      'Creación de un diseño visualmente atractivo pero funcional.',
      'Optimización del rendimiento para tiempos de carga rápidos.',
      'Adaptación de la plataforma para dispositivos móviles y desktop.'
    ],
  },
  {
    id: '5',
    title: 'Mi Personaje 3D',
    description: 'Mi propio personaje 3D con animaciones creado con React Three Fiber y Blender.',
    longDescription: 'Este proyecto me permitio adquirir conocimientos en la creación de personajes 3D, utilizando tecnologías como React Three Fiber y Blender.',
    technologies: ['React-Three-Fiber', 'Vimeo', 'Vite', 'Blender'],
    services: ['Web', '3D'],
    images: ['https://github.com/SrtaLiv/Character-3D/blob/main/public/preview/Typing.PNG?raw=true', "https://github.com/SrtaLiv/Character-3D/blob/main/public/preview/Falling.PNG?raw=true"],
    videos: [''
    ],
    githubUrl: 'https://github.com/SrtaLiv/Character-3D',
    liveUrl: 'https://character3d.netlify.app/',
    features: [
      'Integración del personaje 3D con React Three Fiber y Blender de manera fluida.',
      'Optimización del renderizado para garantizar un buen rendimiento en diferentes dispositivos.',
      'Uso de Vimeo para animar el personaje 3D.',
    ],
    challenges: [
      'Implementación de una navegación fluida para mejorar la experiencia del usuario.',
      'Creación de un diseño visualmente atractivo pero funcional.',
      'Optimización del rendimiento para tiempos de carga rápidos.',
      'Adaptación de la plataforma para dispositivos móviles y desktop.'
    ],
  },
];

