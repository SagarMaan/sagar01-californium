
const getMovie = function(req , res) {
let movie = ["Rang de basanti", "The shining"," Lord of the rings", "Batman begins", "Superman","Escape Plane", "Iron Man"]
res.send(movie)
}

const getMoviesByIndexNumber = function(req,res) {
    let movie = ["Rang de basanti", "The shining," ,"Lord of the rings", "Batman begins","Superman","Escape Plane", "Iron Man"]
    
if (req.params.getMoviesByIndexNumber<=movie.length) {
   res.send("movie name is "+movie[req.params.getMoviesByIndexNumber]);
} else {
    res.send("no movie exsit with this index value ");
}

};


module.exports.getMovie = getMovie
module.exports.getMoviesByIndexNumber = getMoviesByIndexNumber

