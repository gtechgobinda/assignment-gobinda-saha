import React, {useState } from "react";
import "./app.scss";
import { GoUnmute, GoMute } from "react-icons/go";
import useSliderhook from "./hook.js";
import SliderSec from "./components/slider3/SliderSec.jsx";
const App = (props) => {
  const {
    activeSlide,
    setActiveSlide,
    totalSlides,
    goToSlide,
    setGoToSlide,
    handelGoToSlide,
  } = useSliderhook();
  const [mute, setMute] = useState(false);
  const handleMute = () => {
    setMute(!mute);
  };
  const isLastSlide = activeSlide === totalSlides - 1;
  return (
    <>
      <div className={`bg-img `}>
        <img
          src="/assets/images/mainImg.png"
          alt="bg-img"
          className={`main-bg-img ${
            !goToSlide || isLastSlide ? "animation-added" : ""
          }`}
        />
        <div className="header-items">
          <div className="left-item">
            <div className="img-container">
              <img src="/assets/images/companyLogo.svg" alt="logo" />
            </div>
            <div className="company-name">
              <p style={{ fontFamily: '"Inter", sans-serif', fontWeight: '600' }}>
                Cloudifyapp Pvt. Ltd.
              </p>
              <p style={{ fontFamily: '"Inter", sans-serif', fontWeight: '400',fontSize:'11px' }}>
                By John Doe
              </p>
            </div>
          </div>
          <div className="right-item">
            {!mute && (
              <GoUnmute
                color="white"
                size={20}
                className="sound-icon"
                onClick={() => handleMute()}
              />
            )}
            {mute && (
              <GoMute
                color="white"
                size={20}
                className="sound-icon"
                onClick={() => handleMute()}
              />
            )}
          </div>
        </div>
        <div className="slider-container">
          <SliderSec
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            totalSlides={totalSlides}
            goToSlide={goToSlide}
            setGoToSlide={setGoToSlide}
            handelGoToSlide={handelGoToSlide}
          />
        </div>

      </div>
    </>
  );
};

export default App;
