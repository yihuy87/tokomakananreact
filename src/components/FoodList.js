import React from "react";

const FoodList = ({ foods, addToCart }) => {
  return (
    <div style={{ padding: "1rem" }}>
      <h2>Available Foods</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {foods.map((food) => (
          <li key={food.id} style={{ marginBottom: "1rem", border: "1px solid #ddd", padding: "1rem", borderRadius: "5px" }}>
            <h3>{food.name}</h3>
            <p>{food.description}</p>
            <p><strong>Price:</strong> ${food.price}</p>
            <button onClick={() => addToCart(food)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
