var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var url = require('url');
var errorHandler = require('errorhandler');
var logger = require('morgan')

// all environments
app.set('port', process.env.PORT || 9000);

// Serve static assets normally
app.use(express.static(path.resolve(__dirname, 'build')));

// Logger
app.use(logger('dev'));

// Ensure that anything not routed is captured here
app.get('*', (req, res, next) => {

  return res
          .status(200)
          .type('text/html')
          .sendFile('index.html', { root: path.join(__dirname, '../sparta_plaesent', '/build') });
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});