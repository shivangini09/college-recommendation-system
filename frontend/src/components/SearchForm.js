// src/components/SearchForm.js
import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('General');
  const [examType, setExamType] = useState('JEE Mains');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/colleges/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rank: parseInt(rank), category, exam_type: examType }),
    });

    const data = await res.json();
    onSearch(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="number" value={rank} onChange={(e) => setRank(e.target.value)} placeholder="Enter your rank" required />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option>General</option>
        <option>OBC</option>
        <option>SC</option>
      </select>
      <select value={examType} onChange={(e) => setExamType(e.target.value)}>
        <option>JEE Mains</option>
        <option>JEE Advanced</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
