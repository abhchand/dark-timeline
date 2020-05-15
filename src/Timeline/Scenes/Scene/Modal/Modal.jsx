import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import './Modal.css';

class Modal extends React.Component {
  static propTypes = {
    scene: PropTypes.object.isRequired,
    close: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.renderImages = this.renderImages.bind(this);
    this.renderDescription = this.renderDescription.bind(this);

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

  renderImages(scene) {
    const urls = scene.images ? scene.images.map(i => i.original) : ['/screenshots/placeholder.jpg'];

    return urls.map((url) => {
      return <a target="_blank" href={url} ><img src={url} /></a>;
    });
  }

  renderDescription(scene) {
    return <ReactMarkdown source={scene.description} />;
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

          <p className="description">{this.renderDescription(scene)}</p>

          <div className="images">
            {this.renderImages(scene)}
          </div>
        </div>
      </div>
    );
  }

}

export default Modal;
