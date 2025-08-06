import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
import { useNavigate } from "react-router-dom";
const AboutSlider = ({ items = [] }) => {
  const [currentState, setCurrentState] = useState('');
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailRef = useRef(null);
  const timeRef = useRef(null);
  const runTimeOutRef = useRef(null);
  const runNextAutoRef = useRef(null);

  const timeRunning = 3000;
  const timeAutoNext = 8000;
const navigate = useNavigate();
  // Default items if none provided
  const defaultItems = [
    {
      image: img1,
      author: "FluffCore",
      title: "DESIGN SLIDER",
      topic: "PLUSHY",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.",
      thumbnailTitle: "Name Slider",
      thumbnailDescription: "Description"
    },
    {
      image: img2,
      author: "FluffCore",
      title: "DESIGN SLIDER",
      topic: "PLUSHY",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.",
      thumbnailTitle: "Name Slider",
      thumbnailDescription: "Description"
    },
    {
      image: img3,
      author: "FluffCore",
      title: "DESIGN SLIDER",
      topic: "PLUSHY",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.",
      thumbnailTitle: "Name Slider",
      thumbnailDescription: "Description"
    },
    {
      image: img4,
      author: "FluffCore",
      title: "DESIGN SLIDER",
      topic: "PLUSHY",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.",
      thumbnailTitle: "Name Slider",
      thumbnailDescription: "Description"
    },

    {
      image: img5,
      author: "FluffCore",
      title: "DESIGN SLIDER",
      topic: "PLUSHY",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.",
      thumbnailTitle: "Name Slider",
      thumbnailDescription: "Description"
    },

    {
      image: img6,
      author: "FluffCore",
      title: "DESIGN SLIDER",
      topic: "PLUSHY",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam.",
      thumbnailTitle: "Name Slider",
      thumbnailDescription: "Description"
    }
  ];

  const slideItems = items.length > 0 ? items : defaultItems;
  const [slides, setSlides] = useState(slideItems);

  useEffect(() => {
    // Auto-play functionality
    runNextAutoRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAutoRef.current);
      clearTimeout(runTimeOutRef.current);
    };
  }, []);

  const showSlider = (type) => {
    setCurrentState(type);

    if (type === 'next') {
      setSlides(prevSlides => {
        const newSlides = [...prevSlides];
        const firstSlide = newSlides.shift();
        newSlides.push(firstSlide);
        return newSlides;
      });
    } else {
      setSlides(prevSlides => {
        const newSlides = [...prevSlides];
        const lastSlide = newSlides.pop();
        newSlides.unshift(lastSlide);
        return newSlides;
      });
    }

    clearTimeout(runTimeOutRef.current);
    runTimeOutRef.current = setTimeout(() => {
      setCurrentState('');
    }, timeRunning);

    clearTimeout(runNextAutoRef.current);
    runNextAutoRef.current = setTimeout(() => {
      showSlider('next');
    }, timeAutoNext);
  };

  const handleNext = () => {
    showSlider('next');
  };

  const handlePrev = () => {
    showSlider('prev');
  };

  return (
    <div>
      {/* <header>
        <nav>
          <a href="">Home</a>
          <a href="">Contacts</a>
          <a href="">Pre-Order</a>
        </nav>
      </header> */}

      <div className={`carousel ${currentState}`} ref={carouselRef}>
        <div className="list" ref={sliderRef}>
          {slides.map((item, index) => (
            <div key={`${item.title}-${index}`} className="item">
              <img src={item.image} alt={item.title} />
              <div className="content">
                <div className="author">{item.author}</div>
                <div className="title">{item.title}</div>
                <div className="topic">{item.topic}</div>
                <div className="des">{item.description}</div>
                <div className="buttons">
                  <button onClick={() => navigate("/Booking")}>Pre-Order</button>
                  <button onClick={() => navigate("/Contact")}>Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail" ref={thumbnailRef}>
          {slides.map((item, index) => (
            <div key={`thumb-${item.title}-${index}`} className="item">
              <img src={item.image} alt={item.thumbnailTitle} />
              <div className="content">
                <div className="title">{item.thumbnailTitle}</div>
                <div className="description">{item.thumbnailDescription}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev" onClick={handlePrev}>‹</button>
          <button id="next" onClick={handleNext}>›</button>
        </div>

        <div className="time" ref={timeRef}></div>
      </div>
    </div>
  );
};

export default AboutSlider;