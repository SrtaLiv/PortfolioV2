import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { MediaGallery } from '../components/MediaGallery';
import { FeaturesList } from '../components/FeaturesList';
import { TechnologiesList } from '../components/TechnologiesList';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Proyecto no encontrado.</h2>
          <Link to="/" className="text-indigo-600 hover:text-indigo-700">
            Volver
          </Link>
        </div>
      </div>
    );
  }

  const { title, longDescription, features, technologies, githubUrl, liveUrl, images, videos } = project;

  return (
    <main className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-green-900 hover:text-green-secondary mb-8"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Volver al inicio
        </Link>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600 mb-8">{longDescription}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
              <FeaturesList features={features} />

              <div>
                <TechnologiesList technologies={technologies} />

                <div className="flex gap-4">
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Código
                  </a>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Demo
                  </a>
                </div>
              </div>
            </div>

            <ul className="space-y-2">
              {[...images, ...videos]
                .filter(media => media && media.trim() !== '')
                .map((media, index) => (
                  <MediaGallery
                    key={index}
                    media={media}
                    title={title}
                    index={index}
                  />
                ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;