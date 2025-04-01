import React from "react";
import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Average Rating: {product.avgRating.toFixed(1)} </p>
      <p>Total Ratings: {product.totalRatings}</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
