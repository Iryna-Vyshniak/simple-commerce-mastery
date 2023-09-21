import { useDispatch } from 'react-redux';
import { ReactFitty } from 'react-fitty';

import { star } from '../../assets/icons';

import { addToCart, setOpenCart } from '../../redux/cart/cart-slice';

import Button from '../Button/Button';

import Image from '../Image/Image';
import Price from '../Price';
import ThumbImage from '../Image/ThumbImage';

const PopularProductCard = ({ _id, imgURL, name, price, rating }) => {
  const item = { _id, imgURL, name, price, rating };

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addToCart(item));

  const handleBuyProduct = () => {
    dispatch(addToCart(item));
    dispatch(setOpenCart(true));
  };

  return (
    <li className="relative flex flex-1 flex-col items-center justify-center gap-2 p-3 w-full max-sm:w-full h-[420px] shadow-xl border-2 rounded-xl border-white dark:border-none cursor-pointer active:border-deep-red active:shadow-md transition duration-200 ease-in-out">
      <div className="relative w-full overflow-hidden group">
        <ThumbImage
          src={imgURL}
          alt={name}
          classDiv="flex items-center justify-center h-[180px] w-full"
          className="w-full h-full object-center object-cover"
        />
        <div className="absolute bottom-0 left-0 z-10 w-full h-full flex flex-col justify-center items-center bg-white/80 group-hover:translate-y-0 translate-y-full transition duration-500 ease-in-out rounded-t-xl bg-gradient-to-r from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500/80">
          <Button
            // onClick=""
            svgClass="fill-slate-400 hover:fill-deep-red focus:fill-deep-red dark:stroke-white transition duration-200 ease-in-out"
            svgURL="#icon-heart"
            ariaLabel="heart for like"
            backgroundColor="bg-white"
            className="h-8 px-2 flex justify-center items-center transition duration-200 ease-in-out"
          />
        </div>
      </div>

      <div className="flex justify-start gap-2">
        <Image src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-600 dark:text-slate-200">
          ({rating})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        <ReactFitty>{name}</ReactFitty>
      </h3>
      <div className="flex-auto flex flex-col sm:flex-row items-center justify-between gap-2 w-full">
        <Button
          onClick={addProductToCart}
          svgClass="btn-cart"
          svgURL="#icon-shopping-bag"
          ariaLabel="add to cart"
          backgroundColor="bg-transparent"
          className="h-10 px-6 text-sm  flex justify-center items-center rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
        />
        <Button
          type="button"
          label="Buy now"
          onClick={handleBuyProduct}
          className="w-[110px] h-9 sm:mr-auto px-6 text-[12px] rounded-md shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out"
        />
        <Price amount={price} />
      </div>
    </li>
  );
};

export default PopularProductCard;
