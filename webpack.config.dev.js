import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';

import config from './app/server/env/config';


export default {
  entry: [
    `webpack-dev-server/client?http://${config.http.host}:${config.webpack.dev.port}`,
    'webpack/hot/dev-server',
    './app/client/index.js',
  ],

  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'bundle.js',
    publicPath: `http://${config.http.host}:${config.webpack.dev.port}/assets`,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css'),
  ],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules\/(?!react-router)/, loader: 'react-hot!babel-loader?experimental' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
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

  devtool: 'eval',
};
