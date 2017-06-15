import makeStore from './src/store';
import startServer from './src/server';
import {setEntries} from './src/actions';

export const store = makeStore();

startServer(store);

store.dispatch(
    setEntries(
        require('./entries.json')
    )
);
