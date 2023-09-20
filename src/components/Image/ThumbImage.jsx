import Image from './Image';

const ThumbImage = ({ src, alt, className }) => {
  return (
    <div className="relative flex-auto overflow-hidden">
      <Image
        src={src}
        alt={alt}
        className={
          className
            ? `block object-contain object-center ${className}`
            : 'block max-w-full h-auto object-contain object-center'
        }
        loading="lazy"
      />
    </div>
  );
};

export default ThumbImage;
