import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { normalize, arrayOf } from 'normalizr';
import request from '../utils/request';
import { repository } from '../schema';

import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_RECEIVED,
  FETCH_REPOSITORIES_FAILED,
} from '../containers/Home/constants';

export function* requestGitHubRepositories(params) {
  const { data } = yield call(request, 'get', 'https://api.github.com/search/repositories', { params });
  return normalize(data.items, arrayOf(repository));
}

export function* fetchRepositories() {
  try {
    const data = yield call(requestGitHubRepositories, {
      sort: 'stars',
      order: 'desc',
      q: 'language:javascript',
    });
    yield put({ type: FETCH_REPOSITORIES_RECEIVED, payload: data });
  } catch (error) {
    yield put({ type: FETCH_REPOSITORIES_FAILED, payload: error });
  }
}

export function* watchFetchRepositories() {
  yield* takeEvery(FETCH_REPOSITORIES, fetchRepositories);
}

export default [
  watchFetchRepositories(),
];
