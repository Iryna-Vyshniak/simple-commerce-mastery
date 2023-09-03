import { Link } from 'react-router-dom';

import { useState } from 'react';

import { headerLogo } from '../assets/images';

import { hamburger } from '../assets/icons';

import NavMenu from './NavMenu';
import MobNavMenu from './MobNavMenu';

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const onCloseNavbar = () => setNavbarOpen(false);

  return (
    <nav className="relative flex flex-wrap justify-between items-center max-container">
      <Link to="/">
        <img
          src={headerLogo}
          alt="logo"
          width={129}
          height={29}
          className="relative z-40 m-0 w-[129px] h-[29px]"
        />
      </Link>
      <NavMenu />
      <button
        type="button"
        onClick={() => setNavbarOpen(!navbarOpen)}
        className="relative z-40 hidden max-lg:block cursor-pointer"
      >
        {navbarOpen ? 'X' : <img src={hamburger} alt="hamburger icon" width={25} height={25} />}
      </button>

      <div
        className={
          navbarOpen
            ? 'fixed top-0 left-0 z-30 flex items-center justify-center padding bg-primary min-h-screen w-screen lg:hidden'
            : 'hidden'
        }
      >
        <MobNavMenu onClose={onCloseNavbar} />
      </div>
    </nav>
  );
};

export default Nav;
