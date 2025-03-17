import React from "react";
import Item from "./Item";
import VegiSoup from "../assets/VegiSoup.jpg";
import chickenskewer from "../assets/chickenskewer.jpg";
import brandedabokyi from "../assets/brandedabokyi.jpg";
import frieds from "../assets/frieds.jpg";
import roastedmeat from "../assets/roastedmeat.jpg";
import beafwithfrieds from "../assets/beafwithfrieds.jpg";
import shawarma from "../assets/shawarma.jpg";
import friedchicken from "../assets/friedchicken.jpg";
import fufu from "../assets/fufu.jpg";
import brandedbeaf from "../assets/brandedbeaf.jpg";

const items = [
  { name: "VegiSoup", img: VegiSoup},
  { name: "chickenskewer", img: chickenskewer },
  { name: "brandedabokyi", img: brandedabokyi },
  { name: "frieds", img: frieds },
  { name: "roastedmeat", img: roastedmeat },
  { name: "beafwithfrieds", img: beafwithfrieds },
  { name: "shawarma", img: shawarma },
  { name: "friedchicken", img: friedchicken },
  { name: "fufu", img: fufu },
  { name: "brandedbeaf", img: brandedbeaf }, 
];

const Clothes = ({ addToCart }) => {
  return (
    <section className="items">
      <h2 className="section-title">Food Items</h2>
      <div className="item-grid">
        {items.map((item, index) => (
          <Item key={index} name={item.name} img={item.img} addToCart={() => addToCart(item)} />
        ))}
      </div>
    </section>
  );
};

export default Clothes;
