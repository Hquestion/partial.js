// run in terminal: $ sudo node index

var framework = require('partial.js');
var http = require('http');

var port = 80;
var debug = true;

framework.run(http, debug, port);