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
                    WEB DEVELOPER
                  </h4>
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
