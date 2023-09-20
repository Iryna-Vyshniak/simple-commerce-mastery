import { useEffect } from 'react';

import { useSearchParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Container from '../components/Container';

import Title from '../components/Title/Title';
import { selectError, selectIsLoading, selectProducts } from '../redux/products/products-selectors';
import { getAllShoes } from '../redux/products/products-operations';
import Slider from '../components/Slider/Slider';

const PopularProducts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const page = Number(searchParams.get('page') || 1);

  useEffect(() => {
    dispatch(getAllShoes(page));
  }, [dispatch, page]);

  if (!products) {
    return <p>...Loading</p>;
  }

  return (
    <Container className="max-sm:mt-12">
      {isLoading && <p>...Loading</p>}
      {error && <p>Oops, mistake... Please try again</p>}
      <div className="flex flex-col justify-start gap-5">
        <Title>
          Our <span className="text-deep-red"> Popular </span> Products
        </Title>
        <p className="lg:max-w-lg mt-2 info-text text-slate-gray">
          Experience top-notch quality and style with our sought-after selections. Discover a world
          of comfort, design, and value
        </p>
      </div>
      <Slider products={products} />
    </Container>
  );
};

export default PopularProducts;
