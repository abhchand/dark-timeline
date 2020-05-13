import React from 'react';
import Timeline from './Timeline/Timeline';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="intro">
        <h1>Dark Series Timeline</h1>
        <p>The TV Series Dark has a complex storyline that takes place over several time periods.</p>
        <p>Below, you can explore each scene in chronological order of the timeline, or in the aired episode order.</p>
      </div>

      <Timeline />
    </div>
  );
}

export default App;
