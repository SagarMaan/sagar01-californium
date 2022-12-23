const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorAndPublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    res.send({data: specificBook})

}

const conditionBaseData = async function (req,res){
    let data = req.body
    let {author_id , publisher} = data
    if(!author_id){
        return res.send ({msg : "Author id is not present."})}

    if(!publisher){
        return res.send ({msg : "Publisher id is not present."})}

        let bookCreated = await bookModel.create(data)
        res.send({data: bookCreated})
    
}   

// module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndPublisherDetails = getBooksWithAuthorAndPublisherDetails
module.exports. conditionBaseData =  conditionBaseData






















// let findPublisher = await publisherModel.findOne({_id:publisher})

// if(!findPublisher){
//     return res.send({msg : "Publisher id is not valid."})
// }



// let findAuthor = await authorModel.findOne({_id:author_id})

// if(!findAuthor){
//     return res.send({msg : "Author id is not valid."})
// }