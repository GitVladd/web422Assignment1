//Heroku:
//GirHub:

const express = require("express");
const app = express();
const userController = require("./controllers/userController.js");
const productController = require("./controllers/productController.js");
if (process.env.NODE_ENV != "production") 
{
    require(`dotenv`).config({ path: 'config/keys.env' });
}
const Mongoose = require("mongoose");

var HTTP_PORT = process.env.PORT || 8080;

app.use(express.json())

app.use("/users", userController)

app.use("/products", productController)

app.use((req, res) => {
    res.status(404).send("ERROR 404. PAGE IS NOT FOUND");
});

app.listen(HTTP_PORT, () => {
    console.log(`API is up and running on PORT ${HTTP_PORT}`);

    Mongoose.connect(process.env.MONGO_DB_CONNECTION_LINE)
        .then(() => {
            console.log(`Connected to MongoDB`);
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
        });
})

