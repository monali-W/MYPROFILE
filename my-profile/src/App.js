import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import About from "./components/About";
// import Projects from "./components/Projects";
import ProjectArea from "./components/ProjectAreaComponent";
import Contact from "./components/Contact";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Header />
      <NavbarComponent />
      <About />
      {/* <Projects /> */}
      <ProjectArea />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
