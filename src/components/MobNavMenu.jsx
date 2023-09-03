import { useState } from 'react';

import { navLinks } from '../constants';

const MobNavMenu = ({ onClose }) => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavClick = href => {
    setActiveLink(href);
    onClose();
  };

  const item = navLinks.map(({ href, label }) => (
    <li key={label}>
      <a
        href={href}
        className={`cursor-pointer text-xl text-center font-montserrat leading-normal  ${
          activeLink === href ? 'font-bold text-deep-red' : 'text-slate-gray'
        } hover:text-deep-red focus:text-deep-red focus:outline-none transition duration-250 ease-in-out`}
        onClick={() => handleNavClick(href)}
      >
        {label}
      </a>
    </li>
  ));
  return (
    <ul className="flex flex-col justify-center items-center gap-[15px] lg:hidden w-full h-full">
      {item}
    </ul>
  );
};

export default MobNavMenu;
