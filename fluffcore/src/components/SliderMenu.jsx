// SliderMenu.jsx
import React from 'react';
import './SliderMenu.css';
import { Link } from 'react-router-dom';
const SliderMenu = ({ isOpen, onClose }) => {
  const leftMenuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/About' }
  ];

  const rightMenuItems = [
    { name: 'Blog', href: '/Blog' },
    { name: 'Contact', href: '/Contact' },
    { name: 'Pre-book', href: '/Booking' }
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className={`menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      {/* Left Side Menu */}
      <div className={`menu-slider left-slider ${isOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <div className="menu-header">
            <h2>Navigate</h2>
          </div>
          <nav className="menu-nav">
            {leftMenuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="menu-item"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={onClose}
              >
                {/* <span className="menu-number">0{index + 1}</span> */}
                <span className="menu-text">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Right Side Menu */}
      <div className={`menu-slider right-slider ${isOpen ? 'active' : ''}`}>
        <div className="menu-content">
          <div className="menu-header">
            <h2>Connect</h2>
          </div>
          <nav className="menu-nav">
            {rightMenuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="menu-item"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                onClick={onClose}
              >
                {/* <span className="menu-number">0{index + 3}</span> */}
                <span className="menu-text">{item.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Close Button */}
      <button 
        className={`close-btn ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      >
        <div className="close-icon"></div>
      </button>
    </>
  );
};

export default SliderMenu;