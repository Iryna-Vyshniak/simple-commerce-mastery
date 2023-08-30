import { useState } from 'react';

import { navLinks } from '../constants';

const NavMenu = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavClick = href => {
    setActiveLink(href);
  };

  const item = navLinks.map(({ href, label }) => (
    <li key={label}>
      <a
        href={href}
        className={`cursor-pointer text-lg font-montserrat leading-normal  ${
          activeLink === href ? 'font-bold text-deep-red' : 'text-slate-gray'
        } hover:text-deep-red focus:text-deep-red focus:outline-none transition duration-250 ease-in-out`}
        onClick={() => handleNavClick(href)}
      >
        {label}
      </a>
    </li>
  ));

  return <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">{item}</ul>;
};

export default NavMenu;
