import { Link } from 'react-router-dom';

import { headerLogo } from '../assets/images';

import { useToggle } from '../shared/hooks';

import NavMenu from './NavMenu';
import MobNavMenu from './MobNavMenu';
import Button from './Button';

const Nav = () => {
  const { isOpen, close, toggle } = useToggle(false);

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
      <div
        onClick={toggle}
        className={`${
          isOpen
            ? 'max-lg:fixed top-8 right-10 z-40 max-lg:block cursor-pointer'
            : 'relative z-40 hidden max-lg:block cursor-pointer'
        }`}
      >
        {isOpen ? (
          <Button
            svgClass="mobile-navbar-close"
            svgURL="#icon-close"
            ariaLabel="close"
            backgroundColor="bg-transparent shadow-none"
            borderColor="border-none"
          />
        ) : (
          <Button
            svgClass="mobile-navbar-menu"
            svgURL="#icon-menu"
            ariaLabel="menu"
            backgroundColor="bg-transparent shadow-none"
            borderColor="border-none"
          />
        )}
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
