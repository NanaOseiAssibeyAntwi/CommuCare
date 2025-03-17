import React from "react";

const Item = ({ name, img, addToCart }) => {
  return (
    <div className="item">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Item;
