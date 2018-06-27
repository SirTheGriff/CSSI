const express = require('express');
const router = express.Router();
const customerProfile = require("../models/index");
const passport = require("passport");


//RESTFUL ROUTES - Index/Home

router.get('/', function(req, res) {
    res.render("index");
});

//All Page routes


router.get('/aboutus', function(req, res) {
    res.render('aboutus');
});

router.get('/contactus', function(req, res) {
    res.render('contactus');
});

router.get('/downloads', function(req, res) {
    res.render('downloads');
});

router.get('/register', function(req, res) {
    res.render('register');
});

router.get('/services', function(req, res) {
    res.render('services');
});

router.get('/whitepapers', function(req, res) {
    res.render('whitepapers');
});


//CREATE ROUTE - Register Route

router.post('/register', function(req, res) {
    customerProfile.create(req.body, function(err, newProfile) {
        if(err) {
            console.log(err)
        } else {
            res.render("loggedin");
        }
    });
});


//SHOW ROUTE & Login Logic - need to use logged in middlewhare to pull entire profile

router.get("/loggedin", function(req, res) {
   customerProfile.findById(req.params.id, function(err, foundProfile){
       if(err) {
           res.redirect('downloads')
       } else {
           res.render("loggedin", {foundProfile: foundProfile});
       }
   });
});

router.post("/downloads",
    passport.authenticate('local', { successRedirect: '/loggedin',
    failureRedirect: '/downloads'})
);

//EDIT ROUTE


//UPDATE ROUTE



//DESTROY-DELETE ROUTE

module.exports = router;