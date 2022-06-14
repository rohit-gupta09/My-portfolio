import React from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props)
{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
        <li className="nav-item mx-3">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Skills</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Projects</a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success mx-2" type="submit">Resume</button>
      </form>
    </div>
  </div>
</nav>
    )
}
Navbar.prototype={
    title:PropTypes.string
}
Navbar.defaultProps={
    title:"Set Name Here"
}