var mongoose = require('mongoose');
var Task = require('../models/task');


var ListSchema = new mongoose.Schema({
    admin: {
        type:     String,
        required: true,
    },
    users: [
        {
            id: {
                type: String,
                required: true,
                unique: true
            }
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