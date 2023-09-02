import { Link } from 'react-router-dom';

const Image = ({ src, alt, link, className }) => {
  const Img = link ? (
    <Link to={link}>
      <img src={src} alt={alt} className={className} />
    </Link>
  ) : (
    <img src={src} alt={alt} className={className} />
  );
  return <>{Img}</>;
};

export default Image;
