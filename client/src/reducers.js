import {
  List,
  Map,
  fromJS
} from 'immutable';

export const INITIAL_STATE = Map({
  entriesData: Map(),
  requestData: Map()
});

export function setEntriesData(state, entriesData) {
  const {
    entries,
    offset,
    more
  } = entriesData;

  return state.set('entriesData', fromJS({
    entries,
    offset,
    more
  }));
}

export function updateEntriesData(state, entriesData) {
  const {
    entries,
    offset,
    more
  } = entriesData;

  const prevEntries = state.getIn(['entriesData', 'entries']);
  const newEntries = List(entries);
  const nextEntries = prevEntries.toSet().union(newEntries.toSet()).toList();

  return state.set('entriesData', fromJS({
    entries: nextEntries.toJS(),
    offset,
    more
  }));
}

export function setFilter(state, filter, limit) {
  return state.set('selectedEntryId', '')
    .set('requestData', fromJS({
      filter,
      limit
    }));
}

export function loadMore(state, limit) {
  const filter = state.getIn(['requestData', 'filter']);
  const entriesSize = state.getIn(['entriesData', 'entries']).size;

  limit = limit || state.getIn(['requestData', 'limit']);

  return state.set('requestData', fromJS({
    offset: entriesSize,
    filter,
    limit
  }));
}

export function selectEntry(state, id) {
  return state.set('selectedEntryId', id);
}
