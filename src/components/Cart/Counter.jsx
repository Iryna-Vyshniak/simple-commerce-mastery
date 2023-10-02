import Button from '../Button/Button';

const Counter = ({ quantity, onIncrement, onDecrement }) => {
  return (
    <div className="flex items-center justify-around w-full">
      <Button
        type="button"
        svgClass="btn-cart dark:fill-slate-800"
        svgURL="#icon-minus"
        ariaLabel="minus product quantity"
        onClick={onDecrement}
        disabled={quantity < 2}
        backgroundColor="bg-transparent"
        className="h-10 px-6 text-sm  flex justify-center items-center bg-gradient-to-b from-white to-white/70 dark:shadow-slate-400 bg-primary dark:bg-slate-300 rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
      />

      <div className="bg-theme-cart rounded text-slate-600 font-medium lg:text-xs w-7 h-6 lg:h-5 lg:w-6 flex items-center justify-center">
        {quantity}
      </div>
      <Button
        type="button"
        svgClass="btn-cart dark:fill-slate-800"
        svgURL="#icon-add"
        ariaLabel="add product quantity"
        onClick={onIncrement}
        backgroundColor="bg-transparent"
        className="h-10 px-6 text-sm  flex justify-center items-center bg-gradient-to-b from-white to-white/70 dark:shadow-slate-400 bg-primary dark:bg-slate-300 rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
      />
    </div>
  );
};

export default Counter;
