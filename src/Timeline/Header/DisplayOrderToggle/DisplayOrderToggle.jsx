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
        onChange={props.onChange} />
      <label htmlFor='display-order-toggle'>
        {copy[props.displayOrder]}
      </label>
    </div>
  );
}

DisplayOrderToggle.propTypes = {
  displayOrder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default DisplayOrderToggle;
