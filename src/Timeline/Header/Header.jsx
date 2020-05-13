import PropTypes from 'prop-types';
import React from 'react';
import DisplayOrderToggle from './DisplayOrderToggle/DisplayOrderToggle';

import './Header.css';

class Header extends React.Component {
  static propTypes = {
    handleToggle: PropTypes.func.isRequired,
    displayOrder: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="header">
        <DisplayOrderToggle
          displayOrder={this.props.displayOrder}
          handleToggle={this.props.handleToggle} />
      </div>
    );
  }
}

export default Header;
