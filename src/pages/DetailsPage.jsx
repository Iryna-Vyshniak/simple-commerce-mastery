import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { selectById } from '../redux/products/products-selectors';
import { getById } from '../redux/products/products-operations';
import BackLink from '../components/BackLink';
import Container from '../components/Container';
import ShoeCard from '../components/Product/ShoeCard';
import ThumbImage from '../components/Image/ThumbImage';
import MainTitle from '../components/Title/MainTitle';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectById);
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [posterShoe, setPosterShoe] = useState(details?.imgURL);

  useEffect(() => {
    dispatch(getById(id));
  }, [id, dispatch]);

  useEffect(() => {
    setPosterShoe(details?.imgURL);
  }, [details?.imgURL]);

  return (
    <section className="max-container padding">
      <BackLink to={backLinkHref}>Back</BackLink>
      <Container className="grid lg:grid-cols-2 grid-cols-1 gap-10">
        <div className="relative flex flex-col gap-y-4 flex-1 w-full h-screen">
          <div className="flex flex-col gap-y-4 p-2 border border-white shadow-lg rounded-2xl">
            <ThumbImage
              src={posterShoe}
              alt={details?.name}
              height={'640'}
              width={'640'}
              className="max-w-full h-[640px] w-[640px] object-center object-cover rounded-2xl"
            />
            <ul className="grid grid-cols-3 place-content-center place-items-center gap-4">
              {details?.gallery?.map((item, idx) => (
                <ShoeCard
                  key={idx}
                  index={idx}
                  height="138"
                  width="130"
                  imgURL={item}
                  changeBigShoeImage={shoe => setPosterShoe(shoe)}
                  bigShoeImg={posterShoe}
                  className={'max-w-full h-[138px] w-[130px] object-cover object-center'}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-y-8 flex-1 bg-primary bg-gradient-to-r from-white to-white/5 dark:bg-transparent  dark:from-transparent dark:to-transparent dark:shadow-slate-400 bg-blend-lighten w-full h-screen lg:padding-l">
          <MainTitle className="text-3xl text-deep-red">{details?.name}</MainTitle>
        </div>
      </Container>
    </section>
  );
};

export default DetailsPage;
