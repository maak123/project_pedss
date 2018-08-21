const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { Event } = require('../models/event');

// => localhost:3000/event/
router.get('/', (req, res) => {
    Event.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Events :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Event :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var event = new Event({
                    eventName : req.body.eventName,
                    eventDesc : req.body.eventDesc,
                    status : req.body.status,
                    dateRange : req.body.dateRange
                    
                });
                event.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in Event Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var event = {

         eventName : req.body.eventName,
         eventDesc : req.body.eventDesc,
         status : req.body.status,
         dateRange : req.body.dateRange
    };
    Event.findByIdAndUpdate(req.params.id, { $set: event }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Event Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Event.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Event Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
