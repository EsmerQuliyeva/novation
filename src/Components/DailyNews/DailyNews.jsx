import React, { useState, useEffect } from "react";
import "./DailyNews.css";
import novationIntro from "../../assets/novation.jpg";
import first from "../../assets/news-list/first.jpg";
import second from "../../assets/news-list/second.jpg";
import third from "../../assets/news-list/third.jpg";
import fourth from "../../assets/news-list/fourth.jpg";
import { db } from "../../config/firebase";
import { getDocs, collection, getDoc } from "firebase/firestore";
const DailyNews = () => {
  const [dailyNews, setDailyNews] = useState([]);
  const fetchDailyNews = async () => {
    const dailyNewsRef = collection(db, "articles");
    const dailyNewsSnap = await getDocs(dailyNewsRef);
    const dailyNewsContent = dailyNewsSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDailyNews(dailyNewsContent);
  };
  useEffect(() => {
    fetchDailyNews();
  }, []);
  return (
    <div className="daily-news-container">
      <h2>Xəbərlər</h2>
      <div className="daily-news-general">
        <div className="daily-news-intro">
          <img src={novationIntro} alt="novation" className="novation-intro" />
          <p>Hər zaman bir addım öndə – Novation ilə gündəmdə qalın!</p>
        </div>
        <div className="daily-news-list">
          {dailyNews.map((news) => {
            return (
              <div className="daily-news">
                <div className="daily-news-image">
                  <img
                    src={first}
                    alt="daily-news"
                    className="daily-news-img"
                  />
                </div>
                <div className="daily-news-description">
                  <h4>{news.name}</h4>
                  <p>{news.content.split(".")[0] + "."}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DailyNews;
