import About from './About/About';
import React from 'react';
import Timeline from './Timeline/Timeline';

import './App.css';

function App() {
  return (
    <div className="app">
      <img className="title-card" src={process.env.PUBLIC_URL + '/dark-title-card.png'} width="490px" />

      <div className="coming-soon">
        This timeline covers Seasons 1 & 2. Season 3 is coming soon!
      </div>

      <div className="intro">
        <h1>Explore the Timeline of 'Dark'</h1>

        <p>Below, you can explore each scene in chronological order of the timeline, or in the televised episode order.</p>
        <p>You may also find the <a target='_blank' href='https://dark-netflix.fandom.com/'>Dark Wiki</a> and the <a target='_blank' href='https://en.wikipedia.org/wiki/Dark_(TV_series)#Family_tree'>Family Tree</a> to be useful references.</p>

        <About />

      </div>

      <Timeline />
    </div>
  );
}

export default App;
