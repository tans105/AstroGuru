var mongoose = require('mongoose');
var path = require('path');
var Question = require('../model/question');


exports.question = function(email, mobile, query) {
	// var email = req.body.email;
	// var mobile = req.body.mobile;
	// var query = req.body.query;
	console.log(email);
	console.log(mobile);
	console.log(query);
	var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    var postTimeStamp= year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;
	
	console.log(postTimeStamp);
				// console.log(req.body);
				mongoose.connect('mongodb://localhost/registration');
				var newQuestion = new Question({
					email : email,
					mobile : mobile,
					query : query,
					postTimeStamp: postTimeStamp

				});
				newQuestion.save();
				mongoose.connection.close();
				// res.sendfile(path.join(__dirname, '../public', 'profile.html'));

			};
