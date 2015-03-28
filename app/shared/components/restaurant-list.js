import React from 'react';

import RestaurantCard from './restaurant-card';


export default class RestaurantList extends React.Component {

  render () {
    if (this.props.status === 'loading') return (<p>loading...</p>);

    const restaurants = this.props.restaurants.map(restaurant =>
      <div className="col-md-4 col-sm-6">
        <RestaurantCard restaurant={restaurant} navigation={this.props.navigation}/>
      </div>
    );
    return (
      <div>
        <div className="col-md-12">
          {restaurants.length ?
            <div className="alert alert-success alert-dismissible fade in" role="alert">
              <button type="button" className="close" data-dismiss="alert" aria-label="close">
                <span aria-type="hidden">&times;</span>
              </button>
              Found <strong>{restaurants.length}</strong> restaurant(s)!
            </div>
          :
            <div className="alert alert-warning alert-dismissible fade in" role="alert">
              No restaurants found!
            </div>
          }
        </div>
        {restaurants.length ? restaurants : null}
      </div>
    );
  }

}
