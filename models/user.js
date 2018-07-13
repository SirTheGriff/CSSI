var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema ({
    username: {type: String, required: true},
    password: {type: String, required: true},
    profile: [
        { type: mongoose.Schema.ObjectId, ref: 'customerProfile' }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);