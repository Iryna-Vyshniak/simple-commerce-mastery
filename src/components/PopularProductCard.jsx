import { useDispatch } from 'react-redux';

import { star } from '../assets/icons';

import { addToCart, setOpenCart } from '../redux/cart/cart-slice';

import Button from './Button';

import Image from './Image';
import Price from './Price';
import ThumbImage from './ThumbImage';

const PopularProductCard = ({ _id, imgURL, name, price }) => {
  const item = { _id, imgURL, name, price };

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addToCart(item));

  const handleBuyProduct = () => {
    dispatch(addToCart(item));
    dispatch(setOpenCart(true));
  };

  return (
    <li className="flex flex-1 flex-col items-center justify-center gap-2 p-3 w-full max-sm:w-full shadow-xl border-2 rounded-xl border-white dark:border-none cursor-pointer active:border-deep-red active:shadow-md transition duration-200 ease-in-out">
      <ThumbImage
        src={imgURL}
        alt={name}
        className="flex items-center justify-center w-[282px] h-[250px]"
      />
      <div className="flex justify-start gap-2">
        <Image src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
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
