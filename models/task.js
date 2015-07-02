var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
    list: {
        type:     String,
        required: true
    },
    content: {
        type:     String,
        required: true
    },
    done: {
        type:     Boolean
    }
});


// Export the Mongoose model
module.exports = mongoose.model('Task', TaskSchema);