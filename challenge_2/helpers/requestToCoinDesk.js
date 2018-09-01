var axios = require('axios');


//https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-09-01&end=2013-09-05

var getPrices = function(dateStart, dateEnd, callback){
	axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${dateStart}&end=${dateEnd}`)
  	.then(function (response) {
    	callback(response.data.bpi);
  	})
  	.catch(function (error) {
    	console.log(error);
  	});
}

// getPrices('2018-08-10', '2018-08-22', console.log);

module.exports.getPrices = getPrices;