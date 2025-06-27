import React, { useState, useEffect } from 'react';
import NewsCard from '../components/newscard';
// from dotenv import load_dotenv
// require('dotenv').config();

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  const API_KEY = process.env.REACT_APP_API_KEY;
  

  const categories = [
    { label: 'Home', value: 'all' },
    { label: 'JEE Mains', value: 'jee mains' },
    { label: 'JEE Advanced', value: 'jee advanced' },
    { label: 'IIT', value: 'iit' },
    { label: 'JOSAA', value: 'josaa counselling' },
  ];

  const fetchNews = async (keyword) => {
    setLoading(true);
    try {
      const query = keyword === 'all' 
        ? 'jee OR iit OR "jee advanced" OR "josaa counselling"' 
        : keyword;

      const res = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&language=en&apiKey=${API_KEY}`
      );
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(activeCategory);
  }, [activeCategory]);

  return (
    <div>
      {/* Nav Bar */}
      <nav style={{ background: '#f1f1f1', padding: '1rem', display: 'flex', gap: '1rem', borderBottom: '1px solid #ddd' }}>
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            style={{
              background: activeCategory === cat.value ? '#007bff' : '#fff',
              color: activeCategory === cat.value ? '#fff' : '#333',
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              transition: '0.3s'
            }}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* News Section */}
      <div style={{ padding: '2rem' }}>
        <h1>{activeCategory === 'all' ? 'All News' : `News on ${activeCategory.toUpperCase()}`}</h1>

        {loading ? (
          <p>Loading news...</p>
        ) : (
          <>
            {articles.length > 0 ? (
              articles.map((article, index) => (
                <NewsCard key={index} article={article} />
              ))
            ) : (
              <p>No news found for this category.</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default News;
