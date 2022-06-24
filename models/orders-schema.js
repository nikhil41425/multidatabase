const mongoose=require('mongoose');

const orderSchema=mongoose.Schema({
    name:{
        type:String
    },
    price:{
        type:Number,
    },
})
module.exports=orderSchema

