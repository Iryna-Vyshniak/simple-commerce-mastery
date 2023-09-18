const MainTitle = ({ children, className }) => {
  return (
    <h1
      className={
        className
          ? `${className} font-bold mt-10 mb-10 max-sm:text-3xl dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)] relative z-[10]`
          : 'mt-10 mb-10 font-hero text-8xl max-sm:text-3xl dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)] relative z-[10]'
      }
    >
      {children}
    </h1>
  );
};

export default MainTitle;
