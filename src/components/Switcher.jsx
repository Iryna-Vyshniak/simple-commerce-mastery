import { useState } from 'react';

import { DarkModeSwitch } from 'react-toggle-dark-mode';

import { useDarkSide } from '../shared/hooks';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);

  const toggleDarkMode = checked => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="flex items-center justify-center h-8 w-8 shadow-lg rounded-full bg-transparent">
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={26}
        moonColor="#fbbf24"
        sunColor="#fbbf24"
      />
    </div>
  );
};

export default Switcher;
