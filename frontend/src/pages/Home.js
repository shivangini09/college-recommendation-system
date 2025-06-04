import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import PreferenceForm from '../components/PreferenceForm';
import '../index.css';

function Home() {
  const lines = [
    "Create Your Ideal College Priority List with Ease",
    "Real-Time News for Smarter Counselling Decisions",
    "Explore and Compare Engineering Streams Side-by-Side",
    "Navigate JEE Counselling with Confidence."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false); // Fix: define setShowForm

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/priority-list"; // Or use useNavigate
  };

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
        <div className="hero-top">
          <div className="hero-heading">
            <h1>{lines[currentIndex]}</h1>
          </div>
        </div>
        <div className="hero-bottom"></div>
        <div className="search-form-wrapper">
          <SearchForm />
        </div>
      </div>

      <div className="features">
        <div className="feature-box">
          <h3>Branch Comparator</h3>
          <p>Compare different branches side by side.</p>
        </div>
        <div className="feature-box" onClick={() => setShowForm(true)} style={{ cursor: 'pointer' }}>
          <h3>Preference List Generator</h3>
          <p>Auto-generate a smart preference list.</p>
        </div>
        <div className="feature-box">
          <h3>News</h3>
          <p>Stay updated with admission & exam updates.</p>
        </div>
      </div>

      {/* Preference Form Modal */}
      {showForm && (
        <PreferenceForm
          onClose={() => setShowForm(false)}
          onSubmit={handleFormSubmit}
        />
      )}

      {/* Meet the Developer Section */}
      <div className="developer-section">
        <h2>Meet the Developer</h2>
        <img src={'/photo_ss.jpeg'} alt="Shivangini Rathore" className="developer-image" />
        <p>
          Hi, I'm Shivangini Rathore, a third-year Physics student at IIT Jodhpur with a passion for Quantum Technologies and Data Science. 
          I built this platform to help students navigate the complexity of college admissions with smart tools, real-time insights, and a clean UI. 
          I hope it makes your journey smoother!
        </p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} College Recommender. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;



