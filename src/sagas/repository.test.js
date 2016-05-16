import test from 'blue-tape';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { normalize, arrayOf } from 'normalizr';
import request from '../utils/request';
import { repository as repositorySchema } from '../schema';
import * as actions from '../containers/Home/actions';
import {
  requestGitHubRepositories,
  fetchRepositories,
  watchFetchRepositories,
} from './repository';

const response = [{ id: 1, name: 'test' }];

const params = {
  sort: 'stars',
  order: 'desc',
  q: 'language:javascript',
};

test('Saga: requestGitHubRepositories', (t) => {
  t.plan(2);

  const iterator = requestGitHubRepositories(params);

  t.deepEqual(
    iterator.next().value,
    call(request, 'get', 'https://api.github.com/search/repositories', { params }),
    'should send an request'
  );

  t.deepEqual(
    iterator.next({ data: { items: response } }).value,
    normalize(response, arrayOf(repositorySchema)),
    'should return normalized data'
  );
});

test('Saga: fetchRepositories', (t) => {
  t.plan(3);

  const iterator = fetchRepositories();

  t.deepEqual(
    iterator.next().value,
    call(requestGitHubRepositories, params),
    'should call requestGitHubRepositories saga'
  );

  t.deepEqual(
    iterator.next(response).value,
    put(actions.fetchRepositoriesReceived(response)),
    'should put fetchRepositoriesReceived action on success'
  );

  const error = new Error('Error');
  t.deepEqual(
    iterator.throw(error).value,
    put(actions.fetchRepositoriesFailed(error)),
    'should put fetchRepositoriesFailed action when failed'
  );
});

test('Saga: watchFetchRepositories', (t) => {
  t.plan(1);

  const iterator = watchFetchRepositories();

  t.deepEqual(
    iterator.next().value,
    call(takeEvery, actions.fetchRepositories().type, fetchRepositories),
    `should trigger on action type: ${actions.fetchRepositories().type}`
  );
});
