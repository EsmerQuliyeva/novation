import React, { useEffect, useState } from "react";
import "./TrendingNews.css";
import first from "../../assets/trends/first.jpg";
import second from "../../assets/trends/second.jpg";
import third from "../../assets/trends/third.jpg";
import fourth from "../../assets/trends/fourth.jpg";
import { db } from "../../config/firebase";
import { collection, getDocs } from "firebase/firestore";
const TrendingNews = () => {
  const [trendCategory, setTrendCategory] = useState([]);
  const fetchCategory = async () => {
    const categoryRefTrending = collection(db, "categories");
    const categoryTrendingSnap = await getDocs(categoryRefTrending);
    const categoryInfo = categoryTrendingSnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTrendCategory(categoryInfo);
  };
  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <div className="trending-news-container">
      <div className="trending-news-general">
        <div className="trending-news-list">
          <h4>Trending Now</h4>
          <div className="trending-news-all-list">
            <div className="trending-news">
              <div className="trending-news-image">
                <img src={first} alt="trend" className="trending-news-img" />
              </div>
              <div className="trending-news-descp">
                <p>
                  Cargill şirkəti beş innovativ layihəsi ilə 2025 Edison
                  Mükafatını qazanır.
                </p>
                <div className="trending-news-time">
                  <span>2 saat əvvəl</span>
                  <span>7 aprel 2015</span>
                </div>
              </div>
            </div>
            <div className="trending-news">
              <div className="trending-news-image">
                <img src={second} alt="trend" className="trending-news-img" />
              </div>
              <div className="trending-news-descp">
                <p>
                  Milan Dizayn Həftəsi 2025 texnologiya və lüks dizaynı bir
                  araya gətirir.
                </p>
                <div className="trending-news-time">
                  <span>3 saat əvvəl</span>
                  <span>7 aprel 2015</span>
                </div>
              </div>
            </div>
            <div className="trending-news">
              <div className="trending-news-image">
                <img src={third} alt="trend" className="trending-news-img" />
              </div>
              <div className="trending-news-descp">
                <p>
                  Milan Dizayn Həftəsi 2025 texnologiya və lüks dizaynı bir
                  araya gətirir.
                </p>
                <div className="trending-news-time">
                  <span>4 saat əvvəl</span>
                  <span>7 aprel 2015</span>
                </div>
              </div>
            </div>
            <div className="trending-news">
              <div className="trending-news-image">
                <img src={fourth} alt="trend" className="trending-news-img" />
              </div>
              <div className="trending-news-descp">
                <p>
                  Böyük Britaniya kosmosda təhlükəsizliyi təmin etmək üçün
                  qlobal tənzimləyici rolunu hədəfləyir.
                </p>
                <div className="trending-news-time">
                  <span>5 saat əvvəl</span>
                  <span>7 aprel 2015</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tags-category-container">
          <h4>Tags Category</h4>
          <div className="tags-category-list">
            {trendCategory.map((category) => {
              return <p>{category.category}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNews;
