import React from 'react';
import { Link } from 'react-router';
import Card from './Card/Card';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20  min-h-screen bg-black-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-white transition-colors duration-300 my-12">
          Proyectos.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="flex flex-col "
            >
              <Card
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                services={project.services}
                image={project.images[0]}
                link={project.githubUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
