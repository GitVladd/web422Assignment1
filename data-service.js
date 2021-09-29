
var mongoose = require("mongoose");

var Schema = mongoose.Schema;



const bcrypt = require('bcryptjs');


let userSchema = new Schema({
    "firstName" : {type : String, required : true},
    "lastName" : {type : String, required : true},
    "email" : {type : String, required : true},
    "password" : {type : String, required : true},   
    "phoneNumber" : [Number]
});

let productSchema = new Schema ({
    "name" : {type : String, required : true},
    "price" : {type : Number, required : true},
    "description" : String,
    "category" : {type : String, required : true},
    "quantity" : Number,
    "bestseller" : {Boolean, required : true},
    "photoURL" : String
});

let User, Product;

module.exports.initialize = function () {
    return new Promise(function (resolve, reject) {
    
        let db = mongoose.createConnection("mongodb+srv://vlad:web322@cluster0.aw7rg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
    
        db.on('error', (err)=>{
            reject(err); // reject the promise with the provided error
        });
        db.once('open', ()=>{
            User = db.model("users", userSchema);
            Product = db.model("products", productSchema);
            resolve();
        });
    });
};