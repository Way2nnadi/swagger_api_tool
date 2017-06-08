'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import path from 'path';

var server = (0, _express2.default)(); // IMPORTS

var port = 3001;
var yamlUrl = "yaml/external_apis.yaml";

server.set('view engine', 'pug');
server.use(_express2.default.static(__dirname + '/public'));

server.get('/', function (req, res) {
  res.render('index', { yamlUrl: yamlUrl });
});

server.get('/:apiType', function (req, res) {
  // internal user validation - Solution 1
  // ui to put into username and pass word
  // if validated then give them ass to internal.yaml

  // Solution 2 
  // do validation based off user header/cookie

  var apiType = req.params.apiType;
  var yamlFiles = {
    internal: "yaml/internal_apis.yaml",
    all: "yaml/all_apis.yaml"
  };

  res.render('index', { yamlUrl: yamlFiles[apiType] || yamlUrl });
});
server.listen(port, function () {

  console.log('Node server started on port: ' + port + ' at ' + Date(new Date()));
});