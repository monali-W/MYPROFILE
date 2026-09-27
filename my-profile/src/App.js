import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Experience from "./components/Experience";
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
      <Sidebar />

      <div id="mobile-header-nav">
        <Header />
        <NavbarComponent />
      </div>

      <main id="main-content">
        <About />
        <Experience />
        {/* <Projects /> */}
        <ProjectArea />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
