const userModel = require("../models/user.js");
const bcrypt = require('bcryptjs');

module.exports.registerUser = function (data) {
    return new Promise((resolve, reject) => {
        if (data.firstName == "" || data.lastName == "" || data.email == "" || data.password == "") {
            reject("Not all mandatory fields have been entered");
        }

        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                reject("There was an error while encrypting the password");
            }

            bcrypt.hash(data.password, salt, function (err, hash) {

                if (err) {
                    reject("There was an error encrypting the password");
                }

                data.password = hash;

                const newUser = new userModel(data);

                newUser.save((err) => {
                    if (err) {
                        reject(`There was an error creating the user: ${err}`);
                    } else {
                        resolve(`User ${data.firstName} ${data.lastName} has been created`);
                    }
                })
            })
        })
    })
};


module.exports.getUserById = function (userId) {
    return new Promise((resolve, reject) => {
        userModel.findById(userId).exec().then((data) => {
            if (data.length == 0) {
                reject("Unable to find user with the following id: " + userId);
            }
            resolve(data)
        }).catch((err) => {
            reject(err);
        });
    });
};
