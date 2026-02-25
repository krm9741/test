import React, { Component } from "react"
import { NavLink } from "react-router-dom";

class Navigationbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               <NavLink to='/'>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" >
                    Home
                  </a>
                </li>
                </NavLink>
                <NavLink to='/login'>
                <li className="nav-item">
                  <a className="nav-link" >
                    Login
                  </a>
                </li>
                </NavLink>
                 <NavLink to='/signup'>
                <li className="nav-item">
                  <a className="nav-link" >
                    Signup
                  </a>
                </li>
                </NavLink>
                 <NavLink to='/profile'>
                <li className="nav-item">
                  <a className="nav-link" >
                    Profile
                  </a>
                </li>
                </NavLink>
                </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigationbar;
