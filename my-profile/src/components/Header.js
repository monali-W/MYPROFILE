import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col name align-item-center">
                <h2>MONALI WASEKAR</h2>
                <h3> UI Developer</h3>
              </div>
            </div>
          </div>
        </header>
        <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutus.html">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="project.html">
                Project
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contactme.html">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}
export default Header;
