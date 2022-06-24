const express = require('express');
var router = express.Router();
var Orders  = require('../models/order-model');


router.post('/postOrder', (req, res) => {
    var emp = new Orders({
        name: req.body.name,
        price: req.body.price,
    });
    emp.save((err, doc) => {
        console.log("err",err,"doc",doc);
        if (!err) { res.send(doc); }
        else { console.log('Error  :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;