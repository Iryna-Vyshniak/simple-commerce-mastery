import Button from './Button';

const ButtonGroup = () => {
  return (
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <Button
          type="submit"
          label="Buy now"
          className="w-[140px] h-9 px-6 text-sm rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
        />
        <Button
          backgroundColor="bg-transparent"
          textColor="text-slate-900"
          borderColor="border-slate-200"
          className="w-[150px] h-10 px-6 text-sm rounded-md flex justify-center items-center gap-2  py-4 border font-montserrat leading-none"
          type="button"
          label="Add to bag"
        />
      </div>

      <button
        className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200 shadow-lg active:shadow-sm transition duration-200 ease-in-out"
        type="button"
        aria-label="Like"
      >
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ButtonGroup;
