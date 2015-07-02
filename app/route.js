module.exports = function(app, router, passport) {
    var userController = require('../controllers/user');
    var listController = require('../controllers/list');
    var taskController = require('../controllers/task');
    var authController = require('../controllers/auth');

    // - - - - - - - - - - - - - - - - - - - - //
    //                 U S E R                 //
    // - - - - - - - - - - - - - - - - - - - - //
    router.route('/users')
        .post(userController.postUsers)
        .get(userController.getUsers)
    ;

    router.route('/user/:user_id')
        .get(userController.getUser)
        .delete(userController.deleteUser)
        .put(userController.putUser)
    ;

    // - - - - - - - - - - - - - - - - - - - - //
    //                 L I S T                 //
    // - - - - - - - - - - - - - - - - - - - - //
    router.route('/lists')
        .get(listController.getLists)
        .post(listController.postLists)
    ;

    router.route('/list/:list_id')
        .get(listController.getList)
        .delete(listController.deleteList)
        .put(listController.putList)
    ;

    // - - - - - - - - - - - - - - - - - - - - //
    //                 T A S K                 //
    // - - - - - - - - - - - - - - - - - - - - //
    router.route('/list/:list_id/tasks')
        .get(taskController.getTasks)
        .post(taskController.postTasks)
    ;

    router.route('/list/:list_id/task/:task_id')
        .get(taskController.getTask)
        .delete(taskController.deleteTask)
        .put(taskController.putTask)
    ;


    // - - - - - - - - - - - - - - - - - - - - //
    //                 A U T H                 //
    // - - - - - - - - - - - - - - - - - - - - //
    router.route('/login')
        .post(passport.authenticate('local', { successRedirect: '/api/users',
                failureRedirect: '/api/login',
        }))
    ;
}