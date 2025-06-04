import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PreferenceForm({ onClose }) {
  const [rank, setRank] = useState('');
  const [category, setCategory] = useState('');
  const [examType, setExamType] = useState('');
  const [preferredBranches, setPreferredBranches] = useState('');
  const [preferredColleges, setPreferredColleges] = useState('');
  const [stateQuota, setStateQuota] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsedRank = parseInt(rank);
    if (isNaN(parsedRank) || parsedRank <= 0) {
      alert('Enter a valid rank.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/colleges/generate-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rank: parsedRank,
          category,
          exam_type: examType,
          preferred_branches: preferredBranches,
          preferred_colleges: preferredColleges,
          home_state: stateQuota,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`Error: ${error.message || 'Failed to generate list'}`);
        return;
      }

      const data = await response.json();
      navigate('/priority-list', { state: { priorityList: data } });
    } catch (err) {
      console.error('Request failed:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Smart Preference List Generator</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="JEE Rank"
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

          <input
            type="text"
            placeholder="Preferred Branches (comma-separated)"
            value={preferredBranches}
            onChange={(e) => setPreferredBranches(e.target.value)}
          />

          <input
            type="text"
            placeholder="Preferred Institutes (comma-separated)"
            value={preferredColleges}
            onChange={(e) => setPreferredColleges(e.target.value)}
          />

          <input
            type="text"
            placeholder="Home State Quota"
            value={stateQuota}
            onChange={(e) => setStateQuota(e.target.value)}
          />

          <div className="modal-buttons">
            <button type="submit">Generate</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PreferenceForm;

