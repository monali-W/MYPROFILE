import React from "react";
// import { Navbar, NavbarBrand } from "reactstrap";
// import logo from "../images/logo1.png";

function NavbarComponent() {
  return (
    <nav
      id="main-nav"
      className="navbar navbar-expand-sm navbar-dark sticky-top"
    >
      <div className="container-fluid container-xl">
        {/* <a className="mr-auto navbar-brand">
          <img src="logo" alt="logo" id="logo" width="30" heigh="24"></img>
        </a> */}
        <div className="text-center">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about-section">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects-section">
                Project
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-section">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
