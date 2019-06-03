var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes/routes.js');
var app = express();
var session = require('express-session');

app.use(cookieParser());
app.use(bodyParser());
app.use(session({secret: 'secret-token', cookies : {user : 'willwelland', message : ''}}));

app.get('/', routes.get_main);
app.get('/home', routes.get_home);
app.post('/addrow', routes.add_row);
app.post('/searchCity', routes.search_city);

/* Run the server */

console.log('Author: Will Welland (wwelland)');
app.listen(8080);
console.log('Server running on port 8080. Now open http://localhost:8080/ in your browser!');
