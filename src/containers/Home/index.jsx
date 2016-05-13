import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import routeSelector from '../../selectors/route';
// import Link from '../Link';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Home">
        {/*
          * See: https://github.com/nfl/react-helmet
          */}
        <Helmet title="Home" />
        <h1>React Boilerplate by <a href="https://github.com/satellitejs">SatelliteJS</a></h1>
      </div>
    );
  }
}

/**
 * Set the routeNode
 * See: https://github.com/router5/redux-router5#routenodeselector
 */
export default connect(routeSelector('home'))(Home);
