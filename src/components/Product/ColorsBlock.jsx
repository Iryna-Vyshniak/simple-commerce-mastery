import { useDispatch, useSelector } from 'react-redux';

import { uniqueValues } from '../../shared/utils';
import { selectFilter } from '../../redux/products/products-selectors';
import { setFilter } from '../../redux/products/products-slice';

const ColorsBlock = ({ colors, products, activeColors }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleColorChange = color => {
    if (!filter) {
      dispatch(setFilter({ color }));
    } else if (filter.color === color) {
      dispatch(setFilter({ ...filter, color: '' }));
    } else {
      dispatch(setFilter({ ...filter, color }));
    }
  };

  return (
    <>
      {colors?.length > 0 && (
        <div className="flex items-center space-x-3 mt-4">
          {colors.map(color => (
            <label
              key={color}
              className={`relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none  border border-slate-500  ${
                color
                  ? color === 'white'
                    ? `bg-${color}`
                    : color === 'slate'
                    ? `bg-${color}-900`
                    : `bg-${color}-500`
                  : ''
              } ${
                filter?.color === color
                  ? 'ring-4 ring-red-100 shadow-lg shadow-slate-500'
                  : 'shadow-lg shadow-slate-400 dark:shadow-md dark:shadow-slate-800'
              }`}
            >
              <input
                type="radio"
                value={color}
                name="color"
                checked={filter?.color === color}
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
                   ? filter?.color === color
                     ? 'cursor-pointer ring-4 ring-red-100 shadow-lg shadow-slate-500 border-none'
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
                  checked={filter?.color === color}
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
