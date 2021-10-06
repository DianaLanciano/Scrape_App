import React from "react";
import { Link } from "react-router-dom";
import './styles.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/mybag">Bags</Link>
        </li>
        <li>
          <Link to="/shoes">Shoes</Link>
        </li>
        <li>
          <Link to="/more">More</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
