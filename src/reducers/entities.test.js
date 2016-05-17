import test from 'blue-tape';
import reducers, { initialState } from './entities';
import {
  FETCH_REPOSITORIES_RECEIVED,
} from '../containers/Home/constants';

test('Reducer: entities', (t) => {
  t.plan(1);

  const payload = {
    entities: {
      repository: {
        1: { name: 'name1' },
        2: { name: 'name2' },
        3: { name: 'name3' },
      },
    },
  };
  t.deepEqual(
    reducers(undefined, { type: FETCH_REPOSITORIES_RECEIVED, payload }).toJS(),
    initialState.mergeDeep(payload.entities).toJS(),
    `should handle an action type: ${FETCH_REPOSITORIES_RECEIVED}`
  );
});
