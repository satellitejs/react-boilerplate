import test from 'blue-tape';
import Immutable from 'immutable';
import routeSelector from './route';

const router = {
  route: { name: 'a.1' },
  previousRoute: null,
};

const state = Immutable.fromJS({ router });

test('Selector: route', (t) => {
  t.plan(2);
  const rootSelector = routeSelector('');
  const aSelector = routeSelector('a');

  t.deepEqual(rootSelector(state).route, router.route, 'should be able to select routeNode from root');
  t.deepEqual(aSelector(state).route, router.route, 'should be able to select routeNode from a node');
});
