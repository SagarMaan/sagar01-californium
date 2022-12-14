const express = require('express');
const router = express.Router();
const player = require('../playerInfo/player.js')


router.post("/post-api",  player.playerInfo)
    
module.exports = router;