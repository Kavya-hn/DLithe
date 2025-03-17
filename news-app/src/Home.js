import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [breakingNews, setBreakingNews] = useState([]);
  const API_KEY = "3de01fbfa67a40338204feef08a6c0ea";
  const API_URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
  const BREAKING_NEWS_URL = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    
    const fetchBreakingNews = async () => {
      try {
        const response = await axios.get(BREAKING_NEWS_URL);
        setBreakingNews(response.data.articles.slice(0, 5));
      } catch (error) {
        console.error("Error fetching breaking news:", error);
      }
    };

    fetchNews();
    fetchBreakingNews();
  }, []);

  return (
    <div className="news-container full-page">
      <nav className="navbar">
        <h2>NewsApp</h2>
        
        <div>
          <button className="nav-button">Login</button>
          <button className="nav-button">Register</button>
        </div>
      </nav>
      
      <marquee className="breaking-news">
        {breakingNews.map((news, index) => (
          <span key={index}>{news.title} | </span>
        ))}
      </marquee>
      
      <header className="hero-section">
        <h1>Welcome to NewsApp</h1>
        <p>Stay updated with the latest news from around the world.</p>
      </header>
      
      <main className="content">
        <h1>Latest News</h1>
        <div className="news-list">
          {articles.map((article, index) => (
            <div key={index} className="news-item">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="news-image" />
              )}
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p><strong>Category:</strong> {article.source.name}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
              </a>
            </div>
          ))}
        </div>
      </main>
      
      <section className="categories">
        <h2>Categories</h2>
        <ul>
          <li>Politics</li>
          <li>Healthcare</li>
          <li>Adventure</li>
          <li>Today's Novel</li>
          <li>Technology</li>
          <li>Job Offers</li>
          <li>Stocks</li>
          <li>Crime</li>
          <li>Historical News</li>
        </ul>
      </section>
      
      <section className="about-us">
        <h2>About Us</h2>
        <p>Welcome to NewsApp, your reliable source for the latest news from around the world.</p>
       
      </section>
      
      <footer className="footer">
        <p>&copy; 2025 NewsApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
