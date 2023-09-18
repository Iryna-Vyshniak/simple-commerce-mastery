import { arrowRight } from '../assets/icons';
import { offer } from '../assets/images';
import Button from '../components/Button';
import Container from '../components/Container';
import Title from '../components/Title';
import { offers } from '../shared/constants';

const SpecialOffers = () => {
  return (
    <Container className="flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div className="relative flex-1">
        <img
          src={offer}
          alt="Shoe Promotion"
          width={400}
          className="absolute top-[-7rem] md:top-[-10rem] left-0 md:left-[-15rem] z-[3] w-[200px] md:w-[400px]"
        />
        <img
          className="w-auto h-auto -rotate-[30deg] hover:rotate-0 transition duration-300 ease-in-out object-fill"
          src={offers}
          alt="nike sport shoe"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <Title>
          <span className="text-coral-red">Special </span>
          Offer
        </Title>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From
          premier selections to incredible savings, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the
          loftiest expectations. Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
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
