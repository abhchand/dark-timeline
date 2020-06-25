import React from 'react';
import PropTypes from 'prop-types';

import './EpisodeFilter.css';


class EpisodeFilter extends React.Component {
  static propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.episodes = [
      { id: '', value: 'All' },
      { id: 's1e01', value: 'S1 E01' },
      { id: 's1e02', value: 'S1 E02' },
      { id: 's1e03', value: 'S1 E03' },
      { id: 's1e04', value: 'S1 E04' },
      { id: 's1e05', value: 'S1 E05' },
      { id: 's1e06', value: 'S1 E06' },
      { id: 's1e07', value: 'S1 E07' },
      { id: 's1e08', value: 'S1 E08' },
      { id: 's1e09', value: 'S1 E09' },
      { id: 's1e10', value: 'S1 E10' },

      { id: 's2e01', value: 'S2 E01' },
      { id: 's2e02', value: 'S2 E02' },
      { id: 's2e03', value: 'S2 E03' },
      { id: 's2e04', value: 'S2 E04' },
      { id: 's2e05', value: 'S2 E05' },
      { id: 's2e06', value: 'S2 E06' },
      { id: 's2e07', value: 'S2 E07' },
      { id: 's2e08', value: 'S2 E08' }
    ]
  }

  onChange(e) {
    let value = e.currentTarget.value;

    if (value === '') {
      value = null;
    }

    this.props.onChange('episode', value);
  }

  render() {
    return (
      <div className="episode-filter header-block">
        <label htmlFor='episode-filter'>
          Episode
        </label>
        <select
          id="episode-filter"
          onChange={this.onChange}
          value={this.props.filters.episode || ''}>
          {
            this.episodes.map((option, _i) => {
              return (
                <option key={`episode-filter-${option.id}`} value={option.id}>
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

export default EpisodeFilter;
