import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

import config from './config';
import webpackConfig from './webpack-config';


export default new WebpackDevServer(webpack(webpackConfig), {
  hot: true,
  stats: {
    colors: true,
  },
  headers: {
    'Access-Control-Allow-Origin': `http://${config.http.host}:${config.http.port}`,
    'Access-Control-Allow-Headers': 'X-Requested-With',
  },
  output: {
    path: webpackConfig.output.path,
    filename: webpackConfig.output.filename,
  },
  publicPath: '/assets',
});
