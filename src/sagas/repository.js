import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import { normalize, arrayOf } from 'normalizr';
import request from '../utils/request';
import { repository as repositorySchema } from '../schema';
import * as actions from '../containers/Home/actions';

export function* requestGitHubRepositories(params) {
  const { data } = yield call(request, 'get', 'https://api.github.com/search/repositories', { params });
  return normalize(data.items, arrayOf(repositorySchema));
}

export function* fetchRepositories() {
  try {
    const data = yield call(requestGitHubRepositories, {
      sort: 'stars',
      order: 'desc',
      q: 'language:javascript',
    });
    yield put(actions.fetchRepositoriesReceived(data));
  } catch (error) {
    yield put(actions.fetchRepositoriesFailed(error));
  }
}

export function* watchFetchRepositories() {
  yield call(takeEvery, actions.fetchRepositories().type, fetchRepositories);
}

export default function* repositorySaga() {
  yield [
    watchFetchRepositories(),
  ];
}
