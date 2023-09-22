import { Link } from 'react-router-dom';

const Image = ({ src, height, width, alt, link, className }) => {
  const Img = link ? (
    <Link to={link}>
      <img
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={`${className} transition duration-200 ease-in-out`}
      />
    </Link>
  ) : (
    <img
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={`${className} transition duration-200 ease-in-out`}
    />
  );
  return <>{Img}</>;
};

export default Image;
