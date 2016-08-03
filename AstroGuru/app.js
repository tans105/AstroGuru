//module dependencies
var express = require('express'),  http = require('http'), path = require('path');
var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var url = require('url');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var mongoose = require('mongoose');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use("/styles", express.static(__dirname + '/public/css'));
app.use("/scripts", express.static(__dirname + '/public/js'));
app.use("/images", express.static(__dirname + '/public/images'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
	extended : true
}));

app.use(express.json()); // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

// Controllers

//var loginController = require('./routes/index');
// var loginController = require('./routes/login');
// var registrationController = require('./routes/registration');
var mailController = require('./routes/mailer');
// var profileController = require('./routes/askquestion');


//routes

//app.get('/', loginController.login);
// app.post('/', registrationController.register);
// app.post('/login', loginController.login);
app.post('/mail', mailController.sendMail); // handle the route at yourdomain.com/sayHello
// app.post('/profile', profileController.question);


//server creation
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
