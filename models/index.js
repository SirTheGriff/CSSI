var mongoose = require("mongoose");
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/cssi');

require('mongoose-type-email');
require('mongoose-type-url');

const customerSchema = new mongoose.Schema({
    companyname: String,
    address: String,
    city: String,
    state: String,
    country: String,
    zip: Number,
    firstname: String,
    lastname: String,
    title: String,
    phone: Number,
    email: mongoose.SchemaTypes.Email,
    website: mongoose.SchemaTypes.Url,
    system: String,
    other: String,
    created: {type: Date, default: Date.now},
});

module.exports = mongoose.model("customerProfile", customerSchema);
