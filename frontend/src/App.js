// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import CollegeResults from './components/CollegeResults';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchForm />} />
        <Route path="/results" element={<CollegeResults />} />
      </Routes>
    </Router>
  );
}

export default App;
