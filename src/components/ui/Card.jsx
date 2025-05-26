// Componente de card reutilizável com animação
import { motion } from 'framer-motion';

// Props:
// - title: título do card
// - children: conteúdo do card
// - className: classes adicionais
// - ...props: outros props

const Card = ({ 
  title, 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <motion.div 
      className={`bg-dark-light rounded-xl overflow-hidden transition-all duration-300 ${className}`}
      whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
      {...props}
    >
      {title && (
        <div className="p-4 border-b border-gray-800">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
};

export default Card;
