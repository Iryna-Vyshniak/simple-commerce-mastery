import { useSelector } from 'react-redux';

import Button from '../Button/Button';
import { selectTotalQuantity } from '../../redux/cart/cart-selectors';

const CartHeader = ({ onCartToggle, onClearCartItems }) => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <div className="sticky top-0 left-0 right-0 flex items-center justify-between py-3 px-2 h-15 w-full bg-white/80 shadow-lg">
      <div className="flex items-center gap-3">
        <Button
          type="button"
          svgClass="btn-cart hover:fill-orange-500 dark:fill-slate-900"
          svgURL="#icon-chevrons-left"
          backgroundColor="bg-transparent"
          className="h-10 px-6 text-sm  flex justify-center items-center rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
          onClick={onCartToggle}
        />

        <div className="grid items-center">
          <h2 className="text-base font-medium text-slate-900">
            Your Cart:
            <span className="inline-block w-9 h-9 rounded-full ml-2 p-2 text-white bg-slate-300 font-normal text-[12px] text-center">
              {totalQuantity}
            </span>
          </h2>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          onClick={onClearCartItems}
          svgClass="btn-cart dark:stroke-deep-red"
          svgURL="#icon-tag-remove"
          ariaLabel="add to cart"
          backgroundColor="bg-transparent"
          className="h-10 px-6 text-sm  flex justify-center items-center rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default CartHeader;
