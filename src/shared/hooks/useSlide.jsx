import { useState } from 'react';

export const useSlide = (initialIndex, slideCount, visibleSlides) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === 0) {
        return slideCount - visibleSlides;
      } else {
        return prevIndex - 1;
      }
    });
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => {
      if (prevIndex === slideCount - visibleSlides) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex);
  };

  return {
    currentIndex,
    prevSlide,
    nextSlide,
    goToSlide
  };
};
