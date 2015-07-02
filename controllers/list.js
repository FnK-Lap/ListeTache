var List = require('../models/list');

// - - - - - - - - - - - - - - -//
//          /api/lists          //
// - - - - - - - - - - - - - - -//
// GET
exports.getLists = function(req, res) {
    List.find(function(err, lists) {
        if (err)
            return res.send(err);

        return res.json(lists);
    });
};

// POST
exports.postLists = function(req, res) {
    var list = new List({
        admin: req.user.id,
        title: req.body.title
    });

    list.save(function(err) {
        if (err)
            return res.send(err);

        return res.json({ list: list });
    });
}


// - - - - - - - - - - - - - - -//
//       /api/list/:list_id     //
// - - - - - - - - - - - - - - -//
// GET
exports.getList = function(req, res) {
    List.find({ _id: req.params.list_id }, function(err, list) {
        if (err)
            return res.send(err);

        return res.json(list)
    })
}

// DELETE
exports.deleteList = function(req, res) {
    List.remove({ _id: req.params.list_id }, function(err) {
        if (err)
            return res.send(err);

        return res.json({message: 'List deleted'});
    })
}

// PUT
exports.putList = function(req, res) {
    List.update({ _id: req.params.list_id }, { 
        title: req.body.title, 
    }, function(err) {
        if (err)
            return res.send(err);

        return res.json({message: 'List updated'});
    })
}