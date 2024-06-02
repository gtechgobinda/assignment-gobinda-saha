import React, { useState } from "react";
import "./slider3.scss";
import Slider from "react-slick";
import RightArrow from "./arrow/RightArrow.jsx";
import LeftArrow from "./arrow/LeftArrow.jsx";
const slideContent = [
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
  {
    slideHeadText:
      "There are 11 cats in a room. 6 cats leave. How many cats are left in the room?",
    url: "/assets/images/sliderImg5.png",
    imgText: "There are 5 cats left in the room (11 - 6 = 5)",
  },
];
const Slider3 = ({ onClick, className, style }) => {
  const [flipSlide, setFlipSlide] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const handleFlipSlide = () => {
    setFlipSlide(!flipSlide);
  };
  const totalSlides = slideContent.length;
  var settings = {
    arrows: true,
    // dots: true,
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
  };
  return (
    <>
      <div className="all-slider">
        {activeSlide + 1 !== totalSlides && (
          <p className="slider-pagination">
            {activeSlide + 1}/{slideContent.length}
          </p>
        )}
        <Slider {...settings}>
          {slideContent.map((items, index) => (
            <>
              {/* <div
                className={`main-slider ${flipSlide ? "flip" : ""}`}
                key={index}
              > */}
              {index < slideContent.length - 1 && (
                <div
                  className={`${
                    index === slideContent.length - 1
                      ? `last-slider`
                      : `main-slider ${flipSlide ? "flip" : ""}`
                  }`}
                  key={index}
                >
                  {!flipSlide && (
                    <div className="front-wrapper">
                      <div className="front" onClick={() => handleFlipSlide()}>
                        <div className="question">{items.slideHeadText}</div>
                        <div className="bottom-text">
                          <img src="/assets/images/tapIcon.svg" alt="icon" />
                          <p className="tap-text">Tap to reveal the answer</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {flipSlide && (
                    <div className="back-wrapper">
                      <div className="back" onClick={() => handleFlipSlide()}>
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
                    <p className="success-text">
                      Hope you learned something new!
                    </p>
                    <div className="play-again-btn">
                      <div className="play-again-icon-container">
                        <img src="/assets/images/playAgainIcon.svg" alt="" />
                      </div>
                      <p className="play-again-text">Play Again</p>
                    </div>
                  </div>
                </div>
              )}
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Slider3;
