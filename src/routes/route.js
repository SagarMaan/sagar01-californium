const express = require('express');
const router = express.Router();
const voterAge = require('../../voterId/voter.js')

router.post ( "/age" , voterAge.voterAge ) 
   
module.exports = router;