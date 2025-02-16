import React from 'react';
import Technologies from './Technologies';
import AnimatedContent from '../animate/Animate';

// I need a feacture for a links ptionals 

const About = () => {
  return (
    <section id="about-me" className="py-16 my-8 bg-gray-50">
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
          <h2 className="text-5xl mb-4 font-poppins font-extrabold text-green-text  transition-colors duration-300">
            Sobre mi.
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <p className="text-lg text-green-text font-poppins">
                ¡Hola! Soy Ana Olivia Todesco,  una apasionada <span className='font-bold'> desarrolladora web</span> de Argentina. Desde que descubrí el mundo de la tecnología y la programación, supe que había encontrado mi lugar</p>
              <p className="font-poppins text-lg text-green-text">
                Actualmente, estoy finalizando una<span className='font-bold'>  Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas</span>  un paso más en mi camino para convertirme en una profesional sólida y versátil.
              </p>
              <p className="font-poppins text-lg text-green-text">
                Si hay algo que me define, es mi entusiasmo por conectar, crear y contribuir. Siempre estoy lista para asumir nuevos retos, aprender de los demás y, sobre todo, disfrutar del proceso. 🚀✨
              </p>
            </div>
            <div className="md:w-1/2 border-2 border-green-text rounded-lg relative overflow-hidden">
              <img
                src="/others/me.jpg"
                alt="Developer working"
                className="rounded-lg shadow-lg h-96 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </AnimatedContent>


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
        <div id="technologies" className="my-2 py-16 h-full">
          <Technologies />
        </div>
      </AnimatedContent>
    </section>
  );
};

export default About;