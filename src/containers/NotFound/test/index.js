import test from 'blue-tape';
import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../index';
import Link from '../../Link';

const wrapper = shallow(<NotFound />);

test('Container: NotFound', (t) => {
  t.plan(1);

  t.ok(
    wrapper.find(Link).some({ name: 'home' }),
    'should render a link to the home'
  );
});
