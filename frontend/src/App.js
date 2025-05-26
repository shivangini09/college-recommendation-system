// src/App.js
import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import CollegeList from './components/CollegeList';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div>
      <h1>College Recommendation System</h1>
      <SearchForm onSearch={setResults} />
      <CollegeList colleges={results} />
    </div>
  );
}

export default App;
