var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
const customerProfile = require("../models/index");

const userSchema = new mongoose.Schema ({
    username: String,
    password: String,
    customerProfile: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'customerProfile' }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);