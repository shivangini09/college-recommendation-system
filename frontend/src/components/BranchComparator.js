// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function BranchComparator({ onClose }) {
//   const [colleges] = useState([
//     "IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kanpur", "IIT Kharagpur",
//     "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT (BHU) Varanasi",
//     "IIT (ISM) Dhanbad", "IIT Bhubaneswar", "IIT Gandhinagar", "IIT Ropar",
//     "IIT Patna", "IIT Indore", "IIT Mandi", "IIT Jodhpur", "IIT Bhilai",
//     "IIT Palakkad", "IIT Tirupati", "IIT Jammu", "IIT Goa", "IIT Dharwad",
//     "National Institute of Technology, Tiruchirappalli",
//     "National Institute of Technology, Karnataka, Surathkal",
//     "National Institute of Technology, Rourkela",
//     "National Institute of Technology, Warangal",
//     "National Institute of Technology, Calicut",
//     "National Institute of Technology, Durgapur",
//     "National Institute of Technology, Silchar",
//     "Malaviya National Institute of Technology, Jaipur",
//     "National Institute of Technology, Kurukshetra",
//     "Dr. B R Ambedkar National Institute of Technology, Jalandhar",
//     "Sardar Vallabhbhai National Institute of Technology, Surat",
//     "National Institute of Technology, Hamirpur",
//     "Visvesvaraya National Institute of Technology, Nagpur",
//     "National Institute of Technology, Raipur",
//     "National Institute of Technology, Jamshedpur",
//     "National Institute of Technology, Patna",
//     "National Institute of Technology, Srinagar",
//     "National Institute of Technology, Agartala",
//     "National Institute of Technology, Meghalaya",
//     "National Institute of Technology, Manipur",
//     "National Institute of Technology, Mizoram",
//     "National Institute of Technology, Nagaland",
//     "National Institute of Technology, Arunachal Pradesh",
//     "National Institute of Technology, Sikkim",
//     "National Institute of Technology, Uttarakhand",
//     "National Institute of Technology, Delhi",
//     "National Institute of Technology, Goa",
//     "National Institute of Technology, Puducherry",
//     "National Institute of Technology, Andhra Pradesh",
//     "Motilal Nehru National Institute of Technology, Allahabad",
//     "Maulana Azad National Institute of Technology, Bhopal",
//     "Indian Institute of Engineering Science and Technology, Shibpur",
//     "Indian Institute of Information Technology, Hyderabad",
//     "Indian Institute of Information Technology, Allahabad",
//     "Indian Institute of Information Technology, Guwahati",
//     "Indian Institute of Information Technology, Jabalpur",
//     "Indian Institute of Information Technology, Kancheepuram",
//     "Indian Institute of Information Technology, Kota",
//     "Indian Institute of Information Technology, Nagpur",
//     "Indian Institute of Information Technology, Sri City",
//     "Indian Institute of Information Technology, Vadodara",
//     "Indian Institute of Information Technology, Bhubaneswar",
//     "Indian Institute of Information Technology, Una",
//     "Indian Institute of Information Technology, Sonepat",
//     "Indian Institute of Information Technology, Surat",
//     "Indian Institute of Information Technology, Lucknow",
//     "Indian Institute of Information Technology, Dharwad",
//     "Indian Institute of Information Technology, Tiruchirappalli",
//     "Indian Institute of Information Technology, Agartala",
//     "Indian Institute of Information Technology, Guwahati (IIITG - PPP)",
//     "Indian Institute of Information Technology, Ranchi",
//     "Indian Institute of Information Technology, Raichur",
//     "Indian Institute of Information Technology, Amritsar",
//     "Indian Institute of Information Technology, Kalyani",
//     "Indian Institute of Information Technology, Una (Himachal Pradesh)",
//     "Indian Institute of Information Technology, Manipur",
//     "Indian Institute of Information Technology, Bhopal",
//     "Indian Institute of Information Technology, Bhagalpur",
//     "Indian Institute of Information Technology, Nagaland",
//     "Indian Institute of Information Technology, Sri City (Andhra Pradesh)",
//     "Indian Institute of Information Technology, Kottayam",
//     "Indian Institute of Information Technology, Shimla",
//     "Indian Institute of Information Technology, Bodh Gaya",
//     "Indian Institute of Information Technology, Jammu",
//     "Indian Institute of Information Technology, Lucknow (UP)",
//     "Indian Institute of Information Technology, Sonepat (Haryana)"
//   ]);

//   const [branches1, setBranches1] = useState([]);
//   const [branches2, setBranches2] = useState([]);
//   const [college1, setCollege1] = useState('');
//   const [branch1, setBranch1] = useState('');
//   const [college2, setCollege2] = useState('');
//   const [branch2, setBranch2] = useState('');
//   const [result, setResult] = useState([]);

