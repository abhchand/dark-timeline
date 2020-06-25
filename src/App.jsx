import React from 'react';
import Timeline from './Timeline/Timeline';

import './App.css';

function App() {
  return (
    <div className="app">
      <img className="title-card" src={process.env.PUBLIC_URL + '/dark-title-card.png'} width="490px" />

      <div className="intro">
        <h1>Explore the Timeline of 'Dark'</h1>

        <p>If you'd like to build your own visualizations, <a href={process.env.PUBLIC_URL + '/data.json'}>the data set for episodes</a> is free to use.</p>
        <p>If you've found this or any other of my projects useful, I would greatly appreciate if you could <a target="_blank" href="https://www.buymeacoffee.com/abhchand">buy me a coffee!</a></p>
      </div>

      <div className="coming-soon">
        This timeline covers Seasons 1 & 2. Season 3 is coming soon!
      </div>

      <Timeline />
    </div>
  );
}

export default App;
