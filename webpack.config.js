var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');


module.exports = {
  entry: [
    './app/client/index.js',
  ],

  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules\/(?!react-router)/, loader: 'react-hot!babel-loader?experimental' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-minimize') },
      { test: require.resolve('react'), loader: 'expose?React' },

      // bootstrap
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-eot',
      },
      {
        test: /\.(woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.(woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff2',
      },
      { test: /\.js$/, include: /node_modules\/bootstrap/, loader: 'imports?jQuery=jquery' },
    ],
  },
};
