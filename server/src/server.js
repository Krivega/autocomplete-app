import Server from 'socket.io';
import {getEntries} from './reducers';

export default function startServer(store) {
  const io = new Server().attach(8090);

  io.on('connection', (socket) => {
    socket.on('action', (action) => {
        if (action.type === 'SET_FILTER') {
            socket.emit('setEntries', getEntries(store.getState(), action.filter, action.limit, action.offset));
        } else if ( action.type === 'LOAD_MORE') {
            socket.emit('addEntries', getEntries(store.getState(), action.filter, action.limit, action.offset));
        } else {
            store.dispatch(action);
        }
    });
  });
}
