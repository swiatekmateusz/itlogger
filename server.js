var path = require('path')
var express = require('express')
var jsonServer = require('json-server')
var demodata = require('./db.json')
const middlewares = jsonServer.defaults();

var router = jsonServer.router(demodata) // Express router
var server = jsonServer.create()       // Express server

//server.use('/static', express.static(path.join(__dirname, 'client', 'public', 'index.html')))

server.use('/', express.static(path.join(__dirname, 'client', 'build')))

// Avoid CORS issue
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(middlewares)
server.use(router)

const PORT = process.env.PORT || 5000;

server.listen(PORT)