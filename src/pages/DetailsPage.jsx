import { useDispatch, useSelector } from 'react-redux';

import { useLocation, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { selectById } from '../redux/products/products-selectors';
import { getById } from '../redux/products/products-operations';

const DetailsPage = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectById);
  const { id } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    dispatch(getById(id));
  }, [id, dispatch]);

  return <div>DetailsPage</div>;
};

export default DetailsPage;
