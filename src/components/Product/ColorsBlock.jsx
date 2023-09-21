const ColorsBlock = ({ colors }) => {
  return (
    <ul className="flex colors-center justify-center gap-2">
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
