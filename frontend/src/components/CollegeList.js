// src/components/CollegeList.js
import React, { useState } from 'react';

const CollegeList = ({ colleges }) => {
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
    <div>
      <div>
        <input
          placeholder="Filter by branch"
          value={branchFilter}
          onChange={(e) => setBranchFilter(e.target.value)}
        />
        <select onChange={(e) => setNirfRange(e.target.value)}>
          <option value="">All NIRF Ranks</option>
          <option value="under10">Under 10</option>
          <option value="10to50">10 to 50</option>
        </select>
      </div>

      <ul>
        {filtered.map((c, index) => (
          <li key={index}>
            <strong>{c.College_name}</strong> - {c.Branch_name} - NIRF: {c.NIRF_ranking}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollegeList;
