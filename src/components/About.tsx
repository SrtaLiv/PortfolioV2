import React from 'react';
import Technologies from './Technologies';
import AnimatedContent from '../animate/Animate';
import transitionPageVariants from '../animate/TransitionPage';

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
                Mi nombre es Ana Olivia Todesco, soy de Argentina y me especializo en
                <span className='font-bold'> Desarrollo Web</span>. Me apasiona la tecnología y la programación, y disfruto de aprender cosas nuevas cada día.    </p>
              <p className="font-poppins text-lg text-green-text">
                Actualmente, estudio una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas para continuar mi formación. En cada desafío doy lo mejor de mí y busco crecer como profesional en este ámbito. Además de estudiar, creo contenido en Instagram, donde recomiendo recursos para programadores y diseñadores.
              </p>
            </div>
            <div className="md:w-1/2 border-2 border-green-text rounded-lg relative overflow-hidden">
              <img
                src="/WhatsApp Image 2024-02-22 at 16.03.47.jpeg"
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
// export default transitionPageVariants(About);
