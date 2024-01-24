import React from 'react'
//import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>
      </ul>

      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{marginLeft:'1000px'}}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckCheckedDisabled" />
        <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Enable Dark Mode</label>
      </div>
</div> 
  </nav>
  )
}

