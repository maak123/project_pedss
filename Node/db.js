const mongoose = require('mongoose');

mongoose.connect('mongodb://ramesh:ramad143@ds123372.mlab.com:23372/pedss',(err)=>{
	if(!err)
		console.log('MongoDB connection succeeded.');
	else
		console.log('Error in DB connection :'+JSON.stringify(err,undefined,2));
});

module.exports=mongoose;

