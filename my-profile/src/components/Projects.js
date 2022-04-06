import React, { Component } from "react";
import { PROJECTS } from "../shared/myProjects";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      selectedProject: null
    };
  }

  render() {
    // const displayedProjects = this.state.projects;
    const displayProject = this.state.projects.map(project => {
      return (
        <>
          {/* <div key={project.id} className="col-md-5 m-1">
            <Card onClick={() => this.onCampsiteSelect(project)}>
              <CardImg width="100%" src={project.image} alt={project.name} />
            </Card>
          </div> */}
          <div row row-content>
            <div class="col mx-auto">
              <div
                id="homeCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div key="s1" class="carousel-item active">
                    <img class="d-block w-100" src={project.image1} alt="" />
                  </div>
                  <div key="s2" class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={project.image2}
                      alt=" React LAke Campground"
                    />
                  </div>
                  <div key="s3" class="carousel-item">
                    <img
                      class="d-block w-100"
                      src={project.image1}
                      alt=" Chrome React Campground"
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#homeCarousel"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#homeCarousel"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });

    return (
      <section id="projects-section">
        <div id="projects-div" className="container">
          <div className="heading-div">
            <h3 className="heading-medium"> Projects </h3>
          </div>
        </div>

        <div className="container">
          <div className="row">{displayProject}</div>
          <div className="row">
            {/* <div className="col-md-5 m-1">
              {this.renderSelectedProject(this.state.selectedProject)}
            </div> */}
          </div>
        </div>

        <div
          id="call-to-action-div"
          className="container row position-relative mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
        >
          <div className="heading-div col-12 text-center">
            <h3 className="font-light">Like what you see?</h3>
          </div>
          <div>
            <p className="body-copy">
              Send me a message, or feel free to connect with me via my social
              media links below.
            </p>
          </div>
        </div>
      </section>
    );
  }
}
export default Projects;
