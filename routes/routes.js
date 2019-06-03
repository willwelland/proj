var async = require('async');
var message = null;

var getMain = function(req, res) {
	if (req.session.user != null) {
		res.redirect('/home');
	}
	res.render('login.ejs', { message : message, user : req.session.user });
};

var getHome = function(req, res) {
	res.render('home.ejs', { count : 3, arr : [{"loc":"","freqa":"","metha":"on","methb":"on",
		"methc":"on"},{"loc":"","freqa":"","metha":"on","methb":"on","methc":"on"},{"loc":"",
		"freqa":"","metha":"on","methb":"on","methc":"on"}], houses : [{"name":"Potomac Towers","lat":
			"38.897460", "lon":"-77.088220"}, {"name":"250 K St NW","lat":
			"38.902560", "lon":"-77.015080"}, {"name":"2152 F St NW","lat":
			"38.897110", "lon":"-77.048550"}, {"name":"1221 Van","lat":
			"38.875950", "lon":"-77.008220"}] });
};

var getTotalCommute = function(req, res) {
	
}

async function addRow(req, res) {
	var count = req.body.num;
	try {
		count++;
		console.log(count);
	    res.json({
	      success: true,
	      count: count,
	      arr: req.body.arr,
	    });
	  } catch (err) {
	    res.json({
	      success: false,
	      error: err,
	    });
	  }
	}

var searchCity = function(req, res) {
	
}

var routes = { 
  get_main: getMain,
  get_home: getHome,
  add_row: addRow,
  search_city: searchCity,
};

module.exports = routes;