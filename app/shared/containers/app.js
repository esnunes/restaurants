import React from 'react';
import { RouteHandler, Link } from 'react-router';


const Style = {
  container: {
    paddingTop: 70,
  },
  checkbox: {
    marginRight: 15,
  },
};


export default class App extends React.Component {
  displayName: 'App'

  render () {
    return (
      <div style={Style.container}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid row">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><Link to="dashboard">Restaurants</Link></li>
                <li><Link to="hello">Hello World</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="container-fluid">
          <RouteHandler {...this.props} />
        </div>
      </div>
    );
  }

}
