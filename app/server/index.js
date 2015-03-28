require('babel/register')({
  ignore: /node_modules\/(?!react-router)/,
  experimental: true,
});
require('./server');
