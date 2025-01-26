import { Project } from '../types/Project';

export const projects: Project[] = [
    {
      id: '1',
      title: 'Link Share',
      description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
      longDescription: 'Link Share es un gestor de links.',
      technologies: ['React', 'Java', 'React', 'SpringBoot', 'TailwindCSS', 'Docker'],
      images: ['https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',],
      videos: [''],
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
      ]
    },
    {
      id: "2",
      title: "SaveFood",
      description: "Una plataforma para gestionar comidas, con seguimiento de calorías y macronutrientes.",
      longDescription: "SaveFood es una aplicación que permite a los usuarios registrar, gestionar y controlar sus comidas, ayudando a mantener un seguimiento saludable de su nutrición.",
      technologies: ["Angular", "SpringBoot", "Java", "TailwindCSS", "Docker"],
      images: ["https://images.unsplash.com/photo-1606756849922-e5b6db0758e1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjY0OXwwfDF8c2VhY2h8MjB8fGZvb2R8ZW58MHx8fHwxNjY5NzYyNzM3&ixlib=rb-1.2.1&q=80&w=1080",],
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
      images: ['../dist/assets/projects/PreviewNebula.PNG',
        '../dist/assets/projects/Services.PNG',
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
      images: ['../dist/assets/projects/contact preview.PNG',
      ],
      videos: ['../dist/assets/videos/show project.mp4',
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
    }
  ];
  