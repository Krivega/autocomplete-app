import React from 'react';
import PropTypes from 'prop-types';
import styles from './filter.scss';

class Filter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(props) {
    const value = props.value;

    if (value) {
      this.setState({
        value
      });
      this.props.onChange({
        value
      });
    }
  }

  handleFocus(event) {
    this.props.onFocus({
      value: event.target.value
    });
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      value
    });
    this.props.onChange({
      value
    });
  }

  render() {
    return (
      <div className={styles.filter}>
        <input
          className={styles.filter__input}
          value={this.state.value}
          type="text"
          onFocus={this.handleFocus}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default Filter;
