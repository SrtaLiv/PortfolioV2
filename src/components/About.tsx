import React from 'react';

const About = () => {
  return (
    <section id="about-me" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
              alt="Developer working"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-lg text-gray-600">
              Hello! I'm Ana, a passionate Full Stack Developer with a keen eye for creating elegant solutions to complex problems. With several years of experience in web development, I've had the opportunity to work on diverse projects that have sharpened my skills in both front-end and back-end technologies.
            </p>
            <p className="text-lg text-gray-600">
              My approach to development combines technical expertise with creative problem-solving. I believe in writing clean, maintainable code and creating user experiences that delight and inspire.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;