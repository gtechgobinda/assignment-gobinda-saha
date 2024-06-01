import React, { useState } from "react";
import "./app.scss";
import { GoUnmute, GoMute } from "react-icons/go";
import AllSlider from "./components/AllSlider.jsx";
import Slider from "./components/slider/Slider.jsx";
import Slider2 from "./components/slider2/Slider2.jsx";
import Slider3 from "./components/slider3/Slider3.jsx";
const App = () => {
  const [mute, setMute] = useState(false);
  const handleMute = () => {
    setMute(!mute);
  };
  return (
    <>
      <div className="bg-img">
        <img src="/assets/images/mainImg.png" alt="bg-img" className="main-bg-img"/>
        <div className="header-items">
          <div className="left-item">
            <div className="img-container">
              <img src="/assets/images/companyLogo.svg" alt="logo" />
            </div>
            <div className="company-name">
              <p>Cloudifyapp Pvt. Ltd.</p>
              <p>By John Doe</p>
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
          {/* <Slider /> */}
          {/* <Slider2/> */}
          <Slider3/>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* <AllSlider /> */}
      {/* <Slider2/> */}
      <Slider3/>
    </>
  );
};

export default App;
