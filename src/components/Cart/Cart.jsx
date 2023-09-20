import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { selectCartProducts, selectCartState } from '../../redux/cart/cart-selectors';

import { setClearCart, setCloseCart, setGetTotals } from '../../redux/cart/cart-slice';

import CartEmpty from './CartEmpty';
import CartItem from './CartItem';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';

const Cart = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectCartState);
  const cartProducts = useSelector(selectCartProducts);

  const onCartToggle = () => {
    dispatch(setCloseCart(false));
  };

  const onClearCartItems = () => {
    dispatch(setClearCart());
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isOpen]);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartProducts, dispatch]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen blur-cart opacity-100 z-[50] duration-500 ${
        isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'
      }`}
    >
      <div
        className={`absolute right-0 z-[150] flex flex-col items-center justify-center h-screen max-w-xl w-full blur-cart duration-500  ${
          isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8'
        }`}
      >
        <CartHeader onCartToggle={onCartToggle} onClearCartItems={onClearCartItems} />
        {cartProducts?.length === 0 ? (
          <CartEmpty onCartToggle={onCartToggle} />
        ) : (
          <div className="flex-1 overflow-hidden overflow-y-auto overflow-x-hidden h-full w-full scroll-style pb-24 bg-gradient-to-b from-white to-white/5  dark:shadow-slate-400 bg-primary dark:bg-slate-200">
            <div className="flex items-start justify-start flex-col gap-y-7">
              {cartProducts?.map(item => (
                <CartItem key={item._id} item={item} />
              ))}
            </div>
          </div>
        )}
        <CartFooter />
      </div>
    </div>
  );
};

export default Cart;
