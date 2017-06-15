import React from 'react';
import Filter from './containers/filter';
import EntriesList from './containers/entries-list';
import styles from './app.scss';

const App = () => (
  <div className={styles.app}>
     <div className={styles.app__inner}>
       <Filter />
       <EntriesList />
     </div>
  </div>
);

export default App;
