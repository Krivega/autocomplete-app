import React from 'react';
import PropTypes from 'prop-types';
import styles from './entry-item.scss';

class EntryItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onSelect(this.props.id);
  }

  render() {
    return (
      <div className={styles.entry} onClick={this.handleClick}>
        <div className={styles.entry__preview}>
          <img className={styles.entry__preview__img} src={this.props.preview} />
        </div>
        <div className={styles.entry__content}>
          <div className={styles.entry__name}>{this.props.name}</div>
          <div className={styles.entry__description}>{this.props.description}</div>
        </div>
      </div>
    );
  }
};

EntryItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default EntryItem;
