const db = require('../config/db');

exports.recommendColleges = (req, res) => {
  const { rank, category, exam_type } = req.body;

  // Validate category input
  const validCategories = ['General', 'OBC', 'SC'];
  if (!validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  const sql = `
    SELECT c.College_name, c.City, c.State, c.NIRF_ranking, b.Branch_name
    FROM colleges c
    JOIN branches b ON c.College_id = b.College_id
    WHERE c.Exam_type = ?
      AND (
        (b.CR_General >= ? AND ? = 'General')
        OR (b.CR_OBC >= ? AND ? = 'OBC')
        OR (b.CR_SC >= ? AND ? = 'SC')
      )
        
  `;

  db.query(sql, [exam_type, rank, category, rank, category, rank, category], (err, results) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

