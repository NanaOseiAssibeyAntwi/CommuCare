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
import Electronics from "./components/Electronics";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setIsCartOpen(true);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/" element={<><Banner /><ItemList addToCart={addToCart} /></>} />
        <Route path="/clothes" element={<Clothes addToCart={addToCart} />} />
        <Route path="/Food" element={<Food addToCart={addToCart} />} />
        <Route path="/Electronics" element={<Electronics addToCart={addToCart} />} />
      </Routes>
      {isCartOpen && <Cart cartItems={cartItems} onClose={() => setIsCartOpen(false)} />}
    </Router>
  );
}

export default App;