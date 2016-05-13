import { createAction } from 'redux-actions';
import {
  FETCH_REPOSITORIES,
} from './constants';

export const fetchRepositories = createAction(FETCH_REPOSITORIES);
