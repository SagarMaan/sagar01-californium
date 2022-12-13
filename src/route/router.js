
const express = require('express');
const router = express.Router();
const missNum = require('../problemFolder/nodeProblem1.js')
const findNum = require('../problemFolder/nodeProblem2.js')

router.get('/nodeAssignment1' , missNum.missingNumber)
router.get('/nodeAssignment2' , findNum.missingNum)

module.exports = router;