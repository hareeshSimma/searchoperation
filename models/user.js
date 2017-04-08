const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    designation: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    empusername: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    empid: {
        type: String,
        required: false
    },
    phoneno: {
        type: Number,
        required: true
    }
});

const User = module.exports = mongoose.model("empDetials", UserSchema);



module.exports.getUserByemail = function(callback) {
    User.find(callback)
}

module.exports.getUserByUsername = function(username, callback) {
    var query = { empusername: username }

    User.findOne(query, callback);

}

module.exports.addUser = function(newuser, callback) {
    bcrypt.genSalt(15, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
            if (err) {
                console.log(err);
            }
            newuser.password = hash;
            newuser.save(callback);
            console.log(callback);
        });
    });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if (err) throw err;
            callback(null, isMatch);
        });

    }
    // module.exports.getEmailAlert = function(email, callback) {
    //     var query = { email: email }
    //     User.findOne(query, callback);
    //     console.log(query)

// }

// module.exports.setpswd = function(newuser, callback) {
//     console.log("@@@@@@@@@@@@@@@@@@@@@@@")
//     bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newuser.password, salt, (err, hash) => {
//             newuser.password = hash;
//             callback();

//             console.log(hash)


//         });

//     });
// }