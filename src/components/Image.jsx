import { Link } from 'react-router-dom';

const Image = ({ src, alt, link }) => {
  const Img = link ? (
    <Link to={link}>
      <div>
        <img src={src} alt={alt} />
      </div>
    </Link>
  ) : (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
  return <>{Img}</>;
};

export default Image;
