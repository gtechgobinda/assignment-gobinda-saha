import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import "./slider.scss";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirsrSlide = currentIndex === 0;
    const newIndex = isFirsrSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const slides = [
    { url: "src/assets/images/sliderImg1.png" },
    { url: "src/assets/images/sliderImg2.png" },
    { url: "src/assets/images/sliderImg3.png" },
    { url: "src/assets/images/sliderImg4.png" },
    { url: "src/assets/images/sliderImg5.png" },
  ];
  return (
    <>
      <div className="slider-container">
        <div className="slider-dots">
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <BsDot />
            </div>
          ))}
        </div>
        <div className="slider-sec">
          <div onClick={goToPrevious}>
            <RiArrowLeftSLine />
          </div>
          <div>
            <img src={`${slides[currentIndex].url}`} alt="img" />
          </div>
          <div onClick={goToNext}>
            <RiArrowRightSLine />
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
