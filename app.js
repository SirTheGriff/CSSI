const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express(),
      passport = require("passport"),
      LocalStrategy = require("passport-local"),
      passportLocalMongoose = require("passport-local-mongoose"),
      User = require("./models/user"),
      methodOverride = require("method-override");

const routes = require('./routes');


//APP CONFIGURATION

mongoose.connect("mongodb://localhost/cssi");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', routes);



app.use(require("express-session")({
    secret: "cssi inc",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.use(function(req, res, next) {
    res.locals.currentUser = req.user;
    next();
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server is runnin");
});