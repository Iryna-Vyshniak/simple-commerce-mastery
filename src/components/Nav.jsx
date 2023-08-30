import { Link } from 'react-router-dom';

import { headerLogo } from '../assets/images';

import { hamburger } from '../assets/icons';

import NavMenu from './NavMenu';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center max-container">
      <Link to="/">
        <img
          src={headerLogo}
          alt="logo"
          width={129}
          height={29}
          className="m-0 w-[129px] h-[29px]"
        />
      </Link>
      <NavMenu />
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="hamburger icon" width={25} height={25} />
      </div>
    </nav>
  );
};

export default Nav;
