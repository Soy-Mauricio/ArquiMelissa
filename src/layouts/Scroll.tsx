import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  useEffect(() => {
    window.scrollTo(0, 0); // Hace scroll al inicio de la página
  }, [location]); // Se activa cada vez que la ubicación cambia

  return null;
};

export default ScrollToTop;