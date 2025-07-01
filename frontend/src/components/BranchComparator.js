import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BranchComparator({ onClose }) {
  const [colleges, setColleges] = useState([]);
  const [branches1, setBranches1] = useState([]);
  const [branches2, setBranches2] = useState([]);

  const [college1, setCollege1] = useState('');
  const [branch1, setBranch1] = useState('');
  const [college2, setCollege2] = useState('');
  const [branch2, setBranch2] = useState('');

  const [result, setResult] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/comparator/colleges')
      .then(res => setColleges(res.data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    if (college1) {
      axios.get(`http://localhost:3000/api/comparator/branches?college=${college1}`)
        .then(res => setBranches1(res.data))
        .catch(err => console.error(err));
    }
  }, [college1]);

  useEffect(() => {
    if (college2) {
      axios.get(`http://localhost:3000/api/comparator/branches?college=${college2}`)
        .then(res => setBranches2(res.data))
        .catch(err => console.error(err));
    }
  }, [college2]);

  const handleCompare = () => {
    if (!college1 || !branch1 || !college2 || !branch2) {
      alert('Please select all fields');
      return;
    }

    axios.get(`http://localhost:3000/api/comparator/compare`, {
      params: { college1, branch1, college2, branch2 }
    })
      .then(res => setResult(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div className="modal">
      <div className="modal-content cool-form">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>Branch Comparator</h2>

        <div className="form-grid">
          <div>
            <label>Select College 1</label>
            <select value={college1} onChange={e => setCollege1(e.target.value)}>
              <option value="">-- Select College --</option>
              {colleges.map(c => (
                <option key={c.College_name} value={c.College_name}>{c.College_name}</option>
              ))}
            </select>

            <label>Select Branch 1</label>
            <select value={branch1} onChange={e => setBranch1(e.target.value)} disabled={!college1}>
              <option value="">-- Select Branch --</option>
              {branches1.map(b => (
                <option key={b.Branch_name} value={b.Branch_name}>{b.Branch_name}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Select College 2</label>
            <select value={college2} onChange={e => setCollege2(e.target.value)}>
              <option value="">-- Select College --</option>
              {colleges.map(c => (
                <option key={c.College_name} value={c.College_name}>{c.College_name}</option>
              ))}
            </select>

            <label>Select Branch 2</label>
            <select value={branch2} onChange={e => setBranch2(e.target.value)} disabled={!college2}>
              <option value="">-- Select Branch --</option>
              {branches2.map(b => (
                <option key={b.Branch_name} value={b.Branch_name}>{b.Branch_name}</option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={handleCompare} className="compare-btn styled-btn">Compare</button>

        {result.length > 0 && (
          <div className="result-table">
            <h3 style={{ marginTop: '20px' }}>Comparison Result</h3>
            <table>
              <thead>
                <tr>
                  <th>College</th>
                  <th>Branch</th>
                  <th>OR (Gen)</th>
                  <th>CR (Gen)</th>
                  <th>Avg Package</th>
                  <th>Placement %</th>
                  <th>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                {result.map((r, idx) => (
                  <tr key={idx}>
                    <td>{r.College_name}</td>
                    <td>{r.Branch_name}</td>
                    <td>{r.OR_General}</td>
                    <td>{r.CR_General}</td>
                    <td>{r.avg_package}</td>
                    <td>{r.placement_rate}%</td>
                    <td>{r.difficulty_level}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
