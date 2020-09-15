import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import About from './About';
import WorkExperience from './WorkExperience';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <About/>
      <WorkExperience/>
    </div>
  );
}

export default App;
