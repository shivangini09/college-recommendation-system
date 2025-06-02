import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const CollegeResults = () => {
  const location = useLocation();
  const colleges = location.state?.colleges || [];

  const [branchFilter, setBranchFilter] = useState('');
  const [nirfRange, setNirfRange] = useState('');

  const filtered = colleges.filter((college) => {
    return (
      (!branchFilter || college.Branch_name.toLowerCase().includes(branchFilter.toLowerCase())) &&
      (!nirfRange ||
        (nirfRange === 'under10' && college.NIRF_ranking <= 10) ||
        (nirfRange === '10to50' && college.NIRF_ranking > 10 && college.NIRF_ranking <= 50))
    );
  });

  return (
    <div className="results-container">
      <h2>Eligible Colleges</h2>

      <div className="results-content">
        {/* Left Filters Panel */}
        <div className="filters-panel">
          <input
            placeholder="Filter by branch"
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
          />
          <select onChange={(e) => setNirfRange(e.target.value)} value={nirfRange}>
            <option value="">All NIRF Ranks</option>
            <option value="under10">Under 10</option>
            <option value="10to50">10 to 50</option>
          </select>
        </div>

        {/* Right College List */}
        <div className="college-list">
          {filtered.length > 0 ? (
            <ul>
              {filtered.map((c, index) => (
                <li key={index} className="college-item">
                  <strong>{c.College_name}</strong><br />
                  Branch: {c.Branch_name}<br />
                  NIRF: {c.NIRF_ranking}<br />
                  City: {c.City}, State: {c.State}<br />
                  <span>Opening Rank: {c.Opening_Rank}</span><br />
                  <span>Closing Rank: {c.Closing_Rank}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No matching colleges found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeResults;
