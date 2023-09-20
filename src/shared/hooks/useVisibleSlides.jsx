import { useState, useEffect } from 'react';

export const useVisibleSlides = () => {
  const [visibleSlides, setVisibleSlides] = useState(1);

  const updateVisibleSlides = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 1200) {
      setVisibleSlides(4);
    } else if (screenWidth >= 960) {
      setVisibleSlides(3);
    } else if (screenWidth >= 480) {
      setVisibleSlides(2);
    } else {
      setVisibleSlides(1);
    }
  };

  useEffect(() => {
    updateVisibleSlides();
    window.addEventListener('resize', updateVisibleSlides);
    return () => {
      window.removeEventListener('resize', updateVisibleSlides);
    };
  }, []);

  return visibleSlides;
};
