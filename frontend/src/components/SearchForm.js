// // src/components/SearchForm.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function SearchForm() {
//   const [rank, setRank] = useState('');
//   const [category, setCategory] = useState('');
//   const [examType, setExamType] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Ensure rank is a positive number
//     const parsedRank = parseInt(rank);
//     if (isNaN(parsedRank) || parsedRank <= 0) {
//       alert('Please enter a valid positive rank.');
//       return;
//     }

//     const response = await fetch('http://localhost:3000/api/colleges/recommend', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ rank: parsedRank, category, exam_type: examType }),
//     });

//     const data = await response.json();
//     navigate('/results', { state: { colleges: data } });
//   };

//   return (
//     <form className="search-form" onSubmit={handleSubmit}>
//   <input
//     type="number"
//     min="1"
//     placeholder="Rank"
//     value={rank}
//     onChange={(e) => setRank(e.target.value)}
//     required
//   />

//   <select value={category} onChange={(e) => setCategory(e.target.value)} required>
//     <option value="">Select Category</option>
//     <option value="General">General</option>
//     <option value="OBC">OBC</option>
//     <option value="SC">SC</option>
//   </select>

//   <select value={examType} onChange={(e) => setExamType(e.target.value)} required>
//     <option value="">Select Exam Type</option>
//     <option value="JEE Mains">JEE Mains</option>
//     <option value="JEE Advanced">JEE Advanced</option>
//   </select>

//   <button type="submit">Get Started</button>
// </form>

//   );
// }

// export default SearchForm;

// src/components/SearchForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('');
  const [examType, setExamType] = useState('');
  const navigate = useNavigate();

  // Railway backend URL
  const API_URL = 'https://college-recommendation-system-production.up.railway.app/api/colleges';

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure rank is a positive number
    const parsedRank = parseInt(rank);
    if (isNaN(parsedRank) || parsedRank <= 0) {
      alert('Please enter a valid positive rank.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rank: parsedRank, category, exam_type: examType }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.message || 'Failed to fetch colleges'}`);
        return;
      }

      const data = await response.json();
      navigate('/results', { state: { colleges: data } });
    } catch (err) {
      console.error('Request failed:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="number"
        min="1"
        placeholder="Rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
        required
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        <option value="General">General</option>
        <option value="OBC">OBC</option>
        <option value="SC">SC</option>
      </select>

      <select value={examType} onChange={(e) => setExamType(e.target.value)} required>
        <option value="">Select Exam Type</option>
        <option value="JEE Mains">JEE Mains</option>
        <option value="JEE Advanced">JEE Advanced</option>
      </select>

      <button type="submit">Get Started</button>
    </form>
  );
}

export default SearchForm;
