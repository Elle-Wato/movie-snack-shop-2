import React from 'react';

function TicketItem({ ticket, addToCart }) {
  return (
    <div className="item ticket-item">
      <img src={ticket.poster} alt={ticket.title} />
      <h3>{ticket.title}</h3>
      <p>Showtime: {ticket.showtime}</p>
      <p>Runtime: {ticket.runtime} minutes</p>
      <p>Description: {ticket.description}</p>
      <button onClick={() => addToCart(ticket)}>Add to Cart</button>
    </div>
  );
}

export default TicketItem;