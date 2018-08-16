
const mongoose = require('mongoose');

var Event = mongoose.model('Event', {
     
    eventName : { type: String },
	eventDesc : { type: String },
	status : { type: String },
	dateRange : { type: Object },
	 
     
});





module.exports = { Event };  



