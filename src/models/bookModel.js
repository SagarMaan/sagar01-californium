const mongoose = require('mongoose');

    const bookSchema = new mongoose.Schema(

    { 
        name: String ,
        author_id: mongoose.Types.ObjectId,
        price: Number ,
        ratings: Number , 

    } ,
    { timestamps: true });

module.exports = mongoose.model('BookList', bookSchema)

