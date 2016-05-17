import test from 'blue-tape';
import createReducer from '../createReducer';

const TEST = 'TEST';
const state = { test: '' };
const handlers = {
  [TEST]: (_state, action) => {
    return { test: action.payload };
  },
};

test('Util: createReducer', (t) => {
  t.plan(3);

  const reducer = createReducer(state, handlers);
  const action = {type: TEST, payload: 'test'};
  const expected = { test: 'test' };

  t.equal(typeof reducer, 'function');

  t.deepEqual(
    reducer(undefined, action),
    expected,
    'should be able to create reducer from handlers'
  );

  t.deepEqual(
    reducer(undefined, {type: 'SOMETHING_ELSE', payload: 'test'}),
    state,
    'should not modify state if handler for an action is not defined'
  );
});
