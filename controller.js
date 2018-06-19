const express = require("express");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const mongoClient = require('mongodb').MongoClient;
const routes = require('./routes/index.js');
//const user = require('./models/user.js');
const port = process.env.PORT || 3000;
const app = express();
const url = "mongodb://localhost:27017/testForAuth";
app.use('/public', express.static(process.cwd() + '/public/stylesheets'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
routes(app);

/* currently not working

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
}); */

app.listen(port, function() {
  console.log('Server listening on port ' + port + '...');
});
