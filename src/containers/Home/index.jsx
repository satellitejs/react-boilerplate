import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import FaSpinner from 'react-icons/lib/fa/spinner';
import * as actions from './actions';
import RepositoryBox from '../../components/RepositoryBox';
// import routeSelector from '../../selectors/route';
import { getRepositories, getRepositoryStatus } from '../../selectors/repository';
// import Link from '../Link';

function mapStateToProps(state) {
  return {
    repositories: getRepositories(state),
    status: getRepositoryStatus(state),
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
    // console.log();
    return (
      <div className="Home">
        {/*
          * See: https://github.com/nfl/react-helmet
          */}
        <Helmet title="Home" />
        <h1>React Boilerplate by <a href="https://github.com/satellitejs">SatelliteJS</a></h1>

        {this.props.status.isFetching && (
          <div className="spinnerArea">
            <FaSpinner className="spin" />
          </div>
        )}
        {this.props.repositories.map((repository, index) => {
          return <RepositoryBox key={index} repository={repository} />;
        })}
      </div>
    );
  }
}

export default Home;
