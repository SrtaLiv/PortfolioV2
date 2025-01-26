interface TechnologiesListProps {
  technologies: string[];
}

export const TechnologiesList = ({ technologies }: TechnologiesListProps) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tecnologías</h2>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span
          key={index}
          className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
); 