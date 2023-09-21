import { Link } from 'react-router-dom';

import Button from '../components/Button/Button';
import Container from '../components/Container';
import Image from '../components/Image/Image';
import { viewsShoes } from '../shared/constants';
import Title from '../components/Title/Title';

const SuperQuality = () => {
  return (
    <Container className="flex justify-between items-center max-lg:flex-col gap-10 w-full">
      <div className="flex flex-1 flex-col">
        <Title className="capitalize  dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-r dark:from-slate-300 dark:via-slate-100 dark:to-slate-50">
          We Provide You Super Quality Shoes
        </Title>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear is designed to
          elevate your experience, providing you with unmatched quality, innovation, and a touch of
          elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <Link to="/view" className="mt-11">
          <Button label="View details" />
        </Link>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <Image src={viewsShoes} alt="product detail" width={570} height={522} />
      </div>
    </Container>
  );
};

export default SuperQuality;
