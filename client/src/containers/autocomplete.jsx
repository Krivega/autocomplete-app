import { connect } from 'react-redux';
import Autocomplete from '../components/autocomplete';
import {
  loadMore,
  setFilter,
  fetchEntriesIfNeeded
} from '../actions/index';

const mapStateToProps = (state) => {
  let entriesData = state.get('entriesData').toJS();
  return entriesData;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (filter) => {
      dispatch(setFilter(filter));
    },

    onFocus: () => {
      dispatch(fetchEntriesIfNeeded());
    },

    onMoreClick: () => {
      dispatch(loadMore());
    }
  };
};

const ConnectedAutocomplete = connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);

export default ConnectedAutocomplete;
