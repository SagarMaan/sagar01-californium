const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
    
    productId: {
        type: ObjectId,
        ref: "productData"
    }, 

    userId: {
        type: ObjectId,
        ref: "userData"
    },

    amount: Number,

    isFreeAppUser: Boolean,

    date:{
        type : Date,
        default : Date.now()
    }

},
 { timestamps: true });


module.exports = mongoose.model('orderData', orderSchema)
