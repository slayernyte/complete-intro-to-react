const path = require('path')

module.exports = {
  // node current directory, context tell webpack where to run everything from
  context: __dirname,
  // main file for the project
  entry: './js/BrowserEntry.jsx',

  output: {
    // where to put the bundle
    path: path.join(__dirname, '/public'),
    // name of the bundled file
    filename: 'bundle.js'
  },
  resolve: {
    // in order, require resolve extentions to look for
    extensions: ['', '.js', '.jsx', '.json']
  },
  stats: {
    colors: true, // show colors
    reasons: true, // verbose messaging
    chunks: false // TODO
  },
  // external module that webpack should use
  module: {
    // these get loaded first, compiled code should be run though lint
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
    // array of extra build steps, build pipeline
    loaders: [
      {
        // if file name passes this, use this loader
        test: /\.jsx?$/,
        // run it through this
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
