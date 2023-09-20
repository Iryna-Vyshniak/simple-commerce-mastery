import { useSelector } from 'react-redux';

import { selectIsLoading, selectProducts } from '../../redux/products/products-selectors';

import { useSlide, useVisibleSlides } from '../../shared/hooks';

import PopularProductCard from '../Product/PopularProductCard';

import Button from '../Button/Button';

import ImageSkeleton from './ImageSceleton';

const Slider = () => {
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const slideCount = products.length;
  const visibleSlides = useVisibleSlides();
  const { currentIndex, prevSlide, nextSlide, goToSlide } = useSlide(0, slideCount, visibleSlides);

  return (
    <article className="relative flex justify-center items-center max-w-screen-[1440px]">
      <section className="flex">
        {products.length > 0 && (
          <>
            <div className="flex items-center justify-center touch-auto gap-x-4 transition duration-550 ease-linear">
              <Button
                type="button"
                label="&lt;"
                onClick={prevSlide}
                className="absolute left-0 flex aspect-square w-8 -translate-x-1/2 cursor-pointer items-center justify-center self-center rounded-full bg-neutral-100 text-slate-900 transition hover:bg-slate-300 hover:text-white"
              />
              {isLoading && <ImageSkeleton />}
              {products
                .slice(currentIndex, currentIndex + visibleSlides)
                .map(({ _id, imgURL, name, price }, index) => (
                  <PopularProductCard
                    key={_id}
                    _id={_id}
                    imgURL={imgURL}
                    name={name}
                    price={price}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              <Button
                type="button"
                onClick={nextSlide}
                label="&gt;"
                className="absolute right-0 flex aspect-square w-8 translate-x-1/2 cursor-pointer items-center justify-center self-center rounded-full bg-neutral-100 dark:bg-slate-400 text-slate-900 transition hover:bg-slate-300 hover:text-white"
              />
            </div>
          </>
        )}
      </section>
    </article>
  );
};

export default Slider;
