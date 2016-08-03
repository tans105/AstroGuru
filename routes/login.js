var path = require('path');
var mongoose = require('mongoose');
var User = require('../model/user');
// var bcrypt = require('bcrypt');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';

var isAuthenticated=false;


var async = require('async');
exports.login = function(req, res) {

	var emailEntered = req.body.email;
	var passEntered = req.body.password;
	// var salt = bcrypt.genSaltSync(10);
	var pass;
	mongoose.connect('mongodb://localhost/registration');

	async.series([ function(callback) {
		User.findOne({
			email : emailEntered
		}, function(err, doc) {
			pass = doc.password;
			mongoose.connection.close();
			console.log('Disconnected from server successfully');
			callback();
		});
	}, function(callback) {
		console.log(pass);
		 var decipher = crypto.createDecipher(algorithm,password)
 		 var dec = decipher.update(pass,'hex','utf8')
		  dec += decipher.final('utf8');
		// console.log(bcrypt.hashSync(passEntered, salt));
		if (passEntered === dec) {
			callback();
			isAuthenticated=true;
			console.log(isAuthenticated);
			res.sendfile(path.join(__dirname, '../public', 'profile.html'));
		} else {
			res.send("incorrect credentials");

			callback();
		}
	} ]);

};