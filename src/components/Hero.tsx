import React from 'react';
// import { ChevronDown } from 'lucide-react';
import '@google/model-viewer';
import { Github, Linkedin, Twitter, LinkedinIcon, Download } from 'lucide-react';
const Hero = () => {
  return (
    <section
      id="home"
      className=" overflow-hidden px-12 min-h-screen flex flex-col md:flex-row items-center justify-center bg-white-text from-indigo-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left md:w-1/2">
        <h1 className="text-5xl md:text-7xl text-green-text mb-4">
          Hola, mi nombre es <span className="font-bold">Olivia.</span>
        </h1>
        <p className="text-xl text-green-text max-w-2xl mx-auto md:mx-0 mb-12">
          Apasionada por el desarrollo web y comprometida con el aprendizaje constante.
        </p>
        <a
          href="#about-me"
          className="inline-flex items-center justify-center animate-bounce"
        >
        </a>
        <div className="flex gap-4 mt-8">
          {/* Botón de GitHub */}
          <a
            href=""
            className="flex items-center justify-center bg-green-text text-white p-2 rounded-md hover:bg-gray-700 transition duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          {/* Botón de LinkedIn */}
          <a
            href=""
            className="flex items-center justify-center bg-green-text text-white p-2 rounded-md hover:bg-blue-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>

          {/* Botón de Descargar CV */}
          <a
            href=""
            className="flex items-center gap-2 bg-green-secondary text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-200"
            aria-label="Descargar CV"
          >
            <Download />
            <span>Curriculum</span>
          </a>
        </div>

      </div>
      <div className='overflow-x-hidden'>
        <model-viewer
          className="overflow-x-hidden z-20"
          src="/dist/assets/model/source/retro_computer_minecraft.glb"
          alt="compaq"
          auto-rotate
          camera-controls
          auto-rotate-delay="0"
          camera-orbit="-90deg 0 0"
          interaction-prompt="none"
          disable-zoom
          style={{ width: '500px', height: '500px' }}
        >
        </model-viewer>



      </div>
    </section >
  );
};

export default Hero;