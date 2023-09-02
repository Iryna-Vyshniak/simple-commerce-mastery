import Button from '../components/Button';
import Container from '../components/Container';
import Image from '../components/Image';

const shoe8 =
  'https://res.cloudinary.com/dkqxaid79/image/upload/v1693662702/nike/pngwing.com_12_p2ou9y.png';

const SuperQuality = () => {
  return (
    <Container className="flex justify-between items-center max-lg:flex-col gap-10 w-full">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to
          elevate your experience, providing you with unmatched quality, innovation, and a touch of
          elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </Container>
  );
};

export default SuperQuality;
