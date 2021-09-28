var express = require('express');

var app = express();
var cors = require('cors');
var fs = require("fs");

app.use(cors())

app.get('/', function (req, res){
	
  res.send("Hello Kevin how are You doing today");
});


app.get('/api/emissionData', function(req,res){
	fs.readFile(__dirname+"/"+"MockEmissionsData.json",'utf8',function(err,data){
		console.log(data);
		res.end(data);
	});
});

var server = app.listen(8081, function(){
  
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})