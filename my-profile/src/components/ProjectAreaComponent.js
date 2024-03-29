import React, { Component } from "react";
import { PROJECTS } from "../shared/myProjects";
import ProjectModal from "./ProjectModalComponent";

function ProjectThumb(props) {
  return (
    <div
      className="project-thumb"
      data-aos="fade-up"
      data-aos-delay="150"
      data-aos-duration="1000"
      style={{
        backgroundImage: `url(${props.project.image})`,
        backgroundPosition: "center"
      }}
      onClick={() => props.setActiveProject(props.project)}
    >
      {/* <img src={props.project.image} alt=""></img> */}
    </div>
  );
}
class ProjectArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      isModalOpen: false,
      activeProject: PROJECTS[0]
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.setActiveProject = this.setActiveProject.bind(this);
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  setActiveProject(project) {
    this.setState({ isModalOpen: true, activeProject: project });
    console.log(this.state.activeProject);
  }

  render() {
    const displayProject = this.state.projects;

    return (
      <section id="projects-section">
        <div id="projects-div" className="container">
          <div className="heading-div">
            <h3 className="heading-medium">Projects</h3>
          </div>
        </div>

        <div id="projects-grid">
          {displayProject.map(project => (
            <ProjectThumb
              project={project}
              setActiveProject={this.setActiveProject}
            ></ProjectThumb>
          ))}
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

        <ProjectModal
          project={this.state.activeProject}
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        />
      </section>
    );
  }
}

export default ProjectArea;
