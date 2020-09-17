import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Timeline from './components/timeline'

function App() {
  return (
    <div id="me-page">
      <div id="container-wrap">
        <Sidebar />
        <div id="me-main">
          <Introduction />
          <About />
          <Skills />
          <Timeline />
        </div>
      </div>
    </div>
  );
}

export default App;
