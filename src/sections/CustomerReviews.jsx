import Container from '../components/Container';
import ReviewList from '../components/Review/ReviewList';
import Title from '../components/Title/Title';

const CustomerReviews = () => {
  return (
    <Container>
      <Title className="text-center">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </Title>
      <p className="m-auto mt-4 max-w-lg  text-center info-text dark:text-slate-900">
        Hear genuine stories from our satisfied customers about their exceptional experiences with
        us.
      </p>
      <ReviewList />
    </Container>
  );
};

export default CustomerReviews;
