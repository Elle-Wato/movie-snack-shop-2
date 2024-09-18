import React from 'react';
import { Link } from 'react-router-dom';
//import './NavBar.css'; // Import your CSS for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">Movie Snack Shop</h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
          <li>
            <Link to="/order-history">Order History</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
