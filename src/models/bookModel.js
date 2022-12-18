const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {

    bookName: {
        type: String,
        required: true
    },

    author: String,

    tags: [ String ],                   

    year: {
        type : Number,
        default : 2021
    },
    
    isPublished: {
        type: Boolean,                    
        default: false
    },

    prices: {
        indianPrice: String,
        europeanPrice: String,
        japanPrice: String
    },

    sales: {
        type: Number,
        default : 0
    },

    noOfPages : Number ,

    completionDate: Date ,
        
 }, {timestamps: true} )
 
    
module.exports = mongoose.model('newDB', bookSchema) 
