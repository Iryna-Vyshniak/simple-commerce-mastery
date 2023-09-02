import { star } from '../assets/icons';

import Image from './Image';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <li className="flex flex-1 flex-col w-full max-sm:w-full">
      <div className="flex items-center justify-center w-[282px] h-[282px]">
        <Image src={imgURL} alt={name} className="object-contain object-center" />
      </div>

      <div className="mt-8 flex justify-start gap-2.5">
        <Image src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
      <p className="mt-2 font-semibold font-montserrat text-deep-red text-2xl leading-normal">
        {price}
      </p>
    </li>
  );
};

export default PopularProductCard;
