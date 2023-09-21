import { useState } from 'react';

import { useSelector } from 'react-redux';

import Container from '../components/Container';
import { arrowRight } from '../assets/icons';
import Button from '../components/Button/Button';
import MainTitle from '../components/Title/MainTitle';
import Statistics from '../components/Statistics';
import Image from '../components/Image/Image';
import { selectProducts } from '../redux/products/products-selectors';
import Slider from '../components/Slider/Slider';

const Hero = () => {
  const products = useSelector(selectProducts);

  const [posterShoe, setPosterShoe] = useState(products[0].popular.bigShoe);

  return (
    <Container className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 -mt-10">
      <div className=" xl:w-2/5 flex flex-col justify-center items-start w-full pt-28">
        <p className="text-xl font-montserrat text-deep-red">Our Autumn collections</p>
        <MainTitle>
          <span className="relative z-10 xl:whitespace-nowrap pr-10 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]">
            Welcome to
          </span>
          <br />
          <span className="text-deep-red inline-block mt-3 drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]">
            NIKE,
          </span>{' '}
          inc.
        </MainTitle>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm dark:text-slate-300">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <Statistics />
        <video
          src="https://res.cloudinary.com/dkqxaid79/video/upload/v1693431501/nike/pexels-anna-shvets-5469607_1080p_jiplnu.mp4"
          // src="https://static.nike.com/a/videos/q_90/c0b4d254-27d4-4013-ab26-673c9584fd01/video.mp4"
          autoPlay={true}
          loop={true}
          muted
        ></video>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary dark:bg-slate-400 bg-hero bg-cover bg-center shadow-xl">
        <Image
          src={posterShoe}
          alt="shoe collection"
          width={710}
          className="object-cover relative z-10 -rotate-[30deg] hover:rotate-0 transition duration-300 ease-in-out"
        />
        <div className="absolute -bottom-[5%] sm:right-[10%] flex sm:gap-6 gap-4  max-sm:px-6">
          <Slider shoes={products} posterShoe={posterShoe} setPosterShoe={setPosterShoe} />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
