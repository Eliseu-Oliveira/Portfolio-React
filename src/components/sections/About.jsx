import { motion } from 'framer-motion';

const About = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-20 bg-dark">
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
            Sobre <span className="text-primary">Mim</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 mx-auto bg-primary"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div 
          className="flex flex-col items-center gap-10 md:flex-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Coluna da imagem */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <div className="relative mx-auto overflow-hidden rounded-lg max-w-md">
              {/* Placeholder para a imagem do perfil */}
              <div className="relative z-10 aspect-[4/5] bg-dark-light rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-400">Imagem de Perfil</span>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </motion.div>

          {/* Coluna do texto */}
          <motion.div 
            className="w-full md:w-1/2"
            variants={itemVariants}
          >
            <h3 className="mb-4 text-2xl font-bold">Desenvolvedor Web & Designer</h3>
            <p className="mb-6 text-gray-300">
               Sou desenvolvedor front-end com mais de 6 anos de experiência na
          criação de soluções inovadoras utilizando tecnologias como ReactJS,
          Vue, Angular, Node.js, Lua, React Native, entre outras
            </p>
            <p className="mb-6 text-gray-300">
Atualmente,
          trabalho na Caval™ ITxp, onde sou responsável por contribuir em
          projetos de grande escala, desenvolvendo interfaces dinâmicas e
          otimizadas com foco em performance e usabilidade.Também possuo
          experiência sólida em integração de APIs, testes unitários e
          desenvolvimento mobile.
            </p>
            <p className="mb-6 text-gray-300">
 Além disso, sou desenvolvedor de software na
          FiveM Mods, uma empresa internacional, onde atuo no desenvolvimento de
          soluções personalizadas para otimizar mods, trabalhando remotamente e
          colaborando com equipes de diferentes partes do mundo.
            </p>
            <p className="mb-6 text-gray-300">
Com formação
          prevista para iniciar o Bacharelado em Sistema de Informação em 2025,
          e uma carreira voltada para o aprimoramento contínuo, tenho o
          compromisso de buscar sempre as melhores soluções tecnológicas para
          agregar valor aos projetos em que estou envolvido.
            </p>
            
            {/* Informações pessoais */}
            <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2">
              <div>
                <span className="font-semibold text-primary">Nome:</span> Eliseu Germano De Oliveira
              </div>
              <div>
                <span className="font-semibold text-primary">Email:</span> eliseugermano@hotmail.com
              </div>
              <div>
                <span className="font-semibold text-primary">Localização:</span>Uberlândia Minas Gerais, Brasil
              </div>
              <div>
                <span className="font-semibold text-primary">Disponível:</span> Para trabalho
              </div>
            </div>
            
            {/* Botão de download do CV */}
            <a 
              href="/cv.pdf" 
              download 
              className="btn btn-primary inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
