import {
  setEntriesData,
  updateEntriesData,
  setFilter,
  loadMore,
  INITIAL_STATE
} from './reducers';
import actionTypes from './action-types';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_ENTRIES_DATA:
      return setEntriesData(state, action.entriesData);
    case actionTypes.UPDATE_ENTRIES_DATA:
      return updateEntriesData(state, action.entriesData);
    case actionTypes.SET_FILTER:
      return setFilter(state, action.filter, action.limit);
    case actionTypes.LOAD_MORE:
      return loadMore(state, action.limit);
  }

  return state;
};
