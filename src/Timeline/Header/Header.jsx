import PropTypes from 'prop-types';
import React from 'react';
import Toggle from 'react-toggle'

import './Header.css';
import "react-toggle/style.css"

class Header extends React.Component {
  static propTypes = {
    handleToggle: PropTypes.func.isRequired,
    displayOrder: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.renderLabel = this.renderLabel.bind(this);
  }

  renderLabel() {
   const copy = {
    chronological: 'Viewing in chronological order of events',
    episodic: 'Viewing in televised episode order'
   }

   return copy[this.props.displayOrder];
  }

  render() {
    return (
      <div className="header">
        <div className="toggle">
          <Toggle
            id='display-order-toggle'
            defaultChecked={false}
            icons={false}
            onChange={this.props.handleToggle} />
          <label htmlFor='display-order-toggle'>{this.renderLabel()}</label>
        </div>
      </div>
    );
  }
}

export default Header;
