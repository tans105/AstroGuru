var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	fname : {
		type : String,
		required : true
	},
	lname : {
		type : String,
		required : true
	},
	email : {
		type : String,
		unique : true,
		required : true
	},
	password : {
		type : String,
		required : true
	}
});
module.exports = mongoose.model('User', userSchema);
