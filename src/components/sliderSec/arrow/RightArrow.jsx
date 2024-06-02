import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./rightArrow.scss";
const RightArrow = ({ onClick, activeSlide, totalSlides }) => {
  return (
    // <div className="right-arrow-container">
    <div
      className={`${
        activeSlide + 1 === totalSlides ? "arrow-hide" : "right-arrow-container"
      }`}
      onClick={onClick}
    >
      <div className="arrow-icon-container">
        <RiArrowRightSLine size={35} />
      </div>
    </div>
  );
};

export default RightArrow;
