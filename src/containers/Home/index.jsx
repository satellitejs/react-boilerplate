import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import * as actions from './actions';
import RepositoryBox from '../../components/RepositoryBox';
// import routeSelector from '../../selectors/route';
import { getRepositories } from '../../selectors/repository';
// import Link from '../Link';

function mapStateToProps(state) {
  return {
    repositories: getRepositories(state),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRepositories();
  }

  render() {
    return (
      <div className="Home">
        {/*
          * See: https://github.com/nfl/react-helmet
          */}
        <Helmet title="Home" />
        <h1>React Boilerplate by <a href="https://github.com/satellitejs">SatelliteJS</a></h1>
        {this.props.repositories.map((repository, index) => {
          return <RepositoryBox key={index} repository={repository} />;
        })}
      </div>
    );
  }
}

export default Home;
