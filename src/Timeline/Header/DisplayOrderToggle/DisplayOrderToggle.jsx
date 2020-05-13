import React from 'react';
import Toggle from 'react-toggle'
import PropTypes from 'prop-types';

import './DisplayOrderToggle.css';
import "react-toggle/style.css"

function DisplayOrderToggle(props) {
  const copy = {
    chronological: 'Viewing in chronological order of events',
    episodic: 'Viewing in televised episode order'
   }

  return (
    <div className="display-order-toggle">
      <Toggle
        id='display-order-toggle'
        defaultChecked={false}
        icons={false}
        onChange={props.handleToggle} />
      <label htmlFor='display-order-toggle'>
        {copy[props.displayOrder]}
      </label>
    </div>
  );
}

DisplayOrderToggle.propTypes = {
  handleToggle: PropTypes.func.isRequired,
  displayOrder: PropTypes.string.isRequired
}

export default DisplayOrderToggle;
