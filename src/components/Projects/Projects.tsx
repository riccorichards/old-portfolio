import { useContext, useEffect, useRef } from "react";
import ProjectTemplate from "./ProjectTemplate";
import "./Projects.scss";
import useOnScreen from "../../hooks/useOnScreen";
import Context from "../../utils/Context";

const image =
  "https://i.pinimg.com/564x/fb/2d/94/fb2d9458e19901d43b71b6a98fb580bc.jpg";

const fake = [
  {
    id: 1,
    image,
    code: "",
    live: "",
    desc: " adipisicing elit. Unde, ducimus sunt esse porro sapiente deserunt?",
    title: "Project title",
  },
  {
    id: 2,
    image,
    code: "",
    live: "",
    desc: " adipisicing elit. Unde, ducimus sunt esse porro sapiente deserunt?",
    title: "Project title",
  },
  {
    id: 3,
    image,
    code: "",
    live: "",
    desc: " adipisicing elit. Unde, ducimus sunt esse porro sapiente deserunt?",
    title: "Project title",
  },
  {
    id: 4,
    image,
    code: "",
    live: "",
    desc: " adipisicing elit. Unde, ducimus sunt esse porro sapiente deserunt?",
    title: "Project title",
  },
  {
    id: 5,
    image,
    code: "",
    live: "",
    desc: " adipisicing elit. Unde, ducimus sunt esse porro sapiente deserunt?",
    title: "Project title",
  },
];

export interface ProjectType {
  id: number;
  image: string;
  code: string;
  live: string;
  desc: string;
  title: string;
}
const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref);

  const getContext = useContext(Context);
  useEffect(() => {
    if (isVisible) {
      getContext?.setSection("Products");
    }
  }, [isVisible, getContext]);

  return (
    <section id="Projects" ref={ref} className="projects-wrappers">
      <h1>Projects</h1>
      <div className="projects">
        {fake.map((project) => (
          <ProjectTemplate project={project} key={project.id} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