//   useEffect(() => {
//     if (college1) {
//       axios.get(`http://localhost:3000/api/comparator/branches?college=${encodeURIComponent(college1)}`)
//         .then(res => setBranches1(res.data))
//         .catch(err => console.error(err));
//       setBranch1('');
//     }
//   }, [college1]);

//   useEffect(() => {
//     if (college2) {
//       axios.get(`http://localhost:3000/api/comparator/branches?college=${encodeURIComponent(college2)}`)
//         .then(res => setBranches2(res.data))
//         .catch(err => console.error(err));
//       setBranch2('');
//     }
//   }, [college2]);

//   const handleCompare = () => {
//     if (!college1 || !branch1 || !college2 || !branch2) {
//       alert('Please select all fields');
//       return;
//     }
//     axios.get(`http://localhost:3000/api/comparator/compare`, {
//       params: { college1, branch1, college2, branch2 }
//     })
//       .then(res => setResult(res.data))
//       .catch(err => console.error(err));
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content cool-form">
//         <span className="close-btn" onClick={onClose}>&times;</span>
//         <h2 style={{ marginBottom: '15px', textAlign: 'center' }}>Branch Comparator</h2>

//         <div className="form-grid">
//           <div>
//             <label>Select College 1</label>
//             <select value={college1} onChange={e => setCollege1(e.target.value)}>
//               <option value="">-- Select College --</option>
//               {colleges.map(c => (
//                 <option key={c} value={c}>{c}</option>
//               ))}
//             </select>

//             <label>Select Branch 1</label>
//             <select value={branch1} onChange={e => setBranch1(e.target.value)} disabled={!college1}>
//               <option value="">-- Select Branch --</option>
//               {branches1.map(b => (
//   <option key={b} value={b}>{b}</option>
// ))}

//             </select>
//           </div>

//           <div>
//             <label>Select College 2</label>
//             <select value={college2} onChange={e => setCollege2(e.target.value)}>
//               <option value="">-- Select College --</option>
//               {colleges.map(c => (
//                 <option key={c} value={c}>{c}</option>
//               ))}
//             </select>

//             <label>Select Branch 2</label>
//             <select value={branch2} onChange={e => setBranch2(e.target.value)} disabled={!college2}>
//               <option value="">-- Select Branch --</option>
//               {branches2.map(b => (
//   <option key={b} value={b}>{b}</option>
// ))}

//             </select>
//           </div>
//         </div>

//         <button onClick={handleCompare} className="compare-btn styled-btn">Compare</button>

//         {result.length > 0 && (
//           <div className="result-table">
//             <h3 style={{ marginTop: '20px' }}>Comparison Result</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>College</th>
//                   <th>Branch</th>
//                   <th>OR (Gen)</th>
//                   <th>CR (Gen)</th>
//                   <th>Avg Package</th>
//                   <th>Placement %</th>
//                   <th>Difficulty</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {result.map((r, idx) => (
//                   <tr key={idx}>
//                     <td>{r.College_name}</td>
//                     <td>{r.Branch_name}</td>
//                     <td>{r.OR_General}</td>
//                     <td>{r.CR_General}</td>
//                     <td>{r.avg_package}</td>
//                     <td>{r.placement_rate}%</td>
//                     <td>{r.difficulty_level}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from 'react';
import axios from 'axios';

