import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./leftArrow.scss";
const LeftArrow = ({ onClick }) => {
  return (
    <>
      <div className="left-arrow-container">
        <div className="arrow-icon-container">
          <RiArrowLeftSLine size={35} onClick={onClick} />
        </div>
      </div>
    </>
  );
};

export default LeftArrow;
