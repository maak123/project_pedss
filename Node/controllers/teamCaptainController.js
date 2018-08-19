const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { TeamCaptain } = require('../models/teamCaptain');

// => localhost:3000/teamCaptain/
router.get('/', (req, res) => {
    TeamCaptain.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving TeamCaptains :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/indexNo/:indexNo', (req, res) => {
    TeamCaptain.findOne( { indexNo : req.params.indexNo },(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving TeamCaptains :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    TeamCaptain.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving TeamCaptain :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {

   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var teamCaptain = new TeamCaptain({

                    userId : req.body.userId,
                    faculty : req.body.faculty,
                    indexNo : req.body.indexNo,
                    subEventId : req.body.subEventId,
                    teamCardId :  req.body.teamCardId,
                    isSubmitted : req.body.isSubmitted
            
                });
                teamCaptain.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in TeamCaptain Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var teamCaptain = {


                    userId : req.body.userId,
                    faculty : req.body.faculty,
                    indexNo : req.body.indexNo,
                    subEventId : req.body.subEventId,
                    teamCardId :  req.body.teamCardId,
                    isSubmitted : req.body.isSubmitted


    };
    TeamCaptain.findByIdAndUpdate(req.params.id, { $set: teamCaptain }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in TeamCaptain Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    TeamCaptain.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in TeamCaptain Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
