import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useToggle } from '../../shared/hooks';
import { headerLogo } from '../../assets/images';
import Button from '../Button/Button';

import { selectTotalQuantity } from '../../redux/cart/cart-selectors';

import { setOpenCart } from '../../redux/cart/cart-slice';

import Switcher from '../Switcher';

import MobNavMenu from './MobNavMenu';
import NavMenu from './NavMenu';

const Nav = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectTotalQuantity);
  const { isOpen, close, toggle } = useToggle(false);

  const onCartToggle = () => {
    dispatch(setOpenCart(true));
  };

  return (
    <nav className="relative flex flex-wrap justify-between items-center max-container px-2">
      <Link to="/">
        <img
          src={headerLogo}
          alt="logo"
          width={129}
          height={29}
          className={`${
            isOpen ? 'fixed z-40 m-0 w-[129px] h-[29px]' : 'relative z-40 m-0 w-[129px] h-[29px]'
          }`}
        />
      </Link>
      <NavMenu />
      <div className="flex items-center justify-center gap-3 ml-auto">
        <Switcher />
        <div className="relative">
          <Button
            onClick={onCartToggle}
            svgClass="fill-slate-400 hover:fill-deep-red focus:fill-deep-red dark:stroke-white transition duration-200 ease-in-out"
            svgURL="#icon-shopping-bag"
            ariaLabel="cart"
            backgroundColor="bg-transparent"
            className="h-8 px-2 flex justify-center items-center transition duration-200 ease-in-out"
          />
          <div className="absolute top-4 right-0 shadow-md w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer bg-slate-200 text-deep-red">
            {totalQuantity}
          </div>
        </div>
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

      <div
        className={`${
          isOpen
            ? 'fixed top-0 left-0 z-30 flex items-center justify-center padding bg-primary dark:bg-slate-900 min-h-screen w-screen lg:hidden'
            : 'hidden'
        }`}
      >
        <MobNavMenu onClose={close} />
      </div>
    </nav>
  );
};

export default Nav;
