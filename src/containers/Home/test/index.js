import test from 'blue-tape';
import React from 'react';
import { shallow } from 'enzyme';
import Home from '../index';
import RepositoryBox from '../../../components/RepositoryBox';

const Component = Home.WrappedComponent;

const wrapper = shallow(
  <Component
    status={{ isFetching: false }}
    repositories={[]}
    fetchRepositories={() => {}}
  />
);

test('Container: Home', (t) => {
  t.plan(4);

  t.equal(
    wrapper.find('.spinnerArea').length,
    0,
    'should not render the spinner when isFetching: false'
  );

  const newProps = {
    status: { isFetching: true },
    repositories: [{ id: 1 }, { id: 2 }],
  };
  wrapper.setProps(newProps);

  t.equal(
    wrapper.find('.spinnerArea').length,
    1,
    'should render the spinner when isFetching: true'
  );

  t.equal(
    wrapper.find(RepositoryBox).length,
    newProps.repositories.length,
    'should render the same number of RepositoryBox with repositories props length'
  );

  t.ok(
    wrapper.find(RepositoryBox).everyWhere((c) => c.props('repository')),
    'should pass repository props to each RepositoryBox'
  );
});
