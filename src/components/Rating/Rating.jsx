import { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa6';
import './ratingStyles.css';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} onClick={() => handleClick(index)}>
          {rating > index ? (
            <FaStar className="star" />
          ) : (
            <FaRegStar className="starFill" />
          )}
        </span>
      ))}
      <p>{/* Rating: {rating} star{rating !== 1 ? 's' : ''} */}</p>
    </div>
  );
};

export default Rating;
