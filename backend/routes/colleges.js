// const express = require('express');
// const router = express.Router();
// const collegeController = require('../controllers/collegeController');

// // Route for SearchForm
// router.post('/recommend', collegeController.recommendColleges);

// // ✅ New route for PreferenceForm
// router.post('/generate-preference', collegeController.generatePreferenceList);

// module.exports = router;


const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');
const db = require('../config/db'); // add this to directly fetch all colleges

// Route for SearchForm
router.post('/recommend', collegeController.recommendColleges);

// New route for PreferenceForm
router.post('/generate-preference', collegeController.generatePreferenceList);

// 🔹 New route: GET all colleges
router.get('/', (req, res) => {
  db.query('SELECT * FROM colleges', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }
    res.json(results);
  });
});

module.exports = router;
