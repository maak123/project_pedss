const mongoose = require('mongoose');

var Sport = mongoose.model('Sport', {
     
    name : { type: String },
	type : { type: String },
	playersNo : { type: Number }
	 
     
});





module.exports = { Sport };  
