import Container from '../components/Container';
import PopularProductCard from '../components/PopularProductCard';
import { products } from '../constants';

const PopularProducts = () => {
  return (
    <Container className="max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-deep-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after selections. Discover a world
          of comfort, design, and value
        </p>
      </div>

      <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 mt-16">
        {products.map(product => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </ul>
    </Container>
  );
};

export default PopularProducts;
