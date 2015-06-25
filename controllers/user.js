var User  = require('../models/user');

// POST /api/users
exports.postUsers = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err)
            res.send(err);

        res.json({ message: 'New beer drinker added to the locker room!' });
    });
};

// GET /api/users
exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};

exports.login = function(req, res) {
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) { return res.json(err); }

        // No user found with that username
        if (!user) { return res.json(false); }

        // Make sure the password is correct
        user.verifyPassword(req.body.password, function(err, isMatch) {
            if (err) { res.json(err); }

            // Password did not match
            if (!isMatch) { return res.json(false); }

            user.password = '';
            res.json(user);
        });
    });
}