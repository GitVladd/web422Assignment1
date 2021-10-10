let express = require("express");
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

router.get("/", (req, res) => {
    productService.getAllProducts().then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/category", (req, res) => {
    productService.getProductsCategories().then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/category/:category", (req, res) => {
    productService.getProductsByCategory(req.params.category).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/bestseller", (req, res) => {
    productService.getProductsByBestseller().then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

router.get("/:id", (req, res) => {
    productService.getProductsById(req.params.id).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

//update (put)
router.put("/:id", (req, res) => {
    productService.updateProductsById(req.params.id, req.body).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
})

//delete (delete)
router.delete("/:id", (req, res) => {
    productService.deleteProductsById(req.params.id).then(() =>{
        res.json("Product with the following ID has been deleted: " + req.params.id);
    }).catch((err) =>{
        res.json({error : err})
    });
})


module.exports = router;