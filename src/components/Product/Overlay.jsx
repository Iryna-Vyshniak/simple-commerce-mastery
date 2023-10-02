import { Link, useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';
import ThumbImage from '../Image/ThumbImage';
import { selectFavorites } from '../../redux/products/products-selectors';
import { removeFromFavorite, setToFavorite } from '../../redux/products/products-slice';

const Overlay = ({ imgURL, id, name }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.some(item => item === id);

  const handleToggleFavorite = () => {
    return isFavorite ? dispatch(removeFromFavorite(id)) : dispatch(setToFavorite(id));
  };

  return (
    <div className="relative w-full overflow-hidden group h-[240px]">
      <ThumbImage
        src={imgURL}
        alt={name}
        classDiv="flex items-center justify-center h-full w-full"
        className="w-full h-full object-center object-contain"
      />
      <div className="absolute bottom-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center bg-white/80 group-hover:translate-y-0 translate-y-full transition duration-500 ease-in-out rounded-t-xl bg-gradient-to-r from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500/80">
        <Link
          to={`/${id}`}
          state={{ from: location }}
          className="absolute top-1 left-1 w-[150px] h-10 px-6 flex justify-center items-center gap-2 py-4 text-sm text-slate-800 dark:text-slate-800 font-montserrat leading-none shadow-xl hover:bg-slate-300  focus:bg-slate-300 active:bg-slate-300  hover:shadow-sm focus:shadow-sm active:shadow-sm rounded-xl transition duration-200 ease-in-out"
        >
          Read More
        </Link>
        <Button
          onClick={handleToggleFavorite}
          svgClass={`transition duration-200 ease-in-out 
          ${
            isFavorite
              ? 'fill-deep-red'
              : 'fill-slate-400 hover:fill-deep-red focus:fill-deep-red dark:stroke-white'
          }`}
          svgURL="#icon-heart"
          ariaLabel="heart for like"
          backgroundColor="bg-white"
          className="h-8 px-2 flex justify-center items-center transition duration-200 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Overlay;
