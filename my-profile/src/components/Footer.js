import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div id="footer-container" className="row">
            <div className="col-12 col-sm-6 col-md-4 text-center">
              <div className="pt-3">
                <p className="body-copy">
                  <h4> Monali Wasekar </h4>
                  Let's create something great together!
                </p>
              </div>
            </div>

            <div
              id="footer-menu-div"
              className="col-12 col-sm-6 col-md-4 d-flex justify-content-center navbar"
            >
              <ul id="footer-menu" className="navbar-nav d-flex">
                <li>
                  <a className="my-nav-link" href="#about-section">
                    About Me
                  </a>
                </li>
                <li>
                  <a className="my-nav-link" href="#projects-section">
                    Projects
                  </a>
                </li>
                <li>
                  <a className="my-nav-link" href="#contact-section">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
