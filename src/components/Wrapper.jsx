const Wrapper = ({ children, title }) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row items-center justify-start gap-x-2 gap-y-3 mr-2">
      <p className="font-montserrat font-medium text-slate-600 leading-7 text-sm dark:text-slate-300 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]">
        {title}
      </p>{' '}
      {children}
    </div>
  );
};

export default Wrapper;
