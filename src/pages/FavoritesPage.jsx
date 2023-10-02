import { useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { selectFavorites, selectProducts } from '../redux/products/products-selectors';
import NotFound from '../components/NotFound';
import PopularProductCard from '../components/Product/PopularProductCard';
import Container from '../components/Container';
import BackLink from '../components/BackLink';
import Loader from '../components/Loader';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  const products = useSelector(selectProducts);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const favoritesList = products.filter(product => favorites.find(item => item === product._id));

  if (!products) {
    return <Loader />;
  }

  return (
    <section>
      <Container className="max-container mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <BackLink to={backLinkHref}>Back</BackLink>
        {favoritesList.length === 0 && <NotFound />}
        {favoritesList.length > 0 && (
          <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {favoritesList.map(({ _id, imgURL, name, price, rating, color, category }) => (
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
        )}
      </Container>
    </section>
  );
};

export default FavoritesPage;
