import React, { useState, useEffect } from "react";
import "./Home.css";
import img1 from "../images/img3.jpg";
import img2 from "../images/fine.jpg";
import img3 from "../images/back4.jpg";

const images = [img1, img2, img3];


// const images = [
//   "../images/img3.jpg",  // Ensure images are inside the 'public/' folder
//   "../images/fine.jpg",
//   "../images/back4.png",
// ];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]); // Dependency added to update images

  return (
    <div>
      {/* Navbar */}
      {/* <nav className="navbar"> */}
      <nav>
        <h1 className="logo">SPORTIFY</h1>
        <div className="navbar">
        <ul className="nav-links">
          <li><a href="#">All Sports</a></li>
          <li><a href="#">Men's Collection</a></li>
          <li><a href="#">Women's Collection</a></li>
          <li><a href="#">Kid's Collection</a></li>
        </ul>
        <input type="text" placeholder="Search your gear..." className="search-bar" />
        </div>
      </nav>

      {/* Slideshow Section */}
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}

        {/* Slideshow Text Content */}
        <div className="slide-content">
          <h1>SPORTIFY</h1>
          <p>🔥 Fuel Your Passion. Elevate Your Game! 🔥</p>
          
          <a href="/shop" className="shop-now">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default App;
