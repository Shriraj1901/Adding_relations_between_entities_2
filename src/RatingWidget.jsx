import React, { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating > 0) {
      onRatingSubmit(productId, rating);
      setRating(0);
    }
  };

  return (
    <div className="rating-widget">
      <p>Rate this product:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(star)}
          style={{ cursor: "pointer", color: (hoveredRating || rating) >= star ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit}>Submit Rating</button>
    </div>
  );
};

export default RatingWidget;
