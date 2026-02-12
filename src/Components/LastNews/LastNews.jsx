import React, { useEffect, useState } from "react";
import newsImg from "../../assets/last-news.jpg";
import "./LastNews.css";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
const LastNews = () => {
  const [lastNews, setLastNews] = useState([]);
  const fetchLastNews = async () => {
    const lastNewsRef = collection(db, "articles");
    const lastNewsSnap = await getDocs(lastNewsRef);
    const lastNewsList = lastNewsSnap.docs.map((news) => ({
      id: news.id,
      ...news.data(),
    }));
    setLastNews(lastNewsList);
    console.log(lastNewsList);
  };
  useEffect(() => {
    fetchLastNews();
  }, []);
  if (lastNews.length === 0) {
    return <p>Loading...</p>;
  }
  return (
    <div className="last-news-container">
      <h3 className="last-news-container-title">Son xəbərlər</h3>
      <div className="last-news-cards">
        {lastNews.map((news) => {
          return (
            <div className="news-card">
              <div className="news-card-img-part">
                <img className="news-card-img" src={newsImg} alt="news" />
              </div>
              <div className="news-card-content">
                <h3>{news.name}</h3>
                <p>{news.content.split(".").slice(0, 2).join(".")}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LastNews;
