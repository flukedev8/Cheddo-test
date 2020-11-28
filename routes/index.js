const express = require('express');
const router = express.Router();

const maxmincontroller = require("../controllers/maxmincontroller");
const findstrcontroller = require("../controllers/findstrcontroller");


router.get('/',(req, res) =>{
    res.send('hello Fluke-tech');
});

router.post('/maxmin', maxmincontroller);
router.post('/findstr', findstrcontroller);
router.post('/checkbracket', require("../controllers/checkbracketcontroller"));


module.exports = router;