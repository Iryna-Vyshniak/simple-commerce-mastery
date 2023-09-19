import icons from '../assets/icons/icons.svg';

const Button = ({
  id,
  type,
  label,
  iconURL,
  svgURL,
  svgClass,
  ariaLabel,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  className,
  onClick
}) => {
  return (
    <button
      data-id={id}
      type={type}
      onClick={onClick}
      className={`${
        className
          ? className
          : 'flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none'
      } ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : 'bg-deep-red hover:bg-red-600 focus:bg-red-600 text-white border-deep-red'
      } rounded-full ${
        fullWidth ? 'w-full' : ''
      } shadow-lg active:shadow-sm focus:shadow-sm transition duration-200 ease-in-out`}
    >
      {label}

      {iconURL && (
        <img src={iconURL} alt="arrow right icon" className="ml-2 rounded-full bg-white w-5 h-5" />
      )}

      {svgURL && (
        <svg width="18" height="18" aria-label={ariaLabel} className={svgClass}>
          <use href={icons + svgURL} />
        </svg>
      )}
    </button>
  );
};

export default Button;
