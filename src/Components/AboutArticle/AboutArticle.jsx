import React, { useEffect, useState } from "react";
import "./AboutArticle.css";
import robot from "../../assets/robot.jpg";
import { db } from "../../config/firebase";
import { doc, getDocs, collection, getDoc } from "firebase/firestore";
const AboutArticle = () => {
  const [articles, setArticles] = useState([]);

  const fetchInfo = async () => {
    const articlesInfo = collection(db, "articles");
    const articlesSnap = await getDocs(articlesInfo);

    const dataArticles = articlesSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setArticles(dataArticles);
  };
  useEffect(() => {
    fetchInfo();
  }, []);

  if (articles.length === 0) {
    return <p>Loading...</p>;
  }
  const articleIndex = articles.length - 1;
  const article = articles[articleIndex];
  return (
    <div className="about-container">
      <h1>{article.name}</h1>
      <div className="about-article-container">
        {/* <div className="about-article-image"> */}
        {/* <img src={robot} alt="novation" className="about-article-img" /> */}
        {/* </div> */}
        <div className="about-article-text">
          {/* <img src={robot} alt="novation" className="about-article-img" /> */}
          <h2 className="intro-text">
            <b>
              Müasir robotlar insan hərəkətlərini təqlid edərək gündəlik
              tapşırıqları yerinə yetirə bilir.
            </b>
          </h2>
          <p className="side-paragraph">
            <img src={robot} alt="novation" className="about-article-img" />
            {article.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutArticle;
