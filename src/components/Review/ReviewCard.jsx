import Image from '../Image/Image';
import { star } from '../../assets/icons';

const ReviewCard = ({ avatarURL, name, rating, feedback }) => {
  return (
    <li className="flex justify-center items-center flex-col">
      <Image
        src={avatarURL}
        alt="customer"
        width={120}
        height={120}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <h3 className="mt-1 font-palanquin text-2xl max-sm:text-xl text-center font-bold">{name}</h3>
      <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <Image src={star} width={24} height={24} alt="rating star" className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
    </li>
  );
};

export default ReviewCard;
