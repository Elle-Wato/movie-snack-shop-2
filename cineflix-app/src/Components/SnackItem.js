import React from 'react';

function SnackItem({ snack, addToCart }) {
  return (
    <div className="item snack-item">
      <img src={snack.image} alt={snack.name} />
      <h3>{snack.name}</h3>
      <p>Price: ${snack.price}</p>
      <p>Description: {snack.description}</p>
      <button onClick={() => addToCart(snack)}>Add to Cart</button>
    </div>
  );
}

export default SnackItem;