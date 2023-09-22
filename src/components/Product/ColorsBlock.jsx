import { uniqueValues } from '../../shared/utils';

const ColorsBlock = ({ colors, products, activeColors }) => {
  return (
    <ul className="flex colors-center justify-center gap-2">
      {colors && (
        <>
          {colors.map((color, idx) => (
            <li
              key={idx}
              className={`h-5 w-5 rounded-full ${
                color
                  ? color === 'white'
                    ? `bg-${color}`
                    : color === 'slate'
                    ? `bg-${color}-900`
                    : `bg-${color}-500`
                  : ''
              } border border-slate-400 shadow-lg`}
            ></li>
          ))}
        </>
      )}
      {products && (
        <>
          {uniqueValues(products, 'color').map((color, idx) => {
            const isActiveColor = activeColors.includes(color);
            const isWhite = color === 'white';
            const isSlate = color === 'slate';
            return (
              <li
                key={idx}
                className={`h-5 w-5 rounded-full ${
                  color
                    ? isWhite
                      ? `bg-${color}`
                      : isSlate
                      ? `bg-${color}-900`
                      : `bg-${color}-500`
                    : ''
                }  ${
                  isActiveColor
                    ? 'ring-2 ring-slate-200 shadow-lg shadow-slate-400'
                    : 'shadow-inner shadow-white/50 border border-slate-500'
                }`}
              ></li>
            );
          })}
        </>
      )}
    </ul>
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
