//This will be run first
console.log("running");

var chainapi = require('./chainapi');
var ChainApi = new chainapi();

//ChainApi.postData("{\"Hello\":\"World\"}");
//ChainApi.getData('chain_6972b4c843fb6a43bd94ba772a40908e47652de8161d8a473981a502fba58ca8');

var express = require('express'),
    path = require('path');
const bodyParser = require('body-parser');

//create our express app
var app = express();
app.use(bodyParser.text({}));

//add some standard express middleware

//routes
app.get('/:chain', function(req, res) {
	console.log(req.params.chain);
	ChainApi.getData(req.params.chain).then(responseData => {
    	res.send(responseData);
	})
});

app.post('/', function(req, res) {
	console.log(req.body);
	ChainApi.postData(req.body).then(responseData => {
    	res.send(responseData);
	})
});

//have our app listen on port 3000
app.listen(3000);
console.log('Your app is now running at: http://127.0.0.1:3000/');