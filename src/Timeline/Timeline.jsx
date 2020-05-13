import React from 'react';
import Header from './Header/Header';
import Scenes from './Scenes/Scenes';

import './Timeline.css';

class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.updateToggle = this.updateToggle.bind(this);
    this.updateFilters = this.updateFilters.bind(this);

    this.state = {
      displayOrder: 'episodic',
      filters: {
        time: null,
        episode: null
      }
    }
  }

  updateToggle(e) {
    this.setState({
      displayOrder: e.target.checked ? 'chronological' : 'episodic'
    });
  }

  updateFilters(key, value) {
    let { filters } = this.state;
    filters[key] = value;

    this.setState({ filters: filters });
  }

  render() {
    return (
      <div className="timeline">
        <Header
          updateToggle={this.updateToggle}
          updateFilters={this.updateFilters}
          displayOrder={this.state.displayOrder}
          filters={this.state.filters} />
        <Scenes
          displayOrder={this.state.displayOrder}
          filters={this.state.filters} />
      </div>
    );
  }

}

export default Timeline;
