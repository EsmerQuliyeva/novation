import React from "react";
import IntroPage from "../Components/IntroPage/IntroPage";
import Company from "../Components/Company/Company";
import NewsSlider from "../Components/NewsSlider/NewsSlider";
import Comment from "../Components/Comment/Comment";
import LastNews from "../Components/LastNews/LastNews";
const Home = () => {
  return (
    <div className="container">
      <IntroPage />
      <Company />
      <NewsSlider />
      <Comment />
      <LastNews />
    </div>
  );
};

export default Home;
