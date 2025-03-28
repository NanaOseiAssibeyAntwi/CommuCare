import React from "react";

const Cart = ({ cartItems, onClose, removeFromCart }) => {
  return (
    <div className="cart-overlay">
      <div className="cart-popup">
        <h3>Shopping Cart</h3>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.img} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.name)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Cart;
