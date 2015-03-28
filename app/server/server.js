import express from 'express';
import path from 'path';
import React from 'react';
import ReactRouter from 'react-router';
import FluxComponent from 'flummox/component';

import config from './env/config';
import webpack from './env/webpack-config';

import Flux from '../shared/flux';
import ExpressLocation from 'react-router-express';

import routes from '../shared/routes';


let server = express();


server.set('view engine', 'html');
server.set('views', __dirname);
server.engine('html', require('ejs').renderFile);


server.use('/assets', express.static(path.join(__dirname, '../../assets')));


server.use(function (req, res, next) {
  const location = new ExpressLocation(req.url, res);

  const flux = new Flux({ serverSide: true, config: config.common });

  const router = ReactRouter.create({
    routes,
    location,
    transitionContext: { flux },
  });

  router.run((Handler, state) => {
    if (state.routes.length === 0) { return next(); }

    if (location.redirect()) { return; }

    const name = state.routes[state.routes.length - 1].name;

    const html = React.renderToString(
      <FluxComponent flux={flux} render={state => {
          return <Handler {...state} params={state.params} />;
        }}
      />
    );

    const data = {
      bundlePath: webpack.output.publicPath,
      state: `window.FLUX_STATE = ${JSON.stringify(flux.serialize())};`,
      html,
    };

    if (name === 'not-found') { res.status(404); }

    res.render('layout', data);
  });
});


server = server.listen(config.http.port, config.http.host, function (err) {
  if (err) { return console.error(err); }

  const address = server.address();
  console.log(`server listening on http://${address.address}:${address.port}/`);
});


if (config.environment !== 'production') {
  const server = require('./env/webpack-dev-server');

  server.listen(config.webpack.dev.port, function (err) {
    if (err) { return console.error(err); }

    const address = server.listeningApp.address();
    console.log(`webpack dev server listening on http://${address.address}:${address.port}/`);
  });
}
