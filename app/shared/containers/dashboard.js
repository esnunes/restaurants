import React from 'react';
import FluxComponent from 'flummox/component';

import NavigationOptions from '../components/navigation-options';
import RestaurantList from '../components/restaurant-list';
import RestaurantOptions from '../components/restaurant-options';


export default class Dashboard extends React.Component {
  displayName: 'Dashboard'

  static async willTransitionTo (transition, params, query, done) {
    const { flux } = transition.context;

    flux.clientSide(done);

    const geolocation = flux.getActions('geolocation');
    const poi = flux.getActions('poi');

    if (!flux.getStore('geolocation').state.currentPosition) {
      geolocation.getCurrentPosition();
    }

    if (!flux.getStore('restaurants').state.restaurants) {
      await poi.filter();
    }

    flux.serverSide(done);
  }

  render () {
    return (
      <div className="row">
        <div className="col-md-3 col-sm-4">

          <FluxComponent connectToStores={{
              navigation: store => ({ app: store.getApp() }),
          }}>
            <NavigationOptions onChange={this.handleNavigationChange.bind(this)} />
          </FluxComponent>

          <FluxComponent connectToStores={{
              geolocation: store => ({ location: store.state }),
              restaurants: store => ({ params: store.state.params }),
          }}>
            <RestaurantOptions
              onSubmit={this.handleOptionsSubmit.bind(this)}
              onLocationReload={this.handleLocationReload.bind(this)}
            />
          </FluxComponent>

        </div>
        <div className="col-md-9 col-sm-8">
          <div className="row">

            <FluxComponent connectToStores={{
              restaurants: store => ({
                status: store.getStatus(),
                restaurants: store.getRestaurants(),
              }),
              navigation: store => ({ navigation: { app: store.getApp() } }),
            }}>
              <RestaurantList />
            </FluxComponent>

          </div>
        </div>
      </div>
    );
  }

  handleNavigationChange (data) {
    const actions = this.props.flux.getActions('navigation');

    actions.update(data);
  }

  handleOptionsSubmit (data) {
    const poi = this.props.flux.getActions('poi');

    poi.filter(data);
  }

  handleLocationReload () {
    const geolocation = this.props.flux.getActions('geolocation');

    geolocation.getCurrentPosition();
  }

}
