let jwt = require('jsonwebtoken')

let validation = async function( req , res , next ){

    let header = req.headers["auth-token"]

    if(!header) return res.send({status:false,msg:"token must be present"})

    let decode = jwt.verify(header,"something encrypted")

   if(!decode) return res.send({status:false,msg:"invalid token"})

   next()

}

 module.exports.validation = validation