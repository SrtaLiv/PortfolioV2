import React from 'react';
import Card from './Card/Card';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import Technologies from './Technologies';

const projects = [
  {
    id: 1,
    title: 'Link Share',
    description: 'A full-featured e-commerce platform with real-time inventory management and secure payment processing.',
    technologies: ['React', 'Java', 'MySQL', 'Spring Boot'],
    services: ['Web', 'UX/UI'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800',
    link: '/project/1',
  },
  {
    id: 2,
    title: 'Save Food',
    description: 'A collaborative task management system with real-time updates and team communication features.',
    technologies: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
    services: ['Web', 'UX/UI'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    link: '/project/2',
  },
  {
    id: 3,
    title: 'Nebula',
    description: 'An analytics dashboard for social media management with data visualization and reporting.',
    technologies: ['React', 'TailwindCSS'],
    services: ['Web', 'UX/UI'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    link: '/project/3',
  },
  {
    id: 4,
    title: 'Nutricionista',
    description: 'A secure healthcare portal for patient management and appointment scheduling.',
    technologies: ['Angular', 'Java Spring', 'MySQL', 'Docker'],
    services: ['Web', 'UX/UI'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    link: '/project/4',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-black-primary md:h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-green-text transition-colors duration-300 my-12">
          Proyectos.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              to={`/project/${project.id ?? index + 1}`}
              className="flex items-center ml-auto text-indigo-600 hover:text-indigo-700 font-medium"
            >
              <Card
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                services={project.services}
                image={project.image}
                link={project.link}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
