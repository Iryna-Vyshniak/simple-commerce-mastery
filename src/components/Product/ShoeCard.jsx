import Image from '../Image/Image';

const ShoeCard = ({
  imgURL,
  changeBigShoeImage,
  bigShoeImg,
  width,
  height,
  className,
  divClassName
}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL?.bigShoe) {
      changeBigShoeImage(imgURL?.bigShoe);
    }
  };

  return (
    <li
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL?.bigShoe ? 'border-deep-red shadow-lg' : 'border-white'
      } cursor-pointer max-sm:flex-1 shadow-xl transition duration-200 ease-in-out`}
      onClick={handleClick}
    >
      {divClassName ? (
        <div className="flex justify-center items-center w-[128px] h-[104px] bg-primary bg-gradient-to-b from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500 sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <Image
            src={imgURL?.thumbnail}
            alt="shoe collection"
            width={width}
            height={height}
            className={className ? `${className}` : 'object-cover object-center'}
          />
        </div>
      ) : (
        <Image
          src={imgURL?.thumbnail}
          alt="shoe collection"
          width={width}
          height={height}
          className={
            className +
            'bg-primary bg-gradient-to-b from-white to-white/5  dark:shadow-slate-400 dark:bg-slate-500 sm:w-40 sm:h-40 rounded-xl max-sm:p-4'
          }
        />
      )}
    </li>
  );
};

export default ShoeCard;
