import Immutable from 'immutable';
import createReducer from '../utils/createReducer';
import * as schemas from '../schema';
import {
  FETCH_REPOSITORIES_RECEIVED,
} from '../containers/Home/constants';

const _initialState = {};
Object.keys(schemas).forEach((schema) => {
  const key = schemas[schema].getKey ? schemas[schema].getKey() : schema;
  _initialState[key] = {};
});
export const initialState = Immutable.fromJS(_initialState);

export const reducer = {
  [FETCH_REPOSITORIES_RECEIVED]: (state, { payload: { entities } }) => {
    return state.mergeDeep(entities);
  },
};

export default createReducer(initialState, reducer);
