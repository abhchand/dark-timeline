import React from 'react';
import Scene from './Scene/Scene';
import PropTypes from 'prop-types';

import './Scenes.css';

class Scenes extends React.Component {
  static propTypes = {
    displayOrder: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.fetchItems = this.fetchItems.bind(this);
    this.orderedScenes = this.orderedScenes.bind(this);
    this.renderScenes = this.renderScenes.bind(this);

    this.state = {
      scenes: []
    }
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems() {
    const self = this;

    fetch("/data/1.json").
      then(function(response) { return response.json(); }).
      then(function(result) { self.setState({ scenes: result.data }); });
  }

  orderedScenes() {
    if (this.props.displayOrder === 'episodic') {
      return this.state.scenes;
    }

    return this.state.scenes.slice().sort((a, b) => a.occurredAt > b.occurredAt);
  }

  renderScenes() {
    if (!this.state.scenes) {
      return null;
    }

    return (
      this.orderedScenes().map((scene) => {
        return <Scene scene={scene} />;
      })
    );
  }

  render() {
    return (
      <div className="scenes">
        {this.renderScenes()}
      </div>
    );
  }

}

export default Scenes;
