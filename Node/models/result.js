const mongoose = require('mongoose');

var Result = mongoose.model('Result', {
     
    teamCardList : [{ type : String}],
	matchType : { type: String },
	winner : { type: String },
	subEventId : { type: String },
	places : { type : Object }
	
 
     
});





module.exports = { Result };  