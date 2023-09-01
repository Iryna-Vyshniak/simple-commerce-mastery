import { useState } from 'react';

import Container from '../components/Container';
import { bigShoe1 } from '../assets/images';
import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import MainTitle from '../components/MainTitle';
import Statistics from '../components/Statistics';
import Image from '../components/Image';
import { shoes } from '../constants';
import ShoeCard from '../components/ShoeCard';

const Hero = () => {
  const [posterShoe, setPosterShoe] = useState(bigShoe1);

  return (
    <Container className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10">
      <div className=" xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-deep-red">Our Autumn collections</p>
        <MainTitle>
          <span className="relative z-10 xl:whitespace-nowrap pr-10">Welcome to</span>
          <br />
          <span className="text-deep-red inline-block mt-3">NIKE,</span> inc.
        </MainTitle>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <Statistics />
        <video
          src="https://res.cloudinary.com/dkqxaid79/video/upload/v1693431501/nike/pexels-anna-shvets-5469607_1080p_jiplnu.mp4"
          autoPlay={true}
          loop={true}
          muted
        ></video>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center shadow-xl">
        <Image
          src={posterShoe}
          alt="shoe collection"
          width={610}
          height={502}
          className="object-contain relative z-10"
        />

        <div className="absolute -bottom-[5%] sm:left-[10%] flex sm:gap-6 gap-4  max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={shoe => setPosterShoe(shoe)}
                bigShoeImg={posterShoe}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
