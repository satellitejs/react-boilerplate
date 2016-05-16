import { createAction } from 'redux-actions';
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_RECEIVED,
  FETCH_REPOSITORIES_FAILED,
} from './constants';

export const fetchRepositories = createAction(FETCH_REPOSITORIES);
export const fetchRepositoriesReceived = createAction(FETCH_REPOSITORIES_RECEIVED);
export const fetchRepositoriesFailed = createAction(FETCH_REPOSITORIES_FAILED);
