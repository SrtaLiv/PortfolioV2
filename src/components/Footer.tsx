import React from 'react';
import { Github, Linkedin, Twitter, Mail, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className=" bg-black text-white flex items-center justify-center h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">
            <a
              href="mailto:anaoliviatodesco@gmail.com"
              className="text-xl sm:text-3xl md:text-5xl text-gray-400 hover:text-white transition-colors"
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
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/anaoliviatodesco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/oliviatodesco/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Instagram size={24} />
          </a>

        </div>

        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ana Olivia Todesco.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;