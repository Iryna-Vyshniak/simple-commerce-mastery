import { Link } from 'react-router-dom';

const BackLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center px-3 py-2 mb-4 w-20 h-11 text-sm font-medium text-center text-slate-800 hover:text-slate-600 bg-primary rounded-lg hover:bg-slate-100 focus:ring-2 focus:outline-none focus:ring-slate-100 dark:bg-slate-300 dark:hover:bg-slate-300 dark:focus:ring-slate-100 shadow-xl hover:shadow-md"
    >
      <span className="text-deep-red mr-2 drop-shadow-[0_0.03px_0.03px_rgba(0,0,20,1)]">
        &lt;&lt;
      </span>
      {children}
    </Link>
  );
};

export default BackLink;
