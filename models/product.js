const mongoose = require("mongoose");
const {Schema} = mongoose;

const productSchema = new Schema ({
    "name" : {type : String, required : true},
    "price" : {type : Number, required : true},
    "description" : String,
    "category" : {type : String, required : true},
    "quantity" : Number,
    "bestseller" : {type : Boolean, required : true},
    "photoURL" : String
});

const Product = mongoose.model('Product' , productSchema);

module.exports = Product;