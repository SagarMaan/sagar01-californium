const express = require('express');
const router = express.Router();
const movie = require('./movies.js')
const filmList = require('./films.js')


router.get("/movie" , movie.getMovie)

router.get("/movie/:getMoviesByIndexNumber" , movie.getMoviesByIndexNumber)

router.get("/films" , filmList.films)

router.get("/films/:filmById" , filmList.filmById)

module.exports = router;