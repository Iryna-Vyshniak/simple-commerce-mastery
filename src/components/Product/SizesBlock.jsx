import { getRandomValue, uniqueValues } from '../../shared/utils';

const SizesBlock = ({ products, activeSizes }) => {
  const activeSize = getRandomValue(activeSizes);
  return (
    <ul className="flex flex-wrap items-center justify-start gap-x-2 gap-y-3">
      <>
        {uniqueValues(products, 'size').map((size, idx) => {
          const isActiveSizes = activeSizes.includes(size);
          return (
            <li
              key={idx}
              className={`min-w-max py-1 px-4 rounded-md ${
                isActiveSizes
                  ? size === activeSize
                    ? 'bg-deep-red ring-2 ring-red-200 shadow-md'
                    : 'ring-2 ring-slate-200 shadow-lg'
                  : 'border border-slate-300 dark:border-slate-500'
              }`}
            >
              <p
                className={`font-montserrat leading-7 text-[12px] ${
                  isActiveSizes
                    ? size === activeSize
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-300 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
                    : 'text-slate-300  dark:text-slate-500 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
                }  `}
              >
                {size}
              </p>
            </li>
          );
        })}
      </>
    </ul>
  );
};

export default SizesBlock;
