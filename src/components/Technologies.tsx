import React from 'react';

const technologies = {
  'Frontend': [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'React', icon: '⚛️' },
    { name: 'Vue.js', icon: '💚' },
    { name: 'Tailwind CSS', icon: '🎯' },
  ],
  'Backend': [
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'GraphQL', icon: '📊' },
  ],
  'Tools & Others': [
    { name: 'Git', icon: '📚' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Jest', icon: '🃏' },
    { name: 'Webpack', icon: '📦' },
    { name: 'Linux', icon: '🐧' },
  ],
};

const Technologies = () => {
  return (
    <section id="technologies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          Technologies & Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-xl font-semibold text-indigo-600 text-center mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors duration-300"
                  >
                    <span className="text-2xl mr-2">{tech.icon}</span>
                    <span className="text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;