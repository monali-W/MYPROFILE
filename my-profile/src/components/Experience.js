import React from "react";
import { ROLES } from "../shared/experience";

function Experience() {
  return (
    <section id="experience-section">
      <div className="container">
        <div className="row heading-div">
          <div className="col">
            <h3 className="heading-medium mt-5">Experience</h3>
          </div>
        </div>

        {ROLES.map(role => (
          <div key={role.id} className="role-block">
            <div
              id="experience-role-div"
              className="row"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
            >
              <div className="col-12">
                <h4 className="pull-quote text-center text-sm-start">
                  {role.company ? (
                    <>
                      {role.role} &mdash; {role.company}
                      {role.location ? `, ${role.location}` : ""}
                    </>
                  ) : (
                    role.role
                  )}
                </h4>
                {role.dates && (
                  <p className="role-dates text-center text-sm-start">
                    {role.dates}
                  </p>
                )}
                <p className="body-copy text-center text-sm-start">
                  {role.summary}
                </p>
              </div>
            </div>

            <div className="row experience-highlight-grid">
              {role.highlights.map((item, index) => (
                <div
                  key={item.id}
                  className={
                    role.highlights.length === 1
                      ? "col-12 col-md-8 py-3"
                      : "col-12 col-md-6 py-3"
                  }
                  data-aos="fade-up"
                  data-aos-delay={50 + index * 50}
                  data-aos-duration="1000"
                >
                  <div className="experience-card h-100">
                    <h4>{item.name}</h4>
                    <div className="experience-card-stack">{item.stack}</div>
                    <p className="body-copy">{item.blurb}</p>
                    {item.link && (
                      <a
                        className="experience-card-link"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {item.linkLabel || "View Live"} &rarr;
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
