const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")



const createOrder= async function ( req , res ) {

    let data = req.body

    let user = await userModel.findById(data.userId)
    if(!user) return res.send({status : false, message: "User not found"})


    let product = await productModel.findById(data.productId)
    if(!product) return res.send({status: false, message: "Product not found"})

    let header = req.headers["isfreeappuser"]
  
    if(header == 'true') {
        data.amount = 0
        let savedData= await orderModel.create(data)
        return res.send({status: true, data: savedData})
    }


    if(header != 'true') {
        if(user.balance < product.price) {
            return res.send({staus: false, message: "user doesn't jave enough balance"})
        } else {
            
            data.amount = product.price
            let savedData= await orderModel.create(data)
            await userModel.findOneAndUpdate({_id:data.userId}, {balance:user.balance - product.price})
            return res.send({status: true, data: savedData})
        }
    }


}



module.exports.createOrder = createOrder