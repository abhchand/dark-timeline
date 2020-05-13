import React from 'react';
import PropTypes from 'prop-types';

import './Scene.css';

class Scene extends React.Component {
  static propTypes = {
    scene: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
  }

  render() {
    const { scene } = this.props;

    return (
      <div className="scene" data-id={`${scene.season}-${scene.episode}-${scene.scene}`}>
        <a target="_blank" href={scene.image.original} ><img src={scene.image.thumb} /></a>
        <h4 className="episode">S{scene.season} E{scene.episode}</h4>
        <p className="description">{scene.description}</p>
      </div>
    );
  }

}

export default Scene;
