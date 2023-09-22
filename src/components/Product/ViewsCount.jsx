const ViewsCount = ({ count }) => {
  return (
    <p className="ring-slate-100 ring-2 min-w-max py-1 px-4 shadow-lg  dark:shadow-md rounded-md font-montserrat text-slate-600 leading-7 text-[12px] dark:text-slate-300 dark:drop-shadow-[0_1px_0.5px_rgba(0,0,20,1)]">
      {count} reviews
    </p>
  );
};

export default ViewsCount;
