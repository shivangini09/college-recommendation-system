// const express = require('express');
// const router = express.Router();
// const { compareBranches } = require('../controllers/comparatorcollege');

// router.get('/compare', compareBranches);

// module.exports = router;


const express = require('express');
const router = express.Router();
const comparatorController = require('../controllers/comparatorcollege'); // assuming name

// Get unique list of colleges
router.get('/colleges', comparatorController.getColleges);

// Get branches for selected college
router.get('/branches', comparatorController.getBranches);

// Compare two college-branch combos
router.get('/compare', comparatorController.compareBranches);


module.exports = router;

