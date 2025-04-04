import React, { useState, useEffect } from "react";
import "./Home module.css";
import img1 from "../images/img3.jpg";
import img2 from "../images/fine.jpg";
import img3 from "../images/back4.jpg";

const images = [img1, img2, img3];

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
      <nav className="navbar">
        <div className="logo">
          <h1>SPORTIFY</h1>
        </div>
        <ul className="nav-links">
          <li className="dropdown">
            <button className="dropbtn">All Sports</button>
            <div className="dropdown-content">
              <a href="#">Football</a>
              <a href="#">Hockey</a>
              <a href="#">Cricket</a>
              <a href="#">Basketball</a>
              <a href="#">Badminton</a>
              <a href="#">Swimming</a>
              <a href="#">Volleyball</a>
              <a href="#">Cycling</a>
              <a href="#">Running</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">Men's Collection</button>
            <div className="dropdown-content">
              <a href="#">Men Topwear</a>
              <a href="#">Men Bottomwear</a>
              <a href="#">Men Footwear</a>
              <a href="#">Men Jackets</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">Women's Collection</button>
            <div className="dropdown-content">
              <a href="#">Women Topwear</a>
              <a href="#">Women Bottomwear</a>
              <a href="#">Women Footwear</a>
              <a href="#">Women Jackets</a>
            </div>
          </li>

          <li className="dropdown">
            <button className="dropbtn">Kid's Collection</button>
            <div className="dropdown-content">
              <a href="#">Kids Topwear</a>
              <a href="#">Kids Bottomwear</a>
              <a href="#">Kids Footwear</a>
              <a href="#">Kids Activewear</a>
              <a href="#">Kids Accessories</a>
              <a href="#">Kids Sports Equipment</a>
            </div>
          </li>
        </ul>
        <input type="text" placeholder="Search your gear..." className="search-bar" />
      </nav>

      {/* Slideshow Section */}
      <div className="slideshow">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          ></div>
        ))}

        {/* Slideshow Text Content */}
        <div className="slide-content">
          <h1>SPORTIFY</h1>

          <p>🔥 Fuel Your Passion. Elevate Your Game! 🔥</p>
          
          <a href="/Login" className="shop-now">Shop Now</a>
        </div>
      </div>
    </div>
  );
};

export default App;
