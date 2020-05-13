import React from 'react';
import Header from './Header/Header';
import Scenes from './Scenes/Scenes';

import './Timeline.css';

class Timeline extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      displayOrder: 'episodic'
    }
  }

  handleToggle(e) {
    this.setState({
      displayOrder: e.target.checked ? 'chronological' : 'episodic'
    });
  }

  render() {
    return (
      <div className="timeline">
        <Header handleToggle={this.handleToggle} displayOrder={this.state.displayOrder} />
        <Scenes displayOrder={this.state.displayOrder} />
      </div>
    );
  }

}

export default Timeline;
