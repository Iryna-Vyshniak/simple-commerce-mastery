import { useSlide, useVisibleSlides } from '../../shared/hooks';

import PopularProductCard from '../Product/PopularProductCard';

import Button from '../Button/Button';

import ShoeCard from '../Product/ShoeCard';
import ReviewCard from '../Review/ReviewCard';

const Slider = ({ products, shoes, posterShoe, setPosterShoe, reviews }) => {
  const slideCount = products ? products?.length : shoes?.length || reviews?.length;
  const screenWidth = window.innerWidth;

  const visibleSlides = useVisibleSlides();
  const { currentIndex, prevSlide, nextSlide, goToSlide } = useSlide(0, slideCount, visibleSlides);

  return (
    <article className="relative flex justify-center items-center max-w-screen-[1440px]">
      <section className="flex">
        {(products?.length > 0 || shoes?.length > 0 || reviews?.length > 0) && (
          <>
            <div className="flex items-center justify-center touch-auto gap-x-4 transition duration-550 ease-linear">
              <Button
                type="button"
                label="&lt;"
                onClick={prevSlide}
                className="absolute left-0 flex aspect-square w-8 -translate-x-1/2 cursor-pointer items-center justify-center self-center rounded-full bg-neutral-100 text-slate-900 transition hover:bg-slate-300 hover:text-white"
              />
              <ul className="flex items-center justify-center touch-auto gap-x-4 transition duration-550 ease-linear">
                {products &&
                  products
                    .slice(currentIndex, currentIndex + visibleSlides)
                    .map(({ _id, imgURL, name, price, rating }, index) => (
                      <PopularProductCard
                        key={_id}
                        _id={_id}
                        imgURL={imgURL}
                        name={name}
                        price={price}
                        rating={rating}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                {shoes &&
                  shoes
                    .slice(currentIndex, currentIndex + (screenWidth >= 960 ? 3 : 1))
                    .map(({ _id, popular }, index) => (
                      <ShoeCard
                        key={_id}
                        index={index}
                        imgURL={popular}
                        changeBigShoeImage={shoe => setPosterShoe(shoe)}
                        bigShoeImg={posterShoe}
                        divClassName="object-cover"
                      />
                    ))}
                {reviews &&
                  reviews
                    .slice(currentIndex, currentIndex + (screenWidth >= 960 ? 3 : 1))
                    .map(({ _id, avatarURL, name, rating, feedback }, index) => (
                      <ReviewCard
                        key={_id}
                        index={index}
                        avatarURL={avatarURL}
                        name={name}
                        rating={rating}
                        feedback={feedback}
                      />
                    ))}
              </ul>

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
