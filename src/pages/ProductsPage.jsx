import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { selectFilter, selectProducts } from '../redux/products/products-selectors';
import PopularProductCard from '../components/Product/PopularProductCard';
import Container from '../components/Container';
import Loader from '../components/Loader';
import { resetFilter } from '../redux/products/products-slice';
import Button from '../components/Button/Button';
import SizesBlock from '../components/Product/SizesBlock';
import { uniqueValues } from '../shared/utils';

const ProductsPage = () => {
  const products = useSelector(selectProducts);

  const sizes = uniqueValues(products, 'size');

  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredList = products.filter(
    ({ color, size }) =>
      (color.includes(filter?.color) && !filter.size) ||
      (size.includes(filter?.size) && !filter.color) ||
      (color.includes(filter?.color) && size.includes(filter?.size))
  );

  if (!products) {
    return <Loader />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!filteredList.length) {
      dispatch(resetFilter());
    }
  }, [dispatch, filteredList.length]);

  const handleResetFilter = () => {
    dispatch(resetFilter());
  };

  return (
    <section>
      <Container className="max-container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>
        <Button
          onClick={handleResetFilter}
          label="All products"
          type="submit"
          className="mb-4 w-[140px] h-9 px-6 text-sm rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
        />
        <SizesBlock products={products} activeSizes={sizes} />
        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredList.length > 0
            ? filteredList.map(({ _id, imgURL, name, price, rating, color, category, size }) => (
                <PopularProductCard
                  key={_id}
                  _id={_id}
                  imgURL={imgURL}
                  name={name}
                  price={price}
                  rating={rating}
                  color={color}
                  category={category}
                  currentSize={filter.size}
                  size={size}
                />
              ))
            : products.map(({ _id, imgURL, name, price, rating, color, category, size }) => (
                <PopularProductCard
                  key={_id}
                  _id={_id}
                  imgURL={imgURL}
                  name={name}
                  price={price}
                  rating={rating}
                  color={color}
                  category={category}
                  size={size}
                />
              ))}
          {}
        </ul>
      </Container>
    </section>
  );
};

export default ProductsPage;
