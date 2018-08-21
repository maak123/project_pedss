
const mongoose = require('mongoose');

var SubEvent = mongoose.model('SubEvent', {
     
    subEventName : { type: String },
	sport : { type: String },
	eventId : { type: String },
	dateRange : { type: Object },
	teamCardList : [{ type : String}]
	
	 
     
});





module.exports = { SubEvent };  



