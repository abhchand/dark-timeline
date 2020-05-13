import Loading from './Loading/Loading';
import React from 'react';
import Scene from './Scene/Scene';
import PropTypes from 'prop-types';

import './Scenes.css';

class Scenes extends React.Component {
  static propTypes = {
    displayOrder: PropTypes.string.isRequired,
    filters: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.orderedScenes = this.orderedScenes.bind(this);
    this.renderScenes = this.renderScenes.bind(this);

    this.state = {
      isLoading: true,
      data: null,
      scenes: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const self = this;

    this.setState({ isLoading: true });

    fetch("/data.json").
      then(function(response) { return response.json(); }).
      then(function(result) { self.setState({ scenes: result.data, isLoading: false }); });
  }

  orderedScenes() {
    const { displayOrder, filters } = this.props;
    let scenes = this.state.scenes.slice();

    if (displayOrder === 'chronological') {
      scenes.sort((a, b) => a.occurredAt > b.occurredAt);
    }

    return this.filter(scenes, filters);
  }

  filter(scenes, filters) {
    if (filters.episode) {
      scenes = scenes.filter((scene) => {
        const episode = `s${scene.season}e${scene.episode}`;
        return episode === filters.episode;
      })
    }

    return scenes;
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
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <div className="scenes">
        {this.renderScenes()}
      </div>
    );
  }

}

export default Scenes;
