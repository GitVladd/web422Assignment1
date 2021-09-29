const express = require("express");

const app = express();

const Mongoose = require("mongoose");

// const bodyParser = require(`body-parser`);
// app.use(bodyParser.urlencoded({extended: false}));

var HTTP_PORT = process.env.PORT || 8080;

app.use((req, res) => {
    res.status(404).send("ERROR 404. PAGE NOT FOUND");
});

app.listen(HTTP_PORT, ()=>{
    console.log(`API is up and running on PORT ${HTTP_PORT}`);

    Mongoose.connect(process.env.MONGO_DB_CONNECTION_LINE)
    .then(()=>{
        console.log(`Connected to MongoDB`);
    })
    .catch((err) =>{
        console.log(`Error: ${err}`);
    });
})



// data.initialize().then(dataServiceAuth.initialize).then(function () {
//     app.listen(HTTP_PORT, ()=>{

//     });
// }).catch(function (reason) {
//     console.log("Unable to start server");
//     console.log(reason);
// });
