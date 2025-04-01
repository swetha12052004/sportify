import React from "react";
import { Star } from "lucide-react";
import ball1 from "../images/ball1.avif";
import ball2 from "../images/ball2.avif";
import ball3 from "../images/ball3.avif";
import ball4 from "../images/ball4.avif";

import "./Product.css";

const products = [
  {
    id: 1,
    name: "Football Ball Training Size 5 Above 12 Years",
    price: 399,
    rating: 4.4,
    image: ball1,
    tag: "",
  },
  {
    id: 2,
    name: "Football Training Ball F100 Size 4 White",
    price: 699,
    rating: 4.4,
    image: ball2, // ✅ Corrected
    tag: "10% Off",
  },
  {
    id: 3,
    name: "Football Club Ball Size 5 FIFA Basic F500 Red",
    price: 1099,
    rating: 4.4,
    image: ball3,
    tag: "Top rated",
  },
  {
    id: 4,
    name: "Football Ball Match Size 5 FIFA Basic F550",
    price: 1499,
    rating: 4.5,
    image: ball4,
    tag: "",
  },
];

export default function FootballStore() {
  return (
    <div className="container">
      <h2 className="title">Football BALL</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.tag && <span className="tag">{product.tag}</span>}
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-content">
              <div className="rating">
                <Star className="star-icon" size={16} />
                <span>{product.rating}</span>
              </div>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹ {product.price}</p>
              <button className="add-to-cart">ADD TO CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
