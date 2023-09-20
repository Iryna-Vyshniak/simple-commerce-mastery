import { reviews } from '../../shared/data';

import ReviewCard from './ReviewCard';

const ReviewList = () => {
  return (
    <ul className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      {reviews.map(({ avatarURL, name, rating, feedback }, idx) => (
        <ReviewCard
          key={idx}
          avatarURL={avatarURL}
          name={name}
          rating={rating}
          feedback={feedback}
        />
      ))}
    </ul>
  );
};

export default ReviewList;
