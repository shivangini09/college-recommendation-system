const express = require('express');
const router = express.Router();
const { compareBranches } = require('../controllers/comparatorcollege');

router.get('/compare', compareBranches);

module.exports = router;
