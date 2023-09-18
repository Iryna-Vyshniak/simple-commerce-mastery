import Image from './Image';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 px-10 py-16 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-xl">
      <div className="flex justify-center items-center w-11 h-11  bg-deep-red rounded-full">
        <Image src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl max-sm:text-2xl leading-normal font-bold">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-slate-300">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
