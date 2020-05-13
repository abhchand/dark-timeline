import React from 'react';
import PropTypes from 'prop-types';

import './YearFilter.css';

class YearFilter extends React.Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.years = [
      { id: '', value: 'All' },
      { id: '1953', value: '1953' },
      { id: '1954', value: '1954' },
      { id: '1986', value: '1986' },
      { id: '1987', value: '1987' },
      { id: '2019', value: '2019' },
      { id: '2020', value: '2020' },
      { id: '2052', value: '2052' },
      { id: '2053', value: '2053' }
    ]
  }

  onChange(e) {
    let value = e.currentTarget.value;

    if (value === '') {
      value = null;
    }

    this.props.onChange('year', value);
  }

  render() {
    return (
      <div className="year-filter header-block">
        <label htmlFor='year-filter'>
          Year
        </label>
        <select
          id="year-filter"
          onChange={this.onChange}
          value={this.props.filters.year || ''}>
          {
            this.years.map((option, _i) => {
              return (
                <option key={`year-filter-${option.id}`} value={option.id}>
                  {option.value}
                </option>
              );
            })
          }
        </select>
      </div>
    );
  }
}

export default YearFilter;
