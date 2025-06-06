const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');

// Route for SearchForm
router.post('/recommend', collegeController.recommendColleges);

// ✅ New route for PreferenceForm
router.post('/generate-preference', collegeController.generatePreferenceList);

module.exports = router;
