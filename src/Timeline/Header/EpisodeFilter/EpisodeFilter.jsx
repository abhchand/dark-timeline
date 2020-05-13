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
      { id: null, value: 'Filter by Episode' },
      { id: 's1e01', value: 'S1 E01' },
      { id: 's1e02', value: 'S2 E02' },
      { id: 's1e03', value: 'S3 E03' },
      { id: 's1e04', value: 'S4 E04' },
      { id: 's1e05', value: 'S5 E05' },
    ]
  }

  onChange(e) {
    this.props.onChange('episode', e.currentTarget.value);
  }

  render() {
    return (
      <div className="episode-filter">
        <select
          id="episode-filter"
          onBlur={this.onChange}
          defaultValue={this.props.filters.episode || ''}>
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
