import React, { useState, useEffect } from "react";
import "./Home.css";

const images = [
  "../images/img3.jpg",  // Ensure images are inside the 'public/' folder
  "../images/fine.jpg",
  "../images/back4.jpg",
];

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
      <nav className="navbar">
        <h1 className="logo">SPORTIFY</h1>
        <ul className="nav-links">
          <li><a href="#">All Sports</a></li>
          <li><a href="#">Men's Collection</a></li>
          <li><a href="#">Women's Collection</a></li>
          <li><a href="#">Kid's Collection</a></li>
        </ul>
        <input type="text" placeholder="Search your gear..." className="search-bar" />
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
