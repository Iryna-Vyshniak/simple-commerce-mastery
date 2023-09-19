import { useEffect } from 'react';

import ButtonGroup from '../components/ButtonGroup';
import Container from '../components/Container';
import MainTitle from '../components/MainTitle';
import Price from '../components/Price';
import ThumbImage from '../components/ThumbImage';
import Views from '../components/Views';
import { viewsShoes } from '../shared/constants';

const ViewDetailsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0, { smooth: true });
  }, []);

  return (
    <Container>
      <article className="-mt-10">
        <div className="lg:grid lg:grid-cols-2 grid items-center justify-center gap-4 padding  px-4 pt-16 shadow-2xl bg-primary bg-gradient-to-b from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500">
          <MainTitle className="text-5xl">
            We Provide You <span className="text-deep-red">Super Quality</span> Shoes
          </MainTitle>
          <ThumbImage src={viewsShoes} alt="Sport shoes" />
        </div>

        <div className="padding">
          <div className="flex flex-wrap w-full">
            <div className="flex items-center justify-between w-full">
              <Price
                amount="149.90"
                className="text-lg font-semibold text-slate-500 dark:text-slate-400"
              />
              <p className="text-sm font-medium text-slate-700 dark:text-slate-400 mt-2">
                In stock
              </p>
            </div>
          </div>
          <Views />
          <ButtonGroup />
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Free shipping on all continental US orders.
          </p>
        </div>
      </article>
    </Container>
  );
};

export default ViewDetailsPage;
