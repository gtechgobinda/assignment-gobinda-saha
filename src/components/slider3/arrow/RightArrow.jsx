import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./rightArrow.scss"
const RightArrow = ({ onClick }) => {
  return (
    <div className="right-arrow-container">
        <div className="arrow-icon-container">
          <RiArrowRightSLine size={35} onClick={onClick} />
        </div>
    </div>
  );
};

export default RightArrow;
