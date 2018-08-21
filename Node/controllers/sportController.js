 const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { Sport } = require('../models/sport');

// => localhost:3000/sport/
router.get('/', (req, res) => {
    Sport.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Sports :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Sport.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Sport :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var sport = new Sport({
                    name : req.body.name,
                    type : req.body.type,
                    playersNo : req.body.playersNo
                    
                });
                sport.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in Sport Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var sport = {
                    name : req.body.name,
                    type : req.body.type,
                    playersNo : req.body.playersNo
                    
                    };
    Sport.findByIdAndUpdate(req.params.id, { $set: sport }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Sport Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Sport.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Sport Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
