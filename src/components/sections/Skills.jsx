import { motion } from 'framer-motion';

const Skills = () => {
  // Lista de habilidades com níveis
  const skills = [
    { name: 'React', level: 90, icon: 'react.svg' },
    { name: 'JavaScript', level: 95, icon: 'javascript.svg' },
    { name: 'Tailwind CSS', level: 85, icon: 'tailwind.svg' },
    { name: 'Node.js', level: 90, icon: 'nodejs.svg' },
    { name: 'Figma', level: 70, icon: 'figma.svg' },
    { name: 'TypeScript', level: 85, icon: 'typescript.svg' },
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
    <section id="skills" className="py-20 bg-dark-light">
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
            Minhas <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div 
            className="w-20 h-1 mx-auto bg-primary"
            variants={itemVariants}
          ></motion.div>
          <motion.p 
            className="max-w-2xl mx-auto mt-4 text-gray-300"
            variants={itemVariants}
          >
            Tecnologias e ferramentas com as quais trabalho.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              className="p-6 bg-dark rounded-xl"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-4">
                {/* Placeholder para ícone */}
                <div className="flex items-center justify-center w-12 h-12 mr-4 text-primary bg-primary/10 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              
              {/* Barra de progresso */}
              <div className="progress-bar">
                <motion.div 
                  className="progress-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                ></motion.div>
              </div>
              <div className="flex justify-end mt-2">
                <span className="text-sm text-gray-400">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
