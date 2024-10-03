import React, { useState } from "react";
import "./WeDo.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slides from "../../data/wedoData";

const WeDo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;
  const visibleSlides = 3; // Number of slides visible at any given time

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - visibleSlides : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - visibleSlides ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="wedoBody"  id="wedo">
        <div className="bgLayer"></div>
        <div className="bgLayertwo"></div>
      <div className="container">
        <div className="wedoContent">
          <div className="wedoContent-item">
            <h1>What we do with Blockchain DLT/ Bank</h1>
            <p>
              Join a fast-growing community of developers and innovators
              connected all over the world, building the new era of the
              internet.
            </p>
            <div>
              <FaArrowLeft className="arrow" onClick={handlePrevSlide} />
              <FaArrowRight className="arrow" onClick={handleNextSlide} />
            </div>
          </div>

          <div className="wedoContent-item">
            <div className="slider">
              <div
                className="slides-wrapper"
                style={{
                    transform: `translateX(-${currentSlide * (342 + 24)}px)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div className="slide" key={index}>
                    <div className="imgStyle">
                      <img src={slide.image} alt={slide.title} />
                    </div>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeDo;
