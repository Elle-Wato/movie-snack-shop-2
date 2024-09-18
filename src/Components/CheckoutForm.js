import React, { useState } from 'react';

const CheckoutForm = ({ cartItems = [], totalPrice, onPlaceOrder }) => {
  const [customerName, setCustomerName] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if cartItems is an array and not empty
    if (!Array.isArray(cartItems) || cartItems.length === 0) {
      console.error('Cart is empty');
      return;
    }

    const newOrder = {
      customer: customerName,
      items: cartItems.map(item => ({
        name: item.name,
        quantity: item.quantity,
      })),
      totalPrice,
    };

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOrder),
      });
      if (!response.ok) {
        throw new Error('Failed to place order');
      }
      setSuccess(true);
      onPlaceOrder(); // Call the onPlaceOrder callback
    } catch (error) {
      console.error('Order placement failed:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <label>
        Name:
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </label>
      <button type="submit">Place Order</button>

      {success && <p>Order placed successfully!</p>}
    </form>
  );
};

export default CheckoutForm;

