import {
  List,
  Map
} from 'immutable';

export const INITIAL_STATE = Map();

export function setEntries(state, payload) {
  return state.set('entries', List(payload.entries));
}

function hasIncludeEntry(entry, filter) {
  let isInclude = true;

  for (let char of filter) {
    if (entry.name.indexOf(char) === -1) {
      isInclude = false;
      break;
    }
  }

  return isInclude;
}

export function getEntries(state, { filter, limit, offset = 0 } = {}) {
  let entries = state.get('entries');

  offset = +offset;
  limit = +limit;

  if (filter) {
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
