var mongoose = require('mongoose');
var path = require('path');
var User = require('../model/user');
// var bcrypt = require('bcrypt');
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    pass = 'd6F3Efeq';



exports.register = function(req, res) {
	var fname = req.body.fname;
	var password = req.body.password;
	var lname = req.body.lname;
	var email = req.body.email;


var cipher = crypto.createCipher(algorithm,pass);
 var crypted = cipher.update(password,'utf8','hex');
  crypted += cipher.final('hex');

	// var salt = bcrypt.genSaltSync(10);
	// var passwordToSave = bcrypt.hashSync(password, salt)
				// console.log(req.body);
				mongoose.connect('mongodb://localhost/registration');
				var newUser = new User({
					fname : fname,
					lname : lname,
					email : email,
					password : crypted

				});
				newUser.save();
				
				res.sendfile(path.join(__dirname, '../public', 'index.html'));
				mongoose.connection.close();

			};
