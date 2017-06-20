import actionTypes from './types';
import api from './api';

export const setEntriesData = (entriesData) => {
  return {
    type: actionTypes.SET_ENTRIES_DATA,
    payload: entriesData
  };
};

export const updateEntriesData = (entriesData) => {
  return {
    type: actionTypes.UPDATE_ENTRIES_DATA,
    payload: entriesData
  };
};

export const setFilter = (filter) => {
  return (dispatch, getState) => {
    dispatch({
      type: actionTypes.SET_FILTERS,
      payload: {
        filter,
        offset: 0
      }
    });

    const state = getState();

    return fetchEntries(state, dispatch);
  };
};

export const loadMore = () => {
  return (dispatch, getState) => {
    const state = getState();
    const filtersData = state.get('filtersData').toJS();

    return api.fetchEntries(filtersData)
      .then((json) => dispatch(updateEntriesData(json)));
  };
};

export const fetchEntriesIfNeeded = () => {
  return (dispatch, getState) => {
    const state = getState();
    if (shouldFetchEntries(state)) {
      return fetchEntries(state, dispatch);
    } else {
      return Promise.resolve();
    }
  };
};

function fetchEntries(state, dispatch) {
  const filtersData = state.get('filtersData').toJS();

  return api.fetchEntries(filtersData)
    .then((json) => dispatch(setEntriesData(json)));
}

function shouldFetchEntries(state) {
  return state.getIn(['entriesData', 'entries']).size === 0;
}
