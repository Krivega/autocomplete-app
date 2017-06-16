import React from 'react';
import Filter from './filter';
import EntriesList from './entries-list';
import styles from './autocomplete.scss';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.onSelectItem = this.onSelectItem.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSelectItem(selectedName) {
    this.setState({
      selectedName
    });
  }

  onChange(filter) {
    this.setState({
      selectedName: ''
    });
    this.props.onChange(filter);
  }

  render() {
    return (
      <div className={styles.autocomplete}>
        <div className={styles.autocomplete__inner}>
          <Filter
            onChange={this.onChange}
            onFocus={this.props.onFocus}
            value={this.state.selectedName}
          />
          <EntriesList
            entries={this.props.entries}
            more={this.props.more}
            onMoreClick={this.props.onMoreClick}
            onSelectItem={this.onSelectItem}
          />
        </div>
      </div>
    );
  }
};

export default Autocomplete;
