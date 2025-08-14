import React from "react";
import "./Cslider.css";

// Import your images
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";


export default function Cslider() {
  const images = [
    img1, img2, img3, img4, img5,
    
  ];

  return (
    <div className="banner">
      <div className="slider" style={{ "--quantity": images.length }}>
        {images.map((src, index) => (
          <div
            key={index}
            className="item"
            style={{ "--position": index + 1 }}
          >
            <img src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
