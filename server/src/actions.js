import actionTypes from './action-types';

export const setEntries = (entries) => {
  // console.log("setEntries", entries);
  return {
    type: actionTypes.SET_ENTRIES,
    payload: { entries }
  };
};

export const getEntries = (filter, limit) => {
  return {
    type: actionTypes.GET_ENTRIES,
    payload: {
      filter,
      limit
    }
  };
};
