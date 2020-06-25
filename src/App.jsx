import React from 'react';
import Timeline from './Timeline/Timeline';

import './App.css';

function App() {
  return (
    <div className="app">
      <img className="title-card" src={process.env.PUBLIC_URL + '/dark-title-card.png'} width="490px" />

      <div className="intro">
        <h1>Explore the Timeline of 'Dark'</h1>
        <p>The TV Series <a href="https://en.wikipedia.org/wiki/Dark_(TV_series)">Dark</a> has a complex storyline that takes place over several time periods.</p>
        <p>Below, you can explore each scene in chronological order of the timeline, or in the televised episode order.</p>
        <p>If you've found this or any other of my projects useful, I would greatly appreciate if you could <a target="_blank" href="https://www.buymeacoffee.com/abhchand">buy me a coffee!</a></p>
      </div>

      <Timeline />
    </div>
  );
}

export default App;
