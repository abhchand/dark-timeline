import CharacterFilter from './CharacterFilter/CharacterFilter';
import DayFilter from './DayFilter/DayFilter';
import DisplayOrderToggle from './DisplayOrderToggle/DisplayOrderToggle';
import EpisodeFilter from './EpisodeFilter/EpisodeFilter';
import PropTypes from 'prop-types';
import React from 'react';
import ResetFilters from './ResetFilters/ResetFilters';
import YearFilter from './YearFilter/YearFilter';

import './Header.css';

class Header extends React.Component {
  static propTypes = {
    updateToggle: PropTypes.func.isRequired,
    updateFilters: PropTypes.func.isRequired,
    resetFilters: PropTypes.func.isRequired,
    displayOrder: PropTypes.string.isRequired,
    filters: PropTypes.object.isRequired
  };

  render() {
    return (
      <div className="header">
        <DisplayOrderToggle
          displayOrder={this.props.displayOrder}
          onChange={this.props.updateToggle} />
        <EpisodeFilter
          filters={this.props.filters}
          onChange={this.props.updateFilters} />
        <YearFilter
          filters={this.props.filters}
          onChange={this.props.updateFilters} />
        <DayFilter
          filters={this.props.filters}
          onChange={this.props.updateFilters} />
        <CharacterFilter
          filters={this.props.filters}
          onChange={this.props.updateFilters} />

        <ResetFilters
          onClick={this.props.resetFilters} />
      </div>
    );
  }
}

export default Header;
