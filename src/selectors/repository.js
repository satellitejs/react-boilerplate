import { createSelector } from 'reselect';

export const getRepositoryStatus = (state) => state.get('repository').toJS();

export const getRepositoryResult = (state) => state.getIn(['repository', 'result']).toJS();

export const getRepositoryEntities = (state) => state.getIn(['entities', 'repository']).toJS();

export const getRepositories = createSelector(
  getRepositoryEntities,
  getRepositoryResult,
  (repository, result) => {
    return result.map((id) => repository[id]);
  }
);
