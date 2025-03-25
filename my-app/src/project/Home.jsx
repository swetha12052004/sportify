import React from 'react'
import { useEffect,useState } from 'react';
export const Home = () => {

    const [slideIndex, setSlideIndex] = useState(0);
  const slides = ["img3.jpg", "fine.jpg", "back4.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    

    <div>
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-2xl font-bold">SPORTIFY</div>
        <input
          type="text"
          className="px-4 py-2 rounded-md text-black"
          placeholder="Search your gear..."
        />
      </nav>

      {/* Slideshow */}
      {/* <div className="relative w-full h-64">
        {slides.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={Slide ${index + 1}}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div> */}

      {/* Categories Section */}
      <div className="flex justify-around mt-4">
        <div className="text-center">
          <img src="smart.jpg" alt="Men" className="w-40 h-40 rounded-lg" />
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg">Shop for Men</button>
        </div>
        <div className="text-center">
          <img src="women.jpg" alt="Women" className="w-40 h-40 rounded-lg" />
          <button className="mt-2 bg-pink-500 text-white px-4 py-2 rounded-lg">Shop for Women</button>
        </div>
      </div>
    </div>
  );
}
export default Home;