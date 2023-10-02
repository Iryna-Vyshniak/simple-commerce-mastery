import { useDispatch, useSelector } from 'react-redux';

import { Link, useLocation } from 'react-router-dom';

import { selectTotalQuantity } from '../../redux/cart/cart-selectors';
import { selectFavorites } from '../../redux/products/products-selectors';
import Button from '../Button/Button';
import Switcher from '../Switcher';
import { setOpenCart } from '../../redux/cart/cart-slice';

const GroupNavButtons = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectTotalQuantity);
  const location = useLocation();
  const favorites = useSelector(selectFavorites);

  const isFavorites = favorites.length > 0;
  const hasItemsInCart = totalQuantity > 0;

  const onCartToggle = () => {
    dispatch(setOpenCart(true));
  };

  const onBlockClick = () => {
    onCartToggle();
  };

  return (
    <div className="flex items-center justify-center gap-2 ml-auto">
      <div className="relative">
        <Link
          to="/likes"
          state={{ from: location }}
          className="h-8 w-8 px-2 flex justify-center items-center"
        >
          <Button
            svgClass={`transition duration-200 ease-in-out 
          ${
            isFavorites
              ? 'fill-deep-red'
              : 'fill-slate-400 hover:fill-deep-red focus:fill-deep-red dark:stroke-white'
          }`}
            svgURL="#icon-heart"
            ariaLabel="likes"
            backgroundColor="bg-transparent"
            className="h-8 w-8 px-2 flex justify-center items-center transition duration-200 ease-in-out"
          />
        </Link>
        <div className="absolute top-5 -right-1 shadow-md w-[1rem] h-[1rem] text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer bg-slate-200 text-deep-red">
          {favorites.length}
        </div>
      </div>
      <div className="relative" onClick={onBlockClick}>
        <Button
          onClick={onCartToggle}
          svgClass={`transition duration-200 ease-in-out 
          ${
            hasItemsInCart
              ? 'fill-deep-red'
              : 'fill-slate-400 hover:fill-deep-red focus:fill-deep-red dark:stroke-white'
          }`}
          svgURL="#icon-shopping-bag"
          ariaLabel="cart"
          backgroundColor="bg-transparent"
          className="h-8 w-8 px-2 flex justify-center items-center transition duration-200 ease-in-out"
        />
        <div className="absolute top-5 -right-1 shadow-md w-[1rem] h-[1rem] text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer bg-slate-200 text-deep-red">
          {totalQuantity}
        </div>
      </div>
      <Switcher />
      <Button
        onClick={toggle}
        svgClass={isOpen ? 'mobile-navbar-close' : 'mobile-navbar-menu'}
        svgURL={isOpen ? '#icon-close' : '#icon-menu'}
        ariaLabel={isOpen ? 'close' : 'menu'}
        backgroundColor="bg-transparent shadow-none"
        borderColor="border-none"
        className={`${
          isOpen
            ? 'max-lg:fixed z-40 max-lg:block cursor-pointer'
            : 'relative z-40 hidden max-lg:block cursor-pointer'
        }`}
      />
    </div>
  );
};

export default GroupNavButtons;
