import { useDispatch, useSelector } from 'react-redux';

import icons from '../../assets/icons/icons.svg';

import { selectFavorites } from '../../redux/products/products-selectors';
import { removeFromFavorite, setToFavorite } from '../../redux/products/products-slice';

import Button from './Button';

const ButtonGroup = ({ id, addProductToCart, handleBuyProduct }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(item => item === id);

  const handleToggleFavorite = () => {
    return isFavorite ? dispatch(removeFromFavorite(id)) : dispatch(setToFavorite(id));
  };
  return (
    <div className="flex flex-wrap gap-2  mb-6 pr-2 text-sm font-medium">
      <div className="flex-auto flex flex-wrap gap-2 ">
        <Button
          onClick={handleBuyProduct}
          type="submit"
          label="Buy now"
          className="w-[140px] h-9 px-6 text-sm rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
        />
        <Button
          onClick={addProductToCart}
          backgroundColor="bg-transparent hover:bg-deep-red focus:bg-deep-red active:bg-deep-red"
          textColor="text-slate-900 dark:text-slate-400"
          borderColor="border-slate-200"
          className="w-[150px] h-10 px-6 text-sm rounded-md flex justify-center items-center gap-2  py-4 border font-montserrat leading-none"
          type="button"
          label="Add to bag"
        />
      </div>

      <button
        className="flex-none flex items-center justify-center w-10 h-9 rounded-md text-slate-300 border border-slate-200 shadow-lg active:shadow-sm transition duration-200 ease-in-out"
        type="button"
        aria-label="Like"
        onClick={handleToggleFavorite}
      >
        <svg
          width="18"
          height="18"
          className={`transition duration-200 ease-in-out ${
            isFavorite
              ? 'fill-deep-red'
              : 'fill-slate-400 hover:stroke-deep-red focus:stroke-deep-red  hover:fill-deep-red focus:fill-deep-red dark:stroke-white dark:hover:stroke-deep-red dark:focus:stroke-deep-red '
          }`}
        >
          <use href={icons + '#icon-heart'} />
        </svg>
      </button>
    </div>
  );
};

export default ButtonGroup;
