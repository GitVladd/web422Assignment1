let express = require("express");
const cors = require("cors")
const router = express.Router();
const userService = require("../services/userService.js");


//create
router.post("/", cors(), (req, res, next) =>{
    userService.registerUser(req.body).then((data) =>{
        res.json(data);
    }).catch((err) =>{
        res.json({error : err})
    });
});

//read
router.get("/:id", cors(), (req, res, next) =>{
    userService.getUserById(req.params.id).then((data) =>{
        res.json({
            id : data._id,
     //       password : data.password,
            firstName : data.firstName,
            lastName : data.lastName,
            email : data.email,
            phones : data.phoneNumber
        });
    }).catch((err) => {
        res.json({error : err});
        
    });
});


module.exports = router;