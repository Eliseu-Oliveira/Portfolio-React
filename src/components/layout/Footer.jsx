import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Ano atual para o copyright
  const currentYear = new Date().getFullYear();

  // Links de navegação
  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Sobre', path: '/about' },
    { title: 'Projetos', path: '/projects' },
    { title: 'Skills', path: '/skills' },
    { title: 'Contato', path: '/contact' },
  ];

  // Links de redes sociais
  const socialLinks = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Eliseu-Oliveira/' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/eliseu-germano/' },
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com/eliseugermano' },
  ];

  return (
    <footer className="py-10 bg-dark-light">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo e descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4 text-2xl font-bold text-white">
              Port<span className="text-primary">fólio</span>
            </Link>
            <p className="mb-4 text-gray-300">
              Criando experiências digitais modernas e impactantes com foco em design e performance.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 text-gray-300 transition-colors bg-dark rounded-lg hover:text-primary hover:bg-primary/10"
                  aria-label={social.name}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links úteis */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Links Úteis</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 transition-colors hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                eliseugermano@hotmail.com
              </li>
              <li className="flex items-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Uberlândia Minas Gerais, Brasil
              </li>
            </ul>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="my-8 border-t border-gray-800"></div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-gray-400">
            © {currentYear} Eliseu Germano De Oliveira. Todos os direitos reservados.
          </p>
          <p className="text-gray-400">
            Desenvolvido com <span className="text-primary">❤</span> usando React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
