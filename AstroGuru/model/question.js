var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
	email : {
		type : String,
	},
	mobile : {
		type : String
	},
	query : {
		type : String
	},
	postTimeStamp:{
		type : String
	}
	
});
module.exports = mongoose.model('Question', questionSchema);
