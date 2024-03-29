var passport       = require('passport');
var LocalStrategy  = require('passport-local').Strategy;
var User           = require('../models/user');


passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true,
}, function (req, username, password, done) {
    User.findOne({ username: username }, function(err, user) {
        if (err)
            return done(err);
        if (!user) {
            return done(null, false, { message: 'Incorrect username' });
        };

        // if (!user.verifyPassword(password)) {
            // return done(null, false, { message: 'Incorrect password.' });
        // }
        return done(null, user);
    })
}))

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
        done(err, user);
    });
});


exports.isAuthenticated = passport.authenticate('local');