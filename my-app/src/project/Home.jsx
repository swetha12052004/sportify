import React, { useEffect, useState } from "react";
import img1 from '../images/img3.jpg';
import img2 from '../images/fine.jpg';
import img3 from '../images/back4.jpg';
import './Home.css';

export default function Home ()  {
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = [img1,img2,img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    document.body.style.background = "none";  // Remove previous background
    document.body.style.backgroundColor = "black";  // Set new background color

    return () => 
      document.body.style.background = ""; 
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div  className="home-page">
      <nav>
        <div className="logo">SPORTIFY</div>
        <div className="nav-menu">
          {["ALL SPORTS", "MEN'S COLLECTION", "WOMEN'S COLLECTION", "KID'S COLLECTION"].map((category, idx) => (
            <div className="dropdown" key={idx}>
              <button className="dropbtn"><b>{category}</b></button>
              <div className="dropdown-content">
                {/* Add category links dynamically */}
              </div>
            </div>
          ))}
        </div>
        <div className="search-bar">
          <input type="text" className="search-input" placeholder="Search your gear..." />
        </div>
      </nav>

      <div className="slideshow-container">
        <div className="slide-content">
          <h1>SPORTIFY</h1>
          <p className="tagline">🔥 Fuel Your Passion. Elevate Your Game! 🔥</p>
          <a href="finallogin.html">
            <button className="shop-now-btn">Shop Now</button>
          </a>
        </div>
        {slides.map((slide, index) => (
          <img
            key={index}
            className="slides fade"
            src={slide}
            alt={`Sportify Image ${index + 1}`}
            style={{ display: index === slideIndex ? "block" : "none" }}
          />
        ))}
      </div>

      <div className="shop-category">
        {["smart.jpg", "women.jpg"].map((img, index) => (
          <div className="category-frame" key={index}>
            <img src={img} alt={`Category ${index + 1}`} />
            <button className="shop-btn">{index === 0 ? "SHOP FOR MEN" : "SHOP FOR WOMEN"}</button>
          </div>
        ))}
      </div>

      <div className="favorite-sports">
        <h2>YOUR FAVORITE SPORTS</h2>
        <div className="sports-container">
          <button className="prev-btn" onClick={() => document.querySelector('.sports-list').scrollBy({ left: -150, behavior: 'smooth' })}>&#10094;</button>
          <div className="sports-list">
            {/* Add sports items dynamically */}
          </div>
          <button className="next-btn" onClick={() => document.querySelector('.sports-list').scrollBy({ left: 150, behavior: 'smooth' })}>&#10095;</button>
        </div>
      </div>

      <section className="clearance-sale">
        <h2>Clearance Sale</h2>
        <div className="clearance-container">
          <button className="prev-btn" onClick={() => document.querySelector('.clearance-list').scrollBy({ left: -250, behavior: 'smooth' })}>&#10094;</button>
          <div className="clearance-list">
            {/* Add clearance products dynamically */}
          </div>
          <button className="next-btn" onClick={() => document.querySelector('.clearance-list').scrollBy({ left: 250, behavior: 'smooth' })}>&#10095;</button>
        </div>
      </section>
    </div>
  );
};
