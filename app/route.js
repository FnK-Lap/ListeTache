module.exports = function(app, router) {
    var userController = require('../controllers/user');

    // Create endpoint handlers for /users
    router.route('/users')
        .post(userController.postUsers)
        .get(userController.getUsers);
}