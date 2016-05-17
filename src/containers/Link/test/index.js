import test from 'blue-tape';
import React from 'react';
import { shallow } from 'enzyme';
import  { spy } from 'simple-spy';
import Link from '../index';

const Component = Link.WrappedComponent;

const context = {
  isActive: (name) => name === 'active',
  buildUrl: (url) => url,
};
const props = {
  name: 'inactive',
  params: { param: 1 },
  options: { option: 1 },
};
const children = 'test link';
const navigateToSpy = spy(() => {});
const wrapper = shallow(
  <Component {...props} navigateTo={navigateToSpy}>{children}</Component>,
  {
    context: {
      router: context,
    },
  },
);

test('Container: Link', (t) => {
  t.plan(6);

  t.equal(
    wrapper.find('a').length,
    1,
    'should render self using <a> by default'
  );
  t.equal(
    wrapper.text(),
    children,
    'should render the given children props'
  );
  t.equal(
    wrapper.hasClass('active'),
    false,
    'should not have .active class when it is not active'
  );

  wrapper.setProps({ element: 'button', name: 'active' });
  t.equal(
    wrapper.find('button').length,
    1,
    'should render self using an element props'
  );
  t.equal(
    wrapper.hasClass('active'),
    true,
    'should have .active class when it is active'
  );

  wrapper.simulate('click', { preventDefault: () => {} });
  t.deepEqual(
    navigateToSpy.args[0],
    ['active', props.params, props.options],
    'should execute navigateTo() props when clicked'
  );
});
