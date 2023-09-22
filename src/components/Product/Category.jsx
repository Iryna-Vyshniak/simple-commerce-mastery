const Category = ({ category, className, classWrapper }) => {
  return (
    <ul
      className={
        classWrapper
          ? `${classWrapper} flex gap-4`
          : 'flex items-center justify-center gap-4 w-full'
      }
    >
      {category.map((item, idx) => (
        <li
          key={idx}
          className={className ? `${className}` : 'min-w-max py-1 px-4 shadow-lg rounded-md'}
        >
          <p className="text-sm font-semibold dark:text-slate-400 dark:drop-shadow-[0_0.03px_0.5px_rgba(0,0,20,1)]">
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Category;
