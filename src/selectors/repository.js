import { createSelector } from 'reselect';

export const getRepositoryStatus = (state) => state.get('repository').toJS();

export const getRepositoryResult = (state) => state.getIn(['repository', 'result']).toJS();

export const getRepositoryEntities = (state) => state.getIn(['entities', 'repository']).toJS();

export const getRepositoriesByIds = (repositories, ids) => ids.map((id) => repositories[id]);

export const getRepositories = createSelector(
  [
    getRepositoryEntities,
    getRepositoryResult,
  ],
  getRepositoriesByIds
);
