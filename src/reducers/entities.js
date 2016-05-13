import Immutable from 'immutable';
import createReducer from '../utils/createReducer';
import * as schemas from '../schema';

const _initialState = {};
Object.keys(schemas).forEach((schema) => {
  const key = schemas[schema].getKey ? schemas[schema].getKey() : schema;
  _initialState[key] = {};
});
export const initialState = Immutable.fromJS(_initialState);

export const reducer = {
  // [SOME_DATA_RECEIVED]: (state, { payload: { entities } }) => {
  //   return state.mergeDeep(entities);
  // },
};

export default createReducer(initialState, reducer);
