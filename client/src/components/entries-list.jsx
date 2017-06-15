import React from 'react';
import PropTypes from 'prop-types';
import EntryItem from './entry-item';
import More from './more';
import styles from './entries-list.scss';

class EntriesList extends React.Component {
  renderEntryItem(entry) {
    return (
      <div className={styles.entries__item} key={entry.id}>
        <EntryItem
          {...entry}
          onSelect={this.props.onSelectItem}
        />
      </div>
    );
  }

  renderActions() {
    if (!this.props.more) {
      return null;
    }

    return (
      <div className={styles.entries__actions}>
        <More onClick={this.props.onMoreClick} />
      </div>
    );
  }

  render() {
    if (this.props.entries.length === 0) {
      return null;
    }

    return (
      <div className={styles.entries}>
        <div className={styles.entries__list}>
          {this.props.entries.map(this.renderEntryItem.bind(this))}
        </div>
        {this.renderActions()}
      </div>
    );
  }
};

EntriesList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired
  })).isRequired,
  more: PropTypes.bool,
  onMoreClick: PropTypes.func.isRequired,
  onSelectItem: PropTypes.func.isRequired
};

export default EntriesList;
