function loggedOut(req, res, next) {
    if (req.session && req.session.userId) {
        return res.redirect('../downloads');
    }
    return next();
};


function reqLogIn(req, res, next) {
    //checks for session with a userId prop
    if(req.session && req.session.userId) {
        return next();
    } else {
        let err = new Error("You must be logged in");
        err.status = 401;
        return next(err);
    }
    //else spit error message "must be logged in"
}

module.exports.requiresLogIn = reqLogIn;
module.exports.loggedOut = loggedOut;