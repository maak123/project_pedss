
const mongoose = require('mongoose');

var User = mongoose.model('User', {
     
     name : { type: String },
	indexNo : { type: String },
	regNo : { type: String },
	password : { type: String },
	nic : { type: String },
	telephone : { type: Number },
	email : { type: String },
	positions:{ type: String },
	sport:{ type: String },
	faculty:{ type:String}
	
	 
     
});





module.exports = { User };  



