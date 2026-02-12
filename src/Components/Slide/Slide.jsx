import React from "react";
import "./Slide.css";
import sliderImg from "../../assets/slider-image.png";
import authorImg from "../../assets/author.jpg";
const Slide = () => {
  return (
    <div className="slide-container">
      <img src={sliderImg} alt="slider-img" className="slider-img" />
      <p>
        Şirkətinizin yenilikçi yanaşması və müasir texnologiyalardan istifadə
        etməsi bizi çox təsirləndirdi. Göstərdiyiniz həllər işimizi xeyli
        asanlaşdırdı və effektivliyimizi artırdı. Uğurlarınızın davamını
        diləyirik!
      </p>
      <div className="news-author">
        <div className="news-author-img">
          <img src={authorImg} className="news-author-image" alt="author" />
        </div>
        <div className="author-description">
          <h4>Orxan Babayev</h4>
          <span style={{ color: "#E5E5E5  " }}>
            Principal Software Engineer,Vercel
          </span>
        </div>
      </div>
    </div>
  );
};

export default Slide;
