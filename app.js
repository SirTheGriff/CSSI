const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      app = express();

const routes = require('./routes');


//APP CONFIGURATION

// mongoose.connect("mongodb://localhost/cssidata");
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', routes);



app.listen(2424, function() {
    console.log("server is runnin");
});