
let persons= [
   {
   name: "PK",
   age: 10,
   votingStatus: false
},
{
   name: "SK",
   age: 20,
   votingStatus: false
},
{
   name: "AA",
   age: 70,
   votingStatus: false
},
{
   name: "SC",
   age: 5,
   votingStatus: false
},
{
   name: "HO",
   age: 40,
   votingStatus: false
}
]

const voterAge = function ( req , res ){
    let voterId = req.query.age
    let newAge =[] 
    for ( i=0; i<persons.length ; i++ ){
        if ( persons[i].age >= voterId){
            persons[i].votingStatus = true
            newAge.push(persons[i])
        }
    }
    res.send(newAge)
} 

module.exports.voterAge = voterAge
 
