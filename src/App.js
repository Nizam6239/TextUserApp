import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import {TextForm}  from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.
  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="TextUserApp" mode={mode} toggleMode={toggleMode} aboutText="About us"/>
    <div className="container my-3">
    {/* <About /> */}
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </>
  );
}

export default App;
