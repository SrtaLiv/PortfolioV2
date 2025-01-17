import { ChevronDown } from 'lucide-react';
import React from 'react';
// import { ChevronDown } from 'lucide-react';
import '@google/model-viewer';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex-col items-center justify-center bg-green-secondary from-indigo-50 via-white to-purple-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl  text-green-text mb-4">
          Hola, mi nombre
          es <span className='font-bold'>Olivia.</span>
        </h1>
        {/* <h2 className="text-2xl md:text-3xl text-green-text mb-8">
          Full Stack Developer
        </h2> */}
        <p className="text-xl text-green-text max-w-2xl mx-auto mb-12">
          Apasionada por el desarrollo web y comprometida con el aprendizaje constante.
        </p>
        <a
          href="#about-me"
          className="inline-flex items-center justify-center animate-bounce"
        >
        </a>
      </div>
      <model-viewer
        className="z-20"
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
    </section>
  );
};

export default Hero;