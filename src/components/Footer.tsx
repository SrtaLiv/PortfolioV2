import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';
import AnimatedContent from '../animate/Animate';

const Footer = () => {
  return (
    <footer id="contact" className=" bg-white-text text-white flex items-center justify-center py-32">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              <a
                href="mailto:anaoliviatodesco@gmail.com"
                className="email text-1sm md:text-3xl lg:text-5xl text-green-text"
              >
                anaoliviatodesco@gmail.com
              </a>
            </h2>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com/SrtaLiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-primary hover:text-green-text transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/anaoliviatodesco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-primary hover:text-green-text transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/oliviatodesco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-primary hover:text-green-text transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
          <div className="text-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Ana Olivia Todesco.</p>
          </div>
        </div>
      </AnimatedContent>
    </footer>
  );
};

export default Footer;