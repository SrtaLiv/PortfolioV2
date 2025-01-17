import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Twitter size={24} />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
        
        <div className="text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ana Olivia Todesco. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;