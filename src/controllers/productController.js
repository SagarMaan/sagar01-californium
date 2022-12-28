const productModel = require("../models/productModel")

const createProduct = async function ( req , res ) {
    
    let data = req.body

    let createData = await productModel.create(data)

    res.send({status: true, data: createData})
}

module.exports.createProduct = createProduct
