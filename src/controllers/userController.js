const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");


const createUser = async function ( req , res ) {
  
  let data = req.body

  let savedData = await userModel.create(data)
    
  res.send({ Object: savedData })
};


const loginUser = async function ( req , res ) {

  let userName = req.body.emailId   
  let password = req.body.password

  let user = await userModel.findOne({ emailId: userName, password: password })

  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct"
    })
     
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "califorium",
      organisation: "FunctionUp"
    },
    "something encrypted"
  );
  res.send({ status: true, token: token })
};



const getUserData = async function ( req , res ) {

  let userId = req.params.userId

  let userDetails= await userModel.findById(userId)

  if(!userDetails) return res.send({status:false,msg:"user not found"})

  res.send({ status: true, data: userDetails });

};



const updateUser = async function ( req , res ) {
  
  let userId = req.params.userId

  let user = await userModel.findById(userId)
  
  if (!user) return res.send("No such user exists")

  let userData = req.body

  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },userData, {new:true})

  res.send({ status:true , data: updatedUser })

};



 let deleteUser = async function(req,res){

  let userId= req.params.userId

  let user= await userModel.findById(userId)

   if (!user) return res.send({status:false,msg:"userId is not valid"})

   let updateUser= await userModel.findOneAndUpdate({_id:userId},{isDeleted:true},{new:true})
      
   res.send({status:true,data:updateUser})
 
  }



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
