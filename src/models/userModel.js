const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {

    name: String,

    lastName: String,

    emailId: String,

    password: String,

    mobile: {
        type: String,
        require:true
    },

    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },

    age: Number,

    isDeleted:{
        type:Boolean,
        default:false
    },
},
 { timestamps: true });


 
module.exports = mongoose.model('UserData', userSchema)