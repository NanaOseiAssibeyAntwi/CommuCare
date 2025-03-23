import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ cartItems, openCart }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
   
  };

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
          <li><Link to="/wishlist">❤️ Wishlist</Link></li>      
          <li><Link to="/ChatBox">ChatBox</Link></li>

        </ul>
      </nav>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>🔍</button>
      </div>

      {/* Cart Button with Item Count */}
      <div className="cart-icon" onClick={openCart}>
        🛒 Cart {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </div>
    </header>
  );
};

export default Header;
