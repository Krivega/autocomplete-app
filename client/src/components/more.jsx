import React from 'react';
import PropTypes from 'prop-types';
import styles from './more.scss';

class More extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return (
      <button className={styles.more} type="text" onClick={this.handleOnClick}>more</button>
    );
  }
};

More.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default More;
