import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to='/' className="btn">Home</Link>
      </li>
      <li>
        <Link to='/about' className="btn">About</Link>
      </li>
      <Link to='/people' className="btn">People</Link>
    </ul>
  )
};

export default Navbar;
