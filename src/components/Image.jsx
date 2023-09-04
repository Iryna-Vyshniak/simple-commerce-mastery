import { Link } from 'react-router-dom';

const Image = ({ src, alt, link, className }) => {
  const Img = link ? (
    <Link to={link}>
      <img src={src} alt={alt} className={`${className} transition duration-200 ease-in-out`} />
    </Link>
  ) : (
    <img src={src} alt={alt} className={className} />
  );
  return <>{Img}</>;
};

export default Image;
