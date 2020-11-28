const express = require('express');
const router = express.Router();

const maxmincontroller = require("../controllers/maxmincontroller");

router.get('/',(req, res) =>{
    res.send('hello Fluke-tech');
});

router.post('/maxmin', maxmincontroller);


module.exports = router;