export default function BranchComparator({ onClose }) {
  const API_URL = "https://college-recommendation-system-production.up.railway.app/api/comparator";

  const [colleges] = useState([
    "IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kanpur", "IIT Kharagpur",
    "IIT Roorkee", "IIT Guwahati", "IIT Hyderabad", "IIT (BHU) Varanasi",
    "IIT (ISM) Dhanbad", "IIT Bhubaneswar", "IIT Gandhinagar", "IIT Ropar",
    "IIT Patna", "IIT Indore", "IIT Mandi", "IIT Jodhpur", "IIT Bhilai",
    "IIT Palakkad", "IIT Tirupati", "IIT Jammu", "IIT Goa", "IIT Dharwad",
    "National Institute of Technology, Tiruchirappalli",
    "National Institute of Technology, Karnataka, Surathkal",
    "National Institute of Technology, Rourkela",
    "National Institute of Technology, Warangal",
    "National Institute of Technology, Calicut",
    "National Institute of Technology, Durgapur",
    "National Institute of Technology, Silchar",
    "Malaviya National Institute of Technology, Jaipur",
    "National Institute of Technology, Kurukshetra",
    "Dr. B R Ambedkar National Institute of Technology, Jalandhar",
    "Sardar Vallabhbhai National Institute of Technology, Surat",
    "National Institute of Technology, Hamirpur",
    "Visvesvaraya National Institute of Technology, Nagpur",
    "National Institute of Technology, Raipur",
    "National Institute of Technology, Jamshedpur",
    "National Institute of Technology, Patna",
    "National Institute of Technology, Srinagar",
    "National Institute of Technology, Agartala",
    "National Institute of Technology, Meghalaya",
    "National Institute of Technology, Manipur",
    "National Institute of Technology, Mizoram",
    "National Institute of Technology, Nagaland",
    "National Institute of Technology, Arunachal Pradesh",
    "National Institute of Technology, Sikkim",
    "National Institute of Technology, Uttarakhand",
    "National Institute of Technology, Delhi",
    "National Institute of Technology, Goa",
    "National Institute of Technology, Puducherry",
    "National Institute of Technology, Andhra Pradesh",
    "Motilal Nehru National Institute of Technology, Allahabad",
    "Maulana Azad National Institute of Technology, Bhopal",
    "Indian Institute of Engineering Science and Technology, Shibpur",
    "Indian Institute of Information Technology, Hyderabad",
    "Indian Institute of Information Technology, Allahabad",
    "Indian Institute of Information Technology, Guwahati",
    "Indian Institute of Information Technology, Jabalpur",
    "Indian Institute of Information Technology, Kancheepuram",
    "Indian Institute of Information Technology, Kota",
    "Indian Institute of Information Technology, Nagpur",
    "Indian Institute of Information Technology, Sri City",
    "Indian Institute of Information Technology, Vadodara",
    "Indian Institute of Information Technology, Bhubaneswar",
    "Indian Institute of Information Technology, Una",
    "Indian Institute of Information Technology, Sonepat",
    "Indian Institute of Information Technology, Surat",
    "Indian Institute of Information Technology, Lucknow",
    "Indian Institute of Information Technology, Dharwad",
    "Indian Institute of Information Technology, Tiruchirappalli",
    "Indian Institute of Information Technology, Agartala",
    "Indian Institute of Information Technology, Guwahati (IIITG - PPP)",
    "Indian Institute of Information Technology, Ranchi",
    "Indian Institute of Information Technology, Raichur",
    "Indian Institute of Information Technology, Amritsar",
    "Indian Institute of Information Technology, Kalyani",
    "Indian Institute of Information Technology, Una (Himachal Pradesh)",
    "Indian Institute of Information Technology, Manipur",
    "Indian Institute of Information Technology, Bhopal",
    "Indian Institute of Information Technology, Bhagalpur",
    "Indian Institute of Information Technology, Nagaland",
    "Indian Institute of Information Technology, Sri City (Andhra Pradesh)",
    "Indian Institute of Information Technology, Kottayam",
    "Indian Institute of Information Technology, Shimla",
    "Indian Institute of Information Technology, Bodh Gaya",
    "Indian Institute of Information Technology, Jammu",
    "Indian Institute of Information Technology, Lucknow (UP)",
    "Indian Institute of Information Technology, Sonepat (Haryana)"
  ]);

  const [branches1, setBranches1] = useState([]);
  const [branches2, setBranches2] = useState([]);
  const [college1, setCollege1] = useState('');
  const [branch1, setBranch1] = useState('');
  const [college2, setCollege2] = useState('');
  const [branch2, setBranch2] = useState('');
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (college1) {
      axios.get(`${API_URL}/branches?college=${encodeURIComponent(college1)}`)
        .then(res => setBranches1(res.data))
        .catch(err => console.error(err));
      setBranch1('');
    }
  }, [college1]);

  useEffect(() => {
    if (college2) {
      axios.get(`${API_URL}/branches?college=${encodeURIComponent(college2)}`)
        .then(res => setBranches2(res.data))
        .catch(err => console.error(err));
      setBranch2('');
    }
  }, [college2]);

  const handleCompare = () => {
    if (!college1 || !branch1 || !college2 || !branch2) {
      alert('Please select all fields');
      return;
    }
    axios.get(`${API_URL}/compare`, {
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
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <label>Select Branch 1</label>
            <select value={branch1} onChange={e => setBranch1(e.target.value)} disabled={!college1}>
              <option value="">-- Select Branch --</option>
              {branches1.map(b => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Select College 2</label>
            <select value={college2} onChange={e => setCollege2(e.target.value)}>
              <option value="">-- Select College --</option>
              {colleges.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            <label>Select Branch 2</label>
            <select value={branch2} onChange={e => setBranch2(e.target.value)} disabled={!college2}>
              <option value="">-- Select Branch --</option>
              {branches2.map(b => (
                <option key={b} value={b}>{b}</option>
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
