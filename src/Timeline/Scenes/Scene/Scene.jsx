import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import './Scene.css';

class Scene extends React.Component {
  static propTypes = {
    sceneIdx: PropTypes.number.isRequired,
    scene: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.renderImage = this.renderImage.bind(this);
    this.renderDescription = this.renderDescription.bind(this);
    this.isTimeTravel = this.isTimeTravel.bind(this);

    this.maxDescriptionLen = 150;
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

  trimmedDescription(description) {
    if (description.length <= this.maxDescriptionLen) return description;

    return `${description.substring(0, this.maxDescriptionLen)}...`;
  }

  renderImage(scene) {
    const src = scene.images ? scene.images[0].thumb : '/screenshots/placeholder-thumb.png';

    return <img src={process.env.PUBLIC_URL + src} />;
  }

  renderDescription(scene) {
    return <ReactMarkdown source={this.trimmedDescription(scene.description)} />;
  }

  isTimeTravel(scene) {
    return scene.timeTravel && scene.timeTravel.id;
  }

  render() {
    const { scene } = this.props;
    const month = this.months[parseInt(scene.date.month, 10) - 1];
    const timeTravelClass = this.isTimeTravel(scene) ? 'scene--time-travel' : '';

    return (
      <div className={`scene ${timeTravelClass}`} data-id={this.props.sceneIdx} onClick={this.props.openModal} tabIndex={0}>
        {this.renderImage(scene)}

        <h5 className="date">{scene.date.day} {month} {scene.date.year}</h5>
        <h6 className="episode">S{scene.season} E{scene.episode}</h6>

        <p className="description">{this.renderDescription(scene)}</p>
      </div>
    );
  }

}

export default Scene;
