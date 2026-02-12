import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./NewsSlider.css";
import Slide from "../Slide/Slide";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // className={`${className} ${styles.arrow} ${styles.nextArrow}`}
      // style={{ ...style }}
      onClick={onClick}
    >
      next
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      // className={`${className} ${styles.arrow} ${styles.prevArrow}`}
      // style={{ ...style }}
      onClick={onClick}
    >
      prev
    </div>
  );
};

const NewsSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1175,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1139,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="news-slider-container">
      <h2>
        Fikirlərinizlə Gələcəyi
        <br /> Formalaşdırın!
      </h2>
      <div className="sliders">
        <Slider {...settings}>
          {[...Array(6)].map((_, i) => (
            <div key={i}>
              <Slide />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewsSlider;
