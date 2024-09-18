import React, { useEffect, useState } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/orders`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const ordersData = await response.json();
        setOrders(ordersData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Order History</h2>
      {error && <p>Error fetching orders: {error}</p>}
      {orders.length === 0 ? (
        <p>No past orders available.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order.id}>
              <p>Order ID: {order.id}</p>
              <p>Customer: {order.customer}</p>
              <p>Items: {order.items.map(item => `${item.name} (x${item.quantity})`).join(', ')}</p>
              <p>Total Price: ${order.totalPrice}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderHistory;
