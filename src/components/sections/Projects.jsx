import { motion } from 'framer-motion';

const Projects = () => {
  // Dados dos projetos (simulados)
  const projects = [
    {
      id: 1,
      title: 'E-commerce Moderno',
      description: 'Plataforma de e-commerce com design responsivo e experiência de usuário otimizada.',
      image: 'ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      repoUrl: 'https://github.com/username/ecommerce',
      demoUrl: 'https://ecommerce-demo.com'
    },
    {
      id: 2,
      title: 'App de Gestão Financeira',
      description: 'Aplicativo para controle de finanças pessoais com visualização de dados e relatórios.',
      image: 'finance-app.jpg',
      technologies: ['React Native', 'Firebase', 'Chart.js'],
      repoUrl: 'https://github.com/username/finance-app',
      demoUrl: 'https://finance-app-demo.com'
    },
    {
      id: 3,
      title: 'Rede Social para Devs',
      description: 'Plataforma para desenvolvedores compartilharem projetos e conectarem-se.',
      image: 'dev-social.jpg',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      repoUrl: 'https://github.com/username/dev-social',
      demoUrl: 'https://dev-social-demo.com'
    },
    {
      id: 4,
      title: 'Dashboard Analítico',
      description: 'Dashboard interativo para visualização de métricas e KPIs empresariais.',
      image: 'dashboard.jpg',
      technologies: ['React', 'D3.js', 'Material UI'],
      repoUrl: 'https://github.com/username/dashboard',
      demoUrl: 'https://dashboard-demo.com'
    },
    {
      id: 5,
      title: 'App de Produtividade',
      description: 'Aplicativo para gerenciamento de tarefas e aumento de produtividade.',
      image: 'productivity.jpg',
      technologies: ['React', 'Redux', 'Firebase'],
      repoUrl: 'https://github.com/username/productivity',
      demoUrl: 'https://productivity-demo.com'
    },
  {
  id: 6,
  title: 'Site de Portfólio',
  description: 'Site de portfólio moderno com animações e design responsivo.',
  image: '/portfolio.png', // Caminho relativo à pasta public
  technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
  repoUrl: 'https://github.com/Eliseu-Oliveira/Portfolio-2025.git',
  demoUrl: 'https://eliseugermano.netlify.app'
  }
  ];

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="container px-4 mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Meus <span className="text-primary">Projetos</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 mx-auto bg-primary"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto mt-4 text-gray-300"
            variants={itemVariants}
          >
            Confira alguns dos meus trabalhos mais recentes e relevantes.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="card group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Imagem do projeto */}
              <div className="relative overflow-hidden aspect-video">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60"></div>
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">{project.title}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 bg-primary/20 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex space-x-4">
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-white bg-primary rounded-full hover:bg-primary-dark transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </a>
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 text-white bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
