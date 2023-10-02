import { useDispatch, useSelector } from 'react-redux';

import { uniqueValues } from '../../shared/utils';
import { selectFilter } from '../../redux/products/products-selectors';
import { setFilter } from '../../redux/products/products-slice';

const SizesBlock = ({ products, activeSizes }) => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const sizes = uniqueValues(products, 'size');

  const handleSizeChange = size => {
    if (!filter) {
      dispatch(setFilter({ size }));
    } else if (filter.size === size) {
      dispatch(setFilter({ ...filter, size: '' }));
    } else {
      dispatch(setFilter({ ...filter, size }));
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-start gap-x-2 gap-y-3">
      <>
        {sizes?.map(size => {
          const isActiveSizes = activeSizes?.includes(size);
          return (
            <label
              key={size}
              className={`min-w-max py-1 px-4 rounded-md focus:outline-none 
               ${
                 isActiveSizes
                   ? filter?.size === size
                     ? 'cursor-pointer bg-deep-red ring-2 ring-red-200 shadow-md shadow-slate-400 border-none'
                     : 'cursor-pointer ring-2 ring-slate-200 shadow-lg'
                   : 'cursor-not-allowed shadow-inner shadow-white/50 border border-slate-300 dark:border-slate-500'
               }
              `}
            >
              <input
                type="radio"
                value={size}
                name="size"
                disabled={!isActiveSizes}
                checked={filter?.size === size}
                onChange={() => handleSizeChange(size)}
                className="sr-only"
              />
              <p
                className={`font-montserrat leading-7 text-[12px] ${
                  isActiveSizes
                    ? filter?.size === size
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
                    : 'text-slate-300 dark:text-slate-500 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
                }`}
              >
                {size}
              </p>
            </label>
          );
        })}
      </>
    </div>
  );
};

export default SizesBlock;
