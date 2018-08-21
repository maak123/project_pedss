
const mongoose = require('mongoose');

var FacSportCaptain = mongoose.model('FacSportCaptain', {
     
    sport : { type: String },
	userId : { type: String },
	faculty :{ type: String }
     
});





module.exports = { FacSportCaptain };  
