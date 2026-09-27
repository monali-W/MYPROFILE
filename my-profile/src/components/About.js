import React from "react";
import Headshot from "../images/pic.jpg";
import HtmlIcon from "../images/icon-html.svg";
import JsIcon from "../images/icon-js.svg";
import ReactIcon from "../images/icon-react.svg";
import CssIcon from "../images/icon-css.svg";
import AngularIcon from "../images/icon-angular.svg";
import TypeScriptIcon from "../images/icon-typescript.svg";
import NxIcon from "../images/icon-nx.svg";
// import { Transition } from "react-transition-group";

function About() {
  return (
    <section id="about-section">
      <div className="container">
        <div className="row heading-div">
          <div className="col">
            <h3 className="heading-medium mt-5">About Me</h3>
          </div>
        </div>
        <div id="about-content-div" className="row align-items-center">
          <div
            id="headshot-div"
            className="col-12 col-lg-6 py-3"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="1000"
          >
            <img
              id="headshot-img"
              className="mx-auto d-block"
              src={Headshot}
              alt=""
            />
          </div>
          <div
            id="about-text"
            className="col-12 col-lg-6 mt-3 mt-lg-0 d-flex align-items-center justify-content-center"
          >
            <div>
              <h4 className="pull-quote text-center text-sm-start">
                Hi, I am Monali. Nice to meet you!
              </h4>
              <p className="body-copy text-center text-sm-start">
                "I am a Lead Front-End Developer specializing in Angular,
                TypeScript, and Nx, currently living in Northborough, MA."
              </p>
              <p className="body-copy text-center text-sm-start">
                I discovered the world of web development and found it to be
                another challenging, yet fulfilling, outlet for my creativity.
                Web development has allowed me to successfully fuse my passion
                for both design and technology.
              </p>
              <p className="body-copy text-center text-sm-start">
                I currently lead front-end architecture for AspenTech's
                engineering-simulation platform, spanning cloud web apps,
                desktop UIs embedded via WebView2, and shared component
                libraries used across a large Nx monorepo &mdash; working
                with TypeScript, RxJS, NgRx, Signals, and GraphQL.
              </p>
              <p className="body-copy text-center text-sm-start">
                Outside of work, I keep learning and building with React and
                React Native through freelance and personal projects &mdash;
                it's my way of staying hands-on with the broader front-end
                ecosystem beyond my day-to-day Angular work.
              </p>
              <p className="body-copy text-center text-sm-start">
                Take a look through the below samples of my work, and feel free
                to send me a message. I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>

        <div
          id="stack-div"
          className="row position-relative mx-auto"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="heading-div col-12 text-center">
            <h3 className="font-light mt-3">My Dev Stack</h3>
          </div>
          <div
            id="stack-icon-div"
            className="col-12 d-flex flex-nowrap justify-content-center align-items-center"
          >
            <div className="stack-icon-item py-2 text-center">
              <img src={AngularIcon} className="stack-icon" alt="Angular" />
            </div>
            <div className="stack-icon-item py-2 text-center">
              <img src={ReactIcon} className="stack-icon" alt="React JS" />
            </div>
            <div className="stack-icon-item py-2 text-center">
              <img
                src={TypeScriptIcon}
                className="stack-icon"
                alt="TypeScript"
              />
            </div>
            <div className="stack-icon-item py-2 text-center">
              <img src={JsIcon} className="stack-icon" alt="Javascript ES6" />
            </div>
            <div className="stack-icon-item py-2 text-center">
              <img src={HtmlIcon} className="stack-icon" alt="HTML 5" />
            </div>
            <div className="stack-icon-item py-2 text-center">
              <img src={CssIcon} className="stack-icon" alt="CSS 3" />
            </div>
            <div className="stack-icon-item py-2 text-center">
              <img src={NxIcon} className="stack-icon" alt="Nx" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
