import React from 'react';


export default class RestaurantOptions extends React.Component {

  render () {
    let currentPosition = `${this.props.location.status}...`;
    if (this.props.location.status === 'ok') {
      currentPosition =
        this.props.location.currentPosition.latitude.toFixed(6) + ', ' + this.props.location.currentPosition.longitude.toFixed(6);
    }

    return (
      <div className="panel panel-default">
        <div className="panel-heading">Options</div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="panel-body">
            <div className="form-group">
              <label>Search</label>
              <input ref="q" defaultValue={this.props.params.q} type="text" className="form-control" autoFocus="true" placeholder="Starbucks, Pizza Hut..." />
            </div>
            <div className="form-group">
              <label>Location</label>
              <div className="input-group">
                <input type="text" className="form-control" readOnly={true} value={currentPosition} />
                <span className="input-group-btn">
                  <button className="btn btn-default" onClick={this.props.onLocationReload.bind(this)} disabled={this.props.location.status !== 'ok'} type="button">Reload</button>
                </span>
              </div>
            </div>
            <div className="form-group">
              <label>Near me</label>
              <div className="input-group">
                <span className="input-group-addon">
                  <input ref="nearMe" type="checkbox" defaultChecked={!!this.props.params.km} disabled={this.props.location.status !== 'ok'} />
                </span>
                <input ref="km" type="number" className="form-control" defaultValue={this.props.params.km || 20} disabled={this.props.location.status !== 'ok'} />
                <span className="input-group-addon">km</span>
              </div>
            </div>
          </div>
          <div className="panel-footer text-right">
            <button type="submit" className="btn btn-sm btn-primary">Filter</button>
          </div>
        </form>
      </div>
    );
  }

  handleSubmit (e) {
    e.preventDefault();

    const data = {
      q: React.findDOMNode(this.refs.q).value,
    };

    if (this.props.location.status === 'ok' && React.findDOMNode(this.refs.nearMe).checked) {
      data.km = React.findDOMNode(this.refs.km).value || 10;
    }

    if (this.props.onSubmit) this.props.onSubmit(data);
  }

  handleLocationReload (e) {
    e.preventDefault();

    if (this.props.onLocationReload) this.props.onLocationReload();
  }

}
