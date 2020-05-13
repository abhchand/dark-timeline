import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal/Modal';

import './Scene.css';

class Scene extends React.Component {
  static propTypes = {
    scene: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderModal = this.renderModal.bind(this);

    this.maxDescriptionLen = 100;
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

    this.state = {
      isModalOpen: false
    }
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  trimmedDescription(description) {
    if (description.length <= this.maxDescriptionLen) return description;

    return `${description.substring(0, this.maxDescriptionLen)}...`;
  }

  renderModal(id) {
    if (!this.state.isModalOpen) { return null; }

    return <Modal key={`modal-${id}`} scene={this.props.scene} close={this.closeModal} />;
  }

  render() {
    const { scene } = this.props;
    const month = this.months[parseInt(scene.date.month, 10) - 1];
    const id = `${scene.season}-${scene.episode}-${scene.scene}`;

    return (
      [
        <div className="scene" key={id} data-id={id} onClick={this.openModal} tabIndex={0}>
          <img src={scene.image.thumb} />

          <h5 className="date">{scene.date.day} {month} {scene.date.year}</h5>
          <h6 className="episode">S{scene.season} E{scene.episode}</h6>

          <p className="description">{this.trimmedDescription(scene.description)}</p>
        </div>,
        this.renderModal()
      ]
    );
  }

}

export default Scene;
