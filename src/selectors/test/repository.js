import test from 'blue-tape';
import Immutable from 'immutable';
import {
  getRepositoryStatus,
  getRepositoryResult,
  getRepositoryEntities,
  getRepositoriesByIds,
  getRepositories,
} from '../repository';

const entities = {
  repository: {
    1: {name: 'test1'},
    2: {name: 'test2'},
    3: {name: 'test3'},
  },
};

const repository = {
  result: [1, 2, 3],
};

const state = Immutable.fromJS({ entities, repository });

test('Selector: getRepositoryStatus', (t) => {
  t.plan(1);

  t.deepEqual(
    getRepositoryStatus(state),
    repository,
    'should be able to select state.repository'
  );
});

test('Selector: getRepositoryResult', (t) => {
  t.plan(1);

  t.deepEqual(
    getRepositoryResult(state),
    repository.result,
    'should be able to select state.repository.result'
  );
});

test('Selector: getRepositoryEntities', (t) => {
  t.plan(1);

  t.deepEqual(
    getRepositoryEntities(state),
    entities.repository,
    'should be able to select state.entities.repository'
  );
});

test('Selector: getRepositoriesByIds', (t) => {
  t.plan(1);

  const ids = [1, 3];
  const expected = [
    {name: 'test1'},
    {name: 'test3'},
  ];

  t.deepEqual(
    getRepositoriesByIds(entities.repository, ids),
    expected,
    'should be able to select repositories by ids'
  );
});


test('Selector: getRepositories', (t) => {
  t.plan(1);

  const expected = [
    {name: 'test1'},
    {name: 'test2'},
    {name: 'test3'},
  ];

  t.deepEqual(
    getRepositories(state),
    expected,
    'should be able to select repositories by result stored inside state'
  );
});
