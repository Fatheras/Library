'use strict';
const express = require('express');

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
/*const express = require('express'),
      router = express.Router();

  router.get('/', function(req, res) {
    res.render('pages/index');
  });
  router.get('/table', function(req, res) {
    res.render('pages/table');
  });
  router.get('/signup', function(req, res) {
    res.render('pages/signup');
  });
  router.get('/signin', function(req, res) {
    res.render('pages/signin');
  });

module.exports = router; */
/*
