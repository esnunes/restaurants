import React from 'react';


const Style = {
  tag: {
    marginRight: 5,
    display: 'inline-block',
    padding: '.3em .6em',
  },
  button: {
    marginRight: 5,
  },
};


const Maps = {
  google: {
    url: 'comgooglemaps://?directionsmode=driving&daddr=',
  },
  apple: {
    url: 'http://maps.apple.com/?daddr=',
  },
  waze: {
    url: 'waze://?navigate=yes&ll=',
  },
};


export default class RestaurantCard extends React.Component {

  render () {
    const coordinates = this.props.restaurant.loc.coordinates;
    const mapsUrl = Maps[this.props.navigation.app].url + coordinates[0] + ',' + coordinates[1];

    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.restaurant.name} {this.props.restaurant.distance >= 0 ? <span className="pull-right">({parseInt(this.props.restaurant.distance).toFixed(0)}m)</span> : null}</div>
        <div className="panel-body">
          <p>
            Phone: {this.props.restaurant.phone}<br />
          </p>
          <div>
            {this.props.restaurant.tags.map(tag =>
              <span className="label label-default" style={Style.tag}>{tag}</span>
            )}
          </div>
        </div>
        <div className="panel-footer text-right">
          <a href={`tel:${this.props.restaurant.phone}`} className="btn btn-sm btn-primary" style={Style.button}>call</a>
          <a href={mapsUrl} className="btn btn-sm btn-success" style={Style.button}>navigate</a>
          <a href={this.props.restaurant.url} target="_blank" className="btn btn-sm btn-default">site</a>
        </div>
      </div>
    );
  }

}
