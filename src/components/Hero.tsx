import React from 'react';
import '@google/model-viewer';
import { Github, LinkedinIcon, Download } from 'lucide-react';
import SplitText from '../animate/SplitText';
import TiltedCard from '../animate/TiltedCard';
import TextPressure from '../animate/Hello';

const Hero = () => {

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <section
      id="home"
      className="overflow-hidden sm:px-6 lg:px-8 min-h-screen flex flex-col md:flex-row items-center  bg-white-text from-indigo-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-6xl mx-auto text-center md:text-left md:w-1/2">

        <SplitText
          text="Hola, mi nombre es"
          className="text-4xl md:text-7xl md:text-wrap sm:text
          text-green-text mb-4"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          // easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text="Olivia"
          className="text-5xl font-semibold md:text-8xl md:text-wrap sm:text
          text-green-text mb-4"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />


        {/* <h1 className="text-5xl md:text-8xl md:text-wrap sm:text
         text-green-text mb-4">
          Hola, mi nombre es <span className="font-bold">Olivia.</span>
        </h1> */}
        <p className="text-xl text-green-text max-w-2xl mx-auto md:mx-0 mb-12">
          Apasionada por el desarrollo web y comprometida con el aprendizaje constante.
        </p>
        <a
          href="#about-me"
          className="inline-flex items-center justify-center animate-bounce"
        >
        </a>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          <a
            href=""
            className="flex items-center justify-center bg-green-text text-white p-2 rounded-md hover:bg-gray-700 transition duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href=""
            className="flex items-center justify-center bg-green-text text-white p-2 rounded-md hover:bg-blue-500 transition duration-200"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
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
      <div className='md:container-model overflow-x-hidden'>
        <model-viewer
          className="z-20"
          src="/model/source/retro_computer_minecraft.glb"
          alt="compaq"
          auto-rotate
          camera-controls
          auto-rotate-delay="0"
          camera-orbit="-180deg 0 0"
          interaction-prompt="none"
          disable-zoom
          style={{ width: '600px', height: '600px' }}
        >
        </model-viewer>
      </div>
    </section >
  );
};

export default Hero;