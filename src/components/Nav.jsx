import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav-container'>
      <ul>
        <li>
          {/* Use Link instead of a for navigation */}
          <Link to="/home">Home</Link>
        </li>
        <li>
          {/* Use Link instead of a for navigation */}
          <Link to="/explanation">Explanation</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;