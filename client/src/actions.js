import actionTypes from './action-types';

const DEFAULT_LIMIT = 3;

export const setEntriesData = (entriesData) => {
  return {
    type: actionTypes.SET_ENTRIES_DATA,
    entriesData
  };
};

export const updateEntriesData = (entriesData) => {
  return {
    type: actionTypes.UPDATE_ENTRIES_DATA,
    entriesData
  };
};

export const setFilter = (filter, limit = DEFAULT_LIMIT) => {
  return {
    type: actionTypes.SET_FILTER,
    filter,
    limit,
    meta: {
      remote: true
    }
  };
};

export const loadMore = (limit = DEFAULT_LIMIT) => {
  return {
    type: actionTypes.LOAD_MORE,
    limit,
    meta: {
      remote: true
    }
  };
};
