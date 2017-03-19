const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const transfer = require('transfer-webpack-plugin');


const TARGET = process.env.npm_lifecycle_event;
const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

// Temporary fix for react-tap-event-plugin - route redirect
// See: http://stackoverflow.com/a/40671993/4808259
var reactDomLibPath = path.join(__dirname, "./node_modules/react-dom/lib");
var alias = {};
["EventPluginHub", "EventConstants", "EventPluginUtils", "EventPropagators",
 "SyntheticUIEvent", "CSSPropertyOperations", "ViewportMetrics"].forEach(function(filename){
    alias["react/lib/"+filename] = path.join(__dirname, "./node_modules/react-dom/lib", filename);
});


// module.exports = {
const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  // Add resolve.extensions.
  // '' is needed to allow imports without an extension.
  // Note the .'s before extensions as it will fail to match without!!!
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  module: {
    exports: {
      entry: ['babel-polyfill', './app']
    },
    loaders: [
      {
        // Test expects a RegExp! note the slashes!
        test: /\.css$/,
        loader: "style-loader!css-loader",
        // Include accepts either a path or an array of paths.
        include: PATHS.app
      },
      {
        // React-hot loader and babel
        test: /\.js$/, // All .js files
        loaders: ['babel-loader'], // babel loads jsx and es6-7
        // Parse only app files! Without this it will go through entire project.
        // In addition to being slow, that will most likely result in an error.
        include: PATHS.app
      },
      {
        // JSON Loader
        test: /\.json$/,
        loader: 'json'
      },
      {
        // Fonts
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader : 'file-loader',
        include: PATHS.app
      }
    ]
  },
  resolve: {alias: alias} // react-tap-event-plugin route redirect - see above^^^
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will complex
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'erros-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      // Enables Hot Modules Replacement
      new webpack.HotModuleReplacementPlugin(),
      // Allows error warnings but does not stop compiling.
      new webpack.NoErrorsPlugin()
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      // Moves files
      new transfer(
        [{from: 'public'}], PATHS.app
      ),
    ]
  });
}
