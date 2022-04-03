import React from "react";
import Headshot from "../images/pic.jpg";

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
              <p className="body-copy text-centertext-sm-start">
                "I am a web developer specializing in front-end-developer,
                currently living in the Westborough, MA."
              </p>
              <p className="body-copy text-centertext-sm-start">
                I discovered the world of web development and found it to be
                another challenging, yet fulfilling, outlet for my creativity.
                Web development has allowed me to successfully fuse my passion
                for both design and technology.
              </p>
              <p className="body-copy text-centertext-sm-start">
                My development experience has allowed me to employ the use of
                foundational tools, such as HTML 5, CSS 3, and vanilla
                JavaScript, as well as web and mobile development frameworks
                &amp; libraries, such as SASS, React.js, and React Native.
              </p>
              <p className="body-copy text-centertext-sm-start">
                Take a look through the below samples of my work, and feel free
                to send me a message. I'd love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
