

// export default Home;



import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import '../index.css';

function Home() {
  const lines = [
    "Create Your Ideal College Priority List with Ease",
    "Real-Time News for Smarter Counselling Decisions",
    "Explore and Compare Engineering Streams Side-by-Side",
    "Navigate JEE Counselling with Confidence."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lines.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="navbar">
        <div>College Recommender</div>
        <div>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/compare">Compare Branch</a>
        </div>
      </div>

      <div className="hero">
        {/* Image background (top half) */}
        <div className="hero-top">
          <div className="hero-heading">
            <h1>{lines[currentIndex]}</h1>
          </div>
        </div>

        {/* White background (bottom half) */}
        <div className="hero-bottom"></div>

        {/* Overlapping form */}
        <div className="search-form-wrapper">
          <SearchForm />
        </div>
      </div>

      {/* Features Section */}
      <div className="features">
        <div className="feature-box">
          <h3>Branch Comparator</h3>
          <p>Compare different branches side by side.</p>
        </div>
        <div className="feature-box">
          <h3>Preference List Generator</h3>
          <p>Auto-generate a smart preference list.</p>
        </div>
        <div className="feature-box">
          <h3>News</h3>
          <p>Stay updated with admission & exam updates.</p>
        </div>
      </div>
    </>
  );
}

export default Home;
