const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader!' + path.join(__dirname, '../node_modules/jsxstyle/lib/webpackLoader.js') + '?LayoutConstants=' + path.join(__dirname, '../constants/Style.js'),
        exclude: /node_modules/,
        include: path.resolve(__dirname, '../')
      },
      {
        test: /\.css?$/,
        loaders: [ 'style', 'raw' ],
        include: path.resolve(__dirname, '../')
      }

    ]
  }
}
