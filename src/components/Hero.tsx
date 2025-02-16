import React, { useEffect, useState } from 'react';
import '@google/model-viewer';
import { Github, LinkedinIcon } from 'lucide-react';
import SplitText from '../animate/SplitText';
import DownloadButton from './Curriculum/Download';

const Hero = () => {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const [showComponent, setShowComponent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(true);
    }, 2500); // 2 segundos

    return () => clearTimeout(timer);
  }, []); // Solo ejecuta el efecto una vez al montar

  return (
    <section
      id="home"
      className="overflow-hidden sm:px-6 md:px-6 lg:px-56 xl:px-64 min-h-screen flex flex-col md:flex-row items-center  bg-white-text from-indigo-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-6xl mx-auto mt-4 text-center md:text-left md:w-1/2">
        <SplitText
          text="Hola, mi nombre es"
          className="text-4xl md:text-6xl md:text-wrap sm:text
          text-green-text mb-4"
          delay={150}
          animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
          animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
          // easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div
          className={`transition-opacity duration-500 ${showComponent ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {showComponent && (
            <SplitText
              text="Olivia."
              className="text-5xl font-semibold md:text-8xl md:text-wrap sm:text
          text-green-text mb-4"
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          )}
        </div>

        <p className="text-xl text-green-text max-w-2xl mx-auto md:mx-0">
          Apasionada por el <span className='font-semibold'>Desarrollo Web</span> y comprometida con el aprendizaje constante.
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

          <DownloadButton fileUrl="/cv/CV Ana Olivia Todesco - Full Stack Developer 2025.pdf" fileName="CV Ana Olivia Todesco - Full Stack Developer 2025.pdf" />
        </div>

      </div>
      <div className='md:container-model '>
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
          style={{ width: '500px', height: '500px' }}
        >
        </model-viewer>
      </div>
    </section >
  );
};

export default Hero;