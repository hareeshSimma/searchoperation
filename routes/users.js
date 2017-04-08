var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

//registration module

router.post('/signup', (req, res, next) => {
    console.log(req.body)

    var newuser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        designation: req.body.designation,
        email: req.body.email,
        empusername: req.body.empusername,
        password: req.body.password,
        phoneno: req.body.phoneno

    });
    // console.log("jfoijsfjklfskl")
    // console.log(newuser);

    User.addUser(newuser, (err, data) => {
        if (err) {
            res.json({ success: false, msg: 'Failed to register user' });
        } else {
            const email = req.body.email;
            const empid = Math.floor(Math.random() * 5000);
            console.log(empid)
            User.update({ email: email }, { $set: { empid: empid } }, function(err, docs) {
                console.log("*********************************");
                console.log(docs)
                if (err) {
                    res.json('error')
                } else {
                    console.log("empid updatted successfully");
                }
            })
            res.json({ success: true, msg: 'User Registered Successfully' })
        }

    });



});



//registratiom close

// Authentication router
router.post('/authenticate', (req, res, next) => {
    const username = req.body.empusername;
    const password = req.body.password;

    User.getUserByUsername(username, (err, user) => {
        console.log(user)
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'User Not Found' });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {

            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 // 1 week
                });
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        firstName: user.firstName,
                        empusername: user.empusername,
                        email: user.email
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Wrong Password' });
            }
        })
    });
});

//get emp Detials

router.get('/emplist', (req, res, next) => {

    User.getUserByemail((err, data) => {
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(data)
        if (err) {
            res.json({ success: false, msg: 'Not get any users' });
        } else {

            res.json({ success: true, msg: 'User found Successfully', data: data })
        }

    });



});



module.exports = router;