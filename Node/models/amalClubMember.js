
const mongoose = require('mongoose');

var AmalClubMember = mongoose.model('AmalClubMember', {
     
    sport : { type: String },
	userId : { type: String },
	position:{ type: String }
     
});





module.exports = { AmalClubMember };  
