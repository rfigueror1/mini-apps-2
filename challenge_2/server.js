var express = require('express');
var app = express();
var requestToCoinDesk = require('./helpers/requestToCoinDesk.js');

app.use(express.static(__dirname + '/dist'));

//http://example.com/users/12345/bids?start=2012-01-01&end=2012-01-31

app.get('/prices/:start_date/:end_date', function(req, res){
	var start_date = req.params.start_date;
	var end_date = req.params.end_date;
	
	console.log(start_date);
	console.log(end_date);

	requestToCoinDesk.getPrices(start_date, end_date, function(response){
		res.status(200).send(response);		
	})
  
});

app.listen(3004);


