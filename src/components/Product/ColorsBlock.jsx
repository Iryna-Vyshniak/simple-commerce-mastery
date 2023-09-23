import { useState } from 'react';

import { uniqueValues } from '../../shared/utils';

const ColorsBlock = ({ colors, products, activeColors }) => {
  const [selectedColor, setSelectedColor] = useState(activeColors?.[0] || null);

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  return (
    <>
      {colors?.length > 0 && (
        <div className="flex items-center space-x-3 mt-4">
          {colors.map(color => (
            <label
              key={color}
              className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none shadow-inner shadow-white/50 border border-slate-500 ${
                color
                  ? color === 'white'
                    ? `bg-${color}`
                    : color === 'slate'
                    ? `bg-${color}-900`
                    : `bg-${color}-500`
                  : ''
              } ${
                selectedColor === color ? 'ring-2 ring-slate-200' : 'shadow-lg shadow-slate-300'
              }`}
            >
              <input
                type="radio"
                value={color}
                name="color"
                checked={selectedColor === color}
                onChange={() => handleColorChange(color)}
                className="sr-only"
              />
              <span
                aria-hidden="true"
                className={`h-4 w-4 rounded-full border border-black border-opacity-10 ${
                  color
                    ? color === 'white'
                      ? `bg-${color}`
                      : color === 'slate'
                      ? `bg-${color}-900`
                      : `bg-${color}-500`
                    : ''
                }`}
              />
            </label>
          ))}
        </div>
      )}
      {products?.length > 0 && (
        <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-3 ml-2">
          {uniqueValues(products, 'color').map(color => {
            const isActiveColor = activeColors.includes(color);

            return (
              <label
                key={color}
                className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none
               ${
                 isActiveColor
                   ? selectedColor === color
                     ? 'cursor-pointer ring-2 ring-slate-200 shadow-md shadow-slate-400 border-none'
                     : 'cursor-pointer ring-2 ring-transparent shadow-lg shadow-slate-400'
                   : 'cursor-not-allowed shadow-inner shadow-white/50 border border-slate-300 dark:border-slate-700'
               }
                ${
                  color
                    ? color === 'white'
                      ? `bg-${color}`
                      : color === 'slate'
                      ? `bg-${color}-900`
                      : `bg-${color}-500`
                    : 'cursor-not-allowed shadow-inner shadow-white/50 border border-slate-300'
                }`}
              >
                <input
                  type="radio"
                  value={color}
                  name="color"
                  disabled={!isActiveColor}
                  checked={selectedColor === color}
                  onChange={() => handleColorChange(color)}
                  className="sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`h-4 w-4 rounded-full border border-black border-opacity-10 shadow-lg ${
                    color
                      ? color === 'white'
                        ? `bg-${color}`
                        : color === 'slate'
                        ? `bg-${color}-900`
                        : `bg-${color}-500`
                      : 'cursor-not-allowed shadow-inner shadow-white/50 border border-slate-300 dark:border-slate-700'
                  }`}
                />
              </label>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ColorsBlock;

//         'bg-orange-500': '#f5e9dc',
//         'bg-white-500': '#ffffff',
//         'bg-blue-500': '#2563eb',
//         'bg-slate-900': '#020617',
//         'bg-red-500': '#b91c1c',
//         'bg-yellow-500': '#facc15',
//         'bg-green-500': '#15803d'
