const express = require('express');
const router = express.Router();

const Maintenance = require('../model/Maintenance');


router.get('/viewhistory/:id', async (req, res) => {
    console.log("Hello")
    Maintenance.find({
        userid: req.params.id
    }).exec(function (error, result, next) {
        if (error) return next(error);
        res.json(result);
    });

});


module.exports = router;