const express = require('express');
const router = express.Router();
const Farmer = require('../model/Farmer');
const Inventory = require('../model/Inventory');
const Income = require('../model/Income');
const Expense = require('../model/Expense');
const MilkRecord = require('../model/MilkRecord');
const Prescription = require('../model/Prescription');
const Animal = require('./Animal');
const Doctor = require('../model/Doctor');
const Person = require('../model/person');





router.get('/profile/:id', async (req, res) => {

    try{
        Person.find({
            _id: req.params.id
        }).exec(function (error, result, next) {
            if (error) return next(error);
            res.json(result);
        });
    } catch(err){
          res.send(err);
    }
    
 }) ;   
 

 router.get('/viewanimal', async (req, res) => {

    Animal.find().exec(function (error, result, next) {
        if (error) return next(error);
        res.json(result);
    });



});


module.exports = router;