import React from "react";
import { EXPERIENCE, HIGHLIGHTS } from "../shared/experience";

function Experience() {
  return (
    <section id="experience-section">
      <div className="container">
        <div className="row heading-div">
          <div className="col">
            <h3 className="heading-medium mt-5">Experience</h3>
          </div>
        </div>

        <div
          id="experience-role-div"
          className="row"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="col-12">
            <h4 className="pull-quote text-center text-sm-start">
              {EXPERIENCE.role} &mdash; {EXPERIENCE.company}, {EXPERIENCE.location}
            </h4>
            <p className="role-dates text-center text-sm-start">
              {EXPERIENCE.dates}
            </p>
            <p className="body-copy text-center text-sm-start">
              {EXPERIENCE.summary}
            </p>
          </div>
        </div>

        <div id="experience-highlight-grid" className="row">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={item.id}
              className="col-12 col-md-6 py-3"
              data-aos="fade-up"
              data-aos-delay={50 + index * 50}
              data-aos-duration="1000"
            >
              <div className="experience-card h-100">
                <h4>{item.name}</h4>
                <div className="experience-card-stack">{item.stack}</div>
                <p className="body-copy">{item.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
