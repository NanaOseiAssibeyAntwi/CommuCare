import React from "react";
import Item from "./Item";
import iron from "../assets/iron.png";
import washingMachine from "../assets/washingmachine.png";
import chair from "../assets/chair.png";
import scarf from "../assets/scarf.jpg";
import bulb from "../assets/bulb.jpg";
import blanket from "../assets/blanket.png";
import shelf from "../assets/shelf.png";
import candlewax from "../assets/candlewax.jpg";
import teddybear from "../assets/teddybear.jpg";
import pillow from "../assets/pillow.jpg";

const items = [
  { name: "Iron", img: iron },
  { name: "Washing Machine", img: washingMachine },
  { name: "Chair", img: chair },
  { name: "Scarf", img: scarf },
  { name: "Electric Bulb", img: bulb },
  { name: "Blanket", img: blanket },
  { name: "Shelf", img: shelf },
  { name: "Candle Wax", img: candlewax },
  { name: "Teddy Bear", img: teddybear },
  { name: "Pillow", img: pillow },
];

const ItemList = ({ addToCart }) => {
  return (
    <section className="items">
      <div className="item-grid">
        {items.map((item, index) => (
          <Item key={index} name={item.name} img={item.img} addToCart={() => addToCart(item)} />
        ))}
      </div>
    </section>
  );
};

export default ItemList;
