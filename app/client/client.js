import 'bootstrap';
import React from 'react';
import ReactRouter from 'react-router';
import FluxComponent from 'flummox/component';

import './style.css';
import routes from '../shared/routes';
import Flux from '../shared/flux';


const flux = new Flux();


flux.deserialize(window.FLUX_STATE);


const router = ReactRouter.create({
  routes,
  location: ReactRouter.HistoryLocation,
  transitionContext: { flux },
});


router.run((Handler, state) => {
  /* eslint no-unused-vars:0 */

  React.render(
    <FluxComponent flux={flux} render={state => {
        return <Handler {...state} params={state.params} />;
      }}
    />,
    document.getElementById('app')
  );

});
