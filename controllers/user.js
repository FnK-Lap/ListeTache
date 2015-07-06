var User  = require('../models/user');

// - - - - - - - - - - - - - - -//
//          /api/users          //
// - - - - - - - - - - - - - - -//
// POST
exports.postUsers = function(req, res) {
    var user = new User({
        username: req.body.username,
        password: req.body.password
    });

    user.save(function(err) {
        if (err)
            return res.send(err);

        return res.json({ user: user });
    });
};

// GET
exports.getUsers = function(req, res) {
    User.find(function(err, users) {
        if (err)
            return res.send(err);

        return res.json(users);
    });
};

// - - - - - - - - - - - - - - - //
//       /api/user/:user_id      //
// - - - - - - - - - - - - - - - //
// GET
exports.getUser = function(req, res) {
     passport.authenticate('local', function(err, user, info) {
    if (err) {
      // if error happens
      return next(err);
    }
    
    if (!user) {
      // if authentication fail, get the error message that we set
      // from previous (info.message) step, assign it into to
      // req.session and redirect to the login page again to display
      req.session.messages = info.message;
      return res.redirect('/login');
    }

    // if everything's OK
    req.logIn(user, function(err) {
      if (err) {
        req.session.messages = "Error";
        return next(err);
      }

      // set the message
      req.session.messages = "Login successfully";
      return res.redirect('/');
    });
    
  })(req, res, next);


    User.find({ _id: req.params.user_id }, function(err, user) {
        if (err)
            return res.send(err);

        return res.json({user: user});
    })
}

// DELETE
exports.deleteUser = function(req, res) {
    User.remove({ _id: req.params.user_id }, function(err) {
        if (err)
            return res.send(err);

        return res.json({ message: 'User removed' });
    });
}

// PUT
exports.putUser = function(req, res) {
    User.update({ _id: req.params.user_id }, { username: req.body.username, password: req.body.password }, function(err) {
        if (err)
            return res.send(err);

        return res.json({message: 'User updated'});
    })
}

exports.login = function(req, res) {
    User.findOne({ username: req.body.username }, function (err, user) {
        if (err) { return res.json(err); }
        // No user found with that username
        if (!user) { return res.json(false); }
        // Make sure the password is correct
        user.verifyPassword(req.body.password, function(err, isMatch) {
            if (err) { return res.json(err); }

            // Password did not match
            if (!isMatch) { return res.json(false); }

            user.password = '';
            return res.json(user);
        });
    });
}