const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")



     let validation = async function( req , res , next ){
  
        let header = req.headers["auth-token"]
    
        if(!header) return res.send({status:false , msg:"token must be present"})
    
        let decode = jwt.verify( header , "something encrypted")
    
       if(!decode) return res.send({status:false , msg:"invalid token"})

       next()    

};






const authorise = async function( req , res , next ) {

    let token = req.headers["auth-token"]
    
    if(!token) return res.send({status:false , msg:"token must be present"})

    let decode = jwt.verify(token ,"something encrypted")
    console.log(decode)

    if(!decode) return res.send({status:false , msg:"invalid token"})

    let userId = req.params.userId

    let checkUser = await userModel.findById(userId)

    if(!checkUser) return res.send({status:false , msg:"userId is not valid"})

     let check = userId
     let access =decode.userId

     if(check != access) return res.send({status:false , msg:"you cant see another person data"})
    
     next()

};




module.exports = {validation , authorise}


