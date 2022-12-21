const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")
const { default: mongoose } = require("mongoose")


// Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the author collection nor the books collection)


exports.createAuthorData = async function ( req , res) {
    let author = req.body  
    let authorData = await AuthorModel.create(author)
    
    res.json({msg : authorData})  
    
}

exports.createBookData= async function (req, res) {
    let {name, author_id, price, ratings} = req.body;
       if(!author_id || !mongoose.Types.ObjectId.isValid(author_id)){
              return res.json({msg:'please provide valid author id'})
       }
       let book = await BookModel.create({name,author_id,price,ratings});
       res.json(book);
}

// List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )


exports.findauthorbyid=async function(req,res){
    let author = await AuthorModel.findOne({author_name:"Chetan Bhagat"})
    let book = await BookModel.find({author_id:author._id})
    res.send({msg:book})
}
    
// find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query aith author_id from previous query)

exports.updatePrice = async function (req ,res) {
    let update = await BookModel.findOneAndUpdate({name : "Two states"},{$set:{price:100}},{new:true})
     let authors = await AuthorModel.findById(update.author_id)
     res.send({price:update.price,author_name:authors.author_name})
}

// Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books.. 
// bookModel.find( { price : { $gte: 50}  ,  price: {$lte: 100} } ) // WRONG
// bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1})..run a map(or forEach) loop and get all the authorName corresponding to the authorId’s ( by querying authorModel)

exports.bookPrice = async function(req,res){
let price = await BookModel.find({price:{$gte:50 , $lte:100}}).select("author_id")
let names = []
for ( i=0;i<price.length;i++){
    let newNames = await AuthorModel.findOne({_id:price[i].author_id}).select("author_name")
    names.push(newNames)
}
res.send({msg:names})
}


