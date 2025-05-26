// Componente de animação de texto com digitação automática
import { useEffect, useState } from 'react';

// Props:
// - text: texto a ser animado
// - speed: velocidade da digitação (ms)
// - delay: atraso inicial (ms)
// - className: classes adicionais
// - ...props: outros props

const TypeWriter = ({ 
  text = '', 
  speed = 100, 
  delay = 0,
  className = '',
  ...props 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timer;
    
    // Atraso inicial
    if (delay > 0 && currentIndex === 0 && displayText === '') {
      timer = setTimeout(() => {
        setCurrentIndex(0);
      }, delay);
      return () => clearTimeout(timer);
    }

    // Processo de digitação
    if (!isWaiting) {
      if (!isDeleting && currentIndex <= text.length) {
        timer = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex));
          setCurrentIndex(prevIndex => prevIndex + 1);
          
          // Se chegou ao final do texto, aguarda antes de começar a apagar
          if (currentIndex === text.length) {
            setIsWaiting(true);
            setTimeout(() => {
              setIsWaiting(false);
              setIsDeleting(true);
            }, 2000);
          }
        }, speed);
      } else if (isDeleting && currentIndex >= 0) {
        timer = setTimeout(() => {
          setDisplayText(text.substring(0, currentIndex));
          setCurrentIndex(prevIndex => prevIndex - 1);
          
          // Se apagou todo o texto, reinicia o processo
          if (currentIndex === 0) {
            setIsDeleting(false);
          }
        }, speed / 2);
      }
    }

    return () => clearTimeout(timer);
  }, [currentIndex, delay, displayText, isDeleting, isWaiting, speed, text]);

  return (
    <span className={className} {...props}>
      {displayText}
      <span className="inline-block w-0.5 h-5 ml-1 bg-primary animate-blink"></span>
    </span>
  );
};

export default TypeWriter;
