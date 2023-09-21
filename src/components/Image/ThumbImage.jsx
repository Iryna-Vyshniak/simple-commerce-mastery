import Image from './Image';

const ThumbImage = ({ src, alt, className, classDiv }) => {
  return (
    <div className={`relative ${classDiv ? classDiv : 'flex-auto overflow-hidden'}`}>
      <Image
        src={src}
        alt={alt}
        className={
          className
            ? `block max-w-full h-auto object-center ${className}`
            : 'block max-w-full h-auto object-contain object-center'
        }
        loading="lazy"
      />
    </div>
  );
};

export default ThumbImage;
