import Immutable from 'immutable';
import { combineReducers } from 'redux-immutable';
import { router5Reducer } from 'redux-router5';
import entities from './entities';
import repository from './repository';

const toImmutableReducer = (reducer) => (state, action) => {
  return Immutable.fromJS(reducer(state ? state.toJS() : {}, action));
};

const rootReducer = combineReducers({
  router: toImmutableReducer(router5Reducer),
  entities,
  repository,
});

export default rootReducer;
