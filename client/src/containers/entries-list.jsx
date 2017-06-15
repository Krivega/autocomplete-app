import {connect} from 'react-redux';
import EntriesList from '../components/entries-list';
import {loadMore, selectEntry} from '../actions';

const mapStateToProps = (state) => {
  const entriesData =  state.get('entriesData').toJS();

  return entriesData;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onMoreClick: () => {
      dispatch(loadMore());
    },

    onSelectItem: (id) => {
      dispatch(selectEntry(id));
    }
  };
};

const FilteredEntriesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(EntriesList);

export default FilteredEntriesList;
