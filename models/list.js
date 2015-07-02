var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
    admin: {
        type:     String,
        required: true,
    },
    users: {
        type:     String
    },
    title: {
        type:     String,
        required: true
    }
});


// Export the Mongoose model
module.exports = mongoose.model('List', ListSchema);