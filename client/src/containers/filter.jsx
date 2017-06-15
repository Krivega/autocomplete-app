import {connect} from 'react-redux';
import {setFilter} from '../actions';
import Filter from '../components/filter';

const mapStateToProps = (state) => {
  const id = state.get('selectedEntryId');

  if (id === undefined) {
    return {};
  }

  const entries = state.getIn(['entriesData', 'entries']);
  const entry = entries.find((entry) => entry.get('id') === id);

  if (!entry) {
    return {};
  }

  return {
    value: entry.get('name')
  };
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
    }
  };
};

const FilteredEntriesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter);

export default FilteredEntriesList;
