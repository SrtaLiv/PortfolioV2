import React from 'react';
import Technologies from './Technologies';

const About = () => {
  return (
    <section id="about-me" className="md:h-screen py-16 my-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl mb-4 font-poppins font-extrabold text-green-text  transition-colors duration-300">
          Sobre mi.
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">


          <div className="md:w-1/2 border-2 border-green-text rounded-lg relative overflow-hidden">
            <img
              src="dist/assets/WhatsApp Image 2024-02-22 at 16.03.47.jpeg"
              alt="Developer working"
              className="rounded-lg shadow-lg h-96 w-full object-cover"
            />
          </div>

          <div className="md:w-1/2 space-y-6">

            {/* verificar font */}
            <p className="text-lg text-green-text font-poppins">
              Mi nombre es Ana Olivia Todesco, soy de Argentina y me especializo en
              <span className='font-bold'> Desarrollo Web</span>. Me apasiona la tecnología y la programación, y disfruto de aprender cosas nuevas cada día.    </p>
            <p className="font-poppins text-lg text-green-text">
              Actualmente, estudio una Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas para continuar mi formación. En cada desafío doy lo mejor de mí y busco crecer como profesional en este ámbito. Además de estudiar, creo contenido en Instagram, donde recomiendo recursos para programadores y diseñadores.
            </p>
          </div>
        </div>
      </div>
      <section id="technologies" className="my-2">
        <Technologies />
      </section>
    </section>
  );
};

export default About;