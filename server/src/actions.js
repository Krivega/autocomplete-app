import actionTypes from './action-types';

export const setEntries = (entries) => {
  return {
    type: actionTypes.SET_ENTRIES,
    entries
  };
};

export const getEntries = (filter, limit) => {
  return {
    type: actionTypes.GET_ENTRIES,
    filter,
    limit
  };
};
