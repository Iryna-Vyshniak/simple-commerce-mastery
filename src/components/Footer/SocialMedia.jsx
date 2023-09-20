import { socialMedia } from '../../shared/data';
import Image from '../Image/Image';

const SocialMedia = () => {
  return (
    <ul className="flex items-center gap-5 mt-8">
      {socialMedia.map(({ src, alt, link }) => (
        <li
          className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full border-3 border-white overflow-hidden list-none duration-250 ease-in-out transition-transform transform-gpu origin-center hover:-rotate-y-[360deg]"
          key={alt}
        >
          <a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="relative flex items-center justify-center w-12 h-12 bg-white rounded-full border-3 border-white overflow-hidden list-none duration-250 ease-in-out transition-transform transform-gpu hover:-rotate-y-360"
            // className="relative flex items-center justify-center w-12 h-12 bg-white  rounded-full  border-3 border-white  overflow-hidden text-center duration-250 ease-in-out transition-all before:content-[''] before:block before:absolute before:z-20 before:left-0 before:top-[100%] before:bg-[#f00] before:transition-all before:duration-500 hover:before:top-0"
          >
            <Image src={src} alt={alt} width={24} height={24} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMedia;
