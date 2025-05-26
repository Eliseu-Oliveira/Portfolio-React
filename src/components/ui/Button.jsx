// Componente de botão reutilizável com animação
import { motion } from 'framer-motion';

// Props:
// - variant: 'primary' | 'secondary' | 'outline'
// - size: 'sm' | 'md' | 'lg'
// - children: conteúdo do botão
// - ...props: outros props como onClick, className, etc.

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  ...props 
}) => {
  // Classes base
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300";
  
  // Classes de variante
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white",
    secondary: "bg-dark-light hover:bg-gray-700 text-white",
    outline: "border border-gray-600 hover:border-primary hover:text-primary bg-transparent"
  };
  
  // Classes de tamanho
  const sizeClasses = {
    sm: "text-sm px-4 py-2",
    md: "px-6 py-3",
    lg: "text-lg px-8 py-4"
  };
  
  // Combinando todas as classes
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${props.className || ''}`;
  
  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
