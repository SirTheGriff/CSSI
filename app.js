const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express();

//APP CONFIGURATION

// mongoose.connect("mongodb://localhost/cssidata");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//MONGOOSE/MODEL CONFIG

//RESTFUL ROUTES

app.get('/', function(req, res) {
   res.render("index");
});

//INDEX ROUTE


app.get('/aboutus', function(req, res) {
    res.render('aboutus');
});

app.get('/contactus', function(req, res) {
    res.render('contactus');
});

app.get('/downloads', function(req, res) {
    res.render('downloads');
});

app.get('/register', function(req, res) {
    res.render('register');
});

app.get('/services', function(req, res) {
    res.render('services');
});

app.get('/whitepapers', function(req, res) {
    res.render('whitepapers');
});


//NEW ROUTE



//CREATE ROUTE



//SHOW ROUTE



//EDIT ROUTE


//UPDATE ROUTE



//DESTROY-DELETE ROUTE


app.listen(2424, function() {
    console.log("server is runnin");
});