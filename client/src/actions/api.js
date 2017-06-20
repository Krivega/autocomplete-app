const DEFAULT_LIMIT = 3;

const API_URL = `${location.protocol}//${location.hostname}:8090/api/`;

function getActionUrl(action, params) {
  let getParams = '';
  for (const key in params) {
    if (params[key]) {
      if (getParams !== '') {
        getParams += '&';
      }
      getParams += `${key}=${encodeURIComponent(params[key])}`;
    }
  }

  let actionUrl = API_URL + action;

  if (getParams) {
    actionUrl += '?' + getParams;
  }

  return actionUrl;
}

export default {
  fetchEntries({ filter, offset, limit = DEFAULT_LIMIT } = {}) {
    return fetch(getActionUrl('entries', {
      filter,
      offset,
      limit
    })).then(response => response.json());
  }
};
