import React from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "./leftArrow.scss";
const LeftArrow = ({ onClick }) => {
  return (
    <>
      <div className="left-arrow-container">
        <RiArrowLeftSLine size={30} onClick={onClick} />
      </div>
    </>
  );
};

export default LeftArrow;
