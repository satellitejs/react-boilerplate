import test from 'blue-tape';
import reducer, { initialState } from '../repository';
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_RECEIVED,
  FETCH_REPOSITORIES_FAILED,
} from '../../containers/Home/constants';

test('Reducer: repository', (t) => {
  t.plan(3);

  t.deepEqual(
    reducer(undefined, { type: FETCH_REPOSITORIES }),
    initialState.set('isFetching', true),
    `should handle an action type: ${FETCH_REPOSITORIES}`
  );

  const state = initialState.merge({ result: [1, 2] });
  const payload = {
    result: [2, 3, 4],
  };

  t.deepEqual(
    reducer(state, { type: FETCH_REPOSITORIES_RECEIVED, payload }),
    state.merge({
      result: [1, 2, 3, 4],
      isFetching: false,
      error: {},
      isError: false,
    }),
    `should handle an action type: ${FETCH_REPOSITORIES_RECEIVED}`
  );

  const error = new Error('error');
  t.deepEqual(
    reducer(undefined, { type: FETCH_REPOSITORIES_FAILED, payload: { error } }),
    initialState.merge({
      isFetching: false,
      error: error,
      isError: true,
    }),
    `should handle an action type: ${FETCH_REPOSITORIES_FAILED}`
  );
});
