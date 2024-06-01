import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./rightArrow.scss"
const RightArrow = ({ onClick }) => {
  return (
    <div className="right-arrow-container">
      <RiArrowRightSLine size={30} onClick={onClick} />
    </div>
  );
};

export default RightArrow;
