import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  githubUrl: string;
  liveUrl: string;
  features: string[];
  challenges: string[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Link Share',
    description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
    longDescription: 'Link Share es un gestor de links.',
    technologies: ['React', 'Java', 'React', 'SpringBoot', 'TailwindCSS', 'Docker'],
    images: ['https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',],
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
];


const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Project not found</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Volver
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver al inicio
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {project.title}
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              {project.longDescription}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-indigo-600 mr-2">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Tecnologias
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              {project.images.map((img, index) => (
                <li key={index} className="flex items-start">
                  <img
                    src={img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-md mb-4"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;