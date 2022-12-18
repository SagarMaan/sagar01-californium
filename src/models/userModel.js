const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

bookName : String ,
authorName: String ,
category  : String ,
publishYear : Number 

})
    

module.exports = mongoose.model('Chaudhary', bookSchema) 



// String, Number
// Boolean, Object/json, array