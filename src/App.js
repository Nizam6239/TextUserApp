import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import {TextForm}  from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.
  const [green,setGreen] = useState('light');
  const [alert, setAlert] = useState(null);
   const showAlert = (message,type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  const toggleMode1 = () => {
    if(green === 'light' && mode ==='light'){
    setGreen('green');
    document.body.style.backgroundColor = '#A1EEBD';
    showAlert("Green Mode has been enabled","success");
    }
    else{
      setGreen('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  const toggleMode = () => {
    if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
  }
  return (
    <>
    <Navbar title="TextUserApp"  mode={mode} toggleMode={toggleMode} toggleMode1={toggleMode1} aboutText="About us"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <About /> */}
    <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </>
  );
}

export default App;
