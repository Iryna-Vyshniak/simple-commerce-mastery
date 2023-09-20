import { useState } from 'react';

import { Link } from 'react-router-dom';

import { navLinks } from '../../shared/data';
import Switcher from '../Switcher';

const NavMenu = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavClick = href => {
    setActiveLink(href);
  };

  const item = navLinks.map(({ href, label }) => (
    <li key={label}>
      <Link
        to={`/${href}`}
        className={`cursor-pointer text-lg font-montserrat leading-normal  ${
          activeLink === href ? 'font-bold text-deep-red' : 'text-slate-gray dark:text-slate-300'
        } hover:text-deep-red focus:text-deep-red focus:outline-none transition duration-250 ease-in-out dark:drop-shadow-[0_0.01px_0.01px_rgba(0,0,20,1)]`}
        onClick={() => handleNavClick(href)}
      >
        {label}
      </Link>
    </li>
  ));
  return (
    <>
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">{item}</ul>
      <div>
        <Switcher />
      </div>
    </>
  );
};

export default NavMenu;
