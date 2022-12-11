
const films = function(req,res){
    let arrayObj=[ {"id": 1,"name":"Captain America"}, {"id": 2,"name": "Avengers"}, {"id": 3, "name": "Thor" }, {"id": 4,"name": "Hulk" } , {"id" : 5 , "name" : "Iron Man"}]
res.send(arrayObj)
}


const filmById = function(req, res) {
 let arrayObj=[ {"id": 1,"name":"Captain America"}, {"id": 2,"name": "Avengers"}, {"id": 3, "name": "Thor" }, {"id": 4,"name": "Hulk" } , {"id" : 5 , "name" : "Iron Man"}]

 if (req.params.filmById<=arrayObj.length) {
    res.send("film name is "+arrayObj[req.params.filmById]);
} else {
    res.send("no film exsit with this Id ");
}

};

module.exports.films = films
module.exports.filmById = filmById