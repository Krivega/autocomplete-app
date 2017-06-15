import {connect} from 'react-redux';
import Autocomplete from '../components/autocomplete';
import {
  loadMore,
  setFilter
} from '../actions';

const mapStateToProps = (state) => {
  let entriesData = state.get('entriesData').toJS();
  const id = state.get('selectedEntryId');

  if (id !== undefined) {
    const entries = state.getIn(['entriesData', 'entries']);
    const entry = entries.find((entry) => entry.get('id') === id);

    if (entry) {
      entriesData = Object.assign(entriesData, {
        selectedName: entry.get('name')
      });
    }
  }

  return entriesData;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (filter) => {
      dispatch(setFilter(filter));
    },

    onFocus: (filter) => {
      if (!filter.value) {
        dispatch(setFilter());
      }
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
