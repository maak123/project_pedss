const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
//var bcrypt = require('bcrypt');

var { User } = require('../models/user');

// => localhost:3000/user/
router.get('/', (req, res) => {
    User.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

//user search must availale for mutiple keys
router.get('/find/:word', (req, res) => {
    var regex = new RegExp(req.params.word, 'i'); 
    User.find( {$or: [
    { indexNo: regex },
    { name : regex },
    { faculty: regex },
    
]} ,(err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Users :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving User :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
   /* bcrypt.hash(req.body.password, 10, function(err, hash){
        if(err){
            return res.status(500).json({
                error:err
                
            });
        }else{ console.log(hash);} });  */

            var user = new User({



                    name : req.body.name,
                    indexNo : req.body.indexNo,
                    regNo : req.body.regNo,
                    password : req.body.password,
                    nic : req.body.nic,
                    telephone : req.body.telephone,
                    email : req.body.email,
                    positions:req.body.positions,
                    sport:req.body.sport,
                    faculty:req.body.faculty
                    
                });
                user.save((err, doc) => {
                    if (!err) { res.send(doc); }
                    else { console.log('Error in User Save :' + JSON.stringify(err, undefined, 2)); }
                });

        
    
});
router.get("/team",function (req,res){
    const userIndexList = req.body.userIndexList;
         User.find({indexNo: { $in:userIndexList}}, function(err, docs){
         if (err) return res.status(500).send(err)
        return res.status(200).send(doc);
        });
     });




router.post("/login",function (req,res){

    const userName = req.body.userName;
    const password = req.body.password;

    

    User.findOne(  { indexNo : userName },(err, doc) => {
        if (err) return res.status(500).send(err)
        return res.status(200).send(doc);
        }
    );
    
        /*

        User.passwordCheck(password,user.password,function (err,match) {
            if (err) throw  err;

            if (match){

                const token = jwt.sign(user, config.secret,{expiresIn:86400*3});
                res.json(
                    {
                        state:true,
                        token:"JWT " + token,
                        user:{
                            name : req.body.name,
                            indexNo : req.body.indexNo,
                            regNo : req.body.regNo,
                            password : req.body.password

                        }
                    }
                    )
            }else {
                res.json({state:false,msg:"password does not match"});
            } 
        });*/

});


router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var user = {

                            name : req.body.name,
                            indexNo : req.body.indexNo,
                            regNo : req.body.regNo,
                            password : req.body.password,
                            nic : req.body.nic,
                            telephone : req.body.telephone,
                            email : req.body.email,
                            positions:req.body.positions,
                            sport:req.body.sport,
                            faculty:req.body.faculty
    };
    User.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    User.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in User Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;
