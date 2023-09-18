const Title = ({ children, className }) => {
  return (
    <h2
      className={
        className
          ? `${className} mt-10 font-palanquin text-3xl max-sm:text-2xl  font-bold dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]`
          : 'mt-10 font-palanquin text-3xl max-sm:text-2xl font-bold text-left dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]'
      }
    >
      {children}
    </h2>
  );
};

export default Title;
