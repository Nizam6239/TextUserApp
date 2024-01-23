import React from 'react'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
      </ul>
      {/* <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{marginLeft:'800px'}}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckCheckedDisabled" />
        <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Enable Dark Mode</label>
      </div>
      <div className={`form-check text-${props.mode==='light'?'dark':'light'}`} style={{marginLeft:'10px',paddingLeft:'50px'}}>
        <input className="form-check-input" type="radio" onClick={props.toggleMode1} name="flexRadioDefault" id="flexRadioDefault1"/>
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Enable green Theme 
        </label>
      </div>
</div> 
  </nav>
  )
}

