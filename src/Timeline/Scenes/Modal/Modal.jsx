import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

import './Modal.css';

class Modal extends React.Component {
  static propTypes = {
    scene: PropTypes.object.isRequired,
    sceneModalIdx: PropTypes.number.isRequired,
    lastSceneModalIdx: PropTypes.number.isRequired,
    close: PropTypes.func.isRequired,
    navigateNext: PropTypes.func.isRequired,
    navigatePrev: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.renderPrev = this.renderPrev.bind(this);
    this.renderNext = this.renderNext.bind(this);
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

  renderPrev() {
    if (this.props.sceneModalIdx === 0) {
      return <div className="nav-placeholder"></div>;
    };

    return <button type="button" className="prev" onClick={this.props.navigatePrev}>← Prev</button>;
  }

  renderNext() {
    if (this.props.sceneModalIdx === this.props.lastSceneModalIdx) {
      return <div className="nav-placeholder"></div>;
    };

    return <button type="button" className="next" onClick={this.props.navigateNext}>Next →</button>;
  }

  renderImages(scene) {
    const urls = scene.images ? scene.images.map(i => i.medium) : ['/screenshots/placeholder.png'];

    return urls.map((url) => {
      return <a target="_blank" href={process.env.PUBLIC_URL + url} ><img src={process.env.PUBLIC_URL + url} /></a>;
    });
  }

  renderDescription(scene) {
    return <ReactMarkdown source={scene.description} />;
  }

  render() {
    const { scene } = this.props;
    const month = this.months[parseInt(scene.date.month, 10) - 1];

    return (
      <div className="scene-modal modal" data-id={`${scene.season}-${scene.episode}-${scene.scene}`} onClick={this.props.close}>
        <div className="modal-content">

          <button type="button" className="close" onClick={this.props.close}>close</button>

          <div className="nav">
            {this.renderPrev()}
            <div className="progress">
              {this.props.sceneModalIdx + 1} of {this.props.lastSceneModalIdx + 1}
            </div>
            {this.renderNext()}
          </div>

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
