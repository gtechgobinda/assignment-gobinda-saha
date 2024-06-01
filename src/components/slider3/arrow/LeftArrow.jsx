import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./leftArrow.scss";
const LeftArrow = ({ onClick,currentSlide }) => {
  return (
    <>
      <div className="left-arrow-container">
        <div className={currentSlide !==0?`arrow-icon-container`:`no-active`}>
          <RiArrowLeftSLine size={35} onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default LeftArrow;
