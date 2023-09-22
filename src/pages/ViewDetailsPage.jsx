import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import ButtonGroup from '../components/Button/ButtonGroup';
import Container from '../components/Container';
import MainTitle from '../components/Title/MainTitle';
import Price from '../components/Price';
import ThumbImage from '../components/Image/ThumbImage';
import Views from '../components/Views';
import { selectProducts } from '../redux/products/products-selectors';
import { addToCart, setOpenCart } from '../redux/cart/cart-slice';

const ViewDetailsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const viewsShoes = products.find(product => product.name === 'Nike Force ’07');

  const addProductToCart = () => dispatch(addToCart(viewsShoes));

  const handleBuyProduct = () => {
    dispatch(addToCart(viewsShoes));
    dispatch(setOpenCart(true));
  };

  useEffect(() => {
    window.scrollTo(0, 0, { smooth: true });
  }, []);

  return (
    <Container>
      <article className="-mt-10">
        <div className="lg:grid lg:grid-cols-2 grid items-center justify-center gap-4 padding  px-4 pt-16 shadow-2xl bg-primary bg-gradient-to-t from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500">
          <MainTitle className="text-5xl">
            We Provide You <span className="text-deep-red">Super Quality</span> Shoes
          </MainTitle>
          <ThumbImage src={viewsShoes.imgURL} alt="Sport shoes" />
        </div>

        <div className="padding">
          <div className="flex flex-wrap w-full">
            <div className="flex items-center justify-between w-full">
              <Price
                amount={viewsShoes.price}
                className="text-lg font-semibold text-slate-500 dark:text-slate-400"
              />
              <p className="text-lg font-semibold text-slate-500 dark:text-slate-400 mt-2">
                In stock
              </p>
            </div>
          </div>
          <p className="mt-4 mb-6 pb-6 font-medium text-slate-700 dark:text-slate-400">
            {viewsShoes.description}
          </p>
          <Views />
          <ButtonGroup addProductToCart={addProductToCart} handleBuyProduct={handleBuyProduct} />
          <p className="text-sm text-slate-700 dark:text-slate-400">
            Free shipping on all continental US orders.
          </p>
        </div>
      </article>
    </Container>
  );
};

export default ViewDetailsPage;
