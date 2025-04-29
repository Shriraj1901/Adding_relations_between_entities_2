import React, { useState } from "react";
import ProductCard from "./ProductCard";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", image: "https://via.placeholder.com/150", description: "Powerful laptop", avgRating: 4.0, totalRatings: 5 },
    { id: 2, name: "Phone", image: "https://via.placeholder.com/150", description: "Smartphone with amazing camera", avgRating: 4.5, totalRatings: 8 },
    { id: 3, name: "Headphones", image: "https://via.placeholder.com/150", description: "Noise-cancelling headphones", avgRating: 3.8, totalRatings: 6 }
  ]);

  const handleRatingSubmit = (productId, newRating) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating: ((product.avgRating * product.totalRatings + newRating) / (product.totalRatings + 1)).toFixed(1),
              totalRatings: product.totalRatings + 1
            }
          : product
      )
    );
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Product Ratings</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onRatingSubmit={handleRatingSubmit} />
        ))}
      </div>
    </div>
  );
};

export default App;
