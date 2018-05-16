'use strict';

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('pages/index');
  });
  app.get('/table', function(req, res) {
    res.render('pages/table');
  });
  app.get('/signup', function(req, res) {
    res.render('pages/signup');
  });
  app.get('/signin', function(req, res) {
    res.render('pages/signin');
  });
};
