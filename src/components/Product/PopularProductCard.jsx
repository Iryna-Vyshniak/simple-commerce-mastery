import { ReactFitty } from 'react-fitty';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import { useLocation } from 'react-router-dom';

import { star } from '../../assets/icons';

import Image from '../Image/Image';
import Price from '../Price';

import Title from '../Title/Title';

import { addToCart, setOpenCart } from '../../redux/cart/cart-slice';

import { selectCartProducts } from '../../redux/cart/cart-selectors';

import Button from '../Button/Button';

import Category from './Category';
import Overlay from './Overlay';
import Form from './Form';

const PopularProductCard = ({ _id, imgURL, name, price, rating, color, category, currentSize }) => {
  const item = { _id, imgURL, name, price, rating, color, category, currentSize } || {};

  const dispatch = useDispatch();
  const buyProducts = useSelector(selectCartProducts);
  const location = useLocation();

  const addProductToCart = () => {
    if (!currentSize) {
      toast.warn('Please, check size');
      return;
    }
    dispatch(addToCart(item));
    toast.success('Add shoes to cart');
  };

  const handleBuyProduct = () => {
    if (!currentSize) {
      toast.warn('Please, check size');
      return;
    }
    dispatch(addToCart(item));
    dispatch(setOpenCart(true));
    toast.success('Add shoes to cart');
  };

  const isBuy = buyProducts.some(item => item._id === _id);
  return (
    <li className="relative flex flex-1 flex-col items-center justify-center gap-2 p-3 w-full max-sm:w-full h-[420px] shadow-xl border-2 rounded-xl border-white dark:border-none cursor-pointer active:border-slate-200 active:shadow-md transition duration-200 ease-in-out">
      <Overlay imgURL={imgURL} id={_id} name={name} />
      {category ? (
        <>
          <Category category={category} />
        </>
      ) : (
        <div className="flex justify-start gap-2">
          <Image src={star} alt="rating icon" width={20} height={20} />
          <p className="font-montserrat text-sm leading-normal text-slate-600 dark:text-slate-200">
            ({rating})
          </p>
        </div>
      )}

      <Title className="mt-2 text-xl leading-normal font-semibold font-palanquin">
        <ReactFitty>{name}</ReactFitty>
      </Title>
      {location.pathname === '/list' ? (
        <>
          <div className="flex-auto flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
            <Button
              onClick={addProductToCart}
              svgClass={isBuy ? 'fill-deep-red' : 'btn-cart'}
              svgURL="#icon-shopping-bag"
              ariaLabel="add to cart"
              backgroundColor="bg-transparent"
              className="h-10 px-6 text-sm  flex justify-center items-center rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
            />
            <Button
              type="button"
              label="Buy now"
              onClick={handleBuyProduct}
              className="w-[110px] h-9 sm:mr-auto px-6 text-[12px] rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
            />
            <Price amount={price} />
          </div>
          {color && <Form colors={color} />}
        </>
      ) : (
        <>
          {color && <Form colors={color} />}
          <Price amount={price} />
        </>
      )}
    </li>
  );
};

export default PopularProductCard;
