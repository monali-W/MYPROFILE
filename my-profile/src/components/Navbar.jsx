import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div class="container">
      <div class="row">
        <nav>
          <Link to="main">
            <ul className="">
              <li>
                <img src="logo1.png" alt="logo" className="logo"></img>
              </li>
              <li>
                <Link to="main" className="active">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="main">ABOUT</Link>
              </li>
              <li>
                <Link to="main">PROJECTS</Link>
              </li>
              <li>
                <Link to="main">CONTACT</Link>
              </li>
              <li>
                <button className="btn"> Get Started </button>
              </li>
            </ul>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
