var List = require('../models/list');
var Task = require('../models/task');

// - - - - - - - - - - - - - - - - - - - - - - - - - //
//              /api/list/:list_id/tasks             //
// - - - - - - - - - - - - - - - - - - - - - - - - - //
// GET
exports.getTasks = function(req, res) {
    Task.find({ list: req.params.list_id }, function(err, tasks) {
        if (err)
            return res.send(err);

        return res.json(tasks);
    });
};

// POST
exports.postTasks = function(req, res) {
    var task = new Task({
        list:    req.params.list_id,
        content: req.body.content,
        done:    false
    });

    List.findOne({ _id: req.params.list_id }, function(err, list) {
        if (err)
            return res.send(err);
        
        list.tasks.push(task);
        task.isNew;

        list.save(function(err) {
            if (err)
                return res.send(err);

            return res.json({ task: task });
        });
    })

}


// - - - - - - - - - - - - - - - - - - - - - - - - -//
//        /api/list/:list_id/task/:task_id          //
// - - - - - - - - - - - - - - - - - - - - - - - - -//
// GET
exports.getTask = function(req, res) {
    Task.find({ _id: req.params.task_id, list: req.params.list_id }, function(err, task) {
        if (err)
            return res.send(err);

        return res.json(task)
    })
}

// DELETE
exports.deleteTask = function(req, res) {
    List.findOne({ _id: req.params.list_id }, function(err, list) {
        list.tasks.id(req.params.task_id).remove();
        list.save(function(err) {
            if (err)
                return res.send(err);

            return res.json({message: 'Task deleted'});
        })
    })
}

// PUT
exports.putTask = function(req, res) {
    List.findOneAndUpdate({ _id: req.body.list, "tasks._id": req.body._id }, {
        "$set": {
            "tasks.$.done": req.body.done,
            "tasks.$.content": req.body.content
        }

    },function(err,doc) {
        if (err)
            return res.send(err);
        return res.json(doc);
    })
}