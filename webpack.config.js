const path = require('path');

module.exports = {
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: ['babel-loader'],
      include: [path.join(__dirname, 'src/javascript')],
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: ['html-loader'],
      include: [path.join(__dirname, 'src/javascript')],
      exclude: /node_modules/
    }]
  }
}
