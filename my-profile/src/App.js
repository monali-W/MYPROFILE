import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavbarComponent from "./components/NavbarComponent";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <NavbarComponent />
      <About />
      <Footer />
    </div>
  );
}

export default App;
