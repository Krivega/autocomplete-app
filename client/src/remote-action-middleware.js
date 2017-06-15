export default socket => store => next => action => {
  const prevRequestData = store.getState().get('requestData');
  const result = next(action);

  if (action.meta && action.meta.remote) {
    const nextRequestData = store.getState().get('requestData');

    if (!prevRequestData.equals(nextRequestData)) {
      socket.emit('action', Object.assign({}, action, nextRequestData.toJS()));
    }
  }

  return result;
};
