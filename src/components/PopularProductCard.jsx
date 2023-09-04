import { star } from '../assets/icons';

import Image from './Image';
import Price from './Price';
import ThumbImage from './ThumbImage';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <li className="flex flex-1 flex-col items-center justify-center p-3 w-full max-sm:w-full shadow-xl border-2 rounded-xl border-white cursor-pointer active:border-deep-red active:shadow-md transition duration-200 ease-in-out">
      <ThumbImage
        src={imgURL}
        alt={name}
        className="flex items-center justify-center w-[282px] h-[250px]"
      />

      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <Price amount={price} />
    </li>
  );
};

export default PopularProductCard;
