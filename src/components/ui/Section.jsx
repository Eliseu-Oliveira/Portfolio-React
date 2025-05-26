// Componente de seção reutilizável com animação
import { motion } from 'framer-motion';

// Props:
// - title: título da seção
// - subtitle: subtítulo opcional
// - children: conteúdo da seção
// - className: classes adicionais
// - id: id da seção para navegação
// - ...props: outros props

const Section = ({ 
  title, 
  subtitle,
  children, 
  className = '',
  id,
  ...props 
}) => {
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
    <section id={id} className={`py-20 ${className}`} {...props}>
      <div className="container px-4 mx-auto">
        {title && (
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
              {title.split(' ').map((word, index, array) => 
                index === array.length - 1 ? 
                <span key={index}><span className="text-primary">{word}</span></span> : 
                <span key={index}>{word} </span>
              )}
            </motion.h2>
            <motion.div 
              className="w-20 h-1 mx-auto bg-primary"
              variants={itemVariants}
            ></motion.div>
            {subtitle && (
              <motion.p 
                className="max-w-2xl mx-auto mt-4 text-gray-300"
                variants={itemVariants}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
