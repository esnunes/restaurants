import React from 'react';


export default class NavigationOptions extends React.Component {

  render () {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">Navigation</div>
        <div className="panel-body">
          <div className="form-group">
            <label>Application</label>
            <div className="checkbox">
              <label>
                <input type="radio" name="maps" value="apple" checked={this.props.app === 'apple'} onChange={this.handleAppChange.bind(this)}> Apple</input>
              </label>
              <label>
                <input type="radio" name="maps" value="google" checked={this.props.app === 'google'} onChange={this.handleAppChange.bind(this)}> Google</input>
              </label>
              <label>
                <input type="radio" name="maps" value="waze" checked={this.props.app === 'waze'} onChange={this.handleAppChange.bind(this)}> Waze</input>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleAppChange (e) {
    if (!e) return;

    if (this.props.onChange) this.props.onChange({ app: e.target.value });
  }

}
