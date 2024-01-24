import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import {TextForm}  from './components/TextForm';
import React, { useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not.
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
  const toggleMode = () => {
    if(mode === 'dark'){
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light Mode has been enabled","success");
    // document.title = 'TextUserApp - Light Mode';
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
      // document.title = 'TextUserApp - Dark Mode';
    }
  }
  return (
    <Router>
    <Navbar title="TextUserApp"  mode={mode} toggleMode={toggleMode}  aboutText="About us"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route exact path="/about" element={<About mode={mode}/>}/>
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading="TextUserApp - Word Counter, Character Counter, Removes extra spaces" mode={mode}/>} />
    </Routes>
    </div> 
    </Router>
  );
}

export default App;
