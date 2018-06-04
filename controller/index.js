var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){

	res.send('Welcome to RT Application Server');
});

module.exports = router;
