import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { selectById, selectFilter, selectProducts } from '../redux/products/products-selectors';
import { getById } from '../redux/products/products-operations';
import BackLink from '../components/BackLink';
import Container from '../components/Container';
import ShoeCard from '../components/Product/ShoeCard';
import ThumbImage from '../components/Image/ThumbImage';
import MainTitle from '../components/Title/MainTitle';
import Price from '../components/Price';
import ViewsCount from '../components/Product/ViewsCount';
import Category from '../components/Product/Category';

import Wrapper from '../components/Wrapper';

import ButtonGroup from '../components/Button/ButtonGroup';
import { addToCart, setOpenCart } from '../redux/cart/cart-slice';
import BriefIntro from '../components/Product/BriefIntro';
import TextBlock from '../components/TextBlock';
import Description from '../components/Product/Description';

import Form from '../components/Product/Form';
import Loader from '../components/Loader';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const filter = useSelector(selectFilter);
  const details = useSelector(selectById);

  const detailsCard = { ...details, currentSize: filter.size };

  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  const [posterShoe, setPosterShoe] = useState(details?.imgURL);

  const addProductToCart = () => {
    if (!filter.size) {
      toast.warn('Please, check size');
      return;
    }
    dispatch(addToCart(detailsCard));
    toast.success('Add shoes to cart');
  };

  const handleBuyProduct = () => {
    if (!filter.size) {
      toast.warn('Please, check size');
      return;
    }
    dispatch(addToCart(detailsCard));
    dispatch(setOpenCart(true));
    toast.success('Add shoes to cart');
  };

  useEffect(() => {
    dispatch(getById(id));
  }, [id, dispatch]);

  useEffect(() => {
    setPosterShoe(details?.imgURL);
  }, [details?.imgURL]);

  if (!details || !details._id) {
    return <Loader />;
  }

  return (
    <section className="max-container padding">
      <BackLink to={backLinkHref}>Back</BackLink>
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 mb-6">
          <div className="relative flex flex-col gap-y-4 flex-1 w-full">
            <div className="flex flex-col gap-y-4 p-2 border border-white shadow-lg rounded-2xl">
              <ThumbImage
                src={posterShoe}
                alt={details.name}
                height={'640'}
                width={'640'}
                className="max-w-full h-[640px] w-[640px] object-center object-cover rounded-2xl"
              />
              <ul className="grid grid-cols-3 place-content-center place-items-center gap-4">
                {details.gallery.map((item, idx) => (
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
          <div className="flex flex-col gap-y-8 flex-1 bg-primary bg-gradient-to-r from-white to-white/5 dark:bg-transparent  dark:from-transparent dark:to-transparent dark:shadow-slate-400 bg-blend-lighten w-full lg:padding-l">
            <MainTitle className="mb-2 text-3xl text-deep-red drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]">
              {details?.name}
            </MainTitle>
            <TextBlock text={details?.promo} />
            <Wrapper>
              <Category
                category={details?.category}
                className="ring-slate-100 ring-2 w-max py-2 px-4 shadow-lg rounded-md info-text"
                classWrapper="justify-start items-center gap-x-2 gap-y-2"
              />
              <Price
                amount={details?.price}
                className="ring-slate-100 ring-2 w-max py-1 px-4 shadow-lg rounded-md font-montserrat text-slate-600 leading-7 text-[12px] dark:text-slate-300 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]"
              />
              <ViewsCount count={details?.viewsCount} />
            </Wrapper>
            <Wrapper>
              <Form products={products} activeColors={details?.color} activeSizes={details?.size} />
            </Wrapper>
            <Description text={details?.description} />

            <ButtonGroup
              id={details?._id}
              addProductToCart={addProductToCart}
              handleBuyProduct={handleBuyProduct}
            />
          </div>
        </div>

        <BriefIntro />
      </Container>
    </section>
  );
};

export default DetailsPage;
