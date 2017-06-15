import {
  setEntriesData,
  updateEntriesData
} from './actions';

export default (socket, store) => {
  socket.on('setEntries', entriesData => {
    store.dispatch(setEntriesData(entriesData));
  });

  socket.on('addEntries', entriesData => {
    store.dispatch(updateEntriesData(entriesData));
  });
};
