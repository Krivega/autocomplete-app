import React from 'react';
import PropTypes from 'prop-types';
import Filter from './filter';
import EntriesList from './entries-list';
import styles from './autocomplete.scss';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedName: '',
      showList: false
    };

    this.onSelectItem = this.onSelectItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onSelectItem(selectedName) {
    this.setState({
      selectedName,
      showList: true
    });
    clearTimeout(this.blurTimeout);
  }

  onFocus() {
    this.setState({
      showList: true
    });
    this.props.onFocus();
  }

  onBlur() {
    this.blurTimeout = setTimeout(() => {
      if (this.state.selectedName === '') {
        this.setState({
          showList: false
        });
      }
    }, 100);
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
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={this.state.selectedName}
          />
          <EntriesList
            entries={this.props.entries}
            more={this.props.more}
            show={this.state.showList}
            onMoreClick={this.props.onMoreClick}
            onSelectItem={this.onSelectItem}
          />
        </div>
      </div>
    );
  }
};

Autocomplete.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default Autocomplete;
