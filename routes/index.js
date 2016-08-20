var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/:time', function(req, res){

	function unixToNatural(unix){ // grabs unix to Natural 
		var date = new Date(unix * 1000);
		var months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		
		var month = months[date.getMonth()];
		var day = date.getDate();
		var year = date.getFullYear();

		var result = month + ' ' + day + ', ' + year;
		return result; 
	}

if(!isNaN(req.params.time)){ // RETURNS Any String that is not a number !isNaN 
		var result = unixToNatural(req.params.time);
		var data = {unix: req.params.time, natural: result};
		res.json(data);
	}	else {
		var natural = new Date(req.params.time) // calls Data function on time
		if(!isNaN(natural)) { // checks if its natural
			var unix = natural / 1000;
			var data = {unix: unix, natural: req.params.time};
			res.json(data);			
			} else{
				res.json({unix: null, natural: null});

		}
	}
});


module.exports = router;
