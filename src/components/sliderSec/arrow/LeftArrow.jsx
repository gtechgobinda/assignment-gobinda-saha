import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./leftArrow.scss";
const LeftArrow = ({ onClick, currentSlide, activeSlide, totalSlides }) => {
  console.log("left", activeSlide, totalSlides);
  return (
    <>
      {/* <div className="left-arrow-container"> */}
      <div
        className={`${
          activeSlide + 1 === totalSlides
            ? "arrow-hide"
            : "left-arrow-container"
        }`}
        onClick={onClick}
      >
        <div
          className={currentSlide !== 0 ? `arrow-icon-container` : `no-active`}
        >
          <RiArrowLeftSLine size={35} />
        </div>
      </div>
    </>
  );
};

export default LeftArrow;
