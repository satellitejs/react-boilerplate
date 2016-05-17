import React, { Component, createElement } from 'react';
import { connect } from 'react-redux';
// import { routeNodeSelector } from 'redux-router5';
import routeSelector from '../../selectors/route';
import Helmet from 'react-helmet';
import Home from '../Home';
import NotFound from '../NotFound';

const components = {
  home: Home,
};

/**
 * App component
 */
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { route } = this.props;
    const segment = route ? route.name.split('.')[0] : undefined;

    return (
      <div className="App">
        {/*
          * For <title> and <meta>, etc
          * See https://github.com/nfl/react-helmet
          */}
        <Helmet
          defaultTitle="react-boilerplate"
          titleTemplate="%s | react-boilerplate"
          meta={[
            {name: 'description', content: 'Boilerplate using React, Redux, Redux Saga, Immutable.js, Webpack, etc.'},
          ]} />

        {/*
          * Find and create element from route segment
          */}
        {createElement(components[segment] || NotFound)}
      </div>
    );
  }
}
export default connect(routeSelector(''))(App);

// export default App;
