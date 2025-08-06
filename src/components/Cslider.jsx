import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, ShoppingBag } from 'lucide-react';

const CircularPortfolioSite = () => {
  const [currentAngle, setCurrentAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [lastAngle, setLastAngle] = useState(0);
  const containerRef = useRef(null);

  const slides = [
    {
      id: 1,
      title: "MANGA",
      number: "01",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
      color: "from-pink-400 to-purple-600",
      angle: 0
    },
    {
      id: 2,
      title: "ARTBOOK", 
      number: "02",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
      color: "from-blue-400 to-cyan-600",
      angle: 72
    },
    {
      id: 3,
      title: "FASHION",
      number: "03", 
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
      color: "from-green-400 to-emerald-600",
      angle: 144
    },
    {
      id: 4,
      title: "DIGITAL",
      number: "04",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=600&fit=crop", 
      color: "from-orange-400 to-red-600",
      angle: 216
    },
    {
      id: 5,
      title: "CULTURE",
      number: "05",
      image: "https://images.unsplash.com/photo-1481833761820-0509d3217039?w=400&h=600&fit=crop",
      color: "from-violet-400 to-indigo-600",
      angle: 288
    }
  ];

  const getCurrentSlideIndex = () => {
    const normalizedAngle = ((currentAngle % 360) + 360) % 360;
    return Math.round(normalizedAngle / 72) % slides.length;
  };

  const getAngleFromMouse = (x, y) => {
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return Math.atan2(y - centerY, x - centerX) * (180 / Math.PI);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const angle = getAngleFromMouse(e.clientX, e.clientY);
    setDragStart({ x: e.clientX, y: e.clientY });
    setLastAngle(angle);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const currentMouseAngle = getAngleFromMouse(e.clientX, e.clientY);
    let angleDiff = currentMouseAngle - lastAngle;
    
    // Handle angle wrapping
    if (angleDiff > 180) angleDiff -= 360;
    if (angleDiff < -180) angleDiff += 360;
    
    setCurrentAngle(prev => prev + angleDiff * 0.5);
    setLastAngle(currentMouseAngle);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    snapToNearestSlide();
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    setIsDragging(true);
    const angle = getAngleFromMouse(touch.clientX, touch.clientY);
    setDragStart({ x: touch.clientX, y: touch.clientY });
    setLastAngle(angle);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const touch = e.touches[0];
    const currentMouseAngle = getAngleFromMouse(touch.clientX, touch.clientY);
    let angleDiff = currentMouseAngle - lastAngle;
    
    if (angleDiff > 180) angleDiff -= 360;
    if (angleDiff < -180) angleDiff += 360;
    
    setCurrentAngle(prev => prev + angleDiff * 0.5);
    setLastAngle(currentMouseAngle);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    snapToNearestSlide();
  };

  const snapToNearestSlide = () => {
    const targetIndex = getCurrentSlideIndex();
    const targetAngle = targetIndex * 72;
    setCurrentAngle(targetAngle);
  };

  const rotateToSlide = (index) => {
    setCurrentAngle(index * 72);
  };

  const rotateNext = () => {
    const nextIndex = (getCurrentSlideIndex() + 1) % slides.length;
    rotateToSlide(nextIndex);
  };

  const rotatePrev = () => {
    const prevIndex = (getCurrentSlideIndex() - 1 + slides.length) % slides.length;
    rotateToSlide(prevIndex);
  };

  const currentSlide = slides[getCurrentSlideIndex()];

  return (
    <div className="h-screen w-full bg-stone-100 overflow-hidden relative">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-stone-100/90 backdrop-blur-sm">
        <div className="flex items-center space-x-8">
          <div className="text-4xl font-bold tracking-wider">W</div>
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:opacity-60 transition-opacity">Index</a>
            <a href="#" className="hover:opacity-60 transition-opacity">Shop</a>
            <a href="#" className="hover:opacity-60 transition-opacity">The Book</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-6">
          <Menu className="w-6 h-6 md:hidden" />
          <div className="flex items-center space-x-2">
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm">Bag</span>
            <span className="text-sm">0</span>
          </div>
        </div>
      </header>

      {/* Instructions */}
      <div className="fixed top-1/4 left-8 z-40 text-sm text-stone-600 max-w-xs">
        <p className="font-light leading-relaxed">
          Scroll or Drag sideward<br />
          to navigate.
        </p>
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-8 left-8 z-40 flex space-x-4">
        <button
          onClick={rotatePrev}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={rotateNext}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-stone-800 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="fixed bottom-8 right-8 z-40 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => rotateToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === getCurrentSlideIndex() ? 'bg-black' : 'bg-stone-300'
            }`}
          />
        ))}
      </div>

      {/* Main Circular Container */}
      <div
        ref={containerRef}
        className={`relative h-full w-full flex items-center justify-center ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Background Giant Numbers */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div 
            className="text-[25rem] font-bold text-stone-200 select-none leading-none transition-all duration-700 ease-out"
            style={{
              transform: `rotate(${-currentAngle}deg)`,
              opacity: 0.1
            }}
          >
            {currentSlide.number}
          </div>
        </div>

        {/* Circular Navigation Ring */}
        <div 
          className="relative w-[600px] h-[600px] transition-transform duration-700 ease-out"
          style={{ transform: `rotate(${-currentAngle}deg)` }}
        >
          {slides.map((slide, index) => {
            const angle = slide.angle;
            const radius = 250;
            const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
            const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
            
            return (
              <div
                key={slide.id}
                className="absolute w-32 h-40 transition-all duration-700 ease-out"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(${x - 64}px, ${y - 80}px) rotate(${currentAngle}deg)`,
                  opacity: index === getCurrentSlideIndex() ? 1 : 0.4,
                  scale: index === getCurrentSlideIndex() ? 1.2 : 0.8
                }}
              >
                <div 
                  className="w-full h-full rounded-lg shadow-lg overflow-hidden"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-t ${slide.color} opacity-20`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-6 max-w-md">
            <div 
              className="text-8xl font-bold tracking-wider text-black transition-all duration-700 ease-out"
              key={currentSlide.number}
            >
              {currentSlide.number}
            </div>
            
            <div className="space-y-4">
              <h1 
                className="text-4xl font-light tracking-widest text-stone-800 transition-all duration-700 ease-out"
                key={currentSlide.title}
              >
                {currentSlide.title}
              </h1>
              
              <div className="flex justify-center space-x-2 mt-4">
                {currentSlide.title.split('').map((letter, i) => (
                  <div 
                    key={i}
                    className="w-8 h-8 bg-white border border-stone-300 rounded flex items-center justify-center text-sm font-medium"
                    style={{ 
                      animationDelay: `${i * 0.1}s`,
                      animation: 'fadeInUp 0.6s ease-out forwards'
                    }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              
              <button className="mt-8 px-8 py-3 bg-black text-white text-sm font-medium tracking-wider hover:bg-stone-800 transition-colors">
                EXPLORE
              </button>
            </div>
          </div>
        </div>

        {/* Floating Character Element */}
        <div 
          className={`absolute w-20 h-20 bg-gradient-to-br ${currentSlide.color} rounded-full shadow-lg transition-all duration-700 ease-out`}
          style={{
            top: '20%',
            right: '15%',
            transform: `rotate(${currentAngle * 0.5}deg) scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})`,
            opacity: 0.8
          }}
        />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CircularPortfolioSite;