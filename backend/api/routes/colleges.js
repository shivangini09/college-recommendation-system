const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', (req, res) => {
  db.query('SELECT * FROM colleges', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

router.get('/:id/branches', (req, res) => {
  const collegeId = req.params.id;
  const sql = `
    SELECT bt.branch_name 
    FROM branches b 
    JOIN branch_types bt ON b.branch_id = bt.branch_id 
    WHERE b.college_id = ?`;

  db.query(sql, [collegeId], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
