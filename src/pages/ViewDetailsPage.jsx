import { useEffect } from 'react';

import ButtonGroup from '../components/ButtonGroup';
import Container from '../components/Container';
import MainTitle from '../components/MainTitle';
import Price from '../components/Price';
import ThumbImage from '../components/ThumbImage';
import Views from '../components/Views';

const ViewDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0, { smooth: true });
  }, []);

  return (
    <Container>
      <article className="-mt-10">
        <div className="lg:grid lg:grid-cols-2 grid items-center justify-center gap-4 padding bg-primary">
          <MainTitle>
            We Provide You <span className="text-deep-red">Super Quality</span> Shoes
          </MainTitle>
          <ThumbImage
            src="https://res.cloudinary.com/dkqxaid79/image/upload/v1693662702/nike/pngwing.com_12_p2ou9y.png"
            alt="Sport shoes"
          />
        </div>

        <div className="padding">
          <div className="flex flex-wrap w-full">
            <div className="flex items-center justify-between w-full">
              <Price amount="$110.00" className="text-lg font-semibold text-slate-500" />
              <p className="text-sm font-medium text-slate-700 mt-2">In stock</p>
            </div>
          </div>
          <Views />
          <ButtonGroup />
          <p className="text-sm text-slate-700">Free shipping on all continental US orders.</p>
        </div>
      </article>
    </Container>
  );
};

export default ViewDetailsPage;
