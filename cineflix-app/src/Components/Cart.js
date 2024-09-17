// src/components/Cart.js

import React, { useState, useEffect } from 'react';
import { del, post } from '../services/api-client'; // Import API functions

const Cart = ({ cartItems, removeFromCart, checkout }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleRemoveFromCart = async (itemId) => {
    setLoading(true);
    setError(null);
    try {
      await del(`/cart-items/${itemId}`); // Adjust endpoint as needed
      removeFromCart(itemId); // Update local state or context
    } catch (err) {
      setError('Failed to remove item from cart.');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);
    try {
      await post('/checkout', { items: cartItems }); // Adjust endpoint and data as needed
      checkout(); // Handle successful checkout, e.g., redirect or clear cart
    } catch (err) {
      setError('Failed to proceed with checkout.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {error && <p className="error">{error}</p>}
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>${item.price}</span>
            <span>Quantity: {item.quantity}</span>
            <button onClick={() => handleRemoveFromCart(item.id)} disabled={loading}>
              {loading ? 'Removing...' : 'Remove'}
            </button>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h2>Total: ${calculateTotal()}</h2>
        <button onClick={handleCheckout} disabled={loading}>
          {loading ? 'Processing...' : 'Proceed to Checkout'}
        </button>
      </div>
    </div>
  );
};

export default Cart;
