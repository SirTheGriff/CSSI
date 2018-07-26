const express = require('express');
const router = express.Router();
const customerProfile = require("../models/index");



router.get("/listusers/:id", function(req, res) {
    customerProfile.findById(req.params.id, function(err, user){
        if(err) {
            console.log(err);
        } else {
            res.json(user);
        }
    });
});



module.exports = router;


