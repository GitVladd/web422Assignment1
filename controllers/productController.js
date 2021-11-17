let express = require("express");
const cors = require("cors")
const router = express.Router();
const productService = require("../services/productService.js");

//create (post)

router.post("/", (req, res) => {
    productService.createProduct(req.body).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

//read (get)

router.get("/", cors(), (req, res, next) => {
    productService.getAllProducts().then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/category", cors(), (req, res, next) => {
    productService.getProductsCategories().then((data) =>{
        res.json({"data" : data});
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/category/:category", cors(), (req, res, next) => {
    productService.getProductsByCategory(req.params.category).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/bestseller", cors(), (req, res, next) => {
    productService.getProductsByBestseller().then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/:id", cors(), (req, res, next) => {
    productService.getProductsById(req.params.id).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

//update (put)
router.put("/:id", cors(), (req, res, next) => {
    productService.updateProductsById(req.params.id, req.body).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

//delete (delete)
router.delete("/:id", cors(), (req, res, next) => {
    productService.deleteProductsById(req.params.id).then(() =>{
        res.json("Product with the following ID has been deleted: " + req.params.id);
    }).catch((err) =>{
        res.json({error : err})
    });
})


module.exports = router;