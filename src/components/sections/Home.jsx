import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  // Estado para controlar a visibilidade dos elementos
  const [isVisible, setIsVisible] = useState(false);

  // Efeito para ativar animações após carregamento
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Variantes de animação para elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Background com gradiente estilizado */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark to-dark-light z-0">
        {/* Elementos decorativos de fundo */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      {/* Conteúdo principal */}
      <motion.div 
        className="container relative z-10 px-4 py-20 mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {/* Subtítulo */}
        <motion.p 
          className="mb-4 text-xl font-medium text-primary"
          variants={itemVariants}
        >
          Bem-vindo ao meu portfólio
        </motion.p>

        {/* Título principal com animação */}
        <motion.h1 
          className="mb-6 text-4xl font-bold md:text-6xl"
          variants={itemVariants}
        >
          Olá, eu sou{" "}
          <span className="text-primary">
            <TypeAnimation
              sequence={[
                'Desenvolvedor',
                2000,
                'Designer',
                2000,
                'Criativo',
                2000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </span>
        </motion.h1>

        {/* Descrição */}
        <motion.p 
          className="max-w-2xl mx-auto mb-10 text-lg text-gray-300"
          variants={itemVariants}
        >
          Criando experiências digitais modernas e impactantes com foco em design e performance.
        </motion.p>

        {/* Botões de ação */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4"
          variants={itemVariants}
        >
          <a href="/projects" className="btn btn-primary">
            Ver Projetos
          </a>
          <a href="/contact" className="btn border border-gray-600 hover:border-primary hover:text-primary">
            Contato
          </a>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm text-gray-400">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full">
            <div className="w-1.5 h-1.5 mx-auto mt-2 bg-primary rounded-full animate-bounce"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
