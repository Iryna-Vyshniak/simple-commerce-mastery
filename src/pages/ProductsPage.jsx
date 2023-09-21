import { useSelector } from 'react-redux';

import { selectProducts } from '../redux/products/products-selectors';
import PopularProductCard from '../components/Product/PopularProductCard';
import Container from '../components/Container';

const ProductsPage = () => {
  const products = useSelector(selectProducts);
  return (
    <section>
      <Container className="max-container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map(({ _id, imgURL, name, price, rating, color, category }) => (
            <PopularProductCard
              key={_id}
              _id={_id}
              imgURL={imgURL}
              name={name}
              price={price}
              rating={rating}
              color={color}
              category={category}
            />
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProductsPage;
