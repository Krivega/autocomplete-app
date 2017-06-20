import {
  setEntriesData,
  updateEntriesData,
  setFilters,
  INITIAL_STATE
} from './reducers';
import actionTypes from '../actions/types';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_ENTRIES_DATA:
      return setEntriesData(state, action.payload);
    case actionTypes.UPDATE_ENTRIES_DATA:
      return updateEntriesData(state, action.payload);
    case actionTypes.SET_FILTERS:
      return setFilters(state, action.payload);
  }

  return state;
}
