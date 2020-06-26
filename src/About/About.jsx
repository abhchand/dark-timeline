import React from 'react';

import './About.css';

class About extends React.Component {

  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      isModalOpen: false
    };
  }

  openModal() {
    this.setState({ isModalOpen: true });
  }

  closeModal() {
    this.setState({ isModalOpen: false });
  }

  renderButton() {
    return (
      <button className="about-toggle" onClick={this.openModal}>
        About this project
      </button>
    );
  }

  renderContent() {
    return (
      <div className="about modal">
        <div className="modal-content">
          <p>This is a fan-made project to document the timeline of the TV series <a target='_blank' href='https://en.wikipedia.org/wiki/Dark_(TV_series)'>Dark</a>. It was made by <a target='_blank' href='https://abhchand.me'>@abhchand</a>.</p>
          <p>If you'd like to build your own visualizations, <a href={process.env.PUBLIC_URL + '/data.json'}>the data set for episodes</a> is free to use.</p>
          <p>If you've found this or any other of my projects useful, I would greatly appreciate if you could <a target="_blank" href="https://www.buymeacoffee.com/abhchand">buy me a coffee!</a> ☕</p>

          <button className="close" onClick={this.closeModal}>Close</button>
        </div>
      </div>
    );
  }

  render() {
    return this.state.isModalOpen ? this.renderContent() : this.renderButton();
  }
}

export default About;
