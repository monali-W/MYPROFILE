import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section id="head_section">
          <header className="jumbotron jumbotron-fluid">
            <div className="container">
              <div className="row">
                <div className="col name align-item-center">
                  <h1
                    className="mb-4"
                    data-aos="fade-right"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    MONALI WASEKAR
                  </h1>
                  <h4
                    data-aos="fade-left"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                  >
                    {" "}
                    LEAD FRONT-END DEVELOPER
                  </h4>
                  <a
                    id="resume-download-btn"
                    href={`${process.env.PUBLIC_URL}/resume.pdf`}
                    download="Monali-Wasekar-Resume.pdf"
                    data-aos="fade-up"
                    data-aos-delay="150"
                    data-aos-duration="1000"
                  >
                    Download R&eacute;sum&eacute;
                  </a>
                </div>
              </div>
            </div>
          </header>
        </section>
      </React.Fragment>
    );
  }
}
export default Header;
