import {
  List,
  Map,
  fromJS
} from 'immutable';

export const INITIAL_STATE = Map({
  entriesData: Map(),
  filtersData: Map()
});

function setFiltersOffset(state) {
  const offset = state.getIn(['entriesData', 'entries']).size;

  return setFilters(state, { offset });
}

export function setEntriesData(state, payload) {
  const {
    entries,
    more
  } = payload;

  return setFiltersOffset(state.set('entriesData', fromJS({
    entries,
    more
  })));
}

export function updateEntriesData(state, payload) {
  const {
    entries,
    more
  } = payload;

  const prevEntries = state.getIn(['entriesData', 'entries']);
  const newEntries = List(entries);
  const nextEntries = prevEntries.toSet().union(newEntries.toSet()).toList();

  return setFiltersOffset(state.set('entriesData', fromJS({
    entries: nextEntries.toJS(),
    more
  })));
}

export function setFilters(state, payload) {
  const filtersData = state.get('filtersData').toJS();

  return state.set('filtersData', fromJS(Object.assign({}, filtersData, payload)));
}
