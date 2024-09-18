import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Ensure this is a default export
import Home from './Components/Home'; // Ensure this is a default export
import Cart from './Components/Cart'; // Ensure this is a default export
import OrderHistory from './Components/OrderHistory'; // Ensure this is a default export
import Checkout from './Components/Checkout'; // Ensure this is a default export
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...existingItem, quantity: existingItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    setTotalPrice(prevTotal => prevTotal + item.price);
  };

  const removeFromCart = (id) => {
    const itemToRemove = cartItems.find(cartItem => cartItem.id === id);
    if (itemToRemove) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== id));
      setTotalPrice(prevTotal => prevTotal - itemToRemove.price * itemToRemove.quantity);
    }
  };

  const handlePlaceOrder = () => {
    console.log('Order placed!');
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} totalPrice={totalPrice} onPlaceOrder={handlePlaceOrder} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

