import Container from '../components/Container';
import ReviewList from '../components/Review/ReviewList';

const CustomerReviews = () => {
  return (
    <Container>
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their exceptional experiences with
        us.
      </p>
      <ReviewList />
    </Container>
  );
};

export default CustomerReviews;
