// src/components/SearchForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('');
  const [examType, setExamType] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:3000/api/colleges/recommend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rank, category, exam_type: examType }),
    });

    const data = await response.json();

    // Redirect to results page with data
    navigate('/results', { state: { colleges: data } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Rank" value={rank} onChange={(e) => setRank(e.target.value)} />
      <input placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <input placeholder="Exam Type" value={examType} onChange={(e) => setExamType(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
