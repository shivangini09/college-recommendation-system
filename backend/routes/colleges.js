const express = require('express');
const router = express.Router();
const collegeController = require('../controllers/collegeController');

router.post('/recommend', collegeController.recommendColleges);

module.exports = router;
