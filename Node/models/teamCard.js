
const mongoose = require('mongoose');

var TeamCard = mongoose.model('TeamCard', {
     
    faculty : { type: String },
	sport : { type: String },
	subEventId : { type: String },
	userIndexList : [{ type : String}]
	
	 
     
});





module.exports = { TeamCard };  



