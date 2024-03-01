import { FC } from "react";
import "./Projects.scss";
import { ProjectType } from "./Projects";

const ProjectTemplate: FC<{ project: ProjectType }> = ({ project }) => {
  return (
    <div className="project-template">
      <div className="project-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="project-btns">
          <button>Code</button>
          <button>Live</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
