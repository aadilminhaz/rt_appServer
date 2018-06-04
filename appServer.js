var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');

var index = require('./controller/index');
//var userController = require('./controller/user');

var app = express();

var port = 3000;

//Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Routes or Controllers

app.use('/', index);
//app.use('/user', userController);


app.listen(port, function() {
	console.log('RT Application Server running live on port'+port);
});
