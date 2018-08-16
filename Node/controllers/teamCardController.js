 const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { TeamCard } = require('../models/teamCard');

// => localhost:3000/teamCard/
router.get('/', (req, res) => {
    TeamCard.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving TeamCards :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    TeamCard.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving TeamCard :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/teamcarduserlist/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    TeamCard.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving TeamCard :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var teamCard = new TeamCard({
                        faculty : req.body.faculty,
                        sport : req.body.sport,
                        subEventId : req.body.subEventId,
                        userIndexList : req.body.userIndexList
                    
                });
                teamCard.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in TeamCard Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var teamCard = {

                        faculty : req.body.faculty,
                        sport : req.body.sport,
                        subEventId : req.body.subEventId,
                        userIndexList : req.body.userIndexList
                    
    };
    TeamCard.findByIdAndUpdate(req.params.id, { $set: teamCard }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in TeamCard Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    TeamCard.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in TeamCard Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
