import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import links from "../shared/links";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };

    this.closeNav = this.closeNav.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  closeNav() {
    if (this.state.isNavOpen === true) {
      this.toggleNav();
    }
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    const navLinks = links.map(link => {
      return (
        <NavItem>
          <a
            className="nav-link"
            href={link.url}
            onClick={() => this.closeNav()}
          >
            {link.text}
          </a>
        </NavItem>
      );
    });

    return (
      <>
        <Navbar id="main-nav" dark color="faded" sticky="top" expand="sm">
          <div className="container-fluid container-xl">
            <NavbarToggler onClick={this.toggleNav} className="mr-2" />

            <Collapse
              isOpen={this.state.isNavOpen}
              navbar
              className="text-center justify-content-sm-end"
            >
              <Nav className="ml-auto" navbar>
                {navLinks}
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;
