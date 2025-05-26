import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Header = () => {
  // Estado para controlar o menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle para o menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Links de navegação
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Sobre', path: '/about' },
    { title: 'Projetos', path: '/projects' },
    { title: 'Skills', path: '/skills' },
    { title: 'Contato', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-dark/80 backdrop-blur-md">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto">
        <img src="/src/assets/ego-favicon.svg" alt="" />
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          Port<span className="text-primary">fólio</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="relative text-gray-300 transition-colors hover:text-primary group"
                >
                  {link.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão do menu mobile */}
        <button
          className="flex flex-col items-center justify-center w-10 h-10 space-y-1.5 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Menu Mobile */}
      <motion.div
        className="md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? 'auto' : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {isMenuOpen && (
          <nav className="container px-4 py-4 mx-auto border-t border-gray-800">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="block py-2 text-gray-300 transition-colors hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </motion.div>
    </header>
  );
};

export default Header;
