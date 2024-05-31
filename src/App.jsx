import React, { useState } from "react";
import "./app.scss";
import { GoUnmute, GoMute } from "react-icons/go";
import AllSlider from "./components/AllSlider.jsx";
const App = () => {
  const [mute, setMute] = useState(false);
  const handleMute = () => {
    setMute(!mute);
  };
  return (
    <>
      <div className="bg-img">
        <img src="/assets/images/mainImg.png" alt="bg-img" />
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
        {/* <div className="slider-container">
          <AllSlider />
        </div> */}
      </div>
      <br />
      <br />
      <br />
      <br />
      <AllSlider />
    </>
  );
};

export default App;
