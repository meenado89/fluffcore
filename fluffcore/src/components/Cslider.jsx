import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";

export default function Cslider() {
  const slides = [
    { id: 1, image: image1, title: "Playful Pastels" },
    { id: 2, image: image2, title: "Dreamy Blues" },
    { id: 3, image: image3, title: "Minty Fresh" },
    { id: 4, image: image4, title: "Sunny Glow" }
  ];

  const [angle, setAngle] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);

  const radius = 100; // distance from center
  const centerX = 150; // half container width
  const centerY = 150; // half container height

  const rotatePrev = () => setAngle((prev) => prev - 360 / slides.length);
  const rotateNext = () => setAngle((prev) => prev + 360 / slides.length);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
    startAngle.current = angle;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const delta = e.clientX - startX.current;
    setAngle(startAngle.current + delta / 2); // rotation speed
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100">
      <div
        className="relative"
        style={{ width: "250px", height: "50px" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {slides.map((slide, index) => {
          const slideAngle = (index * (360 / slides.length) + angle) * (Math.PI / 180);
          const x = centerX + radius * Math.cos(slideAngle) - 75; // subtract half slide size
          const y = centerY + radius * Math.sin(slideAngle) - 75;

          return (
            <div
              key={slide.id}
              className="absolute w-[50px] h-[50px] rounded-xl shadow-lg overflow-hidden border border-white/30 backdrop-blur-sm transition-transform duration-300"
              style={{
                transform: `translate(${x}px, ${y}px)`
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>

      {/* <div className="flex gap-6 mt-10">
        <button
          onClick={rotatePrev}
          className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={rotateNext}
          className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <ChevronRight />
        </button>
      </div> */}
    </div>
  );
}
