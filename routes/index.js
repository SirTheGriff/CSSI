const express = require('express');
const router = express.Router();
const customerProfile = require("../models/index");
const User = require("../models/user");


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

router.get('/loggedin', function(req, res) {
    res.render('loggedin');
});


//CREATE ROUTE & LOGIN ROUTE

router.post('/register', function(req, res) {
    customerProfile.create(req.body, function(err, user) {
        if(err) {
            console.log(err)
        } else {
            User.create(req.body, function(err, login) {
                if(err) {
                    console.log(err)
                } else {
                    res.render("loggedin", {user: user, login: login});
                }
            });
        };
    });
});

router.post('/downloads', function(req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) {
            res.redirect("/downloads");
            console.log(err);
        } else {
            res.render("loggedin", {user});
        };
    });
});


// SHOW ROUTE

router.get("/register/:id", function(req, res) {
    customerProfile.findById(req.params.id, function (err, user) {
        if (err) {
            res.redirect("../downloads");
            console.log(err);
        } else {
            res.render("loggedin", {user});
        };
    });
});

//Login Logic - need to use logged in middleware to pull entire profile
//
// router.post("/downloads",
//     passport.authenticate('local', { successRedirect: '/loggedin',
//     failureRedirect: '/downloads'})
// );


// need to fix navbar routes when clicking out...sessions needed likely
//EDIT-UPDATE ROUTE

router.get("/profile/:id", function(req, res) {
   customerProfile.findById(req.params.id, function(err, user){
       if(err) {
           res.redirect("../downloads");
           console.log(err);
       } else {
           res.render("profile", {user});
       }
   });
});

router.put("/profile/:id", function(req, res) {
   customerProfile.findByIdAndUpdate(req.params.id, req.body, function(err, updatedProfile) {
       if(err) {
           res.redirect("/profile/:id");
           console.log(err);
       } else {
           res.redirect("/loggedin/" + req.params.id);
       }
   })
});


router.get("/loggedin/:id", function(req, res) {
    customerProfile.findById(req.params.id, function(err, user){
        if(err) {
            res.redirect("../downloads");
            console.log(err);
        } else {
            res.render("loggedin", {user});
        }
    });
});


//DESTROY-DELETE ROUTE

router.delete("/loggedin/:id", function(req, res) {
    customerProfile.findByIdAndRemove(req.params.id, function(err){
        if(err) {
            res.redirect("loggedin");
            console.log(err);
        } else {
            res.render("downloads");
        }
    });
});

module.exports = router;