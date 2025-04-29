import React from "react";
import RatingWidget from "./RatingWidget";

const cardStyle = {
  width: "300px",
  margin: "15px",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  textAlign: "center",
  backgroundColor: "#fff"
};

const imageStyle = {
  width: "100%",
  height: "150px",
  borderRadius: "10px"
};

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div style={cardStyle}>
      <img src={product.image} alt={product.name} style={imageStyle} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>⭐ {product.avgRating} ({product.totalRatings} ratings)</h3>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
};

export default ProductCard;
