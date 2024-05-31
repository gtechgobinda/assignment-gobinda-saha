import React, { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import "./slider.scss";
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipSlide, setFlipSlide] = useState(false);
  const handleFlipSlide = () => {
    setFlipSlide(!flipSlide);
  };
  const goToPrevious = () => {
    const isFirsrSlide = currentIndex === 0;
    const newIndex = isFirsrSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setFlipSlide(false);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setFlipSlide(false);
  };
  const slides = [
    {
      slideHeadText:
        "Eve has 9 apples and she was given 7 more. How many apples does she have now? ",
      url: "/assets/images/sliderImg1.png",
      imgText: "Eve has 16 apples now (9 + 7 = 16)",
    },
    {
      slideHeadText:
        "Lucas had 14 candies. He ate 5. How many candies does he have left?",
      url: "/assets/images/sliderImg2.png",
      imgText: "Lucas has 9 candies left (14 - 5 = 9)",
    },
    {
      slideHeadText:
        "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
      url: "/assets/images/sliderImg3.png",
      imgText: "There are 5 cats left in the room (11 - 6 = 5)",
    },
    {
      slideHeadText:
        "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
      url: "/assets/images/sliderImg4.png",
      imgText: "There are 5 cats left in the room (11 - 6 = 5)",
    },
    {
      slideHeadText:
        "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
      url: "/assets/images/sliderImg5.png",
      imgText: "There are 5 cats left in the room (11 - 6 = 5)",
    },
    {
      slideHeadText:
        "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
      url: "/assets/images/sliderImg5.png",
      imgText: "There are 5 cats left in the room (11 - 6 = 5)",
    },
  ];

  return (
    <>
      <div className="slider-container">
        <div className="slider__dots-numbering">
          <div className="slider___numbering">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex}>
                {currentIndex === slideIndex && (
                  <span>
                    {slideIndex + 1}/{slides.length}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="slider-dots">
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex}>
                <BsDot
                  color={`${currentIndex === slideIndex ? "white" : "gray"}`}
                  size={30}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="slider-sec">
          <div onClick={goToPrevious} className="slider__left-click">
            <div className="icon-container">
              <RiArrowLeftSLine size={30} />
            </div>
          </div>
          <div className="main__slider">
            {!flipSlide && (
              <div className="slider__head" onClick={() => handleFlipSlide()}>
                <p>{slides[currentIndex].slideHeadText}</p>
              </div>
            )}
            {flipSlide && (
              <div className="slider__tail" onClick={() => handleFlipSlide()}>
                <div className="slider__tail-inner">
                  <img src={`${slides[currentIndex].url}`} alt="img" />
                </div>
                <div className="slider__tail-text">
                  <p>{slides[currentIndex].imgText}</p>
                </div>
              </div>
            )}
          </div>
          <div onClick={goToNext} className="slider__right-click">
            <div className="icon-container">
              <RiArrowRightSLine size={30}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
