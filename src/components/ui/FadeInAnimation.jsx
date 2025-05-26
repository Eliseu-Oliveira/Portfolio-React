// Componente de animação para elementos que aparecem ao rolar a página
import { motion } from 'framer-motion';

// Props:
// - children: conteúdo a ser animado
// - direction: direção da animação ('up', 'down', 'left', 'right')
// - delay: atraso da animação (segundos)
// - duration: duração da animação (segundos)
// - className: classes adicionais
// - ...props: outros props

const FadeInAnimation = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  ...props
}) => {
  // Configurações de direção
  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 }
  };

  // Variantes de animação
  const variants = {
    hidden: {
      opacity: 0,
      ...directions[direction]
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
