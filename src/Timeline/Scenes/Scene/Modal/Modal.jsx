import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';

class Modal extends React.Component {
  static propTypes = {
    scene: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.renderImage = this.renderImage.bind(this);

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

  renderImage(scene) {
    const src = scene.images ? scene.images[0].original : '/screenshots/placeholder.jpg';

    return <img src={src} />;
  }

  render() {
    const { scene } = this.props;
    const month = this.months[parseInt(scene.date.month, 10) - 1];

    return (
      <div className="scene-modal modal" data-id={`${scene.season}-${scene.episode}-${scene.scene}`}>
        <div className="modal-content">
          <div className="close" onClick={this.props.close}>close</div>

          <h5 className="date">{scene.date.day} {month} {scene.date.year}</h5>
          <h6 className="episode">S{scene.season} E{scene.episode}</h6>

          <p className="description">{scene.description}</p>

          <a target="_blank" href={scene.images[0].original} >
            {this.renderImage(scene)}
          </a>

        </div>
      </div>
    );
  }

}

export default Modal;
