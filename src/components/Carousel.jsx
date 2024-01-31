

import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);

  const handlePrevClick = () => {
    if (currImg > 0) {
      setCurrImg(currImg - 1);
    }
  };

  const handleNextClick = () => {
    if (currImg < images.length - 1) {
      setCurrImg(currImg + 1);
    }
  };

  return (
    <div className="carousel">
      <div
        className="carouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div className="left" onClick={handlePrevClick}>
          <ArrowBackIosIcon style={{ fontSize: 50 }} />
        </div>
        <div className="center">
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </div>
        <div className="right" onClick={handleNextClick}>
          <ArrowForwardIosIcon style={{ fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
