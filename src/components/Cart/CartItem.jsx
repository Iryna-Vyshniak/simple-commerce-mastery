import { useDispatch } from 'react-redux';

import {
  removeFromCart,
  setDecrementProduct,
  setIncrementProduct
} from '../../redux/cart/cart-slice';
import Button from '../Button/Button';
import Title from '../Title/Title';
import ThumbImage from '../Image/ThumbImage';

import Counter from './Counter';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { _id, imgURL, name, price, cartQuantity, sizes } = item;

  const handleRemoveItem = size => {
    dispatch(removeFromCart({ currentSize: size, _id }));
  };

  const handleIncrementItem = size => {
    dispatch(setIncrementProduct({ item, currentSize: size, _id }));
  };

  const handleDecrementItem = size => {
    dispatch(setDecrementProduct({ item, currentSize: size, _id }));
  };

  return (
    <section className="flex flex-col md:flex-row justify-between items-center w-full px-2 py-4 shadow-md md:shadow-sm  bg-gradient-to-b from-white to-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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

        <div className="grid items-center gap-2">
          <div className="flex justify-between items-center gap-y-2 gap-x-4 w-full leading-none p-2">
            <Title className="mt-0 font-medium text-lg text-slate-900 lg:text-sm">{name}</Title>
            <Title className="mt-0 text-lg lg:text-base text-slate-900 font-medium">
              {(price * cartQuantity).toFixed(2)}
            </Title>
          </div>

          {Object.keys(sizes).map(size => (
            <div
              key={size}
              className="flex justify-between items-center gap-y-2 gap-x-4 w-full p-2"
            >
              <p className="mt-0 font-medium text-md text-slate-900 lg:text-sm">Size:</p>
              <p className="mt-0 font-medium text-md text-slate-900 lg:text-sm">
                {size ? size : '-'}
              </p>
              <div className="flex justify-between items-center gap-y-2 gap-x-4 w-full">
                <Counter
                  key={size}
                  item={sizes[size]}
                  currentSize={size}
                  _id={_id}
                  quantity={sizes[size].quantity}
                  onIncrement={() => handleIncrementItem(size)}
                  onDecrement={() => handleDecrementItem(size)}
                />
                <div className="grid items-center justify-center">
                  <Button
                    type="button"
                    svgClass="btn-cart dark:fill-deep-red"
                    svgURL="#icon-delete"
                    ariaLabel="add to cart"
                    backgroundColor="bg-transparent"
                    className="h-10 px-6 text-sm  flex justify-center items-center bg-gradient-to-b from-white to-white/70 dark:shadow-slate-400 bg-primary dark:bg-slate-300 rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
                    onClick={() => handleRemoveItem(size)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CartItem;
