import React from 'react';
import PropTypes from 'prop-types';

import './Scene.css';

class Scene extends React.Component {
  static propTypes = {
    scene: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];
  }

  render() {
    const { scene } = this.props;
    const month = this.months[parseInt(scene.date.month, 10) - 1];

    return (
      <div className="scene" data-id={`${scene.season}-${scene.episode}-${scene.scene}`}>
        <a target="_blank" href={scene.image.original} ><img src={scene.image.thumb} /></a>
        <h5 className="date">
          {scene.date.day} {month} {scene.date.year}
        </h5>
        <p className="description">{scene.description}</p>
        <h5 className="episode">S{scene.season} E{scene.episode}</h5>
      </div>
    );
  }

}

export default Scene;
