import React from 'react';
import PropTypes from 'prop-types';

import './DayFilter.css';

class DayFilter extends React.Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.days = [
      { id: '', value: 'All' },

      {id: '06-20', value: 'Jun 20'},
      {id: '06-21', value: 'Jun 21'},
      {id: '06-22', value: 'Jun 22'},
      {id: '06-23', value: 'Jun 23'},
      {id: '06-24', value: 'Jun 24'},
      {id: '06-25', value: 'Jun 25'},
      {id: '06-26', value: 'Jun 26'},
      {id: '06-27', value: 'Jun 27'},

      {id: '11-04', value: 'Nov 4'},
      {id: '11-05', value: 'Nov 5'},
      {id: '11-06', value: 'Nov 6'},
      {id: '11-07', value: 'Nov 7'},
      {id: '11-08', value: 'Nov 8'},
      {id: '11-09', value: 'Nov 9'},
      {id: '11-10', value: 'Nov 10'},
      {id: '11-11', value: 'Nov 11'},
      {id: '11-12', value: 'Nov 12'},
    ]
  }

  onChange(e) {
    let value = e.currentTarget.value;

    if (value === '') {
      value = null;
    }

    this.props.onChange('day', value);
  }

  render() {
    return (
      <div className="day-filter header-block">
        <label htmlFor='day-filter'>
          Day
        </label>
        <select
          id="day-filter"
          onChange={this.onChange}
          value={this.props.filters.day || ''}>
          {
            this.days.map((option, _i) => {
              return (
                <option key={`day-filter-${option.id}`} value={option.id}>
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

export default DayFilter;
