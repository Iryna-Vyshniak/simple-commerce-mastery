import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import Container from '../components/Container';
import Slider from '../components/Slider/Slider';
import Title from '../components/Title/Title';
import { selectReviews } from '../redux/reviews/reviews-selectors';
import { getAllReviews } from '../redux/reviews/reviews-operations';

const CustomerReviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(getAllReviews());
  }, [dispatch]);

  return (
    <Container>
      <Title className="text-center">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </Title>
      <p className="m-auto mb-8 mt-4 max-w-lg text-center info-text dark:text-slate-900">
        Hear genuine stories from our satisfied customers about their exceptional experiences with
        us.
      </p>
      <Slider reviews={reviews} />
    </Container>
  );
};

export default CustomerReviews;
