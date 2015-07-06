// Set Up = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
var express    = require('express');
var app        = express();
var http       = require('http');
var server     = http.createServer(app);
var mongoose   = require('mongoose');
var bodyParser = require('body-parser');
var router     = express.Router();
var passport   = require('passport');
var session    = require('express-session');

// Passport

// Configuration = = = = = = = = = = = = = = = = = = = = = = = = = = =
var config   = require('./config/config.js');

mongoose.connect('mongodb://'+ config.db.host +':'+ config.db.port +'/'+ config.db.dbname);

// Use = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
    app.use(session({
    secret: 'SecretBitch',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/api', router); // /api for all routes
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules'));

// Routes = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
require('./app/route.js')(app, router, passport);

app.get('*', function(req, res) {
    res.sendFile('index'); // load the single view file (angular will handle the page changes on the front-end)
});

// Launch = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
server.listen(82); // Not 80 with MAMP
console.log('Listen on port 82');
