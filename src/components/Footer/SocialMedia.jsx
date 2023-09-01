import { socialMedia } from '../../constants';

const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-5 mt-8">
      {socialMedia.map(({ src, alt }) => (
        <li
          className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer"
          key={alt}
        >
          <img src={src} alt={alt} width={24} height={24} />
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
