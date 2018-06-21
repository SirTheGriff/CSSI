const express = require('express');
const router = express.Router();
const customer = require("../models/index");


//RESTFUL ROUTES

router.get('/', function(req, res) {
    res.render("index");
});

//INDEX ROUTE


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


//NEW ROUTE

router.post('/register', function(req, res) {
    res.json(req.body);
});


//CREATE ROUTE



//SHOW ROUTE



//EDIT ROUTE


//UPDATE ROUTE



//DESTROY-DELETE ROUTE

module.exports = router;