 const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { SubEvent } = require('../models/subEvent');

// => localhost:3000/subEvent/
router.get('/', (req, res) => {
    SubEvent.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving SubEvents :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    SubEvent.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving SubEvent :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var subEvent = new SubEvent({
                    subEventName : req.body.subEventName,
                    sport : req.body.sport,
                    status : req.body.status,
                    dateRange : req.body.dateRange,
                    eventId : req.body.eventId,
                    dateRange : req.body.dateRange,
                    teamCardList : req.body.teamCardList
                    
                });
                subEvent.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in SubEvent Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var subEvent = {

                    subEventName : req.body.subEventName,
                    sport : req.body.sport,
                    status : req.body.status,
                    dateRange : req.body.dateRange,
                    eventId : req.body.eventId,
                    dateRange : req.body.dateRange,
                    teamCardList : req.body.teamCardList
                    
    };
    SubEvent.findByIdAndUpdate(req.params.id, { $set: subEvent }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SubEvent Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    SubEvent.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in SubEvent Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
