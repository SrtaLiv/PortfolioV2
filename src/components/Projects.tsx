import React from 'react';
import { Link } from 'react-router';
import Card from './Card/Card';
import { projects } from '../data/projects';
import AnimatedContent from '../animate/Animate';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 min-h-screen bg-black-primary">
         <AnimatedContent
        distance={70}
        direction="vertical"
        reverse={true}
        config={{ tension: 60, friction: 15 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.0}
        threshold={0.2}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-white transition-colors duration-300 my-12">
          Proyectos.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/project/${project.id}`}
              className="flex flex-col"
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
      </AnimatedContent>
    </section>

  );
};

export default Projects;
