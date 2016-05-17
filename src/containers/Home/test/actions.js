import test from 'blue-tape';
import {
  fetchRepositories,
  fetchRepositoriesReceived,
  fetchRepositoriesFailed,
} from '../actions';
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_RECEIVED,
  FETCH_REPOSITORIES_FAILED,
} from '../constants';

test('Action: fetchRepositories', (t) => {
  t.plan(1);

  t.deepEqual(
    fetchRepositories(),
    {
      type: FETCH_REPOSITORIES,
      payload: undefined,
    },
    `should create an action type: ${FETCH_REPOSITORIES}`
  );
});

test('Action: fetchRepositoriesReceived', (t) => {
  t.plan(1);

  const payload = {
    name: 'name',
  };
  t.deepEqual(
    fetchRepositoriesReceived(payload),
    {
      type: FETCH_REPOSITORIES_RECEIVED,
      payload,
    },
    `should create an action type: ${FETCH_REPOSITORIES_RECEIVED}`
  );
});

test('Action: fetchRepositoriesFailed', (t) => {
  t.plan(1);

  const error = new Error('error');
  t.deepEqual(
    fetchRepositoriesFailed(error),
    {
      type: FETCH_REPOSITORIES_FAILED,
      payload: error,
      error: true,
    },
    `should create an action type: ${FETCH_REPOSITORIES_FAILED}`
  );
});
