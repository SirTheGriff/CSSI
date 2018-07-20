const express = require('express');
const router = express.Router();
const customerProfile = require("../models/index");
const User = require("../models/user");
const midware = require('../middleware');
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



//CREATE ROUTE & LOGIN ROUTE

router.post('/register', function(req, res) {
    customerProfile.create(req.body, function(err, user) {
        if(err){
            console.log(err);
            res.redirect("register");
        } else {
            let newUser = new User({username: req.body.username});
            User.register(newUser, req.body.password, function(err, login) {
                if(err) {
                    console.log(err);
                    return res.redirect("register");
                }
                passport.authenticate("local")(req, res, function(){
                    res.render("loggedin", {user: user, login: login});
                });
            });
        }
    });
});

// router.post("/downloads", passport.authenticate("local", {
//     successRedirect: "services",
//     failureRedirect: "downloads"
//     }), function(req, res) {
// });


router.post("/downloads", function(req, res) {
    User.find({}).populate("customerProfile").exec(function (err, user) {
        if (err) {
            console.log(err);
            res.redirect("/downloads")
        } else {
            res.render("loggedin", {user})
        }
    });
});

// router.post("/downloads", function(req, res) {
//     User.findById(req.params.id, function (err, user) {
//         customerProfile.findById(user.user, function(err, customer) {
//             if (err) {
//             console.log(err);
//             res.redirect("/downloads")
//         } else {
//             res.render("loggedin", {customer})
//         }
//         });
//     });
// });

// SHOW ROUTE - LIST ROUTE

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

router.get('/listusers', function (req, res) {
    customerProfile.find({}, function(err, users) {
        if (err) throw err;
        res.render('listusers', {users});
    });
});


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