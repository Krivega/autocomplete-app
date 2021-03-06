import { setEntries, getEntries, INITIAL_STATE } from './reducers';
import actionTypes from './action-types';

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.SET_ENTRIES:
      return setEntries(state, action.payload);
    case actionTypes.GET_ENTRIES:
      return getEntries(state, action.payload);
  }
  return state;
}
