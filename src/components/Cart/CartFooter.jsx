import { useSelector } from 'react-redux';

import { selectTotalAmount } from '../../redux/cart/cart-selectors';

const CartFooter = () => {
  const totalAmount = useSelector(selectTotalAmount);
  return (
    <div className="fixed bottom-0 bg-white/80 w-full px-5 py-2 grid items-center shadow-[-10px_-10px_15px_-3px_rgb(0,0,0,0.1)]">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold uppercase dark:text-slate-600">Total price</h3>
        <h3 className="text-sm rounded bg-cart text-slate-100 px-1 py-0.5">
          {totalAmount.toFixed(2)}
        </h3>
      </div>
      <div className="grid items-center gap-2">
        <p className="text-sm font-medium text-center dark:text-slate-600">
          Taxes and Shipping Will Calculate At Shipping
        </p>
        <a
          href="https://www.desmos.com/scientific?lang=uk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-1 rounded active:scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm bg-cart text-white text-center"
        >
          Check Out
        </a>
      </div>
    </div>
  );
};

export default CartFooter;
