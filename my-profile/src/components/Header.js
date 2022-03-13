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
      </React.Fragment>
    );
  }
}
export default Header;
