import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import NavbarComponent from "./components/NavbarComponent";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <NavbarComponent /> */}
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
