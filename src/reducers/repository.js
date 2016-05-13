import Immutable from 'immutable';
import createReducer from '../utils/createReducer';
import {
  FETCH_REPOSITORIES,
  FETCH_REPOSITORIES_RECEIVED,
  FETCH_REPOSITORIES_FAILED,
} from '../containers/Home/constants';

export const initialState = Immutable.fromJS({
  isFetching: false,
  result: [],
  error: {},
  isError: false,
});

export const reducer = {
  [FETCH_REPOSITORIES]: (state) => {
    return state.set('isFetching', true);
  },
  [FETCH_REPOSITORIES_RECEIVED]: (state, { payload: { result } }) => {
    const newResult = state.get('result').toSet().union(result).toList();
    return state.merge({
      result: newResult,
      isFetching: false,
      error: {},
      isError: false,
    });
  },
  [FETCH_REPOSITORIES_FAILED]: (state, { payload: { error } }) => {
    return state.merge({
      isFetching: false,
      error: error,
      isError: true,
    });
  },
};

export default createReducer(initialState, reducer);
