import { useDispatch } from 'react-redux';

import {
  removeFromCart,
  setDecrementProduct,
  setIncrementProduct
} from '../../redux/cart/cart-slice';
import Button from '../Button/Button';
import Title from '../Title/Title';
import ThumbImage from '../Image/ThumbImage';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { _id } = item;

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ _id }));
  };

  const handleIncrementItem = () => {
    dispatch(setIncrementProduct({ item }));
  };
  const handleDecrementItem = () => {
    dispatch(setDecrementProduct({ item }));
  };
  const { imgURL, name, price, cartQuantity } = item;

  return (
    <section className="flex flex-col md:flex-row items-center justify-between w-full px-2 py-4 shadow-md md:shadow-sm  bg-gradient-to-b from-white to-white/5">
      <div className="flex flex-col md:flex-row items-center gap-5">
        <div className="relative grid items-center shadow-xl bg-gradient-to-b from-white to-white/5  dark:shadow-slate-400 bg-primary dark:bg-slate-300 rounded p-3 hover:scale-105 transition duration-200 ease-in-out">
          <ThumbImage
            src={imgURL}
            alt="sport shoes Nike"
            className="flex items-center justify-center w-[120px] h-[100px]"
          />
          <div className="absolute right-1 top-1 bg:-primary dark:bg-slate-300 text-black text-xs px-1 rounded-md shadow-md">
            ${price}
          </div>
        </div>
        <div className="grid items-center gap-4">
          <div className="grid items-center leading-none">
            <Title className="font-medium text-lg text-slate-900 lg:text-sm">{name}</Title>
          </div>
          <div className="flex items-center justify-around w-full">
            <Button
              type="button"
              svgClass="btn-cart dark:fill-slate-800"
              svgURL="#icon-minus"
              ariaLabel="minus product quantity"
              onClick={handleDecrementItem}
              backgroundColor="bg-transparent"
              className="h-10 px-6 text-sm  flex justify-center items-center bg-gradient-to-b from-white to-white/70 dark:shadow-slate-400 bg-primary dark:bg-slate-300 rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
            />

            <div className="bg-theme-cart rounded text-slate-600 font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
              {cartQuantity}
            </div>
            <Button
              type="button"
              svgClass="btn-cart dark:fill-slate-800"
              svgURL="#icon-add"
              ariaLabel="add product quantity"
              onClick={handleIncrementItem}
              backgroundColor="bg-transparent"
              className="h-10 px-6 text-sm  flex justify-center items-center bg-gradient-to-b from-white to-white/70 dark:shadow-slate-400 bg-primary dark:bg-slate-300 rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
            />
          </div>
        </div>
      </div>
      <div className="grid items-center gap-5">
        <div className="grid items-center justify-center">
          <Title className="text-lg lg:text-base text-slate-900 font-medium">
            {(price * cartQuantity).toFixed(2)}
          </Title>
        </div>
        <div className="grid items-center justify-center">
          <Button
            type="button"
            svgClass="btn-cart dark:fill-deep-red"
            svgURL="#icon-delete"
            ariaLabel="add to cart"
            backgroundColor="bg-transparent"
            className="h-10 px-6 text-sm  flex justify-center items-center bg-gradient-to-b from-white to-white/70 dark:shadow-slate-400 bg-primary dark:bg-slate-300 rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
            onClick={handleRemoveItem}
          />
        </div>
      </div>
    </section>
  );
};

export default CartItem;
