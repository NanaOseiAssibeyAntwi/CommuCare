import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ItemList from "./components/ItemList";
import Clothes from "./components/Clothes";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Food from "./components/Food";
import ChatBox from "./components/ChatBox";
import Wishlist from "./components/Wishlist";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [notification, setNotification] = useState(""); 

  const addToCart = (item) => {
    if (cartItems.length >= 2) {
      alert("You can only add up to 2 items in the cart.");
      return;
    }

    setCartItems((prevCart) => [...prevCart, item]);
    setNotification(`${item.name} added to cart`);

    setTimeout(() => {
      setNotification("");
    }, 2000);
  };

  const removeFromCart = (itemName) => {
    setCartItems(cartItems.filter((item) => item.name !== itemName));
  };

  return (
    <Router>
      <Header cartItems={cartItems} openCart={() => setIsCartOpen(true)} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/" element={<><Banner /><ItemList addToCart={addToCart} /></>} />
        <Route path="/clothes" element={<Clothes addToCart={addToCart} />} />
        <Route path="/Food" element={<Food addToCart={addToCart} />} />
        <Route path="/ChatBox" element={<ChatBox addToCart={addToCart} />} />
        <Route path="/Wishlist" element={<Wishlist addToCart={addToCart} />} />
      </Routes>
      {isCartOpen && <Cart cartItems={cartItems} onClose={() => setIsCartOpen(false)} removeFromCart={removeFromCart} />}
      

      {notification && <div className="notification">{notification}</div>}
    </Router>
  );
}

export default App;
