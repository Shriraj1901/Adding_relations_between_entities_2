import React, { useState } from "react";

const starStyle = (isFilled) => ({
  fontSize: "24px",
  color: isFilled ? "gold" : "gray",
  cursor: "pointer",
  margin: "5px"
});

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleStarClick = (ratingValue) => {
    setRating(ratingValue);
  };

  const handleSubmit = () => {
    if (rating >= 1 && rating <= 5) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            style={starStyle(star <= (hoveredRating || rating))}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
          >
            ★
          </span>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={rating === 0} style={{ marginTop: "10px", padding: "5px 10px", cursor: "pointer" }}>
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;
