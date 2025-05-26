// Hook personalizado para animações de scroll
import { useEffect, useState } from 'react';

// Hook para detectar quando um elemento está visível no viewport
export const useInView = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isInView];
};

// Hook para animações baseadas em scroll
export const useScrollAnimation = (initialValue = {}, finalValue = {}, options = {}) => {
  const [ref, isInView] = useInView(options);
  const [style, setStyle] = useState(initialValue);

  useEffect(() => {
    if (isInView) {
      setStyle(finalValue);
    } else if (!options.once) {
      setStyle(initialValue);
    }
  }, [isInView, initialValue, finalValue, options.once]);

  return [ref, style];
};

// Hook para detectar tamanho da tela (responsividade)
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

// Hook para animação de fade-in
export const useFadeIn = (delay = 0, duration = 0.5) => {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration, ease: 'easeOut' }
  };
};

// Hook para animação de hover
export const useHoverAnimation = () => {
  return {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 }
  };
};
