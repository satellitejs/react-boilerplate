import test from 'blue-tape';
import React from 'react';
import { shallow } from 'enzyme';
import RepositoryBox from './index';

const state = {
  name: 'name',
};
const wrapper = shallow(
  <RepositoryBox repository={state} />
);

test('Component: RepositoryBox', (t) => {
  t.plan(1);

  t.equal(
    wrapper.text(),
    state.name,
    'should render repository.name'
  );
});
