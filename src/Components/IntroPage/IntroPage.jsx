import React from "react";
import "./IntroPage.css";
import introPageDetail from "../../assets/intro-page-detail.gif";
const IntroPage = () => {
  return (
    <div className="intro-page-container">
      <div className="intro-page-text">
        <h1>Innovasiya Mərkəzi <br></br>Sabahın texnologiyaları</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Illo
          sint, mollitia perspiciatis velit aperiam porro,<br></br> repudiandae
          ullam delectus deleniti saepe temporibus similique<br></br> minus
          exercitationem ipsam doloribus nesciunt odio quo quos.
        </p>
      </div>
      <div className="background-container">
        <img
          src={introPageDetail}
          alt="background-detail"
          className="background-detail"
        />
      </div>
    </div>
  );
};

export default IntroPage;
