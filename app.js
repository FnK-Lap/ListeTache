// Set Up = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var express    = require('express');
var app        = express();
var http       = require('http');
var server     = http.createServer(app);
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var router     = express.Router();
var passport   = require('passport');

// Passport

// Configuration = = = = = = = = = = = = = = = = = = = = = = = = = = =
var config   = require('./config/config.js');

mongoose.connect('mongodb://'+ config.db.host +':'+ config.db.port +'/'+ config.db.dbname);

// Use = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(passport.initialize());
app.use('/api', router); // /api for all routes
app.use(express.static(__dirname + '/public/views'));

// Routes = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
require('./app/route.js')(app, router);

// Launch = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
server.listen(82); // Not 80 with MAMP
console.log('Listen on port 82');