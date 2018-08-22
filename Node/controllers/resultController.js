const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { Result } = require('../models/result');

// => localhost:3000/result/
router.get('/', (req, res) => {
    Result.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Results :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/subEventId/:subEventId', (req, res) => {
    Result.find( { subEventId : req.params.subEventId },(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Results :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/teamCardId/:teamCardId', (req, res) => {
    Result.find( { teamCardList : req.params.teamCardId },(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Results :' + JSON.stringify(err, undefined, 2)); }
    });
});


router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Result.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Result :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var result = new Result({

                    teamCardList :req.body.teamCardList,
                    matchType : req.body.matchType,
                    winner : req.body.winner,
                    subEventId : req.body.subEventId,
                    places : req.body.places
                    
                });
                result.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in Result Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});



router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var result = {
                    teamCardList :req.body.teamCardList,
                    matchType : req.body.matchType,
                    winner : req.body.winner,
                    subEventId : req.body.subEventId,
                    places : req.body.places
    };
    Result.findByIdAndUpdate(req.params.id, { $set: result }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Result Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Result.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Result Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
