const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { FacSportCaptain } = require('../models/facSportCaptain');

// => localhost:3000/facSportCaptain/
router.get('/', (req, res) => {
    FacSportCaptain.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving FacSportCaptains :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    FacSportCaptain.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving FacSportCaptain :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/user/:userId', (req, res) => {
    if (!ObjectId.isValid(req.params.userId))
        return res.status(400).send(`No record with given id : ${req.params.userId}`);

    FacSportCaptain.find({userId : req.params.userId} , (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving FacSportCaptain :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var facSportCaptain = new FacSportCaptain({
                   sport : req.body.sport,
                    userId : req.body.userId,
                    faculty : req.body.faculty
                    
                });
                facSportCaptain.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in FacSportCaptain Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var facSportCaptain = {

                    sport : req.body.sport,
                    userId : req.body.userId,
                    faculty : req.body.faculty
                    
    };
    FacSportCaptain.findByIdAndUpdate(req.params.id, { $set: facSportCaptain }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FacSportCaptain Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    FacSportCaptain.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in FacSportCaptain Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
