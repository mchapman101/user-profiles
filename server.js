var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var config = require('./config.json');
var cors = require('cors');
var userCtrl = require('./controllers/userCtrl');
var profileCtrl = require('./controllers/profileCtrl');

var app = express();
var corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));

app.get('/api/profiles', profileCtrl.profilePusher);
app.post('/api/login', userCtrl.login);

var port = 3000;
app.listen(port, function () {
  console.log('Hey Listen! on port:', port);
});
