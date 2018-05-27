'use strict';
var express = require("express");
var bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
var mongoose = require('mongoose');
const mongoClient = require('mongodb').MongoClient;
var routes = require('./routes/index.js');
//var user = require('./models/user.js');
var port = process.env.PORT || 3000;
var app = express();
const url = "mongodb://localhost:27017/testForAuth";
//app.use('/public', express.static(process.cwd() + '/public'));
app.use('/public', express.static(process.cwd() + '/public/stylesheets'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
routes(app);

/*app.post('/', function(req, res) {
  new user({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  }).save(function(err, doc) {
    if (err) res.json(err);
    else res.send('Successfully inserted!');
  });
}); */
app.post("/", function(req, res) {
  debugger;

  if (!req.body) {
    return res.sendStatus(400)
  }

  var userEmail = req.body.email;
  var userName = req.body.name;
  var userPassword = req.body.password;

  var user = {
    email: userEmail,
    name: userName,
    password: userPassword
  };

  mongoClient.connect(url, function(err, client) {
    client.db("testForAuth").collection("users").insertOne(user, function(err, result) {
      if (err) {
        return res.status(400).send()
      }

      res.send(user);
      client.close();
    });
  });
});

app.listen(port, function() {
  console.log('Server listening on port ' + port + '...');
});
