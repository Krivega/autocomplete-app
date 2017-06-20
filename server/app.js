import makeStore from './src/store';
import startServer from './src/server';
import { setEntries } from './src/actions';

const store = makeStore();

store.dispatch(
  setEntries(
    require('./entries.json')
  )
);

export default startServer(store);
