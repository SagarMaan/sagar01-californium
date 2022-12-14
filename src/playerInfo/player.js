const playerInfo = function ( req , res){

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ]
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ]
       },
 ]
  let addElement = req.body
  let element = addElement.name

  for(let i = 0; i < players.length; i++) {
      if(players[i].name == element) {
         var Repeated = true;
          break;
      }
  }
  if (Repeated == true) {
      res.send("Please check your name this name is already exits")
  } else {
      players.push(addElement)
      res.send(players)
  }

}

module.exports.playerInfo = playerInfo