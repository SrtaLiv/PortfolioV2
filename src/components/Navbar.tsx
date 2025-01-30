import React, { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import DownloadButton from './Curriculum/Download';
import { Link, NavLink, useNavigate } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navItems = [
    { name: 'Inicio', id: 'home' },
    { name: 'Sobre mi', id: 'about-me' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' }
  ];

  //Cambiar de pagina y scrollear hasta la seccion correspondiente
  const handleNavClick = async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return (
    <nav
      className={`fixed w-full overflow-hidden  z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-green-secondary">Ana Olivia T.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={`#${item.id}`}
                className="text-gray-700 hover:text-green-secondary px-3 py-2 text-sm font-medium transition-colors font-poppins"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.name}
              </NavLink>
            ))}

            <DownloadButton fileUrl="/cv/CV Ana Olivia Todesco - Full Stack Developer 2025.pdf" fileName="CV Ana Olivia Todesco - Full Stack Developer 2025.pdf" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div >

      {/* Mobile Navigation */}
      {
        isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}

              <a
                href=""
                className="flex items-center gap-2 bg-green-secondary text-white px-4 py-2 rounded-md hover:bg-green-500 transition duration-200"
                aria-label="Descargar CV"
              >
                <span>Curriculum</span>
              </a>
            </div>

          </div>
        )
      }
    </nav >
  );
};

export default Navbar;