import React, { useState } from "react";
import Header from "./components/Header";
import FoodList from "./components/FoodList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const App = () => {
  const [foods] = useState([
    { id: 1, name: "Burger", description: "Delicious beef burger", price: 5.99 },
    { id: 2, name: "Pizza", description: "Cheesy pepperoni pizza", price: 8.99 },
    { id: 3, name: "Salad", description: "Healthy green salad", price: 4.99 },
  ]);

  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  const addToCart = (food) => setCart([...cart, food]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
  const clearCart = () => setCart([]);
  const handleCheckout = (details) => {
    setOrderDetails(details);
    clearCart();
    alert(`Order placed successfully for ${details.name}`);
  };

  return (
    <div>
      <Header />
      <FoodList foods={foods} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
      <Checkout onCheckout={handleCheckout} />
      {orderDetails && (
        <div style={{ padding: "1rem", borderTop: "1px solid #ddd" }}>
          <h3>Order Details</h3>
          <p>Name: {orderDetails.name}</p>
          <p>Address: {orderDetails.address}</p>
        </div>
      )}
    </div>
  );
};

export default App;
