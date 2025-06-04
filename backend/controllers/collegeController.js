// const db = require('../config/db');

// exports.recommendColleges = (req, res) => {
//   const { rank, category, exam_type } = req.body;

//   // Validate category input
//   const validCategories = ['General', 'OBC', 'SC'];
//   if (!validCategories.includes(category)) {
//     return res.status(400).json({ error: 'Invalid category' });
//   }

//   const sql = `
//     SELECT 
//       c.College_name, 
//       c.City, 
//       c.State, 
//       c.NIRF_ranking, 
//       b.Branch_name,
//       CASE 
//         WHEN ? = 'General' THEN b.OR_General
//         WHEN ? = 'OBC' THEN b.OR_OBC
//         WHEN ? = 'SC' THEN b.OR_SC
//       END AS Opening_Rank,
//       CASE 
//         WHEN ? = 'General' THEN b.CR_General
//         WHEN ? = 'OBC' THEN b.CR_OBC
//         WHEN ? = 'SC' THEN b.CR_SC
//       END AS Closing_Rank
//     FROM colleges c
//     JOIN branches b ON c.College_id = b.College_id
//     WHERE c.Exam_type = ?
//       AND (
//         (b.CR_General >= ? AND ? = 'General')
//         OR (b.CR_OBC >= ? AND ? = 'OBC')
//         OR (b.CR_SC >= ? AND ? = 'SC')
//       )
//   `;

//   const params = [
//     category, category, category, // for Opening Rank CASE
//     category, category, category, // for Closing Rank CASE
//     exam_type,                   // for exam filter
//     rank, category,              // General
//     rank, category,              // OBC
//     rank, category               // SC
//   ];

//   db.query(sql, params, (err, results) => {
//     if (err) {
//       console.error('DB error:', err);
//       return res.status(500).json({ error: err.message });
//     }
//     res.json(results);
//   });
// };


const db = require('../config/db');

// Existing route for SearchForm
exports.recommendColleges = (req, res) => {
  const { rank, category, exam_type } = req.body;

  const validCategories = ['General', 'OBC', 'SC'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  const sql = `
    SELECT 
      c.College_name, 
      c.City, 
      c.State, 
      c.NIRF_ranking, 
      b.Branch_name,
      CASE 
        WHEN ? = 'General' THEN b.OR_General
        WHEN ? = 'OBC' THEN b.OR_OBC
        WHEN ? = 'SC' THEN b.OR_SC
      END AS Opening_Rank,
      CASE 
        WHEN ? = 'General' THEN b.CR_General
        WHEN ? = 'OBC' THEN b.CR_OBC
        WHEN ? = 'SC' THEN b.CR_SC
      END AS Closing_Rank
    FROM colleges c
    JOIN branches b ON c.College_id = b.College_id
    WHERE c.Exam_type = ?
      AND (
        (b.CR_General >= ? AND ? = 'General')
        OR (b.CR_OBC >= ? AND ? = 'OBC')
        OR (b.CR_SC >= ? AND ? = 'SC')
      )
  `;

  const params = [
    category, category, category,
    category, category, category,
    exam_type,
    rank, category,
    rank, category,
    rank, category
  ];

  db.query(sql, params, (err, results) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// controllers/collegeController.js
exports.generatePreferenceList = (req, res) => {
    const {
      rank,
      category,
      exam_type,
      preferred_branches,
      preferred_colleges,
      home_state,
    } = req.body;
  
    // Basic validation
    if (!rank || !category || !exam_type) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
  
    // (Optional) You can log the preferences for debugging
    console.log('Generating preference list for:', req.body);
  
    // Sample query (adjust logic according to your actual database schema and logic)
    const sql = `
      SELECT 
        c.College_name,
        c.City,
        c.State,
        c.NIRF_ranking,
        b.Branch_name
      FROM colleges c
      JOIN branches b ON c.College_id = b.College_id
      WHERE c.Exam_type = ?
        AND (
          (b.CR_General >= ? AND ? = 'General')
          OR (b.CR_OBC >= ? AND ? = 'OBC')
          OR (b.CR_SC >= ? AND ? = 'SC')
        )
        ${preferred_branches ? `AND b.Branch_name IN (${preferred_branches.split(',').map(() => '?').join(',')})` : ''}
        ${preferred_colleges ? `AND c.College_name IN (${preferred_colleges.split(',').map(() => '?').join(',')})` : ''}
    `;
  
    const branchValues = preferred_branches ? preferred_branches.split(',').map(b => b.trim()) : [];
    const collegeValues = preferred_colleges ? preferred_colleges.split(',').map(c => c.trim()) : [];
  
    const params = [
      exam_type,
      rank, category, // General
      rank, category, // OBC
      rank, category, // SC
      ...branchValues,
      ...collegeValues
    ];
  
    db.query(sql, params, (err, results) => {
      if (err) {
        console.error('DB error:', err);
        return res.status(500).json({ error: err.message });
      }
      res.json(results);
    });
  };
  