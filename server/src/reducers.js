import {
  List,
  Map
} from 'immutable';

export const INITIAL_STATE = Map();

export function setEntries(state, entries) {
  return state.set('entries', List(entries));
}

function hasIncludeEntry(entry, filter) {
  let isInclude = true;

  for (let char of filter.value) {
    if (entry.name.indexOf(char) === -1) {
      isInclude = false;
      break;
    }
  }

  return isInclude;
}

export function getEntries(state, filter = {}, limit, offset = 0) {
  let entries = state.get('entries');

  if (filter.value) {
    entries = entries.filter((entry) => hasIncludeEntry(entry, filter));
  }

  const allEntriesSize = entries.size;

  if (offset && limit) {
    limit += offset;
  }

  entries = entries.slice(offset, limit || entries.size);

  return {
    entries,
    offset,
    more: allEntriesSize - offset > entries.size
  };
}
