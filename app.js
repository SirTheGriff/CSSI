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
   res.redirect("/home");
});

//INDEX ROUTE

app.get('/home', function(req, res) {
    res.render('index');
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