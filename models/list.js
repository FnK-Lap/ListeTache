var mongoose = require('mongoose');
var Task = require('../models/task');
var User = require('../models/user');


var ListSchema = new mongoose.Schema({
    admin: {
        type:     String,
        required: true,
    },
    users: [
        {
            id: String
        }
    ],
    title: {
        type:     String,
        required: true
    },
    tasks: [Task.schema]
});


// Export the Mongoose model
module.exports = mongoose.model('List', ListSchema);