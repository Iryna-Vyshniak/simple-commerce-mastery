import { useState } from 'react';

import { Link } from 'react-router-dom';

import { navLinks } from '../shared/constants';

const MobNavMenu = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavClick = href => {
    setActiveLink(href);
    onClose();
  };

  const item = navLinks.map(({ href, label }) => (
    <li key={label}>
      <Link
        to={`/${href}`}
        className={`cursor-pointer text-3xl text-center font-montserrat leading-normal  ${
          activeLink === href ? 'font-bold text-deep-red' : 'text-slate-gray'
        } hover:text-deep-red focus:text-deep-red focus:outline-none transition duration-250 ease-in-out`}
        onClick={() => handleNavClick(href)}
      >
        {label}
      </Link>
    </li>
  ));
  return (
    <ul className="flex flex-col justify-center items-center gap-[15px] lg:hidden w-full h-full">
      {item}
    </ul>
  );
};

export default MobNavMenu;
