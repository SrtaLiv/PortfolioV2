import React from 'react';

const technologies = {
  FRONTEND: [
    { name: 'HTML5', icon: '/icons/html-5.png' },
    { name: 'CSS3', icon: '/icons/css.png' },
    { name: 'JavaScript', icon: '/icons/js.png' },
    { name: 'TypeScript', icon: '/icons/typescript.png' },
    { name: 'React', icon: '/icons/react.png' },
    { name: 'Angular', icon: '/icons/angular.png' },
    { name: 'Tailwind CSS', icon: '/icons/tailwindcss.png' },
  ],
  BACKEND: [
    { name: 'Java', icon: '/icons/java.png' },
    { name: 'Spring Boot', icon: '/icons/springboot.png' },
    { name: 'MySQL', icon: '/icons/mysql.png' },
    { name: 'PostgreSQL', icon: '/icons/PostgreSQL.png' },
    { name: 'Oracle', icon: '/icons/oracle.png' },
  ],
  OTROS: [
    { name: 'Git', icon: '/icons/git.png' },
    { name: 'Docker', icon: '/icons/docker.png' },
    { name: 'Linux', icon: '/icons/linux.png' },
    { name: 'Postman', icon: '/icons/postman.png' },
    { name: 'Figma', icon: '/icons/figma.png' },
    { name: 'JUnit', icon: '/icons/junit.png' },
  ],
};

const Technologies = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-green-text text-center mb-8">
                {category}
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="group flex flex-col items-center p-4 rounded-lg hover:bg-indigo-50 transition-all duration-300"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-12 h-12 mb-3 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="text-gray-700 font-medium text-sm text-center">
                      {tech.name}
                    </span>
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