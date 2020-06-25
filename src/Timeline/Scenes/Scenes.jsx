import Loading from './Loading/Loading';
import Modal from './Modal/Modal';
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

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.prevSceneModal = this.prevSceneModal.bind(this);
    this.nextSceneModal = this.nextSceneModal.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.orderedScenes = this.orderedScenes.bind(this);
    this.renderScenes = this.renderScenes.bind(this);

    this.state = {
      isLoading: true,
      data: null,
      scenes: null,
      sceneModalIdx: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  openModal(e) {
    this.setState({ sceneModalIdx: parseInt(e.currentTarget.dataset.id) });

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('modal-open');
  }

  closeModal(e) {
    // Only consider clicks on the direct element itself, not any
    // child elements.
    if (e.target !== e.currentTarget) return;

    this.setState({ sceneModalIdx: null });

    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('modal-open');
  }

  prevSceneModal() {
    this.setState({
      sceneModalIdx: this.state.sceneModalIdx - 1
    });
  }

  nextSceneModal() {
    this.setState({
      sceneModalIdx: this.state.sceneModalIdx + 1
    });
  }

  fetchData() {
    const self = this;

    this.setState({ isLoading: true });

    fetch("/dark-timeline/data.json").
      then(function(response) { return response.json(); }).
      then(function(result) { self.setState({ scenes: result.data, isLoading: false }); });
  }

  orderedScenes() {
    const { displayOrder, filters } = this.props;
    let scenes = this.state.scenes.slice();

    if (displayOrder === 'chronological') {
      scenes.sort((a, b) => {
        if (a.date.year < b.date.year) return -1;
        if (a.date.year > b.date.year) return 1;
        if (a.date.month < b.date.month) return -1;
        if (a.date.month > b.date.month) return 1;
        if (a.date.day < b.date.day) return -1;
        if (a.date.day > b.date.day) return 1;
        if (a.rank.chronological < b.rank.chronological) return -1;
        if (a.rank.chronological > b.rank.chronological) return 1;
      });
    } else {
      // Sort by episode
      scenes.sort((a, b) => {
        if (a.season < b.season) return -1;
        if (a.season > b.season) return 1;
        if (a.episode < b.episode) return -1;
        if (a.episode > b.episode) return 1;
        if (a.rank.episode < b.rank.episode) return -1;
        if (a.rank.episode > b.rank.episode) return 1;
      });
    }

    return this.filter(scenes, filters);
  }

  filter(scenes, filters) {
    if (filters.episode) {
      scenes = scenes.filter((scene) => {
        const episode = `s${scene.season}e${scene.episode.toString().padStart(2, '0')}`;
        return episode === filters.episode;
      });
    }

    if (filters.year) {
      scenes = scenes.filter((scene) => {
        return scene.date.year.toString() === filters.year;
      });
    }

    if (filters.day) {
      scenes = scenes.filter((scene) => {
        const day = `${scene.date.month.toString().padStart(2, '0')}-${scene.date.day.toString().padStart(2, '0')}`;
        return day === filters.day;
      });
    }

    if (filters.character) {
      scenes = scenes.filter((scene) => {
        return scene.characters.indexOf(filters.character) > -1;
      });
    }

    return scenes;
  }

  renderModal() {
    const { sceneModalIdx } = this.state;
    if (sceneModalIdx === null) { return null; }

    const scene = this.data[sceneModalIdx];

    return (
      <Modal
        key={`modal-${sceneModalIdx}`}
        scene={scene}
        sceneModalIdx={sceneModalIdx}
        lastSceneModalIdx={this.data.length - 1}
        close={this.closeModal}
        navigatePrev={this.prevSceneModal}
        navigateNext={this.nextSceneModal} />
    );
  }

  renderScenes() {
    if (!this.state.scenes) {
      return null;
    }

    return (
      this.data.map((scene, idx) => {
        return (
          <Scene
            sceneIdx={idx}
            scene={scene}
            openModal={this.openModal} />
        );
      })
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    // Re-calculate list of scenes based on current filters
    this.data = this.orderedScenes();

    return (
      <div className="scenes">
        {this.renderScenes()}
        {this.renderModal()}
      </div>
    );
  }

}

export default Scenes;
