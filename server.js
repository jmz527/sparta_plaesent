var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var url = require('url');
var errorHandler = require('errorhandler');
var logger = require('morgan')
// var historyApiFallback = require('connect-history-api-fallback');

// all environments
app.set('port', process.env.PORT || 9000);

// Serve static assets normally
app.use(express.static(path.resolve(__dirname, 'build')));

// Handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// app.use(historyApiFallback({ verbose: false }));

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




// /**
//  * Module dependencies.
//  */

// var express = require('express');
// var routes = require('./routes');
// var http = require('http');
// var path = require('path');
// var errorHandler = require('errorhandler');
// var logger = require('morgan')

// // This should refer to the local React and gets installed via `npm install` in
// // the example.
// var reactViews = require('express-react-views');

// var app = express();

// // all environments
// app.set('port', process.env.PORT || 3000);
// app.set('build', __dirname + '/build');
// app.set('view engine', 'jsx');
// app.engine('jsx', reactViews.createEngine());
// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'build')));

// // development only
// if ('development' == app.get('env')) {
//   app.use(errorHandler());
// }

// app.locals.something = 'value';
// app.locals.qaz = 'qut';

// app.get('/', routes.index);

// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });
