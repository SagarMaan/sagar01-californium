const express = require('express');
const lodash = require('lodash');
const router = express.Router();
const first= require( '../logger/logger.js')
const help = require('../util/helper.js')
const trim = require('../validator/formatter.js')
const chunk = require('../lodash/lodash.js')
const tail = require('../lodash/lodash.js')
const union = require('../lodash/lodash.js')
const fromPairs = require('../lodash/lodash.js')

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    console.log(first.third())
    console.log(help.printdate)
    console.log(trim.problem)
    console.log(chunk.chunk)
    console.log(tail.tail)
    console.log(union.union)
    console.log(fromPairs.fromPairs)

});

router.get('/test-you', function (req, res) {
    res.send('My newley api!')
})
module.exports = router;