import React, { useEffect, useState } from 'react';
import SnackItem from './SnackItem';
import TicketItem from './TicketItem';

const Home = ({ addToCart }) => {
  const [snacks, setSnacks] = useState([]);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/snacks');
      const snacksData = await response.json();
      setSnacks(snacksData);

      const ticketResponse = await fetch('http://localhost:5000/tickets');
      const ticketsData = await ticketResponse.json();
      setTickets(ticketsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Available Tickets</h1>
      <div className="items-container">
        {tickets.map(ticket => (
          <TicketItem key={ticket.id} ticket={ticket} addToCart={addToCart} />
        ))}
      </div>

      <h1>Available Snacks</h1>
      <div className="items-container">
        {snacks.map(snack => (
          <SnackItem key={snack.id} snack={snack} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
