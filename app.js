const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express(),
      passport = require("passport"),
      LocalStrategy = require("passport-local").Strategy,
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
app.use(bodyParser.json());
app.use('/', routes);


app.use(passport.initialize());
passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({username: username}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {message: 'Incorrect username'});
            }
            if (!user.validPassword(password)) {
                return done(null, false, {message: 'Incorrect password'});
            }
            return done(null, user);
        });
       }
    ));

//app.use(function(req, res, next) {
//     res.locals.User = req.user;
//     next();
// });

app.listen(2424, function() {
    console.log("server is runnin");
});