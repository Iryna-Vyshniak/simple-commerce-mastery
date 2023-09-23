import icons from '../../assets/icons/icons.svg';
import { useToggle } from '../../shared/hooks';

const Description = ({ text }) => {
  const { isOpen, toggle } = useToggle(false);

  return (
    <div className="border-b border-gray-200 py-6 mr-2">
      <div className="-my-3 flow-root">
        <div className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
          <span className="font-medium text-slate-600 dark:text-slate-300">Description:</span>
          <span className="ml-6 flex items-center" onClick={toggle}>
            {isOpen ? (
              <svg width="24" height="24" className="fill-slate-500">
                <use href={icons + '#icon-minus'} />
              </svg>
            ) : (
              <svg width="24" height="24" className="fill-slate-500">
                <use href={icons + '#icon-add'} />
              </svg>
            )}
          </span>
        </div>
      </div>
      {isOpen && (
        <div className="pt-6">
          <p className="py-1">{text}</p>
        </div>
      )}
    </div>
  );
};

export default Description;
