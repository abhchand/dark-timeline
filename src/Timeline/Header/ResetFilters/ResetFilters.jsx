import PropTypes from 'prop-types';
import React from 'react';

import './ResetFilters.css';

function ResetFilters(props) {
  return (
    <div onClick={props.onClick} className='reset-filters'>
      Clear all filters
    </div>
  );
}

ResetFilters.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default ResetFilters;
