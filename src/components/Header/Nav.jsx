import { Link } from 'react-router-dom';

import { useToggle } from '../../shared/hooks';
import { headerLogo } from '../../assets/images';

import MobNavMenu from './MobNavMenu';
import NavMenu from './NavMenu';
import GroupNavButtons from './GroupNavButtons';

const Nav = () => {
  const { isOpen, toggle, close } = useToggle(false);

  return (
    <nav className="relative flex flex-wrap justify-between items-center max-container px-2">
      <Link to="/" className="absolute top-2 left-0 sm:static">
        <img
          src={headerLogo}
          alt="logo"
          width={129}
          height={29}
          className={`${
            isOpen
              ? 'fixed z-40 m-0 w-[129px] h-[29px] '
              : 'relative z-40 m-0 w-[119px] h-[19px] sm:w-[129px] sm:h-[29px]'
          }`}
        />
      </Link>

      <NavMenu />
      <GroupNavButtons isOpen={isOpen} toggle={toggle} />

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
