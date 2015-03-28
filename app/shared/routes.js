import React from 'react';
import { Route, NotFoundRoute } from 'react-router';


export default (
  <Route handler={require('./containers/app')}>
    <Route path="/" name="dashboard" handler={require('./containers/dashboard')} />
    <Route path="/hello" handler={require('./containers/hello')} name="hello" />
    <NotFoundRoute handler={require('./containers/not-found')} name="not-found" />
  </Route>
);
