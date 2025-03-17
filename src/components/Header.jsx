import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🛒</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/food">Food</Link></li>
          <li><Link to="/clothes">Clothes</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
          <li><Link to="/health">Health & Medical</Link></li>
          <li><Link to="/others">Others</Link></li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button>🔍</button>
      </div>
      <div className="cart">🛒</div>
    </header>
  );
};

export default Header;
