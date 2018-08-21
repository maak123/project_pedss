const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { AmalClubMember } = require('../models/amalClubMember');

// => localhost:3000/amalClubMember/
router.get('/', (req, res) => {
    AmalClubMember.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving AmalClubMembers :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/user/:userId', (req, res) => {
    if (!ObjectId.isValid(req.params.userId))
        return res.status(400).send(`No record with given id : ${req.params.userId}`);

    AmalClubMember.find({userId : req.params.userId} , (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving AmalClubMember :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    AmalClubMember.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving AmalClubMember :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var amalClubMember = new AmalClubMember({
                    sport : req.body.sport,
                    userId : req.body.userId,
                    position : req.body.position
                });
                amalClubMember.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in AmalClubMember Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var amalClubMember = {

                    sport : req.body.sport,
                    userId : req.body.userId,
                    position : req.body.position
    };
    AmalClubMember.findByIdAndUpdate(req.params.id, { $set: amalClubMember }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in AmalClubMember Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    AmalClubMember.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in AmalClubMember Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
