import React, { useState } from "react";
import { slideContent } from "./components/content/content.jsx";
const useSliderhook = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [goToSlide, setGoToSlide] = useState(false);
  const totalSlides = slideContent.length;
  const handelGoToSlide = () => {
    setGoToSlide(!goToSlide);
    if (!goToSlide) {
      setActiveSlide(0);
    }
  };
  return {
    activeSlide,
    setActiveSlide,
    totalSlides,
    goToSlide,
    setGoToSlide,
    handelGoToSlide,
  };
};

export default useSliderhook;
