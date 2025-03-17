import React from "react";
import Item from "./Item";
import boysjacket from "../assets/boysjacket.jpg";
import dress from "../assets/dress.jpg";
import sneaker from "../assets/sneaker.jpg";
import highheels from "../assets/highheels.jpg";
import jeans from "../assets/jeans.jpg";
import blacksneaker from "../assets/blacksneaker.jpg";
import longdress from "../assets/longdress.jpg";
import jacket from "../assets/jacket.jpg";
import drip from "../assets/drip.jpg";
import akata from "../assets/akata.jpg";

const items = [
  { name: "boysjacket", img: boysjacket},
  { name: "dress", img: dress },
  { name: "sneaker", img: sneaker },
  { name: "highheels", img: highheels },
  { name: "jeans", img: jeans },
  { name: "blacksneaker", img: blacksneaker },
  { name: "longdress", img: longdress },
  { name: "jacket", img: jacket },
  { name: "drip", img: drip },
  { name: "akata", img: akata }, 
];

const Clothes = ({ addToCart }) => {
  return (
    <section className="items">
      <h2 className="section-title">Clothing & Accessories</h2>
      <div className="item-grid">
        {items.map((item, index) => (
          <Item key={index} name={item.name} img={item.img} addToCart={() => addToCart(item)} />
        ))}
      </div>
    </section>
  );
};

export default Clothes;
