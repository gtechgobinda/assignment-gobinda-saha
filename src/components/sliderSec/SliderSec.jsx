import React, { useState } from "react";
import "./sliderSec.scss";
import Slider from "react-slick";
import RightArrow from "./arrow/RightArrow.jsx";
import LeftArrow from "./arrow/LeftArrow.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slideContent } from "../content/content.jsx";
const SliderSec = ({
  onClick,
  className,
  style,
  activeSlide,
  setActiveSlide,
  totalSlides,
  goToSlide,
  setGoToSlide,
  handelGoToSlide,
}) => {
  const [flipSlide, setFlipSlide] = useState(
    Array(slideContent.length).fill(false)
  );
  const handleFlipSlide = (index) => {
    const updatedFlipSlide = [...flipSlide];
    updatedFlipSlide[index] = !updatedFlipSlide[index];
    setFlipSlide(updatedFlipSlide);
  };
  var settings = {
    arrows: true,
    dots: activeSlide + 1 === totalSlides ? false : true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <RightArrow
        onClick={onClick}
        className={className}
        style={style}
        activeSlide={activeSlide}
        totalSlides={totalSlides}
      />
    ),
    prevArrow: (
      <LeftArrow
        onClick={onClick}
        activeSlide={activeSlide}
        totalSlides={totalSlides}
      />
    ),
    beforeChange: (current, next) => {
      setActiveSlide(next);
      console.log(activeSlide + 1);
    },
    responsive: [
      {
        breakpoint: 441,
        settings: {
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="all-slider">
        {!goToSlide && (
          <>
            <div className="play-sec">
              <p className="play-sec-text1">
                Addition and Subtraction Facts within 20
              </p>
              <p className="play-sec-text2">
                Test your knowledge with the following questions, tap a card to
                flip it and uncover the answer, good luck!
              </p>
              <div className="play-start-btn" onClick={() => handelGoToSlide()}>
                <div className="play-start-icon-container">
                  <img src="/assets/images/playIcon.svg" alt="" />
                </div>
                <p className="play-start-text">Let's Play</p>
              </div>
            </div>
          </>
        )}
        {goToSlide && (
          <>
            {activeSlide + 1 !== totalSlides && (
              <p className="slider-pagination">
                {activeSlide + 1} / {slideContent.length - 1}
              </p>
            )}
            <Slider {...settings}>
              {slideContent.map((items, index) => (
                <>
                  {index < slideContent.length - 1 && (
                    <div
                      className="main-slider-wrapper 
                        tilted"
                    >
                      <div
                        className={`${
                          index === slideContent.length - 1
                            ? `last-slider`
                            : `main-slider ${flipSlide[index] ? "flip" : ""}`
                        }`}
                        key={index}
                      >
                        {!flipSlide[index] && (
                          <div className="front-wrapper">
                            <div
                              className="front"
                              onClick={() => handleFlipSlide(index)}
                            >
                              <div className="question">
                                {items.slideHeadText}
                              </div>
                              <div className="bottom-text">
                                <img
                                  src="/assets/images/tapIcon.svg"
                                  alt="icon"
                                />
                                <p className="tap-text">
                                  Tap to reveal the answer
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                        {flipSlide[index] && (
                          <div className="back-wrapper">
                            <div
                              className="back"
                              onClick={() => handleFlipSlide(index)}
                            >
                              <div className="img-container">
                                <img
                                  src={items.url}
                                  alt="icon"
                                  className="slider-img"
                                />
                              </div>
                              <div className="img-text">
                                <p>{items.imgText}</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {index === slideContent.length - 1 && (
                    <div className="last-slide-wrapper">
                      <div className="last-slide">
                        <div className="success-img-container">
                          <img
                            src="/assets/images/successTick.svg"
                            alt=""
                            className="success-tick"
                          />
                        </div>
                        <p
                          className="success-text"
                          style={{ fontFamily: '"Inter", sans-serif' }}
                        >
                          Hope you learned something new!
                        </p>
                        <div
                          className="play-again-btn"
                          onClick={() => handelGoToSlide()}
                        >
                          <div className="play-again-icon-container">
                            <img
                              src="/assets/images/playAgainIcon.svg"
                              alt=""
                            />
                          </div>
                          <p
                            className="play-again-text"
                            style={{ fontFamily: '"Inter", sans-serif' }}
                          >
                            Play Again
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </Slider>
          </>
        )}
      </div>
    </>
  );
};

export default SliderSec;
