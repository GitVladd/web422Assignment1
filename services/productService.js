const productModel = require("../models/product.js");

module.exports.createProduct = function (data) {
    return new Promise((resolve, reject) => {
        bestsellerStatus = toString(data.bestseller);
        if (data.name == "" || data.price == "" ||  data.category == ""){
            reject("Not all mandatory fields have been entered");
        }
        if(data.bestseller != true){
            if(data.bestseller != false){
                reject("Mandatory field bestseller is not entered, or entered parameter is not correct");
            }
        }
        const newProduct = new productModel(data);
        
        newProduct.save((err) => {
            if (err) {                        
                reject(`There was an error creating the product: ${err}`);
            } else {
                resolve(`Product ${data.name} has been added`);
            }
        })
    })
};



module.exports.getAllProducts = function () {
    return new Promise((resolve, reject) => {
        productModel.find().exec().then((data) => {
            if (data.length == 0) {
                reject("Unable to find products");
            }
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    })
};


module.exports.getProductsCategories = function () {
    return new Promise((resolve, reject) => {
        productModel.distinct("category").exec().then((data) => {
            if (data.length == 0) {
                reject("Unable to find products` categories");
            }
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    })
};


module.exports.getProductsByCategory = function (category) {
    return new Promise((resolve, reject) => {
        productModel.find({category : category}).exec().then((data) => {
            if (data.length == 0) {
                reject("Unable to find products by category");
            }
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    })
};


module.exports.getProductsByBestseller = function () {
    return new Promise((resolve, reject) => {
        productModel.find({bestseller : true}).exec().then((data) => {
            if (data.length == 0) {
                reject("Unable to find bestsellers");
            }
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    })
};


module.exports.getProductsById = function (id) {
    return new Promise((resolve, reject) => {
        productModel.findById(id).exec().then((data) => {
            if (data.length == 0) {
                reject("Unable to find product by id");
            }
            resolve(data);
        }).catch((err) => {
            reject(err);
        });
    })
};

module.exports.updateProductsById = function (id,data) {
    return new Promise((resolve, reject) => {
        if(id == "" || data.name == "" ||  data.price == "" ||  data.category == "" ||  data.bestseller == ""){
            reject("Not all mandatory fields have been entered")
        }
        productModel.updateOne({_id : id}, {name : data.name, price : data.price, description : data.description, category : data.category, quantity : data.quantity, bestseller : data.bestseller, photoURL : data.photoURL}).exec().then(() =>{
            resolve(data);
        }).catch((err) =>{
            reject(err);
        });
    })
};

module.exports.deleteProductsById = function (id) {
    return new Promise((resolve, reject) => {
        productModel.deleteOne({_id : id}).exec().then(() =>{
            resolve();
        }).catch((err) =>{
            reject(err);
        });
    })
};

