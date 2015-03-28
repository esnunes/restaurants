import React from 'react';


export default class extends React.Component {
  displayName: 'Hello'

  render () {
    return (
      <div>
        <h1>hello world</h1>
        <p>
          the purpose of this page is just to test transition between two
          routes and data fetching on both client and server sides
        </p>
      </div>
    );
  }

}
