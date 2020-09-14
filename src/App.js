import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Welcome from './Welcome';
import About from './About';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Welcome/>
      <About />
    </div>
  );
}

export default App;
