const path = require('path')

module.exports = {
  // node current directory, context tell webpack where to run everything from
  context: __dirname,
  // main file for the project
  entry: './js/ClientApp.js',

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
    chunks : false // TODO
  },
  // external module that webpack should use
  module: {
    // array of extra build steps, build pipeline
    loaders: [
      {
        // if file name passes this, use this loader
        test: /\.jsx?$/,
        // run it through this
        loader: 'babel-loader'
      }
    ]
  }
}
