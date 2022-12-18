const UserModel= require("../models/bookModel")

const createBook= async function (req, res) {

    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {

    let bookList= await UserModel.find({noOfPages : 600})
    res.send({msg: bookList}) 
} 

const particularBook = async function (req , res) {

    let book = req.body
    let data = await UserModel.find (book)
    res.send ({msg : data})
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData
// module.exports.particularBook = particularBook