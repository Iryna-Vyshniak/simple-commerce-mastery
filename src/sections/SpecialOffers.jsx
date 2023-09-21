import { Link, useLocation } from 'react-router-dom';

import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button/Button';
import Container from '../components/Container';
import ThumbImage from '../components/Image/ThumbImage';
import Title from '../components/Title/Title';
import { offers } from '../shared/data';

const SpecialOffers = () => {
  const location = useLocation();
  return (
    <Container className="flex flex-col md:flex-row justify-between items-center max-xl:flex-col-reverse gap-10">
      <div className="relative flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={400}
          className="absolute top-[-7rem] md:top-[-10rem] left-[-10rem] md:left-[-15rem] z-[3] w-[200px] md:w-[400px]"
        />
        <div className="h-[420px] grid grid-rows-2 mob:grid-rows-3 grid-flow-col gap-2">
          {offers.map(({ url, id, alt }, idx) => (
            <ThumbImage
              key={id}
              src={url}
              alt={alt}
              className="object-contain h-full w-full"
              classDiv={`flex justify-center items-center ${
                idx === 0 ? 'row-span-1 mob:row-span-3' : 'row-span-1'
              } object-cover bg-primary bg-gradient-to-r from-white to-white/5 dark:shadow-slate-400 dark:bg-slate-500 rounded-2xl`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-1 flex-col">
        <Title>
          <span className="text-deep-red">Special </span>
          Offer
        </Title>
        <p className="mt-4 info-text dark:text-slate-300">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From
          premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text dark:text-slate-300">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link to="/list" state={{ from: location }}>
            <Button label="Shop now" iconURL={arrowRight} />
          </Link>
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </Container>
  );
};

export default SpecialOffers;
