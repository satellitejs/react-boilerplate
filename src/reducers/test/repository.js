import test from 'blue-tape';
import reducers, { initialState } from '../repository';
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_RECEIVED,
  FETCH_REPOSITORIES_FAILED,
} from '../../containers/Home/constants';

const baseState = initialState.toJS();

test('Reducer: repository', (t) => {
  t.plan(3);

  t.deepEqual(
    reducers(undefined, { type: FETCH_REPOSITORIES }).toJS(),
    Object.assign({}, baseState, {
      isFetching: true,
    }),
    `should handle an action type: ${FETCH_REPOSITORIES}`
  );

  const state = initialState.merge({ result: [1, 2] });
  const payload = {
    result: [2, 3, 4],
  };

  t.deepEqual(
    reducers(state, { type: FETCH_REPOSITORIES_RECEIVED, payload }).toJS(),
    Object.assign({}, baseState, {
      result: [1, 2, 3, 4],
      isFetching: false,
      error: {},
      isError: false,
    }),
    `should handle an action type: ${FETCH_REPOSITORIES_RECEIVED}`
  );

  const error = new Error('error');
  t.deepEqual(
    reducers(undefined, { type: FETCH_REPOSITORIES_FAILED, payload: { error } }).toJS(),
    Object.assign({}, baseState, {
      isFetching: false,
      error: error,
      isError: true,
    }),
    `should handle an action type: ${FETCH_REPOSITORIES_FAILED}`
  );
});
